// app/page.tsx
"use client";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />
      <main>
        <Hero />
        <ValueProposition />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
