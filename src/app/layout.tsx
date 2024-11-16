import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavbarDemo } from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "E-Library || Sourabh",
  description: 'Generated by create next app and developed by Devaliance, this project is an e-library built using Next.js, providing a seamless digital platform for accessing and managing books online.',

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex mt-[2rem]">
        < NavbarDemo />
        </div>
        {children}
      </body>
    </html>
  );
}
