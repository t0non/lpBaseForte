"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after a slight delay
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:max-w-md bg-white border border-[var(--color-light-gray)] shadow-2xl rounded-2xl p-5 z-[9999] transition-all duration-500 animate-slide-in">
      <div className="flex flex-col gap-4">
        <div>
          <h4 className="font-heading font-semibold text-sm text-[var(--color-dark)] mb-1">
            Uso de cookies
          </h4>
          <p className="text-xs text-[var(--color-text-gray)] leading-relaxed">
            Utilizamos cookies para otimizar sua experiência de navegação e analisar o tráfego do nosso site. Ao clicar em &ldquo;Aceitar&rdquo;, você concorda com o uso de todos os cookies.
          </p>
        </div>
        <div className="flex gap-2 justify-end text-xs font-semibold">
          <button
            onClick={declineCookies}
            className="px-3.5 py-2 text-[var(--color-text-gray)] hover:text-[var(--color-dark)] transition-colors"
          >
            Recusar
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent)]/90 text-white rounded-lg transition-colors shadow-sm"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
