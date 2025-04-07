import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { CalendarIcon, MapPin, Building, ArrowRight } from "lucide-react"

export default function ExperiencePage() {
  // Experience data based on your CV
  const experiences = [
    {
      id: 1,
      title: "Software Engineer",
      company: "TCM International Tool Consulting & Management GmbH",
      location: "Valencia, Spain",
      period: "Sep 2021 - Feb 2025",
      description: [
        "Managing and maintaining existing IT infrastructure, systems and developing software solutions.",
        "Developed new software functionalities, ensuring alignment with client requirements and vision.",
        "Designed and implemented tools that increased automation and efficiency in server installation and configuration.",
        "Tested and updated existing software, providing improvement suggestions based on expertise and experience.",
      ],
      technologies: ["Python", "ReactJS", "Angular", "Java", "Spring Boot", "Docker", "AWS", "C#", "Kafka"],
      color: "bg-theme-purple",
    },
    {
      id: 2,
      title: "DevSecOps Engineer Intern",
      company: "Ukatemi Technologies Zrt",
      location: "Budapest, Hungary",
      period: "Jul 2023 - Sep 2023",
      description: [
        "Developed software solutions aimed at enhancing system security.",
        "Conducted penetration testing to identify vulnerabilities in systems.",
        "Collaborated with security teams to implement best practices.",
        "Gained hands-on experience with cybersecurity tools and methodologies.",
      ],
      technologies: ["Python", "Docker", "Security Testing", "Penetration Testing", "CI/CD"],
      color: "bg-theme-teal",
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
                My Journey
              </div>
              <h1 className="text-4xl font-bold tracking-tight mb-4 text-theme-navy">Work Experience</h1>
              <p className="text-xl text-muted-foreground">
                My professional journey and the companies I've had the privilege to work with.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Timeline connector */}
              <div className="relative">
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-theme-purple via-theme-teal to-theme-coral -translate-x-1/2 hidden md:block"></div>

                {experiences.map((experience, index) => (
                  <div key={experience.id} className={`relative ${index !== 0 ? "mt-16" : ""}`}>
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full ${experience.color} -translate-x-1/2 -translate-y-1/2 hidden md:block`}
                    ></div>

                    <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:ml-auto" : "md:pl-12"}`}>
                      <Card className="border-none shadow-lg overflow-hidden">
                        <div className={`h-2 ${experience.color}`}></div>
                        <CardHeader className="pb-0">
                          <div className="flex flex-col gap-4">
                            <div>
                              <h2 className="text-2xl font-bold text-theme-navy">{experience.title}</h2>
                              <div className="flex items-center text-muted-foreground mt-1">
                                <Building className="h-4 w-4 mr-1" />
                                <span>{experience.company}</span>
                              </div>
                              <div className="flex items-center text-muted-foreground mt-1">
                                <MapPin className="h-4 w-4 mr-1" />
                                <span>{experience.location}</span>
                              </div>
                            </div>
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-sm w-fit">
                              <CalendarIcon className="h-4 w-4 mr-1" />
                              <span>{experience.period}</span>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <ul className="list-none space-y-3 mb-4">
                            {experience.description.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <ArrowRight className="h-4 w-4 mr-2 mt-1 text-theme-purple" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2 mt-6">
                            {experience.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="bg-theme-purple/10 text-theme-purple px-2 py-1 rounded-md text-xs"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

