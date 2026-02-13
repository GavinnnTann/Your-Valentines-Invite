'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import loveConfig from '@/config/loveConfig';
import styles from './InviteCard.module.css';

interface InviteCardProps {
  onPlayAgain: () => void;
}

export default function InviteCard({ onPlayAgain }: InviteCardProps) {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [isNoButtonEscaping, setIsNoButtonEscaping] = useState(false);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleYesClick = () => {
    // Show celebration modal or directly trigger actions
    alert('🎉 Yay! Anh biết em sẽ đồng ý mà... Mong chờ được ăn mừng cùng em!! 💕');
  };

  const handleNoClick = () => {
    // Optional: Show a sad message or do nothing
    console.log('Trying to click No... 😏');
  };

  const moveNoButton = (cursorX: number, cursorY: number) => {
    if (!noButtonRef.current) return;

    const buttonRect = noButtonRef.current.getBoundingClientRect();
    const buttonCenterX = buttonRect.left + buttonRect.width / 2;
    const buttonCenterY = buttonRect.top + buttonRect.height / 2;

    // Calculate distance from cursor to button center
    const distance = Math.sqrt(
      Math.pow(cursorX - buttonCenterX, 2) +
      Math.pow(cursorY - buttonCenterY, 2)
    );

    // If cursor is within 150px, move the button away
    if (distance < 150) {
      if (!isNoButtonEscaping) {
        setIsNoButtonEscaping(true);
      }

      // Calculate direction away from cursor
      const angle = Math.atan2(buttonCenterY - cursorY, buttonCenterX - cursorX);

      // Move button 400px away in that direction (fast escape!)
      const moveDistance = 400;
      let newX = buttonRect.left + Math.cos(angle) * moveDistance;
      let newY = buttonRect.top + Math.sin(angle) * moveDistance;

      // Keep button within viewport bounds
      const padding = 40;
      const maxX = window.innerWidth - buttonRect.width - padding;
      const maxY = window.innerHeight - buttonRect.height - padding;

      newX = Math.max(padding, Math.min(newX, maxX));
      newY = Math.max(padding, Math.min(newY, maxY));

      setNoButtonPosition({ x: newX, y: newY });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    moveNoButton(e.clientX, e.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      moveNoButton(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleAddToCalendar = () => {
    // Generate .ics file content
    const event = {
      title: `Valentine's Day with ${loveConfig.yourName}`,
      description: loveConfig.inviteMessage,
      location: loveConfig.inviteLocation,
      startDate: new Date(loveConfig.valentineDate + 'T19:00:00+08:00'), // 7:00 PM Singapore time
      endDate: new Date(loveConfig.valentineDate + 'T23:00:00+08:00'),
    };

    const formatDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Valentine's Day//EN
BEGIN:VEVENT
UID:${Date.now()}@valentines2026
DTSTAMP:${formatDate(new Date())}
DTSTART:${formatDate(event.startDate)}
DTEND:${formatDate(event.endDate)}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
STATUS:CONFIRMED
SEQUENCE:0
BEGIN:VALARM
TRIGGER:-PT2H
ACTION:DISPLAY
DESCRIPTION:Reminder: Valentine's Date in 2 hours!
END:VALARM
END:VEVENT
END:VCALENDAR`;

    // Create blob and download
    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'valentines-date-2026.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const handleSendAnswer = () => {
    const subject = encodeURIComponent(loveConfig.emailSubject);
    const body = encodeURIComponent(loveConfig.emailBody + loveConfig.partnerName);
    window.location.href = `mailto:${loveConfig.yourEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div
      className={styles.inviteContainer}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      <div className={styles.inviteCard}>
        <h2 className={styles.inviteTitle}>{loveConfig.inviteTitle}</h2>

        <div className={styles.catRoseContainer}>
          <Image
            src="/cat-rose.gif"
            alt="Cat with rose"
            width={200}
            height={200}
            className={styles.catRoseGif}
            unoptimized
          />
        </div>

        <div className={styles.inviteDetails}>
          <div className={styles.detailItem}>
            <span className={styles.detailIcon}>📅</span>
            <div>
              <div className={styles.detailLabel}>Ngày</div>
              <div className={styles.detailValue}>{loveConfig.inviteDate}</div>
            </div>
          </div>

          <div className={styles.detailItem}>
            <span className={styles.detailIcon}>🕐</span>
            <div>
              <div className={styles.detailLabel}>Giờ</div>
              <div className={styles.detailValue}>{loveConfig.inviteTime}</div>
            </div>
          </div>

          <div className={styles.detailItem}>
            <span className={styles.detailIcon}>📍</span>
            <div>
              <div className={styles.detailLabel}>Địa điểm</div>
              <div className={styles.detailValue}>{loveConfig.inviteLocation}</div>
            </div>
          </div>
        </div>

        <p className={styles.inviteMessage}>{loveConfig.inviteMessage}</p>

        <div className={styles.actionButtons}>
          <button
            className={`btn-primary ${styles.yesButton}`}
            onClick={handleYesClick}
          >
            Đồng ý! Em rất thích! 💕
          </button>

          <button
            ref={noButtonRef}
            className={`btn-secondary ${styles.noButton} ${isNoButtonEscaping ? styles.noButtonEscaping : ''}`}
            style={{
              position: isNoButtonEscaping ? 'fixed' : 'relative',
              left: isNoButtonEscaping ? `${noButtonPosition.x}px` : 'auto',
              top: isNoButtonEscaping ? `${noButtonPosition.y}px` : 'auto',
              transition: isNoButtonEscaping ? 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
              zIndex: isNoButtonEscaping ? 1000 : 'auto',
            }}
            onClick={handleNoClick}
          >
            Không 😢
          </button>

          <div className={styles.secondaryActions}>
            <button
              className="btn-secondary"
              onClick={handleAddToCalendar}
            >
              📅 Thêm vào lịch
            </button>

            <button
              className="btn-secondary"
              onClick={handleSendAnswer}
            >
              💌 Gửi câu trả lời
            </button>
          </div>
        </div>

        <div className={styles.playAgainSection}>
          <button
            className={styles.playAgainButton}
            onClick={onPlayAgain}
          >
            🎮 Chơi lại game
          </button>
        </div>
      </div>
    </div>
  );
}
