import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CollectionCard from "@/components/CollectionCard";
import Footer from "@/components/Footer";

// Import placeholder images
import collection1Img1 from "@/assets/collection-1-img-1.jpg";
import collection1Img2 from "@/assets/collection-1-img-2.jpg";
import collection1Img3 from "@/assets/collection-1-img-3.jpg";
import collection2Img1 from "@/assets/collection-2-img-1.jpg";
import collection3Img1 from "@/assets/collection-3-img-1.jpg";

const collections = [
  {
    title: "Bride & Groom's Morning",
    description: "A sophisticated exploration of metropolitan beauty through fashion and architecture.",
    images: [
      { src: collection1Img1, alt: "Fashion portrait" },
      { src: collection1Img2, alt: "Architectural detail" },
      { src: collection1Img3, alt: "Abstract texture" }
    ]
  },
  {
    title: "Wedding Ceremony",
    description: "Capturing the electric energy of city lights and nocturnal urban landscapes.",
    images: [
      { src: collection2Img1, alt: "Urban nightscape" },
      { src: collection1Img3, alt: "Neon reflections" },
      { src: collection1Img1, alt: "Street portrait" }
    ]
  },
  {
    title: "Wedding Events",
    description: "Majestic landscapes that showcase the raw power and beauty of nature.",
    images: [
      { src: collection3Img1, alt: "Mountain landscape" },
      { src: collection1Img2, alt: "Natural textures" },
      { src: collection2Img1, alt: "Atmospheric mood" }
    ]
  },
  {
    title: "Party Time!",
    description: "Clean geometric compositions that find beauty in simplicity and negative space.",
    images: [
      { src: collection1Img2, alt: "Architectural geometry" },
      { src: collection1Img3, alt: "Abstract forms" },
      { src: collection1Img1, alt: "Minimal portrait" }
    ]
  },
  {
    title: "Married Couple with Guests",
    description: "Warm, cinematic moments captured during the most magical light of day.",
    images: [
      { src: collection1Img3, alt: "Golden textures" },
      { src: collection3Img1, alt: "Sunset landscape" },
      { src: collection1Img1, alt: "Portrait in golden light" }
    ]
  },
  {
    title: "Guest Portraits",
    description: "Timeless black and white imagery that speaks to the soul through contrast and emotion.",
    images: [
      { src: collection1Img1, alt: "B&W portrait" },
      { src: collection1Img2, alt: "Architectural shadows" },
      { src: collection2Img1, alt: "Urban contrast" }
    ]
  },
    {
    title: "Married Couple in the Garden",
    description: "A sophisticated exploration of metropolitan beauty through fashion and architecture.",
    images: [
      { src: collection1Img1, alt: "Fashion portrait" },
      { src: collection1Img2, alt: "Architectural detail" },
      { src: collection1Img3, alt: "Abstract texture" }
    ]
  },
  {
    title: "Decoration",
    description: "Capturing the electric energy of city lights and nocturnal urban landscapes.",
    images: [
      { src: collection2Img1, alt: "Urban nightscape" },
      { src: collection1Img3, alt: "Neon reflections" },
      { src: collection1Img1, alt: "Street portrait" }
    ]
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {/* Collections Grid */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {collections.map((collection, index) => (
            <CollectionCard
              key={collection.title}
              title={collection.title}
              description={collection.description}
              images={collection.images}
              index={index}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
