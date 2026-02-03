'use client';

import { useState, useEffect, useRef } from 'react';
import InviteCard from './InviteCard';
import styles from './TulipCatcher.module.css';

interface Tulip {
  id: number;
  x: number;
  y: number;
  speed: number;
}

interface TulipCatcherProps {
  onComplete: () => void;
  gameCompleted: boolean;
}

export default function TulipCatcher({ onComplete, gameCompleted }: TulipCatcherProps) {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [tulips, setTulips] = useState<Tulip[]>([]);
  const [showVictory, setShowVictory] = useState(false);
  const [confetti, setConfetti] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const nextIdRef = useRef(0);
  const animationFrameRef = useRef<number>();

  const TARGET_SCORE = 10;

  useEffect(() => {
    if (gameStarted && score < TARGET_SCORE) {
      const spawnTulip = () => {
        const newTulip: Tulip = {
          id: nextIdRef.current++,
          x: Math.random() * 85 + 5, // 5-90% to keep within bounds with padding
          y: -10,
          speed: 0.3 + Math.random() * 1, // Much slower: 0.3 to 0.7
        };
        setTulips(prev => [...prev, newTulip]);
      };

      // Spawn tulips less frequently
      const spawnInterval = setInterval(spawnTulip, 400);

      // Animation loop for moving tulips (throttled)
      let lastTime = Date.now();
      const animate = () => {
        const now = Date.now();
        const delta = now - lastTime;
        
        // Update every 16ms (roughly 60fps) but with slower movement
        if (delta > 16) {
          setTulips(prev => {
            return prev
              .map(tulip => ({ ...tulip, y: tulip.y + tulip.speed }))
              .filter(tulip => tulip.y < 110); // Remove tulips that went off screen
          });
          lastTime = now;
        }
        
        animationFrameRef.current = requestAnimationFrame(animate);
      };

      animationFrameRef.current = requestAnimationFrame(animate);

      return () => {
        clearInterval(spawnInterval);
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }
  }, [gameStarted, score]);

  useEffect(() => {
    if (score >= TARGET_SCORE && !showVictory) {
      setShowVictory(true);
      onComplete();
      // Create confetti
      const newConfetti = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
      }));
      setConfetti(newConfetti);
    }
  }, [score, showVictory, onComplete]);

  const handleTulipClick = (tulipId: number, e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setTulips(prev => prev.filter(t => t.id !== tulipId));
    setScore(prev => prev + 1);
    
    // Haptic feedback on mobile
    if ('vibrate' in navigator) {
      navigator.vibrate(50);
    }
  };

  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setTulips([]);
    setShowVictory(false);
  };

  const resetGame = () => {
    setGameStarted(false);
    setScore(0);
    setTulips([]);
    setShowVictory(false);
    setConfetti([]);
  };

  if (showVictory) {
    return (
      <section className={styles.gameSection}>
        <div className={styles.confettiContainer}>
          {confetti.map(c => (
            <div
              key={c.id}
              className={styles.confetti}
              style={{
                left: `${c.x}%`,
                top: `${c.y}%`,
                animationDelay: `${Math.random() * 0.5}s`,
              }}
            >
              {['💕', '❤️', '🌷', '✨', '🎉'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
        <InviteCard onPlayAgain={resetGame} />
      </section>
    );
  }

  return (
    <section className={styles.gameSection}>
      <div className={styles.container}>
        <div className={styles.gameHeader}>
          <h2>A Little Game for You 🌷</h2>
          <p>Catch {TARGET_SCORE} falling tulips to reveal something special!</p>
        </div>

        {!gameStarted ? (
          <div className={styles.startScreen}>
            <div className={styles.startCard}>
              <div className={styles.gameIcon}>🎮</div>
              <h3>How to Play</h3>
              <ul className={styles.instructions}>
                <li>🌷 Tap the falling tulips to catch them</li>
                <li>🎯 Catch {TARGET_SCORE} tulips to win</li>
                <li>⏱️ Don't let them fall off the screen!</li>
              </ul>
              <button className="btn-primary" onClick={startGame}>
                Start Game
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className={styles.scoreBoard}>
              <div className={styles.scoreBadge}>
                <span className={styles.scoreLabel}>Score:</span>
                <span className={styles.scoreValue}>{score} / {TARGET_SCORE}</span>
              </div>
              <div className={styles.progressBar}>
                <div 
                  className={styles.progressFill}
                  style={{ width: `${(score / TARGET_SCORE) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className={styles.gameArea} ref={gameAreaRef}>
              {tulips.map(tulip => (
                <button
                  key={tulip.id}
                  className={styles.tulip}
                  style={{
                    left: `${tulip.x}%`,
                    top: `${tulip.y}%`,
                  }}
                  onClick={(e) => handleTulipClick(tulip.id, e)}
                  onTouchStart={(e) => handleTulipClick(tulip.id, e)}
                  aria-label="Catch tulip"
                >
                  🌷
                </button>
              ))}
              
              {tulips.length === 0 && (
                <div className={styles.waitingMessage}>
                  Get ready! Tulips are coming... 🌷
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
