import type { Metadata } from "next";
import { Playfair_Display, Lato, Syne } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  weight: ["400", "700", "800"],
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AyuSurance | Ancient Wisdom, Modern Care",
  description: "Connecting Ayurveda doctors and patients for holistic healing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${syne.variable} ${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
