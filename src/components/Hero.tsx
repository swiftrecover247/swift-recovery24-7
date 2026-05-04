import { Phone, Clock, ShieldCheck, CheckCircle, Star } from "lucide-react";
import { motion } from "motion/react";
import { BUSINESS_DETAILS } from "../constants";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544620347-c4fd4a33ed68?q=80&w=2070&auto=format&fit=crop"
          alt="Recovery Vehicle"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent md:hidden"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="md:w-2/3 lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2 bg-emergency-yellow px-3 py-1 rounded-full w-fit mb-6"
          >
            <Clock className="w-4 h-4 text-emergency-dark animate-pulse" />
            <span className="text-xs font-black uppercase tracking-tighter text-emergency-dark">
              Help is {BUSINESS_DETAILS.responseTime} away in {BUSINESS_DETAILS.primaryLocation}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl text-white font-display font-black leading-[0.9] mb-8"
          >
            BROKEN DOWN? <br />
            <span className="text-emergency-yellow">FAST RECOVERY</span> <br />
            24/7 EMERGENCY.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-10 font-medium leading-relaxed"
          >
            Safe, reliable, and insured vehicle recovery across all of {BUSINESS_DETAILS.primaryLocation}. 
            Don't stay stuck—our experts are ready to rescue you right now. 
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href={`tel:${BUSINESS_DETAILS.primaryPhone.replace(/\s/g, "")}`}
              className="bg-emergency-red hover:bg-red-600 text-white px-8 py-5 rounded-2xl font-black text-2xl uppercase tracking-wider flex items-center justify-center shadow-[0_10px_30px_rgba(239,68,68,0.4)] animate-pulse-red transition-all active:scale-95"
            >
              <Phone className="w-8 h-8 mr-4 fill-current text-white" />
              Call Now
            </a>
            <div className="flex flex-col justify-center px-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <span className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1 italic">Expected Arrival</span>
              <span className="text-emergency-yellow text-xl font-black">{BUSINESS_DETAILS.responseTime} OR LESS</span>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4 md:grid-cols-3"
          >
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-green-400" />
              <span className="text-white text-xs font-bold uppercase tracking-widest">Fully Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-white text-xs font-bold uppercase tracking-widest">Licensed Fleet</span>
            </div>
            <div className="flex items-center space-x-2 hidden md:flex">
              <Star className="w-5 h-5 text-emergency-yellow" />
              <span className="text-white text-xs font-bold uppercase tracking-widest">500+ Reviews</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
