import GPlogo from "@/assets/GPlogo.svg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/20">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
              <img src={GPlogo} alt="GP Logo" className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-playfair font-semibold text-gradient">
                Giulia & Paweł Wedding Photo Gallery
              </h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;