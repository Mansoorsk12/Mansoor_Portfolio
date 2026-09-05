import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [{
    href: "#home",
    label: "Home"
  }, {
    href: "#about",
    label: "About"
  }, {
    href: "#projects",
    label: "Projects"
  }, {
    href: "#experience",
    label: "Experience"
  }, {
    href: "#contact",
    label: "Contact"
  }];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };
  return <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass backdrop-blur-strong py-2" : "py-4"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">Shaik Mansoor</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <button key={item.href} onClick={() => scrollToSection(item.href)} className="text-foreground hover:text-primary transition-colors duration-300 relative group">
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
              </button>)}
            <Button variant="hero" className="glow-button" onClick={() => {
            const link = document.createElement('a');
            link.href = '/resume.pdf';
            link.download = 'Shaik_Mansoor_Sadhik_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}>
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground hover:text-primary transition-colors">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && <div className="md:hidden mt-4 glass rounded-2xl p-4 animate-slide-up">
            {navItems.map(item => <button key={item.href} onClick={() => scrollToSection(item.href)} className="block w-full text-left py-3 text-foreground hover:text-primary transition-colors">
                {item.label}
              </button>)}
            <Button variant="hero" className="w-full mt-4 glow-button" onClick={() => {
          const link = document.createElement('a');
          link.href = '/resume.pdf';
          link.download = 'Shaik_Mansoor_Sadhik_Resume.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}>
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>}
      </div>
    </nav>;
};
export default Navbar;