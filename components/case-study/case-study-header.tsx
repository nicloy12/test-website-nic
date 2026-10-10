import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import type { CaseStudy } from '@/content/projects'
import { SectionLabel } from '@/components/section-label'

export function CaseStudyHeader({ project }: { project: CaseStudy }) {
  const meta = [
    { label: 'Role', value: project.role },
    { label: 'Timeline', value: `${project.timeline} · ${project.year}` },
    { label: 'Team', value: project.team },
    { label: 'Tools', value: project.tools.join(', ') },
  ]

  return (
    <header className="mx-auto max-w-6xl px-5 pt-10 md:px-8 md:pt-16">
      <Link
        href="/#work"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        All work
      </Link>

      <div className="mt-12 flex flex-col gap-6 md:mt-20">
        <SectionLabel as="p">{project.tags.join(' · ')}</SectionLabel>
        <h1 className="text-balance text-5xl font-medium leading-none tracking-tight md:text-8xl">
          {project.title}
        </h1>
        <p className="max-w-3xl text-balance text-xl leading-relaxed text-muted-foreground md:text-2xl md:leading-relaxed">
          {project.tagline}
        </p>
      </div>

      <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t pt-6 md:grid-cols-4">
        {meta.map((item) => (
          <div key={item.label} className="flex flex-col gap-1.5">
            <dt>
              <SectionLabel as="p">{item.label}</SectionLabel>
            </dt>
            <dd className="text-sm leading-relaxed">{item.value}</dd>
          </div>
        ))}
      </dl>

      <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-md bg-card md:mt-16">
        <Image
          src={project.cover.src || '/placeholder.svg'}
          alt={project.cover.alt}
          fill
          priority
          sizes="(min-width: 1152px) 1152px, 100vw"
          className="object-cover"
        />
      </div>
    </header>
  )
}
