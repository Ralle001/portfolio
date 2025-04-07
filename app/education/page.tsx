import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { CalendarIcon, GraduationCap, MapPin, CheckCircle } from "lucide-react"

export default function EducationPage() {
  // Education data based on your CV
  const education = [
    {
      id: 1,
      degree: "Bachelor of Computer Science",
      institution: "Budapest University of Technology and Economics",
      location: "Budapest, Hungary",
      period: "Sep 2020 - Jan 2025",
      description:
        "Studying computer science with a focus on software engineering and cybersecurity, developing a strong foundation in programming, algorithms, and system design.",
      courses: [
        "Data Structures and Algorithms",
        "Operating Systems",
        "Database Systems",
        "Web Development",
        "Software Engineering",
        "Cybersecurity Fundamentals",
        "Computer Networks",
      ],
      achievements: [
        "National IT Competition (OITM) - multiple top 20 category finishes",
        "CrySyS Security Challenge 2023 (2nd place)",
      ],
      color: "bg-theme-teal",
    },
    {
      id: 2,
      degree: "Bachelor of Information and Communication Technologies",
      institution: "Universidad de Carlos III Madrid",
      location: "Madrid, Spain",
      period: "2024",
      description:
        "Erasmus+ mobility program focusing on advanced topics in information technology and international perspectives in software development.",
      courses: [
        "Advanced Software Development",
        "International IT Project Management",
        "Spanish Language and Culture",
        "European Technology Innovation",
      ],
      achievements: ["Erasmus+ Scholarship Recipient", "International Student Project Collaboration"],
      color: "bg-theme-purple",
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
                My Learning Path
              </div>
              <h1 className="text-4xl font-bold tracking-tight mb-4 text-theme-navy">Education</h1>
              <p className="text-xl text-muted-foreground">
                My academic journey and the knowledge I've acquired along the way.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-12">
              {education.map((item, index) => (
                <Card key={item.id} className="border-none shadow-lg overflow-hidden">
                  <div className={`h-2 ${item.color}`}></div>
                  <CardHeader className="pb-0">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                      <div>
                        <h2 className="text-2xl font-bold text-theme-navy">{item.degree}</h2>
                        <div className="flex items-center text-muted-foreground mt-1">
                          <GraduationCap className="h-4 w-4 mr-1" />
                          <span>{item.institution}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-sm w-fit">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        <span>{item.period}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="mb-6 text-muted-foreground">{item.description}</p>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-semibold mb-4 text-theme-navy flex items-center">
                          <div className="w-2 h-6 bg-theme-purple mr-2 rounded-full"></div>
                          Key Courses
                        </h3>
                        <ul className="space-y-2">
                          {item.courses.map((course, index) => (
                            <li key={index} className="flex items-start">
                              <div className="h-5 w-5 rounded-full bg-theme-purple/10 text-theme-purple flex items-center justify-center mr-2 mt-0.5">
                                <span className="text-xs font-bold">{index + 1}</span>
                              </div>
                              <span>{course}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-4 text-theme-navy flex items-center">
                          <div className="w-2 h-6 bg-theme-teal mr-2 rounded-full"></div>
                          Achievements
                        </h3>
                        <ul className="space-y-2">
                          {item.achievements.map((achievement, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-theme-teal mr-2 mt-1" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
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

