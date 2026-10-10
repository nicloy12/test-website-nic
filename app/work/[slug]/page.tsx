import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProject, getAdjacentProjects, projects } from '@/content/projects'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CaseStudyHeader } from '@/components/case-study/case-study-header'
import { CaseStudyBody } from '@/components/case-study/case-study-body'
import { NextProject } from '@/components/case-study/next-project'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [project.cover.src],
    },
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const { next } = getAdjacentProjects(slug)

  return (
    <>
      <SiteHeader />
      <main>
        <article>
          <CaseStudyHeader project={project} />
          <CaseStudyBody sections={project.sections} />
        </article>
        {next ? <NextProject project={next} /> : null}
      </main>
      <SiteFooter />
    </>
  )
}
