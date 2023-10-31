import "./globals.css";
import type { Metadata } from "next";
import { Playpen_Sans } from "next/font/google";
import Header from "@/components/core/Header";
import Footer from "@/components/core/Footer";

const font = Playpen_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Website Design Clone",
  description: "UI example by cloning an responsive site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
