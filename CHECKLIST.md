# ✅ Pre-Launch Checklist

Use this checklist before deploying your personalized Valentine's website!

## 📋 Configuration

- [ ] Updated `yourName` in `loveConfig.ts`
- [ ] Updated `partnerName` in `loveConfig.ts`
- [ ] Set correct `relationshipStart` date (with +08:00 timezone)
- [ ] Updated `yourEmail` for the "Send Answer" feature
- [ ] Customized `heroHeadline` and `heroSubtext`
- [ ] Reviewed all milestone titles and descriptions
- [ ] Updated milestone dates to match your relationship
- [ ] Set correct `inviteTime` and `inviteLocation`
- [ ] Verified `photoCount` matches number of photos
- [ ] Personalized invitation message

## 📸 Photos

- [ ] Added photos to `/public/photos/`
- [ ] Named correctly: `photo_1.jpg`, `photo_2.jpg`, etc.
- [ ] All photos are good quality
- [ ] Photos are compressed (<500KB each recommended)
- [ ] Photos are in landscape or square format
- [ ] Deleted `README_PHOTOS.txt` from photos folder
- [ ] Total photos = `photoCount` in config

## 🧪 Testing

### Local Testing
- [ ] Ran `npm install` successfully
- [ ] Ran `npm run dev` without errors
- [ ] Website loads at localhost:3000
- [ ] All photos display correctly
- [ ] Hero section shows with animations
- [ ] Time counter is running
- [ ] Timeline scrolls smoothly
- [ ] Game starts and catches tulips
- [ ] Game victory shows invitation
- [ ] "Add to Calendar" downloads .ics file
- [ ] "Send Answer" opens email client
- [ ] No console errors (check with F12)

### Mobile Testing
- [ ] Tested on mobile browser
- [ ] Touch interactions work
- [ ] Game is playable on touchscreen
- [ ] Layout looks good on small screen
- [ ] All text is readable

### Build Testing
- [ ] Ran `npm run build` successfully
- [ ] No TypeScript errors
- [ ] No build warnings
- [ ] Ran `npm start` and tested production build

## 🚀 Pre-Deployment

- [ ] All Git files committed (if using Git)
- [ ] `.gitignore` is working properly
- [ ] Removed any test/debug code
- [ ] Verified email address is correct
- [ ] Double-checked all personal details
- [ ] Proofread all text for typos
- [ ] Confirmed Valentine's date is correct

## 🌐 Deployment

- [ ] Deployed to Vercel
- [ ] Verified live URL works
- [ ] Tested live site on desktop
- [ ] Tested live site on mobile
- [ ] All features work on live site
- [ ] Photos load on live site
- [ ] Shared URL with yourself first (test!)

## 💝 Before Sending

- [ ] Tested everything one final time
- [ ] Chosen the perfect moment to send
- [ ] Ready to make their day special! 💕

---

## 🐛 Common Issues

**Photos not showing?**
- Check `/public/photos/` exists
- Verify exact naming: `photo_1.jpg`, etc.
- Update `photoCount` in config

**Time counter wrong?**
- Check date format in `relationshipStart`
- Must include `+08:00` for Singapore time

**Build errors?**
- Run `npm run build` locally first
- Fix any TypeScript errors shown
- Ensure all imports are correct

**Game not working?**
- Clear browser cache
- Test in incognito/private mode
- Try different browser

---

## 🎉 Launch Day!

When you're ready:
1. ✅ Complete this entire checklist
2. 🧪 Test one more time
3. 🚀 Deploy to Vercel
4. 💌 Copy your live URL
5. 💕 Send at the perfect moment!

**You've got this!** 🌷

---

Need help? Check:
- [README.md](./README.md) - Full documentation
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment guide
- [QUICKSTART.md](./QUICKSTART.md) - Quick reference
