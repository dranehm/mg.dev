import type { Metadata } from "next";
import { DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "mg.dev | Mhenard Galapate",
  description: "IT professional and full-stack developer based in Pangasinan, Philippines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${spaceMono.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-surface text-on-surface font-sans selection:bg-primary/30 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
