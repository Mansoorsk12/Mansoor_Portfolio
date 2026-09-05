import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Globe, Smartphone, Server, Palette } from "lucide-react";
const About = () => {
  const skills = [{
    category: "Frontend",
    icon: Globe,
    technologies: ["React", "Vue.js", "TypeScript", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
    color: "from-blue-500 to-cyan-500"
  }, {
    category: "Backend",
    icon: Server,
    technologies: ["Node.js", "Python", "Java", "Express.js", "Django", "REST APIs"],
    color: "from-green-500 to-emerald-500"
  }, {
    category: "Database",
    icon: Database,
    technologies: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
    color: "from-purple-500 to-violet-500"
  }, {
    category: "Mobile",
    icon: Smartphone,
    technologies: ["React Native", "Flutter", "Ionic"],
    color: "from-pink-500 to-rose-500"
  }, {
    category: "DevOps",
    icon: Code2,
    technologies: ["Docker", "AWS", "Git", "CI/CD", "Linux"],
    color: "from-orange-500 to-yellow-500"
  }, {
    category: "Design",
    icon: Palette,
    technologies: ["Figma", "Adobe XD", "UI/UX Design", "Responsive Design"],
    color: "from-indigo-500 to-blue-500"
  }];
  return <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Full Stack Developer with expertise in modern web technologies. 
            I love creating efficient, scalable, and user-friendly applications that solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Profile Image Section */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative">
              <div className="w-64 h-80 rounded-2xl overflow-hidden glass-card p-4">
                <img src="/lovable-uploads/4dff42f3-f557-4ea9-92bc-e1ef015070d8.png" alt="Shaik Mansoor Sadhik - Professional Photo" className="w-full h-full object-cover rounded-xl" />
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <Card className="glass-card lg:col-span-2">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4 gradient-text">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>I am Shaik Mansoor Sadhik, a full stack web developer. I have worked on projects ranging from creating a Web applications like E-Commerce platform,Task management application to IoT-based Smart Assistive Chair. With skills in Java, Python, and web development, I aim to build impactful AI-driven innovations that solve real-world problems.</p>
                
                
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats/Highlights */}
        

        {/* Skills Grid */}
        
      </div>
    </section>;
};
export default About;