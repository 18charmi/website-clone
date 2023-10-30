import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/core/Header";

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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
