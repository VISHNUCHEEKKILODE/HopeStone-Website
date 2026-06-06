import { Check } from "lucide-react";

import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function HajjUmraModal({
  open,
  onClose,
}: Props) {


   const inclusions = [
  "Return flight tickets included",
  "Umrah tourist visa with insurance",
  "Ziyarat tours in Makkah & Madinah",
  "Comfortable AC transport in KSA",
  "Dedicated Guide Support",
  "Ihram Kit included",
  "Hotel Accommodation",
  "Daily Buffet Meals",
]; 



  const [pilgrims, setPilgrims] = useState(2);
  const [sharing, setSharing] = useState("economy");
  const [duration, setDuration] = useState(14);

  let pricePerPerson = 95000;

  if (sharing === "triple") {
    pricePerPerson = 105000;
  }

  if (sharing === "double") {
    pricePerPerson = 120000;
  }

  if (sharing === "private") {
    pricePerPerson = 150000;
  }

  if (duration === 21) {
    pricePerPerson += 25000;
  }

  if (duration === 30) {
    pricePerPerson += 50000;
  }

  const totalPrice = pilgrims * pricePerPerson;

  const durationName =
  duration === 14
    ? "14 Days (Classic)"
    : duration === 21
    ? "21 Days (Premium)"
    : "30 Days (Extended)";

  if (!open) return null;

const whatsappMessage = encodeURIComponent(`
🕋 HAJJ & UMRA PACKAGE ENQUIRY

Assalamu Alaikum,

👥 Number of Pilgrims: ${pilgrims}

🏨 Hotel Sharing: ${
  sharing === "economy"
    ? "Quad Sharing Room"
    : sharing === "triple"
    ? "Triple Sharing Room"
    : sharing === "double"
    ? "Double Sharing Room"
    : "Private Room"
}

📅 Package Duration: ${durationName}

💰 Estimated Package Cost:
₹${totalPrice.toLocaleString()}

Please share the complete itinerary and package details.
`);

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-7xl max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-[#3d4a1f]">
            Hajj & Umra Package Estimator
          </h2>

          <button
            onClick={onClose}
            className="text-3xl font-bold hover:text-red-500"
          >
            ✕
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2">

            {/* Dropdown Row */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">

              <div>
                <label className="block mb-2 font-semibold">
                  Number of Pilgrims
                </label>

                <select
                  value={pilgrims}
                  onChange={(e) =>
                    setPilgrims(Number(e.target.value))
                  }
                  className="border rounded-lg px-4 py-3 w-full"
                >
                  <option value={1}>1 Pilgrim</option>
                  <option value={2}>2 Pilgrims</option>
                  <option value={3}>3 Pilgrims</option>
                  <option value={4}>4 Pilgrims</option>
                  <option value={5}>5 Pilgrims</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 font-semibold">
                  Hotel Sharing
                </label>

                <select
                  value={sharing}
                  onChange={(e) =>
                    setSharing(e.target.value)
                  }
                  className="border rounded-lg px-4 py-3 w-full"
                >
                  <option value="economy">
                    Quad Sharing Room
                  </option>

                  <option value="triple">
                    Triple Sharing Room
                  </option>

                  <option value="double">
                    Double Sharing Room
                  </option>

                  <option value="private">
                    Private Room
                  </option>
                </select>
              </div>

              <div>
                <label className="block mb-2 font-semibold">
                  Package Duration
                </label>

                <select
                  value={duration}
                  onChange={(e) =>
                    setDuration(Number(e.target.value))
                  }
                  className="border rounded-lg px-4 py-3 w-full"
                >
                  <option value={14}>
                    14 Days (Classic)
                  </option>

                  <option value={21}>
                    21 Days (Premium)
                  </option>

                  <option value={30}>
                    30 Days (Extended)
                  </option>
                </select>
              </div>
            </div>

            {/* Inclusions */}
            <div className="border rounded-xl p-5">
              <h3 className="font-bold text-lg mb-4 text-[#3d4a1f]">
                YOUR PILGRIMAGE PACKAGE INCLUSIONS
              </h3>

            <div className="grid md:grid-cols-2 gap-3 text-sm">
                    {inclusions.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                            <Check size={12} className="text-green-600" />
                        </div>
                        <span>{item}</span>
                        </div>
                 ))}
            </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col">

            <div className="bg-[#3d4a1f] text-white rounded-xl p-6">
              <p className="uppercase text-sm tracking-wider mb-2">
                Estimated Package Cost
              </p>

              <h3 className="text-5xl font-bold">
                ₹{totalPrice.toLocaleString()}
              </h3>

              <p className="mt-4 text-sm text-gray-200">
                Includes flights, visa assistance,
                hotel accommodation and transport.
              </p>
            </div>

            <a
              href={`https://wa.me/919746054775?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-yellow-500 hover:bg-yellow-400 text-black text-center font-semibold py-4 rounded-xl transition-all"
            >
              Get Detailed Holy Itinerary
            </a>

          </div>

        </div>
      </div>
    </div>
  );
}