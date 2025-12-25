import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Vikram Mehta",
    company: "TechStart Solutions Pvt Ltd",
    role: "Founder & CEO",
    initials: "VM",
    content: "Professional Solutions has been managing our accounts for 3 years now. Their GST compliance support and proactive tax planning have saved us lakhs. Highly recommended!",
    rating: 5,
  },
  {
    name: "Anita Desai",
    company: "Flavours of India",
    role: "Owner",
    initials: "AD",
    content: "As a restaurant chain owner, I needed someone who understands the F&B industry. Their team handles everything from TDS to annual audits seamlessly.",
    rating: 5,
  },
  {
    name: "Suresh Reddy",
    company: "GreenTech Exports",
    role: "Managing Director",
    initials: "SR",
    content: "Excellent service! They helped us with our export documentation and GST refunds. Very professional and always available when we need them.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-medium mb-2">Testimonials</p>
          <h2 className="font-['Poppins'] text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by hundreds of businesses across India for their accounting and compliance needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="backdrop-blur-lg bg-card/70 border-card-border hover:shadow-xl transition-all duration-300"
              data-testid={`card-testimonial-${testimonial.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <CardContent className="p-6 md:p-8">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-['Poppins'] font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
