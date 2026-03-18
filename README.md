# RAMELEC Luxury — Site Web

Site web professionnel pour RAMELEC Luxury, entreprise de rénovation haut de gamme à Paris.

## Stack technique
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Vercel** (déploiement)

## Structure des pages
```
/                          → Accueil (hero slider + description + forces + services)
/realisations/professionnel → Grille projets professionnels
/realisations/particulier   → Grille projets particuliers
/realisations/[id]          → Page détail d'un projet (specs + galerie)
/expertise/[type]           → Pages expertise (6 types)
/contact                   → Formulaire de contact + Google Maps
/mentions-legales          → Mentions légales
```

## 🚀 Déploiement sur Vercel (5 minutes)

### Étape 1 — Installer les dépendances
```bash
npm install
```

### Étape 2 — Tester en local
```bash
npm run dev
# Ouvrir http://localhost:3000
```

### Étape 3 — Déployer sur Vercel

**Option A — Via GitHub (recommandé)**
1. Créer un repo GitHub et pousser le code :
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/VOTRE_USER/ramelec-luxury.git
   git push -u origin main
   ```
2. Aller sur [vercel.com](https://vercel.com) → **New Project**
3. Importer le repo GitHub
4. Cliquer **Deploy** — c'est tout !

**Option B — Via Vercel CLI**
```bash
npm i -g vercel
vercel
```

## 📸 Ajouter vos vraies photos

Remplacez les URLs Unsplash dans `/lib/projects.ts` par vos vraies photos :
1. Uploadez vos photos dans `/public/images/`
2. Remplacez les URLs : `https://images.unsplash.com/...` → `/images/votre-photo.jpg`

## 📧 Configurer l'envoi d'emails (formulaire contact)

Pour que le formulaire envoie vraiment des emails, installez Resend ou EmailJS :

```bash
npm install resend
```

Puis créez `/app/api/contact/route.ts` avec votre clé API Resend.

## 🗺️ Google Maps

La carte dans la page Contact utilise un embed Google Maps gratuit.
Pour une carte interactive complète, obtenez une clé API Google Maps sur :
https://console.cloud.google.com/

Puis ajoutez dans `.env.local` :
```
NEXT_PUBLIC_GOOGLE_MAPS_KEY=votre_clé_ici
```

## 📁 Contenu à personnaliser

| Fichier | Ce qui est à changer |
|---------|---------------------|
| `/lib/projects.ts` | Photos réelles, titres, descriptions des projets |
| `/public/logo.png` | Logo (déjà inclus) |
| `/app/contact/page.tsx` | Adresse, téléphone, email |
| `/app/page.tsx` | Textes de description de l'entreprise |
| `/components/Footer.tsx` | Liens réseaux sociaux Instagram/Facebook |

## Contact
📍 3 Rue Lavoisier, 93500 Pantin
📞 +33 7 60 49 39 67
✉️ ramelec.ang@gmail.com
