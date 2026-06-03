import Logo from "@/components/Logo";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 shadow-elevated"
      style={{
        background: "rgba(61,74,31,0.92)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
      data-ocid="header"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavClick("#hero")}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
            aria-label="Hope Stone Tours & Travels - Home"
            data-ocid="header.logo"
          >
            <Logo size="md" />
          </button>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-4 py-2 text-sm font-body font-medium rounded-md transition-smooth"
                style={{ color: "#d4e09a" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#d4e09a";
                }}
                data-ocid={`header.${link.label.toLowerCase().replace(" ", "-")}_link`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+917025447770"
              className="ml-3 px-4 py-2 text-sm font-body font-semibold rounded-lg transition-smooth"
              style={{ background: "#a8b560", color: "#2a3515" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#bcc970";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#a8b560";
              }}
              data-ocid="header.call_button"
            >
              Call Now
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            data-ocid="header.mobile_menu_toggle"
            style={{ color: "#d4e09a" }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-4 pb-4"
          style={{ background: "#2a3515", borderColor: "rgba(168,181,96,0.3)" }}
        >
          <nav className="flex flex-col gap-1 pt-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-4 py-3 text-sm font-body font-medium rounded-md transition-smooth"
                style={{ color: "#d4e09a" }}
                data-ocid={`header.mobile.${link.label.toLowerCase().replace(" ", "-")}_link`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+917025447770"
              className="mt-2 px-4 py-3 text-sm font-body font-semibold rounded-lg text-center transition-smooth"
              style={{ background: "#a8b560", color: "#2a3515" }}
              data-ocid="header.mobile.call_button"
            >
              Call Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
