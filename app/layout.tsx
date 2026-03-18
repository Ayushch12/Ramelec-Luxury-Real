import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'RAMELEC Luxury — Rénovation Haut de Gamme, Paris',
  description: "RAMELEC est votre partenaire de confiance pour la rénovation haut de gamme à Paris. Tous corps d'état, gestion de projet clé en main.",
  keywords: 'rénovation haut de gamme Paris, tous corps état, RAMELEC, luxury renovation Paris',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
