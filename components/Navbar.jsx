"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { LuMenu, LuX } from "react-icons/lu";
import { cn } from "@/utils/cn";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Only transparent at the very top of the home page
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled || !isHome || mobileMenuOpen
          ? "glass-panel py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="z-50 relative group">
          <h1 className="text-2xl md:text-3xl font-heading font-semibold text-[#c9a84c] tracking-wider uppercase group-hover:scale-105 transition-transform duration-500">
            Galaxy Events
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-xs font-semibold tracking-[0.2em] uppercase transition-all relative group py-2",
                pathname === link.href ? "text-[#c9a84c]" : "text-gray-400 hover:text-white"
              )}
            >
              {link.name}
              <span 
                className={cn(
                  "absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#c9a84c] transition-all duration-500 ease-out group-hover:w-full",
                  pathname === link.href && "w-full shadow-[0_0_10px_#c9a84c]"
                )}
              />
            </Link>
          ))}
          <Link
            href="/contact"
            className="shimmer-bg bg-[#c9a84c] hover:bg-[#dac175] text-[#111111] font-bold py-2.5 px-8 rounded-sm uppercase tracking-[0.15em] text-xs transition-all duration-300 transform hover:-translate-y-1 shadow-[0_4px_20px_0_rgba(201,168,76,0.3)]"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <LuX size={28} /> : <LuMenu size={28} />}
        </button>

      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="md:hidden fixed inset-0 w-full h-screen z-40 flex flex-col items-center justify-center"
          >
            {/* Luxury Background for Menu */}
            <div className="absolute inset-0 bg-[#0a0a0a] z-0" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#c9a84c]/5 via-transparent to-[#c9a84c]/5 z-0" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 z-0" />

            <div className="relative z-10 flex flex-col items-center space-y-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "text-3xl font-heading font-medium tracking-widest uppercase transition-colors",
                      pathname === link.href ? "text-[#c9a84c]" : "text-gray-300 hover:text-white"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + navLinks.length * 0.1 }}
                className="pt-4"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-[#c9a84c] text-[#111111] font-semibold py-4 px-10 rounded-sm uppercase tracking-widest text-lg shadow-xl"
                >
                  Book Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
