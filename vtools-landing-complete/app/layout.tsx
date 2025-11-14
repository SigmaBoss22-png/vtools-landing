import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vtools — KI-Chatbots für Online-Shops",
  description: "Zweisprachige Landingpage für Vtools (vtools.store) – minimalistisch, modern.",
  metadataBase: new URL("https://vtools.store"),
  openGraph: {
    title: "Vtools — KI-Chatbots für Online-Shops",
    description: "Maßgeschneiderte Antworten, 24/7, schneller ROI.",
    url: "https://vtools.store",
    siteName: "Vtools",
    locale: "de_DE",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
