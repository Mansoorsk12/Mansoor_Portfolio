
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
} from "lucide-react";

const Hero = () => {
  const heroRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const section = heroRef.current;
    const glow = glowRef.current;

    if (!section || !glow) return;

    const handleMouseMove = (event) => {
      const rect = section.getBoundingClientRect();

      glow.style.transform = `translate3d(
        ${event.clientX - rect.left - 210}px,
        ${event.clientY - rect.top - 210}px,
        0
      )`;
    };

    section.addEventListener("mousemove", handleMouseMove);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (href) => {
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Shaik_Mansoor_Sadhik_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const technologies = [
    "React",
    "JavaScript",
    "Node.js",
    "Supabase",
    "Tailwind CSS",
  ];

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden scroll-mt-20"
    >
      {/* Colorful cursor glow and background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          ref={glowRef}
          className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full opacity-80 will-change-transform"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(139,92,246,0.14) 30%, rgba(34,197,94,0.10) 48%, rgba(250,204,21,0.10) 60%, transparent 75%)",
            filter: "blur(35px)",
            transform: "translate3d(-1000px, -1000px, 0)",
          }}
        />

        <div className="gradient-orb -left-32 top-1/4 h-72 w-72 bg-blue-400/30" />
        <div className="gradient-orb -right-32 bottom-0 h-96 w-96 bg-violet-400/30" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="w-full max-w-7xl py-32 md:py-36 lg:py-40">
          {/* Availability */}
          <div className="mb-8 animate-slide-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm text-slate-600 shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Available for opportunities
            </span>
          </div>

          {/* Introduction */}
          <div className="animate-slide-up">
            <p className="mb-4 text-xl text-slate-500 md:text-2xl">
              Hi, I'm
            </p>

            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="gradient-text block">Shaik Mansoor</span>
              <span className="mt-2 block text-slate-900">Sadhik.</span>
            </h1>
          </div>

          {/* Role and description */}
          <div className="mt-8 animate-fade-in">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl md:text-4xl">
              Full Stack Developer
              <span className="text-blue-600">.</span>
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
              I build modern, responsive web applications with React,
              JavaScript and Node.js, focusing on clean interfaces,
              practical user experiences and reliable backend integrations.
            </p>
          </div>

          {/* Technology badges */}
          <div className="mt-8 flex flex-wrap items-center gap-3 animate-fade-in">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm text-slate-600 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:text-violet-700 hover:shadow-md md:text-base"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="mt-10 flex flex-col gap-4 animate-fade-in sm:flex-row">
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

          {/* Social links */}
          <div className="mt-10 flex items-center gap-5 animate-fade-in">
            <a
              href="https://github.com/Mansoorsk12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 transition-colors hover:text-blue-600"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/mansoorsadhik/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 transition-colors hover:text-blue-600"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <span className="h-px w-12 bg-slate-300" />

            <span className="text-sm text-slate-500">
              Based in India
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition-colors hover:text-blue-600 md:flex"
        aria-label="Scroll to About"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Explore</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
