import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import { RevealSection } from '@/components/RevealSection'
import { SplitHeadline } from '@/components/SplitHeadline'

export const metadata: Metadata = {
  title: 'Gallery | Catalina Pools AZ — Recent East Valley Pool Projects',
  description:
    'Browse recent pool builds, remodels, and resurface projects by Catalina Pools AZ in Gilbert, Mesa, Chandler, Queen Creek, and the East Valley.',
}

type Project = {
  src: string
  title: string
  type: string
  location: string
  year: string
  span?: string
}

const projects: Project[] = [
  {
    src: 'https://catalinapoolsaz.com/wp-content/uploads/2021/06/IMG_2736-1024x768.jpg',
    title: 'Mediterranean New Build',
    type: 'New Build',
    location: 'Gilbert, AZ',
    year: '2024',
    span: 'md:col-span-8 md:row-span-2 aspect-[16/12] md:aspect-auto',
  },
  {
    src: 'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?w=1400&q=85',
    title: 'Full Re-Plaster & Tile',
    type: 'Remodel',
    location: 'Mesa, AZ',
    year: '2024',
    span: 'md:col-span-4 aspect-[4/5]',
  },
  {
    src: 'https://images.unsplash.com/photo-1591389703635-e15a07b842d7?w=1400&q=85',
    title: 'Pebble Resurface + Coping',
    type: 'Remodel',
    location: 'Chandler, AZ',
    year: '2024',
    span: 'md:col-span-4 aspect-[4/5]',
  },
  {
    src: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1400&q=85',
    title: 'Backyard Refresh',
    type: 'Remodel',
    location: 'Queen Creek, AZ',
    year: '2024',
    span: 'md:col-span-4 aspect-square',
  },
  {
    src: 'https://images.unsplash.com/photo-1582610116397-edb318620f90?w=1400&q=85',
    title: 'Resort-Style Build',
    type: 'New Build',
    location: 'Gilbert, AZ',
    year: '2023',
    span: 'md:col-span-8 aspect-[16/9]',
  },
  {
    src: 'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?w=1400&q=85',
    title: 'Spillover Spa Addition',
    type: 'Remodel',
    location: 'San Tan Valley, AZ',
    year: '2023',
    span: 'md:col-span-4 aspect-[4/5]',
  },
  {
    src: 'https://catalinapoolsaz.com/wp-content/uploads/2021/06/IMG_2736-1024x768.jpg',
    title: 'Equipment + Plumbing Overhaul',
    type: 'Repair',
    location: 'Scottsdale, AZ',
    year: '2024',
    span: 'md:col-span-4 aspect-[4/5]',
  },
  {
    src: 'https://images.unsplash.com/photo-1591389703635-e15a07b842d7?w=1400&q=85',
    title: 'New Build + Pavers',
    type: 'New Build',
    location: 'Mesa, AZ',
    year: '2023',
    span: 'md:col-span-4 aspect-square',
  },
]

export default function Work() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[60vh] flex flex-col justify-end px-6 lg:px-12 pt-24 md:pt-32 pb-12 md:pb-16 bg-[var(--color-background)] overflow-hidden">
        <div className="relative max-w-[1400px] mx-auto w-full">
          <div className="text-xs uppercase tracking-[0.3em] opacity-60 mb-10">
            Gallery · 2023 – 2024
          </div>
          <SplitHeadline
            text="Recent backyards."
            className="font-[var(--font-fraunces)] font-light text-[clamp(48px,10vw,180px)] leading-[1.02] md:leading-[0.92] tracking-[-0.025em]"
          />
          <p className="mt-6 md:mt-10 max-w-2xl text-lg lg:text-xl opacity-75 leading-snug">
            A selection of builds, remodels, and equipment work from across the East Valley. New photos go up after every project closes out.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <RevealSection className="py-14 md:py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 auto-rows-auto">
          {projects.map((p, i) => (
            <article
              key={i}
              data-reveal
              className={`group relative rounded-2xl overflow-hidden bg-[var(--color-deep)] ${p.span}`}
            >
              <Image
                src={p.src}
                alt={`${p.title} — ${p.location}`}
                fill
                className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-out-quint)] group-hover:scale-[1.06]"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f33]/85 via-[#0a1f33]/10 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 p-5 md:p-7 lg:p-9 flex flex-col justify-end text-white opacity-100 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-700 ease-[var(--ease-out-quint)]">
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] opacity-80 mb-3">
                  <span>{p.type}</span>
                  <span className="opacity-50">·</span>
                  <span>{p.year}</span>
                </div>
                <h3 className="font-[var(--font-fraunces)] text-2xl lg:text-3xl font-light leading-tight">
                  {p.title}
                </h3>
                <div className="text-sm opacity-70 mt-1.5">{p.location}</div>
              </div>
            </article>
          ))}
        </div>
      </RevealSection>

      {/* CTA */}
      <RevealSection className="py-16 md:py-28 lg:py-36 px-6 lg:px-12 bg-[var(--color-foreground)] text-[var(--color-background)]">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2
            data-reveal
            className="font-[var(--font-fraunces)] font-light text-[clamp(40px,7vw,108px)] leading-[1.05] md:leading-[0.95] tracking-[-0.02em] max-w-5xl mx-auto"
          >
            Want yours <span className="serif-italic text-[var(--color-accent)]">in the next batch?</span>
          </h2>
          <div data-reveal className="mt-12 inline-flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 pl-7 pr-2 py-2 bg-[var(--color-background)] text-[var(--color-foreground)] rounded-full hover:bg-[var(--color-accent)] hover:text-[var(--color-background)] transition-colors duration-500"
            >
              <span>Request a quote</span>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-foreground)] text-[var(--color-background)] group-hover:bg-[var(--color-background)] group-hover:text-[var(--color-accent)] transition-all duration-500">
                <ArrowUpRight size={18} strokeWidth={1.5} />
              </span>
            </Link>
            <a
              href="tel:+14803614462"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/30 rounded-full hover:bg-white/5 transition-colors duration-500"
            >
              (480) 361-4462
            </a>
          </div>
        </div>
      </RevealSection>
    </>
  )
}
