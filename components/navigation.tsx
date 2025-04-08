"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  const routes = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Education", path: "/education" },
    { name: "Skills", path: "/skills" },
  ]

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl text-theme-navy">
          <span className="text-theme-purple">D</span>onát Treszler
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={`text-sm font-medium transition-colors hover:text-theme-purple ${
                pathname === route.path ? "text-theme-purple" : "text-muted-foreground"
              }`}
            >
              {route.name}
            </Link>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Button asChild className="bg-theme-purple hover:bg-theme-purple/90 text-white">
            <Link href="mailto:treszlerdonat@gmail.com">Contact Me</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-theme-purple hover:bg-theme-purple/10"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu - Completely redesigned for reliability */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-[100] md:hidden" style={{ backgroundColor: "white" }}>
          <div className="bg-white border-t border-gray-200 h-full w-full">
            <nav className="container py-6 flex flex-col gap-4">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  className={`text-lg font-medium py-3 px-4 rounded-md transition-colors ${
                    pathname === route.path
                      ? "bg-theme-purple/10 text-theme-purple"
                      : "text-theme-navy hover:bg-gray-100"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {route.name}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <Button asChild className="w-full bg-theme-purple hover:bg-theme-purple/90 text-white">
                  <Link href="mailto:treszlerdonat@gmail.com" onClick={() => setIsMenuOpen(false)}>
                    Contact Me
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
