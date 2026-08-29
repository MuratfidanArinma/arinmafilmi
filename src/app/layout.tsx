import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://arinmafilmi.com.tr"),
  title: "Yayında değil",
  description: "Bu site yayından kaldırılmıştır.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#050506",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className="h-full">
      <body className="min-h-full bg-black text-neutral-500">{children}</body>
    </html>
  );
}
