import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="scroll-smooth antialiased" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-surface text-on-surface font-sans selection:bg-primary/30 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
