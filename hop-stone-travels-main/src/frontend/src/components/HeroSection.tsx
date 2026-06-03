import Logo from "@/components/Logo";
import { ChevronDown, Phone } from "lucide-react";
import { useEffect, useRef } from "react";

const WHATSAPP_URL = "https://wa.me/917025447770";
const PHONE_URL = "tel:+917025447770";

const stats = [
  { value: "12+", label: "Services" },
  { value: "10+", label: "Years" },
  { value: "1000+", label: "Happy Clients" },
  { value: "24/7", label: "Support" },
];

export default function HeroSection() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const timer = setTimeout(() => {
      el.classList.add("animate-fade-in");
    }, 80);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      data-ocid="hero.section"
    >
      {/* Background image with parallax on desktop */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-travel.dim_1920x1080.jpg')",
          backgroundAttachment: "fixed",
        }}
        aria-hidden="true"
      />

      {/* Dark overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(10,20,5,0.80) 0%, rgba(61,74,31,0.55) 55%, rgba(10,20,5,0.82) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Decorative leaf — top right */}
      <div
        className="absolute top-16 right-6 opacity-20 pointer-events-none"
        aria-hidden="true"
      >
        <svg width="140" height="180" viewBox="0 0 140 180" aria-hidden="true">
          <path
            d="M70 0 Q140 36 122 108 Q88 162 30 180 Q14 126 50 72 Q62 34 70 0Z"
            fill="#a8b560"
          />
          <path d="M70 0 L70 180" stroke="#3d4a1f" strokeWidth="1.8" />
        </svg>
      </div>

      {/* Decorative leaf — bottom left */}
      <div
        className="absolute bottom-16 left-4 opacity-15 pointer-events-none"
        aria-hidden="true"
      >
        <svg width="110" height="130" viewBox="0 0 110 130" aria-hidden="true">
          <path
            d="M55 0 Q110 28 94 84 Q66 122 18 130 Q8 92 36 56 Q46 22 55 0Z"
            fill="#a8b560"
          />
          <path d="M55 0 L55 130" stroke="#3d4a1f" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Hero content */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-4xl mx-auto w-full opacity-0"
        style={{ paddingTop: "80px", paddingBottom: "140px" }}
      >
        {/* Logo */}
        <div className="mb-7">
          <Logo size="lg" />
        </div>

        {/* Badge pill */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-body text-xs sm:text-sm font-medium tracking-widest uppercase mb-6"
          style={{
            background: "rgba(168,181,96,0.18)",
            border: "1px solid rgba(168,181,96,0.45)",
            color: "#a8b560",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: "#a8b560" }}
          />
          Trusted Travel Partner Since 2010
        </div>

        {/* Company name */}
        <h1
          className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl mb-5 leading-tight"
          style={{ color: "#f5f0e8", textShadow: "0 2px 24px rgba(0,0,0,0.5)" }}
        >
          Hope Stone Tours &amp; Travels
        </h1>

        {/* Tagline */}
        <p
          className="font-body text-lg sm:text-xl lg:text-2xl font-light max-w-2xl leading-relaxed mb-6"
          style={{ color: "rgba(245,240,232,0.88)" }}
        >
          Your Trusted Partner for Global Travel &amp; Visa Services
        </p>

        {/* Gold divider */}
        <div className="flex items-center gap-4 mb-8">
          <div
            className="h-px w-14"
            style={{ background: "rgba(212,181,102,0.5)" }}
          />
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: "#d4b566" }}
          />
          <div
            className="h-px w-14"
            style={{ background: "rgba(212,181,102,0.5)" }}
          />
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-body font-semibold text-base transition-smooth shadow-lg hover:scale-105 active:scale-95"
            style={{ background: "#25D366", color: "#ffffff" }}
            data-ocid="hero.whatsapp_button"
          >
            {/* WhatsApp icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Chat on WhatsApp
          </a>

          <a
            href={PHONE_URL}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-body font-semibold text-base transition-smooth hover:scale-105 active:scale-95"
            style={{
              background: "transparent",
              border: "2px solid rgba(245,240,232,0.7)",
              color: "#f5f0e8",
            }}
            data-ocid="hero.call_button"
          >
            <Phone size={18} />
            Call Now
          </a>
        </div>
      </div>

      {/* Stats glassmorphism strip */}
      <div className="absolute bottom-16 left-0 right-0 flex justify-center px-4 z-10">
        <div
          className="glass-card rounded-2xl px-6 py-4 flex flex-wrap justify-center gap-x-8 gap-y-3 max-w-2xl w-full"
          data-ocid="hero.stats_panel"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center min-w-[70px]"
              data-ocid={`hero.stat.${i + 1}`}
            >
              <div
                className="font-display font-bold text-xl sm:text-2xl leading-tight"
                style={{ color: "#a8b560" }}
              >
                {stat.value}
              </div>
              <div
                className="font-body text-xs tracking-wide mt-0.5"
                style={{ color: "rgba(245,240,232,0.8)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={scrollToAbout}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 hover:opacity-90 transition-smooth"
        aria-label="Scroll down"
        data-ocid="hero.scroll_indicator"
      >
        <span
          className="font-body text-xs tracking-widest uppercase"
          style={{ color: "rgba(245,240,232,0.7)" }}
        >
          Scroll to explore
        </span>
        <ChevronDown
          size={20}
          className="animate-bounce"
          style={{ color: "#a8b560" }}
        />
      </button>
    </section>
  );
}
