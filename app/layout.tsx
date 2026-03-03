import { instagramSans } from "@/font";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <title>Jacques Azianou • Designer &amp; Developer</title>
        <meta
          name="description"
          content="Helping brands thrive in the digital world. Located in The Nigeria. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Jacques"
        />
        <meta
          property="og:title"
          content="Jacques Azianou • Intuitive Designer &amp; 
      Developer"
        />
        <meta
          property="og:description"
          content="Helping brands thrive in the digital world. Located in Nigeria. 
      Delivering tailor-made digital designs and building interactive websites from scratch. © 
      Code by Jacques"
        />
        <meta property="og:site_name" content="Jacques Azianou" />
        <meta property="og:locale" content="en" />
        <meta property="og:type" content="website" />
        <meta name="google" content="notranslate" />
        <meta property="og:locale" content="en" />
      </head>
      <body className={`${instagramSans.variable} antialiased`}>
          {children}
      </body>
    </html>
  );
};

