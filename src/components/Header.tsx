import { Camera } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
              <Camera className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-playfair font-semibold text-gradient">
                LUMINA
              </h1>
              <p className="text-sm text-text-secondary font-inter font-light">
                Photography Collections
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;