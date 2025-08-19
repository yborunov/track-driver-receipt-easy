import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import phoneMockupReceipt from "@/assets/iphone-receipt-capture-mockup-transp.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground}
          alt="Truck driver at gas station"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/85"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/85"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Track your gas & meal receipts on the road.
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Snap receipts → one-tap export for tax deductions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="xl"
                className="group"
                onClick={() => document.getElementById('email-capture')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Early Access
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="xl"
                className="bg-background/50 backdrop-blur-sm hover:bg-background/80"
                onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
            
            <div className="mt-8 text-sm text-muted-foreground">
              🎉 <strong>Early bird special:</strong> Free for first 100 drivers
            </div>
          </div>
          
          {/* Phone Mockup with Real Receipt */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary rounded-3xl opacity-20 blur-2xl animate-pulse"></div>
              <img 
                src={phoneMockupReceipt}
                alt="Receipt tracker app showing fuel and meals table"
                className="relative w-80 md:w-96 drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse"></div>
    </section>
  );
};

export default HeroSection;