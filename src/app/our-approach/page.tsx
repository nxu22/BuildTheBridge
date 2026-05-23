// app/our-approach/page.tsx
"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function OurApproachPage() {
  const [language, setLanguage] = useState<"en" | "zh">("en");

  const content = {
    en: {
      title: "What Build the Bridge Can Do for You",
      subtitle:
        "Build the Bridge is exploring how to help Canadian brands enter the Chinese market",
      introduction:
        "This service model is still continuously improving, but our core advantages are clear: cross-cultural background + technical capabilities + deep understanding of both markets.",

      steps: [
        {
          number: "01",
          title: "Brand Assessment and Market Analysis",
          subtitle: "Core Services Build the Bridge Can Provide",
          sections: [
            {
              title: "Product Feasibility Research",
              items: [
                "Confirm whether products meet Chinese cross-border e-commerce policy requirements",
                "Analyze product potential advantages and opportunities in the Chinese market",
                "Research target customer groups and market positioning",
              ],
            },
            {
              title: "Brand Localization Strategy",
              items: [
                "Research how to effectively communicate brand value to Chinese consumers",
                "Analyze market potential of selling points like 'Made in Canada'",
                "Provide localized recommendations for product presentation",
              ],
            },
            {
              title: "Market Research Services",
              items: [
                "Analyze performance of similar products on major e-commerce platforms",
                "Research purchasing habits and preferences of target consumer groups",
                "Develop preliminary pricing and market entry strategies",
              ],
            },
          ],
        },
        {
          number: "02",
          title: "Assist in Building Chinese Partnership Network",
          subtitle: "If You Need Support in This Area",
          sections: [
            {
              title: "Tmall Agent Connections",
              items: [
                "Use cross-cultural background to help screen and evaluate agents",
                "Assist in understanding cooperation models and terms",
                "Provide communication and negotiation support",
              ],
            },
            {
              title: "Logistics Solutions",
              items: [
                "Research various bonded warehouse and logistics options",
                "Assist in understanding cross-border logistics processes",
              ],
            },
            {
              title: "Payment Solution Consulting",
              items: [
                "Analyze different cross-border payment solutions",
                "Assist in contacting and evaluating service providers",
              ],
            },
          ],
          role: {
            title: "Build the Bridge's Role at This Stage",
            items: [
              "Cultural bridge and communication coordination",
              "Information gathering and solution comparison",
              "Decision support and risk assessment",
            ],
          },
        },
        {
          number: "03",
          title: "Technical System Support (Based on Needs)",
          subtitle: "Technical Services Build the Bridge Can Provide",
          sections: [
            {
              title: "Management System Development",
              items: [
                "Order tracking and management tools",
                "Basic data analysis systems",
                "Inventory management solutions",
              ],
            },
            {
              title: "Business Analysis Tools",
              items: [
                "Sales data organization and analysis",
                "Regular business report generation",
                "Key metrics monitoring",
              ],
            },
          ],
          note: "Technical Capability Note: Based on full-stack development background, Build the Bridge can develop corresponding management tools according to specific needs, but complexity will be determined based on actual project circumstances.",
        },
        {
          number: "04",
          title: "Market Testing Assistance",
          subtitle: "Support Build the Bridge Provides During Testing Phase",
          items: [
            "Assist in developing test plans and success metrics",
            "Provide translation and localization of product descriptions",
            "Help understand platform rules and operational processes",
            "Collect and analyze test data and user feedback",
          ],
        },
        {
          number: "05",
          title: "Expansion Planning",
          subtitle: "Based on test results, Build the Bridge can assist with:",
          items: [
            "Evaluate platform expansion opportunities",
            "Optimize existing operational processes",
            "Plan product line expansion strategies",
          ],
        },
      ],

      serviceValue: {
        title: "Build the Bridge's Service Value",
        subtitle: "Definite Value We Can Provide:",
        items: [
          "Genuine cross-cultural understanding and communication capabilities",
          "In-depth market research and analysis",
          "Flexible technical development support",
          "End-to-end project coordination and management",
        ],
        characteristics: {
          title: "Service Characteristics",
          items: [
            "Focus on practical feasibility, not unrealistic promises",
            "Phased progression with controllable risks",
            "Customized solutions based on each brand's specific situation",
            "Maintain transparent communication and progress reporting",
          ],
        },
      },

      cooperation: {
        title: "Cooperation Methods",
        flexible: {
          title: "Flexible Cooperation Models",
          items: [
            "Can start cooperation from any stage",
            "Decide next steps based on project progress",
            "Service content can be adjusted according to actual needs",
          ],
        },
        risk: {
          title: "Risk Management",
          items: [
            "Clear deliverables for each stage",
            "Phased evaluation and adjustment opportunities",
            "Reasonable expectation management and risk alerts",
          ],
        },
      },

      philosophy:
        "Build the Bridge is exploring the best pathways to help Canadian brands enter the Chinese market. Like successful cross-border cases, the key lies in finding the right way to connect two markets—each brand's situation is unique, so we prefer to continuously refine our service model through practice, designing the most suitable cooperation plan based on specific needs rather than applying fixed templates.",
    },
    zh: {
      title: "Build the Bridge 能为您做什么",
      subtitle: "Build the Bridge正在探索如何帮助加拿大品牌进入中国市场",
      introduction:
        "这个服务模式还在不断完善中，但核心优势很明确：跨文化背景 + 技术能力 + 对两国市场的深入理解。",

      steps: [
        {
          number: "01",
          title: "品牌评估和市场分析",
          subtitle: "Build the Bridge可以提供的核心服务",
          sections: [
            {
              title: "产品可行性研究",
              items: [
                "确认产品是否符合中国跨境电商政策要求",
                "分析产品在中国市场的潜在优势和机会",
                "研究目标客户群体和市场定位",
              ],
            },
            {
              title: "品牌本地化策略",
              items: [
                "研究如何向中国消费者有效传达品牌价值",
                "分析'加拿大制造'等卖点的市场潜力",
                "提供产品展示的本地化建议",
              ],
            },
            {
              title: "市场调研服务",
              items: [
                "分析同类产品在主要电商平台的表现",
                "研究目标消费群体的购买习惯和偏好",
                "制定初步的定价和市场进入策略",
              ],
            },
          ],
        },
        {
          number: "02",
          title: "协助建立中国合作网络",
          subtitle: "如果您需要这方面支持",
          sections: [
            {
              title: "天猫代理商对接",
              items: [
                "利用跨文化背景帮您筛选和评估代理商",
                "协助理解合作模式和条款",
                "提供沟通和谈判支持",
              ],
            },
            {
              title: "物流解决方案",
              items: ["研究各种保税仓储和物流选项", "协助了解跨境物流流程"],
            },
            {
              title: "支付方案咨询",
              items: ["分析不同的跨境支付解决方案", "协助联系和评估服务提供商"],
            },
          ],
          role: {
            title: "Build the Bridge在这个阶段的角色",
            items: [
              "文化桥梁和沟通协调",
              "信息收集和方案比较",
              "决策支持和风险评估",
            ],
          },
        },
        {
          number: "03",
          title: "技术系统支持（根据需求）",
          subtitle: "Build the Bridge可以提供的技术服务",
          sections: [
            {
              title: "管理系统开发",
              items: [
                "订单跟踪和管理工具",
                "基础数据分析系统",
                "库存管理解决方案",
              ],
            },
            {
              title: "业务分析工具",
              items: ["销售数据整理和分析", "定期业务报告制作", "关键指标监控"],
            },
          ],
          note: "技术能力说明：基于全栈开发背景，Build the Bridge可以根据具体需求开发相应的管理工具，但复杂程度会根据项目实际情况来确定。",
        },
        {
          number: "04",
          title: "市场测试协助",
          subtitle: "测试阶段Build the Bridge提供的支持",
          items: [
            "协助制定测试计划和成功指标",
            "提供产品描述的翻译和本地化",
            "帮助理解平台规则和操作流程",
            "收集和分析测试数据及用户反馈",
          ],
        },
        {
          number: "05",
          title: "扩展规划",
          subtitle: "根据测试结果，Build the Bridge可以协助：",
          items: ["评估平台扩展机会", "优化现有运营流程", "规划产品线扩展策略"],
        },
      ],

      serviceValue: {
        title: "Build the Bridge的服务价值",
        subtitle: "可以确定提供的价值：",
        items: [
          "真正的跨文化理解和沟通能力",
          "深入的市场研究和分析",
          "灵活的技术开发支持",
          "全程的项目协调和管理",
        ],
        characteristics: {
          title: "服务特点",
          items: [
            "注重实际可行性，不追求不切实际的承诺",
            "阶段性推进，风险可控",
            "根据每个品牌的具体情况定制方案",
            "保持透明的沟通和进度汇报",
          ],
        },
      },

      cooperation: {
        title: "合作方式",
        flexible: {
          title: "灵活的合作模式",
          items: [
            "可以从任何一个阶段开始合作",
            "根据项目进展决定后续步骤",
            "服务内容可以根据实际需求调整",
          ],
        },
        risk: {
          title: "风险管理",
          items: [
            "每个阶段都有明确的交付成果",
            "阶段性评估和调整机会",
            "合理的预期管理和风险提示",
          ],
        },
      },

      philosophy:
        "就像成功的跨境案例一样，关键是找到合适的方法连接两个市场，而这正是Build the Bridge希望能够提供的价值。每个品牌的情况都不同，所以Build the Bridge更愿意根据具体需求来设计最合适的合作方案，而不是套用固定模式。",
    },
  };

  const t = content[language];

  const handleLanguageToggle = () => {
    setLanguage(language === "en" ? "zh" : "en");
  };

  return (
    <>
      <Navigation language={language} onLanguageToggle={handleLanguageToggle} />
      <div className={styles.approachPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.mainTitle}>{t.title}</h1>
            <div className={styles.ornateDivider}>
              <div className={styles.dividerLine}></div>
              <div className={styles.dividerSymbol}>❋</div>
              <div className={styles.dividerLine}></div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto px-4 py-16">
          {/* Process Steps */}
          <section className="mb-20 text-center">
            <div className="space-y-16">
              {t.steps.map((step, index) => (
                <div key={index} className="space-y-6">
                  {/* Step Header */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-warm-primary mb-2">
                      {step.title}
                    </h3>
                    {step.subtitle && (
                      <p className="text-lg text-warm-secondary">
                        {step.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Step Content */}
                  {step.sections ? (
                    <div className="space-y-8">
                      {step.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                          <h4 className="text-lg font-semibold text-warm-primary mb-3">
                            {section.title}
                          </h4>
                          <ul className="space-y-2 inline-block text-left">
                            {section.items.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                className="text-gray-600 flex items-start"
                              >
                                <span className="text-warm-light mr-3 mt-1">
                                  •
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div>
                      <ul className="space-y-3 inline-block text-left">
                        {step.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="text-gray-600 flex items-start"
                          >
                            <span className="text-warm-light mr-3 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Philosophy */}
          <section className="text-center mt-32">
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto italic">
              &quot;{t.philosophy}&quot;
            </p>
          </section>
        </div>
      </div>
      <Footer language={language} />
    </>
  );
}
