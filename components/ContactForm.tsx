'use client'
import { useState } from 'react'
import { Send } from 'lucide-react'

const services = [
  'New pool build',
  'Pool remodel / resurface',
  'Equipment repair',
  'Weekly maintenance',
  'Something else',
]

export function ContactForm() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    // No backend wired yet — open a prefilled mailto so submissions still reach the inbox.
    const form = new FormData(e.currentTarget)
    const params = new URLSearchParams({
      subject: `Quote request — ${form.get('service') || 'general'}`,
      body: `Name: ${form.get('name') || ''}
Phone: ${form.get('phone') || ''}
Email: ${form.get('email') || ''}
Service: ${form.get('service') || ''}
City: ${form.get('city') || ''}

${form.get('message') || ''}`,
    })
    window.location.href = `mailto:info@catalinapoolsaz.com?${params.toString()}`
    setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 600)
  }

  if (sent) {
    return (
      <div className="py-10 text-center">
        <div className="font-[var(--font-fraunces)] font-light text-3xl mb-4 tracking-[-0.01em]">
          Thanks — your email is open.
        </div>
        <p className="opacity-70 max-w-sm mx-auto">
          We&apos;ll be in touch within one business day. Prefer the phone? Call{' '}
          <a href="tel:+14803614462" className="underline hover:text-[var(--color-accent)]">
            (480) 361-4462
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Your name" name="name" required />
        <Field label="Phone" name="phone" type="tel" required />
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Email" name="email" type="email" required />
        <Field label="City" name="city" placeholder="Gilbert, Mesa, Chandler..." />
      </div>
      <div>
        <Label>What can we help with?</Label>
        <div className="grid sm:grid-cols-2 gap-2.5">
          {services.map((s, i) => (
            <label
              key={s}
              className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-white/60 hover:bg-white border border-transparent has-[:checked]:bg-white has-[:checked]:border-[var(--color-foreground)] cursor-pointer transition-colors"
            >
              <input
                type="radio"
                name="service"
                value={s}
                defaultChecked={i === 0}
                className="accent-[var(--color-accent)]"
              />
              <span className="text-sm">{s}</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <Label>Tell us about it (optional)</Label>
        <textarea
          name="message"
          rows={4}
          placeholder="Yard size, pool age, what's not working, etc."
          className="w-full px-5 py-4 rounded-xl bg-white/60 focus:bg-white border border-transparent focus:border-[var(--color-foreground)] outline-none transition-colors resize-none text-base"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="group w-full inline-flex items-center justify-center gap-3 px-7 py-5 bg-[var(--color-foreground)] text-[var(--color-background)] rounded-2xl hover:bg-[var(--color-accent)] transition-colors duration-500 ease-[var(--ease-out-quint)] disabled:opacity-50"
      >
        <span className="font-[var(--font-fraunces)] text-xl font-light">
          {loading ? 'Opening email…' : 'Send quote request'}
        </span>
        <Send size={18} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform duration-500" />
      </button>
      <p className="text-xs opacity-60 text-center leading-relaxed">
        Submitting opens your email app with the message prefilled — that way we never lose your inquiry.
      </p>
    </form>
  )
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs uppercase tracking-[0.25em] opacity-60 mb-3">{children}</div>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required,
  placeholder,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
}) {
  return (
    <div>
      <Label>{label}{required && <span className="opacity-60">  *</span>}</Label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full px-5 py-4 rounded-xl bg-white/60 focus:bg-white border border-transparent focus:border-[var(--color-foreground)] outline-none transition-colors text-base"
      />
    </div>
  )
}
