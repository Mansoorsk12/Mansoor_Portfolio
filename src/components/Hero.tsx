import { Button } from "@/components/ui/button";
import { Download, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
const Hero = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        <div className="absolute w-2 h-2 bg-primary rounded-full animate-float" style={{
        top: '20%',
        left: '10%',
        animationDelay: '0s'
      }}></div>
        <div className="absolute w-1 h-1 bg-accent rounded-full animate-float" style={{
        top: '60%',
        left: '80%',
        animationDelay: '1s'
      }}></div>
        <div className="absolute w-3 h-3 bg-primary/50 rounded-full animate-float" style={{
        top: '80%',
        left: '20%',
        animationDelay: '2s'
      }}></div>
        <div className="absolute w-1.5 h-1.5 bg-accent/50 rounded-full animate-float" style={{
        top: '30%',
        left: '70%',
        animationDelay: '0.5s'
      }}></div>
        
        {/* Mouse-following glow */}
        <div className="absolute w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl pointer-events-none transition-all duration-300" style={{
        left: mousePosition.x - 192,
        top: mousePosition.y - 192
      }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-slide-up">
          {/* Profile Image */}
          <div className="mb-8">
            
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Shaik Mansoor</span>
            <br />
            <span className="text-foreground">Sadhik</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
            <span className="inline-block border border-primary/30 rounded-full px-6 py-2 glass">
              Full Stack Developer
            </span>
          </div>
          
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-muted-foreground leading-relaxed animate-fade-in">
            Passionate developer crafting innovative solutions with modern technologies. 
            Specializing in end-to-end development with a focus on user experience and scalable architecture.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
            {["Java", "HTML", "CSS", "Python"].map((tech, index) => <span key={tech} className="glass px-4 py-2 rounded-full text-sm font-medium hover:glow-button transition-all duration-300" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                {tech}
              </span>)}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in">
            <Button variant="hero" size="lg" className="glow-button animate-glow" onClick={() => {
            const link = document.createElement('a');
            link.href = '/resume.pdf';
            link.download = 'Shaik_Mansoor_Sadhik_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}>
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
            <Button variant="outline" size="lg" className="glow-button border-primary/30 hover:border-primary" onClick={() => scrollToSection('#projects')}>
              View Projects
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollToSection('#about')}>
            <ChevronDown className="w-8 h-8 text-primary" />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;