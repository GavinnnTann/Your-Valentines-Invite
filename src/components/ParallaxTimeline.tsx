'use client';

import { useEffect, useState, useRef } from 'react';
import loveConfig from '@/config/loveConfig';
import styles from './ParallaxTimeline.module.css';

interface PhotoItem {
  src: string;
  milestone: typeof loveConfig.milestones[0];
  index: number;
}

export default function ParallaxTimeline() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Generate photo items by pairing photos with milestones
  const photoItems: PhotoItem[] = Array.from({ length: loveConfig.photoCount }, (_, i) => ({
    src: `/photos/photo_${i + 1}.jpg`,
    milestone: loveConfig.milestones[i] || {
      title: 'Beautiful Memory',
      date: 'Our Journey',
      description: 'Every moment with you is a treasure.'
    },
    index: i
  }));

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems(prev => new Set(prev).add(index));
            }
          });
        },
        {
          threshold: 0.2,
          rootMargin: '0px 0px -100px 0px'
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <section className={styles.timeline}>
      <div className={styles.background}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Our Love Story</h2>
          <p>Every moment, a chapter in our beautiful journey together</p>
        </div>

        <div className={styles.timelineTrack}>
          {photoItems.map((item, index) => {
            const isEven = index % 2 === 0;
            const isVisible = visibleItems.has(index);
            
            return (
              <div
                key={index}
                ref={el => { itemRefs.current[index] = el; }}
                className={`${styles.timelineItem} ${isVisible ? styles.visible : ''} ${isEven ? styles.left : styles.right}`}
              >
                <div className={styles.itemContent}>
                  {/* Photo */}
                  <div className={styles.photoWrapper}>
                    <div className={styles.photoFrame}>
                      <img 
                        src={item.src} 
                        alt={item.milestone.title}
                        className={styles.photo}
                        loading="lazy"
                      />
                      <div className={styles.photoOverlay}></div>
                    </div>
                    <div className={styles.heartFloat}>💕</div>
                  </div>

                  {/* Milestone info */}
                  <div className={styles.milestoneCard}>
                    <div className={styles.dateTag}>
                      <span className={styles.calendarIcon}>📅</span>
                      {item.milestone.date}
                    </div>
                    <h3 className={styles.milestoneTitle}>{item.milestone.title}</h3>
                    <p className={styles.milestoneDescription}>{item.milestone.description}</p>
                  </div>
                </div>

                {/* Timeline connector */}
                <div className={styles.connector}>
                  <div className={styles.dot}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
