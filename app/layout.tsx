// app/layout.tsx
import type { Metadata } from "next";
import { Cinzel, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Suspense } from "react";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Pameec Luxury - Exclusive Hotel Experience",
    template: "%s | Pameec Luxury",
  },
  description:
    "Discover unparalleled luxury at Pameec Luxury, your premier destination for relaxation and elegance.",
  openGraph: {
    title: "Pameec Luxury",
    description: "Book your stay at Pameec Luxury for an unforgettable experience.",
    url: "https://pameec-luxury.com",
    siteName: "Pameec Luxury",
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
        className={`${cinzel.variable} ${lora.variable} antialiased flex flex-col min-h-screen bg-[#F5F1E9] text-[#4A4A4A]`}
      >
        <Suspense fallback={<div className="text-center py-4 text-[#4A4A4A]">Loading...</div>}>
          <Navbar />
        </Suspense>
        <main className="flex-grow">{children}</main>
        <Suspense fallback={<div className="text-center py-4 text-[#4A4A4A]">Loading Footer...</div>}>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}