import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Award, HeadphonesIcon } from "lucide-react";

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "15+", label: "Years Experience" },
  { value: "10,000+", label: "Returns Filed" },
  { value: "99.9%", label: "Client Retention" },
];

const features = [
  {
    icon: Shield,
    title: "100% Compliance",
    description: "Stay fully compliant with all regulatory requirements and avoid penalties.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Never miss a deadline with our proactive approach to filing and compliance.",
  },
  {
    icon: Award,
    title: "Expert Team",
    description: "Qualified CAs and professionals with deep industry expertise.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Personal relationship manager for all your accounting needs.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-primary font-medium mb-2">Why Choose Us</p>
            <h2 className="font-['Poppins'] text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              Your Trusted Partner in Financial Excellence
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              With over 15 years of experience serving Indian businesses, we understand 
              the unique challenges faced by startups, MSMEs, and growing enterprises. 
              Our team of qualified Chartered Accountants and compliance experts ensures 
              your business stays ahead of regulatory requirements.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-3">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-['Poppins'] font-semibold text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <Card
                key={stat.label}
                className={`backdrop-blur-lg bg-card/70 border-card-border ${
                  index % 2 === 1 ? "mt-8" : ""
                }`}
                data-testid={`card-stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <CardContent className="p-6 md:p-8 text-center">
                  <p className="font-['Poppins'] text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
