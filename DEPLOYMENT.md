# 🚀 Deployment Guide

This guide will help you deploy your personalized Valentine's Day website to Vercel.

## Quick Deploy Steps

### 1. Prepare Your Project

Before deploying, make sure you've:

- ✅ Added your photos to `/public/photos/`
- ✅ Updated `/src/config/loveConfig.ts` with your personal details
- ✅ Tested locally with `npm run dev`
- ✅ Committed all changes to Git (if using Git)

### 2. Deploy to Vercel

#### Method A: GitHub Integration (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Valentine's Day website ready"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import from GitHub
   - Select your repository
   - Click "Deploy"

3. **Done!** Your site will be live in ~2 minutes

#### Method B: Direct Upload

1. **Build locally**:
   ```bash
   npm run build
   ```

2. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

3. **Login and deploy**:
   ```bash
   vercel login
   vercel
   ```

4. Follow the prompts, and you're live!

### 3. Post-Deployment

After deployment:

1. **Test the live site**:
   - Visit your Vercel URL
   - Test on mobile device
   - Check all photos load
   - Play the game
   - Test the invite card features

2. **Custom Domain** (Optional):
   - Go to Vercel Dashboard → Your Project → Settings → Domains
   - Add your custom domain
   - Follow DNS setup instructions

3. **Share with Your Valentine**:
   - Copy your live URL
   - Send it at the perfect moment 💕

## Environment Check

Before deploying, verify:

```bash
# Check for errors
npm run build

# If successful, you'll see:
# ✓ Compiled successfully
```

If you see errors, fix them before deploying.

## Vercel Configuration

The project is pre-configured for Vercel with:

- ✅ Next.js 14 (auto-detected)
- ✅ Standalone output mode
- ✅ Image optimization
- ✅ Static file serving from `/public`

No additional configuration needed!

## Troubleshooting

### Build fails on Vercel?

**Issue**: "Module not found" or TypeScript errors

**Solution**:
1. Run `npm run build` locally
2. Fix any errors shown
3. Commit and push again

### Photos not loading?

**Issue**: Images show broken/missing

**Solution**:
1. Verify photos are in `/public/photos/` before deploying
2. Check naming: `photo_1.jpg`, `photo_2.jpg`, etc.
3. Photos must be committed to Git (not in .gitignore)
4. Redeploy from Vercel dashboard

### Site is slow?

**Issue**: Large image files

**Solution**:
1. Compress photos with [TinyPNG](https://tinypng.com/)
2. Aim for <300KB per photo
3. Use `.jpg` format for photos
4. Redeploy

## Performance Tips

For best Lighthouse scores:

1. **Optimize Images**: 
   - Compress to <300KB each
   - Use appropriate dimensions (max 1200px width)

2. **Minimize Changes**:
   - Don't add heavy libraries
   - Keep animations CSS-based

3. **Test Before Deploying**:
   ```bash
   npm run build
   npm start
   ```
   - Test the production build locally

## Security Notes

- ✅ No sensitive data in code
- ✅ Email uses `mailto:` (client-side only)
- ✅ No backend or API keys needed
- ✅ Safe to make repository public

## Deployment Checklist

Before sending the link:

- [ ] Photos added and named correctly
- [ ] `loveConfig.ts` fully personalized
- [ ] Tested on desktop browser
- [ ] Tested on mobile device
- [ ] All milestones updated
- [ ] Email address is correct
- [ ] Game works properly
- [ ] Invitation details are accurate
- [ ] Site loads fast
- [ ] No console errors

## Updating After Deployment

To make changes after deploying:

1. Edit your files locally
2. Test with `npm run dev`
3. Commit changes
4. Push to GitHub (or redeploy via CLI)
5. Vercel auto-deploys in ~1 minute

## Getting Your URL

After deployment, you'll get a URL like:

```
https://valentines-day-2026-xyz.vercel.app
```

You can:
- Share this URL directly
- Set up a custom domain
- Create a short URL with services like bit.ly

---

**Ready to deploy?** Follow the steps above and make this Valentine's Day unforgettable! 💕🌷

For issues, check the main [README.md](./README.md)
