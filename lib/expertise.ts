export type ExpertiseType = 'appartement' | 'maison' | 'bureau' | 'commerce' | 'extension-maison' | 'salle-de-bain' | 'cuisine'

export type ExpertiseData = {
  tag: string
  title: string
  sub: string
  img: string
  p1: string
  p2: string
  steps: { n: string; t: string; d: string }[]
}

export const EXPERTISE_TABS = [
  { key: 'salle-de-bain',      label: 'Salle de bain' },
  { key: 'cuisine',           label: 'Cuisine' },
  { key: 'appartement',        label: 'Appartement' },
  { key: 'maison',             label: 'Maison' },
  { key: 'bureau',             label: 'Bureau' },
  { key: 'commerce',           label: 'Commerce' },
]

export const EXPERTISE_DATA: Record<ExpertiseType, ExpertiseData> = {
  appartement: {
    tag: "Rénovation d'appartement",
    title: "Votre appartement,\nréinventé",
    sub: "De la rénovation partielle à la transformation complète, nous optimisons chaque m² pour allier confort, esthétique et valeur.",
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=80&auto=format&fit=crop',
    p1: "La rénovation d'appartement est notre cœur de métier. RAMELEC intervient sur tous les corps d'état : électricité, plomberie, maçonnerie, menuiserie, peinture. Notre approche clé en main vous libère de toute coordination.",
    p2: "Un chef de projet unique suit votre chantier du devis à la livraison, avec des comptes-rendus hebdomadaires. Nous travaillons avec les meilleurs artisans pour garantir des finitions impeccables.",
    steps: [
      { n: '1', t: 'Diagnostic & Devis',    d: 'Visite gratuite, état des lieux complet, devis détaillé sous 48h' },
      { n: '2', t: 'Conception',             d: "Plans d'aménagement, choix des matériaux, planning précis" },
      { n: '3', t: 'Réalisation',            d: 'Chantier géré de A à Z, suivi quotidien' },
      { n: '4', t: 'Livraison',              d: 'Réception du chantier, levée des réserves, garantie décennale' },
    ],
  },
  maison: {
    tag: 'Rénovation de maison',
    title: "Votre maison,\nsublimée",
    sub: "Rénovation complète ou partielle. Isolation, structure, aménagement intérieur — tout corps d'état.",
    img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=80&auto=format&fit=crop',
    p1: "La rénovation de maison nécessite une coordination parfaite entre les différents corps de métier. RAMELEC prend en charge l'intégralité du chantier pour vous offrir une expérience sereine.",
    p2: "Isolation thermique, réfection de toiture, ouvertures, cuisine, salles de bain — nous gérons chaque aspect avec rigueur et passion du détail.",
    steps: [
      { n: '1', t: 'Étude & Conseil',       d: 'Audit énergétique, recommandations techniques, devis global' },
      { n: '2', t: 'Gros œuvre',            d: 'Structure, maçonnerie, isolation, couverture si nécessaire' },
      { n: '3', t: 'Second œuvre',          d: 'Plomberie, électricité, menuiserie, carrelage, peinture' },
      { n: '4', t: 'Livraison clé en main', d: 'Nettoyage de chantier, réception, garanties constructeur' },
    ],
  },
  bureau: {
    tag: 'Rénovation de bureau',
    title: "Des espaces de travail\ninspirants",
    sub: "Bureaux modernes et fonctionnels. Intervention rapide, contraintes minimales sur votre activité.",
    img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1400&q=80&auto=format&fit=crop',
    p1: "La rénovation de bureaux exige réactivité et précision. RAMELEC intervient en minimisant l'impact sur votre activité : travaux le soir, le week-end ou par phases.",
    p2: "Open spaces, salles de réunion, espaces de détente, accueil — nous concevons des environnements professionnels qui améliorent la productivité.",
    steps: [
      { n: '1', t: 'Analyse des besoins',   d: "Évaluation de l'espace, contraintes techniques, normes ERP" },
      { n: '2', t: 'Aménagement',           d: 'Cloisons, faux-plafonds, câblage réseau, éclairage LED' },
      { n: '3', t: 'Finitions',             d: 'Revêtements de sol, peinture corporate, mobilier intégré' },
      { n: '4', t: 'Mise en service',       d: 'Tests électriques, réception, remise des clés' },
    ],
  },
  commerce: {
    tag: 'Rénovation de commerce',
    title: "Votre commerce,\nune vitrine d'excellence",
    sub: "Boutiques, restaurants, hôtels — des espaces qui séduisent et valorisent votre enseigne.",
    img: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1400&q=80&auto=format&fit=crop',
    p1: "La rénovation commerciale est un investissement stratégique. RAMELEC vous accompagne avec une expertise reconnue en aménagement commercial haut de gamme.",
    p2: "De la vitrine à l'arrière-boutique, nous prenons en charge l'ensemble des travaux : électricité, plomberie, menuiserie sur mesure, revêtements premium.",
    steps: [
      { n: '1', t: 'Brief commercial',      d: 'Identité visuelle, flux clients, contraintes réglementaires' },
      { n: '2', t: 'Conception',            d: 'Agencement, matériaux, éclairage scénographique' },
      { n: '3', t: 'Réalisation express',   d: 'Travaux optimisés pour minimiser la fermeture' },
      { n: '4', t: 'Ouverture',             d: 'Remise en service, nettoyage, inauguration' },
    ],
  },
  'extension-maison': {
    tag: 'Extension de maison',
    title: "Agrandissez\nvotre espace de vie",
    sub: "Extension de plain-pied, surélévation, véranda — augmentez la surface et valorisez votre patrimoine.",
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80&auto=format&fit=crop',
    p1: "L'extension de maison est souvent plus économique qu'un déménagement. RAMELEC gère l'intégralité du projet : permis de construire, gros œuvre, raccordements et finitions.",
    p2: "Structure béton, ossature bois, verrière — nous choisissons avec vous la solution la mieux adaptée à votre projet et à votre budget.",
    steps: [
      { n: '1', t: 'Faisabilité',           d: 'Étude du terrain, PLU, orientation, budget prévisionnel' },
      { n: '2', t: 'Permis & Plans',        d: "Dépôt de permis de construire, plans d'architecte si requis" },
      { n: '3', t: 'Gros œuvre',            d: 'Fondations, structure, toiture, menuiseries extérieures' },
      { n: '4', t: 'Intérieur complet',     d: 'Raccordements, isolation, revêtements, livraison' },
    ],
  },
  'salle-de-bain': {
    tag: 'Rénovation salle de bain',
    title: "Votre salle de bain,\ntransformée",
    sub: "Création, rénovation complète ou partielle. Douche à l'italienne, baignoire, double vasque — un espace de bien-être sur mesure.",
    img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1400&q=80&auto=format&fit=crop',
    p1: "La salle de bain est l'une des pièces les plus techniques à rénover. RAMELEC maîtrise l'ensemble des corps de métier nécessaires : plomberie, carrelage, électricité, menuiserie et ventilation.",
    p2: "Nous concevons des salles de bain alliant fonctionnalité et esthétique, avec des matériaux durables et des finitions impeccables qui résistent à l'humidité et au temps.",
    steps: [
      { n: '1', t: 'Conception',          d: 'Plan 2D/3D, choix des matériaux, robinetterie et sanitaires' },
      { n: '2', t: 'Démolition',          d: 'Dépose soigneuse, protection des pièces adjacentes' },
      { n: '3', t: 'Gros œuvre',          d: 'Plomberie, électricité, isolation humidité, chape' },
      { n: '4', t: 'Finitions',           d: 'Carrelage, faïence, menuiserie, sanitaires, livraison' },
    ],
  },
  'cuisine': {
    tag: 'Rénovation cuisine',
    title: "Votre cuisine,\nréinventée",
    sub: "Cuisine ouverte, ilot central, rangements sur mesure — nous créons l'espace convivial que vous méritez.",
    img: '/album18/78image.jpg',
    p1: "La cuisine est le cœur de votre logement. RAMELEC prend en charge l'intégralité de votre projet : démolition, plomberie, électricité, pose de carrelage, installation du mobilier et des électroménagers.",
    p2: "Que vous souhaitiez une cuisine moderne avec ilot central, une cuisine aménagée avec rangements optimisés ou une rénovation complète, nous réalisons vos envies avec précision et goût.",
    steps: [
      { n: '1', t: 'Conception',          d: 'Plan d\'aménagement, choix du mobilier, devis détaillé' },
      { n: '2', t: 'Démolition',          d: 'Dépose cuisine existante, préparation des supports' },
      { n: '3', t: 'Réseaux',             d: 'Plomberie, électricité, ventilation, gaz si besoin' },
      { n: '4', t: 'Installation',        d: 'Pose mobilier, crédence, plan de travail, électroménager' },
    ],
  },
}
