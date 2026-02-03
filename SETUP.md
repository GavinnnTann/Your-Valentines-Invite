# 🎯 Setup Guide - Getting Started

Welcome! This guide will walk you through setting up your personalized Valentine's Day website from scratch.

## 📋 Prerequisites

Before you begin, make sure you have:

- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **A code editor** (VS Code recommended) - [Download here](https://code.visualstudio.com/)
- **Git** (optional, for version control) - [Download here](https://git-scm.com/)
- **8-15 romantic photos** of you and your partner
- **About 30 minutes** to personalize everything

## 🚀 Step-by-Step Setup

### 1. Download or Clone the Project

**Option A: Download ZIP**
1. Click the green "Code" button on GitHub
2. Select "Download ZIP"
3. Extract the ZIP file to your desired location
4. Open the folder in your code editor

**Option B: Clone with Git**
```bash
git clone https://github.com/yourusername/valentines-day-website.git
cd valentines-day-website
```

### 2. Install Dependencies

Open your terminal in the project folder and run:

```bash
npm install
```

This will install all the necessary packages. It may take 1-2 minutes.

### 3. Prepare Your Photos

#### a) Gather Your Photos
- Collect 8-15 photos of memorable moments
- Choose high-quality images
- Make sure they're appropriate for sharing (will be public!)

#### b) Optimize Your Photos
Use one of these free tools to compress your photos:
- [TinyPNG](https://tinypng.com/) - Simple and fast
- [Squoosh](https://squoosh.app/) - More control

Aim for:
- Max width: 1200px
- File size: Under 500KB each
- Format: JPG or PNG

#### c) Rename Your Photos
Rename them to:
```
photo_1.jpg
photo_2.jpg
photo_3.jpg
...and so on
```

#### d) Add to Project
1. Place all photos in: `public/photos/`
2. Count how many photos you added (you'll need this number!)

### 4. Personalize Your Configuration

Open `src/config/loveConfig.ts` in your code editor.

#### Update Personal Information:

```typescript
// Your names
yourName: "Your Name",        // ← Replace with your name
partnerName: "My Love",       // ← Replace with partner's name
```

#### Set Your Relationship Start Date:

```typescript
// When you started dating (adjust date and time)
relationshipStart: "2023-05-18T00:00:00+08:00",
//                  YYYY-MM-DD              ← Your date
//                            HH:MM:SS      ← Time (optional)
//                                    +08:00 ← Timezone
```

**Timezone Reference:**
- Singapore/Malaysia: `+08:00`
- New York (EST): `-05:00`
- Los Angeles (PST): `-08:00`
- London (GMT): `+00:00`
- Tokyo (JST): `+09:00`

#### Customize Hero Section:

```typescript
heroHeadline: "To My Dearest Valentine",
heroSubtext: "Write something romantic here...",
```

#### Set Photo Count:

```typescript
photoCount: 8,  // ← Change to YOUR number of photos
```

#### Write Your Milestones:

This is where you tell your love story! Each photo gets a milestone.

```typescript
milestones: [
  {
    title: "First Date",
    date: "May 18, 2023",
    description: "The day our story began. Coffee turned into hours of conversation, and I knew you were special."
  },
  {
    title: "Our First Adventure",
    date: "June 2, 2023",
    description: "Our first trip together! Every moment with you felt like magic."
  },
  // Add more milestones - one for each photo!
],
```

**Tips for milestones:**
- Number of milestones should match your photo count
- Write from your heart - be genuine!
- Include specific details that will make them smile
- Order them chronologically

#### Set Invitation Details:

```typescript
inviteTitle: "Will You Be My Valentine?",
inviteMessage: "Join me for a magical evening...",
inviteDate: "February 14, 2026",
inviteTime: "7:00 PM",
inviteLocation: "A romantic surprise awaits...",
```

#### Add Your Email:

```typescript
yourEmail: "your.email@example.com",  // ← Your real email
```

This enables the "Send Answer" button.

### 5. Test Locally

Start the development server:

```bash
npm run dev
```

Open your browser to: `http://localhost:3000`

**Check everything:**
- ✅ Do all photos load?
- ✅ Does the time counter show correctly?
- ✅ Do milestones match photos?
- ✅ Does the game work?
- ✅ Can you see the invitation after catching 10 tulips?
- ✅ Does "Add to Calendar" work?
- ✅ Does "Send Answer" open your email?

### 6. Test on Mobile

Want to test on your phone?

```bash
npm run dev:network
```

Look for the Network URL in the terminal output:
```
- Network:      http://192.168.1.100:3000
```

On your phone (connected to same WiFi):
- Open browser
- Type in that URL
- Test everything!

### 7. Build for Production

When everything looks perfect:

```bash
npm run build
```

If this succeeds without errors, you're ready to deploy!

### 8. Deploy to Vercel

**Easiest Method:**

1. Go to [vercel.com](https://vercel.com)
2. Sign up (free account)
3. Click "New Project"
4. Upload your project folder
5. Click "Deploy"
6. Wait 1-2 minutes
7. Copy your live URL!

**Or use Vercel CLI:**

```bash
npm install -g vercel
vercel login
vercel
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

## ✅ Pre-Launch Checklist

Before sharing with your valentine:

- [ ] All photos are appropriate and compressed
- [ ] All text is personalized (no placeholder text left)
- [ ] Email address is correct
- [ ] Dates are accurate
- [ ] Time counter shows correctly
- [ ] Tested on desktop browser
- [ ] Tested on mobile device
- [ ] All interactive features work
- [ ] Successfully deployed to Vercel
- [ ] Tested the live URL

## 🎁 Sharing Your Website

Once deployed:

1. **Test First**: Open the live URL yourself and go through everything
2. **Choose Your Moment**: Pick a special time to send it
3. **Send the Link**: Text, email, or however you prefer
4. **Be Available**: In case they have questions or want to share their excitement!

## 🆘 Troubleshooting

### "npm: command not found"
→ Install Node.js from [nodejs.org](https://nodejs.org/)

### Photos not showing
→ Check file names match exactly: `photo_1.jpg`, `photo_2.jpg`, etc.
→ Verify photos are in `/public/photos/`
→ Update `photoCount` in config

### Time counter shows wrong time
→ Check date format in `relationshipStart`
→ Verify timezone is correct (`+08:00` for Singapore)

### Build fails
→ Run `npm run build` to see specific errors
→ Check for TypeScript errors in your config file
→ Make sure all fields are filled correctly

### Can't access on mobile
→ Make sure phone and computer are on same WiFi
→ Check firewall isn't blocking the connection
→ Try using the IP address instead of "localhost"

## 💡 Tips for Success

1. **Start Early**: Don't wait until the last minute!
2. **Be Personal**: Customize every detail - it matters
3. **Test Everything**: Click every button, scroll every section
4. **Get Feedback**: (Optional) Show a friend first for tech check
5. **Have Fun**: Enjoy the process of creating something special!

## 📚 Additional Resources

- [README.md](README.md) - Full project documentation
- [DEPLOYMENT.md](DEPLOYMENT.md) - Detailed deployment guide
- [CHECKLIST.md](CHECKLIST.md) - Comprehensive pre-launch checklist
- [CONTRIBUTING.md](CONTRIBUTING.md) - How to contribute to the project

## 🎊 You're Ready!

Follow these steps, take your time, and create something beautiful for your special someone.

Need help? Open an issue on GitHub!

---

Made with ❤️ - Happy Valentine's Day! 🌷💕
