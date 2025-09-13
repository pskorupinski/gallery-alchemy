import GPlogo from "@/assets/GPlogo.svg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/20">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={GPlogo} alt="GP Logo" className="w-20 h-20 bg-background rounded-full" />
            <div>
              <h1 className="text-2xl font-roboto text-gradient">
                <b>Giulia & Paweł Wedding</b> Photo Gallery
              </h1>
            </div>
          </div>
          <div className="hidden md:block">
            <iframe
              width="300"
              height="80"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/478663311&color=%23313EAE&auto_play=true&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;