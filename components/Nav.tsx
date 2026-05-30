'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [overHero, setOverHero] = useState(true)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80)
      setOverHero(window.scrollY < window.innerHeight - 80)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-[background-color,backdrop-filter,box-shadow] duration-500 ease-[var(--ease-out-quint)] ${
          scrolled
            ? 'bg-[var(--color-background)]/92 backdrop-blur-md shadow-[0_1px_0_0_var(--color-border)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label="Catalina Pools home">
            <Image
              src="https://catalinapoolsaz.com/wp-content/uploads/2021/05/Logo.png"
              alt="Catalina Pools AZ"
              width={56}
              height={56}
              className="object-contain"
              priority
            />
            <span
              className={`hidden sm:block font-[var(--font-display)] text-lg tracking-tight transition-colors duration-500 ${
                overHero && !scrolled ? 'text-white' : 'text-[var(--color-foreground)]'
              }`}
            >
              Catalina Pools
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm tracking-wide transition-colors duration-500 hover:text-[var(--color-accent)] ${
                  overHero && !scrolled ? 'text-white/90' : 'text-[var(--color-foreground)]'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:+14803614462"
              className={`px-5 py-2.5 rounded-full text-sm transition-colors duration-500 ease-[var(--ease-out-quint)] ${
                overHero && !scrolled
                  ? 'bg-white text-[var(--color-foreground)] hover:bg-[var(--color-accent)] hover:text-white'
                  : 'bg-[var(--color-foreground)] text-white hover:bg-[var(--color-accent)]'
              }`}
            >
              (480) 361-4462
            </a>
          </div>

          <button
            className={`md:hidden p-2 -mr-2 ${overHero && !scrolled ? 'text-white' : 'text-[var(--color-foreground)]'}`}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-50 bg-[var(--color-foreground)] text-[var(--color-background)] transition-[transform] duration-700 ease-[var(--ease-in-out-quint)] ${
          open ? 'translate-y-0' : '-translate-y-full'
        }`}
        aria-hidden={!open}
      >
        <div className="h-20 px-6 flex items-center justify-between">
          <span className="font-[var(--font-display)] text-lg">Catalina Pools</span>
          <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 -mr-2">
            <X size={28} strokeWidth={1.5} />
          </button>
        </div>
        <div className="px-6 pt-16 pb-12 flex flex-col gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-[var(--font-display)] text-5xl leading-none hover:text-[var(--color-accent)] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="absolute bottom-12 left-6 right-6 space-y-4">
          <a
            href="tel:+14803614462"
            className="block w-full text-center px-8 py-4 bg-[var(--color-accent)] text-white rounded-full text-lg"
          >
            Call (480) 361-4462
          </a>
          <p className="text-center text-sm opacity-70">
            70 S Val Vista Dr., Gilbert, AZ
          </p>
        </div>
      </div>
    </>
  )
}
