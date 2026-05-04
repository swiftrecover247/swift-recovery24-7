import { SERVICES } from "../constants";
import * as Icons from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function ServicesGrid({ compact = false }: { compact?: boolean }) {
  const displayServices = compact ? SERVICES.slice(0, 3) : SERVICES;

  return (
    <section className={`py-20 ${compact ? "bg-white" : "bg-gray-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]"}`} id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          {!compact && (
            <span className="text-emergency-red font-black uppercase tracking-[0.2em] text-sm block mb-4">
              Expert Solutions
            </span>
          )}
          <h2 className="text-4xl md:text-6xl text-emergency-dark font-black tracking-tighter mb-6 uppercase">
            {compact ? "Our Specialist Services" : "Professional Vehicle Recovery Services"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl font-medium">
            We handle everything from standard car towing to heavy-duty commercial van recovery. 
            Available 24 hours a day, 365 days a year.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayServices.map((service, index) => {
            const IconComponent = (Icons as any)[service.icon] || Icons.Shield;
            return (
              <motion.div
                key={service.id}
                whileHover={{ y: -5 }}
                className="bg-white border-2 border-gray-100 p-8 rounded-[2rem] shadow-sm hover:shadow-2xl hover:border-emergency-yellow transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emergency-yellow transition-colors duration-500">
                    <IconComponent className="w-8 h-8 text-emergency-dark" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-medium mb-8">
                    {service.description}
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-emergency-dark hover:text-emergency-red transition-colors"
                >
                  Get A Quote <Icons.ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            );
          })}
        </div>
        
        {compact && (
          <div className="mt-12 text-center">
            <Link 
              to="/services" 
              className="inline-flex items-center bg-emergency-dark text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-gray-800 transition-all active:scale-95 shadow-xl"
            >
              View All Services
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
