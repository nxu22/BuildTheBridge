// components/HeroStory.tsx
"use client";
import { motion } from "framer-motion";

export default function HeroStory() {
  return (
    <section className="py-12 lg:py-16 px-8 lg:px-16 xl:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="space-y-6 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-stone-700 leading-relaxed">
            As someone who has lived in both Canada and China, I saw a clear gap: incredible
            Canadian natural brands that Chinese consumers would love — but had no way to
            discover or buy.
          </p>
          <p className="text-lg text-stone-700 leading-relaxed">
            Chinese consumers on Xiaohongshu are actively searching for authentic, natural,
            sustainable products from abroad. They trust the influencers they follow. Your
            Canadian brand could be exactly what they&apos;re looking for.
          </p>
          <p className="text-lg text-stone-700 leading-relaxed">
            Build The Bridge was created to connect these dots — bringing Canadian brands into
            China through the right platforms, the right voices, and real on-the-ground
            relationships.
          </p>

          <div className="pt-8">
            <button
              onClick={() => window.location.href = "/why-build-bridge"}
              className="border-2 border-stone-700 text-stone-700 px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-stone-700 hover:text-white transition-all duration-300 focus:outline-none"
            >
              WHY BUILD THE BRIDGE
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
