# 📸 Photo Setup Instructions

This folder is where you place your personal photos for the timeline.

## 📁 Photo Requirements

### Naming Convention
Your photos **must** follow this exact naming pattern:
```
photo_1.jpg
photo_2.jpg
photo_3.jpg
photo_4.jpg
...and so on
```

### Supported Formats
- `.jpg` or `.jpeg` (recommended)
- `.png`
- `.webp`

### Size Recommendations
- **Resolution**: Max width 1200px for optimal web performance
- **File Size**: Keep under 500KB each (use compression tools)
- **Orientation**: Landscape or square photos work best
- **Aspect Ratio**: 16:9 or 4:3 recommended

## 🖼️ How Many Photos?

You can add as many photos as you want! Just remember to:

1. Name them sequentially: `photo_1.jpg`, `photo_2.jpg`, etc.
2. Update the `photoCount` in `/src/config/loveConfig.ts` to match your total number of photos

Example:
```typescript
// If you have 10 photos
photoCount: 10,
```

## 🎨 Photo Tips

### Best Practices:
- ✅ Use high-quality, clear photos
- ✅ Choose meaningful moments from your relationship
- ✅ Mix different types of photos (portraits, landscapes, activities)
- ✅ Compress photos before uploading (use [TinyPNG](https://tinypng.com/) or similar)
- ✅ Test how they look on both desktop and mobile

### What to Avoid:
- ❌ Very low resolution or blurry photos
- ❌ Extremely large file sizes (slows down loading)
- ❌ Portrait-oriented photos (may not display optimally)
- ❌ Photos with sensitive personal information visible

## 🔧 Photo Compression Tools

Free online tools to optimize your photos:
- [TinyPNG](https://tinypng.com/) - PNG/JPG compression
- [Squoosh](https://squoosh.app/) - Advanced image optimization
- [ImageOptim](https://imageoptim.com/) - Desktop app (Mac)
- [RIOT](https://riot-optimizer.com/) - Desktop app (Windows)

## 📝 Photo-Milestone Pairing

Photos are automatically paired with your milestones in order:
- `photo_1.jpg` → First milestone in your config
- `photo_2.jpg` → Second milestone
- `photo_3.jpg` → Third milestone
- And so on...

So arrange your photos in chronological order to match your relationship timeline!

## 🚨 Important Notes

1. **Privacy**: These photos will be publicly accessible on your deployed website. Don't include anything you want to keep private!

2. **Git Tracking**: By default, photos are excluded from git (see `.gitignore`). If you want to track them in your repository, remove the photo exclusion rules from `.gitignore`.

3. **Deployment**: Make sure all photos are uploaded before deploying to Vercel.

## ❓ Troubleshooting

**Photos not showing up?**
- Check the file names match exactly: `photo_1.jpg`, `photo_2.jpg`, etc.
- Verify the photos are in the `/public/photos/` folder
- Update `photoCount` in `loveConfig.ts`
- Clear browser cache and refresh

**Photos loading slowly?**
- Compress your images (aim for <500KB each)
- Convert to `.webp` format for better compression
- Reduce resolution to 1200px width maximum

---

Happy memories! 💕✨
