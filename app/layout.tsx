import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CursorGlow from "@/components/layout/CursorGlow";
import PageLoader from "@/components/layout/PageLoader";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://darshanasoni.design";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Darshana Soni — UI/UX Designer",
  description:
    "Portfolio of Darshana Soni, a UI/UX Designer crafting intuitive, accessible, and visually engaging digital experiences for web and mobile products.",
  keywords: [
    "Darshana Soni",
    "UI/UX Designer",
    "Product Designer",
    "Figma Designer",
    "Portfolio",
    "Mobile App Design",
    "Dashboard Design",
  ],
  authors: [{ name: "Darshana Soni" }],
  creator: "Darshana Soni",
  openGraph: {
    title: "Darshana Soni — UI/UX Designer",
    description:
      "Designing intuitive digital experiences that blend aesthetics with usability.",
    url: siteUrl,
    siteName: "Darshana Soni",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Darshana Soni — UI/UX Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Darshana Soni — UI/UX Designer",
    description:
      "Designing intuitive digital experiences that blend aesthetics with usability.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body bg-canvas text-ink antialiased overflow-x-hidden">
        <PageLoader />
        <SmoothScroll>
          <CursorGlow />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
