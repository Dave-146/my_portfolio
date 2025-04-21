import type { Metadata } from "next";
import { Comfortaa, Montserrat } from "next/font/google";
import "./globals.css";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
  display: "swap",
  weight: ["400", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dave Crean - UX/UI Designer",
  description: "Portfolio of Dave Crean, UX/UI Designer with experience at Apple and a background in civil engineering.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${comfortaa.variable} ${montserrat.variable}`}>
      <body className="bg-white font-montserrat">
        {children}
      </body>
    </html>
  );
}
