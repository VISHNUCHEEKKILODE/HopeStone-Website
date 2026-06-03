import { Headphones, Lock, ShieldCheck, Star, Tag, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: Zap,
    title: "Fast Processing",
    description: "Quick visa and documentation turnaround — no long waits.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Service",
    description: "10+ years of trusted travel expertise serving thousands.",
  },
  {
    icon: Tag,
    title: "Affordable Packages",
    description: "Best value packages carefully crafted for every budget.",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description: "Round-the-clock support for travelers at every stage.",
  },
  {
    icon: Star,
    title: "Experienced Experts",
    description: "Seasoned professionals guiding your journey end-to-end.",
  },
  {
    icon: Lock,
    title: "Secure Documentation",
    description: "Safe, accurate, and confidential document processing.",
  },
];

export default function WhyUsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(features.length).fill(false),
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
            }, index * 100);
          }
        }
      },
      { threshold: 0.15 },
    );

    const cards = sectionRef.current?.querySelectorAll("[data-index]");
    if (cards) {
      for (const card of cards) observer.observe(card);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24"
      style={{ background: "#2a3418" }}
      data-ocid="why_us.section"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="font-body text-xs sm:text-sm tracking-[0.28em] uppercase font-semibold mb-3"
            style={{ color: "#a8b560" }}
          >
            Why Choose Us
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Why Travelers Trust Us
          </h2>
          <p
            className="font-body text-base sm:text-lg max-w-xl mx-auto"
            style={{ color: "rgba(168,181,96,0.75)" }}
          >
            Six strong reasons our clients keep coming back and referring
            others.
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

        {/* Cards Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-ocid="why_us.list"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                data-index={index}
                data-ocid={`why_us.item.${index + 1}`}
                className="glass-card rounded-xl p-8 group cursor-default relative"
                style={{
                  opacity: visibleCards[index] ? 1 : 0,
                  transform: visibleCards[index]
                    ? "translateY(0)"
                    : "translateY(32px)",
                  transition:
                    "opacity 0.55s ease, transform 0.55s ease, border-color 0.3s ease, box-shadow 0.3s ease",
                  border: "1px solid rgba(168,181,96,0.18)",
                }}
              >
                {/* Icon circle */}
                <div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-5 transition-smooth group-hover:scale-110"
                  style={{ background: "#a8b560" }}
                >
                  <Icon
                    size={26}
                    style={{ color: "#2a3418" }}
                    strokeWidth={2}
                  />
                </div>

                <h3 className="font-display font-bold text-xl text-white mb-2">
                  {feature.title}
                </h3>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "rgba(210,220,180,0.8)" }}
                >
                  {feature.description}
                </p>

                {/* Hover border glow overlay */}
                <div
                  className="absolute inset-0 rounded-xl pointer-events-none transition-smooth opacity-0 group-hover:opacity-100"
                  style={{
                    boxShadow:
                      "inset 0 0 0 1px rgba(168,181,96,0.55), 0 8px 32px rgba(168,181,96,0.12)",
                    borderRadius: "0.75rem",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
