import Logo from "@/components/Logo";
import { Mail, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Flight Tickets",
  "Visa Services",
  "Hajj & Umra",
  "Study Abroad",
  "Travel Insurance",
  "Tour Packages",
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4"
        aria-hidden="true"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-4 h-4"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4"
        aria-hidden="true"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="border-t"
      style={{ background: "#0f1a08", borderColor: "rgba(168,181,96,0.2)" }}
      data-ocid="footer"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <Logo size="md" />
            </div>
            <p
              className="font-display font-semibold text-base mb-1"
              style={{ color: "#f5f0e8" }}
            >
              Hope Stone Tours &amp; Travels
            </p>
            <p
              className="font-body text-sm mb-3 italic"
              style={{ color: "#a8b560" }}
            >
              Travel With Hope
            </p>
            <p
              className="font-body text-sm leading-relaxed max-w-xs"
              style={{ color: "rgba(245,240,232,0.6)" }}
            >
              Your trusted partner for global travel, visa services, and
              unforgettable journeys.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-2 mt-5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex items-center justify-center w-8 h-8 rounded-full border transition-smooth"
                  style={{
                    background: "rgba(168,181,96,0.1)",
                    borderColor: "rgba(168,181,96,0.25)",
                    color: "rgba(245,240,232,0.65)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(168,181,96,0.25)";
                    e.currentTarget.style.color = "#a8b560";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(168,181,96,0.1)";
                    e.currentTarget.style.color = "rgba(245,240,232,0.65)";
                  }}
                  data-ocid={`footer.social_${social.label.toLowerCase().replace(/[^a-z0-9]/g, "_")}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4
              className="font-display font-semibold text-sm uppercase tracking-widest mb-5 pb-2 border-b"
              style={{ color: "#a8b560", borderColor: "rgba(168,181,96,0.25)" }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="inline-flex items-center gap-2 font-body text-sm transition-smooth group"
                    style={{ color: "rgba(245,240,232,0.65)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#a8b560";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(245,240,232,0.65)";
                    }}
                    data-ocid={`footer.nav_${link.label.toLowerCase()}`}
                  >
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0 transition-smooth"
                      style={{ background: "rgba(168,181,96,0.4)" }}
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Our Services */}
          <div>
            <h4
              className="font-display font-semibold text-sm uppercase tracking-widest mb-5 pb-2 border-b"
              style={{ color: "#a8b560", borderColor: "rgba(168,181,96,0.25)" }}
            >
              Our Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <button
                    type="button"
                    onClick={() => {
                      const el = document.querySelector("#services");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2 font-body text-sm transition-smooth text-left"
                    style={{ color: "rgba(245,240,232,0.65)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#a8b560";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(245,240,232,0.65)";
                    }}
                  >
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: "rgba(168,181,96,0.4)" }}
                    />
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact Info */}
          <div>
            <h4
              className="font-display font-semibold text-sm uppercase tracking-widest mb-5 pb-2 border-b"
              style={{ color: "#a8b560", borderColor: "rgba(168,181,96,0.25)" }}
            >
              Contact Info
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+917025447770"
                className="flex items-center gap-2 font-body text-sm transition-smooth"
                style={{ color: "rgba(245,240,232,0.7)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#a8b560";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(245,240,232,0.7)";
                }}
                data-ocid="footer.phone1"
              >
                <Phone size={14} style={{ color: "#a8b560", flexShrink: 0 }} />
                +91 70254 47770
              </a>
              <a
                href="tel:+916235794499"
                className="flex items-center gap-2 font-body text-sm transition-smooth"
                style={{ color: "rgba(245,240,232,0.7)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#a8b560";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(245,240,232,0.7)";
                }}
                data-ocid="footer.phone2"
              >
                <Phone size={14} style={{ color: "#a8b560", flexShrink: 0 }} />
                +91 6235794499
              </a>
              <a
                href="mailto:hopestonetravelsccj@gmail.com"
                className="flex items-start gap-2 font-body text-sm break-all transition-smooth"
                style={{ color: "rgba(245,240,232,0.7)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#a8b560";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(245,240,232,0.7)";
                }}
                data-ocid="footer.email1"
              >
                <Mail
                  size={14}
                  style={{ color: "#a8b560", flexShrink: 0, marginTop: 2 }}
                />
                hopestonetravelsccj@gmail.com
              </a>
              <a
                href="mailto:visa.hopestonetravels@gmail.com"
                className="flex items-start gap-2 font-body text-sm break-all transition-smooth"
                style={{ color: "rgba(245,240,232,0.7)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#a8b560";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(245,240,232,0.7)";
                }}
                data-ocid="footer.email2"
              >
                <Mail
                  size={14}
                  style={{ color: "#a8b560", flexShrink: 0, marginTop: 2 }}
                />
                visa.hopestonetravels@gmail.com
              </a>
              <div
                className="flex items-center gap-2 font-body text-xs mt-1"
                style={{ color: "rgba(245,240,232,0.5)" }}
              >
                <span style={{ color: "#a8b560" }}>●</span>
                Mon–Sat: 9:00 AM – 7:00 PM
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="mt-12 mb-6 h-px"
          style={{ background: "rgba(168,181,96,0.2)" }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="font-body text-sm text-center sm:text-left"
            style={{ color: "rgba(245,240,232,0.5)" }}
          >
            © {currentYear} Hope Stone Tours &amp; Travels. All rights reserved.
          </p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs transition-smooth"
            style={{ color: "rgba(245,240,232,0.35)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "rgba(245,240,232,0.65)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(245,240,232,0.35)";
            }}
          >
            Built with love using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
