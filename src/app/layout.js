import "./globals.css";
import { Athiti } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";

const athiti = Athiti({
  variable: "--font-athiti",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Vivek Tigadi",
  description: "UI UX Design / Developer Portfolio of Vivek Tigadi",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="en">
        <head>
          <link rel="icon" href="/Icons/vivekFavicon.ico" />
          <link rel="apple-touch-icon" href="/Icons/vivekFavicon.png" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/Icons/vivekFavicon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/Icons/vivekFavicon.png"
          />
        </head>
        <body className={athiti.variable}>{children}</body>
      </html>
    </ViewTransitions>
  );
}
