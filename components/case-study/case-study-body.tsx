import type { Section } from '@/content/projects'
import { BlockRenderer } from '@/components/case-study/block-renderer'
import { SectionLabel } from '@/components/section-label'

export function CaseStudyBody({ sections }: { sections: Section[] }) {
  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-5 pt-20 md:px-8 md:pt-28 lg:grid-cols-12">
      {sections.length > 1 ? (
        <nav aria-label="Case study sections" className="hidden lg:col-span-3 lg:block">
          <ol className="sticky top-28 flex flex-col gap-3 text-sm">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      ) : null}

      <div className="flex flex-col gap-20 md:gap-28 lg:col-span-8 lg:col-start-5">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            aria-labelledby={`${section.id}-label`}
            className="flex scroll-mt-24 flex-col gap-10"
          >
            <div id={`${section.id}-label`} className="border-t pt-6">
              <SectionLabel>{section.label}</SectionLabel>
            </div>
            {section.blocks.map((block, i) => (
              <BlockRenderer key={i} block={block} />
            ))}
          </section>
        ))}
      </div>
    </div>
  )
}
