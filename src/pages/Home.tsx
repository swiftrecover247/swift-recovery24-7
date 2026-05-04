import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";
import ReviewSlider from "../components/ReviewSlider";
import QuoteForm from "../components/QuoteForm";
import { Shield, Clock, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { BUSINESS_DETAILS } from "../constants";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />

      {/* Trust Bar */}
      <section className="bg-emergency-dark py-12 border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-emergency-yellow text-4xl font-black tracking-tighter">15+ YRS</span>
              <span className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mt-1">Experience</span>
            </div>
            <div className="flex flex-col items-center md:items-start border-l border-white/10 pl-8">
              <span className="text-emergency-yellow text-4xl font-black tracking-tighter">30 MIN</span>
              <span className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mt-1">Avg Response</span>
            </div>
            <div className="flex flex-col items-center md:items-start border-l border-white/10 pl-8">
              <span className="text-emergency-yellow text-4xl font-black tracking-tighter">5000+</span>
              <span className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mt-1">Jobs Covered</span>
            </div>
            <div className="flex flex-col items-center md:items-start border-l border-white/10 pl-8">
              <div className="flex">
                {[1, 2, 3, 4, 5].map(i => (
                  <CheckCircle2 key={i} className="w-5 h-5 text-green-500 mr-1" />
                ))}
              </div>
              <span className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mt-2 italic">DBS Checked Drivers</span>
            </div>
          </div>
        </div>
      </section>

      <ServicesGrid compact />

      {/* Process Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative">
                <img
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1974&auto=format&fit=crop"
                  alt="Car Recovery"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-emergency-yellow/10 mix-blend-overlay"></div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -right-10 md:right-10 bg-emergency-red text-white p-10 rounded-full shadow-2xl border-8 border-white animate-bounce-subtle">
                <div className="text-center">
                  <span className="block text-4xl font-black">24/7</span>
                  <span className="block text-[10px] font-bold uppercase tracking-widest">Active Now</span>
                </div>
              </div>
            </div>

            <div>
              <span className="text-emergency-red font-black uppercase tracking-[0.2em] text-sm block mb-4">
                The Rescue Process
              </span>
              <h2 className="text-4xl md:text-6xl text-emergency-dark font-black tracking-tighter mb-10 uppercase leading-[0.9]">
                Help is just <br />
                <span className="text-emergency-yellow bg-emergency-dark inline-block px-4 py-2 mt-2">3 Steps Away</span>
              </h2>

              <div className="space-y-12">
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center font-black text-2xl group-hover:bg-emergency-yellow transition-colors shrink-0">1</div>
                  <div>
                    <h4 className="text-xl font-black uppercase tracking-tight mb-2">Call Our Dispatch</h4>
                    <p className="text-gray-600 font-medium leading-relaxed">
                      Call our 24/7 emergency line. Tell us your location and vehicle type. No long wait times.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center font-black text-2xl group-hover:bg-emergency-yellow transition-colors shrink-0">2</div>
                  <div>
                    <h4 className="text-xl font-black uppercase tracking-tight mb-2">Get Instant Fixed Price</h4>
                    <p className="text-gray-600 font-medium leading-relaxed">
                      We give you a transparent, affordable quote over the phone. No hidden fees or "rescue premiums".
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center font-black text-2xl group-hover:bg-emergency-yellow transition-colors shrink-0">3</div>
                  <div>
                    <h4 className="text-xl font-black uppercase tracking-tight mb-2">Track Your Recovery</h4>
                    <p className="text-gray-600 font-medium leading-relaxed">
                      We dispatch our nearest recovery specialist. They'll call you directly when 5 minutes away.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <a
                  href={`tel:${BUSINESS_DETAILS.primaryPhone.replace(/\s/g, "")}`}
                  className="inline-flex items-center text-lg font-black uppercase tracking-widest text-emergency-red group"
                >
                  Need help now? Call {BUSINESS_DETAILS.primaryPhone}
                  <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReviewSlider />

      {/* Final CTA / Location SEO Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-none">
                Serving All Areas <br /> 
                <span className="text-emergency-red">Across London</span>
              </h2>
              <div className="grid grid-cols-2 gap-y-4">
                {BUSINESS_DETAILS.locations.map(loc => (
                  <div key={loc} className="flex items-center text-sm font-bold uppercase tracking-widest text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                    {loc}
                  </div>
                ))}
              </div>
              <p className="mt-10 text-gray-500 font-medium italic">
                * We also cover the Home Counties and M25 corridor including Berkshire, Hertfordshire, Essex, and Kent.
              </p>
            </div>
            
            <div className="lg:col-span-3">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
