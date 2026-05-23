import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Build The Bridge",
  description:
    "A platform connecting Canadian brands with the Chinese market - bridging cultures through commerce",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bridge-bg" aria-hidden="true">
          <svg viewBox="0 0 1440 1024" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="bg-g1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#F0C9A8"/>
                <stop offset="55%" stopColor="#E8B48E"/>
                <stop offset="100%" stopColor="#D9997A"/>
              </linearGradient>
              <linearGradient id="bg-g2" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#EEC4A0"/>
                <stop offset="55%" stopColor="#E5AE88"/>
                <stop offset="100%" stopColor="#D69470"/>
              </linearGradient>
              <radialGradient id="bg-clasp" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#E8857A" stopOpacity=".85"/>
                <stop offset="45%" stopColor="#EFA89E" stopOpacity=".5"/>
                <stop offset="100%" stopColor="#EFA89E" stopOpacity="0"/>
              </radialGradient>
              <filter id="bg-soft"><feGaussianBlur stdDeviation="0.2"/></filter>
            </defs>
            <path filter="url(#bg-soft)" fill="url(#bg-g1)" d="M -100 -50 C 260 -30, 520 110, 690 300 C 780 400, 880 430, 980 380 C 1120 312, 1180 360, 1180 470 C 1180 590, 1080 650, 960 620 C 800 580, 700 560, 600 470 C 460 345, 300 250, 60 250 C -20 250, -100 220, -100 150 Z"/>
            <path filter="url(#bg-soft)" fill="url(#bg-g2)" d="M 1540 1074 C 1180 1054, 900 940, 720 740 C 630 640, 540 600, 440 650 C 320 712, 250 660, 250 545 C 250 430, 360 380, 480 415 C 640 462, 740 470, 840 560 C 990 695, 1160 790, 1400 790 C 1480 790, 1540 820, 1540 900 Z"/>
            <ellipse cx="640" cy="525" rx="240" ry="150" fill="url(#bg-clasp)"/>
          </svg>
        </div>
        {children}
      </body>
    </html>
  );
}
