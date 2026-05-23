"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full backdrop-blur-sm z-50 border-b border-stone-200/60" style={{ backgroundColor: "rgba(245,240,234,0.85)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            href="/"
            className="text-2xl font-black tracking-tight text-black hover:opacity-80 transition-opacity"
          >
            BUILD THE BRIDGE
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            <a href="/our-approach" className="font-medium hover-underline text-black">
              SERVICES
            </a>
            <Link href="/#contact" className="font-medium hover-underline text-black">
              CONTACT
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-6 py-6 space-y-6">
              <a href="/our-approach" className="block font-bold text-lg text-black">
                SERVICES
              </a>
              <Link href="/#contact" className="block font-bold text-lg text-black">
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
