import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    content: "123 Business Park, Bandra Kurla Complex, Mumbai 400051",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+91 22 1234 5678",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "info@professionalsolutions.in",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Mon - Sat: 9:00 AM - 6:00 PM",
  },
];

const services = [
  "GST Filing & Returns",
  "Income Tax Services",
  "Bookkeeping",
  "Payroll Management",
  "Audit & Assurance",
  "Business Registration",
  "Other",
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // todo: remove mock functionality - replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-medium mb-2">Contact Us</p>
          <h2 className="font-['Poppins'] text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Let's Discuss Your Needs
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get in touch with our team for a free consultation. We're here to help 
            your business thrive with expert financial guidance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <Card className="backdrop-blur-lg bg-card/70 border-card-border">
            <CardHeader>
              <CardTitle className="font-['Poppins'] text-2xl">Send Us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      data-testid="input-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      data-testid="input-phone"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interested In</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => setFormData({ ...formData, service: value })}
                    >
                      <SelectTrigger id="service" data-testid="select-service">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    data-testid="input-message"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                  data-testid="button-submit-contact"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info) => (
                <Card
                  key={info.title}
                  className="backdrop-blur-lg bg-card/70 border-card-border"
                  data-testid={`card-contact-${info.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-['Poppins'] font-semibold text-foreground">{info.title}</h4>
                      <p className="text-sm text-muted-foreground">{info.content}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="backdrop-blur-lg bg-primary/5 border-primary/20">
              <CardContent className="p-6 md:p-8">
                <h3 className="font-['Poppins'] font-semibold text-xl text-foreground mb-4">
                  Free Consultation
                </h3>
                <p className="text-muted-foreground mb-4">
                  Not sure which service you need? Book a free 30-minute consultation 
                  with our experts to discuss your business requirements.
                </p>
                <Button variant="outline" className="w-full" data-testid="button-book-call">
                  <Phone className="w-4 h-4 mr-2" />
                  Schedule a Call
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
