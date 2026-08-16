import type { Metadata } from "next";
import { MessageCircle, ArrowRight, CheckCircle2, MapPin, Clock, Shield, Users, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { company, services, whatsappMessages, whatsappUrl } from "@/config/company";

import ServiceCard from "@/components/ui/ServiceCard";
import FaqAccordion from "@/components/ui/FaqAccordion";
import GoogleReviewsSlider from "@/components/ui/GoogleReviewsSlider";

export const metadata: Metadata = {
  title: `Pintura e Porcelanato em São Paulo | ${company.name}`,
  description: `Especialistas em pintura residencial de alto padrão e assentamento de porcelanato em São Paulo. Acabamento perfeito e organização para transformar seu imóvel. Solicite um orçamento.`,
  alternates: {
    canonical: company.domain,
  },
  openGraph: {
    title: `Pintura e Porcelanato em São Paulo | ${company.name}`,
    description: `Especialistas em pintura residencial de alto padrão e assentamento de porcelanato em São Paulo. Acabamento perfeito para o seu imóvel.`,
    url: company.domain,
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
    question: "Como é feito o assentamento de porcelanato?",
    answer:
      "Trabalhamos com mão de obra especializada no assentamento de porcelanato, utilizando niveladores e cunhas para garantir que não haja dentes entre as peças e o alinhamento (paginação) fique impecável.",
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
      "@id": `${company.domain}/#business`,
      name: company.name,
      url: company.domain,
      description: company.description,
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
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços de Construção e Reforma",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.name,
            url: `${company.domain}/${s.slug}`,
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${company.domain}/#website`,
      url: company.domain,
      name: company.name,
      description: company.description,
      publisher: { "@id": `${company.domain}/#business` },
      inLanguage: "pt-BR",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />

      {/* ── HERO ───────────────────────────────────────────── */}
      <section
        className="relative bg-[var(--color-dark)] text-white overflow-hidden min-h-[calc(100vh-4rem)] flex flex-col justify-center lg:min-h-0 lg:block"
        aria-labelledby="hero-heading"
      >
        {/* Background photo */}
        <Image
          src="/imagens/construçoes de casas.jpg"
          alt="Profissionais da Base Forte trabalhando"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />

        {/* Dark overlay for text readability */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[var(--color-dark)] via-[var(--color-dark)]/95 to-[var(--color-dark)]/60"
          aria-hidden="true"
        />

        <div className="container-site relative z-10 py-12 lg:pt-4 lg:pb-20 xl:pt-6 xl:pb-28 flex flex-col justify-center h-full">
          <div className="max-w-2xl flex flex-col gap-5 lg:gap-6">
            {/* Eyebrow */}
            <p className="text-sm lg:text-base uppercase tracking-wider font-light text-[var(--color-light-gray)]">
              Especialistas em acabamento em São Paulo
            </p>

            {/* H1 */}
            <h1
              id="hero-heading"
              className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-heading font-bold leading-tight text-white"
            >
              Pintura e Instalação de Porcelanato,{" "}
              <span className="text-[var(--color-accent)] font-light">com acabamento impecável</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[var(--color-light-gray)] text-sm lg:text-lg leading-relaxed max-w-xl">
              Atendemos toda São Paulo, incluindo Zona Sul, Zona Oeste e Centro. Transforme seus ambientes com a nossa equipe especializada em pintura de alto padrão e assentamento de porcelanato.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <a
                href={whatsappUrl(whatsappMessages.default)}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-primary"
                className="btn-primary text-base"
                aria-label="Solicitar orçamento no WhatsApp"
              >
                <img src="/iconewhatsapp.png" alt="WhatsApp" className="w-5 h-5 object-contain brightness-0 invert" />
                Solicitar orçamento no WhatsApp
              </a>
              <Link
                href="/servicos"
                id="hero-cta-secondary"
                className="hidden sm:flex btn-outline-white text-base justify-center"
                aria-label="Conhecer nossos serviços"
              >
                Conhecer nossos serviços
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>

            {/* Trust Badge */}
            <div className="mt-4 lg:mt-6 flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2.5 rounded-full w-fit">
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

      {/* ── PROBLEMA E SOLUÇÃO ─────────────────────────────── */}
      <section className="section-padding bg-[var(--color-warm-white)]" aria-labelledby="problem-title">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label mb-4">
                <span className="w-4 h-px bg-[var(--color-accent)]" aria-hidden="true" />
                Por que escolher especialistas
              </span>
              <h2 id="problem-title" className="text-3xl lg:text-4xl font-heading font-bold text-[var(--color-dark)] mt-2 mb-6">
                O acabamento é o que define a qualidade do seu ambiente
              </h2>
              <div className="prose-site">
                <p>
                  A pintura e o revestimento são os itens que você verá todos os dias na sua casa. Uma pintura malfeita ou um piso desnivelado comprometem todo o investimento feito na sua obra. Por isso, ser especialista faz toda a diferença.
                </p>
                <p>
                  Nossa equipe de pintura e porcelanato foca exclusivamente na perfeição dessas etapas, garantindo que o seu imóvel receba o cuidado, a proteção adequada e o requinte que você espera.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users, title: "Atendimento direto", desc: "Comunicação clara durante toda a execução do serviço." },
                { icon: Shield, title: "Escopo explicado", desc: "O que será feito é alinhado antes do início da obra." },
                { icon: CheckCircle2, title: "Serviços integrados", desc: "Várias etapas da obra com uma única empresa." },
                { icon: Clock, title: "Acompanhamento", desc: "As etapas são monitoradas durante a execução." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[var(--color-warm-white)] border border-[var(--color-light-gray)] rounded-xl p-5"
                >
                  <item.icon size={22} className="text-[var(--color-accent)] mb-3" aria-hidden="true" />
                  <h3 className="font-heading font-semibold text-sm text-[var(--color-dark)] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--color-text-gray)] leading-relaxed">{item.desc}</p>
                </div>
              ))}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((s) => (
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
          loading="lazy"
          className="object-cover object-center brightness-[1.5] contrast-125"
          aria-hidden="true"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/10" aria-hidden="true" />

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
                "Menos desencontro entre equipes",
                "Melhor organização das etapas",
                "Atendimento centralizado",
                "Escopo mais fácil de acompanhar",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-[var(--color-graphite)] border border-[var(--color-graphite)] rounded-xl p-4">
                  <CheckCircle2 size={18} className="text-[var(--color-accent)] flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-[var(--color-light-gray)]">{item}</span>
                </div>
              ))}
            </div>
            <a
              href={whatsappUrl(whatsappMessages.default)}
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
          <div className="max-w-4xl mx-auto text-center">
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
              Vamos avaliar sua construção ou reforma?
            </h2>
            <p className="text-[var(--color-light-gray)] max-w-xl mx-auto mb-8">
              Envie uma mensagem com o serviço desejado e a localização do imóvel. Nossa equipe fará as perguntas necessárias para entender sua necessidade e orientar os próximos passos.
            </p>
            <div className="flex justify-center">
              <a
                href={whatsappUrl(whatsappMessages.default)}
                target="_blank"
                rel="noopener noreferrer"
                id="final-cta-btn"
                className="btn-primary text-base w-full sm:w-auto max-w-xs sm:max-w-none"
                aria-label="Solicitar orçamento pelo WhatsApp"
              >
                <img src="/iconewhatsapp.png" alt="WhatsApp" className="w-5 h-5 flex-shrink-0 object-contain brightness-0 invert" />
                Solicitar orçamento pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
