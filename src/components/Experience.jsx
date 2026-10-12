import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, MapPin, Calendar } from "lucide-react";
const Experience = () => {
  return <section id="experience" className="py-20 scroll-animate">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey in software development, building innovative solutions and leading technical teams
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Cod Tech IT Solutions Experience */}
          <Card className="glass hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl gradient-text mb-2">
                    Full Stack Web Developer (Internship)
                  </CardTitle>
                  <div className="flex items-center gap-2 text-foreground/80 mb-2">
                    <Building className="w-4 h-4" />
                    <span className="font-semibold">Cod Tech IT Solutions Private Limited</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>Hyderabad</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Feb 25, 2025 - Apr 25, 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/90 mb-4 leading-relaxed">
                Assisted in developing and enhancing web applications using HTML, CSS and JavaScript under the guidance of senior developers. Collaborated with team members via online communication tools for code reviews, project updates, and troubleshooting during the virtual internship.
              </p>
              <div className="flex flex-wrap gap-2">
                {["HTML5", "CSS", "JavaScript", "Database", "Full Stack Web Development"].map((tech, techIndex) => <Badge key={techIndex} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                    {tech}
                  </Badge>)}
              </div>
            </CardContent>
          </Card>

          {/* Makos Infotech Experience */}
          <Card className="glass hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl gradient-text mb-2">
                    Front End Developer (Internship)
                  </CardTitle>
                  <div className="flex items-center gap-2 text-foreground/80 mb-2">
                    <Building className="w-4 h-4" />
                    <span className="font-semibold">Makos Infotech Private Limited</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>Tambaram, Chennai</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Jun 03, 2024 - Jun 26, 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/90 mb-4 leading-relaxed">
                Developed a job portal using HTML, CSS, JavaScript. Assigned some tasks in training completed successfully.
              </p>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "Web Development"].map((tech, techIndex) => <Badge key={techIndex} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                    {tech}
                  </Badge>)}
              </div>
            </CardContent>
          </Card>

          {/* Digital Innovations Experience */}
          <Card className="glass hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
            
            
          </Card>
        </div>
      </div>
    </section>;
};
export default Experience;