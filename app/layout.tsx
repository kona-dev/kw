import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Chakra_Petch } from "next/font/google";
import { Major_Mono_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const chakraPetch = Chakra_Petch({
  weight: ['400', '700'],
  variable: "--font-chakra-petch",
  subsets: ["latin"],
});

const majorMonoDisplay = Major_Mono_Display({
  weight: ['400'],
  variable: "--font-major-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Martin | Kona",
  description: "Martin's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${chakraPetch.variable} ${majorMonoDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
