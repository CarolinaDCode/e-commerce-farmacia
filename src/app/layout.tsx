import type { Metadata } from "next";
import "./globals.css";
import { geistSans, titleFont} from '@/config/font'



export const metadata: Metadata = {
  title: "Farma | Shop",
  description: "Una Farmacia virtual de productos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${titleFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
