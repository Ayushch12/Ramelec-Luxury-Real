
export type Project = {
  id: string
  title: string
  titleEn: string
  sub: string
  subEn: string
  cat: 'pro' | 'part'
  img: string                              // main card image
  specs: string[]
  specsEn: string[]
  services: string[]
  servicesEn: string[]
  works: string[]
  worksEn: string[]
  gallery: string[]                        // all photos
  galleryLabels?: ('after' | 'before')[]  // one per photo → 'after' or 'before'
}

export const projects: Project[] = [

  // ─────────────────────────────────────────────────────────
  //  PROFESSIONNEL
  // ─────────────────────────────────────────────────────────

  {
    id: 'imm14',
    title: 'Immeuble Paris 14ème',
    titleEn: 'Building in the 14th arrondissement',
    sub: "Rénovation des parties communes d'un immeuble",
    subEn: 'Renovation of the common areas of a building',
    cat: 'pro',

    img: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=600&q=75',
    // ↑ Replace with: '/images/imm14/apres-1.jpg'

    specs: [
      "Ravalement façade rue, façade cour et pignon",
      "Extension 15m² dans la cour avec terrasse",
    ],
    specsEn: [
      "Renovation of street facade, courtyard facade and gable end",
      "15m² extension in the courtyard with terrace",
    ],
    services: [
      "Proposition d'aménagement intérieur et réalisation de plan ainsi que les plans électriques",
    ],
    servicesEn: [
      "Interior design proposal and plan creation, including electrical plans",
    ],
    works: ["Démolition","Cloisonnement","Plomberie","Chauffage","Électricité","Peinture","Carrelage","Parquet","Menuiserie intérieure"],
    worksEn: ["Demolition","Partitioning","Plumbing","Heating","Electricity","Paint","Tiles","Parquet","Interior carpentry"],

    gallery: [
      // ↓ Replace each URL with your real photo path
      // 'after' photos first, then 'before' photos
      '/Album27ruedidot/58.png', // après 1
      '/Paris75005/17.png',  // après 2
      '/Album27ruedidot/60.png', // après 1
      '/Album27ruedidot/61.png', // après 1
      '/Album27ruedidot/62.png', // après 1
      '/Album27ruedidot/56.png', // après 1
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=600&q=75',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?w=600&q=75',
      '/Album27ruedidot/15.png', // avant
      '/Album27ruedidot/35.png', // avant
      '/Album27ruedidot/45.png', //
      '/Album27ruedidot/48.png', //
      '/Album27ruedidot/50.png', //

    ],
    galleryLabels: [
      'after',   // après 1
      'after',   // après 2
      'after',   // après 3
      'after',   // après 4
      'after',   // après 5
      'after',   // après 6
      'after',   // après 4
      'after',   // après 5
      'before',  // avant 1
      'before',  // avant 2
      'before',  // avant 1
      'before',  // avant 2
      'before',  // avant 1
      'before',  // avant 2
      'before',  // avant 1
      'before',  // avant 2
    ],
  },

  {
    id: 'com11',
    title: 'Commerce Paris 09ème',
    titleEn: 'Commerce Paris 11th',
    sub: "Rénovation complète d'un espace commercial",
    subEn: 'Renovation of a shop',
    cat: 'pro',
    img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=600&q=75',
    specs: ["Surface : 120m²", "Rénovation complète clé en main"],
    specsEn: ["Area: 120m²", "Full turnkey renovation"],
    services: ["Conception & aménagement commercial", "Mise aux normes ERP"],
    servicesEn: ["Commercial design & layout", "ERP compliance upgrade"],
    works: ["Démolition","Électricité commerciale","Plomberie","Carrelage","Peinture","Menuiserie sur mesure"],
    worksEn: ["Demolition","Commercial electrical","Plumbing","Tiling","Paint","Bespoke joinery"],
    gallery: [
      // ↓ Replace each URL with your real photo path
      // 'after' photos first, then 'before' photos
      '/Paris75005/16.png', // après 1
      '/Paris75005/17.png',  // après 2
      '/Paris75005/18.png',  // après 3
      '/Paris75005/19.png',  // après 4
      '/Paris75005/20.png',  // après 5
      'https://images.unsplash.com/photo-1494526585095-c41746248156?w=600&q=75',
      '/Paris75005/2.png',  // avant 1
      '/Paris75005/1.png',  // avant 2
      '/Paris75005/3.png',  // avant 2
      '/Paris75005/4.png',  // avant 2
      '/Paris75005/5.png',  // avant 2
      '/Paris75005/6.png',  // avant 2
    ],
    galleryLabels: [
      'after',   // après 1
      'after',   // après 2
      'after',   // après 3
      'after',   // après 4
      'after',   // après 5
      'after',   // après 6
      'before',  // avant 1
      'before',  // avant 2
      'before',  // avant 1
      'before',  // avant 2
      'before',  // avant 1
      'before',  // avant 2
    ],
  },

  {
    id: 'bur11',
    title: 'Bureau Paris 11ème',
    titleEn: 'Paris 11th district office',
    sub: "Rénovation d'un plateau de bureaux",
    subEn: 'Office floor renovation',
    cat: 'pro',
    img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=75',
    specs: ["Surface : 250m²", "Open space + salles de réunion"],
    specsEn: ["Area: 250m²", "Open space + meeting rooms"],
    services: ["Aménagement espace de travail", "Câblage réseau & téléphonie"],
    servicesEn: ["Workspace layout", "Network & telephony cabling"],
    works: ["Cloisons amovibles","Faux-plafonds","Électricité","Éclairage LED","Revêtements de sol","Peinture"],
    worksEn: ["Movable partitions","False ceilings","Electrical","LED lighting","Floor coverings","Paint"],
    gallery: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=75',  // après 1
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=75', // après 2
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=75',    // avant 1
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=75', // avant 2
    ],
    galleryLabels: ['after','after','after','after','after','before'],
  },

  // ─────────────────────────────────────────────────────────
  //  PARTICULIER
  // ─────────────────────────────────────────────────────────

  {
    id: 'maivic',
    title: 'Maison Vincennes',
    titleEn: 'Vincennes House',
    sub: "Rénovation complète d'une maison 100m²",
    subEn: 'Renovation of a 100m² house',
    cat: 'part',
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80&auto=format&fit=crop',
    specs: ["Surface : 100m²", "Rénovation complète tous corps d'état"],
    specsEn: ["Area: 100m²", "Full renovation, all trades"],
    services: ["Conception & coordination complète"],
    servicesEn: ["Full design & coordination"],
    works: ["Plomberie","Électricité","Parquet","Peinture","Cuisine sur mesure","Salle de bain"],
    worksEn: ["Plumbing","Electrical","Parquet","Paint","Bespoke kitchen","Bathroom"],
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=75',

      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=75',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=75',
    ],
    galleryLabels: ['after','after','before','before'],
  },

  {
    id: 'maichat',
    title: 'Maison de Châtillon',
    titleEn: 'House of Châtillon',
    sub: "Rénovation d'une maison 100m²",
    subEn: 'Renovation of a 100m² house',
    cat: 'part',
    img: '/album18/112img.png',
    specs: ["Surface : 100m²", "Rénovation partielle + cuisine neuve"],
    specsEn: ["Area: 100m²", "Partial renovation + new kitchen"],
    services: ["Gestion de projet complète"],
    servicesEn: ["Full project management"],
    works: ["Cuisine","Salle de bain","Électricité","Peinture","Parquet"],
    worksEn: ["Kitchen","Bathroom","Electrical","Paint","Parquet"],
    gallery: [

      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=75',
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=75',
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=600&q=75',
    ],
    galleryLabels: ['after','after','before','before'],
  },

  {
    id: 'appvic',
    title: 'Appartement Vincennes',
    titleEn: 'Apartment in Vincennes',
    sub: "Rénovation d'un appartement 2 pièces",
    subEn: 'Renovation of a two-room apartment',
    cat: 'part',
    img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80&auto=format&fit=crop',
    specs: ["Surface : 45m²", "Rénovation complète"],
    specsEn: ["Area: 45m²", "Full renovation"],
    services: ["Optimisation de l'espace"],
    servicesEn: ["Space optimisation"],
    works: ["Plomberie","Électricité","Carrelage","Peinture","Menuiserie"],
    worksEn: ["Plumbing","Electrical","Tiling","Paint","Joinery"],
    gallery: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=75',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=75',

      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=75',
    ],
    galleryLabels: ['after','after','before','before'],
  },

  {
    id: 'app17',
    title: 'Appartement Paris 17ème',
    titleEn: 'Apartment in the 17th arrondissement',
    sub: 'Rénovation de deux appartements',
    subEn: 'Renovation of two apartments, one 6-room and one 5-room',
    cat: 'part',
    img: '/album18/115img.jpg',
    specs: ["6 pièces + 5 pièces", "Rénovation haut de gamme"],
    specsEn: ["6-room + 5-room", "High-end renovation"],
    services: ["Conception & coordination", "Matériaux premium"],
    servicesEn: ["Design & coordination", "Premium materials"],
    works: ["Plomberie","Électricité","Parquet","Peinture","Cuisine","Salles de bain"],
    worksEn: ["Plumbing","Electrical","Parquet","Paint","Kitchen","Bathrooms"],
    gallery: [

      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=75',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=75',
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=75',
    ],
    galleryLabels: ['after','after','before','before'],
  },

  {
    id: 'app16',
    title: 'Appartement Paris 16ème',
    titleEn: 'Apartment in the 16th arrondissement',
    sub: "Rénovation d'un appartement 220m²",
    subEn: 'Renovation of a 220m² apartment',
    cat: 'part',
    img: '/album18/113img.png',
    specs: ["Surface : 220m²", "Rénovation complète prestige"],
    specsEn: ["Area: 220m²", "Full prestige renovation"],
    services: ["Architecture intérieure", "Suivi de chantier"],
    servicesEn: ["Interior architecture", "Site supervision"],
    works: ["Plomberie","Électricité","Parquet","Peinture","Menuiserie sur mesure"],
    worksEn: ["Plumbing","Electrical","Parquet","Paint","Bespoke joinery"],
    gallery: [
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=75',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=75',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=75',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=75',
    ],
    galleryLabels: ['after','after','before','before'],
  },

  {
    id: 'app15',
    title: 'Appartement Paris 15ème',
    titleEn: 'Apartment in the 15th arrondissement',
    sub: 'Deux appartements 2-pièces rénovés',
    subEn: 'Renovation of two 2-room apartments',
    cat: 'part',
    img: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1200&q=80&auto=format&fit=crop',
    specs: ["2 × 2-pièces", "Rénovation complète"],
    specsEn: ["2 × 2-room apartments", "Full renovation"],
    services: ["Coordination multi-lots"],
    servicesEn: ["Multi-unit coordination"],
    works: ["Plomberie","Électricité","Carrelage","Peinture"],
    worksEn: ["Plumbing","Electrical","Tiling","Paint"],
    gallery: [
      'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=75',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=75',

      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=75',
    ],
    galleryLabels: ['after','after','before','before'],
  },

  {
    id: 'app10',
    title: 'Appartement Paris 10ème',
    titleEn: 'Apartment in the 10th arrondissement',
    sub: "Rénovation d'un 3 pièces",
    subEn: 'Renovation of a 3-room apartment',
    cat: 'part',
    img: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1200&q=80&auto=format&fit=crop',
    specs: ["Surface : 65m²", "Rénovation complète"],
    specsEn: ["Area: 65m²", "Full renovation"],
    services: ["Optimisation de l'agencement"],
    servicesEn: ["Layout optimisation"],
    works: ["Plomberie","Électricité","Parquet","Carrelage","Peinture"],
    worksEn: ["Plumbing","Electrical","Parquet","Tiling","Paint"],
    gallery: [
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=600&q=75',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=75',
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=75',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=75',
    ],
    galleryLabels: ['after','after','before','before'],
  },

  {
    id: 'app8',
    title: 'Appartement Paris 8ème',
    titleEn: 'Apartment in Paris 8th arrondissement',
    sub: "Rénovation d'un appartement 170m²",
    subEn: 'Renovation of a 170m² apartment',
    cat: 'part',
    img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=75',
    specs: ["Surface : 170m²", "Rénovation haut de gamme prestige"],
    specsEn: ["Area: 170m²", "High-end prestige renovation"],
    services: ["Architecture intérieure complète"],
    servicesEn: ["Full interior architecture"],
    works: ["Plomberie","Électricité","Parquet","Menuiserie","Cuisine sur mesure","Salles de bain"],
    worksEn: ["Plumbing","Electrical","Parquet","Joinery","Bespoke kitchen","Bathrooms"],
    gallery: [
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=75',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=75',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=75',
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=75',
    ],
    galleryLabels: ['after','after','before','before'],
  },

]

export const proProjects  = projects.filter(p => p.cat === 'pro')
export const partProjects = projects.filter(p => p.cat === 'part')