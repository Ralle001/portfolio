"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to top when the route changes
    window.scrollTo(0, 0)
  }, [pathname])

  // This component doesn't render anything
  return null
}

