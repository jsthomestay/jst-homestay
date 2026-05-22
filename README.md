# JST Homestay

A Next.js landing page for a mountain-themed homestay in Dehradun.

## Local setup

From the project root (`c:\Users\HP\jst-homestay`):

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

If PowerShell blocks `npm` scripts, run these commands in Command Prompt instead:

```cmd
cd /d C:\Users\HP\jst-homestay
npm install
npm run dev
```

### Production build

To verify the site compiles for production:

```bash
npm run build
```

## Project structure

- `app/page.tsx` — main landing page content
- `public/Images` — hero and gallery images
- `next.config.mjs` — Next.js configuration
- `package.json` — dependencies and scripts

## Deploy on Vercel

This project is ready for Vercel deployment.

1. Create a Vercel account at https://vercel.com
2. Import your repository
3. Vercel should detect Next.js automatically
4. Use the default settings:
   - Build command: `npm run build`
   - Output directory: leave blank
5. Deploy and use the generated URL

### Custom domain

To use a custom domain, add it in the Vercel dashboard and follow the DNS instructions.

## Learn more

- [Next.js Documentation](https://nextjs.org/docs)
- [Deploying Next.js on Vercel](https://nextjs.org/docs/app/building-your-application/deploying)
