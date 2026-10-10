import { projects } from '@/content/projects'
import { ProjectCard } from '@/components/project-card'
import { SectionLabel } from '@/components/section-label'

export function WorkSection() {
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-20 px-5 md:px-8">
      <div className="flex items-baseline justify-between border-t pt-6">
        <SectionLabel>Selected work</SectionLabel>
        <span className="font-mono text-xs text-muted-foreground">
          {String(projects.length).padStart(2, '0')} case studies
        </span>
      </div>
      <div className="mt-8 grid gap-x-6 gap-y-14 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} priority={index < 2} />
        ))}
      </div>
    </section>
  )
}
