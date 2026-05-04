import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import QuoteForm from "../components/QuoteForm";
import { BUSINESS_DETAILS } from "../constants";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen"
    >
      <div className="bg-emergency-dark py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-emergency-yellow font-black uppercase tracking-[0.4em] text-xs block mb-4">
            Get Help Today
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.8]">
            CONTACT US
          </h1>
        </div>
      </div>

      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12">
                Emergency Lines: <br />
                <div className="flex flex-col space-y-6 mt-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <a href={`tel:${BUSINESS_DETAILS.primaryPhone.replace(/\s/g, "")}`} className="text-emergency-red hover:underline decoration-4 underline-offset-8 transition-all text-3xl md:text-4xl font-black">
                      {BUSINESS_DETAILS.primaryPhone}
                    </a>
                    <a href={`https://wa.me/${BUSINESS_DETAILS.whatsapp1.replace(/\+/g, "")}`} className="inline-flex items-center bg-emerald-500 text-white px-4 py-2 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-emerald-600 transition-colors">
                      <MessageSquare className="w-4 h-4 mr-2 fill-current" />
                      Chat on WhatsApp
                    </a>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <a href={`tel:${BUSINESS_DETAILS.secondaryPhone.replace(/\s/g, "")}`} className="text-emergency-red hover:underline decoration-4 underline-offset-8 transition-all text-3xl md:text-4xl font-black">
                      {BUSINESS_DETAILS.secondaryPhone}
                    </a>
                    <a href={`https://wa.me/${BUSINESS_DETAILS.whatsapp2.replace(/\+/g, "")}`} className="inline-flex items-center bg-emerald-500 text-white px-4 py-2 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-emerald-600 transition-colors">
                      <MessageSquare className="w-4 h-4 mr-2 fill-current" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </h2>

              <div className="flex gap-4 mb-12">
                <a href={BUSINESS_DETAILS.facebook} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-widest">
                  Find us on Facebook
                </a>
                <a href={BUSINESS_DETAILS.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 text-white px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-widest">
                  Find us on Instagram
                </a>
              </div>

              <div className="space-y-10">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0">
                    <Clock className="w-7 h-7 text-emergency-dark" />
                  </div>
                  <div className="ml-6">
                    <h4 className="text-xl font-black uppercase tracking-tight mb-2">Working Hours</h4>
                    <p className="text-gray-600 font-medium">
                      24 Hours a Day / 7 Days a Week <br />
                      Including Bank Holidays and Christmas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="w-7 h-7 text-emergency-dark" />
                  </div>
                  <div className="ml-6">
                    <h4 className="text-xl font-black uppercase tracking-tight mb-2">Email Inquiries</h4>
                    <p className="text-gray-600 font-medium">{BUSINESS_DETAILS.email}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0">
                    <MessageSquare className="w-7 h-7 text-emerald-500" />
                  </div>
                  <div className="ml-6">
                    <h4 className="text-xl font-black uppercase tracking-tight mb-2">WhatsApp Direct</h4>
                    <p className="text-gray-600 font-medium">Quickest for sending your live location pin.</p>
                    <a href={`https://wa.me/${BUSINESS_DETAILS.whatsapp1.replace(/\+/g, "")}`} className="text-emerald-600 font-bold uppercase tracking-widest text-sm mt-3 inline-block hover:underline">
                      Message Us Now
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="w-7 h-7 text-emergency-dark" />
                  </div>
                  <div className="ml-6">
                    <h4 className="text-xl font-black uppercase tracking-tight mb-2">Coverage Area</h4>
                    <p className="text-gray-600 font-medium">
                      Focused on {BUSINESS_DETAILS.primaryLocation} and surrounding boroughs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-16 p-8 bg-emergency-yellow rounded-[2rem] border-4 border-emergency-dark">
                <span className="text-xs font-black uppercase tracking-widest text-emergency-dark bg-white px-2 py-1 inline-block mb-4">Urgent Tip</span>
                <p className="text-lg font-black text-emergency-dark leading-tight">
                  If you are stuck on a motorway, please stay safe behind the crash barrier while waiting for our arrival.
                </p>
              </div>
            </div>

            <div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mini FAQ Section */}
      <section className="py-24 bg-gray-50">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black uppercase tracking-tighter text-center mb-16">Frequently Asked Questions</h2>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm">
                <h4 className="text-lg font-black uppercase mb-4">How long will you take to reach me?</h4>
                <p className="text-gray-600 font-medium">Our average response time in Greater London is 30 minutes, however traffic and location can influence this. Dispatch will give you a live ETA.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm">
                <h4 className="text-lg font-black uppercase mb-4">Do you charge extra for late-night callouts?</h4>
                <p className="text-gray-600 font-medium">We have a transparent pricing structure. While night rates may differ slightly from day rates, we always provide a fixed quote upfront with NO hidden surprises.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm">
                <h4 className="text-lg font-black uppercase mb-4">Can you tow my car to a specific garage?</h4>
                <p className="text-gray-600 font-medium">Yes, we can tow your vehicle to any garage, home address, or dealership of your choice anywhere in the UK.</p>
              </div>
            </div>
         </div>
      </section>
    </motion.div>
  );
}
