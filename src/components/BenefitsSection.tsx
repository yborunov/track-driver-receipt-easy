import { Fuel, Smartphone, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: Fuel,
    title: "Fuel & meals tracked",
    description: "Snap receipts as you go."
  },
  {
    icon: Smartphone,
    title: "Works offline",
    description: "No signal? Log now, upload later."
  },
  {
    icon: DollarSign,
    title: "Tax-ready exports",
    description: "One-tap CSV or PDF."
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built for drivers on the road
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don’t lose another fuel or meal receipt. Keep everything in your pocket.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-card group-hover:shadow-elegant transition-all duration-300 group-hover:-translate-y-2">
                  <benefit.icon className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;