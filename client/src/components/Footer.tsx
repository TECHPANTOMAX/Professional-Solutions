import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Calculator, Facebook, Linkedin, Twitter, Instagram, Mail } from "lucide-react";

const footerLinks = {
  services: [
    { name: "GST Filing", href: "#services" },
    { name: "Income Tax", href: "#services" },
    { name: "Bookkeeping", href: "#services" },
    { name: "Payroll", href: "#services" },
    { name: "Audit", href: "#services" },
    { name: "Registration", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#team" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Refund Policy", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4" data-testid="link-footer-logo">
              <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
                <Calculator className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-['Poppins'] font-bold text-xl">
                Professional Solutions
              </span>
            </a>
            <p className="text-background/70 mb-6 max-w-sm">
              Your trusted partner for accounting, tax compliance, and business 
              registration services across India. Serving MSMEs and startups since 2008.
            </p>
            
            <div className="mb-6">
              <p className="font-['Poppins'] font-semibold mb-3">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
                  data-testid="input-newsletter"
                />
                <Button data-testid="button-subscribe">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  className="text-background/70 hover:text-background hover:bg-background/10"
                  data-testid={`button-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-5 h-5" />
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-['Poppins'] font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                    data-testid={`link-footer-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-['Poppins'] font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                    data-testid={`link-footer-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-['Poppins'] font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                    data-testid={`link-footer-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-background/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} Professional Solutions. All rights reserved.</p>
          <p>
            Designed with care for Indian businesses
          </p>
        </div>
      </div>
    </footer>
  );
}
