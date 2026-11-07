# Tankala Sai Prasanth — Developer Portfolio

A sleek, modern, high-converting developer portfolio website built with React, Tailwind CSS, and Lucide Icons, strictly grounded in verified professional CV data.

## Tech Stack
- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS (Dark Mode `bg-slate-950`, slate-900 cards, cyan/emerald/indigo glow accents)
- **Icons:** Lucide React
- **Typography:** Inter & JetBrains Mono

## Getting Started (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Start Vite development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build & Deployment

```bash
# Build optimized static assets
npm run build
```
The output directory will be `dist/`.

### Deploy to Vercel
1. Run `npx vercel` or connect the repository on vercel.com.
2. Vercel automatically detects Vite and deploys with optimal caching headers.

### Deploy to Netlify
1. Run `npx netlify deploy --prod --dir=dist` or drag-and-drop the `dist` folder to Netlify Drop.

### Deploy to GitHub Pages
1. In `vite.config.js`, add `base: '/<your-repo-name>/'`.
2. Push `dist/` to your `gh-pages` branch or configure GitHub Actions.
