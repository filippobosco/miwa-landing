import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const essonesDisplay = localFont({
  src: "../../public/fonts/EssonesDisplay.otf",
  variable: "--font-cormorant",
  display: "swap",
});

const commuttersSans = localFont({
  src: [
    { path: "../../public/fonts/CommuttersSans-light.otf",   weight: "300", style: "normal" },
    { path: "../../public/fonts/CommuttersSans-regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/CommuttersSans-bold.otf",    weight: "700", style: "normal" },
  ],
  variable: "--font-commutters",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ingrosso Abbigliamento Milano | 50€ Buono MIWA",
  description:
    "Grossista moda Milano per boutique. Ricevi 50€ su 200€ di spesa. Registrati ora e accedi al catalogo B2B MIWA.",
  other: {
    "facebook-domain-verification": "53ik1s5bii42ycpgtsjge2torhzrts",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${commuttersSans.variable} ${commuttersSans.className} ${essonesDisplay.variable} ${montserrat.variable}`}>
        {children}
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '4151021428543256');
          fbq('track', 'PageView');
        `}</Script>
        <noscript>
          <img height="1" width="1" style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=4151021428543256&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
