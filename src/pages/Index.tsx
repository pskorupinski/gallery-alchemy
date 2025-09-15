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
import c2_4 from "@/assets/2-4.jpg";
import c2_3 from "@/assets/2-3.jpg";
import c3_1 from "@/assets/3-1.jpg";
import c3_2 from "@/assets/3-2.jpg";
import c3_3 from "@/assets/3-3.jpg";
import c4_2 from "@/assets/4-2.jpg";
import c4_4 from "@/assets/4-4.jpg";
import c4_5 from "@/assets/4-5.jpg";
import c5_1 from "@/assets/5-1.jpg";
import c5_2 from "@/assets/5-2.jpg";
import c5_3 from "@/assets/5-3.jpg";
import c6_1 from "@/assets/6-1.jpg";
import c6_2 from "@/assets/6-2.jpg";
import c6_3 from "@/assets/6-3.jpg";
import c7_1 from "@/assets/7-1.jpg";
import c7_2 from "@/assets/7-2.jpg";
import c7_3 from "@/assets/7-3.jpg";
import c8_1 from "@/assets/8-1.jpg";
import c8_2 from "@/assets/8-2.jpg";
import c8_3 from "@/assets/8-3.jpg";

const collections = [
  {
    title: "Bride & Groom's Morning",
    description: "",
    url: "https://1drv.ms/a/c/e5c67f4bca25096f/EpoTzr_RMZVBhfb-NPgxrTABCzy8w2uUXn1RDPQt-AFfTA?e=rZrKL0",
    images: [
      { src: c1_1, alt: "Bride & Groom's Morning #1" },
      { src: c1_2, alt: "Bride & Groom's Morning #2" },
      { src: c1_3, alt: "Bride & Groom's Morning #3" }
    ]
  },
  {
    title: "Wedding Ceremony",
    description: "",
    url: "https://1drv.ms/a/c/e5c67f4bca25096f/EvpeOUO9X_1KiXnjGE134nQB0GhjStoT2QNkbHgNKAGpGw?e=OxaRPJ",
    images: [
      { src: c2_1, alt: "Wedding Ceremony #1" },
      { src: c2_3, alt: "Wedding Ceremony #2" },
      { src: c2_4, alt: "Wedding Ceremony #3" }
    ]
  },
  {
    title: "Wedding Lunch & Events",
    description: "",
    url: "https://1drv.ms/a/c/e5c67f4bca25096f/EvQLg2kaG-pFlzQK3o-f1cABFmv1XO1DPLTx8VCGRaqnUg?e=UrRAej",
    images: [
      { src: c3_3, alt: "Wedding Lunch & Events #3" },
      { src: c3_1, alt: "Wedding Lunch & Events #1" },
      { src: c3_2, alt: "Wedding Lunch & Events #2" }
    ]
  },
  {
    title: "Party Time!",
    description: "",
    url: "https://1drv.ms/a/c/e5c67f4bca25096f/ErMIonSBYftAiPSp7YaYtsIBBm7z1oXMXbwe4VUhOkNHTQ?e=erqwuw",
    images: [
      { src: c4_4, alt: "Party Time #1" },
      { src: c4_5, alt: "Party Time #2" },
      { src: c4_2, alt: "Party Time #3" }
    ]
  },
  {
    title: "Bride & Groom with Guests",
    description: "",
    url: "https://1drv.ms/a/c/e5c67f4bca25096f/Eqatv82-OIhOkHn0lHJ8gucB-BmD_RSA1AsyWf2mXTjtRQ?e=b7TEx9",
    images: [
      { src: c5_1, alt: "Bride & Groom with Guests #1" },
      { src: c5_2, alt: "Bride & Groom with Guests #2" },
      { src: c5_3, alt: "Bride & Groom with Guests #3" }
    ]
  },
  {
    title: "Guest Portraits",
    description: "",
    url: "https://1drv.ms/a/c/e5c67f4bca25096f/Eo-j0-9QbNlNq113V3TCTSsBnRKHyJOSyA4R4NGe-09POQ?e=XbThzd",
    images: [
      { src: c6_1, alt: "Guest Portraits #1" },
      { src: c6_2, alt: "Guest Portraits #2" },
      { src: c6_3, alt: "Guest Portraits #3" }
    ]
  },
    {
    title: "Bride & Groom Photo Sessions",
    description: "",
    url: "https://1drv.ms/a/c/e5c67f4bca25096f/EnCcHDKqOcxGhrGRtgsxHYABTKADBT2DN4TuWggy_fcDyw?e=FoFc2Z",
    images: [
      { src: c7_1, alt: "Bride & Groom Photo Sessions #1" },
      { src: c7_2, alt: "Bride & Groom Photo Sessions #2" },
      { src: c7_3, alt: "Bride & Groom Photo Sessions #3" }
    ]
  },
  {
    title: "Decoration",
    description: "",
    url: "https://1drv.ms/a/c/e5c67f4bca25096f/EleYtkMqUdRBkDKGlmf3Hp8BiRuWxdCv28TyvV-53AGX5w?e=PaiklL",
    images: [
      { src: c8_1, alt: "Decoration #1" },
      { src: c8_2, alt: "Decoration #2" },
      { src: c8_3, alt: "Decoration #3" }
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
