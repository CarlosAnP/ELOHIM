import { Monitor, Camera, Printer, ShoppingCart, CreditCard, Server, Code, Users, Award, Shield, Zap } from 'lucide-react';

// Datos para la sección de servicios
export const services = [
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Soporte Técnico",
    description: "Mantenimiento y resolución de problemas técnicos para equipos de cómputo y redes empresariales.",
    features: ["Soporte 24/7", "Mantenimiento preventivo", "Diagnóstico remoto"]
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Instalación de Cámaras",
    description: "Sistemas de videovigilancia profesionales para la seguridad de tu empresa o hogar.",
    features: ["Cámaras IP", "Monitoreo remoto", "Grabación en la nube"]
  },
  {
    icon: <Printer className="w-8 h-8" />,
    title: "Instalación de Impresoras",
    description: "Configuración e instalación de impresoras multifuncionales y sistemas de impresión.",
    features: ["Impresoras láser", "Multifuncionales", "Mantenimiento"]
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "Venta de Equipos",
    description: "Comercialización de equipos de cómputo, servidores y dispositivos tecnológicos.",
    features: ["Equipos nuevos", "Garantía extendida", "Financiamiento"]
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "E-POS MOBILE",
    description: "Sistemas de punto de venta personalizados para optimizar las operaciones comerciales.",
    features: ["Interfaz intuitiva", "Reportes en tiempo real", "Integración contable"]
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "Infraestructura IT",
    description: "Diseño e implementación de infraestructura tecnológica para empresas en crecimiento.",
    features: ["Redes empresariales", "Servidores", "Backup automático"]
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Desarrollo de Software",
    description: "Aplicaciones web y móviles personalizadas para automatizar procesos empresariales.",
    features: ["Apps móviles", "Sistemas web", "APIs personalizadas"]
  }
];

// Datos para la galería de imágenes
export const galleryImages = [
    { url: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Desarrollo de Software" },
    { url: "https://images.pexels.com/photos/5775854/pexels-photo-5775854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Equipo de desarrollo" },
    { url: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Soporte Técnico" },
    { url: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Infraestructura y Redes" },
    { url: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Venta de Equipos" },
    { url: "https://images.pexels.com/photos/6476258/pexels-photo-6476258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Punto de Venta POS" }
];

// Datos para las estadísticas
export const stats = [
  { icon: <Users className="w-8 h-8" />, number: "500+", label: "Clientes Satisfechos" },
  { icon: <Award className="w-8 h-8" />, number: "1000+", label: "Proyectos Completados" },
  { icon: <Shield className="w-8 h-8" />, number: "5+", label: "Años de Experiencia" },
  { icon: <Zap className="w-8 h-8" />, number: "24/7", label: "Soporte Técnico" }
];