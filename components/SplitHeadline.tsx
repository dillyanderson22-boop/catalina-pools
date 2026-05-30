'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function SplitHeadline({
  text,
  className = '',
  delay = 0.2,
  as: Tag = 'h1',
}: {
  text: string
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3'
}) {
  const ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const words = text.split(' ')
    ref.current.innerHTML = words
      .map((word) => {
        const chars = word
          .split('')
          .map(
            (c) =>
              `<span class="inline-block overflow-hidden align-bottom"><span class="char inline-block">${c}</span></span>`
          )
          .join('')
        return `<span class="inline-block whitespace-nowrap mr-[0.25em]">${chars}</span>`
      })
      .join('')

    const charEls = ref.current.querySelectorAll('.char')
    gsap.fromTo(
      charEls,
      { yPercent: 110 },
      { yPercent: 0, duration: 0.9, ease: 'expo.out', stagger: 0.022, delay }
    )
  }, [text, delay])

  // @ts-expect-error dynamic tag
  return <Tag ref={ref} className={className}>{text}</Tag>
}
