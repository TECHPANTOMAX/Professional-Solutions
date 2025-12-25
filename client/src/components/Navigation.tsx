import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, FileText, Calculator, Users, Phone, Home, Info } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home", icon: Home },
  { name: "Services", href: "#services", icon: FileText },
  { name: "About", href: "#about", icon: Info },
  { name: "Contact", href: "#contact", icon: Phone },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between gap-4 h-16">
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection("#home"); }}
            className="flex items-center gap-2"
            data-testid="link-logo"
          >
            <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
              <Calculator className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-['Poppins'] font-bold text-xl text-foreground hidden sm:block">
              Professional Solutions
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                onClick={() => scrollToSection(link.href)}
                data-testid={`link-nav-${link.name.toLowerCase()}`}
              >
                {link.name}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button
              onClick={() => scrollToSection("#contact")}
              className="hidden sm:flex"
              data-testid="button-get-started"
            >
              Get Started
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  className="justify-start"
                  onClick={() => scrollToSection(link.href)}
                  data-testid={`link-mobile-nav-${link.name.toLowerCase()}`}
                >
                  <link.icon className="w-4 h-4 mr-2" />
                  {link.name}
                </Button>
              ))}
              <Button
                onClick={() => scrollToSection("#contact")}
                className="mt-2"
                data-testid="button-mobile-get-started"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
