import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactSection() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    console.log("Contact form submission:", form);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setForm(initialForm);
    }, 800);
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24"
      style={{ background: "#1e2a10" }}
      data-ocid="contact.section"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <p
            className="font-body text-xs sm:text-sm tracking-[0.25em] uppercase mb-2 font-semibold"
            style={{ color: "#a8b560" }}
          >
            Get In Touch
          </p>
          <h2
            className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4"
            style={{ color: "#f5f0e8" }}
          >
            Contact Us
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div
              className="h-px w-16"
              style={{ background: "rgba(168,181,96,0.5)" }}
            />
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: "#a8b560" }}
            />
            <div
              className="h-px w-16"
              style={{ background: "rgba(168,181,96,0.5)" }}
            />
          </div>
          <p
            className="font-body text-base"
            style={{ color: "rgba(245,240,232,0.75)" }}
          >
            We&apos;re here to help you plan the perfect journey
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* LEFT — Contact Info (2/5) */}
          <div className="lg:col-span-2 flex flex-col gap-5 animate-fade-in-up delay-100">
            {/* Phone Card 1 */}
            <div
              className="rounded-xl p-5 border transition-smooth"
              style={{
                background: "rgba(255,255,255,0.05)",
                borderColor: "rgba(168,181,96,0.2)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full"
                  style={{ background: "rgba(168,181,96,0.15)" }}
                >
                  <Phone size={20} style={{ color: "#a8b560" }} />
                </div>
                <div className="min-w-0">
                  <p
                    className="font-body font-semibold text-xs uppercase tracking-wider mb-2"
                    style={{ color: "#a8b560" }}
                  >
                    Primary Phone
                  </p>
                  <a
                    href="tel:+917025447770"
                    className="block font-body font-semibold text-base transition-smooth mb-1"
                    style={{ color: "#f5f0e8" }}
                    data-ocid="contact.phone1_link"
                  >
                    +91 70254 47770
                  </a>
                  <a
                    href="https://wa.me/917025447770"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-body font-medium px-2.5 py-1 rounded-full transition-smooth"
                    style={{
                      background: "rgba(37,211,102,0.15)",
                      color: "#25d366",
                    }}
                    data-ocid="contact.phone1_whatsapp"
                  >
                    <MessageCircle size={12} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card 2 */}
            <div
              className="rounded-xl p-5 border transition-smooth"
              style={{
                background: "rgba(255,255,255,0.05)",
                borderColor: "rgba(168,181,96,0.2)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full"
                  style={{ background: "rgba(168,181,96,0.15)" }}
                >
                  <Phone size={20} style={{ color: "#a8b560" }} />
                </div>
                <div className="min-w-0">
                  <p
                    className="font-body font-semibold text-xs uppercase tracking-wider mb-2"
                    style={{ color: "#a8b560" }}
                  >
                    Secondary Phone
                  </p>
                  <a
                    href="tel:+916235794499"
                    className="block font-body font-semibold text-base transition-smooth"
                    style={{ color: "#f5f0e8" }}
                    data-ocid="contact.phone2_link"
                  >
                    +91 6235794499
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card 1 */}
            <div
              className="rounded-xl p-5 border transition-smooth"
              style={{
                background: "rgba(255,255,255,0.05)",
                borderColor: "rgba(168,181,96,0.2)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full"
                  style={{ background: "rgba(168,181,96,0.15)" }}
                >
                  <Mail size={20} style={{ color: "#a8b560" }} />
                </div>
                <div className="min-w-0">
                  <p
                    className="font-body font-semibold text-xs uppercase tracking-wider mb-1"
                    style={{ color: "#a8b560" }}
                  >
                    General Enquiries
                  </p>
                  <a
                    href="mailto:hopestonetravelsccj@gmail.com"
                    className="block font-body text-sm break-all transition-smooth"
                    style={{ color: "#f5f0e8" }}
                    data-ocid="contact.email1_link"
                  >
                    hopestonetravelsccj@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card 2 */}
            <div
              className="rounded-xl p-5 border transition-smooth"
              style={{
                background: "rgba(255,255,255,0.05)",
                borderColor: "rgba(168,181,96,0.2)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full"
                  style={{ background: "rgba(168,181,96,0.15)" }}
                >
                  <Mail size={20} style={{ color: "#a8b560" }} />
                </div>
                <div className="min-w-0">
                  <p
                    className="font-body font-semibold text-xs uppercase tracking-wider mb-1"
                    style={{ color: "#a8b560" }}
                  >
                    Visa Enquiries
                  </p>
                  <a
                    href="mailto:visa.hopestonetravels@gmail.com"
                    className="block font-body text-sm break-all transition-smooth"
                    style={{ color: "#f5f0e8" }}
                    data-ocid="contact.email2_link"
                  >
                    visa.hopestonetravels@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div
              className="rounded-xl p-5 border"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(168,181,96,0.2)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full"
                  style={{ background: "rgba(168,181,96,0.15)" }}
                >
                  <Clock size={20} style={{ color: "#a8b560" }} />
                </div>
                <div>
                  <p
                    className="font-body font-semibold text-xs uppercase tracking-wider mb-1"
                    style={{ color: "#a8b560" }}
                  >
                    Office Hours
                  </p>
                  <p
                    className="font-body text-sm"
                    style={{ color: "rgba(245,240,232,0.85)" }}
                  >
                    Mon – Sat: 9:00 AM – 7:00 PM
                  </p>
                  <p
                    className="font-body text-xs mt-0.5"
                    style={{ color: "rgba(245,240,232,0.55)" }}
                  >
                    Sun: 10:00 AM – 4:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/917025447770"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-body font-semibold text-base transition-smooth"
              style={{ background: "#25d366", color: "#ffffff" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#1ebe6e";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#25d366";
              }}
              data-ocid="contact.whatsapp_button"
            >
              <MessageCircle size={22} />
              Chat on WhatsApp Now
            </a>
          </div>

          {/* RIGHT — Contact Form (3/5) */}
          <div className="lg:col-span-3 flex flex-col gap-6 animate-fade-in-up delay-200">
            {/* Form */}
            <div
              className="rounded-2xl p-6 sm:p-8 border"
              style={{
                background: "rgba(255,255,255,0.05)",
                borderColor: "rgba(168,181,96,0.2)",
              }}
            >
              <h3
                className="font-display font-bold text-xl mb-6"
                style={{ color: "#f5f0e8" }}
              >
                Send Us a Message
              </h3>

              {submitted ? (
                <div
                  className="flex flex-col items-center justify-center py-10 gap-4 rounded-xl"
                  style={{
                    background: "rgba(37,211,102,0.08)",
                    border: "1px solid rgba(37,211,102,0.3)",
                  }}
                  data-ocid="contact.success_state"
                >
                  <div
                    className="flex items-center justify-center w-16 h-16 rounded-full"
                    style={{ background: "rgba(37,211,102,0.2)" }}
                  >
                    <Send size={28} style={{ color: "#25d366" }} />
                  </div>
                  <p
                    className="font-display font-bold text-xl"
                    style={{ color: "#f5f0e8" }}
                  >
                    Message Sent!
                  </p>
                  <p
                    className="font-body text-sm text-center"
                    style={{ color: "rgba(245,240,232,0.75)" }}
                  >
                    Thank you! We&apos;ll contact you soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="font-body text-sm font-semibold px-5 py-2 rounded-lg transition-smooth"
                    style={{
                      background: "rgba(168,181,96,0.2)",
                      color: "#a8b560",
                    }}
                    data-ocid="contact.send_another_button"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="contact-name"
                        className="font-body text-xs font-semibold uppercase tracking-wider"
                        style={{ color: "rgba(168,181,96,0.9)" }}
                      >
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="px-4 py-3 rounded-lg font-body text-sm outline-none transition-smooth"
                        style={{
                          background: "rgba(255,255,255,0.07)",
                          border: "1px solid rgba(168,181,96,0.25)",
                          color: "#f5f0e8",
                        }}
                        data-ocid="contact.name_input"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="contact-email"
                        className="font-body text-xs font-semibold uppercase tracking-wider"
                        style={{ color: "rgba(168,181,96,0.9)" }}
                      >
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        className="px-4 py-3 rounded-lg font-body text-sm outline-none transition-smooth"
                        style={{
                          background: "rgba(255,255,255,0.07)",
                          border: "1px solid rgba(168,181,96,0.25)",
                          color: "#f5f0e8",
                        }}
                        data-ocid="contact.email_input"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="contact-phone"
                        className="font-body text-xs font-semibold uppercase tracking-wider"
                        style={{ color: "rgba(168,181,96,0.9)" }}
                      >
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="px-4 py-3 rounded-lg font-body text-sm outline-none transition-smooth"
                        style={{
                          background: "rgba(255,255,255,0.07)",
                          border: "1px solid rgba(168,181,96,0.25)",
                          color: "#f5f0e8",
                        }}
                        data-ocid="contact.phone_input"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="contact-subject"
                        className="font-body text-xs font-semibold uppercase tracking-wider"
                        style={{ color: "rgba(168,181,96,0.9)" }}
                      >
                        Subject
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="e.g. Visa inquiry"
                        className="px-4 py-3 rounded-lg font-body text-sm outline-none transition-smooth"
                        style={{
                          background: "rgba(255,255,255,0.07)",
                          border: "1px solid rgba(168,181,96,0.25)",
                          color: "#f5f0e8",
                        }}
                        data-ocid="contact.subject_input"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-message"
                      className="font-body text-xs font-semibold uppercase tracking-wider"
                      style={{ color: "rgba(168,181,96,0.9)" }}
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your travel plans..."
                      className="px-4 py-3 rounded-lg font-body text-sm outline-none transition-smooth resize-none"
                      style={{
                        background: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(168,181,96,0.25)",
                        color: "#f5f0e8",
                      }}
                      data-ocid="contact.message_textarea"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-xl font-body font-semibold text-base transition-smooth mt-1"
                    style={{
                      background: submitting ? "rgba(61,74,31,0.7)" : "#3d4a1f",
                      color: "#f5f0e8",
                      opacity: submitting ? 0.8 : 1,
                    }}
                    onMouseEnter={(e) => {
                      if (!submitting)
                        e.currentTarget.style.background = "#4a5a25";
                    }}
                    onMouseLeave={(e) => {
                      if (!submitting)
                        e.currentTarget.style.background = "#3d4a1f";
                    }}
                    data-ocid="contact.submit_button"
                  >
                    {submitting ? (
                      <>
                        <div
                          className="w-5 h-5 rounded-full border-2 border-t-transparent animate-spin"
                          style={{
                            borderColor: "rgba(245,240,232,0.4)",
                            borderTopColor: "transparent",
                          }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Map Placeholder */}
            <a
              href="https://www.google.com/maps/search/Hop+Stone+Tours+Travels+Calicut"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-3 rounded-2xl border transition-smooth group"
              style={{
                background: "#2a3418",
                borderColor: "rgba(168,181,96,0.2)",
                minHeight: "200px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(168,181,96,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(168,181,96,0.2)";
              }}
              data-ocid="contact.map_placeholder"
            >
              <div
                className="flex items-center justify-center w-14 h-14 rounded-full transition-smooth group-hover:scale-110"
                style={{ background: "rgba(168,181,96,0.15)" }}
              >
                <MapPin size={26} style={{ color: "#a8b560" }} />
              </div>
              <p
                className="font-display font-bold text-lg"
                style={{ color: "#f5f0e8" }}
              >
                Visit Our Office
              </p>
              <p
                className="font-body text-sm"
                style={{ color: "rgba(245,240,232,0.55)" }}
              >
                Click to open in Google Maps
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
