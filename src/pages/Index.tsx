import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import StatsCounter from "@/components/StatsCounter";
import ProductsGrid from "@/components/ProductsGrid";
import CompaniesTimeline from "@/components/CompaniesTimeline";
import BrandsMarquee from "@/components/BrandsMarquee";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <AboutSection />
      <StatsCounter />
      <ProductsGrid />
      <CompaniesTimeline />
      <BrandsMarquee />
      <Footer />
    </div>
  );
};

export default Index;
