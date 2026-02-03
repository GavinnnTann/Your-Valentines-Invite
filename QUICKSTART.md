# 🎯 Quick Start Guide

Get your personalized Valentine's website running in 5 minutes!

## Step 1: Install Dependencies (1 min)

```bash
npm install
```

## Step 2: Add Photos (2 min)

Add your photos to `/public/photos/`:
- `photo_1.jpg`
- `photo_2.jpg`
- `photo_3.jpg`
- ... (up to 8 photos)

## Step 3: Personalize (2 min)

Edit `/src/config/loveConfig.ts`:

```typescript
export const loveConfig = {
  yourName: "Your Name",           // ← Change this
  partnerName: "Partner Name",     // ← Change this
  relationshipStart: "2023-05-18T00:00:00+08:00", // ← Your date
  photoCount: 8,                   // ← Number of photos
  yourEmail: "your@email.com",     // ← Your email
  // ... update milestones below
};
```

## Step 4: Test Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Step 5: Deploy to Vercel

### Easiest Way:

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Upload your folder
4. Click "Deploy"
5. Share your live URL! 💕

### Using CLI:

```bash
npm install -g vercel
vercel login
vercel
```

---

## What You Get

✨ **Features**:
- Romantic hero with floating tulip petals
- Live relationship timer (days/hours/minutes)
- Parallax scrolling photo timeline
- Fun tulip-catching game
- Beautiful Valentine's invitation
- Calendar export & email response

📱 **Fully Responsive** - works on all devices

🚀 **Fast & Optimized** - lightweight, no heavy frameworks

---

## Need Help?

- Full docs: See [README.md](./README.md)
- Deployment guide: See [DEPLOYMENT.md](./DEPLOYMENT.md)
- Config options: See [src/config/loveConfig.ts](./src/config/loveConfig.ts)

---

**That's it!** Now go make someone's Valentine's Day special! 💕🌷
