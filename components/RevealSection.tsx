'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger)

export function RevealSection({
  children,
  className,
  as: Tag = 'div',
}: {
  children: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const elements = ref.current.querySelectorAll('[data-reveal]')
    const ctx = gsap.context(() => {
      elements.forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: 'expo.out',
            delay: (i % 3) * 0.06,
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          }
        )
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  // @ts-expect-error dynamic tag
  return <Tag ref={ref} className={className}>{children}</Tag>
}
