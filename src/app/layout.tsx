import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Header";
import Footer from "@/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Lovely Next App",
  description: "NextLovelyApp official website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen w-full max-w-[1000px] mx-auto bg-slate-200">
          <Header />
          
          <div className="w-full h-screen my-10">
          {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
