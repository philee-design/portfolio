import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { projects, getProject } from '@/lib/projects'
import ScrollProgress from '@/components/ScrollProgress'
import WordReveal from '@/components/WordReveal'
import PasswordGate from '@/components/PasswordGate'
import Disclosure from '@/components/Disclosure'
import FadeIn from '@/components/FadeIn'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return {
    title: `${project.name} — Philip Lee`,
    description: project.tagline,
  }
}

function ImageSlot({
  label,
  aspect = 'aspect-video',
  color,
  bgColor,
  src,
  alt,
}: {
  label: string
  aspect?: string
  color: string
  bgColor: string
  src?: string
  alt?: string
}) {
  if (src) {
    const contain = aspect === 'aspect-square' || aspect === 'aspect-[21/9]'
    const isGif = src.toLowerCase().endsWith('.gif')
    return (
      <div
        className={`w-full ${aspect} relative overflow-hidden`}
        style={contain ? { backgroundColor: bgColor } : undefined}
      >
        <Image
          src={src}
          alt={alt ?? label}
          fill
          unoptimized={isGif}
          className={contain ? 'object-contain' : 'object-cover'}
          sizes="(max-width: 1024px) 100vw, calc(100vw - 320px)"
        />
      </div>
    )
  }

  return (
    <div
      className={`w-full ${aspect} flex flex-col items-center justify-center gap-2 border-y`}
      style={{ backgroundColor: bgColor, borderColor: color + '18' }}
    >
      <div className="w-8 h-px" style={{ backgroundColor: color + '55' }} />
      <span
        className="text-[10px] tracking-[0.2em] uppercase"
        style={{ color: color + '77' }}
      >
        {label}
      </span>
    </div>
  )
}

function firstSentences(text: string, count = 2): string {
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text]
  return sentences.slice(0, count).join(' ').trim()
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const currentIndex = projects.findIndex((p) => p.id === slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  const content = (
    <div className="pt-20">
      <ScrollProgress color={project.color} />

      {/* Mobile header */}
      <div className="lg:hidden px-6 py-6 border-b border-border">
        <Link
          href="/#work"
          className="text-xs tracking-widest uppercase text-muted hover:text-fg transition-colors"
        >
          ← All Work
        </Link>
        <h1
          className="text-4xl font-extrabold mt-4 mb-2"
          style={{ fontFamily: 'var(--font-bricolage)' }}
        >
          {project.name}
        </h1>
        <p className="text-sm text-muted">{project.client} · {project.year}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] border px-2 py-0.5"
              style={{ borderColor: project.color + '44', color: project.color + 'BB' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Main layout */}
      <div className="flex">

        {/* ── Left rail ── */}
        <aside className="hidden lg:flex flex-col w-72 xl:w-80 shrink-0 border-r border-border">
          <div
            className="sticky flex flex-col gap-8 p-8 overflow-y-auto"
            style={{ top: '5rem', height: 'calc(100vh - 5rem)' }}
          >
            {/* Back */}
            <Link
              href="/#work"
              className="text-xs tracking-widest uppercase text-muted hover:text-fg transition-colors"
            >
              ← All Work
            </Link>

            {/* Project name */}
            <div>
              <h1
                className="text-3xl xl:text-4xl font-extrabold leading-tight text-fg"
                style={{ fontFamily: 'var(--font-bricolage)' }}
              >
                {project.name}
              </h1>
            </div>

            {/* Divider */}
            <div className="h-px bg-border" />

            {/* Metadata */}
            <div className="space-y-5 text-sm">
              <div>
                <p className="text-[10px] tracking-widest uppercase text-muted mb-1">Client</p>
                <p className="text-fg/80">{project.client}</p>
              </div>
              <div>
                <p className="text-[10px] tracking-widest uppercase text-muted mb-1">Year</p>
                <p className="text-fg/80">{project.year}</p>
              </div>
              <div>
                <p className="text-[10px] tracking-widest uppercase text-muted mb-1">Role</p>
                <p className="text-fg/80">{project.role}</p>
              </div>
              <div>
                <p className="text-[10px] tracking-widest uppercase text-muted mb-2">
                  Disciplines
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] border px-2 py-0.5"
                      style={{
                        borderColor: project.color + '44',
                        color: project.color + 'BB',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-border" />

            {/* Sections nav */}
            <nav className="space-y-3">
              <p className="text-[10px] tracking-widest uppercase text-muted">Sections</p>
              {['Overview', 'Problem', 'Process', 'Outcome'].map((s) => (
                <a
                  key={s}
                  href={`#${s.toLowerCase()}`}
                  className="block text-sm text-muted hover:text-fg transition-colors"
                >
                  {s}
                </a>
              ))}
            </nav>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Next project */}
            <div className="border-t border-border pt-6">
              <p className="text-[10px] tracking-widest uppercase text-muted mb-2">Next</p>
              <Link
                href={`/work/${nextProject.id}`}
                className="text-sm font-bold hover:text-accent transition-colors flex items-center justify-between gap-2 group"
                style={{ fontFamily: 'var(--font-bricolage)' }}
              >
                <span style={{ color: nextProject.color }}>{nextProject.name}</span>
                <span className="text-muted group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </aside>

        {/* ── Right side content ── */}
        <div className="flex-1 min-w-0">

          {/* Hero image */}
          <section id="overview">
            <ImageSlot
              label="Hero — main overview image"
              aspect="aspect-[4/3] md:aspect-video"
              color={project.color}
              bgColor={project.bgColor}
              src={project.images?.hero}
              alt={`${project.name} hero`}
            />
          </section>

          {/* Overview text */}
          <FadeIn>
            <div className="px-8 md:px-12 py-12 md:py-16 max-w-2xl">
              <p
                className="text-[10px] tracking-widest uppercase mb-4"
                style={{ color: project.color }}
              >
                Overview
              </p>
              <p className="text-xl md:text-2xl text-fg/80 leading-relaxed font-medium">
                {project.tagline}
              </p>
              {project.externalUrl && (
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-[11px] tracking-widest uppercase border px-4 py-2.5 transition-opacity hover:opacity-60"
                  style={{ borderColor: project.color + '55', color: project.color }}
                >
                  {project.externalLinkLabel}
                </a>
              )}
            </div>
          </FadeIn>

          {/* Problem */}
          <section id="problem">
            <div className={project.problemContained ? 'px-8 md:px-12 pt-6' : ''}>
              <ImageSlot
                label="Problem — context or before state"
                aspect="aspect-video"
                color={project.color}
                bgColor={project.bgColor}
                src={project.images?.problem}
                alt={`${project.name} problem`}
              />
            </div>
            <FadeIn>
              <div className="px-8 md:px-12 py-10 max-w-2xl">
                <p
                  className="text-[10px] tracking-widest uppercase mb-3"
                  style={{ color: project.color }}
                >
                  The Problem
                </p>
                <p className="text-base text-fg/70 leading-relaxed">
                  {firstSentences(project.problem, 2)}
                </p>
              </div>
            </FadeIn>
          </section>

          {/* Detail grid */}
          <div className="grid grid-cols-2 gap-px bg-border">
            <ImageSlot
              label="Detail 1"
              aspect="aspect-square"
              color={project.color}
              bgColor={project.bgColor}
              src={project.images?.detail1}
              alt={`${project.name} detail 1`}
            />
            <ImageSlot
              label="Detail 2"
              aspect="aspect-square"
              color={project.color}
              bgColor={project.bgColor}
              src={project.images?.detail2}
              alt={`${project.name} detail 2`}
            />
          </div>

          {/* Process */}
          <section id="process">
            {project.processEmbed ? (
              <div className="px-8 md:px-12 py-6">
                <div
                  className="w-full overflow-hidden border border-border"
                  style={{ aspectRatio: '4/5', maxHeight: '700px', backgroundColor: project.bgColor }}
                >
                  <iframe
                    src={project.processEmbed}
                    className="w-full h-full"
                    style={{ border: 'none' }}
                    allowFullScreen
                    allow="clipboard-write"
                    title={`${project.name} prototype`}
                  />
                </div>
              </div>
            ) : (
              <ImageSlot
                label="Process — Figma overview, wireframes, or whiteboard"
                aspect="aspect-[21/9]"
                color={project.color}
                bgColor={project.bgColor}
                src={project.images?.process}
                alt={`${project.name} process`}
              />
            )}
            <FadeIn>
              <div className="px-8 md:px-12 py-10 max-w-2xl">
                <p
                  className="text-[10px] tracking-widest uppercase mb-3"
                  style={{ color: project.color }}
                >
                  Process
                </p>
                <p className="text-base text-fg/70 leading-relaxed">
                  {firstSentences(project.whatIDesigned, 2)}
                </p>
              </div>
            </FadeIn>
          </section>

          {/* Key screens */}
          <ImageSlot
            label="Key screen / flow"
            aspect="aspect-video"
            color={project.color}
            bgColor={project.bgColor}
            src={project.images?.keyScreen}
            alt={`${project.name} key screen`}
          />

          {/* Detail 3 */}
          {project.images?.detail3 && (
            <ImageSlot
              label="Detail 3"
              aspect="aspect-[4/3]"
              color={project.color}
              bgColor={project.bgColor}
              src={project.images?.detail3}
              alt={`${project.name} detail 3`}
            />
          )}

          {/* Outcome */}
          <section
            id="outcome"
            className="px-8 md:px-12 py-16 md:py-20"
            style={{ backgroundColor: project.bgColor }}
          >
            <FadeIn>
              <p
                className="text-[10px] tracking-widest uppercase mb-6"
                style={{ color: project.color }}
              >
                Outcome
              </p>
              <blockquote
                className="text-2xl md:text-4xl font-extrabold leading-tight text-fg max-w-xl"
                style={{ fontFamily: 'var(--font-bricolage)' }}
              >
                <WordReveal text={project.outcome} />
              </blockquote>
            </FadeIn>
          </section>

          {/* Final image */}
          <ImageSlot
            label="Final result — polished mockup or device render"
            aspect="aspect-video"
            color={project.color}
            bgColor={project.bgColor}
            src={project.images?.final}
            alt={`${project.name} final`}
          />

          {/* Next step caption — shown only when a final image exists */}
          {project.images?.final && project.nextStep && (
            <FadeIn>
              <div className="px-8 md:px-12 py-8 border-b border-border">
                <p
                  className="text-[10px] tracking-widest uppercase mb-2"
                  style={{ color: project.color }}
                >
                  What comes next
                </p>
                <p className="text-sm text-fg/60 max-w-xl leading-relaxed">
                  {project.nextStep}
                </p>
              </div>
            </FadeIn>
          )}

          {/* Expandable deep-dive */}
          <div className="px-8 md:px-12 py-12 border-t border-border">
            <Disclosure title="Full process & thinking" color={project.color}>
              {project.whatIDesigned.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </Disclosure>
            <div className="border-t border-border">
              <Disclosure title="Problem in depth" color={project.color}>
                <p>{project.problem}</p>
              </Disclosure>
            </div>
            <div className="border-t border-border">
              <Disclosure title="Solution" color={project.color}>
                <p>{project.solution}</p>
              </Disclosure>
            </div>
          </div>

          {/* Mobile next project */}
          <div className="lg:hidden px-8 py-10 border-t border-border">
            <p className="text-[10px] tracking-widest uppercase text-muted mb-3">Next Project</p>
            <Link
              href={`/work/${nextProject.id}`}
              className="flex items-center justify-between group"
            >
              <span
                className="text-3xl font-extrabold group-hover:opacity-70 transition-opacity"
                style={{ fontFamily: 'var(--font-bricolage)', color: nextProject.color }}
              >
                {nextProject.name}
              </span>
              <span className="text-muted group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Footer */}
          <footer className="border-t border-border px-8 md:px-12 py-8">
            <div className="flex justify-between items-center text-xs text-muted tracking-wide">
              <span style={{ fontFamily: 'var(--font-bricolage)' }}>
                Philip Lee — Product Designer
              </span>
              <span>© {new Date().getFullYear()}</span>
            </div>
          </footer>

        </div>
      </div>
    </div>
  )

  if (project.protected) {
    return (
      <PasswordGate password="aida2026" projectName={project.name} color={project.color}>
        {content}
      </PasswordGate>
    )
  }

  return content
}
