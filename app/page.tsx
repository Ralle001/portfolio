import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import { ArrowRight, Briefcase, GraduationCap, Code, ExternalLink, Github, User } from "lucide-react"

export default function Home() {
  // Featured projects
  const featuredProjects = [
    {
      id: "thesis",
      title: "Substation Sentinel",
      description:
        "Substation Sentinel is a tool developed as part of my bachelor thesis for analyzing and securing network traffic in IEC 61850-based substation automation systems.",
      technologies: ["Python", "Scapy", "Wireshark"],
      githubUrl: "https://github.com/Ralle001/Substation-Sentinel",
      color: "from-theme-purple to-theme-teal",
    },
    {
      id: "vocab-app",
      title: "Vocab-book",
      description: "An easy way to practice your words",
      technologies: ["ReactJS", "Firebase", "Web3.0"],
      liveUrl: "https://vocab.ralle001.xyz",
      githubUrl: "https://github.com/Ralle001/vocab-book",
      color: "from-theme-coral to-theme-yellow",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <HeroSection />

        {/* About Me Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-white to-theme-lightblue/20">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6 justify-center">
                <div className="p-2 rounded-full bg-theme-purple/10 text-theme-purple">
                  <User className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold text-theme-navy">About Me</h2>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-theme-purple/10 relative">
                {/* Decorative elements */}
                <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-theme-purple opacity-20"></div>
                <div className="absolute -bottom-3 -right-3 w-6 h-6 rounded-full bg-theme-teal opacity-20"></div>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  I'm a software engineer with over five years of experience focused on process design, analysis, and optimization. Throughout my career, I’ve developed a strong foundation in solving complex problems and continuously improving workflows to enhance performance and reliability. My work has often involved digging into the details of systems to understand how they work, identifying bottlenecks or vulnerabilities, and designing thoughtful, scalable solutions that drive measurable impact.

Over time, I’ve become particularly interested in the intersection of software engineering and cybersecurity. As systems become more interconnected and threats more sophisticated, I see an urgent need for secure, efficient, and resilient infrastructure—and that’s exactly where I want to contribute. I'm passionate about building solutions that not only work well but are also robust against evolving risks. With a mindset rooted in curiosity and a commitment to continuous learning, I’m excited to bring my skills and experiences to teams that are tackling these challenges head-on.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Sections */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-theme-lightblue/20 to-theme-lightblue/30 -z-10"></div>

          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-16 text-theme-navy">At a Glance</h2>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Experience Overview */}
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-2 bg-theme-coral"></div>
                <CardContent className="p-6 pt-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-theme-coral/10 text-theme-coral">
                        <Briefcase className="h-5 w-5" />
                      </div>
                      <h3 className="text-2xl font-bold text-theme-navy">Work Experience</h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex justify-between items-center">
                        <span className="font-medium truncate mr-2">Software Engineer</span>
                        <span className="text-muted-foreground text-sm px-2 py-1 rounded-full bg-theme-coral/10 whitespace-nowrap">
                          2021-2025
                        </span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="font-medium truncate mr-2">DevSecOps Intern</span>
                        <span className="text-muted-foreground text-sm px-2 py-1 rounded-full bg-theme-coral/10 whitespace-nowrap">
                          2023
                        </span>
                      </li>
                    </ul>
                    <div className="pt-2">
                      <Link href="/experience">
                        <Button
                          variant="outline"
                          className="w-full border-theme-coral text-theme-coral hover:bg-theme-coral/10 hover:text-theme-coral"
                        >
                          View All Experience
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Education Overview */}
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-2 bg-theme-teal"></div>
                <CardContent className="p-6 pt-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-theme-teal/10 text-theme-teal">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <h3 className="text-2xl font-bold text-theme-navy">Education</h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex justify-between items-center">
                        <span className="font-medium truncate mr-2">Universidad de Carlos III Madrid</span>
                        <span className="text-muted-foreground text-sm px-2 py-1 rounded-full bg-theme-teal/10 whitespace-nowrap">
                          2024
                        </span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="font-medium truncate mr-2">Budapest University of Technology</span>
                        <span className="text-muted-foreground text-sm px-2 py-1 rounded-full bg-theme-teal/10 whitespace-nowrap">
                          2020-2025
                        </span>
                      </li>
                    </ul>
                    <div className="pt-2">
                      <Link href="/education">
                        <Button
                          variant="outline"
                          className="w-full border-theme-teal text-theme-teal hover:bg-theme-teal/10 hover:text-theme-teal"
                        >
                          View Education Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Skills Overview */}
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-2 bg-theme-purple"></div>
                <CardContent className="p-6 pt-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-theme-purple/10 text-theme-purple">
                        <Code className="h-5 w-5" />
                      </div>
                      <h3 className="text-2xl font-bold text-theme-navy">Skills</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-theme-purple/10 text-theme-purple px-3 py-1 rounded-full text-sm">
                        Python
                      </span>
                      <span className="bg-theme-purple/10 text-theme-purple px-3 py-1 rounded-full text-sm">React</span>
                      <span className="bg-theme-purple/10 text-theme-purple px-3 py-1 rounded-full text-sm">Java</span>
                      <span className="bg-theme-purple/10 text-theme-purple px-3 py-1 rounded-full text-sm">
                        Docker
                      </span>
                      <span className="bg-theme-purple/10 text-theme-purple px-3 py-1 rounded-full text-sm">AWS</span>
                    </div>
                    <div className="pt-2">
                      <Link href="/skills">
                        <Button
                          variant="outline"
                          className="w-full border-theme-purple text-theme-purple hover:bg-theme-purple/10 hover:text-theme-purple"
                        >
                          View All Skills
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Preview */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-theme-lightblue/30 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-theme-navy">Featured Projects</h2>
              <Link href="/projects">
                <Button variant="ghost" className="mt-4 md:mt-0 text-theme-purple hover:bg-theme-purple/10">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <Card
                  key={project.id}
                  className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className={`h-2 rounded-t-md -mt-6 -mx-6 mb-4 bg-gradient-to-r ${project.color}`}></div>
                    <h3 className="text-xl font-bold mb-2 text-theme-navy group-hover:text-theme-purple transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => {
                        const colorClasses = [
                          "bg-theme-purple/10 text-theme-purple",
                          "bg-theme-teal/10 text-theme-teal",
                          "bg-theme-coral/10 text-theme-coral",
                        ]
                        const colorClass = colorClasses[index % colorClasses.length]

                        return (
                          <span key={tech} className={`${colorClass} px-2 py-1 rounded-md text-xs`}>
                            {tech}
                          </span>
                        )
                      })}
                    </div>
                    <div className="flex gap-3 mt-auto pt-4">
                      {project.liveUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-theme-purple text-theme-purple hover:bg-theme-purple/10"
                          asChild
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-theme-teal text-theme-teal hover:bg-theme-teal/10"
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

