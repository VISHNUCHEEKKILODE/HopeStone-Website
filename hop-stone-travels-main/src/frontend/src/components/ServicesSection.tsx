import {
  BookOpen,
  Bus,
  FileText,
  Globe,
  Globe2,
  GraduationCap,
  Map as MapIcon,
  Moon,
  Plane,
  Shield,
  Stamp,
  TrainFront,
} from "lucide-react";
import { type ElementType, useEffect, useRef } from "react";

interface Service {
  icon: ElementType;
  title: string;
  description: string;
  accentColor: string;
}

const services: Service[] = [
  {
    icon: Plane,
    title: "Flight Tickets",
    description: "Domestic & international flight bookings",
    accentColor: "#3d4a1f",
  },
  {
    icon: FileText,
    title: "Visa Services",
    description: "Expert visa processing for all countries",
    accentColor: "#3d4a1f",
  },
  {
    icon: Moon,
    title: "Hajj & Umra Packages",
    description: "Complete Hajj & Umra travel packages",
    accentColor: "#3d4a1f",
  },
  {
    icon: Stamp,
    title: "Visa Stamping",
    description: "Official visa stamping assistance",
    accentColor: "#3d4a1f",
  },
  {
    icon: Globe,
    title: "Emigration",
    description: "Emigration clearance and documentation",
    accentColor: "#3d4a1f",
  },
  {
    icon: Globe2,
    title: "Global Visas",
    description: "Visas for any country worldwide",
    accentColor: "#3d4a1f",
  },
  {
    icon: GraduationCap,
    title: "Study Abroad Services",
    description: "Study visa and university admissions",
    accentColor: "#3d4a1f",
  },
  {
    icon: Shield,
    title: "Travel Insurance",
    description: "Comprehensive travel insurance plans",
    accentColor: "#3d4a1f",
  },
  {
    icon: MapIcon,
    title: "International & Domestic Tours",
    description: "Curated tours for every budget",
    accentColor: "#3d4a1f",
  },
  {
    icon: BookOpen,
    title: "Documents Attestation",
    description: "Attestation of official documents",
    accentColor: "#3d4a1f",
  },
  {
    icon: TrainFront,
    title: "Train Tickets",
    description: "Indian Railways and international trains",
    accentColor: "#3d4a1f",
  },
  {
    icon: Bus,
    title: "Bus Tickets",
    description: "Bus bookings across routes",
    accentColor: "#3d4a1f",
  },
];

const DELAY_CLASSES = [
  "delay-100",
  "delay-200",
  "delay-300",
  "delay-400",
] as const;

export default function ServicesSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll<HTMLDivElement>(
      "[data-service-card]",
    );
    if (!cards) return;

    // Start hidden
    for (const card of cards) {
      card.style.opacity = "0";
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add("animate-fade-in-up");
            el.style.opacity = "";
            observer.unobserve(el);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    for (const card of cards) observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      className="py-16 sm:py-20 lg:py-28 bg-[#f8f9f5]"
      data-ocid="services.section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p
            className="font-body text-xs sm:text-sm tracking-[0.28em] uppercase font-semibold mb-3"
            style={{ color: "#a8b560" }}
          >
            What We Offer
          </p>
          <h2
            className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight"
            style={{ color: "#3d4a1f" }}
          >
            Our Travel Services
          </h2>
          {/* Gold decorative underline */}
          <div className="flex items-center justify-center gap-2 mt-4 mb-5">
            <div
              className="h-0.5 rounded-full w-16"
              style={{
                background: "linear-gradient(90deg, transparent, #d4b566)",
              }}
            />
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: "#d4b566" }}
            />
            <div
              className="h-0.5 rounded-full w-16"
              style={{
                background: "linear-gradient(90deg, #d4b566, transparent)",
              }}
            />
          </div>
          <p
            className="font-body text-base sm:text-lg max-w-2xl mx-auto"
            style={{ color: "#666" }}
          >
            Comprehensive travel solutions for every journey — from flights and
            visas to spiritual pilgrimages and study abroad.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6"
          data-ocid="services.list"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const Icon = service.icon;
  const delayClass = DELAY_CLASSES[index % DELAY_CLASSES.length];

  return (
    <div
      data-service-card
      className={`group relative bg-white rounded-xl shadow-md overflow-hidden cursor-default flex flex-col transition-all duration-300 ${delayClass}`}
      style={{
        border: "1px solid rgba(168,181,96,0.18)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(-6px) scale(1.02)";
        el.style.boxShadow = "0 20px 48px -8px rgba(61,74,31,0.2)";
        el.style.borderColor = "rgba(168,181,96,0.5)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(0) scale(1)";
        el.style.boxShadow = "";
        el.style.borderColor = "rgba(168,181,96,0.18)";
      }}
      data-ocid={`services.item.${index + 1}`}
    >
      {/* Card Body */}
      <div className="p-6 flex flex-col items-center text-center flex-1">
        {/* Icon Container */}
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
          style={{ background: "#f0f5e8" }}
        >
          <Icon size={26} style={{ color: "#3d4a1f" }} strokeWidth={1.8} />
        </div>

        {/* Title */}
        <h3
          className="font-display font-semibold text-base sm:text-lg mb-2 leading-snug"
          style={{ color: "#3d4a1f" }}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p
          className="font-body text-sm leading-relaxed"
          style={{ color: "#777" }}
        >
          {service.description}
        </p>
      </div>

      {/* Bottom Olive Accent Bar */}
      <div
        className="h-1 w-full transition-all duration-300"
        style={{
          background:
            "linear-gradient(90deg, #3d4a1f 0%, #a8b560 60%, #d4b566 100%)",
          opacity: 0.7,
        }}
      />
    </div>
  );
}
