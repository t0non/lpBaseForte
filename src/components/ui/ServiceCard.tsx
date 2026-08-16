import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Home, Wrench, Paintbrush, Zap, Layers, Columns, Grid3X3, LayoutTemplate, Square, Triangle } from "lucide-react";
import { whatsappUrl, whatsappMessages } from "@/config/company";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string; "aria-hidden"?: "true" }>> = {
  Home,
  Wrench,
  Paintbrush,
  Zap,
  Layout: LayoutTemplate,
  Columns,
  Grid: Grid3X3,
  Layers,
  Square,
  Triangle,
};

interface ServiceCardProps {
  name: string;
  description: string;
  slug: string;
  icon: string;
  image?: string;
  ctaLabel?: string;
}

export default function ServiceCard({ name, description, slug, icon, image, ctaLabel }: ServiceCardProps) {
  const Icon = iconMap[icon] || Home;

  return (
    <article className="card-base overflow-hidden flex flex-col group h-full justify-between rounded-lg">
      <div>
        {/* Image */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-[var(--color-light-gray)]">
          {image ? (
            <Image
              src={image}
              alt={`Serviço: ${name}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[var(--color-accent)]/10">
              <Icon size={40} className="text-[var(--color-accent)] opacity-40" aria-hidden="true" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col gap-2">
          <h3 className="font-heading font-semibold text-sm lg:text-base text-[var(--color-dark)] line-clamp-2 min-h-[2.5rem] lg:min-h-[3rem] flex items-center">
            {name}
          </h3>
          <p className="text-xs text-[var(--color-text-gray)] leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>
      </div>

      <div className="p-4 pt-0 mt-auto">
        <a
          // @ts-ignore
          href={whatsappUrl(whatsappMessages[slug] || whatsappMessages.default)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full justify-center text-[10px] sm:text-[11px] lg:text-xs !py-2 !px-1 mt-1 !gap-1"
          aria-label={`Solicitar orçamento para ${name}`}
        >
          <img src="/iconewhatsapp.png" alt="WhatsApp" className="w-[12px] h-[12px] object-contain brightness-0 invert shrink-0" />
          <span className="whitespace-nowrap">Pedir Orçamento</span>
        </a>
      </div>
    </article>
  );
}
