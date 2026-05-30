import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Phone, MapPin, ShieldCheck, Award, Hammer, type LucideIcon } from 'lucide-react'
import { SplitHeadline } from '@/components/SplitHeadline'
import { RevealSection } from '@/components/RevealSection'
import { WaterShader } from '@/components/WaterShader'

const galleryPhotos = [
  'https://catalinapoolsaz.com/wp-content/uploads/2021/06/IMG_2736-1024x768.jpg',
  'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?w=1200&q=80',
  'https://images.unsplash.com/photo-1591389703635-e15a07b842d7?w=1200&q=80',
  'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1200&q=80',
  'https://images.unsplash.com/photo-1582610116397-edb318620f90?w=1200&q=80',
  'https://catalinapoolsaz.com/wp-content/uploads/2021/06/IMG_2736-1024x768.jpg',
]

export default function Home() {
  return (
    <>
      {/* ============================================================
          HERO — full viewport. WebGL water shader background, never flat color.
          One signature motion moment: SplitText reveal on the headline.
         ============================================================ */}
      <section className="relative h-screen min-h-[680px] w-full overflow-hidden bg-[#0a1f33]">
        <WaterShader />
        <div className="hero-overlay absolute inset-0 z-[1]" aria-hidden />

        {/* Top corner accent — small kicker label */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-28 lg:pt-32">
          <div className="text-white/70 text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.35em] font-[var(--font-inter)]">
            <span className="opacity-100">Catalina Pools AZ</span>
            <span className="mx-2 md:mx-3 opacity-40">·</span>
            <span className="opacity-70 hidden sm:inline">Gilbert · Mesa · Chandler · Queen Creek</span>
            <span className="opacity-70 sm:hidden">East Valley, AZ</span>
          </div>
        </div>

        {/* Headline + subhead + CTA — bottom-aligned so the water has room to breathe */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-6 lg:px-12 pb-12 md:pb-20 lg:pb-28">
          <div className="max-w-[1400px] mx-auto">
            <SplitHeadline
              text="The backyard you keep meaning to build."
              className="text-white font-[var(--font-fraunces)] text-[clamp(44px,8vw,148px)] leading-[1.05] md:leading-[0.95] tracking-[-0.02em] max-w-5xl font-light"
            />
            <div className="mt-6 md:mt-10 lg:mt-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 md:gap-8">
              <p className="max-w-lg text-base md:text-lg lg:text-xl text-white/85 font-light leading-snug">
                Custom pool builds, remodels, and weekly service across the East Valley — quoted in writing, built by people who answer the phone.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 pl-7 pr-2 py-2 bg-white text-[#0a1f33] rounded-full text-base hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-500 ease-[var(--ease-out-quint)]"
                >
                  <span>Request a quote</span>
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0a1f33] text-white group-hover:bg-white group-hover:text-[var(--color-accent)] transition-colors duration-500">
                    <ArrowUpRight size={18} strokeWidth={1.5} />
                  </span>
                </Link>
                <a
                  href="tel:+14803614462"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/30 text-white rounded-full text-base hover:border-white hover:bg-white/5 transition-colors duration-500 ease-[var(--ease-out-quint)]"
                >
                  <Phone size={16} strokeWidth={1.5} />
                  (480) 361-4462
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          TRUST STRIP — slim, sits right under the hero
         ============================================================ */}
      <RevealSection className="border-y border-[var(--color-border)] py-6 md:py-7 px-6 lg:px-12 bg-[var(--color-background)]">
        <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-center gap-x-5 md:gap-x-10 lg:gap-x-12 gap-y-2 md:gap-y-4 text-[11px] md:text-[13px] uppercase tracking-[0.18em] md:tracking-[0.22em] opacity-70 text-center">
          <span data-reveal>Licensed</span>
          <span className="opacity-40 hidden md:inline">·</span>
          <span data-reveal>Bonded</span>
          <span className="opacity-40 hidden md:inline">·</span>
          <span data-reveal>Insured</span>
          <span className="opacity-40 hidden md:inline">·</span>
          <span data-reveal>ROC #324249 · #329417</span>
          <span className="opacity-40 hidden md:inline">·</span>
          <span data-reveal>Family-owned in Gilbert</span>
        </div>
      </RevealSection>

      {/* ============================================================
          WHAT WE DO — asymmetric, NOT three identical columns.
          Featured "Pool Build & Remodel" gets the image; the others are type-driven.
         ============================================================ */}
      <RevealSection className="py-16 md:py-28 lg:py-40 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-20">
            <div>
              <div data-reveal className="text-xs uppercase tracking-[0.3em] opacity-60 mb-6">
                01 / What we do
              </div>
              <h2 data-reveal className="font-[var(--font-fraunces)] font-light text-[clamp(40px,6.5vw,96px)] leading-[1.05] md:leading-[0.95] max-w-3xl tracking-[-0.015em]">
                Three services, <span className="serif-italic text-[var(--color-deep)]">done well.</span>
              </h2>
            </div>
            <p data-reveal className="text-base max-w-md opacity-70 leading-relaxed">
              From a full re-build of a 25-year-old plaster pool to a weekly chlorine check, we run every job with the same crew, the same standards, and a written scope before anything starts.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
            {/* Featured: Pool Build & Remodel */}
            <Link
              href="/services#build"
              data-reveal
              className="md:col-span-7 group block"
            >
              <div className="relative aspect-[5/4] rounded-2xl overflow-hidden mb-7 bg-[var(--color-deep)]">
                <Image
                  src="https://catalinapoolsaz.com/wp-content/uploads/2021/06/IMG_2736-1024x768.jpg"
                  alt="Custom pool build in Gilbert, AZ"
                  fill
                  className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-out-quint)] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f33]/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                  <span className="text-xs uppercase tracking-[0.3em] opacity-80">Featured</span>
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/15 backdrop-blur border border-white/20 group-hover:bg-white group-hover:text-[var(--color-deep)] transition-all duration-500">
                    <ArrowUpRight size={18} strokeWidth={1.5} />
                  </span>
                </div>
              </div>
              <div className="flex items-baseline gap-4 mb-3">
                <span className="text-xs uppercase tracking-[0.25em] opacity-50 tabular">A.</span>
                <h3 className="font-[var(--font-fraunces)] text-3xl md:text-5xl font-light tracking-[-0.01em]">
                  Pool Build &amp; Remodel
                </h3>
              </div>
              <p className="opacity-70 max-w-xl leading-relaxed">
                Ground-up custom builds and full re-surfaces — plaster, pebble, tile, deck. We design the pool around the yard, not from a template.
              </p>
            </Link>

            {/* Right side: text-driven */}
            <div className="md:col-span-5 flex flex-col gap-14 justify-end">
              <Link href="/services#repair" data-reveal className="group block">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="text-xs uppercase tracking-[0.25em] opacity-50 tabular">B.</span>
                  <h3 className="font-[var(--font-fraunces)] text-3xl md:text-4xl font-light tracking-[-0.01em] group-hover:text-[var(--color-accent)] transition-colors">
                    Repairs &amp; Equipment
                  </h3>
                </div>
                <p className="opacity-70 leading-relaxed">
                  Pumps, filters, salt cells, automation, plumbing leaks, tile and coping — diagnosed properly the first time.
                </p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100 transition-opacity">
                  See repair scope <ArrowUpRight size={14} strokeWidth={1.5} />
                </div>
              </Link>

              <Link href="/services#maintenance" data-reveal className="group block">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="text-xs uppercase tracking-[0.25em] opacity-50 tabular">C.</span>
                  <h3 className="font-[var(--font-fraunces)] text-3xl md:text-4xl font-light tracking-[-0.01em] group-hover:text-[var(--color-accent)] transition-colors">
                    Weekly Maintenance
                  </h3>
                </div>
                <p className="opacity-70 leading-relaxed">
                  Clean, balanced, ready when you are. Real chemistry, real brushing, photo report after every visit.
                </p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100 transition-opacity">
                  See service plans <ArrowUpRight size={14} strokeWidth={1.5} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ============================================================
          WHY US — dark contrast section + numeric anchors
         ============================================================ */}
      <RevealSection className="py-16 md:py-28 lg:py-40 px-6 lg:px-12 bg-[var(--color-foreground)] text-[var(--color-background)] relative overflow-hidden">
        {/* faint caustic backdrop */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(27,159,217,0.6) 0px, transparent 40%), radial-gradient(circle at 80% 70%, rgba(27,159,217,0.4) 0px, transparent 35%)",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 lg:gap-24 items-start">
            <div className="md:col-span-6">
              <div data-reveal className="text-xs uppercase tracking-[0.3em] opacity-60 mb-6">
                02 / Why us
              </div>
              <h2 data-reveal className="font-[var(--font-fraunces)] font-light text-[clamp(40px,6vw,88px)] leading-[1.05] md:leading-[0.95] tracking-[-0.015em] mb-10">
                We&apos;d rather <span className="serif-italic text-[var(--color-accent)]">do one job right</span> than three jobs fast.
              </h2>
              <div data-reveal className="text-lg opacity-85 leading-relaxed max-w-xl space-y-5">
                <p>
                  Catalina Pools is owned and run by Michael — the guy on the phone, in the truck, and on your deck the day work starts. That&apos;s the whole pitch.
                </p>
                <p>
                  We give written quotes, not napkin estimates. We charge for materials at cost. And we don&apos;t leave until your pump is humming, your water is clear, and you actually know how to run the thing.
                </p>
              </div>
            </div>

            <div className="md:col-span-6 grid grid-cols-2 gap-5 md:gap-6 lg:gap-10">
              <Stat number="ROC #324249" label="Pool contractor, AZ" Icon={ShieldCheck} />
              <Stat number="2018" label="Locally owned in Gilbert since" Icon={Hammer} />
              <Stat number="4.9 ★" label="From Google reviews" Icon={Award} />
              <Stat number="7" label="East Valley cities served" Icon={MapPin} />
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ============================================================
          RECENT WORK — masonry grid
         ============================================================ */}
      <RevealSection className="py-16 md:py-28 lg:py-40 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <div data-reveal className="text-xs uppercase tracking-[0.3em] opacity-60 mb-6">
                03 / Recent work
              </div>
              <h2 data-reveal className="font-[var(--font-fraunces)] font-light text-[clamp(40px,6.5vw,96px)] leading-[1.05] md:leading-[0.95] tracking-[-0.015em]">
                A few <span className="serif-italic text-[var(--color-deep)]">backyards.</span>
              </h2>
            </div>
            <Link
              href="/work"
              data-reveal
              className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] opacity-80 hover:opacity-100 transition-opacity"
            >
              See the full gallery
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-[var(--color-foreground)]/20 group-hover:bg-[var(--color-foreground)] group-hover:text-[var(--color-background)] transition-colors duration-500">
                <ArrowUpRight size={16} strokeWidth={1.5} />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 lg:gap-5">
            {galleryPhotos.map((src, i) => (
              <div
                key={src}
                data-reveal
                className={`relative overflow-hidden rounded-xl bg-[var(--color-deep)] group ${
                  i === 0 ? 'col-span-2 md:col-span-4 row-span-2 aspect-[4/3] md:aspect-[16/11]' :
                  i === 1 ? 'col-span-2 md:col-span-2 aspect-[4/3]' :
                  'col-span-1 md:col-span-2 aspect-[4/3]'
                }`}
              >
                <Image
                  src={src}
                  alt={`Recent Catalina Pools project ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-out-quint)] group-hover:scale-[1.06]"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f33]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ============================================================
          TESTIMONIAL — one real Google review, presented like a pull quote
         ============================================================ */}
      <RevealSection className="py-16 md:py-28 lg:py-40 px-6 lg:px-12 bg-[var(--color-muted)]">
        <div className="max-w-4xl mx-auto text-center">
          <div data-reveal className="text-xs uppercase tracking-[0.3em] opacity-60 mb-10">
            04 / What clients say
          </div>
          <blockquote
            data-reveal
            className="font-[var(--font-fraunces)] font-light text-[clamp(28px,3.6vw,52px)] leading-[1.15] tracking-[-0.01em]"
          >
            <span className="serif-italic text-[var(--color-accent)]">&ldquo;</span>
            They recently repaired our 24-year-old pool to perfection and installed the decorative tile we chose around the rim. Not only is their work first-rate — the team is very professional. Each tile had its place.
            <span className="serif-italic text-[var(--color-accent)]">&rdquo;</span>
          </blockquote>
          <cite data-reveal className="block mt-10 not-italic text-sm uppercase tracking-[0.25em] opacity-60">
            — Ann C. · Google Review
          </cite>
        </div>
      </RevealSection>

      {/* ============================================================
          SECONDARY CTA — second chance
         ============================================================ */}
      <RevealSection className="py-16 md:py-28 lg:py-40 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-7">
              <div data-reveal className="text-xs uppercase tracking-[0.3em] opacity-60 mb-6">
                05 / Get started
              </div>
              <h2
                data-reveal
                className="font-[var(--font-fraunces)] font-light text-[clamp(44px,7vw,116px)] leading-[1.05] md:leading-[0.95] tracking-[-0.02em]"
              >
                Tell us about <span className="serif-italic text-[var(--color-deep)]">your yard.</span>
              </h2>
              <p data-reveal className="mt-8 text-lg opacity-75 max-w-lg leading-relaxed">
                Free, written quotes within a few business days — pool builds, remodels, and equipment work. No high-pressure sales call, just clear numbers.
              </p>
            </div>

            <div data-reveal className="md:col-span-5 flex flex-col gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-between gap-4 px-8 py-6 bg-[var(--color-foreground)] text-[var(--color-background)] rounded-2xl hover:bg-[var(--color-accent)] transition-colors duration-500 ease-[var(--ease-out-quint)]"
              >
                <span className="font-[var(--font-fraunces)] text-2xl font-light">Request a quote</span>
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-background)]/15 group-hover:bg-[var(--color-background)]/25 transition-colors">
                  <ArrowUpRight size={20} strokeWidth={1.5} />
                </span>
              </Link>
              <a
                href="tel:+14803614462"
                className="group inline-flex items-center justify-between gap-4 px-8 py-6 border border-[var(--color-foreground)]/15 rounded-2xl hover:border-[var(--color-foreground)]/30 hover:bg-[var(--color-muted)] transition-all duration-500"
              >
                <span className="font-[var(--font-fraunces)] text-2xl font-light">Call (480) 361-4462</span>
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-foreground)]/10 group-hover:bg-[var(--color-foreground)]/20 transition-colors">
                  <Phone size={18} strokeWidth={1.5} />
                </span>
              </a>
              <div className="pt-2 text-sm opacity-60 leading-relaxed">
                70 S Val Vista Dr., Ste. A3-218, Gilbert, AZ 85296<br />
                Mon–Fri · 8:00 AM – 5:00 PM
              </div>
            </div>
          </div>
        </div>
      </RevealSection>
    </>
  )
}

function Stat({
  number,
  label,
  Icon,
}: {
  number: string
  label: string
  Icon: LucideIcon
}) {
  return (
    <div data-reveal className="border-t border-white/15 pt-5 md:pt-6">
      <Icon size={20} strokeWidth={1.25} className="text-[var(--color-accent)] mb-4 md:mb-5" />
      <div className="font-[var(--font-fraunces)] font-light text-xl md:text-3xl lg:text-4xl tabular tracking-[-0.01em] break-words">
        {number}
      </div>
      <div className="mt-2 text-xs md:text-sm opacity-60 leading-snug">{label}</div>
    </div>
  )
}
