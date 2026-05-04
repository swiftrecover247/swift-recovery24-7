import { Phone, MessageSquare, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BUSINESS_DETAILS } from "../constants";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-emergency-yellow p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
              <Phone className="w-6 h-6 text-emergency-dark fill-emergency-dark" />
            </div>
            <div>
              <span className="text-xl font-display font-extrabold tracking-tighter uppercase block leading-none">
                Swift<span className="text-emergency-red">Recover</span>
              </span>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none">
                24/7 National Service
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold uppercase tracking-wider hover:text-emergency-red transition-colors ${
                  location.pathname === link.path ? "text-emergency-red" : "text-gray-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`tel:${BUSINESS_DETAILS.primaryPhone.replace(/\s/g, "")}`}
              className="bg-emergency-red text-white px-6 py-3 rounded-full font-bold text-sm uppercase tracking-widest flex items-center shadow-lg hover:bg-red-600 transition-all active:scale-95 animate-pulse-red"
            >
              <Phone className="w-4 h-4 mr-2 fill-current" />
              Call Now
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-emergency-red focus:outline-none transition-colors"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-50 absolute w-full shadow-xl">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-lg font-bold uppercase tracking-wide ${
                  location.pathname === link.path ? "text-emergency-red" : "text-gray-800"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 grid grid-cols-2 gap-4">
              <a
                href={`tel:${BUSINESS_DETAILS.primaryPhone.replace(/\s/g, "")}`}
                className="flex items-center justify-center bg-emergency-red text-white py-4 rounded-xl font-black text-lg uppercase shadow-xl"
              >
                <Phone className="w-5 h-5 mr-2 fill-current" />
                Call
              </a>
              <a
                href={`https://wa.me/${BUSINESS_DETAILS.whatsapp1.replace(/\+/g, "")}`}
                className="flex items-center justify-center bg-green-500 text-white py-4 rounded-xl font-black text-lg uppercase shadow-xl"
              >
                <MessageSquare className="w-5 h-5 mr-2 fill-current" />
                WA
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
