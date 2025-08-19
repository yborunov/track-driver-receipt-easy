import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase, isSupabaseConfigured } from "@/lib/supabaseClient";

const FinalCTASection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitted(true);
    try {
      if (!isSupabaseConfigured() || !supabase) {
        throw new Error("Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.");
      }

      const { error } = await supabase
        .from("truckdriver_receipt_waitlist")
        .insert({ email });

      toast({
        title: "You're on the waitlist!",
        description: "We'll notify you when early access is available.",
      });
      setEmail("");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong";
      toast({
        title: "Couldn't add you",
        description: message,
      });
    } finally {
      setIsSubmitted(false);
    }
  };

  return (
    <section id="email-capture" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Save your receipts. Save on taxes.
          </h2>
          
          <p className="text-xl mb-8 opacity-90">
            Join the waitlist and get early access to the app built for truck and delivery drivers.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:bg-primary-foreground/20"
              required
            />
            <Button 
              type="submit"
              variant="hero"
              size="lg"
              disabled={isSubmitted}
              className="min-w-[140px]"
            >
              {isSubmitted ? (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Added!
                </>
              ) : (
                <>
                  Get Early Access
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </form>
          
          <div className="text-sm opacity-75">
            ✅ No spam, just updates • ✅ Free for early users • ✅ Cancel anytime
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;