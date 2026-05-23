"use client";

export default function Footer() {
  const quickLinks = [
    { text: "Cases", href: "/cases" },
    { text: "Services", href: "/our-approach" },
    { text: "Why Build Bridge", href: "/why-build-bridge" },
    { text: "Contact", href: "#contact" },
    { text: "FAQ", href: "/faq" },
  ];

  return (
    <footer className="py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-black mb-6 text-stone-800">BUILD THE BRIDGE</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 max-w-4xl mx-auto">
          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-6 text-stone-800">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-stone-600 hover:text-stone-900 transition-colors text-sm"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About + Connect */}
          <div className="text-center md:text-left">
            <p className="text-stone-600 text-sm leading-relaxed mb-6">
              Build The Bridge is based in Winnipeg, Canada, with real experience living in
              both Canada and China. We specialize in helping Canadian natural and sustainable
              brands enter the Chinese market through Xiaohongshu marketing and trusted
              influencer partnerships.
            </p>
            <div>
              <h4 className="text-lg font-bold mb-4 text-stone-800">Connect With Us</h4>
              <div className="flex items-center justify-center md:justify-start space-x-2 text-stone-600 text-sm">
                <span>📧</span>
                <span>buildthebridgeca@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="border-t pt-8 text-center"
          style={{ borderColor: "rgba(0,0,0,0.1)" }}
        >
          <p className="text-stone-500 text-sm">© 2025 Build The Bridge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
