import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LocaleProvider } from "@/i18n/LocaleProvider";

export const metadata: Metadata = {
  title: "MYOR Robot Competitions",
  description: "Thông tin cuộc thi lập trình robot MYOR",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="min-h-dvh bg-white text-gray-900 dark:bg-neutral-950 dark:text-neutral-100">
        <LocaleProvider>
          <Header />
          <main className="min-h-[60dvh]">{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
