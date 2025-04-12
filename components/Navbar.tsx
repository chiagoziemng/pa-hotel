// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/rooms", label: "Rooms" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-[#1A2A44] text-white sticky top-0 z-20 shadow-lg">
      <nav className="container mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="font-cinzel text-3xl font-bold text-[#D4AF37] tracking-wide"
        >
          Pameec Luxury
        </Link>
        <button
          className="md:hidden focus:outline-none text-[#D4AF37]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
        <ul className="hidden md:flex space-x-10 font-lora">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-base uppercase tracking-wider text-white hover:text-[#D4AF37] transition-colors duration-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-[#1A2A44] md:hidden shadow-md">
            <ul className="flex flex-col items-center py-6 space-y-6 font-lora">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-base uppercase tracking-wider text-white hover:text-[#D4AF37] transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}