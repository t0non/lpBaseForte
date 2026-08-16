import Link from "next/link";
import { MapPin, Clock, MessageCircle, Phone, Mail, ExternalLink } from "lucide-react";
import { company, services, whatsappMessages, whatsappUrl } from "@/config/company";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-dark)] text-[var(--color-light-gray)]" role="contentinfo">
      {/* Main footer content */}
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-heading font-bold text-xl text-white mb-4"
              aria-label={`${company.name} — Página inicial`}
            >
              <img 
                src="/logoBaseForte.png" 
                alt={company.name}
                className="h-[72px] lg:h-16 w-auto object-contain" 
              />
            </Link>
            <p className="text-sm text-[var(--color-text-gray)] leading-relaxed mb-6">
              Empresa especializada em construção, reforma e acabamento residencial em São Paulo. Atendemos casas, sobrados, apartamentos e imóveis residenciais.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              {company.instagram && (
                <a
                  href={company.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 bg-white/20 hover:bg-[var(--color-accent)] rounded-lg transition-colors"
                  aria-label={`Instagram de ${company.name}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
              )}
              {company.googleBusiness && (
                <a
                  href={company.googleBusiness}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 bg-white/20 hover:bg-[var(--color-accent)] rounded-lg transition-colors"
                  aria-label={`Perfil da ${company.name} no Google`}
                >
                  <ExternalLink size={18} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h2 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-4">
              Serviços
            </h2>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}`}
                    className="text-sm text-[var(--color-text-gray)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Areas */}
          <div>
            <h2 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-4">
              Regiões Atendidas
            </h2>
            <ul className="space-y-2">
              {company.regions.map((r) => (
                <li key={r} className="flex items-start gap-2 text-sm text-[var(--color-text-gray)]">
                  <MapPin size={13} className="mt-0.5 text-[var(--color-accent)] flex-shrink-0" aria-hidden="true" />
                  {r}
                </li>
              ))}
            </ul>
             <p className="mt-4 text-xs text-[var(--color-text-gray)]">
              A disponibilidade pode variar conforme o tipo e o porte do serviço.
            </p>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h2 className="font-heading font-semibold text-white text-sm uppercase tracking-widest mb-4">
              Contato
            </h2>
            <ul className="space-y-3">
              <li>
                <a
                  href={whatsappUrl(whatsappMessages.default)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[var(--color-text-gray)] hover:text-[var(--color-accent)] transition-colors"
                  aria-label="WhatsApp"
                >
                  <img src="/iconewhatsapp.png" alt="WhatsApp" className="w-[15px] h-[15px] object-contain brightness-0 invert" />
                  WhatsApp
                </a>
              </li>
              {company.instagram && (
                <li>
                  <a href={company.instagram} target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-gray)] hover:text-[var(--color-accent)] transition-colors flex items-center gap-2 group">
                    <span className="w-8 h-8 rounded-full bg-[var(--color-light-gray)]/10 flex items-center justify-center group-hover:bg-[var(--color-accent)]/10 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="group-hover:text-[var(--color-accent)] transition-colors">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                      </svg>
                    </span>
                    Instagram
                  </a>
                </li>
              )}
              {company.phone && (
                <li>
                  <a
                    href={`tel:${company.phone}`}
                    className="flex items-center gap-2 text-sm text-[var(--color-text-gray)] hover:text-[var(--color-accent)] transition-colors"
                    aria-label={`Telefone: ${company.phone}`}
                  >
                    <Phone size={15} aria-hidden="true" />
                    {company.phone}
                  </a>
                </li>
              )}
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-2 text-sm text-[var(--color-text-gray)] hover:text-[var(--color-accent)] transition-colors"
                  aria-label={`E-mail: ${company.email}`}
                >
                  <Mail size={15} aria-hidden="true" />
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--color-text-gray)]">
                <Clock size={15} className="mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>{company.hoursShort}</span>
              </li>
              {company.address && (
                <li className="flex items-start gap-2 text-sm text-[var(--color-text-gray)]">
                  <MapPin size={15} className="mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <address className="not-italic">{company.address}</address>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--color-graphite)]">
        <div className="container-site py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[var(--color-text-gray)] text-center sm:text-left">
              © {year} {company.name}. Todos os direitos reservados.
              {company.cnpj && (
                <span className="ml-2">CNPJ: {company.cnpj}</span>
              )}
            </p>
            <nav className="flex items-center gap-4" aria-label="Links legais">
              <Link
                href="/politica-de-privacidade"
                className="text-xs text-[var(--color-text-gray)] hover:text-[var(--color-accent)] transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/politica-de-cookies"
                className="text-xs text-[var(--color-text-gray)] hover:text-[var(--color-accent)] transition-colors"
              >
                Política de Cookies
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
