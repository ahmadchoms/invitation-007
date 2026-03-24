import type { Metadata } from "next";
import { Cinzel, Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "The Wedding Of Raka & Andini",
  description: "Undangan Pernikahan Digital — Midnight Elegance",
  openGraph: {
    title: "The Wedding Of Raka & Andini",
    description:
      "Kami mengundang Anda untuk hadir merayakan momen sakral kami.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          "min-h-full flex flex-col antialiased bg-midnight-background selection:bg-midnight-accent/30 selection:text-midnight-primary",
          cinzel.variable,
          manrope.variable,
        )}
      >
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
