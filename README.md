# CzechHorizonRP — statický web pro GitHub Pages

Tento repozitář obsahuje jednoduchý vícestránkový statický web (HTML/CSS/JS) připravený pro nasazení na GitHub Pages.

Struktura:
- `index.html` — Domovská stránka
- `pravidla.html` — Pravidla
- `onas.html` — O nás
- `pripojit.html` — Jak se připojit
- `kontakt.html` — Kontakt
- `style.css` — Styly
- `script.js` — Jednoduché animace a interakce
- `CNAME` — soubor s vlastní doménou (`czechhorizonrp.com`)
- `.nojekyll` — zamezuje Jekyll zpracování na GitHub Pages

Rychlé kroky pro nasazení na vlastní doménu `http://czechhorizonrp.com/` (GitHub Pages):

1) Nahrajte (push) všechny soubory do repozitáře na GitHubu (větev `main`).
2) V GitHub → Settings → Pages vyberte zdroj: větev `main` a root (/) → Uložte.
3) Ověření domény (DNS):
   - Přidejte A záznamy (apex/doména bez `www`) v DNS u vašeho registrátora na IP adresy GitHub Pages:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Přidejte CNAME záznam pro `www` směrující na `<your-github-username>.github.io` (volitelné).
4) Po propagaci DNS (může trvat až 24 hodin) se GitHub Pages automaticky přesměruje a SSL certifikát bude vydán (HTTPS).

Poznámky:
- Soubor `CNAME` s hodnotou `czechhorizonrp.com` je již přidán — stačí provést DNS změny u registrátora a zapnout Pages v nastavení.
- Odkazy (Discord, e-mail) jsou placeholdery — změňte je prosím na reálné hodnoty před publikací.
- Toto je čistě frontendový projekt (bez serveru). Formuláře nejsou zpracovávány.

Alternativy k GitHub Pages: Netlify, Vercel nebo Cloudflare Pages — mají snadné připojení vlastní domény a automatické HTTPS.

© 2025 CzechHorizonRP – Všechna práva vyhrazena