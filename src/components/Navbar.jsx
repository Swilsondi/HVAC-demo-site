import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-white shadow-md"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=48&q=80" alt="Logo" className="h-10 w-10 rounded-full" />
          <span className="font-bold text-xl text-blue-700 tracking-tight">HVAC & Plumbing Pro</span>
        </Link>
        <div className="flex gap-6">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 ${location.pathname === link.path ? 'text-blue-700 underline' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}