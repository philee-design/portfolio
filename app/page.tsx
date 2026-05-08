import { projects } from '@/lib/projects'
import ProjectList from '@/components/ProjectList'
import FadeIn from '@/components/FadeIn'
import HeroParallax from '@/components/HeroParallax'
import WordReveal from '@/components/WordReveal'
import RotatingText from '@/components/RotatingText'
import NodeGraph from '@/components/NodeGraph'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center px-6 pt-24 pb-16 md:px-12 lg:px-16 overflow-hidden">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left: text */}
            <HeroParallax>
              <FadeIn delay={0.1}>
                <p className="text-xs tracking-[0.25em] uppercase text-muted mb-6">
                  Senior Experience Designer
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h1
                  className="text-[clamp(48px,7vw,96px)] font-extrabold leading-[0.9] tracking-tight text-fg"
                  style={{ fontFamily: 'var(--font-bricolage)' }}
                >
                  Philip Lee<span style={{ color: '#FF6B35' }}>.</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.35}>
                <p className="mt-8 max-w-xl text-base md:text-lg text-muted leading-relaxed">
                  a product designer who{' '}
                  <RotatingText />
                  <br />
                  <span className="text-muted/60 text-sm">Currently at Digitas North America.</span>
                </p>
              </FadeIn>

              <FadeIn delay={0.45}>
                <div className="mt-10 flex flex-wrap gap-4 items-center">
                  <a
                    href="#work"
                    className="text-sm border border-border px-6 py-3 hover:border-accent hover:text-accent transition-colors tracking-wide"
                  >
                    Selected Work ↓
                  </a>
                  <Link
                    href="/about"
                    className="text-sm text-muted hover:text-fg transition-colors tracking-wide"
                  >
                    About me →
                  </Link>
                </div>
              </FadeIn>
            </HeroParallax>

            {/* Right: node graph */}
            <div className="hidden lg:block" style={{ height: '72vh' }}>
              <NodeGraph />
            </div>

          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section id="work" className="px-6 md:px-12 lg:px-16 pb-24">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="flex items-center gap-4 mb-2">
              <span className="text-xs tracking-[0.25em] uppercase text-muted">Selected Work</span>
              <span className="flex-1 h-px bg-border" />
            </div>
          </FadeIn>
          <ProjectList projects={projects} />
        </div>
      </section>

      {/* About teaser */}
      <section className="px-6 md:px-12 lg:px-16 py-24 border-t border-border">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <h2
            className="text-4xl md:text-6xl font-extrabold leading-tight"
            style={{ fontFamily: 'var(--font-bricolage)' }}
          >
            <WordReveal
              text="Design at the intersection of craft and function."
              highlightWord="craft"
              highlightColor="#FF6B35"
            />
          </h2>
          <FadeIn delay={0.2}>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                I'm a Senior Experience Designer based in the US. I work across the full design
                process — from early strategy and wireframing through to polished, production-ready
                systems.
              </p>
              <p>
                My background spans enterprise platforms, consumer apps, and brand-led digital
                experiences. I care deeply about the systems that hold design together as much as the
                individual screens.
              </p>
              <Link
                href="/about"
                className="inline-block mt-4 text-sm text-fg hover:text-accent transition-colors"
              >
                More about me →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 md:px-12 lg:px-16 py-24 border-t border-border">
        <div className="mx-auto max-w-6xl text-center">
          <FadeIn>
            <p className="text-xs tracking-[0.25em] uppercase text-muted mb-6">Get in touch</p>
          </FadeIn>
          <h2
            className="text-4xl md:text-7xl font-extrabold leading-tight mb-10"
            style={{ fontFamily: 'var(--font-bricolage)' }}
          >
            <WordReveal text="Let's work together." delay={0.1} />
          </h2>
          <FadeIn delay={0.4}>
            <a
              href="mailto:philipleedesign@gmail.com"
              className="inline-block text-sm md:text-base border border-fg px-8 py-4 hover:bg-accent hover:text-bg hover:border-accent transition-all duration-300 tracking-wide"
            >
              philipleedesign@gmail.com
            </a>
          </FadeIn>
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
