import { Shield, Users, Award, Clock } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Happy Customers" },
    { icon: Clock, number: "15+", label: "Years Experience" },
    { icon: Award, number: "100%", label: "Satisfaction Rate" },
    { icon: Shield, number: "Licensed", label: "& Insured" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Metro Atlanta's Trusted 
              <span className="text-primary block">Landscaping Experts</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              For over 15 years, GreenScape Atlanta has been transforming outdoor spaces 
              throughout Metro Atlanta. We understand the unique challenges of Georgia's climate 
              and soil conditions, delivering landscaping solutions that thrive year-round.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team of certified landscaping professionals is committed to excellence 
              in every project, from weekly lawn maintenance to complete landscape installations. 
              We serve residential and commercial properties across Fulton, DeKalb, Gwinnett, 
              and surrounding counties.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-grass-green rounded-full"></div>
                <span className="text-foreground font-medium">Licensed & Insured Professionals</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-grass-green rounded-full"></div>
                <span className="text-foreground font-medium">Eco-Friendly Practices & Native Plants</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-grass-green rounded-full"></div>
                <span className="text-foreground font-medium">100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-grass-green rounded-full"></div>
                <span className="text-foreground font-medium">Free Estimates & Consultations</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-[var(--gradient-card)] rounded-lg border border-sage-green/20 shadow-[var(--shadow-card)]">
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;