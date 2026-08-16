"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, MessageCircle, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { company, services, whatsappMessages, whatsappUrl } from "@/config/company";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  let bannerText = "ESPECIALISTAS EM ACABAMENTO EM SÃO PAULO";
  let wppMsg = whatsappMessages.default;
  if (pathname === "/pintura") {
    bannerText = "ESPECIALISTAS EM PINTURA RESIDENCIAL EM SÃO PAULO";
    // @ts-ignore
    wppMsg = whatsappMessages.pintura || whatsappMessages.default;
  } else if (pathname === "/porcelanato") {
    bannerText = "ESPECIALISTAS EM INSTALAÇÃO DE PORCELANATO EM SÃO PAULO";
    // @ts-ignore
    wppMsg = whatsappMessages.porcelanato || whatsappMessages.default;
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Trap focus and close on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setServicesOpen(false);
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-sm"
            : "bg-white border-b border-[var(--color-light-gray)]"
        }`}
        role="banner"
      >
        {/* Top Promo Banner */}
        <a 
          href={whatsappUrl(wppMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[var(--color-accent)] hover:bg-[var(--color-accent)]/95 text-white text-center py-2 px-4 text-[10px] sm:text-xs font-light uppercase tracking-wider select-none block transition-colors cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis w-full"
        >
          {bannerText}
        </a>

        <div className="container-site">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center hover:opacity-90 transition-opacity shrink-0 py-2 absolute left-1/2 -translate-x-1/2 lg:static lg:transform-none"
              aria-label={`${company.name} — Página inicial`}
            >
              <Image 
                src="/logoBaseForte.png" 
                alt={company.name} 
                width={200} 
                height={64} 
                className="h-[48px] lg:h-[56px] w-auto object-contain" 
                priority 
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Navegação principal">
              <Link
                href="/"
                className="px-4 py-2 text-sm font-medium text-[var(--color-graphite)] hover:text-[var(--color-accent)] transition-colors rounded-md hover:bg-[var(--color-light-gray)]"
              >
                Início
              </Link>

              {/* Dropdown Serviços */}
              <div className="relative" ref={dropdownRef}>
                <button
                  id="services-dropdown-btn"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  onMouseEnter={() => setServicesOpen(true)}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  aria-controls="services-dropdown"
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-[var(--color-graphite)] hover:text-[var(--color-accent)] transition-colors rounded-md hover:bg-[var(--color-light-gray)]"
                >
                  Serviços
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>

                {servicesOpen && (
                  <div
                    id="services-dropdown"
                    role="menu"
                    onMouseLeave={() => setServicesOpen(false)}
                    className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-[var(--color-light-gray)] py-2 z-50"
                  >
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/${s.slug}`}
                        role="menuitem"
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-[var(--color-graphite)] hover:bg-[var(--color-light-gray)] hover:text-[var(--color-accent)] transition-colors"
                      >
                        <span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full flex-shrink-0" aria-hidden="true" />
                        {s.name}
                      </Link>
                    ))}
                    <hr className="my-2 border-[var(--color-light-gray)]" />
                    <Link
                      href="/servicos"
                      role="menuitem"
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-[var(--color-accent)] hover:bg-[var(--color-light-gray)] transition-colors"
                    >
                      Ver todos os serviços →
                    </Link>
                  </div>
                )}
              </div>

              {navLinks.slice(1).map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="px-4 py-2 text-sm font-medium text-[var(--color-graphite)] hover:text-[var(--color-accent)] transition-colors rounded-md hover:bg-[var(--color-light-gray)]"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              {company.phone && (
                <a
                  href={`tel:${company.phone}`}
                  className="flex items-center gap-1.5 text-sm text-[var(--color-text-gray)] hover:text-[var(--color-accent)] transition-colors"
                  aria-label={`Ligar para ${company.phone}`}
                  onClick={() => trackEvent("phone_click", "header")}
                >
                  <Phone size={15} aria-hidden="true" />
                  {company.phone}
                </a>
              )}
              <a
                href={whatsappUrl(whatsappMessages.default)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
                aria-label="Solicitar orçamento pelo WhatsApp"
                onClick={() => trackEvent("whatsapp_click", "header")}
              >
                <img src="/iconewhatsapp.png" alt="WhatsApp" className="w-4 h-4 object-contain brightness-0 invert" />
                Solicitar orçamento
              </a>
            </div>

            {/* Mobile: Hambúrguer */}
            <div className="flex lg:hidden items-center ml-auto">
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Abrir menu de navegação"
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                className="flex items-center justify-center w-10 h-10 text-[var(--color-graphite)] hover:text-[var(--color-accent)] hover:bg-[var(--color-light-gray)] rounded-lg transition-colors"
              >
                <Menu size={22} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-[96px] lg:h-[112px]" aria-hidden="true" />

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/80"
          aria-hidden="true"
          onClick={closeMobile}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        ref={mobileRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        className={`fixed top-0 right-0 bottom-0 z-[70] w-full max-w-xs bg-white shadow-2xl flex flex-col transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--color-light-gray)]">
          <span className="font-heading font-bold text-[var(--color-dark)]">{company.name}</span>
          <button
            onClick={closeMobile}
            aria-label="Fechar menu"
            className="flex items-center justify-center w-9 h-9 text-[var(--color-graphite)] hover:text-[var(--color-accent)] hover:bg-[var(--color-light-gray)] rounded-lg transition-colors"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        {/* Mobile Links */}
        <nav className="flex-1 overflow-y-auto py-4" aria-label="Menu mobile">
          <Link
            href="/"
            onClick={closeMobile}
            className="flex items-center px-5 py-3 text-sm font-medium text-[var(--color-graphite)] hover:text-[var(--color-accent)] hover:bg-[var(--color-light-gray)] transition-colors"
          >
            Início
          </Link>

          {/* Services group */}
          <div className="px-5 pt-4 pb-1">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-gray)]">
              Serviços
            </p>
          </div>
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}`}
              onClick={closeMobile}
              className="flex items-center gap-3 px-5 py-2.5 text-sm text-[var(--color-graphite)] hover:text-[var(--color-accent)] hover:bg-[var(--color-light-gray)] transition-colors"
            >
              <span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full flex-shrink-0" aria-hidden="true" />
              {s.name}
            </Link>
          ))}
          <Link
            href="/servicos"
            onClick={closeMobile}
            className="flex items-center px-5 py-2.5 text-sm font-semibold text-[var(--color-accent)] hover:bg-[var(--color-light-gray)] transition-colors"
          >
            Ver todos os serviços →
          </Link>

          <hr className="my-3 mx-5 border-[var(--color-light-gray)]" />

          {navLinks.slice(1).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={closeMobile}
              className="flex items-center px-5 py-3 text-sm font-medium text-[var(--color-graphite)] hover:text-[var(--color-accent)] hover:bg-[var(--color-light-gray)] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile CTA removido para deixar apenas o widget */}
      </div>
    </>
  );
}

// Simple event tracking helper
function trackEvent(event: string, location: string) {
  if (typeof window !== "undefined" && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event,
      cta_location: location,
      page_path: window.location.pathname,
    });
  }
}
