import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-theme-navy text-white">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-theme-teal">Donát Treszler</h3>
            <p className="text-white/70 mb-4">
              Software engineer with 5 years of experience in process design and analysis, passionate about developing
              secure and efficient solutions.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/Ralle001"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-theme-teal transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/donat-treszler/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-theme-teal transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-theme-coral">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-white/70 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/projects" className="text-white/70 hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="/experience" className="text-white/70 hover:text-white transition-colors">
                Experience
              </Link>
              <Link href="/education" className="text-white/70 hover:text-white transition-colors">
                Education
              </Link>
              <Link href="/skills" className="text-white/70 hover:text-white transition-colors">
                Skills
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-theme-purple">Contact</h3>
            <address className="not-italic text-white/70 space-y-2">
              <p className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:treszlerdonat@gmail.com" className="hover:text-theme-purple transition-colors">
                  treszlerdonat@gmail.com
                </a>
              </p>
              <p className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+34662470793" className="hover:text-theme-purple transition-colors">
                  +34 662 470 793
                </a>
              </p>
              <p className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Valencia, Spain
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/50">
          <p>© {new Date().getFullYear()} Donát Treszler. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

