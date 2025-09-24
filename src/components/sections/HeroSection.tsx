import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { stats } from '@/lib/data';

// CAMBIO: Definimos las variantes para la animación escalonada
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Tiempo de retraso entre cada elemento hijo
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

interface HeroSectionProps {
  onWhatsAppClick: () => void;
}

export const HeroSection = ({ onWhatsAppClick }: HeroSectionProps) => {
  return (
    <section id="inicio" className="pt-28 pb-16 px-4 bg-background">
      <div className="container mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 md:leading-tight">
            Soluciones Tecnológicas
            {/* CAMBIO: Gradiente de texto para mayor impacto visual */}
            <span className="block bg-gradient-to-r from-primary to-blue-400 bg-clip-text mb-8 text-transparent">
              Integrales
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Transformamos tu negocio con tecnología de vanguardia. Desde soporte técnico hasta desarrollo de software personalizado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* CAMBIO: Propiedades de animación directamente en el botón */}
            <Button 
              size="lg" 
              onClick={onWhatsAppClick} 
              className="shadow-lg"
              asChild // Permite que el botón se comporte como el motion.button
            >
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <MessageCircle className="w-5 h-5 mr-2" />
                Contactar por WhatsApp
              </motion.button>
            </Button>
            {/* CAMBIO: Propiedades de animación directamente en la etiqueta 'a' */}
            <motion.a 
              href="#servicios"
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" size="lg" className="shadow-lg w-full">
                Ver Servicios
              </Button>
            </motion.a>
          </div>
        </motion.div>

        {/* Stats Section */}
        {/* CAMBIO: Aplicamos las variantes para la animación escalonada */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // La animación se activa al entrar en la vista
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {stats.map((stat, index) => (
            // CAMBIO: Cada item ahora tiene su propia variante de animación
            <motion.div
              key={index}
              variants={itemVariants}
              // CAMBIO: Añadimos un borde sutil que aparece en el hover para un mejor feedback
              className="text-center p-4 rounded-lg bg-card shadow-sm transition-colors duration-300 border border-transparent hover:border-primary/50"
            >
              <div className="text-primary mb-2 flex justify-center">{stat.icon}</div>
              <div className="text-2xl font-bold text-foreground">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};