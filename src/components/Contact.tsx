import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-sage-green/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ready to Transform Your Landscape?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get your free quote today! We serve all of Metro Atlanta with professional 
            landscaping and lawn care services.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="shadow-[var(--shadow-natural)] border-sage-green/20">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Get Your Free Quote</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground">First Name</label>
                  <Input placeholder="John" className="mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Last Name</label>
                  <Input placeholder="Smith" className="mt-1" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input type="email" placeholder="john@example.com" className="mt-1" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Phone</label>
                <Input type="tel" placeholder="(404) 555-0123" className="mt-1" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Property Address</label>
                <Input placeholder="123 Main St, Atlanta, GA 30309" className="mt-1" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Services Needed</label>
                <Textarea 
                  placeholder="Tell us about your landscaping needs..." 
                  className="mt-1 min-h-[100px]"
                />
              </div>
              <Button variant="hero" size="lg" className="w-full">
                Get Free Quote
              </Button>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card className="bg-[var(--gradient-card)] border-sage-green/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Call Us Today</h3>
                    <p className="text-muted-foreground mb-2">(770) 672-5990</p>
                    <p className="text-sm text-muted-foreground">
                      Free estimates and consultations available
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-[var(--gradient-card)] border-sage-green/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                    <p className="text-muted-foreground mb-2">info@greenscapeatlanta.com</p>
                    <p className="text-sm text-muted-foreground">
                      We respond to all emails within 24 hours
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-[var(--gradient-card)] border-sage-green/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Service Area</h3>
                    <p className="text-muted-foreground mb-2">Metro Atlanta & Surrounding Areas</p>
                    <p className="text-sm text-muted-foreground">
                      Fulton, DeKalb, Gwinnett, Cobb, and surrounding counties
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-[var(--gradient-card)] border-sage-green/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                      <p>Saturday: 8:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;