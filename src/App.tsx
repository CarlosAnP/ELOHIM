import { Header } from './components/sections/Header';
import { HeroSection } from './components/sections/HeroSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { GallerySection } from './components/sections/GallerySection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/sections/Footer';
import { FloatingWhatsAppButton } from './components/sections/FloatingWhatsAppButton';

function App() {
  const whatsappNumber = "3147597057"; // Reemplazar con tu número real
  const whatsappMessage = "Hola! Me interesa conocer más sobre los servicios de ELOHIM TECHNOLOGY.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection onWhatsAppClick={handleWhatsAppClick} />
        <ServicesSection />
        <GallerySection />
        <ContactSection onWhatsAppClick={handleWhatsAppClick} />
      </main>
      <Footer />
      <FloatingWhatsAppButton onClick={handleWhatsAppClick} />
    </div>
  );
}

export default App;