import Navbar from '@/components/Navbar';
import LeftSteps from '@/components/LeftSteps';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import AboutUs from '@/components/AboutUs';              
import NumbersSection from '@/components/NumberSection';
import LogisticsSection from '@/components/LogisticsSection';
import ProductsSection from '@/components/ProductsSection';
import FooterSection from '@/components/FooterSection';

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-slate-50">
      <Navbar />
      <LeftSteps />
      
      <Hero />

      {/* Mavi kartlar */}
      <Services />

      {/* ✅ Services ile Numbers arasında About Us */}
      <AboutUs />

      <NumbersSection />
      <LogisticsSection />
      <ProductsSection />
      <FooterSection />
    </main>
  );
}
