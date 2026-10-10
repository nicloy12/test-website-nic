import Image from 'next/image'
import Link from 'next/link'
import type { CaseStudy } from '@/content/projects'

export function ProjectCard({
  project,
  priority = false,
}: {
  project: CaseStudy
  priority?: boolean
}) {
  return (
    <Link href={`/work/${project.slug}`} className="group flex flex-col gap-4 outline-none">
      <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-card ring-offset-4 ring-offset-background transition-shadow group-focus-visible:ring-2 group-focus-visible:ring-ring">
        <Image
          src={project.cover.src || '/placeholder.svg'}
          alt={project.cover.alt}
          fill
          priority={priority}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-base font-medium">
            <span className="bg-[linear-gradient(var(--accent),var(--accent))] bg-[length:0%_0.4em] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_0.4em]">
              {project.title}
            </span>
          </h3>
          <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
        </div>
        <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{project.tagline}</p>
        <ul className="mt-2 flex flex-wrap gap-1.5" aria-label="Tags">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-sm bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  )
}
