import Link from 'next/link'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { site } from '@/content/site'

function Headline() {
  const index = site.highlight ? site.headline.indexOf(site.highlight) : -1
  if (index === -1) return <>{site.headline}</>

  const before = site.headline.slice(0, index)
  const after = site.headline.slice(index + site.highlight.length)

  return (
    <>
      {before}
      <mark className="relative whitespace-nowrap bg-transparent text-foreground">
        <span
          aria-hidden="true"
          className="absolute inset-x-[-0.08em] bottom-[0.08em] top-[0.52em] -z-10 origin-left animate-in rounded-sm bg-accent duration-700 ease-out fade-in slide-in-from-left-4 fill-mode-both [animation-delay:400ms]"
        />
        {site.highlight}
      </mark>
      {after}
    </>
  )
}

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20 pt-20 md:px-8 md:pb-32 md:pt-36">
      <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground animate-in fade-in duration-500 fill-mode-both">
        <span className="relative flex size-2" aria-hidden="true">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75 motion-reduce:animate-none" />
          <span className="relative inline-flex size-2 rounded-full bg-accent" />
        </span>
        {site.availability}
      </p>

      <h1 className="isolate mt-8 max-w-5xl text-balance text-4xl font-medium leading-[1.05] tracking-tight animate-in fade-in slide-in-from-bottom-3 duration-700 fill-mode-both [animation-delay:100ms] sm:text-5xl md:text-7xl">
        <Headline />
      </h1>

      <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground animate-in fade-in slide-in-from-bottom-2 duration-700 fill-mode-both [animation-delay:250ms]">
        {site.intro}
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-3 animate-in fade-in duration-700 fill-mode-both [animation-delay:350ms]">
        <Link
          href="/#work"
          className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          View case studies
          <ArrowDown className="size-4" aria-hidden="true" />
        </Link>
        <a
          href={`mailto:${site.email}`}
          className="inline-flex h-11 items-center gap-2 rounded-md bg-secondary px-5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-border"
        >
          Get in touch
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
