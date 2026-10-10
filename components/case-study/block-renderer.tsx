import Image from 'next/image'
import type { Block } from '@/content/projects'

function BlockHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-xl font-medium tracking-tight md:text-2xl">{children}</h3>
}

export function BlockRenderer({ block }: { block: Block }) {
  switch (block.type) {
    case 'text':
      return (
        <div className="flex flex-col gap-4">
          {block.heading ? <BlockHeading>{block.heading}</BlockHeading> : null}
          {block.body.map((paragraph, i) => (
            <p key={i} className="text-pretty text-base leading-relaxed text-foreground/85 md:text-lg md:leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      )

    case 'image':
      return (
        <figure className="flex flex-col gap-3">
          <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-card">
            <Image
              src={block.src || '/placeholder.svg'}
              alt={block.alt}
              fill
              sizes="(min-width: 1024px) 66vw, 100vw"
              className="object-cover"
            />
          </div>
          {block.caption ? (
            <figcaption className="text-sm text-muted-foreground">{block.caption}</figcaption>
          ) : null}
        </figure>
      )

    case 'list':
      return (
        <div className="flex flex-col gap-6">
          {block.heading ? <BlockHeading>{block.heading}</BlockHeading> : null}
          <ul className="flex flex-col divide-y border-y">
            {block.items.map((item) => (
              <li key={item.title} className="grid gap-1 py-5 sm:grid-cols-3 sm:gap-6">
                <span className="font-medium">{item.title}</span>
                <span className="text-pretty leading-relaxed text-muted-foreground sm:col-span-2">
                  {item.body}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )

    case 'quote':
      return (
        <figure className="flex flex-col gap-4 rounded-md bg-card p-6 md:p-10">
          <blockquote className="text-balance text-2xl font-medium leading-snug tracking-tight md:text-3xl">
            <span aria-hidden="true">“</span>
            {block.quote}
            <span aria-hidden="true">”</span>
          </blockquote>
          {block.source ? (
            <figcaption className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {block.source}
            </figcaption>
          ) : null}
        </figure>
      )

    case 'metrics':
      return (
        <div className="flex flex-col gap-6">
          {block.heading ? <BlockHeading>{block.heading}</BlockHeading> : null}
          <dl className="grid gap-px overflow-hidden rounded-md bg-border sm:grid-cols-3">
            {block.items.map((item) => (
              <div key={item.label} className="flex flex-col gap-2 bg-background p-5">
                <dt className="order-2 text-sm leading-relaxed text-muted-foreground">{item.label}</dt>
                <dd className="order-1 text-3xl font-medium tracking-tight md:text-4xl">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      )
  }
}
