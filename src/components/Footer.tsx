import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { BUSINESS_DETAILS } from "../constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-emergency-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="bg-emergency-yellow p-1.5 rounded-lg">
                <Phone className="w-6 h-6 text-emergency-dark fill-emergency-dark" />
              </div>
              <span className="text-2xl font-display font-extrabold tracking-tighter uppercase block leading-none">
                Swift<span className="text-emergency-red">Recover</span>
              </span>
            </Link>
            <p className="text-gray-400 font-medium mb-8">
              Professional 24/7 vehicle recovery and towing across London & Surrounding Areas. 
              We'll get you back on the road fast or safely to your destination.
            </p>
            <div className="flex space-x-4">
              <a href={BUSINESS_DETAILS.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-emergency-yellow hover:text-emergency-dark transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={BUSINESS_DETAILS.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-emergency-yellow hover:text-emergency-dark transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold uppercase tracking-widest mb-8 text-emergency-yellow">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors font-medium">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors font-medium">Our Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors font-medium">Get a Quote</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors font-medium">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold uppercase tracking-widest mb-8 text-emergency-yellow">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-4 text-emergency-yellow flex-shrink-0" />
                <div className="flex flex-col">
                  <a href={`tel:${BUSINESS_DETAILS.primaryPhone.replace(/\s/g, "")}`} className="hover:text-emergency-yellow transition-colors font-bold text-lg">
                    {BUSINESS_DETAILS.primaryPhone}
                  </a>
                  <a href={`tel:${BUSINESS_DETAILS.secondaryPhone.replace(/\s/g, "")}`} className="hover:text-emergency-yellow transition-colors font-bold text-lg">
                    {BUSINESS_DETAILS.secondaryPhone}
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-4 text-emergency-yellow flex-shrink-0" />
                <span className="text-gray-400 font-medium">{BUSINESS_DETAILS.email}</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-4 text-emergency-yellow flex-shrink-0" />
                <span className="text-gray-400 font-medium">Serving {BUSINESS_DETAILS.primaryLocation} and surrounding areas.</span>
              </li>
            </ul>
          </div>

          {/* Trust */}
          <div>
            <div className="bg-white/5 rounded-[2rem] p-8 border border-white/10">
              <span className="block text-4xl font-black text-emergency-yellow mb-2">24h / 365</span>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                Always available in emergencies.
              </p>
              <div className="mt-6 flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-bold uppercase tracking-widest text-green-500">Live Support Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Landing Footer Links */}
        <div className="border-t border-white/5 pt-10 mb-10 overflow-x-auto">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-6 flex-shrink-0">Service Areas & Locations</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {BUSINESS_DETAILS.locations.map(location => (
              <Link 
                key={location} 
                to={`/services?location=${location.toLowerCase()}`} 
                className="text-xs text-gray-500 hover:text-emergency-yellow transition-colors font-medium whitespace-nowrap"
              >
                {BUSINESS_DETAILS.primaryLocation} Recovery in {location}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500 font-medium text-center md:text-left">
            © {currentYear} {BUSINESS_DETAILS.name}. All Rights Reserved. 
            <span className="block md:inline mt-2 md:mt-0 md:ml-4 text-[10px] uppercase tracking-widest opacity-50">Fully Insured & Licensed Operators</span>
          </p>
          <div className="flex items-center space-x-6">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-600">Secure Payments</span>
            <div className="flex space-x-2 opacity-50 contrast-0 grayscale">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
