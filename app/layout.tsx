import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aakash - Full Stack Developer",
  description: "Portfolio of a Full Stack Web Developer specializing in Next.js and React.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col items-center py-12 px-4 sm:px-6`}>
        {/* Main Content Constraint - Centers everything like the reference */}
        <main className="w-full max-w-2xl space-y-20">
          {children}
        </main>
      </body>
    </html>
  );
}