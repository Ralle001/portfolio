import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectsPage() {
  // Sample project data - replace with your own
  const projects = [
    {
      id: "thesis",
      title: "Substation Sentinel",
      description:
        "Substation Sentinel is a tool developed as part of my bachelor thesis for analyzing and securing network traffic in IEC 61850-based substation automation systems.",
      technologies: ["Python", "Scapy", "WireShark", "IEC 61850"],
      githubUrl: "https://github.com/Ralle001/Substation-Sentinel",
      featured: true,
      color: "from-theme-purple to-theme-teal",
    },
    {
      id: "vocab-app",
      title: "Vocab-book",
      description: "An easy way to practice your words",
      technologies: ["ReactJS", "NodeJS", "JavaScript", "Firebase", "Web3.0"],
      liveUrl: "https://vocab.ralle001.xyz",
      githubUrl: "https://github.com/Ralle001/vocab-book",
      featured: true,
      color: "from-theme-coral to-theme-yellow",
    },
    {
      id: "portfolio",
      title: "Portfolio Website",
      description: "A responsive portfolio website built with modern web technologies to showcase projects and skills.",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
      featured: false,
      color: "from-theme-teal to-theme-lightblue",
    },
    {
      id: "microservice-istio",
      title: "Microservices with Istio",
      description: "Automated Microservices Deployment on AWS with Terraform, EKS, and Istio",
      technologies: ["AWS", "Terraform", "EKS", "ISTIO"],
      githubUrl: "https://github.com/Ralle001/aws-istio",
      featured: false,
      color: "from-theme-purple to-theme-coral",
    },
    {
      id: "ai-sec",
      title: "AI-Driven Security Monitoring and Compliance",
      description: "DevSecOps system using AI/ML to find anomalies and reports back using CI/CD and GitOps",
      technologies: ["GitOps", "CI/CD", "K8S", "ML model", "Falco"],
      githubUrl: "https://github.com/Ralle001/anomaly-detection",
      featured: false,
      color: "from-theme-yellow to-theme-teal",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="py-16 md:py-24 bg-gradient-to-b from-theme-lightblue/30 to-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-theme-purple/10 text-theme-purple font-medium text-sm">
                My Work
              </div>
              <h1 className="text-4xl font-bold tracking-tight mb-4 text-theme-navy">Projects & Creations</h1>
              <p className="text-xl text-muted-foreground">
                A collection of projects I've built throughout my career. Each project represents different skills and
                technologies I've worked with.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
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
                        // Alternate between different color schemes
                        const colorClasses = [
                          "bg-theme-purple/10 text-theme-purple",
                          "bg-theme-teal/10 text-theme-teal",
                          "bg-theme-coral/10 text-theme-coral",
                          "bg-theme-yellow/10 text-theme-yellow",
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

