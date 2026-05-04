import { SERVICES, BUSINESS_DETAILS } from "../constants";
import * as Icons from "lucide-react";
import { motion } from "motion/react";
import QuoteForm from "../components/QuoteForm";

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      <div className="bg-emergency-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6">
            Our <span className="text-emergency-yellow">Expertise</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl font-medium">
            From breakdown recovery to specialized vehicle transport, 
            SwiftRecover provides a full suite of roadside assistance services.
          </p>
        </div>
      </div>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => {
              const IconComponent = (Icons as any)[service.icon] || Icons.Shield;
              return (
                <div key={service.id} className="group border-2 border-gray-50 rounded-[2.5rem] p-10 hover:border-emergency-yellow transition-all flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-emergency-yellow transition-colors group-hover:rotate-6">
                    <IconComponent className="w-10 h-10 text-emergency-dark" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{service.title}</h3>
                  <p className="text-gray-600 font-medium leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="mt-auto pt-6 border-t border-gray-100 w-full flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Available</span>
                    <span className="text-sm font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">24/7/365</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-emergency-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-emergency-dark mb-8">
                Need A CUSTOM <br />
                RECOVERY Quote?
              </h2>
              <p className="text-xl font-bold text-emergency-dark/70 mb-10 leading-relaxed">
                Whether it's a short local tow or long-distance vehicle transport anywhere in the UK, 
                we offer the most competitive fixed rates in {BUSINESS_DETAILS.primaryLocation}.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Icons.Check className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="text-lg font-black uppercase tracking-tight text-emergency-dark">No Hidden Call-Out Fees</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Icons.Check className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="text-lg font-black uppercase tracking-tight text-emergency-dark">Fully Insured Transport</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Icons.Check className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="text-lg font-black uppercase tracking-tight text-emergency-dark">UK-Wide Coverage</span>
                </div>
              </div>
            </div>
            <div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
