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
      style={{ animationDelay: `${index * 0.2}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Creative Image Composition */}
      <div className="relative h-96 md:h-[500px] image-mosaic bg-surface rounded-2xl overflow-hidden mb-6 shadow-premium">
        {/* Primary Image */}
        <div className="absolute inset-0">
          <img
            src={images[0]?.src}
            alt={images[0]?.alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </div>

        {/* Floating Secondary Images */}
        {images[1] && (
          <div className={`image-floating w-32 h-40 md:w-40 md:h-48 top-8 right-8 rounded-xl overflow-hidden shadow-soft border border-primary/20 ${isHovered ? 'animate-float' : ''}`}>
            <img
              src={images[1].src}
              alt={images[1].alt}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {images[2] && (
          <div className={`image-floating w-24 h-32 md:w-32 md:h-40 bottom-12 left-8 rounded-lg overflow-hidden shadow-soft border border-primary/20 ${isHovered ? 'animate-float' : ''}`} style={{ animationDelay: '0.5s' }}>
            <img
              src={images[2].src}
              alt={images[2].alt}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Overlay Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="glass rounded-xl p-6 backdrop-blur-xl">
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-primary mb-2 text-glow">
              {title}
            </h3>
            <p className="text-text-secondary font-inter leading-relaxed mb-4">
              {description}
            </p>
            <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all duration-300">
              <span className="font-inter">Explore Collection</span>
              <ArrowRight className="w-5 h-5 group-hover:animate-pulse" />
            </div>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${isHovered ? 'animate-glow' : ''}`} 
             style={{ 
               background: 'radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%)',
               mixBlendMode: 'overlay'
             }} 
        />
      </div>
    </div>
  );
};

export default CollectionCard;