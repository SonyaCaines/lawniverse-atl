import { Scissors, TreePine, Droplets, Calendar, Flower, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import lawnMaintenanceImage from "@/assets/lawn-maintenance.jpg";
import landscapeDesignImage from "@/assets/landscape-design.jpg";

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Weekly Lawn Maintenance",
      description: "Professional mowing, edging, and trimming to keep your lawn pristine",
      price: "Starting at $75/visit",
      features: ["Mowing & Edging", "String Trimming", "Debris Cleanup", "Seasonal Schedule"],
      image: lawnMaintenanceImage
    },
    {
      icon: TreePine,
      title: "Landscape Design & Installation",
      description: "Transform your outdoor space with custom landscape solutions",
      price: "Starting at $2,500",
      features: ["Custom Design", "Plant Selection", "Hardscaping", "Installation"],
      image: landscapeDesignImage
    },
    {
      icon: Droplets,
      title: "Irrigation Systems",
      description: "Efficient watering solutions to keep your landscape healthy",
      price: "Starting at $1,200",
      features: ["System Design", "Professional Installation", "Smart Controllers", "Maintenance"]
    },
    {
      icon: Calendar,
      title: "Seasonal Cleanup",
      description: "Spring and fall cleanup services for year-round beauty",
      price: "Starting at $200",
      features: ["Leaf Removal", "Pruning", "Mulching", "Bed Preparation"]
    },
    {
      icon: Flower,
      title: "Garden Maintenance",
      description: "Keep your flower beds and gardens looking their best",
      price: "Starting at $100",
      features: ["Weeding", "Planting", "Fertilizing", "Pest Control"]
    },
    {
      icon: Truck,
      title: "Tree & Shrub Care",
      description: "Professional pruning and maintenance for healthy growth",
      price: "Starting at $150",
      features: ["Pruning", "Disease Treatment", "Fertilization", "Removal"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-sage-green/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Complete Lawn Care Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From routine maintenance to complete landscape transformations, 
            we provide comprehensive solutions for all your outdoor needs across Metro Atlanta.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-[var(--shadow-natural)] transition-all duration-300 bg-[var(--gradient-card)] border-sage-green/20">
              <CardHeader className="text-center">
                {service.image && (
                  <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
                <div className="text-lg font-semibold text-primary mt-2">
                  {service.price}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-grass-green rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="nature" className="w-full">
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;