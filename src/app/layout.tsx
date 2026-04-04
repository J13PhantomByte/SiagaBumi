import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

export const metadata: Metadata = {
  title: "SiagaBumi - Info Gempa Terkini Indonesia",
  description: "Platform informasi bencana real-time fokus pada pembaruan gempa bumi di Indonesia dengan desain modern dan aksesibel.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
