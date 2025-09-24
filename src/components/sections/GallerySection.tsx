import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from '@/lib/data';

export const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 4000); // Cambia la imagen cada 4 segundos

    return () => clearInterval(timer); // Limpia el intervalo cuando el componente se desmonta
  }, []);

  return (
    <section id="galeria" className="py-16 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestros Proyectos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una muestra de los proyectos y trabajos realizados para nuestros clientes.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto shadow-2xl rounded-lg overflow-hidden">
          {/* Contenedor para la imagen con transición */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={galleryImages[currentIndex].url}
              alt={galleryImages[currentIndex].alt}
              className="w-full h-80 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </motion.div>

          {/* Botones de navegación */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full"
            onClick={prevImage}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full"
            onClick={nextImage}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Indicadores de puntos */}
        <div className="flex justify-center space-x-2 mt-6">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-primary' : 'bg-muted hover:bg-muted-foreground/50'
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir a la imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};