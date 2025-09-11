const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-8 text-gradient leading-tight">
            Visual Stories
            <br />
            <span className="text-text-primary">Reimagined</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary font-inter font-light leading-relaxed max-w-2xl mx-auto">
            Discover curated photography collections that capture the essence of modern aesthetics and timeless beauty.
          </p>
          <div className="mt-12 w-24 h-1 bg-gradient-primary mx-auto rounded-full shadow-glow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;