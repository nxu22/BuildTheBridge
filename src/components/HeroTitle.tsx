// components/HeroTitle.tsx
"use client";
import { motion } from "framer-motion";

export default function HeroTitle() {
  return (
    <section
      className="flex items-center justify-center px-8 lg:px-16 xl:px-24 pt-40 pb-24 lg:pt-52 lg:pb-32"
      style={{ backgroundColor: "transparent" }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <h1 className="text-3xl lg:text-5xl font-black text-stone-800 leading-tight">
            Bringing Canada&apos;s natural brands to China.
          </h1>

          <motion.p
            className="text-lg lg:text-xl text-stone-500 font-medium max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Build The Bridge helps Canadian small businesses with natural, sustainable
            products enter and grow in the Chinese market — through Xiaohongshu marketing,
            trusted influencer partnerships, and real connections on the ground in China.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
