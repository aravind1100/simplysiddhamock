import { useEffect, useRef } from 'react'

export function useScrollAnimate() {
  const ref = useRef(null)

  useEffect(() => {
    // Global setup: animate any element with .scroll-animate
    const targets = Array.from(document.querySelectorAll('.scroll-animate'))

    if (targets.length === 0) return

    targets.forEach((el) => {
      el.classList.add('scroll-animate-init')
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return ref
}
