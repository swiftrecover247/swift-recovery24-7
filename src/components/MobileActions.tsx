import { Phone, MessageSquare } from "lucide-react";
import { BUSINESS_DETAILS } from "../constants";

export default function MobileActions() {
  return (
    <div className="md:hidden fixed bottom-6 left-0 right-0 z-50 px-4">
      <div className="bg-emergency-dark/95 backdrop-blur-md rounded-2xl p-3 flex gap-3 shadow-[0_0_40px_rgba(0,0,0,0.3)] border border-white/10">
        <a
          href={`tel:${BUSINESS_DETAILS.primaryPhone.replace(/\s/g, "")}`}
          className="flex-1 flex items-center justify-center bg-emergency-red text-white py-4 rounded-xl font-black text-lg uppercase tracking-wide animate-pulse-red"
        >
          <Phone className="w-6 h-6 mr-3 fill-current" />
          Call Now
        </a>
        <a
          href={`https://wa.me/${BUSINESS_DETAILS.whatsapp1.replace(/\+/g, "")}`}
          className="w-16 flex items-center justify-center bg-emerald-500 text-white py-4 rounded-xl shadow-lg active:scale-95 transition-transform"
          aria-label="WhatsApp Us"
        >
          <MessageSquare className="w-7 h-7 fill-current" />
        </a>
      </div>
    </div>
  );
}
