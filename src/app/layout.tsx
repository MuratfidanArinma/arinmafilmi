import type { Metadata, Viewport } from "next";
import { Cinzel, Cormorant_Garamond, Geist } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/content";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arinmafilmi.com.tr"),
  title: {
    default: `${SITE.title} — Resmi Film Sitesi`,
    template: `%s | ${SITE.title}`,
  },
  description: `${SITE.quoteTr} ${SITE.production}. Yönetmen: Beytullah Pekok. Vizyon: ${SITE.release}.`,
  openGraph: {
    title: `${SITE.title} — Resmi Film Sitesi`,
    description: SITE.quoteTr,
    type: "website",
    locale: "tr_TR",
    images: [{ url: "/poster.jpg" }],
  },
  icons: {
    icon: [{ url: "/icon.jpg", type: "image/jpeg" }],
    apple: [{ url: "/icon.jpg" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#050506",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      data-scroll-behavior="smooth"
      className={`${geist.variable} ${cinzel.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-void">
        <div className="grain" aria-hidden />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
