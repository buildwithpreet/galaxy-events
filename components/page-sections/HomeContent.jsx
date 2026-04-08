"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGem, FaMusic, FaCamera, FaGlassCheers, FaFire, FaLeaf, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import TestimonialSlider from "@/components/TestimonialSlider";

const showcaseServices = [
  { title: "Premium Weddings", icon: FaGem, desc: "End-to-end luxury wedding planning and execution.", image: "/photos/wedding-stage.jfif" },
  { title: "Sangeet Management", icon: FaMusic, desc: "Choreography, staging, and musical extravagance.", image: "/photos/wedding-2.jfif" },
  { title: "SFX & Fireworks", icon: FaFire, desc: "Spectacular pyrotechnics and safe cold fireworks stage entry.", image: "/photos/fireworks-array.jfif" },
  { title: "Venue Decor", icon: FaLeaf, desc: "Floral arrangements, thematic drapes, and ambient lighting.", image: "/photos/haldi-mehndi-decor.jfif" },
  { title: "Cinematic Photography", icon: FaCamera, desc: "Capturing your best moments with high-end equipment.", image: "/photos/wedding-4.jfif" },
  { title: "Birthday Celebrations", icon: FaGlassCheers, desc: "Themed birthday parties for kids and adults alike.", image: "/photos/birthday-celebrations.jfif" },
];

const galleryTeaserPhotos = [
  "/photos/wedding-stage.jfif",
  "/photos/wedding-2.jfif",
  "/photos/haldi-mehndi-decor.jfif",
  "/photos/stage-sfx-wedding.jfif",
  "/photos/bride-groom-entry.jfif",
  "/photos/golden-mirror-floor.jfif"
];

export default function HomeContent() {
  const scrollRef = useRef(null);

  const scroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <>
      <HeroSection />

      {/* Intro Section */}
      <section className="py-12 md:py-24 px-4 md:px-6 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-gold-gradient text-sm tracking-[0.3em] uppercase mb-4 font-bold">Our Story</h2>
              <h3 className="text-4xl md:text-6xl font-heading font-semibold text-white mb-8 leading-tight">
                Crafting Timeless <br /> Elegance in Hoshangabad
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6 font-light">
                At Galaxy Events, we don't just organize events; we design cinematic experiences. With over a decade of expertise, our dedicated team brings your vision to life—ensuring every detail is immaculately styled and perfectly timed.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
                From luxury wedding ceremonies and awe-inspiring SFX entries to grand birthday celebrations, we redefine premium event management in Central India.
              </p>
              <Link href="/about" className="inline-block border-b border-[#c9a84c] text-[#c9a84c] pb-1 uppercase tracking-widest text-sm hover:text-white hover:border-white transition-colors duration-300">
                Discover Our Heritage
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] lg:aspect-auto lg:h-[600px] rounded-sm overflow-hidden group shadow-[0_0_40px_rgba(201,168,76,0.1)]"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10 duration-500" />
              <Image
                src="/photos/wedding-3.jfif"
                alt="Elegant Indian Wedding Setup"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-16 md:py-24 bg-[#111111] overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 mb-8 md:mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-gold-gradient text-sm tracking-[0.3em] uppercase mb-4 font-bold">Our Expertise</h2>
            <h3 className="text-4xl md:text-6xl font-heading font-semibold text-white">Signature Services</h3>
          </motion.div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 mr-4">
              <button 
                onClick={() => scroll(-400)}
                className="p-3 border border-white/10 text-white hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all rounded-full"
                aria-label="Scroll Left"
              >
                <FaArrowLeft size={14} />
              </button>
              <button 
                onClick={() => scroll(400)}
                className="p-3 border border-white/10 text-white hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all rounded-full"
                aria-label="Scroll Right"
              >
                <FaArrowRight size={14} />
              </button>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href="/services" className="inline-block border border-white/20 px-6 py-3 text-sm tracking-widest text-white uppercase hover:bg-white hover:text-black transition-colors">
                View All
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Horizontal Scroll wrapper */}
        <div 
          ref={scrollRef}
          className="w-full overflow-x-auto pb-8 hide-scrollbar cursor-grab active:cursor-grabbing px-4 md:px-8 snap-x snap-mandatory"
        >
          <div className="flex space-x-6 w-max mx-auto md:mx-0">
             {showcaseServices.map((service, idx) => (
                <div key={idx} className="w-[300px] md:w-[400px] shrink-0 snap-center">
                  <ServiceCard 
                    title={service.title} 
                    description={service.desc} 
                    icon={service.icon} 
                    image={service.image}
                    delay={idx * 0.1}
                  />
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Gallery Teaser */}
      <section className="py-12 md:py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-gold-gradient text-sm tracking-[0.3em] uppercase mb-4 font-bold">Portfolio</h2>
            <h3 className="text-4xl md:text-6xl font-heading font-semibold text-white">Moments Captured</h3>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
            {galleryTeaserPhotos.map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative overflow-hidden group rounded-sm ${idx === 0 || idx === 3 ? "col-span-2 md:col-span-1 md:row-span-2" : "aspect-square"}`}
                style={{ minHeight: idx === 0 || idx === 3 ? "400px" : "auto" }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
                <Image
                  src={src}
                  alt={`Gallery teaser ${idx}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/gallery" className="inline-block border border-[#c9a84c] text-[#c9a84c] px-8 py-4 font-semibold uppercase tracking-widest text-sm hover:bg-[#c9a84c] hover:text-[#111111] transition-colors">
              Explore Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-20 bg-[#111111]">
        <div className="container mx-auto text-center px-4 md:px-6">
          <TestimonialSlider />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 md:py-24 bg-[#c9a84c]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-semibold text-[#111111] mb-6"
          >
            Ready to Plan Your Dream Event?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#1a1a1a] text-lg mb-10 max-w-2xl mx-auto"
          >
            Contact us today for a consultation. Let us transform your vision into a celebrated reality with unmatched elegance.
          </motion.p>
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
          >
            <Link href="/contact" className="inline-block bg-[#111111] text-white px-10 py-4 font-semibold uppercase tracking-widest hover:bg-[#1f1f1f] shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
              Contact Us Now
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
