import { ArrowRight, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-landscaping.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Beautiful landscaped lawn in Metro Atlanta" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-green/80 to-forest-green/40"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="h-5 w-5 text-nature-gold" />
            <span className="text-nature-gold font-medium">Serving Metro Atlanta</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Professional Lawn Care 
            <span className="text-nature-gold block">That Transforms Your Property</span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Expert landscaping and lawn maintenance services across Metro Atlanta. 
            From weekly maintenance to complete landscape transformations, we keep your outdoor space beautiful year-round.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button variant="hero" size="lg" className="text-lg px-8">
              Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20">
              View Services
              <a href="#services"</a>
            </Button>
          </div>
          
          <div className="flex items-center gap-6 text-white/90">
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 text-nature-gold fill-nature-gold" />
              <Star className="h-5 w-5 text-nature-gold fill-nature-gold" />
              <Star className="h-5 w-5 text-nature-gold fill-nature-gold" />
              <Star className="h-5 w-5 text-nature-gold fill-nature-gold" />
              <Star className="h-5 w-5 text-nature-gold fill-nature-gold" />
              <span className="ml-2 font-medium">5.0 Rating</span>
            </div>
            <div className="border-l border-white/30 pl-6">
              <span className="font-bold text-xl">500+</span>
              <span className="ml-2">Happy Customers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;