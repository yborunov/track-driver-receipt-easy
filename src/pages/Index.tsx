import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import MockupSection from "@/components/MockupSection";
import WhyItMattersSection from "@/components/WhyItMattersSection";
import TestimonialSection from "@/components/TestimonialSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MockupSection />
      <BenefitsSection />
      <WhyItMattersSection />
      <TestimonialSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
