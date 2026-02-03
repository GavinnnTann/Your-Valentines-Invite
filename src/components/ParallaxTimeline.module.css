.timeline {
  position: relative;
  background: linear-gradient(180deg, var(--color-cream) 0%, var(--color-warm-cream) 100%);
  padding: 6rem 0;
  overflow: hidden;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.gradientOrb1,
.gradientOrb2 {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.3;
}

.gradientOrb1 {
  background: var(--gradient-romantic);
  top: 10%;
  right: -10%;
  animation: float 20s ease-in-out infinite;
}

.gradientOrb2 {
  background: var(--gradient-soft);
  bottom: 20%;
  left: -10%;
  animation: float 25s ease-in-out infinite reverse;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.header {
  text-align: center;
  margin-bottom: 5rem;
}

.header h2 {
  margin-bottom: 1rem;
}

.header p {
  font-size: 1.25rem;
  color: var(--color-text-light);
}

/* Timeline track */
.timelineTrack {
  position: relative;
  padding: 2rem 0;
}

/* Center line */
.timelineTrack::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, 
    transparent 0%, 
    var(--color-secondary) 10%, 
    var(--color-secondary) 90%, 
    transparent 100%
  );
  transform: translateX(-50%);
}

/* Timeline items */
.timelineItem {
  position: relative;
  margin-bottom: 6rem;
  opacity: 0;
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.timelineItem.visible {
  opacity: 1;
}

.timelineItem.left {
  transform: translateX(-50px);
}

.timelineItem.left.visible {
  transform: translateX(0);
}

.timelineItem.right {
  transform: translateX(50px);
}

.timelineItem.right.visible {
  transform: translateX(0);
}

/* Item content */
.itemContent {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.timelineItem.left .itemContent {
  grid-template-areas: "photo milestone";
}

.timelineItem.right .itemContent {
  grid-template-areas: "milestone photo";
}

.photoWrapper {
  grid-area: photo;
  position: relative;
}

.milestoneCard {
  grid-area: milestone;
}

/* Photo styling */
.photoFrame {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  background: white;
  padding: 12px;
}

.photoFrame:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.2);
}

.photo {
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
  border-radius: 12px;
}

.photoOverlay {
  position: absolute;
  top: 12px;
  left: 12px;
  right: 12px;
  bottom: 12px;
  background: linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.3) 100%);
  border-radius: 12px;
  pointer-events: none;
}

.heartFloat {
  position: absolute;
  top: -20px;
  right: -20px;
  font-size: 3rem;
  animation: float 3s ease-in-out infinite;
  filter: drop-shadow(0 4px 8px rgba(230, 57, 70, 0.4));
}

/* Milestone card */
.milestoneCard {
  background: white;
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.milestoneCard:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.12);
}

.dateTag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--gradient-soft);
  color: var(--color-primary);
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.calendarIcon {
  font-size: 1rem;
}

.milestoneTitle {
  margin-bottom: 1rem;
  color: var(--color-primary);
}

.milestoneDescription {
  color: var(--color-text-light);
  line-height: 1.8;
}

/* Timeline connector */
.connector {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.dot {
  width: 24px;
  height: 24px;
  background: white;
  border: 4px solid var(--color-secondary);
  border-radius: 50%;
  box-shadow: 0 0 0 8px rgba(255, 107, 157, 0.2);
  transition: all 0.3s ease;
}

.timelineItem.visible .dot {
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 8px rgba(255, 107, 157, 0.2);
  }
  50% {
    transform: scale(1.2);
    box-shadow: 0 0 0 12px rgba(255, 107, 157, 0.3);
  }
}

/* Responsive */
@media (max-width: 968px) {
  .timelineTrack::before {
    left: 2rem;
  }

  .itemContent {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding-left: 5rem;
  }

  .timelineItem.left .itemContent,
  .timelineItem.right .itemContent {
    grid-template-areas: 
      "photo"
      "milestone";
  }

  .connector {
    left: 2rem;
    top: 3rem;
  }

  .timelineItem {
    margin-bottom: 4rem;
  }

  .photo {
    height: 300px;
  }
}

@media (max-width: 640px) {
  .timeline {
    padding: 4rem 0;
  }

  .header {
    margin-bottom: 3rem;
  }

  .itemContent {
    padding-left: 3rem;
  }

  .timelineTrack::before {
    left: 1rem;
  }

  .connector {
    left: 1rem;
  }

  .dot {
    width: 18px;
    height: 18px;
    border-width: 3px;
  }

  .photo {
    height: 250px;
  }

  .milestoneCard {
    padding: 1.5rem;
  }

  .heartFloat {
    font-size: 2rem;
    top: -15px;
    right: -15px;
  }
}
