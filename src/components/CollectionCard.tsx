import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface CollectionImage {
  src: string;
  alt: string;
}

interface CollectionCardProps {
  title: string;
  description: string;
  images: CollectionImage[];
  index: number;
}

const CollectionCard = ({ title, description, images, index }: CollectionCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group cursor-pointer animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Creative Image Collage */}
      <div className="relative h-[500px] bg-surface rounded-2xl overflow-hidden mb-6 shadow-premium">
        {/* Main Image - Takes up 60% width */}
        <div className="absolute top-0 left-0 w-[60%] h-full overflow-hidden rounded-l-2xl">
          <img
            src={images[0]?.src}
            alt={images[0]?.alt}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          />
        </div>

        {/* Secondary Images Grid - Right side */}
        <div className="absolute top-0 right-0 w-[40%] h-full flex flex-col gap-2 p-2">
          {/* Top Right Image */}
          {images[1] && (
            <div className="flex-1 overflow-hidden rounded-lg">
              <img
                src={images[1].src}
                alt={images[1].alt}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
            </div>
          )}
          
          {/* Bottom Right Image */}
          {images[2] && (
            <div className="flex-1 overflow-hidden rounded-lg">
              <img
                src={images[2].src}
                alt={images[2].alt}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
            </div>
          )}
        </div>

        {/* Clean overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />

        {/* Content Overlay - Clean, no blur */}
        <div className="absolute bottom-0 left-0 w-[85%] md:w-[70%] lg:w-[55%] p-4 md:p-8">
          <div className="bg-surface/95 rounded-xl p-6 border border-primary/10">
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-primary mb-3">
              {title}
            </h3>
            <p className="text-text-secondary font-inter leading-relaxed mb-4 max-w-md">
              {description}
            </p>
            <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all duration-300">
              <span className="font-inter">Explore Collection</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>

        {/* Subtle hover accent */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} 
             style={{ 
               background: 'linear-gradient(135deg, hsl(var(--primary) / 0.05) 0%, transparent 50%)',
             }} 
        />
      </div>
    </div>
  );
};

export default CollectionCard;