import type { Metadata } from "next";
import { Lexend_Deca, Radley } from "next/font/google";
import "./globals.css";

const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  subsets: ["latin"],
  display: "swap",
});

const radley = Radley({
  variable: "--font-radley",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vibrant Technology",
  description: "Cloud-Based Tech Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexendDeca.variable} ${radley.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}