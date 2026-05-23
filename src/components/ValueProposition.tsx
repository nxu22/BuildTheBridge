"use client";

export default function ValueProposition() {
  return (
    <section className="py-16 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-stone-800">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-12 leading-tight">
              How We Get Your Brand Into China
            </h1>
            <p className="text-xl lg:text-2xl leading-relaxed mb-12 opacity-90 max-w-lg font-semibold text-stone-600">
              From Xiaohongshu content strategy to influencer seeding — we handle the
              connections so Chinese consumers can discover, trust, and buy your brand.
            </p>
            <button
              onClick={() => window.location.href = "/our-approach"}
              className="border-2 border-stone-800 text-stone-800 px-8 py-4 text-lg font-medium tracking-wide hover:bg-stone-800 hover:text-white transition-all duration-300 focus:outline-none"
            >
              SEE OUR APPROACH
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src="/image/value-prop.png"
                alt="How we get your brand into China"
                className="w-full h-auto object-cover"
                style={{ minHeight: "500px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
