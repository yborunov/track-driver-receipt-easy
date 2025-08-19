import { Quote } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-12 h-12 text-primary mx-auto mb-8 opacity-60" />
          
          <blockquote className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-8">
            "I used to toss fuel receipts in the glove box and lose half of them. Now I snap and move on."
          </blockquote>
          
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-semibold text-lg">D</span>
            </div>
            <div className="text-left">
              <div className="font-semibold text-foreground">Dave R.</div>
              <div className="text-muted-foreground">Owner-Operator, Texas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;