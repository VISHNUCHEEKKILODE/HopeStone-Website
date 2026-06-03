import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect, useRef } from "react";

const features = [
  "Trusted travel and visa assistance for all major destinations",
  "International and domestic travel solutions tailored to you",
  "Customer-focused support from planning to arrival",
  "Reliable documentation and attestation services",
];

const statsGrid = [
  { value: "10+", label: "Years of Experience" },
  { value: "1000+", label: "Happy Travelers" },
  { value: "50+", label: "Destinations Covered" },
  { value: "12+", label: "Travel Services" },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targets = [
      { el: leftRef.current, cls: "animate-fade-in-up" },
      { el: rightRef.current, cls: "animate-slide-in-right delay-200" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const target = targets.find((t) => t.el === entry.target);
            if (target?.el) {
              target.el.classList.remove("opacity-0");
              for (const c of target.cls.split(" ")) target.el.classList.add(c);
              observer.unobserve(entry.target);
            }
          }
        }
      },
      { threshold: 0.15 },
    );

    for (const t of targets) {
      if (t.el) observer.observe(t.el);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToServices = () => {
    const el = document.querySelector("#services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: "#1a2010" }}
      data-ocid="about.section"
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #a8b560 0%, transparent 50%), radial-gradient(circle at 80% 20%, #d4b566 0%, transparent 40%)",
        }}
        aria-hidden="true"
      />
      {/* Decorative leaf top-right */}
      <div
        className="absolute top-0 right-0 opacity-10 pointer-events-none"
        aria-hidden="true"
      >
        <svg width="220" height="260" viewBox="0 0 220 260" aria-hidden="true">
          <path
            d="M110 0 Q220 55 192 165 Q138 245 44 260 Q20 192 76 110 Q95 50 110 0Z"
            fill="#a8b560"
          />
          <path d="M110 0 L110 260" stroke="#3d4a1f" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT — text */}
          <div ref={leftRef} className="opacity-0">
            {/* Label */}
            <p
              className="font-body text-xs sm:text-sm tracking-[0.3em] uppercase font-semibold mb-4"
              style={{ color: "#a8b560" }}
              data-ocid="about.label"
            >
              About Us
            </p>

            {/* Heading */}
            <h2
              className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6"
              style={{ color: "#f5f0e8" }}
              data-ocid="about.heading"
            >
              Your Trusted{" "}
              <span style={{ color: "#a8b560" }}>Travel Partner</span>
            </h2>

            {/* Gold divider */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-0.5 w-10" style={{ background: "#d4b566" }} />
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#d4b566" }}
              />
              <div
                className="h-0.5 w-24"
                style={{ background: "rgba(212,181,102,0.3)" }}
              />
            </div>

            {/* Body text */}
            <p
              className="font-body text-base sm:text-lg leading-relaxed mb-8"
              style={{ color: "rgba(245,240,232,0.75)" }}
            >
              At Hope Stone Tours &amp; Travels, we bring your dream destinations
              to life. With over a decade of expertise, we specialize in
              providing comprehensive travel and visa assistance for
              individuals, families, and corporate clients.
            </p>

            {/* Feature list */}
            <ul className="space-y-3.5 mb-10" data-ocid="about.features_list">
              {features.map((feature, idx) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 font-body text-sm sm:text-base"
                  style={{ color: "rgba(245,240,232,0.82)" }}
                  data-ocid={`about.feature.${idx + 1}`}
                >
                  <CheckCircle2
                    size={20}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: "#a8b560" }}
                  />
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              type="button"
              onClick={scrollToServices}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-body font-semibold text-sm sm:text-base transition-smooth hover:scale-105 active:scale-95 group"
              style={{
                border: "1.5px solid #d4b566",
                color: "#d4b566",
                background: "transparent",
              }}
              data-ocid="about.services_button"
            >
              Our Services
              <ArrowRight
                size={16}
                className="transition-smooth group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* RIGHT — stats grid */}
          <div ref={rightRef} className="opacity-0">
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {statsGrid.map((stat, i) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:scale-105 transition-smooth"
                  data-ocid={`about.stat.${i + 1}`}
                >
                  <span
                    className="font-display font-bold text-3xl sm:text-4xl leading-none mb-2"
                    style={{ color: "#a8b560" }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="font-body text-xs sm:text-sm leading-snug"
                    style={{ color: "rgba(245,240,232,0.75)" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Decorative quote block */}
            <div
              className="mt-5 glass-card rounded-2xl p-5 flex items-start gap-4"
              data-ocid="about.quote_card"
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xl font-display font-bold"
                style={{ background: "rgba(168,181,96,0.2)", color: "#a8b560" }}
                aria-hidden="true"
              >
                &#8220;
              </div>
              <div>
                <p
                  className="font-body text-sm leading-relaxed italic"
                  style={{ color: "rgba(245,240,232,0.8)" }}
                >
                  We don&apos;t just book trips — we craft memories that last a
                  lifetime. Every journey is unique, every client is family.
                </p>
                <p
                  className="font-body text-xs mt-2 font-semibold"
                  style={{ color: "#a8b560" }}
                >
                  — Hope Stone Team
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
