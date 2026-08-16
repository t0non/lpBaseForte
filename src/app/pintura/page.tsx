import type { Metadata } from "next";
import { MessageCircle, ArrowRight, CheckCircle2, MapPin, Clock, Shield, Users, Star, ShieldCheck, Coins } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { company, services, whatsappMessages, whatsappUrl } from "@/config/company";

import ServiceCard from "@/components/ui/ServiceCard";
import FaqAccordion from "@/components/ui/FaqAccordion";
import GoogleReviewsSlider from "@/components/ui/GoogleReviewsSlider";

export const metadata: Metadata = {
  title: `Pintura Residencial de Alto Padrão em São Paulo | ${company.name}`,
  description: `Especialistas em pintura residencial de alto padrão em São Paulo. Acabamento impecável, proteção completa de móveis e organização para seu imóvel. Solicite um orçamento.`,
  alternates: {
    canonical: `${company.domain}/pintura`,
  },
  openGraph: {
    title: `Pintura Residencial de Alto Padrão em São Paulo | ${company.name}`,
    description: `Especialistas em pintura residencial de alto padrão em São Paulo. Acabamento perfeito e organização para transformar seu imóvel.`,
    url: `${company.domain}/pintura`,
    type: "website",
  },
};

const homeFaq = [
  {
    question: "Vocês trabalham com pintura de alto padrão?",
    answer:
      "Sim, realizamos pintura residencial com foco em fino acabamento. Preparamos cuidadosamente as superfícies, corrigindo imperfeições antes da aplicação da tinta para garantir um resultado perfeito.",
  },
  {
    question: "Vocês atendem toda a cidade de São Paulo?",
    answer: `Sim, atendemos ${company.regions.join(", ")}. Para confirmar a disponibilidade, envie pelo WhatsApp o bairro ou a cidade onde o imóvel está localizado.`,
  },
  {
    question: "Vocês fornecem os materiais?",
    answer:
      "A forma de fornecimento dos materiais é definida no orçamento. Geralmente, oferecemos a opção de orçamento com ou sem materiais, de acordo com a preferência do cliente.",
  },
  {
    question: "O orçamento é gratuito?",
    answer:
      "Para confirmar as condições do orçamento, incluindo eventual visita técnica, entre em contato pelo WhatsApp com as informações do imóvel e do serviço desejado.",
  },
  {
    question: "Vocês protegem os móveis e o piso durante a pintura?",
    answer:
      "Sim. O isolamento e a proteção do local são as etapas mais importantes do nosso serviço de pintura e acabamento. Protegemos móveis, pisos e janelas com plástico bolha, papelão corrugado e fitas adequadas.",
  },
  {
    question: "Como solicitar um orçamento?",
    answer:
      "Clique no botão de WhatsApp, informe o serviço desejado, o tipo de imóvel, a região e, se possível, envie fotos ou vídeos do local.",
  },
];

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "GeneralContractor",
      "@id": `${company.domain}/pintura/#business`,
      name: company.name,
      url: `${company.domain}/pintura`,
      description: "Serviço especializado de pintura residencial de alto padrão em São Paulo.",
      telephone: company.whatsapp ? `+${company.whatsapp}` : undefined,
      email: company.email,
      address: company.address
        ? {
            "@type": "PostalAddress",
            streetAddress: company.address,
            addressLocality: company.city,
            addressRegion: "SP",
            addressCountry: "BR",
          }
        : undefined,
      areaServed: company.regions.map((r) => ({
        "@type": "City",
        name: r,
      })),
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday"],
          opens: "08:00",
          closes: "13:00",
        },
      ],
      sameAs: [
        company.instagram || undefined,
        company.googleBusiness || undefined,
      ].filter(Boolean),
    },
    {
      "@type": "WebSite",
      "@id": `${company.domain}/pintura/#website`,
      url: `${company.domain}/pintura`,
      name: company.name,
      description: company.description,
      publisher: { "@id": `${company.domain}/pintura/#business` },
      inLanguage: "pt-BR",
    },
  ],
};

export default function PinturaLandingPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />

      {/* ── HERO ───────────────────────────────────────────── */}
      <section
        className="relative bg-[var(--color-dark)] text-white overflow-hidden min-h-[calc(100vh-4rem)] flex flex-col justify-center py-6 lg:py-10"
        aria-labelledby="hero-heading"
      >
        {/* Background photo */}
        <Image
          src="/hero-pintura.jpg"
          alt="Profissionais de pintura residencial"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />

        {/* Dark overlay for text readability */}
        <div
          className="absolute inset-0 bg-black/65"
          aria-hidden="true"
        />

        <div className="container-site relative z-10 py-4 lg:py-6 flex flex-col items-center justify-center text-center h-full">
          <div className="max-w-3xl flex flex-col items-center gap-4 lg:gap-5">
            {/* Eyebrow */}
            <p className="text-sm lg:text-base uppercase tracking-wider font-light text-[var(--color-light-gray)]">
              Especialistas em Pintura em São Paulo
            </p>

            {/* H1 */}
            <h1
              id="hero-heading"
              className="text-3xl md:text-4xl lg:text-4.5xl xl:text-5xl font-heading font-bold leading-tight text-white max-w-2xl"
            >
              Pintura Residencial de Alto Padrão,{" "}
              <span className="text-[var(--color-accent)] font-extrabold block sm:inline">com acabamento impecável</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[var(--color-light-gray)] text-sm lg:text-base leading-relaxed max-w-xl mx-auto">
              Atendemos toda São Paulo, incluindo Zona Sul, Zona Oeste e Centro. Transforme seus ambientes com a nossa equipe especializada em pintura de alto padrão, massa corrida e acabamentos finos.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mt-1 justify-center items-center w-full sm:w-auto">
              <a
                href={whatsappUrl(whatsappMessages.pintura)}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-primary"
                className="btn-primary text-base px-8 py-3.5 shadow-lg shadow-amber-500/20"
                aria-label="Solicitar orçamento no WhatsApp"
              >
                <img src="/iconewhatsapp.png" alt="WhatsApp" className="w-5 h-5 object-contain brightness-0 invert" />
                Solicitar orçamento no WhatsApp
              </a>
            </div>

            {/* Trust Badge */}
            <div className="mt-4 lg:mt-6 flex items-center justify-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2.5 rounded-full w-fit mx-auto">
              <img src="/logo_google.png" alt="Google" className="h-[22px] w-auto object-contain flex-shrink-0" />
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" aria-hidden="true" />
                ))}
              </div>
              <span className="text-xs sm:text-sm text-[var(--color-light-gray)] font-medium border-l border-white/20 pl-3 hidden sm:block">
                Empresa 5 estrelas mais bem avaliada da região
              </span>
              <span className="text-xs sm:hidden text-[var(--color-light-gray)] font-medium border-l border-white/20 pl-3">
                Mais bem avaliada da região
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIFERENCIAIS EM CARDS ─────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="benefits-title">
        <div className="container-site">
          <h2 id="benefits-title" className="sr-only">Nossos Diferenciais</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-white border border-[var(--color-light-gray)] rounded-2xl p-8 flex flex-col items-center text-center gap-4 transition-all duration-200 hover:shadow-lg hover:shadow-dark/5 hover:-translate-y-1 hover:border-[var(--color-accent)]">
              <div className="w-24 h-24 flex items-center justify-center">
                <img src="/imagens/garantia total.png" alt="Garantia Total" className="w-24 h-24 object-contain" style={{ filter: "invert(49%) sepia(35%) saturate(1637%) hue-rotate(344deg) brightness(87%) contrast(92%)" }} />
              </div>
              <h3 className="text-xl font-heading font-bold text-[var(--color-dark)] mt-2">
                Garantia Total
              </h3>
              <p className="text-sm text-[var(--color-text-gray)] leading-relaxed">
                Todos os nossos serviços contam com garantia por escrito. Mais segurança e tranquilidade para a sua família e seu imóvel.
              </p>
            </div>

            <div className="bg-white border border-[var(--color-light-gray)] rounded-2xl p-8 flex flex-col items-center text-center gap-4 transition-all duration-200 hover:shadow-lg hover:shadow-dark/5 hover:-translate-y-1 hover:border-[var(--color-accent)]">
              <div className="w-24 h-24 flex items-center justify-center">
                <img src="/imagens/atendimento rapido.png" alt="Atendimento Rápido" className="w-24 h-24 object-contain" style={{ filter: "invert(49%) sepia(35%) saturate(1637%) hue-rotate(344deg) brightness(87%) contrast(92%)" }} />
              </div>
              <h3 className="text-xl font-heading font-bold text-[var(--color-dark)] mt-2">
                Atendimento Rápido
              </h3>
              <p className="text-sm text-[var(--color-text-gray)] leading-relaxed">
                Equipe ágil distribuída por toda São Paulo e região metropolitana. Agendamos sua visita técnica no menor tempo possível.
              </p>
            </div>

            <div className="bg-white border border-[var(--color-light-gray)] rounded-2xl p-8 flex flex-col items-center text-center gap-4 transition-all duration-200 hover:shadow-lg hover:shadow-dark/5 hover:-translate-y-1 hover:border-[var(--color-accent)]">
              <div className="w-24 h-24 flex items-center justify-center">
                <img src="/imagens/preçojusto.png" alt="Preço Justo" className="w-24 h-24 object-contain" style={{ filter: "invert(49%) sepia(35%) saturate(1637%) hue-rotate(344deg) brightness(87%) contrast(92%)" }} />
              </div>
              <h3 className="text-xl font-heading font-bold text-[var(--color-dark)] mt-2">
                Preço Justo
              </h3>
              <p className="text-sm text-[var(--color-text-gray)] leading-relaxed">
                Orçamento transparente e detalhado, sem taxas surpresas ou custos ocultos. Condições facilitadas de pagamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVIÇOS ───────────────────────────────────────── */}
      <section className="section-padding bg-[var(--color-warm-white)]" aria-labelledby="services-title">
        <div className="container-site">
          <div className="text-center mb-12">
            <span className="section-label mb-3">
              <span className="w-4 h-px bg-[var(--color-accent)]" aria-hidden="true" />
              O que realizamos
            </span>
            <h2 id="services-title" className="text-3xl lg:text-4xl font-heading font-bold text-[var(--color-dark)] mt-2">
              Especialidades em Acabamento
            </h2>
            <p className="mt-4 text-[var(--color-text-gray)] max-w-2xl mx-auto">
              Trabalhamos de forma focada para entregar o melhor resultado estético e funcional nas áreas de pintura e revestimentos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              ...services.filter((s) => s.slug === "pintura"),
              ...services.filter((s) => s.slug !== "pintura"),
            ].map((s) => (
              <ServiceCard
                key={s.slug}
                name={s.name}
                description={s.description}
                slug={s.slug}
                icon={s.icon}
                image={s.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFERENCIAL ────────────────────────────────────── */}
      <section className="relative section-padding text-white overflow-hidden" aria-labelledby="differential-title">
        {/* Background texture */}
        <Image
          src="/section-bg-diferencial.jpg"
          alt="Textura de parede de alto padrão"
          fill
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/85" aria-hidden="true" />

        <div className="container-site relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label text-[var(--color-accent)] mb-4">
              <span className="w-4 h-px bg-[var(--color-accent)]" aria-hidden="true" />
              Nossa abordagem técnica
            </span>
            <h2 id="differential-title" className="text-3xl lg:text-4xl font-heading font-bold text-white mt-2 mb-6">
              Atenção minuciosa aos detalhes
            </h2>
            <p className="text-[var(--color-light-gray)] text-lg leading-relaxed mb-10">
              O diferencial da nossa equipe não está apenas em aplicar o material, mas em todo o processo de preparação, isolamento e técnica empregada para garantir que cada canto, rodapé e parede fiquem impecáveis.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-10">
              {[
                "Isolamento com papelão e lona especial",
                "Preparação e correção de imperfeições",
                "Acabamento premium sem marcas",
                "Limpeza pós-obra incluída no serviço",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-4">
                  <CheckCircle2 size={18} className="text-[var(--color-accent)] flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-[var(--color-light-gray)]">{item}</span>
                </div>
              ))}
            </div>
            <a
              href={whatsappUrl(whatsappMessages.pintura)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              aria-label="Solicitar orçamento pelo WhatsApp"
            >
              <img src="/iconewhatsapp.png" alt="WhatsApp" className="w-[18px] h-[18px] object-contain brightness-0 invert" />
              Solicitar orçamento pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── AVALIAÇÕES ──────────────────────────────────────── */}
      <GoogleReviewsSlider />

      {/* ── ÁREAS ATENDIDAS ────────────────────────────────── */}
      <section className="section-padding bg-[var(--color-warm-white)]" aria-labelledby="areas-title">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label mb-3">
              <span className="w-4 h-px bg-[var(--color-accent)]" aria-hidden="true" />
              Onde atuamos
            </span>
            <h2 id="areas-title" className="text-3xl lg:text-4xl font-heading font-bold text-[var(--color-dark)] mt-2 mb-4">
              Atendimento Especializado em São Paulo
            </h2>
            <p className="text-[var(--color-text-gray)] mb-8">
              A {company.name} atende clientes em {company.regions.join(", ")}, com forte atuação na Zona Sul (Moema, Vila Mariana, Santo Amaro), Zona Oeste (Pinheiros, Perdizes) e Centro. Garantimos agilidade na visita técnica e execução no prazo.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {company.regions.map((r) => (
                <span
                  key={r}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-[var(--color-light-gray)] rounded-full text-sm text-[var(--color-graphite)]"
                >
                  <MapPin size={13} className="text-[var(--color-accent)]" aria-hidden="true" />
                  {r}
                </span>
              ))}
            </div>
            <p className="text-sm text-[var(--color-text-gray)]">
              Entre em contato pelo WhatsApp, informe o bairro ou a cidade da obra e confirme o atendimento para sua região.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="faq-section-title">
        <div className="container-site">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 id="faq-section-title" className="text-3xl lg:text-4xl font-heading font-bold text-[var(--color-dark)]">
                Dúvidas frequentes
              </h2>
            </div>
            <FaqAccordion items={homeFaq} withSchema={true} />
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ──────────────────────────────────────── */}
      <section className="section-padding bg-[var(--color-warm-white)]" aria-labelledby="final-cta-title">
        <div className="container-site">
          <div className="bg-gradient-to-br from-[var(--color-graphite)] to-[var(--color-dark)] rounded-3xl p-10 lg:p-16 text-center">
            <h2 id="final-cta-title" className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
              Vamos avaliar o seu serviço de pintura?
            </h2>
            <p className="text-[var(--color-light-gray)] max-w-xl mx-auto mb-8">
              Envie uma mensagem com os detalhes da pintura desejada e a localização do imóvel. Nossa equipe fará o levantamento técnico para apresentar o melhor orçamento.
            </p>
            <a
              href={whatsappUrl(whatsappMessages.pintura)}
              target="_blank"
              rel="noopener noreferrer"
              id="final-cta-btn"
              className="btn-primary text-base"
              aria-label="Solicitar orçamento pelo WhatsApp"
            >
              <img src="/iconewhatsapp.png" alt="WhatsApp" className="w-5 h-5 object-contain brightness-0 invert" />
              Solicitar orçamento pelo WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
