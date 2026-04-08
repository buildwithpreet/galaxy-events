import { Cormorant_Garamond, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "Galaxy Events | Premium Event Management",
  description: "Where Every Moment Becomes a Memory. High-end event management in Hoshangabad, Madhya Pradesh.",
};

import CustomCursor from "@/components/CustomCursor";
import StarfieldBackground from "@/components/StarfieldBackground";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pt-0 selection:bg-[#c9a84c] selection:text-[#111111]">
        <StarfieldBackground />
        <CustomCursor />
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
