import { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: 'URL Shortener | MP-5',
  description: 'A url shortening website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
