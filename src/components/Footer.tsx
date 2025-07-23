import { Leaf, Facebook, Instagram, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-forest-green text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-8 w-8 text-nature-gold" />
              <div>
                <h3 className="text-xl font-bold">GreenScape Atlanta</h3>
                <p className="text-sm text-white/80">Metro Atlanta Lawn Care</p>
              </div>
            </div>
            <p className="text-white/80 mb-4">
              Professional landscaping and lawn maintenance services 
              throughout Metro Atlanta. Licensed, insured, and dedicated 
              to your outdoor success.
            </p>
            <div className="flex gap-4">
              <Facebook className="h-5 w-5 text-white/60 hover:text-nature-gold cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-white/60 hover:text-nature-gold cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/80">
              <li>Weekly Lawn Maintenance</li>
              <li>Landscape Design</li>
              <li>Irrigation Systems</li>
              <li>Seasonal Cleanup</li>
              <li>Garden Maintenance</li>
              <li>Tree & Shrub Care</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-white/80">
              <li>Atlanta</li>
              <li>Decatur</li>
              <li>Alpharetta</li>
              <li>Marietta</li>
              <li>Roswell</li>
              <li>Sandy Springs</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white/80">
                <Phone className="h-4 w-4" />
                <span>(770) 672-5990</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Mail className="h-4 w-4" />
                <span>greenscapeatlanta@gmail.com</span>
              </div>
              <div className="text-white/80">
                <p>Licensed & Insured</p>
                <p>Free Estimates Available</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2025 GreenScape Atlanta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;