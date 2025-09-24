

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto text-center">
        <div className="text-2xl font-bold text-primary mb-4">
          ELOHIM TECHNOLOGY
        </div>
        <p className="text-muted-foreground mb-4">
          Transformando negocios a través de la tecnología desde 2019
        </p>
        <div className="text-sm text-muted-foreground">
          © {currentYear} ELOHIM TECHNOLOGY. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};