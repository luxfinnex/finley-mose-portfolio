# Finley Mose — Personal Portfolio

A responsive, minimalist personal portfolio built with plain HTML, CSS and JavaScript. It is static-site friendly and can be deployed on Vercel's free Hobby plan for personal use, subject to current plan terms and limits.

## Preview locally
1. Extract the ZIP.
2. Open `index.html` in a browser. For a local server, use VS Code's Live Server extension or run `npx serve .` from this folder.

## Deploy to Vercel (free)
### GitHub route
1. Create a repository on https://github.com and upload all files in this folder.
2. Sign in at https://vercel.com with GitHub.
3. Choose **Add New → Project**, import the repository, and deploy.
4. This is a static site, so no build command is needed. If prompted, use no framework preset and leave the output directory as `.`.
5. Vercel will assign a `*.vercel.app` address. Check availability for your preferred project name.

### Vercel CLI route
Install Node.js, open a terminal in this folder and run:
    npm install -g vercel
    vercel login
    vercel
    vercel --prod

## Personalise before sharing
- `assets/finley-mose-portrait.png` is the portrait supplied for this portfolio.
- In `index.html`, replace the field-note/gallery placeholders with your real event, campus and behind-the-scenes photos. Do not claim attendance or achievements you cannot verify.
- Update the LinkedIn and Facebook links with your exact profile URLs.
- Add real project demos, repositories, screenshots and current status where available.
- Review contact details before publishing. They are shown publicly on the site.
- The contact section uses `mailto:`, `tel:` and a WhatsApp link. It does not currently submit messages to a server.
- Google Fonts are loaded from the internet; system font fallbacks are included.
