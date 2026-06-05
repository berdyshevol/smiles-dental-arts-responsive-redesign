import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Smiles Dental Arts | Cudahy, CA — Dr. Cesar Sanchez DDS",
  description:
    "Experience quality dental care provided by an expert team. Implants, Invisalign, cosmetic & general dentistry in Cudahy, California.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        {/* Spacer so the sticky mobile bar never hides footer content */}
        <div aria-hidden className="h-[72px] lg:hidden" />
        <MobileCTA />
      </body>
    </html>
  );
}
