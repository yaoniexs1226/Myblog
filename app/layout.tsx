import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Your Name | 个人主页",
  description:
    "计算机专业学生，全栈开发爱好者，热爱用代码解决真实问题。",
  keywords: ["个人网站", "前端开发", "全栈开发", "Next.js"],
  openGraph: {
    title: "Your Name | 个人主页",
    description: "计算机专业学生，全栈开发爱好者。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={inter.variable}>
      <body className="font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
