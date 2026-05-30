import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, type LucideIcon } from 'lucide-react'
import { RevealSection } from '@/components/RevealSection'
import { SplitHeadline } from '@/components/SplitHeadline'
import { ContactForm } from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact | Catalina Pools AZ — Gilbert, AZ',
  description:
    'Get in touch with Catalina Pools AZ for pool builds, remodels, repairs, and weekly service. Call (480) 361-4462 or request a quote online.',
}

export default function Contact() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[55vh] flex flex-col justify-end px-6 lg:px-12 pt-24 md:pt-32 pb-12 md:pb-16 bg-[var(--color-background)] overflow-hidden">
        <div className="relative max-w-[1400px] mx-auto w-full">
          <div className="text-xs uppercase tracking-[0.3em] opacity-60 mb-10">
            Contact · Gilbert, AZ
          </div>
          <SplitHeadline
            text="Let's talk about your pool."
            className="font-[var(--font-fraunces)] font-light text-[clamp(44px,8.5vw,148px)] leading-[1.05] md:leading-[0.95] tracking-[-0.025em]"
          />
          <p className="mt-6 md:mt-10 max-w-2xl text-lg lg:text-xl opacity-75 leading-snug">
            Tell us what you&apos;re thinking about — a new build, a remodel, a repair, or routine service. We&apos;ll come look, give you a written quote, and let you decide.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <RevealSection className="py-14 md:py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Info column */}
          <div className="lg:col-span-5">
            <div data-reveal className="text-xs uppercase tracking-[0.3em] opacity-60 mb-7">
              Direct line
            </div>
            <a
              data-reveal
              href="tel:+14803614462"
              className="block font-[var(--font-fraunces)] font-light text-4xl md:text-5xl lg:text-6xl tracking-[-0.015em] hover:text-[var(--color-accent)] transition-colors"
            >
              (480) 361-4462
            </a>

            <div className="mt-14 space-y-10">
              <InfoRow data-reveal Icon={Mail} label="Email">
                <a
                  href="mailto:info@catalinapoolsaz.com"
                  className="text-xl hover:text-[var(--color-accent)] transition-colors"
                >
                  info@catalinapoolsaz.com
                </a>
              </InfoRow>

              <InfoRow Icon={MapPin} label="Office">
                <address className="not-italic text-xl leading-snug">
                  70 S Val Vista Dr., Ste. A3-218<br />
                  Gilbert, AZ 85296
                </address>
                <a
                  href="https://goo.gl/maps/wvrJBBFPFLX9hHKS9"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-sm uppercase tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity"
                >
                  Open in Google Maps →
                </a>
              </InfoRow>

              <InfoRow Icon={Clock} label="Hours">
                <div className="text-xl leading-relaxed">
                  Mon – Fri · 8:00 AM – 5:00 PM<br />
                  Sat · By appointment
                </div>
              </InfoRow>
            </div>

            {/* Social */}
            <div className="mt-14 pt-10 border-t border-[var(--color-foreground)]/15">
              <div className="text-xs uppercase tracking-[0.3em] opacity-60 mb-5">Follow our work</div>
              <div className="flex gap-3">
                {[
                  { Icon: Facebook, href: 'https://www.facebook.com/catalinapoolsazllc/' },
                  { Icon: Instagram, href: 'https://www.instagram.com/catalinapoolsaz/' },
                  { Icon: Youtube, href: 'https://www.youtube.com/channel/UCMts6hm1D-tSjmwQpqFdgrA' },
                ].map(({ Icon, href }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[var(--color-foreground)]/20 hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition-colors duration-500"
                  >
                    <Icon size={18} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div data-reveal className="lg:col-span-7">
            <div className="rounded-3xl bg-[var(--color-muted)] p-8 lg:p-12">
              <div className="text-xs uppercase tracking-[0.3em] opacity-60 mb-4">
                Request a quote
              </div>
              <h2 className="font-[var(--font-fraunces)] font-light text-3xl lg:text-4xl tracking-[-0.01em] mb-6 md:mb-10 max-w-md">
                A few details and we&apos;ll get back to you within one business day.
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Map */}
      <RevealSection className="px-6 lg:px-12 pb-24">
        <div className="max-w-[1400px] mx-auto">
          <div data-reveal className="rounded-2xl overflow-hidden border border-[var(--color-border)] aspect-[16/8]">
            <iframe
              title="Catalina Pools AZ location"
              src="https://www.google.com/maps?q=70+S+Val+Vista+Dr+Gilbert+AZ+85296&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </RevealSection>

      {/* Service area mini reminder */}
      <RevealSection className="py-14 md:py-20 lg:py-28 px-6 lg:px-12 bg-[var(--color-foreground)] text-[var(--color-background)]">
        <div className="max-w-[1400px] mx-auto text-center">
          <div data-reveal className="text-xs uppercase tracking-[0.3em] opacity-60 mb-8">
            Service area
          </div>
          <p data-reveal className="font-[var(--font-fraunces)] font-light text-3xl lg:text-5xl leading-snug max-w-4xl mx-auto tracking-[-0.01em]">
            Gilbert · Mesa · Chandler · Queen Creek · San Tan Valley · Scottsdale · Tempe · Higley
          </p>
        </div>
      </RevealSection>
    </>
  )
}

function InfoRow({
  Icon,
  label,
  children,
}: {
  Icon: LucideIcon
  label: string
  children: React.ReactNode
}) {
  return (
    <div data-reveal>
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] opacity-60 mb-3">
        <Icon size={14} strokeWidth={1.5} />
        {label}
      </div>
      {children}
    </div>
  )
}
