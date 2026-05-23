// app/why-build-bridge/page.tsx
"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function WhyBuildBridgePage() {
  const [language, setLanguage] = useState<"en" | "zh">("en");

  const content = {
    en: {
      title: "Why Sustainable Brands Need a Market Bridge?",
      paragraphs: [
        "Through thoughtful observation and experience, a unique and profound opportunity has emerged between two worlds. In China, consumers are increasingly concerned about chemical additives and environmental pollution, yearning for genuinely pure, natural imported products, yet the market lacks boutique brands that truly understand and respond to their values. In Canada, consumers have deep environmental concerns and support brands with meaningful values, but the market lacks innovative choices from other cultural backgrounds that resonate with their environmental consciousness.",
        "This seemingly parallel demand creates a perfect convergence point. Consumers in both markets are seeking the same thing: authenticity, quality, and value resonance. The limitations of a single market often constrain niche brands with grand ideals, while the combination of Chinese and Canadian markets not only provides the scale necessary for sustainable growth, but more importantly, creates the possibility of cultural dialogue—allowing brands to showcase their values on a broader stage while maintaining their unique character.",
        "This is a special historical moment. The demand for sustainable, authentic products is experiencing unprecedented growth simultaneously in both markets. In China, 500 million middle-class consumers are seeking higher quality lifestyles through conscious purchasing decisions, a new generation of consumers values authenticity over mass market marketing, actively seeking brands that align with personal values, while mature e-commerce infrastructure provides flexible market entry opportunities for suitable brands. In Canada, 70% of consumers are willing to pay premium prices for eco-friendly products that reflect their environmental values, government policies actively support sustainable business development and international trade partnerships, and the consumer base is known for high brand loyalty and enthusiasm for discovering innovative, purpose-driven companies.",
        "Digital infrastructure has matured to support seamless international commerce, while niche categories remain relatively unmonopolized by large corporate giants. Both governments actively encourage sustainable business practices and cross-border trade partnerships. This window of opportunity for thoughtful brands is opening, but it won't remain so wide forever. Consumers in both countries are tired of corporate manipulation and empty marketing—they seek brands with genuine beliefs, transparent practices, and unwavering commitment to quality.",
        "Build The Bridge's vision is to become a platform different from traditional marketing agencies. Drawing on lived experience in both China and Canada combined with technical background, the platform is committed to finding solutions that are both efficient and genuine. The goal is to better understand the needs of both markets, develop methods that help reduce costs while improving effectiveness, focus on the core mission of China-Canada bridge building, and ultimately hope to solve real connection challenges.",
        "For any brand passionate about sustainability and committed to product quality, Build The Bridge would be delighted to learn more. Regardless of brand size or development stage, if there's interest in exploring new market opportunities, all are welcome to start a relaxed conversation to see if there might be suitable collaboration possibilities.",
        "Build The Bridge offers more than just services—it offers genuine partnership to help brands grow sustainably in two promising markets while maintaining the authentic character that makes each brand unique. The process begins with an honest conversation about brand potential. No obligations, just an honest dialogue about possibilities. The opportunity exists to build a China-Canada bridge together, creating a beautiful future that connects two worlds and delivers authentic value.",
      ],
    },
    zh: {
      title: "为什么可持续品牌需要市场桥梁？",
      paragraphs: [
        "经过深思熟虑的观察与体验，我们发现了两个世界之间一个独特而深刻的机遇。在中国，消费者对化学添加剂和环境污染的担忧日益加深，他们渴望获得真正纯净、天然的进口产品，但市场上却缺乏那些能够真正理解并回应其价值追求的精品品牌。而在加拿大，消费者对环境保护有着深刻的关切，他们支持那些承载着有意义价值观的品牌，然而市场却缺乏来自其他文化背景、能够与其环保意识产生共鸣的创新选择。",
        "这种看似平行的需求，恰恰构成了一个绝佳的契合点。两个市场的消费者都在寻求同样的东西：真实性、品质感与价值共鸣。单一市场的局限性往往制约着具有远大理想的小众品牌，而中国与加拿大市场的结合，不仅提供了实现可持续增长所必需的规模，更重要的是，它创造了一种文化对话的可能性——让品牌在保持其独特个性的同时，能够在更广阔的舞台上展现其价值。",
        "中国消费者珍视工艺品质与引人入胜的品牌叙事，他们寻求值得信赖的真正安全、天然的家庭产品，渴望那些具有引人入胜、真实故事且能产生个人共鸣的品牌，希望发现体现其品味和价值观的独特产品。而加拿大消费者则更注重可持续性与功能卓越，他们期望与其环保价值观相符的生态友好选择，追求提供卓越性能的优质产品，支持对世界产生积极贡献的有意义品牌。同一款经过深思熟虑创造的产品，能够满足两个不同但同样热忱的消费群体的需求，这种和谐共鸣正是我们所追求的。",
        "我们正处在一个特殊的历史时刻。对可持续、真实产品的需求正在两个市场中同时经历前所未有的增长。在中国，五亿中产阶级消费者正在通过有意识的购买决策寻求更高品质的生活方式，新一代消费者更看重真实性而非大众市场营销，积极寻求与个人价值观相符的品牌，而成熟的电商基础设施为合适的品牌提供了灵活的市场进入机会。在加拿大，百分之七十的消费者愿意为体现其环保价值观的生态友好产品支付更高价格，政府政策积极支持可持续商业发展和国际贸易伙伴关系，消费群体以品牌忠诚度高而著称，对发现创新、有目标导向的公司充满热情。",
        "数字基础设施已经成熟，能够支持无缝的国际商务，而小众品类仍相对不受大型企业巨头的垄断。两国政府都积极鼓励可持续商业实践和跨境贸易伙伴关系。这扇为有思想品牌而开的机遇之窗正在敞开，但它不会永远如此宽广。两国消费者都已厌倦企业操控和空洞营销，他们寻求拥有真诚信念、透明实践和对品质不懈承诺的品牌。",
        "我们并非传统意义上的营销机构。我们带来的是来自两种文化的真实生活体验，结合技术专长，致力于创造既高效又真实的解决方案，尊重每个合作品牌的独特品格。我们深刻理解什么能真正打动两个市场的消费者，拥有构建定制系统和解决方案的技术能力以降低成本同时提升效果，专注于中加桥梁建设而非分散精力于多个市场，最重要的是，我们致力于解决真实问题、创造有意义的联系，而非仅仅追求收入。",
        "如果您的品牌体现着清晰的可持续价值观，创造着卓越品质的产品，并寻求将其积极影响力扩展至更广阔的疆域，我们诚挚地邀请您探索这些可能性。那些拥有指导每个决策的真实可持续价值观、对产品品质的不妥协承诺、将积极影响扩展至现有边界之外的愿望，以及准备拥抱深思熟虑的国际增长的品牌，正是我们寻求的合作伙伴。",
        "我们提供的不仅仅是服务，而是真正的伙伴关系——帮助您在两个充满希望的市场中可持续地成长，同时保持那使您的品牌独特的真实品格。让我们从一场真诚的对话开始，探讨您品牌的潜力。没有义务，只是关于可能性的诚实对话。让我们一起讨论构建您的中加桥梁，创造一个连接两个世界、传递真实价值的美好未来。",
      ],
    },
  };

  const t = content[language];

  const handleLanguageToggle = () => {
    setLanguage(language === "en" ? "zh" : "en");
  };

  return (
    <>
      <Navigation language={language} onLanguageToggle={handleLanguageToggle} />
      <div className={styles.bridgePage}>
        {/* Header */}
        <header className={styles.bridgeHeader}>
          <div className={styles.bridgeHeaderContent}>
            <h1 className={styles.bridgeMainTitle}>{t.title}</h1>
            <div className={styles.ornateDivider}>
              <div className={styles.ornateDividerLine}></div>
              <div className={styles.ornateDividerSymbol}>❋</div>
              <div className={styles.ornateDividerLine}></div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className={styles.bridgeMain}>
          <article className={styles.bridgeArticle}>
            <section className={styles.bridgeSection}>
              {t.paragraphs.map((paragraph, index) => (
                <p key={index} className={styles.bridgeContentText}>
                  {paragraph}
                </p>
              ))}
            </section>
          </article>
        </main>
      </div>
      <Footer language={language} />
    </>
  );
}
