import "./globals.scss";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { navMenus } from "@/data/navMenus";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
  fallback: [
    "system-ui",
    "arial",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Fira Sans",
    "Droid Sans",
  ],
});

export const metadata: Metadata = {
  title: "Rama Krishna Kamma",
  description:
    "Rama Krishna Kamma is a proficient Software Engineer and Data Engineer from Dallas, TX, skilled in Data Engineering and Visualization using modern tech stacks.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: [
    {
      url: "/RK_16.ico",
      rel: "icon",
      sizes: "16x16",
      type: "image/x-icon",
    },
    {
      url: "/RK_32.ico",
      rel: "icon",
      sizes: "32x32",
      type: "image/x-icon",
    },
    {
      url: "/RK_48.ico",
      rel: "icon",
      sizes: "48x48",
      type: "image/x-icon",
    },
    {
      url: "/RK_64.ico",
      rel: "icon",
      sizes: "64x64",
      type: "image/x-icon",
    },
  ],
  keywords: [
    "Rama Krishna Kamma",
    "ramakrishna",
    "Rama Krishna",
    "Rama-Krishna",
    "Kamma Rama Krishna",
    "Kamma-Rama-Krishna",
    "Data Engineer",
    "Business Intelligence Engineer",
    "Databricks",
    "Power BI",
  ],
};

const GoogleAnalytics = dynamic(
  () => import("@/components/common/GoogleAnalytics"),
  { ssr: false }
);
const WebVitals = dynamic(() => import("@/components/common/WebVitals"), {
  ssr: false,
});
const FloatingNavbar = dynamic(
  () => import("@/components/navbar/FloatingNavbar")
);
const ScrollToTop = dynamic(() => import("@/components/common/ScrollToTop"));

const isDebug = process.env.NODE_ENV === "development";

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="en" className={poppins.className}>
      {isDebug ? null : <GoogleAnalytics />}

      <body className={isDebug ? "debug-screens" : ""}>
        {isDebug ? <WebVitals /> : null}
        <FloatingNavbar className="app_nav" navItems={navMenus} />
        <main>{children}</main>
        <ScrollToTop />
      </body>
    </html>
  );
};

export default RootLayout;
