// app/canadian-service/page.tsx
"use client";

import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function CanadianServicePage() {
  const content = {
      hero: {
        title: "Scale Your Canadian Brand Globally",
        subtitle: "Transform your small Canadian business into a global brand.",
      },
      features: [
        {
          title: "Market Research",
          desc: "Find the best international markets for your brand.",
        },
        {
          title: "Brand Positioning",
          desc: "Use your Canadian heritage as a competitive advantage.",
        },
        {
          title: "International Presence",
          desc: "Build your digital presence worldwide.",
        },
      ],
      process: [
        "Market Analysis",
        "Brand Strategy",
        "Digital Setup",
        "Global Launch",
      ],
      cta: {
        title: "Ready to Go Global?",
        button: "Get Started",
        backButton: "← Back",
      },
    },
    zh: {
      hero: {
        title: "助力加拿大品牌走向全球",
        subtitle: "将您的加拿大小企业转型为全球品牌。",
      },
      features: [
        {
          title: "市场研究",
          desc: "为您的品牌找到最佳的国际市场。",
        },
        {
          title: "品牌定位",
          desc: "将您的加拿大传统作为竞争优势。",
        },
        {
          title: "国际存在",
          desc: "在全球范围内建立您的数字存在。",
        },
      ],
      process: ["市场分析", "品牌策略", "数字搭建", "全球启动"],
      cta: {
        title: "准备走向全球？",
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
            <div className="text-7xl mb-8">🇨🇦→🌍</div>
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
