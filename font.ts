import localFont from "next/font/local";

export const instagramSans = localFont({
  src: [
    {
      path: "public/font/InstagramSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "public/font/InstagramSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-instagram",
  display: "swap",
});
