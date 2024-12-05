import type { Metadata } from "next";
import "./globals.css";
import localFont, { Inter } from "next/font/google";
import 'react-toastify/dist/ReactToastify.css';
import { toast,ToastContainer } from "react-toastify";
import Navbar from "@/components/Navbar/Navbar";
const inter = Inter({subsets: ['latin']})



export const metadata: Metadata = {
  title: "Fitness Geek Admin",
  description: "Admin for Fitness Geek",
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <ToastContainer/>
      </body>
    </html>
  );
}
