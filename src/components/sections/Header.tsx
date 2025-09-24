import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold text-primary">
          ELOHIM TECHNOLOGY
        </motion.div>
        
        <nav className="hidden md:flex space-x-8">
          <motion.a href="#inicio" whileHover={{ scale: 1.05 }} className="text-foreground hover:text-primary transition-colors">Inicio</motion.a>
          <motion.a href="#servicios" whileHover={{ scale: 1.05 }} className="text-foreground hover:text-primary transition-colors">Servicios</motion.a>
          <motion.a href="#galeria" whileHover={{ scale: 1.05 }} className="text-foreground hover:text-primary transition-colors">Galería</motion.a>
          <motion.a href="#contacto" whileHover={{ scale: 1.05 }} className="text-foreground hover:text-primary transition-colors">Contacto</motion.a>
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background border-t border-border"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#inicio" className="block text-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>Inicio</a>
            <a href="#servicios" className="block text-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>Servicios</a>
            <a href="#galeria" className="block text-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>Galería</a>
            <a href="#contacto" className="block text-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>Contacto</a>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
};