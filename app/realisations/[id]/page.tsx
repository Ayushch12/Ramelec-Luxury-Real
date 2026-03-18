// Server Component — fetches data, renders ClientProjectPage
import { projects } from '@/lib/projects'
import { notFound } from 'next/navigation'
import ProjectDetailClient from './ProjectDetailClient'

export function generateStaticParams() {
  return projects.map(p => ({ id: p.id }))
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id)
  if (!project) notFound()

  const list = projects.filter(p => p.cat === project.cat)
  const idx  = list.findIndex(p => p.id === project.id)
  const prev = list[(idx - 1 + list.length) % list.length]
  const next = list[(idx + 1) % list.length]

  return (
    <ProjectDetailClient
      project={project}
      prev={prev}
      next={next}
      backHref={project.cat === 'pro' ? '/realisations/professionnel' : '/realisations/particulier'}
      backLabel={project.cat === 'pro' ? 'Retour — Professionnel' : 'Retour — Particulier'}
    />
  )
}
