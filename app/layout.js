import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import LangState from "./context/LangState";

const inter = Inter ({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400"],
 
});

export const metadata = {
  title: "Career Page",
  description: "Craete a career page with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body
        className={"font-inter antialiased"}
      >
        <LangState>
        <Navbar />
        {children}
        </LangState>
      </body>
    </html>
  );
}
