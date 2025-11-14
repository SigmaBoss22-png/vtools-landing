# Vtools Landing – Complete (Netlify-ready)

**Out-of-the-box lauffähig.**

## 1) Lokal starten
```bash
npm install
echo OPENAI_API_KEY=sk-proj-... > .env
npm run dev
```

## 2) Produktion (Netlify)
- `.nvmrc` = `20`
- `netlify.toml` mit `@netlify/plugin-nextjs`
- In Netlify: Environment Variable `OPENAI_API_KEY` (Production) setzen
- Deploys → „Clear cache and deploy site“

## Struktur
- `app/` (Next App Router, inkl. `/api/chat`)
- `components/` (Kontaktformular, Chat-Widget)
- `styles/` + Tailwind/PostCSS
- `next.config.js` (kein TS)
