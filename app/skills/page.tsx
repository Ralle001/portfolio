import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Code, Server, Database, Shield, Cog } from "lucide-react"

export default function SkillsPage() {
  // Maximum years for scaling the progress bars
  const maxYears = 5

  // Skills data based on your CV with years of experience
  const skillCategories = [
    {
      id: 1,
      name: "Frontend Development",
      icon: <Code className="h-6 w-6" />,
      color: "text-theme-purple",
      bgColor: "bg-theme-purple/10",
      progressColor: "bg-theme-purple",
      skills: [
        { name: "HTML/CSS", years: 5 },
        { name: "ReactJS", years: 3 },
        { name: "Javascript", years: 3 },
        { name: "Angular", years: 3 },
        { name: "TypeScript", years: 1 },
      ],
    },
    {
      id: 2,
      name: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      color: "text-theme-teal",
      bgColor: "bg-theme-teal/10",
      progressColor: "bg-theme-teal",
      skills: [
        { name: "Python", years: 5 },
        { name: "Java", years: 3 },
        { name: "Spring Boot", years: 3 },
        { name: "C#", years: 3 },
        { name: "Kafka", years: 3 },
      ],
    },
    {
      id: 3,
      name: "Database & Cloud",
      icon: <Database className="h-6 w-6" />,
      color: "text-theme-coral",
      bgColor: "bg-theme-coral/10",
      progressColor: "bg-theme-coral",
      skills: [
        { name: "SQL", years: 5 },
        { name: "AWS", years: 3 },
        { name: "Firebase", years: 3 },
        { name: "NoSQL", years: 3 },
      ],
    },
    {
      id: 4,
      name: "DevOps & Security",
      icon: <Shield className="h-6 w-6" />,
      color: "text-theme-yellow",
      bgColor: "bg-theme-yellow/10",
      progressColor: "bg-theme-yellow",
      skills: [
        { name: "Docker", years: 5 },
        { name: "Git", years: 5 },
        { name: "CI/CD", years: 3 },
        { name: "Security Testing", years: 2 },
        { name: "Penetration Testing", years: 2 },
        { name: "Jenkins", years: 2},
      ],
    },
    {
      id: 5,
      name: "Other Languages",
      icon: <Cog className="h-6 w-6" />,
      color: "text-theme-purple",
      bgColor: "bg-theme-purple/10",
      progressColor: "bg-theme-purple",
      skills: [
        { name: "C", years: 1 },
        { name: "C++", years: 1 },
        { name: "Solidity", years: 1 },
      ],
    },
    {
      id: 6,
      name: "Tools",
      icon: <Cog className="h-6 w-6" />,
      color: "text-theme-teal",
      bgColor: "bg-theme-teal/10",
      progressColor: "bg-theme-teal",
      skills: [
        { name: "Microsoft Office", years: 5 },
        { name: "Flask, FastAPI, Django, Pandas, NumPy", years: 2 },
        { name: "JIRA, Atlassian Stack", years: 2 },
      ],
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
                My Expertise
              </div>
              <h1 className="text-4xl font-bold tracking-tight mb-4 text-theme-navy">Skills & Abilities</h1>
              <p className="text-xl text-muted-foreground">
                A comprehensive overview of my technical skills and areas of expertise in software engineering and
                cybersecurity.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              {skillCategories.map((category) => (
                <Card key={category.id} className="border-none shadow-lg overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-theme-purple to-theme-teal"></div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`p-2 rounded-full ${category.bgColor} ${category.color}`}>{category.icon}</div>
                      <h2 className="text-2xl font-bold text-theme-navy">{category.name}</h2>
                    </div>
                    <div className="space-y-6">
                      {category.skills.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-2">
                            <span className="font-medium">{skill.name}</span>
                            <span className={`${category.color}`}>
                              {skill.years} {skill.years === 1 ? "year" : "years"}
                            </span>
                          </div>
                          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${category.progressColor} rounded-full transition-all duration-1000 ease-in-out`}
                              style={{ width: `${(skill.years / maxYears) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Languages Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-theme-lightblue/30">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12 text-theme-navy">Languages</h2>
            <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="h-2 bg-theme-purple"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-theme-navy">English</h3>
                  <p className="text-muted-foreground mb-2">Native Proficiency</p>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-theme-purple rounded-full" style={{ width: "100%" }}></div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="h-2 bg-theme-teal"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-theme-navy">Spanish</h3>
                  <p className="text-muted-foreground mb-2">A2 Level</p>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-theme-teal rounded-full" style={{ width: "30%" }}></div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="h-2 bg-theme-coral"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-theme-navy">Hungarian</h3>
                  <p className="text-muted-foreground mb-2">Native Proficiency</p>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-theme-coral rounded-full" style={{ width: "100%" }}></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-theme-lightblue/30 to-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12 text-theme-navy">
              Awards & Achievements
            </h2>
            <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="h-2 bg-theme-coral"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-theme-navy">CrySyS Security Challenge 2023</h3>
                  <p className="text-muted-foreground mb-2">2nd Place</p>
                  <p className="text-sm bg-theme-coral/10 text-theme-coral inline-block px-3 py-1 rounded-full">
                    Cybersecurity Competition
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="h-2 bg-theme-yellow"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-theme-navy">National IT Competition (OITM)</h3>
                  <p className="text-muted-foreground mb-2">Multiple Top 20 Category Finishes</p>
                  <p className="text-sm bg-theme-yellow/10 text-theme-yellow inline-block px-3 py-1 rounded-full">
                    IT Competition
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

