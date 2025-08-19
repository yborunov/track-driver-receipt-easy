import { Button } from "@/components/ui/button";
import { Receipt } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Receipt className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">DriverHero</span>
          </div>
          
          <Button 
            variant="cta" 
            size="sm"
            onClick={() => document.getElementById('email-capture')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Early Access
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;