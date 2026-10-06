import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
} from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Shaik_Mansoor_Sadhik_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px] transition-all duration-700"
          style={{
            left: mousePosition.x - 250,
            top: mousePosition.y - 250,
          }}
        />

        <div className="absolute top-1/4 -left-32 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 -right-32 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl pt-24 pb-20">
          {/* Availability */}
          <div className="mb-8 animate-slide-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>

              Available for opportunities
            </span>
          </div>

          {/* Heading */}
          <div className="animate-slide-up">
            <p className="mb-4 text-lg md:text-xl text-muted-foreground">
              Hi, I'm
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
              <span className="gradient-text">Shaik Mansoor</span>
              <br />
              <span className="text-foreground">Sadhik.</span>
            </h1>
          </div>

          {/* Role */}
          <div className="mt-8 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground">
              Full Stack Developer
              <span className="text-primary">.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-lg md:text-xl leading-relaxed text-muted-foreground">
              I build modern, responsive and scalable web experiences
              with a focus on clean interfaces, thoughtful UX and reliable
              technology.
            </p>
          </div>

          {/* Tech */}
          <div className="mt-8 flex flex-wrap gap-3 animate-fade-in">
            {["React", "JavaScript", "Node.js", "Supabase", "Tailwind"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border/60 bg-background/40 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:text-primary"
                >
                  {tech}
                </span>
              )
            )}
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button
              variant="hero"
              size="lg"
              className="group h-12 px-7"
              onClick={() => scrollToSection("#projects")}
            >
              View My Work
              <ArrowUpRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="h-12 px-7"
              onClick={downloadResume}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex items-center gap-5 animate-fade-in">
            <a
              href="https://github.com/Mansoorsk12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/mansoorsadhik/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <span className="h-px w-12 bg-border" />

            <span className="text-sm text-muted-foreground">
              Based in India
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scroll to About"
      >
        <span className="text-xs uppercase tracking-[0.2em]">
          Explore
        </span>

        <ArrowDown className="h-4 w-4 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;