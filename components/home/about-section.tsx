import { ArrowUpRight } from 'lucide-react'
import { site } from '@/content/site'
import { SectionLabel } from '@/components/section-label'

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-5 pt-28 md:px-8 md:pt-40">
      <div className="grid gap-8 border-t pt-6 md:grid-cols-12">
        <SectionLabel className="md:col-span-3">About</SectionLabel>

        <div className="flex flex-col gap-12 md:col-span-9">
          <div className="flex max-w-3xl flex-col gap-5">
            {site.about.map((paragraph, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? 'text-pretty text-xl leading-relaxed md:text-2xl md:leading-relaxed'
                    : 'text-pretty text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed'
                }
              >
                {paragraph}
              </p>
            ))}
          </div>

          <dl className="grid gap-10 sm:grid-cols-2">
            <div className="flex flex-col gap-3">
              <dt>
                <SectionLabel as="p">Education</SectionLabel>
              </dt>
              {site.education.map((item) => (
                <dd key={item.degree} className="flex flex-col gap-0.5">
                  <span className="text-base font-medium">{item.degree}</span>
                  <span className="text-sm text-muted-foreground">
                    {item.school} · {item.year}
                  </span>
                </dd>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <dt>
                <SectionLabel as="p">Focus</SectionLabel>
              </dt>
              <dd>
                <ul className="flex flex-wrap gap-1.5">
                  {site.focus.map((item) => (
                    <li
                      key={item}
                      className="rounded-sm bg-secondary px-2.5 py-1 text-sm text-secondary-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>

          {site.resumeUrl ? (
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-1.5 text-sm font-medium underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
            >
              View resume
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </section>
  )
}
