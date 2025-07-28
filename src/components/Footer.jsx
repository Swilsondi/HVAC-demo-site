import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-6 mt-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <span className="text-sm">&copy; {new Date().getFullYear()} HVAC & Plumbing Pro. All rights reserved.</span>
        <span className="text-sm mt-2 md:mt-0">Designed for demo purposes.</span>
      </div>
    </footer>
  );
}