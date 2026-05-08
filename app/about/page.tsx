import type { Metadata } from 'next'
import FadeIn from '@/components/FadeIn'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About — Philip Lee',
  description: 'Senior Experience Designer at Digitas North America.',
}

const education = [
  {
    school: 'New York University',
    degree: 'MPS, Interactive Telecommunication Program',
    period: '2020 – 2022',
  },
  {
    school: 'School of Visual Arts',
    degree: 'Bachelor of Fine Arts (BFA), Motion Graphic & Graphic Design',
    period: '2013 – 2017',
  },
]

const awards = [
  {
    title: 'Red Dot Design Award',
    subtitle: 'Brand and Communication Design Award',
    issuer: 'Red Dot Design Award',
    date: 'Jul 2023',
    description: 'Exhibition design for NYU\'s research group: Sounds of New York City — including app design, experience design, motion design, and installation design.',
    links: [
      { label: 'Red Dot Project ↗', href: 'https://www.red-dot.org/project/sounds-of-new-york-city-exhibition-66889' },
      { label: 'SONYC Research ↗', href: 'https://wp.nyu.edu/sonyc/' },
    ],
  },
  {
    title: 'Communication Arts 2024 Interactive',
    subtitle: 'Shortlist',
    issuer: 'Communication Arts',
    date: 'Nov 2023',
    description: '',
    links: [],
  },
]

const skills = [
  'UX Strategy',
  'UI Design',
  'Design Systems',
  'Interaction Design',
  'Prototyping',
  'Information Architecture',
  'Wireframing',
  'User Research',
  'Component Libraries',
  'Responsive Design',
]

const tools = ['Figma', 'Framer', 'Adobe CC', 'Principle', 'Lottie', 'Zeroheight', 'Miro', 'Jira']

const experience = [
  {
    company: 'Digitas North America',
    location: 'New York, United States',
    roles: [
      {
        title: 'Senior Experience Designer',
        period: 'Apr 2025 – Present',
        bullets: [
          'Led end-to-end UX/UI strategy for a generative AI-powered marketing platform. Aligned 50+ stakeholders across engineering, data science, product, and design through a 12-month MVP cycle, shipping a product now actively used by Mondelēz brand markets to generate and deploy product imagery at scale.',
          'Designed and shipped Goodyear\'s enterprise internal tools platform. Built a scalable Figma design system with 30+ components, standardizing UX across marketing and service operations teams nationwide.',
        ],
      },
      {
        title: 'Experience Designer',
        period: 'Jun 2022 – Mar 2025',
        bullets: [
          'Redesigned end-to-end UX/UI for RaceTrac\'s consumer mobile app (1M+ users). Overhauled loyalty rewards tracking, store location, and core app stability, lifting the App Store rating from 2.5 to 4.8 stars following the May 2024 launch.',
          'Built Visa\'s end-to-end Figma design system with 200+ reusable components, cutting page layout production time by 50% for 30+ cross-functional teams across Visa.com.',
          'Redesigned Snackworks.com from the ground up: refreshed visual identity, built a scalable design system across 100+ recipes and 40+ brand pages, and conducted a WCAG accessibility audit resolving critical compliance gaps.',
        ],
      },
    ],
  },
  {
    company: 'Freelance',
    location: '',
    roles: [
      {
        title: 'Motion Designer',
        period: 'Sep 2017 – May 2022',
        bullets: [],
      },
    ],
  },
]

export default function AboutPage() {
  return (
    <main className="pt-24">
      <section className="px-6 md:px-12 lg:px-16 pt-12 pb-24">
        <div className="mx-auto max-w-6xl">

          {/* Header */}
          <FadeIn>
            <p className="text-xs tracking-[0.25em] uppercase text-muted mb-6">About</p>
            <h1
              className="text-[clamp(48px,8vw,112px)] font-extrabold leading-[0.9] tracking-tight text-fg mb-16"
              style={{ fontFamily: 'var(--font-bricolage)' }}
            >
              Designed to
              <br />
              <span className="text-accent">connect.</span>
            </h1>
          </FadeIn>

          {/* Bio */}
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 border-t border-border pt-12 mb-16">
            <FadeIn>
              <p className="text-xs tracking-[0.25em] uppercase text-muted">Background</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="space-y-5 text-base md:text-lg text-fg/80 leading-relaxed">
                <p>
                  Senior Product Designer with 4+ years in product design and 8+ years in digital
                  design. Shipping end-to-end UX across AI platforms, enterprise internal tools, and
                  consumer products at scale.
                </p>
                <p>
                  Leads cross-functional teams through ambiguity — from 0-to-1 strategy through
                  high-fidelity execution — with a foundation in motion design that informs every
                  interaction.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Experience */}
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 border-t border-border pt-12 mb-16">
            <FadeIn>
              <p className="text-xs tracking-[0.25em] uppercase text-muted">Experience</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="space-y-12">
                {experience.map((job) => (
                  <div key={job.company}>
                    <div className="mb-6">
                      <p
                        className="text-lg font-bold text-fg"
                        style={{ fontFamily: 'var(--font-bricolage)' }}
                      >
                        {job.company}
                      </p>
                      <p className="text-xs text-muted mt-1 tracking-wide">{job.location}</p>
                    </div>

                    <div className="space-y-8">
                      {job.roles.map((role) => (
                        <div key={role.title} className="pl-4 border-l border-border">
                          <div className="flex justify-between gap-4 flex-wrap mb-3">
                            <p className="text-sm font-medium text-fg">{role.title}</p>
                            <span className="text-xs text-muted tabular-nums">{role.period}</span>
                          </div>
                          <ul className="space-y-3">
                            {role.bullets.map((bullet, i) => (
                              <li key={i} className="text-sm text-fg/60 leading-relaxed">
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Education */}
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 border-t border-border pt-12 mb-16">
            <FadeIn>
              <p className="text-xs tracking-[0.25em] uppercase text-muted">Education</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="space-y-8">
                {education.map((e) => (
                  <div key={e.school} className="flex justify-between gap-4 flex-wrap">
                    <div>
                      <p className="text-sm font-medium text-fg">{e.school}</p>
                      <p className="text-sm text-muted mt-1">{e.degree}</p>
                    </div>
                    <span className="text-xs text-muted tabular-nums">{e.period}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Awards */}
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 border-t border-border pt-12 mb-16">
            <FadeIn>
              <p className="text-xs tracking-[0.25em] uppercase text-muted">Awards</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="space-y-8">
                {awards.map((award) => (
                  <div key={award.title} className="pl-4 border-l border-border">
                    <div className="flex justify-between gap-4 flex-wrap mb-2">
                      <div>
                        <p className="text-sm font-medium text-fg">{award.title}</p>
                        <p className="text-xs text-muted mt-0.5">{award.subtitle} · {award.issuer}</p>
                      </div>
                      <span className="text-xs text-muted tabular-nums">{award.date}</span>
                    </div>
                    {award.description && (
                      <p className="text-sm text-fg/60 leading-relaxed mb-3">{award.description}</p>
                    )}
                    {award.links.length > 0 && (
                      <div className="flex gap-4 flex-wrap">
                        {award.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-muted hover:text-fg transition-colors tracking-wide"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Skills */}
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 border-t border-border pt-12 mb-16">
            <FadeIn>
              <p className="text-xs tracking-[0.25em] uppercase text-muted">Skills</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="text-sm border border-border px-4 py-2 text-fg/70">
                    {skill}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Tools */}
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 border-t border-border pt-12 mb-16">
            <FadeIn>
              <p className="text-xs tracking-[0.25em] uppercase text-muted">Tools</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span key={tool} className="text-sm border border-border px-4 py-2 text-fg/70">
                    {tool}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Contact */}
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 border-t border-border pt-12">
            <FadeIn>
              <p className="text-xs tracking-[0.25em] uppercase text-muted">Contact</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="space-y-3">
                <a
                  href="mailto:philipleedesign@gmail.com"
                  className="block text-base text-fg hover:text-accent transition-colors"
                >
                  philipleedesign@gmail.com
                </a>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="https://www.linkedin.com/in/philipleedesigner/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm border border-border px-5 py-2.5 hover:border-fg hover:text-fg transition-colors text-muted tracking-wide"
                  >
                    LinkedIn ↗
                  </a>
                  <Link
                    href="/"
                    className="text-sm border border-border px-5 py-2.5 hover:border-accent hover:text-accent transition-colors text-muted tracking-wide"
                  >
                    View Work →
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 md:px-12 lg:px-16 py-8">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted tracking-wide">
          <span style={{ fontFamily: 'var(--font-bricolage)' }}>Philip Lee — Product Designer</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </main>
  )
}
