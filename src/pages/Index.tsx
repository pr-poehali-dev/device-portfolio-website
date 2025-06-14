import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <HeroSection />
      <ServicesSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Index;
