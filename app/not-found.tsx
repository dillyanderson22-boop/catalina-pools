import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-[var(--color-background)]">
      <div className="text-xs uppercase tracking-[0.3em] opacity-60 mb-8">404 · Off the deep end</div>
      <h1 className="font-[var(--font-fraunces)] font-light text-[clamp(96px,18vw,260px)] leading-[0.9] tracking-[-0.03em]">
        404
      </h1>
      <p className="mt-8 text-xl opacity-70 max-w-md leading-relaxed">
        Looks like this page took a dive. Let&apos;s get you back to dry ground.
      </p>
      <Link
        href="/"
        className="mt-12 inline-block px-8 py-4 bg-[var(--color-foreground)] text-[var(--color-background)] rounded-full hover:bg-[var(--color-accent)] transition-colors duration-500 ease-[var(--ease-out-quint)]"
      >
        Back to the home page
      </Link>
    </section>
  )
}
