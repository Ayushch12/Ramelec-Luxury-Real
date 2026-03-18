

// 'use client'
// import Link from 'next/link'
// import Image from 'next/image'
// import { useState } from 'react'
// import type { Project } from '@/lib/projects'

// interface Props {
//   project: Project
//   prev: Project
//   next: Project
//   backHref: string
//   backLabel: string
// }

// // Each gallery image can have an optional label: 'after' | 'before' | undefined
// // We alternate: first half = 'after', second half = 'before' by default
// // The client can override in lib/projects.ts later by adding galleryLabels array
// function getLabel(index: number, total: number): 'Après Travaux' | 'Avant Travaux' | null {
//   if (total <= 2) return index === 0 ? 'Après Travaux' : 'Avant Travaux'
//   const half = Math.ceil(total / 2)
//   if (index < half) return 'Après Travaux'
//   return 'Avant Travaux'
// }

// export default function ProjectDetailClient({ project, prev, next, backHref, backLabel }: Props) {
//   const [lightbox, setLightbox] = useState<{ src: string; label: string | null; idx: number } | null>(null)

//   const openLightbox = (src: string, label: string | null, idx: number) => {
//     setLightbox({ src, label, idx })
//     document.body.style.overflow = 'hidden'
//   }

//   const closeLightbox = () => {
//     setLightbox(null)
//     document.body.style.overflow = ''
//   }

//   const goNext = (e: React.MouseEvent) => {
//     e.stopPropagation()
//     if (!lightbox) return
//     const next = (lightbox.idx + 1) % project.gallery.length
//     setLightbox({ src: project.gallery[next], label: getLabel(next, project.gallery.length), idx: next })
//   }

//   const goPrev = (e: React.MouseEvent) => {
//     e.stopPropagation()
//     if (!lightbox) return
//     const prev = (lightbox.idx - 1 + project.gallery.length) % project.gallery.length
//     setLightbox({ src: project.gallery[prev], label: getLabel(prev, project.gallery.length), idx: prev })
//   }

//   // Close on Escape key
//   const handleKeyDown = (e: React.KeyboardEvent) => {
//     if (e.key === 'Escape') closeLightbox()
//     if (e.key === 'ArrowRight') goNext(e as unknown as React.MouseEvent)
//     if (e.key === 'ArrowLeft') goPrev(e as unknown as React.MouseEvent)
//   }

//   return (
//     <>
//       {/* ── HEADER ── */}
//       <div style={{ background: '#1A2744', paddingTop: 66 }}>
//         <div style={{ maxWidth: 1200, margin: '0 auto', padding: '28px 24px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
//           <Link href={backHref} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: "'Jost',sans-serif", fontSize: 13, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>
//             ← {backLabel}
//           </Link>
//           <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
//             <Link href={`/realisations/${prev.id}`} style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: "'Jost',sans-serif", fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>← Précédent</Link>
//             <div style={{ width: 1, height: 18, background: 'rgba(255,255,255,0.2)' }} />
//             <Link href={`/realisations/${next.id}`} style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: "'Jost',sans-serif", fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>Suivant →</Link>
//           </div>
//         </div>
//         <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px 36px' }}>
//           <h1 style={{ fontFamily: "'Cormorant Garamond',serif", color: '#fff', fontWeight: 300, fontSize: 'clamp(1.8rem,4vw,3.2rem)', marginBottom: 6 }}>{project.title}</h1>
//           <p style={{ fontFamily: "'Jost',sans-serif", fontSize: 16, color: 'rgba(184,212,218,0.75)', fontWeight: 300 }}>{project.sub}</p>
//         </div>
//       </div>

//       {/* ── BODY ── */}
//       <div style={{ background: '#F5F2EC' }}>
//         <div style={{ maxWidth: 1200, margin: '0 auto', padding: '44px 24px 80px' }}>

//           {/* Main grid: image + specs */}
//           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 44, marginBottom: 56 }}>
//             {/* Hero image — clickable */}
//             <div
//               onClick={() => openLightbox(project.img, 'Après Travaux', -1)}
//               style={{ borderRadius: 16, overflow: 'hidden', minHeight: 380, position: 'relative', cursor: 'zoom-in' }}
//               className="proj-hero-img"
//             >
//               <Image src={project.img} alt={project.title} fill style={{ objectFit: 'cover', transition: 'transform 0.4s' }} sizes="(max-width: 768px) 100vw, 55vw" />
//               {/* Hover overlay */}
//               <div className="img-hover-overlay" style={{ position: 'absolute', inset: 0, background: 'rgba(26,39,68,0.45)', display: 'flex', alignItems: 'flex-end', padding: '18px 20px', opacity: 0, transition: 'opacity 0.3s' }}>
//                 <span style={{ background: '#2E7D32', color: '#fff', fontFamily: "'Jost',sans-serif", fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '6px 14px', borderRadius: 20 }}>Après Travaux</span>
//                 <span style={{ marginLeft: 'auto', color: '#fff', fontSize: 22 }}>🔍</span>
//               </div>
//             </div>

//             {/* Specs panel */}
//             <div style={{ background: '#fff', borderRadius: 14, padding: '28px 24px', border: '1px solid rgba(26,39,68,0.08)', boxShadow: '0 1px 8px rgba(26,39,68,0.06)' }}>
//               {[
//                 { title: 'Cahier des charges',   items: project.specs },
//                 { title: 'Services proposés',    items: project.services },
//                 { title: 'Réalisations travaux', items: project.works },
//               ].map(sec => (
//                 <div key={sec.title} style={{ marginBottom: 24 }}>
//                   <div style={{ fontFamily: "'Jost',sans-serif", fontSize: 12, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9A96E', fontWeight: 600, marginBottom: 12 }}>{sec.title}</div>
//                   <ul style={{ listStyle: 'disc', paddingLeft: 18 }}>
//                     {sec.items.map(item => (
//                       <li key={item} style={{ fontFamily: "'Jost',sans-serif", fontSize: 15, color: '#1C1C1E', fontWeight: 300, lineHeight: 1.7, padding: '3px 0' }}>{item}</li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* ── GALLERY ── */}
//           <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(1.5rem,2.5vw,2rem)', fontWeight: 400, color: '#1A2744', marginBottom: 22 }}>
//             Galerie Photos
//           </h2>

//           {/* Legend */}
//           <div style={{ display: 'flex', gap: 20, marginBottom: 20, flexWrap: 'wrap' }}>
//             <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
//               <span style={{ background: '#2E7D32', width: 12, height: 12, borderRadius: '50%', display: 'inline-block' }} />
//               <span style={{ fontFamily: "'Jost',sans-serif", fontSize: 13, color: '#1C1C1E', fontWeight: 300 }}>Après Travaux</span>
//             </div>
//             <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
//               <span style={{ background: '#C9A96E', width: 12, height: 12, borderRadius: '50%', display: 'inline-block' }} />
//               <span style={{ fontFamily: "'Jost',sans-serif", fontSize: 13, color: '#1C1C1E', fontWeight: 300 }}>Avant Travaux</span>
//             </div>
//             <span style={{ fontFamily: "'Jost',sans-serif", fontSize: 12, color: 'rgba(28,28,30,0.45)', fontWeight: 300, marginLeft: 'auto', alignSelf: 'center' }}>Cliquez sur une photo pour l&apos;agrandir</span>
//           </div>

//           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 14 }}>
//             {project.gallery.map((src, i) => {
//               const label = getLabel(i, project.gallery.length)
//               const isAfter = label === 'Après Travaux'
//               return (
//                 <div
//                   key={i}
//                   className="gallery-img"
//                   onClick={() => openLightbox(src, label, i)}
//                   style={{ borderRadius: 12, overflow: 'hidden', aspectRatio: '4/5', position: 'relative', cursor: 'zoom-in' }}
//                 >
//                   <Image src={src} alt={`${project.title} — ${label} ${i + 1}`} fill style={{ objectFit: 'cover', transition: 'transform 0.4s' }} sizes="(max-width: 768px) 50vw, 25vw" />

//                   {/* Static label badge (always visible) */}
//                   <div style={{ position: 'absolute', top: 10, left: 10, zIndex: 2 }}>
//                     <span style={{
//                       background: isAfter ? '#2E7D32' : '#C9A96E',
//                       color: '#fff',
//                       fontFamily: "'Jost',sans-serif",
//                       fontSize: 10,
//                       letterSpacing: '0.18em',
//                       textTransform: 'uppercase',
//                       padding: '4px 10px',
//                       borderRadius: 16,
//                       fontWeight: 500,
//                     }}>{label}</span>
//                   </div>

//                   {/* Hover overlay with zoom icon */}
//                   <div className="gallery-hover-overlay" style={{ position: 'absolute', inset: 0, background: 'rgba(26,39,68,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.3s', zIndex: 1 }}>
//                     <span style={{ fontSize: 32, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}>🔍</span>
//                   </div>
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//       </div>

//       {/* ── LIGHTBOX ── */}
//       {lightbox && (
//         <div
//           onClick={closeLightbox}
//           onKeyDown={handleKeyDown}
//           tabIndex={0}
//           role="dialog"
//           aria-modal="true"
//           style={{
//             position: 'fixed', inset: 0, zIndex: 9999,
//             background: 'rgba(10,10,18,0.95)',
//             display: 'flex', alignItems: 'center', justifyContent: 'center',
//             padding: '20px',
//           }}
//         >
//           {/* Close button */}
//           <button
//             onClick={closeLightbox}
//             style={{ position: 'absolute', top: 20, right: 20, background: 'rgba(255,255,255,0.12)', border: 'none', color: '#fff', width: 44, height: 44, borderRadius: '50%', fontSize: 20, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}
//             aria-label="Fermer"
//           >✕</button>

//           {/* Prev arrow */}
//           <button
//             onClick={goPrev}
//             style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.12)', border: 'none', color: '#fff', width: 48, height: 48, borderRadius: '50%', fontSize: 22, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}
//             aria-label="Photo précédente"
//           >‹</button>

//           {/* Image */}
//           <div
//             onClick={e => e.stopPropagation()}
//             style={{ maxWidth: '88vw', maxHeight: '88vh', position: 'relative', borderRadius: 12, overflow: 'hidden' }}
//           >
//             <img
//               src={lightbox.src}
//               alt={lightbox.label || project.title}
//               style={{ maxWidth: '88vw', maxHeight: '80vh', objectFit: 'contain', display: 'block', borderRadius: 12 }}
//             />
//             {/* Label + caption below image */}
//             {lightbox.label && (
//               <div style={{ textAlign: 'center', marginTop: 14 }}>
//                 <span style={{
//                   background: lightbox.label === 'Après Travaux' ? '#2E7D32' : '#C9A96E',
//                   color: '#fff',
//                   fontFamily: "'Jost',sans-serif",
//                   fontSize: 12,
//                   letterSpacing: '0.2em',
//                   textTransform: 'uppercase',
//                   padding: '6px 18px',
//                   borderRadius: 20,
//                   fontWeight: 500,
//                 }}>{lightbox.label}</span>
//                 <p style={{ fontFamily: "'Jost',sans-serif", color: 'rgba(255,255,255,0.55)', fontSize: 13, marginTop: 8, fontWeight: 300 }}>{project.title}</p>
//               </div>
//             )}
//           </div>

//           {/* Next arrow */}
//           <button
//             onClick={goNext}
//             style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.12)', border: 'none', color: '#fff', width: 48, height: 48, borderRadius: '50%', fontSize: 22, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}
//             aria-label="Photo suivante"
//           >›</button>

//           {/* Counter */}
//           {lightbox.idx >= 0 && (
//             <div style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', fontFamily: "'Jost',sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.2em' }}>
//               {lightbox.idx + 1} / {project.gallery.length}
//             </div>
//           )}
//         </div>
//       )}

//       {/* ── CSS ── */}
//       <style>{`
//         .proj-hero-img:hover .img-hover-overlay { opacity: 1 !important; }
//         .proj-hero-img:hover img { transform: scale(1.03); }
//         .gallery-img:hover .gallery-hover-overlay { opacity: 1 !important; }
//         .gallery-img:hover img { transform: scale(1.05); }
//       `}</style>
//     </>
//   )
// }



'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import type { Project } from '@/lib/projects'

interface Props {
  project: Project
  prev: Project
  next: Project
  backHref: string
  backLabel: string
}

// If project has galleryLabels → use them directly
// Otherwise fallback: first half = Après, second half = Avant
function getLabel(
  index: number,
  total: number,
  labels?: ('after' | 'before')[]
): 'Après Travaux' | 'Avant Travaux' {
  if (labels && labels[index]) {
    return labels[index] === 'after' ? 'Après Travaux' : 'Avant Travaux'
  }
  const half = Math.ceil(total / 2)
  return index < half ? 'Après Travaux' : 'Avant Travaux'
}

export default function ProjectDetailClient({ project, prev, next, backHref, backLabel }: Props) {
  const [lightbox, setLightbox] = useState<{ src: string; label: string | null; idx: number } | null>(null)

  const openLightbox = (src: string, label: string | null, idx: number) => {
    setLightbox({ src, label, idx })
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightbox(null)
    document.body.style.overflow = ''
  }

  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!lightbox) return
    const next = (lightbox.idx + 1) % project.gallery.length
    setLightbox({ src: project.gallery[next], label: getLabel(next, project.gallery.length, project.galleryLabels), idx: next })
  }

  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!lightbox) return
    const prev = (lightbox.idx - 1 + project.gallery.length) % project.gallery.length
    setLightbox({ src: project.gallery[prev], label: getLabel(prev, project.gallery.length, project.galleryLabels), idx: prev })
  }

  // Close on Escape key
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowRight') goNext(e as unknown as React.MouseEvent)
    if (e.key === 'ArrowLeft') goPrev(e as unknown as React.MouseEvent)
  }

  return (
    <>
      {/* ── HEADER ── */}
      <div style={{ background: '#1A2744', paddingTop: 66 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '28px 24px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <Link href={backHref} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: "'Jost',sans-serif", fontSize: 13, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>
            ← {backLabel}
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <Link href={`/realisations/${prev.id}`} style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: "'Jost',sans-serif", fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>← Précédent</Link>
            <div style={{ width: 1, height: 18, background: 'rgba(255,255,255,0.2)' }} />
            <Link href={`/realisations/${next.id}`} style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: "'Jost',sans-serif", fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>Suivant →</Link>
          </div>
        </div>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px 36px' }}>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", color: '#fff', fontWeight: 300, fontSize: 'clamp(1.8rem,4vw,3.2rem)', marginBottom: 6 }}>{project.title}</h1>
          <p style={{ fontFamily: "'Jost',sans-serif", fontSize: 16, color: 'rgba(184,212,218,0.75)', fontWeight: 300 }}>{project.sub}</p>
        </div>
      </div>

      {/* ── BODY ── */}
      <div style={{ background: '#F5F2EC' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '44px 24px 80px' }}>

          {/* Main grid: image + specs */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 44, marginBottom: 56 }}>
            {/* Hero image — clickable */}
            <div
              onClick={() => openLightbox(project.img, 'Après Travaux', -1)}
              style={{ borderRadius: 16, overflow: 'hidden', minHeight: 380, position: 'relative', cursor: 'zoom-in' }}
              className="proj-hero-img"
            >
              <Image src={project.img} alt={project.title} fill style={{ objectFit: 'cover', transition: 'transform 0.4s' }} sizes="(max-width: 768px) 100vw, 55vw" />
              {/* Hover overlay */}
              <div className="img-hover-overlay" style={{ position: 'absolute', inset: 0, background: 'rgba(26,39,68,0.45)', display: 'flex', alignItems: 'flex-end', padding: '18px 20px', opacity: 0, transition: 'opacity 0.3s' }}>
                <span style={{ background: '#2E7D32', color: '#fff', fontFamily: "'Jost',sans-serif", fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '6px 14px', borderRadius: 20 }}>Après Travaux</span>
                <span style={{ marginLeft: 'auto', color: '#fff', fontSize: 22 }}>🔍</span>
              </div>
            </div>

            {/* Specs panel */}
            <div style={{ background: '#fff', borderRadius: 14, padding: '28px 24px', border: '1px solid rgba(26,39,68,0.08)', boxShadow: '0 1px 8px rgba(26,39,68,0.06)' }}>
              {[
                { title: 'Cahier des charges',   items: project.specs },
                { title: 'Services proposés',    items: project.services },
                { title: 'Réalisations travaux', items: project.works },
              ].map(sec => (
                <div key={sec.title} style={{ marginBottom: 24 }}>
                  <div style={{ fontFamily: "'Jost',sans-serif", fontSize: 12, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9A96E', fontWeight: 600, marginBottom: 12 }}>{sec.title}</div>
                  <ul style={{ listStyle: 'disc', paddingLeft: 18 }}>
                    {sec.items.map(item => (
                      <li key={item} style={{ fontFamily: "'Jost',sans-serif", fontSize: 15, color: '#1C1C1E', fontWeight: 300, lineHeight: 1.7, padding: '3px 0' }}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ── GALLERY ── */}
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(1.5rem,2.5vw,2rem)', fontWeight: 400, color: '#1A2744', marginBottom: 22 }}>
            Galerie Photos
          </h2>

          {/* Legend */}
          <div style={{ display: 'flex', gap: 20, marginBottom: 20, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ background: '#2E7D32', width: 12, height: 12, borderRadius: '50%', display: 'inline-block' }} />
              <span style={{ fontFamily: "'Jost',sans-serif", fontSize: 13, color: '#1C1C1E', fontWeight: 300 }}>Après Travaux</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ background: '#C9A96E', width: 12, height: 12, borderRadius: '50%', display: 'inline-block' }} />
              <span style={{ fontFamily: "'Jost',sans-serif", fontSize: 13, color: '#1C1C1E', fontWeight: 300 }}>Avant Travaux</span>
            </div>
            <span style={{ fontFamily: "'Jost',sans-serif", fontSize: 12, color: 'rgba(28,28,30,0.45)', fontWeight: 300, marginLeft: 'auto', alignSelf: 'center' }}>Cliquez sur une photo pour l&apos;agrandir</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 14 }}>
            {project.gallery.map((src, i) => {
              const label = getLabel(i, project.gallery.length, project.galleryLabels)
              const isAfter = label === 'Après Travaux'
              return (
                <div
                  key={i}
                  className="gallery-img"
                  onClick={() => openLightbox(src, label, i)}
                  style={{ borderRadius: 12, overflow: 'hidden', aspectRatio: '4/5', position: 'relative', cursor: 'zoom-in' }}
                >
                  <Image src={src} alt={`${project.title} — ${label} ${i + 1}`} fill style={{ objectFit: 'cover', transition: 'transform 0.4s' }} sizes="(max-width: 768px) 50vw, 25vw" />

                  {/* Static label badge (always visible) */}
                  <div style={{ position: 'absolute', top: 10, left: 10, zIndex: 2 }}>
                    <span style={{
                      background: isAfter ? '#2E7D32' : '#C9A96E',
                      color: '#fff',
                      fontFamily: "'Jost',sans-serif",
                      fontSize: 10,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      padding: '4px 10px',
                      borderRadius: 16,
                      fontWeight: 500,
                    }}>{label}</span>
                  </div>

                  {/* Hover overlay with zoom icon */}
                  <div className="gallery-hover-overlay" style={{ position: 'absolute', inset: 0, background: 'rgba(26,39,68,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.3s', zIndex: 1 }}>
                    <span style={{ fontSize: 32, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}>🔍</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <div
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(10,10,18,0.95)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '20px',
          }}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            style={{ position: 'absolute', top: 20, right: 20, background: 'rgba(255,255,255,0.12)', border: 'none', color: '#fff', width: 44, height: 44, borderRadius: '50%', fontSize: 20, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}
            aria-label="Fermer"
          >✕</button>

          {/* Prev arrow */}
          <button
            onClick={goPrev}
            style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.12)', border: 'none', color: '#fff', width: 48, height: 48, borderRadius: '50%', fontSize: 22, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}
            aria-label="Photo précédente"
          >‹</button>

          {/* Image */}
          <div
            onClick={e => e.stopPropagation()}
            style={{ maxWidth: '88vw', maxHeight: '88vh', position: 'relative', borderRadius: 12, overflow: 'hidden' }}
          >
            <img
              src={lightbox.src}
              alt={lightbox.label || project.title}
              style={{ maxWidth: '88vw', maxHeight: '80vh', objectFit: 'contain', display: 'block', borderRadius: 12 }}
            />
            {/* Label + caption below image */}
            {lightbox.label && (
              <div style={{ textAlign: 'center', marginTop: 14 }}>
                <span style={{
                  background: lightbox.label === 'Après Travaux' ? '#2E7D32' : '#B8D4DA',
                  color: lightbox.label === 'Après Travaux' ? '#fff' : '#2E7D32',
                  fontFamily: "'Jost',sans-serif",
                  fontSize: 12,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  padding: '6px 18px',
                  borderRadius: 20,
                  fontWeight: 500,
                }}>{lightbox.label}</span>
                <p style={{ fontFamily: "'Jost',sans-serif", color: 'rgba(255,255,255,0.55)', fontSize: 13, marginTop: 8, fontWeight: 300 }}>{project.title}</p>
              </div>
            )}
          </div>

          {/* Next arrow */}
          <button
            onClick={goNext}
            style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.12)', border: 'none', color: '#fff', width: 48, height: 48, borderRadius: '50%', fontSize: 22, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}
            aria-label="Photo suivante"
          >›</button>

          {/* Counter */}
          {lightbox.idx >= 0 && (
            <div style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', fontFamily: "'Jost',sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.2em' }}>
              {lightbox.idx + 1} / {project.gallery.length}
            </div>
          )}
        </div>
      )}

      {/* ── CSS ── */}
      <style>{`
        .proj-hero-img:hover .img-hover-overlay { opacity: 1 !important; }
        .proj-hero-img:hover img { transform: scale(1.03); }
        .gallery-img:hover .gallery-hover-overlay { opacity: 1 !important; }
        .gallery-img:hover img { transform: scale(1.05); }
      `}</style>
    </>
  )
}
