import { site } from '@/content/site'

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-28 max-w-6xl px-5 pb-10 md:mt-40 md:px-8">
      <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>{site.location}</p>
      </div>
    </footer>
  )
}
