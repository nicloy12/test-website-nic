import { cn } from '@/lib/utils'

export function SectionLabel({
  children,
  className,
  as: Tag = 'h2',
}: {
  children: React.ReactNode
  className?: string
  as?: 'h2' | 'h3' | 'p'
}) {
  return (
    <Tag
      className={cn(
        'font-mono text-xs uppercase tracking-widest text-muted-foreground',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
