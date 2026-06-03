import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const packages = [
  {
    id: "international",
    category: "International Tours",
    name: "World Explorer Packages",
    description:
      "Curated global itineraries across Europe, Asia & the Americas",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
  },
  {
    id: "domestic",
    category: "Domestic Tours",
    name: "Incredible India Journeys",
    description: "Scenic routes through India's most breathtaking destinations",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
  },
  {
    id: "hajj",
    category: "Hajj & Umra",
    name: "Sacred Pilgrimage Packages",
    description: "Spiritually guided journeys with seamless logistics & care",
    image:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&q=80",
  },
  {
    id: "study",
    category: "Study Abroad",
    name: "Global Education Pathways",
    description: "Visa assistance & travel for students heading overseas",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
  },
];

export default function PackagesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(packages.length).fill(false),
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset.index);
            setTimeout(() => {
              setVisibleCards((prev) => {
                const next = [...prev];
                next[index] = true;
                return next;
              });
            }, index * 130);
          }
        }
      },
      { threshold: 0.12 },
    );

    const cards = sectionRef.current?.querySelectorAll("[data-index]");
    if (cards) {
      for (const card of cards) observer.observe(card);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="packages"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-background"
      data-ocid="packages.section"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="font-body text-xs sm:text-sm tracking-[0.28em] uppercase font-semibold mb-3"
            style={{ color: "#a8b560" }}
          >
            Explore
          </p>
          <h2
            className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4"
            style={{ color: "#3d4a1f" }}
          >
            Our Tour Packages
          </h2>
          <p
            className="font-body text-base sm:text-lg max-w-xl mx-auto"
            style={{ color: "#666" }}
          >
            Handpicked destinations for unforgettable experiences around the
            globe.
          </p>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-12" style={{ background: "#a8b560" }} />
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: "#a8b560" }}
            />
            <div className="h-px w-12" style={{ background: "#a8b560" }} />
          </div>
        </div>

        {/* 2x2 Grid */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          data-ocid="packages.list"
        >
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              data-index={index}
              data-ocid={`packages.item.${index + 1}`}
              className="relative rounded-2xl overflow-hidden group cursor-pointer min-h-[260px] sm:min-h-[320px]"
              style={{
                opacity: visibleCards[index] ? 1 : 0,
                transform: visibleCards[index]
                  ? "translateY(0)"
                  : "translateY(36px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
              }}
            >
              {/* Background image with zoom on hover */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${pkg.image})` }}
              />

              {/* Dark olive gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(61,74,31,0.88) 0%, rgba(0,0,0,0.45) 60%, transparent 100%)",
                }}
              />

              {/* Content anchored to bottom */}
              <div className="relative z-10 flex flex-col justify-end h-full p-6 sm:p-8 min-h-[260px] sm:min-h-[320px]">
                {/* Category badge */}
                <span
                  className="inline-block self-start px-3 py-1 rounded-full text-xs font-semibold font-body tracking-wide mb-3"
                  style={{
                    background: "rgba(255,255,255,0.95)",
                    color: "#3d4a1f",
                  }}
                >
                  {pkg.category}
                </span>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-1 leading-snug">
                  {pkg.name}
                </h3>

                <p
                  className="font-body text-sm mb-4 leading-relaxed"
                  style={{ color: "rgba(210,230,180,0.9)" }}
                >
                  {pkg.description}
                </p>

                {/* CTA button */}
                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="inline-flex items-center gap-2 self-start px-5 py-2 rounded-lg font-body text-sm font-semibold border-2 text-white transition-smooth group-hover:bg-white"
                  style={{
                    borderColor: "rgba(255,255,255,0.75)",
                  }}
                  data-ocid={`packages.explore_button.${index + 1}`}
                >
                  <span className="transition-smooth group-hover:text-[#3d4a1f]">
                    Explore Packages
                  </span>
                  <ArrowRight
                    size={16}
                    className="transition-smooth group-hover:text-[#3d4a1f]"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
