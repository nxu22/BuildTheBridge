// app/chinese-service/page.tsx
"use client";

import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ChineseServicePage() {
  const content = {
    hero: {
      title: "Elevate Chinese Brands Internationally",
      subtitle: "Transform your Chinese brand into a respected global company.",
    },
    features: [
      { title: "Brand Transformation", desc: "Redesign your brand for international markets." },
      { title: "Quality Positioning", desc: "Position your products as premium alternatives." },
      { title: "Market Entry", desc: "Strategic entry into Western markets." },
    ],
    process: ["Brand Assessment", "Identity Design", "Market Planning", "Global Launch"],
    cta: { title: "Ready to Transform?", button: "Get Started", backButton: "← Back" },
  };

  return (
    <div className="min-h-screen text-stone-800">
      <Navigation />
      <main>
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="text-7xl mb-8">🇨🇳→🌍</div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">{content.hero.title}</h1>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">{content.hero.subtitle}</p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {content.features.map((feature, index) => (
                <div key={index} className="text-center p-6">
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-stone-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {content.process.map((step, index) => (
                <div key={index} className="text-center bg-white/60 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-stone-800 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {index + 1}
                  </div>
                  <p className="font-medium text-stone-600">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">{content.cta.title}</h2>
            <div className="space-x-4">
              <Link href="/" className="border-2 border-stone-800 text-stone-800 px-6 py-3 font-bold hover:bg-stone-800 hover:text-white transition-all inline-block">
                {content.cta.backButton}
              </Link>
              <Link href="/#contact" className="bg-stone-800 text-white px-6 py-3 font-bold hover:bg-stone-700 transition-all inline-block">
                {content.cta.button}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
