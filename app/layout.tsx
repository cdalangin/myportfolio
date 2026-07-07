import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cirill Florenz Dalangin — Frontend Developer",
  description:
    "Based in NYC Metropolitan Area. I build clean, accessible web experiences and I'm actively looking for full-time opportunities.",
  openGraph: {
    title: "Cirill Florenz Dalangin — Frontend Developer",
    description:
      "Full Stack Software engineer based in the NYC Metropolitan Area.",
    url: "https://cdalangin.dev",
    siteName: "Cirill Florenz Dalangin",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="shortcut icon" href="https://u.cubeupload.com/cdalangin/me.png" type="image/x-icon" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Sora:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
