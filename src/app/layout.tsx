import type { Metadata } from "next";
import { Lexend_Deca, Radley } from "next/font/google";
import "./globals.css";
import Script from "next/script"; // Added import

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
      <head>
        <Script id="flodesk-script">
          {`(function(w, d, t, s, n) {
            w.FlodeskObject = n;
            var fn = function() {
              (w[n].q = w[n].q || []).push(arguments);
            };
            w[n] = w[n] || fn;
            var f = d.getElementsByTagName(t)[0];
            var e = d.createElement(t);
            e.async = true;
            e.src = s;
            f.parentNode.insertBefore(e, f);
          })(window, document, 'script', 'https://assets.flodesk.com/universal.js', 'fd');`}
        </Script>
      </head>
      <body
        className={`${lexendDeca.variable} ${radley.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}