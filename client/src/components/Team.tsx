import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CA",
    credentials: "FCA, DISA",
    initials: "RK",
    bio: "20+ years of experience in audit and taxation for corporates and MSMEs.",
  },
  {
    name: "Priya Sharma",
    role: "Partner - Tax",
    credentials: "CA, LLB",
    initials: "PS",
    bio: "Specialist in direct taxation and corporate law compliance.",
  },
  {
    name: "Amit Patel",
    role: "Head - GST",
    credentials: "CA, FAFD",
    initials: "AP",
    bio: "Expert in GST implementation and indirect tax advisory.",
  },
  {
    name: "Sneha Reddy",
    role: "Manager - Compliance",
    credentials: "CS, MBA",
    initials: "SR",
    bio: "Specializes in company law and secretarial compliance.",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-medium mb-2">Our Team</p>
          <h2 className="font-['Poppins'] text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Meet Our Expert Professionals
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A team of qualified Chartered Accountants and compliance specialists 
            dedicated to your business success.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <Card
              key={member.name}
              className="group backdrop-blur-lg bg-card/70 border-card-border hover:shadow-xl transition-all duration-300 text-center"
              data-testid={`card-team-${member.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <CardContent className="p-6">
                <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-primary/20">
                  <AvatarFallback className="bg-primary/10 text-primary text-xl font-['Poppins'] font-semibold">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-['Poppins'] font-semibold text-lg text-foreground">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-1">{member.role}</p>
                <p className="text-muted-foreground text-xs mb-3">{member.credentials}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center gap-2">
                  <Button variant="ghost" size="icon" data-testid={`button-linkedin-${member.name.toLowerCase().replace(/\s+/g, "-")}`}>
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" data-testid={`button-email-${member.name.toLowerCase().replace(/\s+/g, "-")}`}>
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
