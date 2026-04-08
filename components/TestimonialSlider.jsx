"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    quote: "Galaxy Events turned our dream wedding into reality. The attention to detail, especially the stage decor and SFX entry, was truly cinematic.",
    author: "Rahul & Priya",
    event: "Wedding Celebration"
  },
  {
    quote: "The seamless execution and the premium feel of the setup left all our guests speechless. It was an absolute delight working with the team.",
    author: "Neha Sharma",
    event: "Ring Ceremony"
  },
  {
    quote: "From the grand entry with pyrotechnics to the elegant floral arrangements, everything was spectacular. Highly recommend for any major event.",
    author: "Amit Patel",
    event: "Anniversary Event"
  }
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[#c9a84c]/20">
        <FaQuoteLeft className="text-5xl md:text-8xl" />
      </div>
      
      <div className="relative min-h-[300px] md:h-[200px] flex items-center justify-center mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center w-full"
          >
            <p className="text-lg md:text-3xl font-heading font-medium text-white italic leading-snug mb-8">
              "{testimonials[currentIndex].quote}"
            </p>
            <div className="flex flex-col items-center">
              <span className="text-[#c9a84c] font-semibold text-lg tracking-wide uppercase">
                {testimonials[currentIndex].author}
              </span>
              <span className="text-gray-500 text-sm mt-1">
                {testimonials[currentIndex].event}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-3 mt-8">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === currentIndex
                ? "w-8 h-2 bg-[#c9a84c]"
                : "w-2 h-2 bg-gray-600 hover:bg-gray-400"
            }`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
