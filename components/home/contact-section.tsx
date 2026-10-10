import { ArrowUpRight } from 'lucide-react'
import { site } from '@/content/site'
import { SectionLabel } from '@/components/section-label'
import { CopyEmailButton } from '@/components/copy-email-button'

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-5 pt-28 md:px-8 md:pt-40">
      <div className="grid gap-8 border-t pt-6 md:grid-cols-12">
        <SectionLabel className="md:col-span-3">Contact</SectionLabel>

        <div className="flex flex-col gap-10 md:col-span-9">
          <p className="max-w-3xl text-balance text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            Hiring, collaborating, or just want to talk research methods? Say hello.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="text-lg font-medium underline decoration-accent decoration-2 underline-offset-[6px] transition-colors hover:decoration-foreground md:text-xl"
            >
              {site.email}
            </a>
            <CopyEmailButton email={site.email} />
          </div>

          <ul className="flex flex-col divide-y border-y">
            {site.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between py-4 text-base transition-colors hover:text-foreground"
                >
                  {social.label}
                  <ArrowUpRight
                    className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
