// ============================================================
// CONFIGURAÇÃO CENTRAL DA EMPRESA
// Edite este arquivo antes de publicar o site.
// Todos os campos marcados com "TODO" precisam ser preenchidos.
// ============================================================

export const company = {
  // TODO: Preencher com o nome real da empresa
  name: "Base Forte Construções",
  // TODO: Preencher com o slogan oficial, se houver
  tagline: "Especialistas em Pintura e Porcelanato",
  // TODO: Preencher com descrição real para SEO e rodapé
  description:
    "Especialistas em pintura residencial e assentamento de porcelanato em São Paulo. Acabamento perfeito e organização para transformar seu imóvel.",

  // ── Contato ─────────────────────────────────────────────
  // TODO: Preencher com DDD + número real (sem espaços ou traços)
  whatsapp: "5511999999999",
  // TODO: Preencher com telefone fixo, se houver. Deixar vazio ("") para ocultar.
  phone: "",
  // TODO: Preencher com e-mail real
  email: "contato@empresa.com.br",

  // ── Localização ─────────────────────────────────────────
  // TODO: Preencher com cidade-base real
  city: "São Paulo",
  // TODO: Preencher com bairro ou zona, se aplicável
  neighborhood: "",
  // TODO: Preencher com endereço físico real e publicável. Deixar vazio ("") para não exibir.
  address: "",
  // TODO: Confirmar se há atendimento no local ou somente a domicílio
  addressNote: "Atendimento realizado no imóvel do cliente, na região de São Paulo e Grande São Paulo.",

  // ── Horário ──────────────────────────────────────────────
  // TODO: Preencher com horário real de atendimento
  hours: "Segunda a sexta-feira, das 8h às 18h. Sábados, das 8h às 13h.",
  hoursShort: "Seg–Sex: 8h–18h | Sáb: 8h–13h",

  // ── Regiões atendidas ────────────────────────────────────
  // TODO: Substituir pelas regiões reais atendidas pela empresa
  regions: [
    "São Paulo (capital)",
    "Grande São Paulo",
    "Zona Sul",
    "Zona Oeste",
    "Zona Leste",
    "Zona Norte",
    "Centro",
    "ABC Paulista",
    "Guarulhos",
    "Osasco",
  ],

  // ── Redes sociais ────────────────────────────────────────
  // TODO: Preencher com links reais. Deixar vazio ("") para ocultar.
  instagram: "",
  googleBusiness: "",
  facebook: "",

  // ── Dados legais ─────────────────────────────────────────
  // TODO: Preencher com CNPJ real e publicável. Deixar vazio ("") para não exibir.
  cnpj: "",

  // ── Domínio ──────────────────────────────────────────────
  // TODO: Preencher com domínio real do site
  domain: "https://baseforteconstrucoes.com.br",

  // ── Diferenciais (somente informações confirmadas) ───────
  // TODO: Editar ou remover cada item conforme a realidade da empresa
  differentials: [
    "Atendimento em São Paulo e região",
    "Orçamento detalhado por escrito",
    "Vários serviços com uma única equipe",
    "Comunicação durante a execução",
  ],

  // ── Informações opcionais (só exibir se confirmadas) ─────
  // TODO: Preencher com anos reais de experiência, ou remover
  yearsOfExperience: null as number | null,
  // TODO: Preencher com número real de obras, ou remover
  completedProjects: null as number | null,
  // TODO: Confirmar se visita técnica é gratuita (true/false/null = não informar)
  freeVisit: null as boolean | null,
  // TODO: Confirmar se a empresa usa contrato
  usesContract: null as boolean | null,
  // TODO: Confirmar se inclui materiais (true = sim, false = somente mão de obra, null = depende do serviço)
  includesMaterials: null as boolean | null,
} as const;

// ── Mensagens WhatsApp pré-formatadas ────────────────────────
// Cada página de serviço usa sua própria mensagem personalizada.
export function whatsappUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${company.whatsapp}?text=${encoded}`;
}

export const whatsappMessages = {
  default: `Olá! Encontrei a ${company.name} pelo site e gostaria de solicitar um orçamento. O serviço que preciso é: ________. O imóvel fica em: ________.`,
  construcaoCasas: `Olá! Gostaria de solicitar uma avaliação para construção de uma casa em [REGIÃO]. O terreno tem aproximadamente ________ m².`,
  reformas: `Olá! Encontrei a ${company.name} pelo site e gostaria de solicitar um orçamento para reforma residencial. O imóvel fica em: ________.`,
  pintura: `Olá! Gostaria de solicitar um orçamento para pintura residencial. O imóvel fica em: ________ e a área aproximada é: ________ m².`,
  eletrica: `Olá! Preciso de uma avaliação para serviços elétricos. O imóvel fica em: ________ e o que preciso é: ________.`,
  forroDrywall: `Olá! Gostaria de solicitar um orçamento para forro de drywall. O imóvel fica em: ________ e a área aproximada é: ________ m².`,
  divisoriasDrywall: `Olá! Gostaria de solicitar um orçamento para divisória de drywall. O imóvel fica em: ________ e preciso de: ________.`,
  pisos: `Olá! Gostaria de solicitar um orçamento para instalação de piso. O imóvel fica em: ________ e a área aproximada é: ________ m².`,
  revestimentos: `Olá! Gostaria de solicitar um orçamento para instalação de revestimentos. O imóvel fica em: ________ e o ambiente é: ________.`,
  porcelanato: `Olá! Gostaria de solicitar um orçamento para assentamento de porcelanato. O imóvel fica em: ________ e a área aproximada é: ________ m².`,
  telhados: `Olá! Preciso de uma avaliação para meu telhado. O imóvel fica em: ________ e o problema é: ________.`,
  contato: `Olá! Gostaria de entrar em contato com a ${company.name}.`,
};

export const services = [
  {
    slug: "construcao-de-casas",
    name: "Construção de Casas Residenciais",
    shortName: "Construção",
    description: "Construção residencial do zero com fundação sólida e acabamento de alto padrão, entregando a casa dos seus sonhos.",
    icon: "Home",
    image: "/services/construcao.png",
    whatsappKey: "construcaoCasas" as keyof typeof whatsappMessages,
  },
  {
    slug: "reformas",
    name: "Reformas",
    shortName: "Reformas",
    description: "Renovação completa de ambientes, modernizando sua casa com segurança e planejamento do início ao fim.",
    icon: "Wrench",
    image: "/services/reformas.png",
    whatsappKey: "reformas" as keyof typeof whatsappMessages,
  },
  {
    slug: "pintura",
    name: "Pintura",
    shortName: "Pintura",
    description: "Preparação de superfícies e pintura interna ou externa de alto padrão para renovar e proteger o imóvel.",
    icon: "Paintbrush",
    image: "/services/pintura.png",
    whatsappKey: "pintura" as keyof typeof whatsappMessages,
  },
  {
    slug: "eletrica",
    name: "Elétrica",
    shortName: "Elétrica",
    description: "Instalações elétricas seguras e bem dimensionadas, garantindo o funcionamento perfeito de todos os equipamentos.",
    icon: "Zap",
    image: "/services/eletrica.png",
    whatsappKey: "eletrica" as keyof typeof whatsappMessages,
  },
  {
    slug: "forro-drywall",
    name: "Forro Drywall",
    shortName: "Forro Drywall",
    description: "Instalação de forros de gesso estruturado (drywall), ideal para rebaixamentos e projetos luminotécnicos.",
    icon: "Layout",
    image: "/services/forro_drywall.png",
    whatsappKey: "forroDrywall" as keyof typeof whatsappMessages,
  },
  {
    slug: "divisoria",
    name: "Divisória",
    shortName: "Divisória",
    description: "Criação de novos ambientes de forma rápida e limpa usando divisórias de drywall com isolamento acústico.",
    icon: "Columns",
    image: "/services/divisoria.png",
    whatsappKey: "divisoriasDrywall" as keyof typeof whatsappMessages,
  },
  {
    slug: "pisos",
    name: "Pisos",
    shortName: "Pisos",
    description: "Instalação impecável de pisos laminados, vinílicos e frios, garantindo nivelamento e beleza.",
    icon: "Square",
    image: "/services/pisos.png",
    whatsappKey: "pisos" as keyof typeof whatsappMessages,
  },
  {
    slug: "revestimento",
    name: "Revestimento",
    shortName: "Revestimento",
    description: "Aplicação de revestimentos em paredes de cozinhas, banheiros e fachadas, com recortes e rejuntes perfeitos.",
    icon: "Layers",
    image: "/services/revestimento.png",
    whatsappKey: "revestimentos" as keyof typeof whatsappMessages,
  },
  {
    slug: "porcelanato",
    name: "Porcelanato",
    shortName: "Porcelanato",
    description: "Assentamento de porcelanato com atenção absoluta ao nivelamento, recortes, alinhamento e paginação.",
    icon: "Grid",
    image: "/services/porcelanato.png",
    whatsappKey: "porcelanato" as keyof typeof whatsappMessages,
  },
  {
    slug: "telhado",
    name: "Telhado",
    shortName: "Telhado",
    description: "Construção e reforma de telhados, resolvendo infiltrações e garantindo a estrutura e a estética da cobertura.",
    icon: "Triangle",
    image: "/services/telhado.png",
    whatsappKey: "telhados" as keyof typeof whatsappMessages,
  }
] as const;
