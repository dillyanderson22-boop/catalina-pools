'use client'
import { useRef, ReactNode } from 'react'
import gsap from 'gsap'

export function MagneticButton({
  children,
  className = '',
  href,
  ...rest
}: {
  children: ReactNode
  className?: string
  href?: string
  [key: string]: any
}) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    gsap.to(ref.current, { x: x * 0.25, y: y * 0.25, duration: 0.6, ease: 'expo.out' })
  }

  const onLeave = () => {
    if (!ref.current) return
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.4)' })
  }

  const inner = (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`inline-block ${className}`}
    >
      {children}
    </div>
  )

  if (href) {
    return (
      <a href={href} {...rest}>
        {inner}
      </a>
    )
  }
  return <button {...rest}>{inner}</button>
}
