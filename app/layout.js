import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { AppContextProvider } from "@/context/appContext";

const inter = Inter({
  variable: "--font-inder",
  subsets: ["latin"],
});

export const metadata = {
  title: "Deep Seek",
  description: "Full Stack Project",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <AppContextProvider> 
       <html lang="en">
      <body className={`${inter.variable}  antialiased`}>{children}</body>
    </html>
      </AppContextProvider>
       </ClerkProvider>
   
  );
}
