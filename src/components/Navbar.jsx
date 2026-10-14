
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, Download } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsOpen(false);
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Shaik_Mansoor_Sadhik_Resume.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl shadow-sm border-b border-slate-200/70 py-2"
          : "bg-white/60 backdrop-blur-md py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollToSection("#home")}
            className="text-xl sm:text-2xl font-bold gradient-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-lg"
          >
            Shaik Mansoor
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-5 lg:gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-slate-600 hover:text-violet-600 transition-colors duration-300 relative group py-2"
              >
                {item.label}

                <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-400 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}

            <Button
              variant="hero"
              size="default"
              className="rounded-xl"
              onClick={downloadResume}
            >
              <Download className="w-4 h-4" />
              Resume
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((previous) => !previous)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl text-slate-700 hover:bg-violet-50 hover:text-violet-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
          >
            {isOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            id="mobile-navigation"
            className="md:hidden mt-4 rounded-2xl border border-slate-200 bg-white/95 backdrop-blur-xl shadow-xl p-4"
          >
            <div className="flex flex-col">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => scrollToSection(item.href)}
                  className="w-full text-left rounded-xl px-3 py-3 text-sm font-medium text-slate-700 hover:bg-violet-50 hover:text-violet-600 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <Button
              variant="hero"
              className="w-full mt-4 rounded-xl"
              onClick={downloadResume}
            >
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
