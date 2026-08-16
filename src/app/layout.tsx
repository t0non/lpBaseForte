import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { company } from "@/config/company";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import CookieBanner from "@/components/layout/CookieBanner";
import GTMProvider from "@/components/layout/GTMProvider";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.domain),
  colorScheme: "light",
  title: {
    default: `Construção e Reformas em São Paulo | ${company.name}`,
    template: `%s | ${company.name}`,
  },
  description: `Construção de casas, reformas, pintura, elétrica, drywall, pisos, porcelanato e telhados em São Paulo. Solicite um orçamento pelo WhatsApp.`,
  keywords: [],
  authors: [{ name: company.name }],
  creator: company.name,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: company.name,
    title: `Construção e Reformas em São Paulo | ${company.name}`,
    description: `Construção de casas, reformas, pintura, elétrica, drywall, pisos, porcelanato e telhados em São Paulo.`,
    url: company.domain,
  },
  twitter: {
    card: "summary_large_image",
    title: `Construção e Reformas em São Paulo | ${company.name}`,
    description: `Construção de casas, reformas, pintura, elétrica, drywall, pisos, porcelanato e telhados em São Paulo.`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  verification: {
    google: "rAG36Ss-6KbylNRhdom9uI64qAdUliYOds5G4V_qJbc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      {/* Google tag (gtag.js) - GA4 */}
      <Script
        id="ga4-script"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-VHSR5E9WQS"
      />
      <Script
        id="ga4-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-VHSR5E9WQS');`,
        }}
      />
      <body className="bg-[var(--color-warm-white)] text-[var(--color-graphite)]">
        <GTMProvider />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <CookieBanner />
      </body>
    </html>
  );
}
