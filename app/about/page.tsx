import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowUpRight, Check } from 'lucide-react'
import { RevealSection } from '@/components/RevealSection'
import { SplitHeadline } from '@/components/SplitHeadline'

export const metadata: Metadata = {
  title: 'About | Catalina Pools AZ — Gilbert, AZ',
  description:
    'Catalina Pools is a family-owned pool contractor in Gilbert, AZ. Meet Michael and the team and learn how we run every build, remodel, and service call.',
}

export default function About() {
  return (
    <>
      {/* HERO: editorial headline section */}
      <section className="relative min-h-[78vh] flex flex-col justify-end px-6 lg:px-12 pt-24 md:pt-32 pb-14 md:pb-20 bg-[var(--color-background)] overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, var(--color-accent) 0px, transparent 40%), radial-gradient(circle at 80% 80%, var(--color-deep) 0px, transparent 40%)',
          }}
        />
        <div className="relative max-w-[1400px] mx-auto w-full">
          <div className="text-xs uppercase tracking-[0.3em] opacity-60 mb-10">
            About · Catalina Pools AZ
          </div>
          <SplitHeadline
            text="We build pools the way we'd build our own."
            className="font-[var(--font-fraunces)] font-light text-[clamp(40px,7vw,128px)] leading-[1.05] md:leading-[0.95] tracking-[-0.02em] max-w-6xl"
          />
        </div>
      </section>

      {/* Story */}
      <RevealSection className="py-16 md:py-28 lg:py-36 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-12 lg:gap-20">
          <div data-reveal className="md:col-span-5 md:sticky md:top-32 self-start">
            <div className="text-xs uppercase tracking-[0.3em] opacity-60 mb-4">
              The short version
            </div>
            <h2 className="font-[var(--font-fraunces)] font-light text-4xl lg:text-5xl leading-tight tracking-[-0.01em]">
              <span className="serif-italic text-[var(--color-deep)]">Michael</span> answers the phone. <span className="serif-italic text-[var(--color-deep)]">Michael</span> shows up. <span className="serif-italic text-[var(--color-deep)]">Michael</span> stands behind the work.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-7 text-lg leading-relaxed opacity-85">
            <p data-reveal>
              Catalina Pools AZ is a small, family-owned pool contractor based in Gilbert. We build new pools, remodel old ones, and keep dozens of East Valley backyards swimming-ready year-round.
            </p>
            <p data-reveal>
              We started because most pool companies in the valley were running too many crews on too many jobs. Plaster cured wrong. Quotes changed mid-project. Customers couldn&apos;t get callbacks. We do the opposite: one project at a time, one crew, one written scope, and one phone number that an actual human picks up.
            </p>
            <p data-reveal>
              Every job — from a $40 chlorine top-up to a $90,000 build — gets the same standard. Real materials at cost. Honest timelines. Photos at every milestone. And we don&apos;t leave until you know how to run your own equipment.
            </p>
            <p data-reveal>
              That&apos;s why we work mostly on referrals. We&apos;re licensed under <span className="tabular">ROC #324249</span> and <span className="tabular">ROC #329417</span>, fully bonded and insured, and proud to be a part of the Gilbert business community.
            </p>
          </div>
        </div>
      </RevealSection>

      {/* Pool image — full bleed parallax-style */}
      <RevealSection className="relative w-full">
        <div data-reveal className="relative aspect-[16/8] w-full overflow-hidden">
          <Image
            src="https://catalinapoolsaz.com/wp-content/uploads/2021/06/IMG_2736-1024x768.jpg"
            alt="A finished Catalina Pools backyard build"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f33]/30 via-transparent to-transparent" />
        </div>
      </RevealSection>

      {/* How we run a job */}
      <RevealSection className="py-16 md:py-28 lg:py-40 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-20">
            <div>
              <div data-reveal className="text-xs uppercase tracking-[0.3em] opacity-60 mb-6">
                How we work
              </div>
              <h2 data-reveal className="font-[var(--font-fraunces)] font-light text-[clamp(40px,6vw,84px)] leading-[1.05] md:leading-[0.95] tracking-[-0.015em] max-w-3xl">
                Three <span className="serif-italic text-[var(--color-accent)]">non-negotiables.</span>
              </h2>
            </div>
            <p data-reveal className="max-w-md opacity-70 leading-relaxed">
              These aren&apos;t marketing — they&apos;re the rules that make every Catalina Pools job run the same way, every time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                n: '01',
                t: 'Written scope, written number',
                d: 'You get a written quote before a single thing happens. If something changes mid-project, you get a new written number. No surprise invoices.',
              },
              {
                n: '02',
                t: 'One crew per job',
                d: 'We don&apos;t split crews across three properties to "move faster." The team that starts your pool is the team that finishes it.',
              },
              {
                n: '03',
                t: 'Materials at cost',
                d: 'Tile, plaster, equipment — we charge what the supplier charges us and show you the receipts. We make our money on labor and craft, not markup.',
              },
            ].map((step) => (
              <div key={step.n} data-reveal className="border-t border-[var(--color-foreground)]/15 pt-7">
                <div className="text-xs uppercase tracking-[0.3em] opacity-50 tabular mb-6">{step.n}</div>
                <h3 className="font-[var(--font-fraunces)] text-2xl lg:text-3xl font-light leading-snug tracking-[-0.01em] mb-4">
                  {step.t}
                </h3>
                <p className="opacity-70 leading-relaxed" dangerouslySetInnerHTML={{ __html: step.d }} />
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* What we are */}
      <RevealSection className="py-16 md:py-28 lg:py-36 px-6 lg:px-12 bg-[var(--color-foreground)] text-[var(--color-background)]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <div data-reveal className="text-xs uppercase tracking-[0.3em] opacity-60 mb-6">
                Credentials
              </div>
              <h2 data-reveal className="font-[var(--font-fraunces)] font-light text-[clamp(40px,5.5vw,72px)] leading-[1.05] md:leading-[0.95] tracking-[-0.015em]">
                Licensed, bonded, <span className="serif-italic text-[var(--color-accent)]">and proud of it.</span>
              </h2>
            </div>
            <div className="md:col-span-7 grid sm:grid-cols-2 gap-x-10 gap-y-6">
              {[
                'Arizona ROC #324249 — Swimming Pool Contractor',
                'Arizona ROC #329417 — Pool Service Contractor',
                'Fully bonded for new construction',
                'General liability insured',
                'Locally owned in Gilbert, AZ',
                'Member of the East Valley business community',
              ].map((line) => (
                <div key={line} data-reveal className="flex items-start gap-3">
                  <Check size={18} strokeWidth={1.5} className="mt-1 text-[var(--color-accent)] flex-shrink-0" />
                  <p className="opacity-90 leading-snug">{line}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      {/* CTA */}
      <RevealSection className="py-16 md:py-28 lg:py-36 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2
            data-reveal
            className="font-[var(--font-fraunces)] font-light text-[clamp(40px,6.5vw,96px)] leading-[1.05] md:leading-[0.95] tracking-[-0.015em] max-w-4xl mx-auto"
          >
            Got a yard you&apos;re ready to <span className="serif-italic text-[var(--color-deep)]">use?</span>
          </h2>
          <div data-reveal className="mt-12 inline-flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 pl-7 pr-2 py-2 bg-[var(--color-foreground)] text-[var(--color-background)] rounded-full hover:bg-[var(--color-accent)] transition-colors duration-500"
            >
              <span>Request a quote</span>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-background)]/15 group-hover:bg-[var(--color-background)]/25 transition-colors">
                <ArrowUpRight size={18} strokeWidth={1.5} />
              </span>
            </Link>
            <a
              href="tel:+14803614462"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-[var(--color-foreground)]/20 rounded-full hover:bg-[var(--color-muted)] transition-colors duration-500"
            >
              (480) 361-4462
            </a>
          </div>
        </div>
      </RevealSection>
    </>
  )
}
