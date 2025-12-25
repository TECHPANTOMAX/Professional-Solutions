import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Users, Award, Calendar } from "lucide-react";
import heroImage from "@assets/generated_images/indian_business_collaboration_office.png";

const trustIndicators = [
  { icon: Users, label: "500+ Clients", value: "Trusted by businesses" },
  { icon: Award, label: "15+ Years", value: "Industry experience" },
  { icon: Calendar, label: "99.9%", value: "On-time delivery" },
];

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional business team collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-blue-900/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="max-w-3xl">
          <Badge 
            variant="secondary" 
            className="mb-6 backdrop-blur-md bg-white/20 border-white/30 text-white"
          >
            <CheckCircle className="w-3 h-3 mr-1" />
            Trusted by 500+ Indian Businesses
          </Badge>

          <h1 className="font-['Poppins'] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Expert Accounting &{" "}
            <span className="text-blue-300">Compliance Solutions</span>{" "}
            for Your Business
          </h1>

          <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl">
            Simplify your financial operations with our comprehensive accounting, tax filing, 
            GST compliance, and business registration services. Trusted by startups, MSMEs, 
            and entrepreneurs across India.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="backdrop-blur-md bg-white text-blue-900 hover:bg-blue-50 border-white/30"
              data-testid="button-hero-consultation"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#services")}
              className="backdrop-blur-md bg-white/10 border-white/30 text-white hover:bg-white/20"
              data-testid="button-hero-services"
            >
              Explore Services
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {trustIndicators.map((indicator) => (
              <div
                key={indicator.label}
                className="flex items-center gap-3 backdrop-blur-md bg-white/10 rounded-lg p-4 border border-white/20"
              >
                <div className="w-10 h-10 rounded-md bg-white/20 flex items-center justify-center">
                  <indicator.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-['Poppins'] font-semibold text-white">{indicator.label}</p>
                  <p className="text-sm text-blue-200">{indicator.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
