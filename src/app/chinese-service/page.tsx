// app/chinese-service/page.tsx
"use client";

import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ChineseServicePage() {
  const content = {
      hero: {
        title: "Elevate Chinese Brands Internationally",
        subtitle:
          "Transform your Chinese brand into a respected global company.",
      },
      features: [
        {
          title: "Brand Transformation",
          desc: "Redesign your brand for international markets.",
        },
        {
          title: "Quality Positioning",
          desc: "Position your products as premium alternatives.",
        },
        {
          title: "Market Entry",
          desc: "Strategic entry into Western markets.",
        },
      ],
      process: [
        "Brand Assessment",
        "Identity Design",
        "Market Planning",
        "Global Launch",
      ],
      cta: {
        title: "Ready to Transform?",
        button: "Get Started",
        backButton: "← Back",
      },
    },
    zh: {
      hero: {
        title: "提升中国品牌国际地位",
        subtitle: "将您的中国品牌转变为受尊重的全球公司。",
      },
      features: [
        {
          title: "品牌转型",
          desc: "为国际市场重新设计您的品牌。",
        },
        {
          title: "品质定位",
          desc: "将您的产品定位为优质替代品。",
        },
        {
          title: "市场进入",
          desc: "策略性进入西方市场。",
        },
      ],
      process: ["品牌评估", "识别设计", "市场规划", "全球启动"],
      cta: {
        title: "准备转型？",
        button: "开始",
        backButton: "← 返回",
      },
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation language={language} onLanguageToggle={toggleLanguage} />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-warm-gradient">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="text-7xl mb-8">🇨🇳→🌍</div>
            <h1 className="text-4xl lg:text-5xl font-bold text-warm-primary mb-6">
              {t.hero.title}
            </h1>
            <p className="text-xl text-warm-secondary max-w-2xl mx-auto">
              {t.hero.subtitle}
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.features.map((feature, index) => (
                <div key={index} className="text-center p-6">
                  <h3 className="text-xl font-bold text-warm-primary mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-warm-secondary">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-warm">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-warm-primary text-center mb-12">
              {language === "en" ? "Our Process" : "我们的流程"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {t.process.map((step, index) => (
                <div
                  key={index}
                  className="text-center bg-white p-6 rounded-xl"
                >
                  <div className="w-12 h-12 bg-warm-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {index + 1}
                  </div>
                  <p className="font-medium text-warm-secondary">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-warm-secondary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-warm-primary mb-8">
              {t.cta.title}
            </h2>

            <div className="space-x-4">
              <Link
                href="/"
                className="btn-warm-secondary px-6 py-3 rounded-lg font-bold hover:transform hover:scale-105 transition-all duration-300 inline-block"
              >
                {t.cta.backButton}
              </Link>
              <Link
                href="/contact"
                className="btn-warm-primary px-6 py-3 rounded-lg font-bold hover:transform hover:scale-105 transition-all duration-300 inline-block"
              >
                {t.cta.button}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer language={language} />
    </div>
  );
}
