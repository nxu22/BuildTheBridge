// app/cases/page.tsx
"use client";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function CasesPage() {
  const [language, setLanguage] = useState<"en" | "zh">("en");
  const [currentCase, setCurrentCase] = useState(0);

  const content = {
    en: {
      title: "Success Cases",
      cases: [
        {
          title:
            "Case Study 1: GeoSkincare - The Rise of a New Zealand Niche Skincare Brand",
          background: {
            title: "Brand Background:",
            points: [
              "A niche skincare brand founded by New Zealand entrepreneur Penny Vergeest 20 years ago",
              "Has production facilities in New Zealand and operates an official store on Tmall Global",
            ],
          },
          achievements: {
            title: "Remarkable Results:",
            points: [
              "Completed Series E funding, securing 350 million RMB investment",
              "Total funding raised by GeoSkincare has reached 600-700 million RMB to date",
              "New product 'Spring Water Bomb Mask' became the first product on Tmall to achieve 1 million units sold in a single month in 2020",
            ],
          },
          strategy: {
            title: "Success Strategy:",
            points: [
              "Established dedicated operational teams covering almost all major e-commerce platforms including Tmall, JD.com, Vipshop, and Pinduoduo",
              "Invested 30-40 million RMB in Taobao live streaming, Douyin, TV reality shows, and elevator advertising campaigns",
              "Opened single-brand cosmetics stores offering beauty value-added products and spa services",
            ],
          },
        },
        {
          title:
            "Case Study 2: Lulujo Baby - Global Success of a Canadian Mom Entrepreneur",
          background: {
            title: "Brand Background:",
            points: [
              "Founded by Dawn Pottier, a mother from Fredericton, New Brunswick, in 2007, initially producing only handmade baby carriers",
              "By 2016, the brand had established itself in major Canadian retail chains but had never sold internationally",
            ],
          },
          achievements: {
            title: "China Market Journey:",
            points: [
              "2016: Limited to North American market only",
              "2017: Decided to enter China after visiting Alibaba headquarters",
              "2018: Became a leading brand in the mother-baby category within one year on Tmall",
              "Current status: Ships directly from Canada while maintaining strong brand recognition in China",
            ],
          },
          strategy: {
            title: "Key Success Strategies:",
            points: [
              "Authentic Brand Story: The 'mom designing for moms' narrative strongly resonated with Chinese mothers who value genuine, personal stories behind products",
              "Cultural Adaptation: Discovered that North American popular floral patterns lacked appeal to Chinese consumers and quickly adjusted designs to match local aesthetic preferences",
              "Premium Packaging Strategy: Recognized that in China's gift culture, packaging design is almost as important as the product itself, leading to major packaging upgrades",
              "Quality First: Emphasized product safety and quality, which are key concerns for Chinese parents buying baby products",
            ],
          },
        },
        {
          title:
            "Case Study 3: Nanushka - Sustainable Success of a Hungarian Fashion Brand",
          background: {
            title: "Brand Background:",
            points: [
              "This Hungarian sustainable fashion brand has gained international recognition, with celebrities like Michelle Obama and Billie Eilish wearing their designs",
              "The brand entered Tmall in October this year while opening a flagship store in Shanghai",
            ],
          },
          achievements: {
            title: "Market Insights:",
            points: [
              "The CEO's most surprising discovery: 'Frankly, I was shocked by how knowledgeable Chinese consumers are about sustainability topics - far more than consumers in other markets, even Western markets.'",
            ],
          },
          strategy: {
            title: "Success Factors:",
            points: [
              "Sustainability Leadership: Chinese consumers' advanced understanding of sustainable fashion created perfect market fit",
              "Premium Brand Positioning: Celebrity endorsements effectively translated to China's luxury market",
              "Integrated Strategy: Combined strong Tmall online presence with premium physical retail experience",
            ],
          },
        },
      ],
    },
    zh: {
      title: "成功案例",
      cases: [
        {
          title: "案例一：GeoSkincare - 新西兰小众护肤品牌的逆袭",
          background: {
            title: "品牌背景：",
            points: [
              "由新西兰人Penny Vergeest于20年前创立的小众护肤品牌",
              "在新西兰设有生产工厂，在天猫全球开设官方店铺",
            ],
          },
          achievements: {
            title: "惊人成绩：",
            points: [
              "完成E轮融资，获得3.5亿元人民币投资",
              "迄今为止，GeoSkincare已获得6-7亿元人民币的总融资",
              "新产品'泉水炸弹面膜'在2020年成为天猫首个月销售量达到100万件的产品",
            ],
          },
          strategy: {
            title: "成功策略：",
            points: [
              "建立自有运营团队，覆盖天猫、京东、唯品会、拼多多等几乎所有主流电商平台",
              "投资3000-4000万元进行淘宝直播、抖音以及电视真人秀和电梯广告推广",
              "开设单品牌化妆品店，提供美容增值产品和水疗服务",
            ],
          },
        },
        {
          title: "案例研究2：Lulujo Baby——加拿大妈妈企业家的全球成功",
          background: {
            title: "品牌背景：",
            points: [
              "来自新不伦瑞克省弗雷德里克顿的母亲唐·波蒂尔（Dawn Pottier）于2007年创立了Lulujo Baby，最初只生产手工婴儿背带",
              "到2016年，该品牌已在加拿大各大零售连锁店站稳脚跟，但从未在国际市场销售",
            ],
          },
          achievements: {
            title: "中国市场之旅：",
            points: [
              "2016年：仅限于北美市场",
              "2017年：参观阿里巴巴总部后，决定进入中国",
              "2018年：入驻天猫一年，跻身母婴品类头部品牌",
              "现状：直接从加拿大发货，同时在中国保持强大的品牌知名度",
            ],
          },
          strategy: {
            title: "关键成功策略：",
            points: [
              "真实的品牌故事：'妈妈为妈妈设计'的叙事引起了中国妈妈的强烈共鸣，她们重视产品背后真实的、个性化的风格",
              "文化适应：发现北美流行的花卉图案在中国消费者看来缺乏吸引力。快速调整设计以符合当地审美偏好",
              "高端包装策略：认识到在中国礼品文化中，包装设计几乎与产品本身一样重要，从而带来包装的重大升级",
              "质量第一：强调产品安全和质量，这是中国父母购买婴儿产品的关键关注点",
            ],
          },
        },
        {
          title: "案例研究3：Nanushka——匈牙利时尚品牌的可持续成功",
          background: {
            title: "品牌背景：",
            points: [
              "这个匈牙利可持续时尚品牌已获得国际认可，米歇尔·奥巴马和比莉·艾利什等名人都曾穿着他们的设计",
              "今年10月，该品牌入驻天猫，同时在上海开设了一家旗舰店",
            ],
          },
          achievements: {
            title: "市场启示：",
            points: [
              "这位首席执行官最惊人的发现是：'坦率地说，我对中国消费者对可持续发展话题的了解程度感到震惊——远远高于其他市场，甚至西方市场的消费者。'",
            ],
          },
          strategy: {
            title: "成功因素：",
            points: [
              "可持续发展领导力：中国消费者对可持续时尚的先进理解创造了完美的市场契合度",
              "高端品牌定位：明星代言有效转化为中国奢侈品市场",
              "整合战略：将强大的天猫线上业务与高端实体零售体验相结合",
            ],
          },
        },
      ],
    },
  };

  const t = content[language];
  const totalCases = t.cases.length;

  const handleLanguageToggle = () => {
    setLanguage(language === "en" ? "zh" : "en");
  };

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % totalCases);
  };

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + totalCases) % totalCases);
  };

  const currentCaseData = t.cases[currentCase];

  return (
    <>
      <Navigation language={language} onLanguageToggle={handleLanguageToggle} />

      <div className="min-h-screen" style={{ backgroundColor: "#f5f2ed" }}>
        {/* Header Section */}
        <section className="pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h1
              className="text-6xl font-light italic text-amber-900 mb-16"
              style={{ fontFamily: "serif" }}
            >
              {t.title}
            </h1>
          </div>
        </section>

        {/* Case Study Section with Navigation */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="relative">
              {/* Navigation Arrows */}
              <button
                onClick={prevCase}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full w-12 h-12 flex items-center justify-center text-amber-900 transition-all duration-200 shadow-sm"
                aria-label="Previous case"
              >
                ‹
              </button>

              <button
                onClick={nextCase}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-16 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full w-12 h-12 flex items-center justify-center text-amber-900 transition-all duration-200 shadow-sm"
                aria-label="Next case"
              >
                ›
              </button>

              {/* Case Study Card */}
              <div className="bg-white bg-opacity-50 rounded-lg p-8 shadow-sm transition-all duration-300">
                <div className="mb-8">
                  <h2 className="text-2xl font-medium text-amber-900">
                    {currentCaseData.title}
                  </h2>
                </div>

                {/* Brand Background */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-amber-800 mb-4">
                    {currentCaseData.background.title}
                  </h3>
                  <ul className="space-y-2">
                    {currentCaseData.background.points.map((point, index) => (
                      <li
                        key={index}
                        className="text-amber-800 leading-relaxed"
                      >
                        • {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-amber-800 mb-4">
                    {currentCaseData.achievements.title}
                  </h3>
                  <ul className="space-y-2">
                    {currentCaseData.achievements.points.map((point, index) => (
                      <li
                        key={index}
                        className="text-amber-800 leading-relaxed"
                      >
                        • {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Success Strategy */}
                <div>
                  <h3 className="text-lg font-medium text-amber-800 mb-4">
                    {currentCaseData.strategy.title}
                  </h3>
                  <ul className="space-y-2">
                    {currentCaseData.strategy.points.map((point, index) => (
                      <li
                        key={index}
                        className="text-amber-800 leading-relaxed"
                      >
                        • {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: totalCases }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCase(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentCase
                        ? "bg-amber-900"
                        : "bg-amber-300 hover:bg-amber-500"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer language={language} />
    </>
  );
}
