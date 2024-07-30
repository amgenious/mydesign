import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: "My Design",
  description: "Everyone can design",
  icons:{
    icon: 'logo.svg'
 }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"
    style={{background:"white"}}
    >
      <body className={poppins.className}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
