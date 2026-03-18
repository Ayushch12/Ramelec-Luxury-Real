// Server Component — no event handlers, safe for generateStaticParams
import { notFound } from 'next/navigation'
import ExpertiseClient from './ExpertiseClient'
import { EXPERTISE_DATA, EXPERTISE_TABS, type ExpertiseType } from '@/lib/expertise'

export function generateStaticParams() {
  return EXPERTISE_TABS.map(t => ({ type: t.key }))
}

export default function ExpertisePage({ params }: { params: { type: string } }) {
  const data = EXPERTISE_DATA[params.type as ExpertiseType]
  if (!data) notFound()
  return <ExpertiseClient data={data} currentType={params.type} />
}
