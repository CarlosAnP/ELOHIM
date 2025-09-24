
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

interface FloatingWhatsAppButtonProps {
  onClick: () => void;
}

export const FloatingWhatsAppButton = ({ onClick }: FloatingWhatsAppButtonProps) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button
          size="lg"
          className="rounded-full w-14 h-14 shadow-2xl bg-green-500 hover:bg-green-600 border-0"
          onClick={onClick}
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </motion.div>
    </motion.div>
  );
};