"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  withSchema?: boolean;
}

export default function FaqAccordion({ items, withSchema = false }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Schema.org FAQPage Structured Data
  const schemaData = withSchema
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": items.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer,
          },
        })),
      }
    : null;

  return (
    <>
      {schemaData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      )}

      <div className="space-y-4 max-w-3xl mx-auto">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border border-[var(--color-light-gray)] rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center p-5 text-left text-[var(--color-dark)] font-medium text-base sm:text-lg focus:outline-none transition-colors duration-200 hover:text-[var(--color-accent)]"
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[var(--color-text-gray)] transition-transform duration-300 ${
                    isOpen ? "transform rotate-180 text-[var(--color-accent)]" : ""
                  }`}
                />
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-5 pt-0 border-t border-[var(--color-light-gray)]/50 text-[var(--color-text-gray)] text-sm sm:text-base leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
