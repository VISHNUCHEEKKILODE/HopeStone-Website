import { MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingActions() {
  const [visible, setVisible] = useState(false);
  const [whatsappHover, setWhatsappHover] = useState(false);
  const [callHover, setCallHover] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 flex flex-col items-end gap-3"
      style={{ zIndex: 9999 }}
      data-ocid="floating_actions"
    >
      {/* Call button */}
      <div className="relative flex items-center">
        {callHover && (
          <div
            className="absolute right-[4.5rem] animate-fade-in px-3 py-1.5 rounded-full text-xs font-body font-semibold whitespace-nowrap shadow-lg pointer-events-none"
            style={{ background: "#3d4a1f", color: "#f5f0e8" }}
          >
            Call Now
          </div>
        )}
        <a
          href="tel:+917025447770"
          aria-label="Call Now"
          onMouseEnter={() => setCallHover(true)}
          onMouseLeave={() => setCallHover(false)}
          className={[
            "flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full shadow-lg transition-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a8b560] focus-visible:ring-offset-2",
            visible ? "animate-slide-in-right" : "opacity-0",
          ].join(" ")}
          style={{
            background: callHover ? "#4a5a25" : "#3d4a1f",
            color: "#f5f0e8",
            transform: callHover ? "scale(1.12)" : "scale(1)",
            boxShadow: callHover
              ? "0 12px 30px rgba(61,74,31,0.7)"
              : "0 4px 15px rgba(61,74,31,0.5)",
            animationDelay: "1.5s",
          }}
          data-ocid="floating_actions.call_button"
        >
          <Phone size={24} />
        </a>
      </div>

      {/* WhatsApp button */}
      <div className="relative flex items-center">
        {whatsappHover && (
          <div
            className="absolute right-[4.5rem] animate-fade-in px-3 py-1.5 rounded-full text-xs font-body font-semibold whitespace-nowrap shadow-lg pointer-events-none"
            style={{ background: "#075e54", color: "#ffffff" }}
          >
            Chat on WhatsApp
          </div>
        )}
        <a
          href="https://wa.me/917025447770"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          onMouseEnter={() => setWhatsappHover(true)}
          onMouseLeave={() => setWhatsappHover(false)}
          className={[
            "flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full shadow-lg transition-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25d366] focus-visible:ring-offset-2",
            visible ? "animate-slide-in-right delay-100" : "opacity-0",
          ].join(" ")}
          style={{
            background: whatsappHover ? "#1ebe6e" : "#25d366",
            color: "#ffffff",
            transform: whatsappHover ? "scale(1.12)" : "scale(1)",
            boxShadow: whatsappHover
              ? "0 12px 30px rgba(37,211,102,0.55)"
              : "0 4px 15px rgba(37,211,102,0.4)",
          }}
          data-ocid="floating_actions.whatsapp_button"
        >
          <MessageCircle size={24} />
        </a>
      </div>
    </div>
  );
}
