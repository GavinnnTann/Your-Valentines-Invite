'use client';

import Hero from '@/components/Hero';
import ParallaxTimeline from '@/components/ParallaxTimeline';
import TimeCounter from '@/components/TimeCounter';
import TulipCatcher from '@/components/TulipCatcher';
import { useState } from 'react';

/**
 * Main landing page component
 * Orchestrates the flow of the Valentine's Day website:
 * 1. Hero section with romantic landing
 * 2. Time counter showing relationship duration
 * 3. Parallax timeline of photos and milestones
 * 4. Interactive tulip catching game
 * 5. Valentine's invitation reveal (after game completion)
 */
export default function Home() {
  // Track whether the tulip catching game has been completed
  const [gameCompleted, setGameCompleted] = useState(false);

  return (
    <main className="min-h-screen">
      <Hero />
      <TimeCounter />
      <ParallaxTimeline />
      <TulipCatcher onComplete={() => setGameCompleted(true)} gameCompleted={gameCompleted} />
    </main>
  );
}
