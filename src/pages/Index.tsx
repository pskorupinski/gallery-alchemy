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
import c1_1 from "@/assets/1-1.jpg";
import c1_2 from "@/assets/1-2.jpg";
import c1_3 from "@/assets/1-3.jpg";
import c2_1 from "@/assets/2-1.jpg";
import c2_2 from "@/assets/2-2.jpg";
import c2_3 from "@/assets/2-3.jpg";

const collections = [
  {
    title: "Bride & Groom's Morning",
    description: "",
    url: "https://1drv.ms/a/c/e5c67f4bca25096f/EpoTzr_RMZVBhfb-NPgxrTABUUJEkUxicGeX8fVcQ-aV_w?e=w1VTXA",
    images: [
      { src: c1_1, alt: "Bride & Groom's Morning #1" },
      { src: c1_2, alt: "Bride & Groom's Morning #2" },
      { src: c1_3, alt: "Bride & Groom's Morning #3" }
    ]
  },
  {
    title: "Wedding Ceremony",
    description: "",
    url: "https://1drv.ms/a/c/e5c67f4bca25096f/EvpeOUO9X_1KiXnjGE134nQB6abwORneqctFOhu4hGbPTQ?e=49ZtXj",
    images: [
      { src: c2_1, alt: "Wedding Ceremony #1" },
      { src: c2_2, alt: "Wedding Ceremony #2" },
      { src: c2_3, alt: "Wedding Ceremony #3" }
    ]
  },
  {
    title: "Wedding Lunch & Events",
    description: "",
    url: "https://example.com/wedding-events",
    images: [
      { src: collection3Img1, alt: "Mountain landscape" },
      { src: collection1Img2, alt: "Natural textures" },
      { src: collection2Img1, alt: "Atmospheric mood" }
    ]
  },
  {
    title: "Party Time!",
    description: "",
    url: "https://example.com/party-time",
    images: [
      { src: collection1Img2, alt: "Architectural geometry" },
      { src: collection1Img3, alt: "Abstract forms" },
      { src: collection1Img1, alt: "Minimal portrait" }
    ]
  },
  {
    title: "Married Couple with Guests",
    description: "Warm, cinematic moments captured during the most magical light of day.",
    url: "https://example.com/couple-with-guests",
    images: [
      { src: collection1Img3, alt: "Golden textures" },
      { src: collection3Img1, alt: "Sunset landscape" },
      { src: collection1Img1, alt: "Portrait in golden light" }
    ]
  },
  {
    title: "Guest Portraits",
    description: "Timeless black and white imagery that speaks to the soul through contrast and emotion.",
    url: "https://example.com/guest-portraits",
    images: [
      { src: collection1Img1, alt: "B&W portrait" },
      { src: collection1Img2, alt: "Architectural shadows" },
      { src: collection2Img1, alt: "Urban contrast" }
    ]
  },
    {
    title: "Married Couple Photo Session",
    description: "A sophisticated exploration of metropolitan beauty through fashion and architecture.",
    url: "https://example.com/couple-garden",
    images: [
      { src: collection1Img1, alt: "Fashion portrait" },
      { src: collection1Img2, alt: "Architectural detail" },
      { src: collection1Img3, alt: "Abstract texture" }
    ]
  },
  {
    title: "Decoration",
    description: "Capturing the electric energy of city lights and nocturnal urban landscapes.",
    url: "https://example.com/decoration",
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
              url={collection.url}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
