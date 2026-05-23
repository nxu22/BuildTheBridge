"use client";
import { useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      phone: formData.get("phone"),
      website: formData.get("website"),
      budget: formData.get("budget"),
      interests: formData.getAll("interests"),
      otherInterests: formData.get("otherInterests"),
      goals: formData.get("goals"),
      hearAbout: formData.get("hearAbout"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const interests = [
    { value: "xiaohongshu-marketing", label: "Xiaohongshu Marketing" },
    { value: "influencer-partnerships", label: "Influencer / KOL Partnerships" },
    { value: "brand-launch-china", label: "Brand Launch in China" },
    { value: "market-research", label: "Market Research & Strategy" },
  ];

  const budgetOptions = [
    { value: "", label: "Select budget range" },
    { value: "500-1k", label: "$500 – $1,000" },
    { value: "1k-2k", label: "$1,000 – $2,000" },
    { value: "2k-5k", label: "$2,000 – $5,000" },
    { value: "above-5k", label: "$5,000+" },
  ];

  const hearAboutOptions = [
    { value: "", label: "Select an option" },
    { value: "google", label: "Google Search" },
    { value: "xiaohongshu", label: "Xiaohongshu" },
    { value: "instagram", label: "Instagram" },
    { value: "linkedin", label: "LinkedIn" },
    { value: "referral", label: "Referral from friend/colleague" },
    { value: "industry-event", label: "Industry event / conference" },
    { value: "other", label: "Other" },
  ];

  return (
    <section id="contact" className="py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-big mb-8">Work With Us</h2>
          <p className="text-xl text-gray-600">
            Let&apos;s <strong><em>Connect</em></strong> — we&apos;d love to learn more about your brand and goals.
          </p>
        </div>

        <div className="bg-white p-12 shadow-xl">
          {submitStatus === "success" && (
            <div className="mb-8 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
              Thank you! We&apos;ll get back to you within 24 hours.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="mb-8 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
              Sorry, there was an error sending your message. Please try again.
            </div>
          )}

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-bold text-black mb-3 uppercase tracking-wide">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-0 py-4 border-0 border-b-2 border-gray-300 focus:border-black focus:ring-0 text-lg bg-transparent"
                  placeholder="Your name here"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-black mb-3 uppercase tracking-wide">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-0 py-4 border-0 border-b-2 border-gray-300 focus:border-black focus:ring-0 text-lg bg-transparent"
                  placeholder="E.g. myemail@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-bold text-black mb-3 uppercase tracking-wide">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  className="w-full px-0 py-4 border-0 border-b-2 border-gray-300 focus:border-black focus:ring-0 text-lg bg-transparent"
                  placeholder="Business name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-black mb-3 uppercase tracking-wide">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full px-0 py-4 border-0 border-b-2 border-gray-300 focus:border-black focus:ring-0 text-lg bg-transparent"
                  placeholder="E.g. 204-555-0100"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-black mb-3 uppercase tracking-wide">
                Business Website
              </label>
              <input
                type="url"
                name="website"
                className="w-full px-0 py-4 border-0 border-b-2 border-gray-300 focus:border-black focus:ring-0 text-lg bg-transparent"
                placeholder="www.yourbusiness.com"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-black mb-3 uppercase tracking-wide">
                What&apos;s your budget? *
              </label>
              <select
                name="budget"
                required
                className="w-full px-0 py-4 border-0 border-b-2 border-gray-300 focus:border-black focus:ring-0 text-lg bg-transparent"
              >
                {budgetOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-black mb-3 uppercase tracking-wide">
                I&apos;m interested in:
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {interests.map((interest) => (
                  <label key={interest.value} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      name="interests"
                      value={interest.value}
                      className="h-5 w-5 text-black focus:ring-black border-gray-300"
                    />
                    <span className="text-gray-700">{interest.label}</span>
                  </label>
                ))}
              </div>
              <div className="mt-6">
                <textarea
                  name="otherInterests"
                  rows={3}
                  className="w-full px-0 py-4 border-0 border-b-2 border-gray-300 focus:border-black focus:ring-0 text-lg bg-transparent resize-none"
                  placeholder="Or tell us what else you're interested in..."
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-black mb-3 uppercase tracking-wide">
                Tell us about your business and goals *
              </label>
              <textarea
                rows={6}
                name="goals"
                required
                className="w-full px-0 py-4 border-0 border-b-2 border-gray-300 focus:border-black focus:ring-0 text-lg bg-transparent resize-none"
                placeholder="What do we need to know about your brand, products, and vision for the Chinese market?"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-black mb-3 uppercase tracking-wide">
                How did you hear about us?
              </label>
              <select
                name="hearAbout"
                className="w-full px-0 py-4 border-0 border-b-2 border-gray-300 focus:border-black focus:ring-0 text-lg bg-transparent"
              >
                {hearAboutOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="text-center pt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="border-2 border-black text-black px-12 py-4 text-xl font-bold hover:bg-black hover:text-white transition-colors uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "SENDING..." : "SEND"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
