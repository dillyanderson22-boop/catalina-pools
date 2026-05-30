import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-[var(--color-foreground)] text-[var(--color-background)] mt-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-4 mb-6">
            <Image
              src="https://catalinapoolsaz.com/wp-content/uploads/2021/05/Logo.png"
              alt="Catalina Pools AZ"
              width={64}
              height={64}
              className="object-contain brightness-[1.4]"
            />
            <span className="font-[var(--font-display)] text-2xl tracking-tight">Catalina Pools AZ</span>
          </div>
          <p className="text-base leading-relaxed opacity-80 max-w-md serif-italic">
            Building, remodeling, and caring for backyard pools across Gilbert, Mesa, Chandler, and the East Valley since 2018.
          </p>
          <div className="mt-8 text-xs uppercase tracking-[0.2em] opacity-50">
            ROC #324249 · ROC #329417
          </div>
          <div className="mt-3 text-xs uppercase tracking-[0.2em] opacity-50">
            Licensed · Bonded · Insured
          </div>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-[var(--font-display)] text-sm uppercase tracking-[0.25em] mb-6 opacity-60">Explore</h4>
          <ul className="space-y-3 text-base">
            <li><Link href="/about" className="hover:text-[var(--color-accent)] transition-colors">About</Link></li>
            <li><Link href="/services" className="hover:text-[var(--color-accent)] transition-colors">Services</Link></li>
            <li><Link href="/work" className="hover:text-[var(--color-accent)] transition-colors">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-[var(--color-accent)] transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="font-[var(--font-display)] text-sm uppercase tracking-[0.25em] mb-6 opacity-60">Visit</h4>
          <address className="not-italic text-base space-y-1.5 leading-relaxed">
            <div>70 S Val Vista Dr., Ste. A3-218</div>
            <div>Gilbert, AZ 85296</div>
            <a href="tel:+14803614462" className="block pt-3 text-lg hover:text-[var(--color-accent)] transition-colors">
              (480) 361-4462
            </a>
            <a href="mailto:info@catalinapoolsaz.com" className="block hover:text-[var(--color-accent)] transition-colors">
              info@catalinapoolsaz.com
            </a>
          </address>
          <div className="mt-6 text-sm opacity-70 leading-relaxed">
            Mon–Fri · 8:00 AM – 5:00 PM<br />
            Sat · By appointment only
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs opacity-60">
          <div>© {new Date().getFullYear()} Catalina Pools AZ, LLC. All rights reserved.</div>
          <a href="https://aydenbuilds.com" className="hover:opacity-100 transition-opacity">
            Site by Ayden Anderson
          </a>
        </div>
      </div>
    </footer>
  )
}
