# 🚀 Deployment Guide for GH-Readme-Builder

## GitHub Pages Deployment

### Method 1: Using This Branch (Recommended)

1. Go to your repository settings on GitHub
2. Navigate to **Pages** in the sidebar
3. Under **Source**, select:
   - Branch: `copilot/develop-github-pages-deployment`
   - Folder: `/ (root)`
4. Click **Save**
5. Wait 1-2 minutes for deployment
6. Your site will be available at: `https://partybrasil.github.io/GH-Readme-Builder/`

### Method 2: Merge to Main Branch

1. Merge this PR to your main branch
2. Go to repository settings → Pages
3. Select your main branch as the source
4. Wait for deployment

## Verification

After deployment, verify:
- ✅ Site loads at your GitHub Pages URL
- ✅ All CSS styles are applied
- ✅ JavaScript functionality works
- ✅ Theme toggle works
- ✅ Export functionality works
- ✅ Templates load correctly

## Troubleshooting

### Site doesn't load CSS/JS
- Check that `.nojekyll` file exists in root
- Verify all paths in HTML are relative (no leading `/`)
- Clear browser cache

### Service Worker issues
- Service worker path is `./sw.js` (relative)
- Check browser console for errors
- Try in incognito mode

### PWA not installable
- Requires HTTPS (GitHub Pages provides this)
- Check manifest.json paths
- Verify icon files exist

## Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file with your domain
2. Configure DNS with your domain provider
3. Wait for DNS propagation
4. Enable HTTPS in GitHub Pages settings

## Performance

The application is optimized for performance:
- All assets are cached by Service Worker
- Works offline after first load
- Minimal dependencies (only CDN for marked.js and DOMPurify)
- Gzipped total size < 100KB

## Security

Security measures implemented:
- ✅ DOMPurify for XSS protection
- ✅ No inline scripts (CSP-friendly)
- ✅ Secure URL validation
- ✅ CodeQL scanned (0 vulnerabilities)

## Support

For issues or questions:
- Check browser console for errors
- Verify GitHub Pages is enabled
- Open an issue in the repository
