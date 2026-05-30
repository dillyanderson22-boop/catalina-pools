import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowUpRight, Check } from 'lucide-react'
import { RevealSection } from '@/components/RevealSection'
import { SplitHeadline } from '@/components/SplitHeadline'

export const metadata: Metadata = {
  title: 'Services | Catalina Pools AZ — Build, Remodel & Repair in Gilbert',
  description:
    'New pool construction, full remodels, equipment repair, and weekly maintenance across Gilbert, Mesa, Chandler, Queen Creek, Scottsdale, and the East Valley.',
}

const services = [
  {
    id: 'build',
    n: 'A',
    title: 'New Pool Build',
    tag: 'Ground-up custom construction',
    image: 'https://catalinapoolsaz.com/wp-content/uploads/2021/06/IMG_2736-1024x768.jpg',
    blurb:
      'Site survey, design, engineering, dig, plumbing, gunite, tile, plaster, deck, equipment, and start-up — handled in one written scope by one crew.',
    includes: [
      'On-site design consultation in your backyard',
      '3D rendering before we touch the ground',
      'Engineered plans and permit handling',
      'Pebble, plaster, or quartz interior options',
      'Tile, coping, and deck finishes',
      'Variable-speed pump + cartridge filter package',
      'Salt or chlorine sanitization',
      'Optional spa, water features, in-floor cleaning',
      'Full start-up and pool school',
    ],
    price: 'Custom builds from the mid $50,000s · Free written quote',
    cta: 'Start a build quote',
  },
  {
    id: 'remodel',
    n: 'B',
    title: 'Pool Remodel & Resurface',
    tag: 'Bring an older pool back to life',
    image: 'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?w=1600&q=85',
    blurb:
      'Plaster failing? Tile dated? Pool surface stained? Remodel work is our bread and butter. Most homes in the East Valley have pools built 15–30 years ago and they all eventually need the same treatment.',
    includes: [
      'Drain, chip-out, and full re-surface',
      'Re-plaster, mini-pebble, or quartz',
      'Waterline tile replacement',
      'Coping repair or replacement',
      'Deck resurfacing options',
      'Equipment upgrade (variable-speed pumps cut your bill)',
      'Salt cell or automation retrofit',
      'Water-feature additions',
    ],
    price: 'Most full re-surface jobs $8,500 – $22,000 · Free written quote',
    cta: 'Request a remodel quote',
  },
  {
    id: 'repair',
    n: 'C',
    title: 'Equipment Repair',
    tag: 'Pumps, filters, cells, plumbing',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1600&q=85',
    blurb:
      "When something stops working, we diagnose it properly the first time. We carry common parts, partner directly with Jandy, Pentair, and Hayward, and we'll show you what failed and why before we touch it.",
    includes: [
      'Pump motor and seal replacement',
      'Filter cartridge, grid, and DE service',
      'Salt cell diagnostics and replacement',
      'Heater service (gas and electric)',
      'Automation install (iAqualink, ScreenLogic, Omnilogic)',
      'Plumbing leak detection and repair',
      'Tile repair and grout',
      'Pop-up head replacement and rebuilds',
    ],
    price: 'Diagnostic visit $89 (credited to repair) · Parts at cost',
    cta: 'Schedule a repair',
  },
  {
    id: 'maintenance',
    n: 'D',
    title: 'Weekly Maintenance',
    tag: 'Clean. Balanced. Photographed.',
    image: 'https://images.unsplash.com/photo-1582610116397-edb318620f90?w=1600&q=85',
    blurb:
      "Real weekly service — not a quick skim and a chlorine tab. We test six chemistry levels, brush walls, vacuum the bottom, empty baskets, and send you a photo report after every visit so you know exactly what we did.",
    includes: [
      'Full chemistry test and balance',
      'Skim, brush, and vacuum',
      'Skimmer and pump basket clean-out',
      'Equipment inspection',
      'Filter pressure check',
      'Photo report after every service',
      'Chlorine, conditioner, and acid included',
      'Free callbacks between visits',
    ],
    price: 'Weekly chemical-only $130/mo · Full service $180/mo',
    cta: 'Start service',
  },
]

export default function Services() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[70vh] flex flex-col justify-end px-6 lg:px-12 pt-24 md:pt-32 pb-12 md:pb-16 bg-[var(--color-background)] overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 80% 20%, var(--color-accent) 0px, transparent 45%), radial-gradient(circle at 10% 80%, var(--color-deep) 0px, transparent 40%)',
          }}
        />
        <div className="relative max-w-[1400px] mx-auto w-full">
          <div className="text-xs uppercase tracking-[0.3em] opacity-60 mb-10">
            Services · East Valley, AZ
          </div>
          <SplitHeadline
            text="Four things, done right."
            className="font-[var(--font-fraunces)] font-light text-[clamp(48px,9vw,160px)] leading-[1.05] md:leading-[0.95] tracking-[-0.025em]"
          />
          <p className="mt-6 md:mt-10 max-w-2xl text-lg lg:text-xl opacity-75 leading-snug">
            Build, remodel, repair, and weekly service — written quotes, fixed scopes, and one crew per job. Pricing notes are honest ranges, not the bait-and-switch you&apos;ll find elsewhere.
          </p>
        </div>
      </section>

      {/* Quick anchor nav */}
      <RevealSection className="border-y border-[var(--color-border)] py-5 md:py-6 px-6 lg:px-12 bg-[var(--color-background)] sticky top-16 md:top-20 z-30 backdrop-blur-md bg-[var(--color-background)]/90">
        <div className="max-w-[1400px] mx-auto flex items-center gap-x-5 md:gap-x-8 gap-y-3 text-[11px] md:text-xs uppercase tracking-[0.18em] md:tracking-[0.22em] overflow-x-auto whitespace-nowrap -mx-6 px-6 md:mx-0 md:px-0 md:flex-wrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {services.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="hover:text-[var(--color-accent)] transition-colors flex-shrink-0">
              <span className="opacity-50 mr-2 tabular">{s.n}</span>
              {s.title}
            </a>
          ))}
        </div>
      </RevealSection>

      {/* Service sections */}
      {services.map((s, i) => (
        <RevealSection
          key={s.id}
          className={`py-16 md:py-28 lg:py-40 px-6 lg:px-12 ${i % 2 === 1 ? 'bg-[var(--color-muted)]' : ''}`}
        >
          <section id={s.id} className="max-w-[1400px] mx-auto scroll-mt-32">
            <div className={`grid md:grid-cols-12 gap-12 lg:gap-20 items-start ${i % 2 === 1 ? 'md:[direction:rtl]' : ''}`}>
              {/* Image */}
              <div data-reveal className="md:col-span-6 [direction:ltr]">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--color-deep)]">
                  <Image
                    src={s.image}
                    alt={`${s.title} — Catalina Pools AZ`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="md:col-span-6 [direction:ltr]">
                <div data-reveal className="flex items-baseline gap-4 mb-6">
                  <span className="text-xs uppercase tracking-[0.3em] opacity-50 tabular">
                    {s.n}.
                  </span>
                  <span className="text-xs uppercase tracking-[0.3em] opacity-60">{s.tag}</span>
                </div>
                <h2
                  data-reveal
                  className="font-[var(--font-fraunces)] font-light text-[clamp(36px,5.5vw,80px)] leading-[1.05] md:leading-[0.95] tracking-[-0.015em] mb-8"
                >
                  {s.title}
                </h2>
                <p data-reveal className="text-lg opacity-80 leading-relaxed max-w-xl mb-10">
                  {s.blurb}
                </p>

                <div data-reveal className="text-xs uppercase tracking-[0.25em] opacity-60 mb-5">
                  What&apos;s included
                </div>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3.5 mb-10">
                  {s.includes.map((it) => (
                    <li key={it} data-reveal className="flex items-start gap-3 text-sm leading-snug">
                      <Check size={16} strokeWidth={1.5} className="mt-1 text-[var(--color-accent)] flex-shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>

                <div data-reveal className="pt-6 border-t border-[var(--color-foreground)]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                  <div className="text-sm opacity-70 leading-snug max-w-md">
                    <span className="font-[var(--font-fraunces)] serif-italic text-[var(--color-deep)] text-base">
                      Pricing
                    </span>
                    <br />
                    {s.price}
                  </div>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 pl-6 pr-2 py-1.5 bg-[var(--color-foreground)] text-[var(--color-background)] rounded-full hover:bg-[var(--color-accent)] transition-colors duration-500 self-start"
                  >
                    <span className="text-sm">{s.cta}</span>
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[var(--color-background)]/15 group-hover:bg-[var(--color-background)]/25 transition-colors">
                      <ArrowUpRight size={16} strokeWidth={1.5} />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </RevealSection>
      ))}

      {/* Service area */}
      <RevealSection className="py-16 md:py-28 lg:py-36 px-6 lg:px-12 bg-[var(--color-foreground)] text-[var(--color-background)]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-6">
              <div data-reveal className="text-xs uppercase tracking-[0.3em] opacity-60 mb-6">
                Service area
              </div>
              <h2
                data-reveal
                className="font-[var(--font-fraunces)] font-light text-[clamp(40px,6vw,84px)] leading-[1.05] md:leading-[0.95] tracking-[-0.015em]"
              >
                Across the <span className="serif-italic text-[var(--color-accent)]">East Valley.</span>
              </h2>
              <p data-reveal className="mt-8 text-lg opacity-80 max-w-md leading-relaxed">
                Headquartered in Gilbert with regular routes throughout the southeast valley. If you&apos;re nearby and not on this list, just ask — we likely already pass your block.
              </p>
            </div>
            <div className="md:col-span-6 grid grid-cols-2 gap-x-10 gap-y-4 text-base">
              {['Gilbert', 'Mesa', 'Chandler', 'Queen Creek', 'San Tan Valley', 'Scottsdale', 'Tempe', 'Higley'].map((city) => (
                <div key={city} data-reveal className="border-b border-white/10 pb-3">
                  {city}
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>
    </>
  )
}
