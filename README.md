# Finley Mose — Personal Portfolio

Premium personal portfolio for **Finley Mose, Founder of LUX Enterprise**.

The website includes a downloadable source package at `public/downloads/finley-mose-portfolio.zip`.

## Run locally

Requirements: Node.js 20+ and pnpm (or npm).

```bash
pnpm install
pnpm dev
```

Open the local URL shown in the terminal. To test the production build:

```bash
pnpm build
pnpm preview
```

## Deploy with GitHub and Vercel

### Upload to an existing GitHub repository

1. Download and extract `finley-mose-portfolio.zip` (or use this source directory).
2. Open a terminal inside the extracted folder.
3. Connect the folder to your existing repository:

```bash
git init
git add .
git commit -m "Add Finley Mose portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

If the repository already contains commits, clone it first, copy these project files into the cloned folder, then run `git add .`, commit, and push. Do not use a force push unless you understand that it replaces remote history.

### Connect GitHub to Vercel

1. Sign in to Vercel and choose **Add New → Project**.
2. Import the GitHub repository.
3. Vercel should detect **Vite** automatically.
4. Confirm **Build Command** is `pnpm build` and **Output Directory** is `dist`.
5. Click **Deploy**. No database, paid API, secrets, or environment variables are required.
6. Future pushes to the connected branch will deploy automatically.

## Edit content

- Main page content and project descriptions: `src/App.tsx`
- Colors, layout, responsive styles, and motion: `src/index.css`
- Metadata and SEO: `index.html`
- Project mockups and images: `public/assets/`

### Replace the portrait

The hero uses Finley's supplied portrait at `src/imports/Professional_Portrait_with_Modern_Campus_Bokeh.png`.

To replace it later, export another image with the same filename and overwrite the existing file. Alternatively, add a new image to `src/imports/` and update the portrait import and `alt` text in `src/App.tsx`.

For best results, use a portrait with a vertical 4:5 crop and at least 1200px height.

### Add live project links later

The current “View project mockup” actions open local, working mockup files. DairyFlow links to https://dairy-milk.lovable.app. LUX Finnex and LUX Services currently link to their illustrative mockups because no live URLs have been supplied.

## Image notes and attribution

Product visuals are original illustrative SVG mockups and are labeled as such. Generic workspace reference photography comes from Unsplash:

- Mohammad Rahmani — coding workspace
- Ghost — study workspace
- Jakub Żerdzicki — code screen and multi-screen workspace

No stock photograph is presented as Finley or as evidence of attending a specific university, workplace, or project.

## Contact details

- Phone: +254 748 642 352
- WhatsApp: +254 734 382 054
- Email: finleymose591@gmail.com
- GitHub: https://github.com/luxfinnex
- LinkedIn: https://www.linkedin.com/in/finley-m-82b1703a2/
- Instagram: https://www.instagram.com/lux_finnex/
- TikTok: https://www.tiktok.com/@lux_finnex

## Accessibility

The site includes semantic landmarks, keyboard-operable navigation and lightbox controls, visible labels, descriptive alternative text, a skip link, responsive typography, and reduced-motion support.
