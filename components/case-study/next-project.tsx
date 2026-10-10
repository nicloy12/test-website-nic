import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { CaseStudy } from '@/content/projects'
import { SectionLabel } from '@/components/section-label'

export function NextProject({ project }: { project: CaseStudy }) {
  return (
    <aside className="mx-auto max-w-6xl px-5 pt-28 md:px-8 md:pt-40">
      <Link
        href={`/work/${project.slug}`}
        className="group grid items-center gap-6 border-t pt-6 md:grid-cols-12"
      >
        <div className="flex flex-col gap-4 md:col-span-6">
          <SectionLabel as="p">Next case study</SectionLabel>
          <p className="flex items-center gap-3 text-4xl font-medium tracking-tight md:text-6xl">
            {project.title}
            <ArrowRight
              className="size-8 transition-transform duration-300 group-hover:translate-x-2 md:size-10"
              aria-hidden="true"
            />
          </p>
          <p className="text-pretty leading-relaxed text-muted-foreground">{project.tagline}</p>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-card md:col-span-6">
          <Image
            src={project.cover.src || '/placeholder.svg'}
            alt=""
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>
      </Link>
    </aside>
  )
}
