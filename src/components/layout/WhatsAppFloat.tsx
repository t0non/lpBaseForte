"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { company, whatsappMessages, whatsappUrl } from "@/config/company";

export default function WhatsAppFloat() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 800px is approximately passing the first section
      setScrolled(window.scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href={whatsappUrl(whatsappMessages.default)}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed right-4 bottom-20 lg:right-6 lg:bottom-6 z-40 flex items-center justify-center transition-all duration-500 w-[50px] sm:w-[65px] md:w-[75px]
        ${scrolled ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none translate-y-10 sm:opacity-100 sm:pointer-events-auto sm:translate-y-0"}
      `}
      aria-label="Falar com a empresa pelo WhatsApp"
      title="WhatsApp"
      onClick={() => trackEvent("whatsapp_click", "float_button")}
    >
      <img 
        src="/widget_whatsapp.png" 
        alt="Falar no WhatsApp" 
        className="w-full h-auto object-contain drop-shadow-md hover:drop-shadow-lg hover:scale-105 active:scale-95 transition-transform" 
      />
    </a>
  );
}

function trackEvent(event: string, location: string) {
  if (typeof window !== "undefined" && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event,
      cta_location: location,
      page_path: window.location.pathname,
    });
  }
}
