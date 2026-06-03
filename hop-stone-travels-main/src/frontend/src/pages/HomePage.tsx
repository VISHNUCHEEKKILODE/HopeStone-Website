import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FloatingActions from "@/components/FloatingActions";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PackagesSection from "@/components/PackagesSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";

export default function HomePage() {
  return (
    <div className="min-h-screen font-body">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyUsSection />
        <PackagesSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
