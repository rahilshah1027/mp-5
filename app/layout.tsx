import Header from "@/components/Header";

export const metadata = {
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
