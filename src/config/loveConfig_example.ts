// ============================================================================
// Love Configuration - Personalize this file for your Valentine! 💕
// ============================================================================

/**
 * IMPORTANT: This is an EXAMPLE file to show you the structure.
 * 
 * For your actual configuration:
 * 1. Copy this file and rename it to: loveConfig.ts (without _example)
 * 2. Customize all the values with your personal information
 * 3. Make sure loveConfig.ts is in your .gitignore if keeping it private
 * 
 * OR simply edit the existing loveConfig.ts file directly.
 */

export interface Milestone {
  title: string;
  date: string;
  description: string;
}

export const loveConfig = {
  // === PERSONAL DETAILS ===
  // Replace with your actual names
  yourName: "Gavin",
  partnerName: "My Love",
  
  // === RELATIONSHIP START DATE ===
  // Set this to when your relationship began (Singapore timezone: +08:00)
  // Format: "YYYY-MM-DDTHH:MM:SS+08:00"
  relationshipStart: "2023-06-29T00:00:00+08:00",
  
  // === VALENTINE'S DATE ===
  valentineDate: "2026-02-14",
  
  // === HEADLINE AND INTRO ===
  heroHeadline: "To My Dearest Valentine",
  heroSubtext: "A journey through our moments together, celebrating every laugh, every adventure, and every heartbeat we've shared.",
  
  // === PHOTO GALLERY ===
  // How many photos are in /public/photos/ ?
  // Photos should be named: photo_1.jpg, photo_2.jpg, photo_3.jpg, etc.
  photoCount: 8,
  
  // === TIMELINE MILESTONES ===
  // Add your relationship milestones here
  milestones: [
    {
      title: "First Date",
      date: "June 29, 2023",
      description: "The day our story began. Coffee turned into hours of conversation, and I knew you were special."
    },
    {
      title: "First Adventure",
      date: "July 2, 2023",
      description: "Our first trip together! From sunrise hikes to late-night stargazing, every moment with you felt like magic."
    },
    {
      title: "Game Nights",
      date: "September 15, 2023",
      description: "Countless evenings of laughter, friendly competition, and creating our own little world together."
    },
    {
      title: "Your Birthday",
      date: "November 8, 2023",
      description: "Celebrating you was pure joy. Every smile you gave made my heart soar."
    },
    {
      title: "New Year Together",
      date: "January 1, 2024",
      description: "Starting the year in your arms, knowing I wanted every year to begin and end with you."
    },
    {
      title: "First Anniversary",
      date: "May 18, 2024",
      description: "One year of growing, learning, and loving together. Here's to forever more."
    },
    {
      title: "Our Little Traditions",
      date: "August 2024",
      description: "From Sunday brunches to movie marathons, we've built a life full of beautiful routines."
    },
    {
      title: "This Moment",
      date: "February 2026",
      description: "Right now, as you read this, know that you are my greatest adventure and my safest home."
    }
  ],
  
  // === EMAIL CONFIGURATION ===
  // For the "Send me your answer" button
  yourEmail: "your.email@example.com", // Replace with your actual email
  emailSubject: "My Valentine's Answer 💐",
  emailBody: "Yes! I'd love to be your Valentine! 💕\n\nLove always,\n",
  
  // === INVITE DETAILS ===
  inviteTitle: "Will You Be My Valentine?",
  inviteMessage: "Join me for a magical evening on February 14th. Let's make more beautiful memories together.",
  inviteDate: "February 14, 2026",
  inviteTime: "7:00 PM",
  inviteLocation: "A romantic surprise awaits...",
};

export default loveConfig;
