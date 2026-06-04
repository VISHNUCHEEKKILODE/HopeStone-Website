import { useState } from "react";
import { CheckCircle, X } from "lucide-react";

interface VisaModalProps {
  open: boolean;
  onClose: () => void;
}

const visaData = {
  Schengen: {
    processing: "10 - 15 Working Days",
    validity: "Up to 90 Days",
    fee: "INR 8,200 + VFS Charges",
    documents: [
      "Original Passport valid for 6 months",
      "Visa Application Form",
      "Bank Statement (Last 6 Months)",
      "Travel Insurance",
      "Hotel Reservation",
      "Return Flight Reservation",
      "Recent Photographs",
      "Income Tax Returns",
    ],
  },

  UK: {
    processing: "15 - 20 Working Days",
    validity: "Up to 180 Days",
    fee: "INR 11,500",
    documents: [
      "Valid Passport",
      "UK Visa Application",
      "Bank Statements",
      "Employment Proof",
      "Hotel Booking",
      "Flight Reservation",
    ],
  },

  UAE: {
    processing: "3 - 5 Working Days",
    validity: "30 Days",
    fee: "INR 7,000",
    documents: [
      "Passport Copy",
      "Passport Photo",
      "Flight Ticket",
      "Hotel Booking",
    ],
  },

  USA: {
    processing: "Interview Based",
    validity: "Up to 10 Years",
    fee: "USD 185",
    documents: [
      "DS-160 Confirmation",
      "Passport",
      "Photograph",
      "Financial Proof",
      "Employment Documents",
    ],
  },

  Canada: {
    processing: "20 - 30 Working Days",
    validity: "Up to Passport Validity",
    fee: "CAD 100",
    documents: [
      "Passport",
      "Financial Proof",
      "Travel History",
      "Employment Proof",
    ],
  },

  Singapore: {
    processing: "3 - 5 Working Days",
    validity: "30 Days",
    fee: "INR 2,500",
    documents: [
      "Passport",
      "Photo",
      "Flight Ticket",
      "Hotel Reservation",
    ],
  },
};

type Country = keyof typeof visaData;

export default function VisaModal({
  open,
  onClose,
}: VisaModalProps) {
  const [country, setCountry] =
    useState<Country>("Schengen");

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [travelDate, setTravelDate] = useState("");
    const [visaType, setVisaType] = useState("Tourist Visa");
    const [remarks, setRemarks] = useState("");


    const sendWhatsApp = () => {
  if (!name.trim()) {
    alert("Please enter your name");
    return;
  }

  if (!phone.trim()) {
    alert("Please enter your phone number");
    return;
  }

  const message = `Hi Hope Stone Tours & Travels,

Visa Enquiry Details

Country: ${country}
Name: ${name}
Phone: ${phone}
Email: ${email}
Travel Date: ${travelDate}

Remarks:
${remarks}

Please contact me regarding visa processing.`;

  const whatsappNumber = "919746054775";

  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};

  if (!open) return null;

  const current = visaData[country];

  return (
    <div className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-7xl rounded-2xl max-h-[92vh] overflow-auto shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#a8b560] font-semibold">
              Visa Branch Desk
            </p>

            <h2 className="text-3xl font-bold text-[#3d4a1f]">
              Visa Services Details
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-12 gap-6 p-6">

          {/* Left Panel */}
          <div className="lg:col-span-3 border rounded-xl p-4">
            <h3 className="font-semibold mb-4 text-[#3d4a1f]">
              Select Country Desk
            </h3>

            <div className="space-y-2">
              {Object.keys(visaData).map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    setCountry(item as Country)
                  }
                  className={`w-full text-left px-4 py-3 rounded-lg transition ${
                    country === item
                      ? "bg-[#3d4a1f] text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Right Panel */}
          <div className="lg:col-span-9 border rounded-xl p-6">

            <div className="flex flex-col lg:flex-row lg:justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-[#3d4a1f]">
                  {country} Visa Requirements
                </h3>

                <p className="text-gray-500 mt-1">
                  Primary documentation & eligibility.
                </p>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">

              <div className="border rounded-lg p-4">
                <div className="text-xs text-gray-400 uppercase">
                  Processing Time
                </div>
                <div className="font-semibold mt-1">
                  {current.processing}
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <div className="text-xs text-gray-400 uppercase">
                  Validity
                </div>
                <div className="font-semibold mt-1">
                  {current.validity}
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <div className="text-xs text-gray-400 uppercase">
                  Embassy Fee
                </div>
                <div className="font-semibold mt-1">
                  {current.fee}
                </div>
              </div>

            </div>

            {/* Checklist */}
            <h4 className="font-semibold text-[#3d4a1f] mb-4">
              Required Documents Checklist
            </h4>

            <div className="grid md:grid-cols-2 gap-4">

              {current.documents.map((doc) => (
                <div
                  key={doc}
                  className="flex items-start gap-3"
                >
                  <CheckCircle
                    size={18}
                    className="text-green-600 mt-1"
                  />

                  <span>{doc}</span>
                </div>
              ))}

            </div>


              <div className="mt-8 border rounded-lg p-5 bg-[#fafbf7]">
  <h4 className="font-semibold text-[#3d4a1f] mb-4">
    Visa Enquiry Form
  </h4>

  <div className="grid md:grid-cols-2 gap-4">

    <input
      type="text"
      placeholder="Full Name *"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="border rounded-lg px-4 py-3"
    />

    <input
      type="text"
      placeholder="Phone Number *"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      className="border rounded-lg px-4 py-3"
    />

    <input
      type="email"
      placeholder="Email Address"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="border rounded-lg px-4 py-3"
    />

    <div className="flex flex-col">
  <label className="text-sm font-medium mb-2 text-[#3d4a1f]">
    Visa Type *
  </label>

  <select
    value={visaType}
    onChange={(e) => setVisaType(e.target.value)}
    className="border rounded-lg px-4 py-3"
  >
    <option value="Tourist Visa">Tourist Visa</option>
    <option value="Business Visa">Business Visa</option>
    <option value="Student Visa">Student Visa</option>
    <option value="Work Visa">Work Visa</option>
    <option value="Family Visit Visa">Family Visit Visa</option>
    <option value="Transit Visa">Transit Visa</option>
  </select>
</div>

    <div className="flex flex-col">
  <label className="text-sm font-medium mb-2 text-[#3d4a1f]">
    Planned Travel Date *
  </label>

  <input
    type="date"
    value={travelDate}
    onChange={(e) => setTravelDate(e.target.value)}
    className="border rounded-lg px-4 py-3"
  />
</div>

  </div>

  <textarea
    placeholder="Remarks"
    value={remarks}
    onChange={(e) => setRemarks(e.target.value)}
    className="border rounded-lg px-4 py-3 w-full mt-4 min-h-[100px]"
  />
</div>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t flex justify-end">

              <button
  onClick={sendWhatsApp}
  className="bg-[#3d4a1f] text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
>
  Send WhatsApp Request →
</button>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}