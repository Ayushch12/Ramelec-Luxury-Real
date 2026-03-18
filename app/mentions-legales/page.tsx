import Link from 'next/link'

const sections = [
  {
    title: 'Éditeur du site',
    content: [
      { label: 'Raison sociale',      value: 'RAMELEC' },
      { label: 'Forme juridique',     value: 'Société par Actions Simplifiée (SAS)' },
      { label: 'SIREN',               value: '978 951 291' },
      { label: 'SIRET (siège)',       value: '978 951 291 00019' },
      { label: 'Siège social',        value: '3 Rue Lavoisier, 93500 Pantin, France' },
      { label: 'Date de création',    value: '26 août 2023' },
      { label: 'Président',           value: 'Anghel Stelian' },
      { label: 'Téléphone',           value: '+33 7 60 49 39 67' },
      { label: 'Email',               value: 'ramelec.ang@gmail.com' },
      { label: 'Activité principale', value: "Travaux de rénovation tous corps d'état" },
    ],
  },
  {
    title: 'Directeur de la publication',
    content: [
      { label: 'Responsable', value: 'Anghel Stelian, Président de RAMELEC' },
      { label: 'Contact',     value: 'ramelec.ang@gmail.com' },
    ],
  },
  {
    title: 'Propriété intellectuelle',
    prose: "L'ensemble du contenu de ce site (textes, photographies, images, logos, vidéos, icônes, mise en page et charte graphique) est la propriété exclusive de RAMELEC ou de ses partenaires, et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.\n\nToute reproduction, représentation, modification, publication ou transmission, totale ou partielle, du contenu de ce site par quelque procédé que ce soit, sans l'autorisation expresse et préalable de RAMELEC, est interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la Propriété Intellectuelle.",
  },
  {
    title: 'Données personnelles et RGPD',
    prose: "Conformément au Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679) et à la loi n° 78-17 du 6 janvier 1978 modifiée relative à l'informatique, aux fichiers et aux libertés, vous disposez des droits suivants concernant vos données personnelles :\n\n• Droit d'accès à vos données\n• Droit de rectification de vos données\n• Droit à l'effacement (« droit à l'oubli »)\n• Droit d'opposition au traitement\n• Droit à la portabilité de vos données\n• Droit à la limitation du traitement\n\nLes informations collectées via le formulaire de contact (nom, prénom, e-mail, téléphone, description du projet) sont utilisées exclusivement pour répondre à votre demande. Elles ne sont ni vendues, ni transmises à des tiers à des fins commerciales.\n\nResponsable du traitement : Anghel Stelian — RAMELEC, 3 Rue Lavoisier, 93500 Pantin.\nContact RGPD : ramelec.ang@gmail.com",
  },
  {
    title: 'Cookies',
    prose: "Ce site peut utiliser des cookies techniques strictement nécessaires à son bon fonctionnement. Aucun cookie publicitaire ou de traçage commercial n'est utilisé sans votre consentement préalable. Vous pouvez configurer votre navigateur pour refuser les cookies ou être alerté lorsqu'un cookie est envoyé.",
  },
  {
    title: 'Limitation de responsabilité',
    prose: "RAMELEC s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu.\n\nToutefois, RAMELEC ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à la disposition sur ce site et décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site. L'utilisation du présent site est régie par le droit français.",
  },
  {
    title: 'Droit applicable et juridiction',
    prose: "Les présentes mentions légales sont soumises au droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.\n\nTribunal compétent : Tribunal de Commerce de Bobigny (93000), compétent pour les litiges liés à l'activité commerciale de RAMELEC SAS.",
  },
]

export default function MentionsLegales() {
  return (
    <>
      <div style={{ background: '#1A2744', padding: 'clamp(90px,12vw,110px) clamp(20px,4vw,52px) 36px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: "'Jost',sans-serif", fontSize: 13, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', marginBottom: 16 }}>
            ← Accueil
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <div style={{ width: 22, height: 1, background: '#2E7D32' }} />
            <span style={{ fontFamily: "'Jost',sans-serif", fontSize: 11, letterSpacing: '0.36em', textTransform: 'uppercase', color: '#B8D4DA', fontWeight: 300 }}>Informations légales</span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", color: '#fff', fontWeight: 300, fontSize: 'clamp(2rem,4vw,3.2rem)' }}>
            Mentions légales
          </h1>
          <p style={{ fontFamily: "'Jost',sans-serif", color: 'rgba(184,212,218,0.7)', fontSize: 14, fontWeight: 300, marginTop: 10 }}>
            Dernière mise à jour : mars 2026
          </p>
        </div>
      </div>

      <section style={{ padding: 'clamp(40px,5vw,64px) clamp(20px,4vw,52px) 80px', background: '#F5F2EC' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>

          {sections.map((s) => (
            <div key={s.title} style={{ marginBottom: 28, background: '#fff', borderRadius: 12, padding: 'clamp(22px,3vw,34px)', border: '1px solid rgba(26,39,68,0.08)', boxShadow: '0 1px 4px rgba(26,39,68,0.05)' }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(1.2rem,2.5vw,1.6rem)', fontWeight: 500, color: '#1A2744', marginBottom: 18, paddingBottom: 12, borderBottom: '2px solid rgba(46,125,50,0.2)' }}>
                {s.title}
              </h2>

              {'content' in s && s.content && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {s.content.map((row, i) => (
                    <div key={row.label} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', padding: '10px 0', borderBottom: i < s.content!.length - 1 ? '1px solid rgba(26,39,68,0.06)' : 'none' }}>
                      <span style={{ fontFamily: "'Jost',sans-serif", fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#2E7D32', fontWeight: 500, minWidth: 180, flexShrink: 0 }}>
                        {row.label}
                      </span>
                      <span style={{ fontFamily: "'Jost',sans-serif", fontSize: 16, color: '#1C1C1E', fontWeight: 400, lineHeight: 1.6 }}>
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {'prose' in s && s.prose && (
                <p style={{ fontFamily: "'Jost',sans-serif", fontSize: 16, lineHeight: 1.9, color: '#1C1C1E', fontWeight: 300, whiteSpace: 'pre-line' }}>
                  {s.prose}
                </p>
              )}
            </div>
          ))}

          {/* Contact info box */}
          <div style={{ background: 'rgba(46,125,50,0.07)', border: '1px solid rgba(46,125,50,0.2)', borderRadius: 10, padding: '20px 24px', display: 'flex', gap: 14, alignItems: 'flex-start', marginTop: 16 }}>
            <span style={{ fontSize: 20, flexShrink: 0 }}>ℹ️</span>
            <p style={{ fontFamily: "'Jost',sans-serif", fontSize: 15.5, color: '#1C1C1E', fontWeight: 300, lineHeight: 1.75 }}>
              Pour toute question relative au présent site ou à nos activités, contactez-nous à{' '}
              <a href="mailto:ramelec.ang@gmail.com" style={{ color: '#2E7D32', fontWeight: 500, textDecoration: 'none' }}>ramelec.ang@gmail.com</a>{' '}
              ou au{' '}
              <a href="tel:+33760493967" style={{ color: '#2E7D32', fontWeight: 500, textDecoration: 'none' }}>+33 7 60 49 39 67</a>.
            </p>
          </div>

        </div>
      </section>
    </>
  )
}
