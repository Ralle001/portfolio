import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern bg-theme-lightblue" />

      {/* Decorative Elements */}
      <div
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-theme-purple opacity-20 animate-float"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="absolute bottom-20 right-10 w-16 h-16 rounded-full bg-theme-teal opacity-20 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/4 w-12 h-12 rounded-full bg-theme-coral opacity-10 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container px-4 md:px-6 py-20 md:py-28 relative">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-theme-purple/20 text-theme-purple font-medium text-sm">
              Software Engineer & Cybersecurity Specialist
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-theme-purple">Donát Treszler</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Software engineer with 5 years of experience in process design and analysis, passionate about developing
              secure and efficient solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-theme-purple hover:bg-theme-purple/90 text-white" asChild>
                <a href="#contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-theme-purple text-theme-purple hover:bg-theme-purple/10"
                asChild
              >
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              {/* Decorative circle behind image */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-theme-purple to-theme-teal opacity-20 blur-lg"></div>

              {/* Profile image with border */}
              <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src="/81cf0892-b39a-4b91-b72e-37b66c3b75fb.JPG"
                  alt="Donát Treszler"
                  width={400}
                  height={400}
                  className="object-cover"
                  priority
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-lg bg-theme-yellow rotate-12 -z-10"></div>
              <div className="absolute -top-6 -left-6 w-20 h-20 rounded-lg bg-theme-coral -rotate-12 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

