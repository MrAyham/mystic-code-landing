# Mystic Code Experience — Landing (Stages 1–3)

Multi-page static site for **شيفرة الغموض – Mystic Code Experience**.

## Structure
```
.
├── index.html          # Stage 1 (Matrix green)
├── style.css
├── matrix.js
├── stage2.html         # Stage 2 (Purple) + payment link meta
├── stage2.css
├── stage3.html         # Stage 3 (Blue) — checks ?paid=1
├── stage3.css
├── api/
│   └── subscribe.js    # Vercel serverless function (MailerLite optional)
├── assets/
│   └── mystic-symbol-green.png
└── vercel.json
```

## Local preview
Open `index.html` directly, or use VS Code Live Server.

## Stripe Payment Link
Add in `stage2.html` within `<head>`:
```html
<meta name="payment-link" content="https://buy.stripe.com/XXXXX">
```

Set Stripe **Success URL** to:
```
https://YOUR-DOMAIN.vercel.app/stage3.html?paid=1
```

## Deploy (GitHub → Vercel)
1. Create an empty repo on GitHub: `mystic-code-landing` (no README).
2. Run one of the scripts below, or follow the manual commands.

---

## One‑liner (Mac/Linux)
Replace `USERNAME` with your GitHub username:
```bash
bash push.sh USERNAME mystic-code-landing
```

## One‑liner (Windows PowerShell)
```powershell
./push.ps1 USERNAME mystic-code-landing
```

---

## Manual commands
```bash
git init
git add .
git commit -m "Initial: Mystic Code Landing stages 1–3"
git branch -M main
git remote add origin https://github.com/USERNAME/mystic-code-landing.git
git push -u origin main
```
