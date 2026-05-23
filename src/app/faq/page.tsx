// app/faq/page.tsx
"use client";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function FAQPage() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleQuestion = (questionId: string) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  const content = {
    en: {
      title: "Questions",
      sections: [
        {
          title: "Market Understanding & Credibility",
          questions: [
            {
              id: "market-understanding",
              q: "Do you really understand both markets deeply?",
              a: "I have lived in both countries as a consumer. I have some understanding of both markets and am willing to deeply understand the market for sustainable natural products.",
            },
            {
              id: "success-cases",
              q: "Can you show me similar brand success cases?",
              a: "I am still in the building phase. But I will collect and share useful cases.",
            },
          ],
        },
        {
          title: "Investment & Returns",
          questions: [
            {
              id: "investment-returns",
              q: "How much investment is needed and when will I see returns?",
              a: "I don't have a standard answer because every brand is different. But I will conduct low-risk feasibility validation at the lowest cost first.",
            },
            {
              id: "fee-structure",
              q: "What's your fee structure?",
              a: "I believe in proving value first. Phase 1 is minimal cost focused on validation and learning together. For Phase 2, we'll negotiate based on Phase 1 results. I don't charge big upfront fees because I want us to share the risk and grow together. My goal is long-term partnership, not quick profit.",
            },
            {
              id: "exit-policy",
              q: "Can I exit anytime if sales aren't good?",
              a: "Absolutely. Transparency and shared risk are core to how I work. You won't be locked into any long-term contracts until we prove it works.",
            },
          ],
        },
        {
          title: "Cultural Adaptation & Brand Story",
          questions: [
            {
              id: "brand-story",
              q: "Will my brand story resonate in the target market?",
              a: "This is where my bi-cultural living experience really helps. I'm happy to provide cultural translation to help maintain your brand's authenticity. For Canadian brands entering China: I will help discover the highlights in your story that most appeal to Chinese consumers. For Chinese brands entering Canada: I will assist in expressing your concepts in ways Canadians are familiar with, so your unique value gets better understanding and recognition.",
            },
          ],
        },
      ],
    },
    zh: {
      title: "问题",
      sections: [
        {
          title: "市场理解与可信度",
          questions: [
            {
              id: "market-understanding",
              q: "你们真的深度了解两个市场吗？",
              a: "我作为消费者在两国生活过。我对两个市场有一定的了解，并愿意为可持续天然产品深入了解市场。",
            },
            {
              id: "success-cases",
              q: "能给我看看类似品牌的成功案例吗？",
              a: "我还处于构建阶段。但我会收集分享提供有用的案例。",
            },
          ],
        },
        {
          title: "投资回报",
          questions: [
            {
              id: "investment-returns",
              q: "需要多少投资，多久能看到回报？",
              a: "我没有标准答案，因为每个品牌都不一样。但是我会以最低成本进行低风险验证可行性先。",
            },
            {
              id: "fee-structure",
              q: "你们的收费模式是什么？",
              a: "我相信先证明价值。第一阶段是最低成本，专注于验证和共同学习。第二阶段，我们根据第一阶段的结果协商。我不收取大笔前期费用，因为我想让我们共担风险，共同成长。我的目标是长期合作，不是快速盈利。",
            },
            {
              id: "exit-policy",
              q: "如果销售不好，我可以随时退出吗？",
              a: "当然可以。透明度和共担风险是工作的核心。在证明有效之前，你不会被锁定在任何长期合约中。",
            },
          ],
        },
        {
          title: "文化适应与品牌故事",
          questions: [
            {
              id: "brand-story",
              q: "我的品牌故事在目标市场能被理解吗？",
              a: "这正是我双文化生活经验真正发挥作用的地方。我很乐意提供文化翻译，帮助保持你品牌的真实性。对于进入中国的加拿大品牌：我会帮助发现你的故事中最能打动中国消费者的亮点。对于进入加拿大的中国品牌：我会协助将你的理念用加拿大人熟悉的方式表达，让你的独特价值得到更好的理解和认可。",
            },
          ],
        },
      ],
    },
  };

  const t = content.en;

  return (
    <>
      <Navigation />

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

        {/* FAQ Categories */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            {t.sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-16">
                <h2 className="text-xl font-medium text-amber-900 mb-8 pb-3">
                  {section.title}
                </h2>

                <div className="space-y-2">
                  {section.questions.map((item, questionIndex) => (
                    <div key={questionIndex}>
                      {/* Question - Clickable */}
                      <button
                        onClick={() => toggleQuestion(item.id)}
                        className="w-full text-left block text-amber-800 hover:text-amber-900 transition-colors text-base leading-relaxed py-3"
                      >
                        {item.q}
                      </button>

                      {/* Answer - Collapsible */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openQuestion === item.id ? "max-h-96 pb-6" : "max-h-0"
                        }`}
                      >
                        <div className="pt-4 px-4">
                          <p className="text-amber-800 leading-relaxed text-sm">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
