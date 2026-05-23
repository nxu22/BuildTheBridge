// components/HeroBrand.tsx
"use client";
import { motion } from "framer-motion";

export default function HeroBrand() {
  const handleContactUs = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex items-center justify-center px-8 lg:px-16 xl:px-24 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-24 items-center">
          {/* Left Side - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden">
              <img
                src="/image/hero-brand.png"
                alt="Canadian natural products"
                className="w-full h-[600px] object-cover"
              />
            </div>
          </motion.div>

          {/* Right Side - Brand Statement */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 leading-tight">
                We help Canadian brands{" "}
                <em className="italic text-stone-600">reach Chinese consumers</em>{" "}
                through{" "}
                <em className="italic text-stone-600">Xiaohongshu and trusted influencers.</em>
              </h2>
            </div>

            <div className="pt-4">
              <button
                onClick={handleContactUs}
                className="border-2 border-stone-800 text-stone-800 px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-stone-800 hover:text-white transition-all duration-300 focus:outline-none"
              >
                CONTACT US
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
