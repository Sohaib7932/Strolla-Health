import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Strolla | The fitness tracker that doesn't rely on arm movement",
  description:
    "Strolla is an ankle-worn fitness tracker built to count every step: pushing a stroller, walking the walking pad, carrying your little one, or pushing a cart. Join the waitlist for early access.",
  openGraph: {
    title: "Strolla | Every step counts, hands free",
    description:
      "An ankle-worn fitness tracker that counts the steps your watch misses. Join the waitlist.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full antialiased`}
    >
      {/* Extensions (ColorZilla's cz-shortcut-listen, Grammarly's data-gr-*)
          write attributes onto <body> before React hydrates, which reads as a
          mismatch. suppressHydrationWarning applies one level deep only, it
          covers this element's own attributes and never hides a real mismatch
          inside the page. */}
      <body className="min-h-full font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
