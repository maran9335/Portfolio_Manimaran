import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";
import { FaLaptop } from "react-icons/fa";

const font= Inter({
  weight:["100","200","300","400","500","600","700","800","900"],
  subsets:['latin'],
})

export const metadata: Metadata = {
  title: "Manimaran",
  description: "Portfolio",
  icons :{
    icon :"Logo.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en">
      <body className={`${font.className}h-full antialiased bg-[#0d0d1f]`} >
      <ResponsiveNav />
   
      {children}
      <Footer/>
      <ScrollToTop/>
      </body>
    </html>
  );
}
