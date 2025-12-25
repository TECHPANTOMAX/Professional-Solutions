import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { 
  FileText, 
  Calculator, 
  IndianRupee, 
  Users, 
  ClipboardCheck, 
  Building2,
  ArrowRight,
  Construction
} from "lucide-react";

const services = [
  {
    icon: IndianRupee,
    title: "GST Filing & Returns",
    description: "Complete GST registration, monthly/quarterly returns, and compliance management for your business.",
    features: ["GST Registration", "Monthly Returns", "Annual Compliance"],
  },
  {
    icon: Calculator,
    title: "Income Tax Services",
    description: "Expert income tax filing for individuals and businesses with maximum savings and compliance.",
    features: ["ITR Filing", "Tax Planning", "Assessment Support"],
  },
  {
    icon: FileText,
    title: "Bookkeeping",
    description: "Accurate and timely bookkeeping services to keep your financial records organized and up-to-date.",
    features: ["Daily Entries", "Bank Reconciliation", "Financial Reports"],
  },
  {
    icon: Users,
    title: "Payroll Management",
    description: "End-to-end payroll processing including salary computation, PF, ESI, and statutory compliance.",
    features: ["Salary Processing", "PF & ESI", "TDS Compliance"],
  },
  {
    icon: ClipboardCheck,
    title: "Audit & Assurance",
    description: "Comprehensive audit services including statutory audits, internal audits, and compliance reviews.",
    features: ["Statutory Audit", "Internal Audit", "Compliance Review"],
  },
  {
    icon: Building2,
    title: "Business Registration",
    description: "Complete company incorporation and registration services for startups and new businesses.",
    features: ["Pvt Ltd / LLP", "MSME Registration", "Trademark Filing"],
  },
];

export default function Services() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleServiceClick = (serviceName: string) => {
    setSelectedService(serviceName);
    setModalOpen(true);
  };

  const handleConsultationClick = () => {
    setModalOpen(false);
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-medium mb-2">Our Services</p>
          <h2 className="font-['Poppins'] text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From GST filing to business registration, we provide end-to-end accounting 
            and compliance services tailored for Indian businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group backdrop-blur-lg bg-card/70 border-card-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              onClick={() => handleServiceClick(service.title)}
              data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-['Poppins'] text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="p-0 h-auto text-primary">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="text-center sm:text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Construction className="w-8 h-8 text-primary" />
            </div>
            <DialogTitle className="font-['Poppins'] text-xl">
              {selectedService}
            </DialogTitle>
            <DialogDescription className="text-base pt-2">
              This service page is currently under development.
            </DialogDescription>
          </DialogHeader>
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              Until then, please use our Free Consultation feature.
            </p>
            <Button
              onClick={handleConsultationClick}
              className="w-full"
              data-testid="button-modal-consultation"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
