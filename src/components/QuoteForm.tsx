import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send to an API
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-10 rounded-[3rem] text-center shadow-2xl border-2 border-green-500"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-3xl font-black mb-4 uppercase tracking-tight">Request Received!</h3>
        <p className="text-gray-600 font-medium mb-8">
          Thank you. One of our dispatch team will call you within 5 minutes to confirm details and provide a quote.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="bg-emergency-dark text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm"
        >
          Send Another Request
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-emergency-yellow opacity-10 rounded-bl-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700"></div>
      
      <div className="relative z-10">
        <h3 className="text-3xl font-black mb-2 uppercase tracking-tighter">Get A Fast Quote</h3>
        <p className="text-gray-500 font-medium mb-8">Fill in the details and we'll be in touch instantly.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-1.5 ml-2">Name</label>
              <input
                required
                type="text"
                placeholder="John Doe"
                className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-4 px-6 focus:border-emergency-yellow focus:ring-0 outline-none transition-all font-bold placeholder:text-gray-300"
              />
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-1.5 ml-2">Phone</label>
              <input
                required
                type="tel"
                placeholder="07xxx xxx xxx"
                className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-4 px-6 focus:border-emergency-yellow focus:ring-0 outline-none transition-all font-bold placeholder:text-gray-300"
              />
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-1.5 ml-2">Pickup Location</label>
            <input
              required
              type="text"
              placeholder="e.g. Postcode or Street Name"
              className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-4 px-6 focus:border-emergency-yellow focus:ring-0 outline-none transition-all font-bold placeholder:text-gray-300"
            />
          </div>
          <div>
            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-1.5 ml-2">Assistance Needed</label>
            <select className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-4 px-6 focus:border-emergency-yellow focus:ring-0 outline-none transition-all font-bold appearance-none">
              <option>Emergency Recovery</option>
              <option>Vehicle Towing</option>
              <option>Jump Start</option>
              <option>Misfuel Problem</option>
              <option>Tyre Change</option>
              <option>Other</option>
            </select>
          </div>
          
          <button
            type="submit"
            className="w-full bg-emergency-dark text-white hover:bg-black py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center shadow-xl shadow-black/10 transition-all active:scale-[0.98] mt-4"
          >
            Request Instant Quote
            <Send className="w-5 h-5 ml-3" />
          </button>
          
          <p className="text-[10px] text-center text-gray-400 font-bold uppercase tracking-widest mt-6">
            Privacy Guaranteed • 24/7 Dispatch active
          </p>
        </form>
      </div>
    </div>
  );
}
