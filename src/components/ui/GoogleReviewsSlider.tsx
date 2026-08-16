"use client";

import { Star } from "lucide-react";

const fakeReviewsRow1 = [
  {
    id: 1,
    name: "Ricardo Mendes",
    date: "1 mês atrás",
    text: "A equipe da Base Forte transformou minha sala. O assentamento do porcelanato ficou impecável, nivelamento zero defeitos. Recomendo muito na Zona Sul de SP.",
  },
  {
    id: 2,
    name: "Camila Fernandes",
    date: "2 meses atrás",
    text: "Contratei para pintura residencial de alto padrão e me surpreendi. Eles cuidam de cada detalhe, isolam tudo com muito capricho. O acabamento ficou liso e perfeito.",
  },
  {
    id: 3,
    name: "Felipe Nogueira",
    date: "3 semanas atrás",
    text: "Tive problemas com outras equipes que atrasaram a obra, mas a Base Forte entregou no prazo. Fizeram a instalação do porcelanato na casa toda. Excelente serviço.",
  },
  {
    id: 4,
    name: "Juliana Costa",
    date: "2 meses atrás",
    text: "Ótimo atendimento desde o WhatsApp até a entrega. A pintura interna ficou sem manchas ou marcas de rolo. Verdadeiros especialistas no que fazem.",
  },
  {
    id: 5,
    name: "Marcelo Souza",
    date: "1 mês atrás",
    text: "Difícil encontrar profissionais tão detalhistas em São Paulo hoje em dia. Rejunte bem feito, cortes do porcelanato perfeitos. Valeu cada centavo.",
  }
];

const fakeReviewsRow2 = [
  {
    id: 6,
    name: "Rodrigo Almeida",
    date: "2 semanas atrás",
    text: "Serviço espetacular de pintura. Pintaram meu apartamento inteiro em tempo recorde, protegendo todo o piso e móveis novos de forma muito organizada.",
  },
  {
    id: 7,
    name: "Patrícia Silva",
    date: "1 mês atrás",
    text: "Instalação de porcelanato de grande formato (lastras) na minha cozinha ficou excelente. Nivelamento perfeito e dente zero. Super indico.",
  },
  {
    id: 8,
    name: "Arthur G. Lima",
    date: "2 meses atrás",
    text: "Excelente pós-obra. Limparam todo o ambiente e a pintura ficou impecável, digna de alto padrão. Indico a Base Forte de olhos fechados.",
  },
  {
    id: 9,
    name: "Mariana Rocha",
    date: "3 semanas atrás",
    text: "Pintores super prestativos e atenciosos. Organização impecável do início ao fim. O acabamento em massa corrida ficou incrivelmente liso.",
  },
  {
    id: 10,
    name: "Bruno Albuquerque",
    date: "1 mês atrás",
    text: "Trabalho profissional de assentamento no banheiro e varanda. A paginação do porcelanato ficou impecável e a equipe foi nota 10.",
  }
];
const avatarColors = [
  "bg-blue-600 text-white",
  "bg-red-500 text-white",
  "bg-amber-500 text-white",
  "bg-emerald-600 text-white",
  "bg-indigo-600 text-white",
  "bg-purple-600 text-white",
  "bg-pink-600 text-white",
  "bg-teal-600 text-white",
  "bg-cyan-600 text-white",
  "bg-orange-600 text-white",
];

function getAvatarColor(name: string) {
  const sum = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return avatarColors[sum % avatarColors.length];
}

export default function GoogleReviewsSlider() {
  return (
    <section className="section-padding bg-white overflow-hidden" aria-labelledby="reviews-title">
      <div className="container-site mb-8">
        <div className="flex flex-col items-center text-center gap-3">
          <span className="section-label mb-2 justify-center">
            <span className="w-4 h-px bg-[var(--color-accent)]" aria-hidden="true" />
            O que dizem sobre nós
          </span>
          <h2 id="reviews-title" className="text-3xl lg:text-4xl font-heading font-bold text-[var(--color-dark)]">
            A experiência de quem já contratou
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-2">
            <div className="flex items-center gap-2">
              <span className="text-[var(--color-dark)] font-bold text-lg">5.0</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" aria-hidden="true" />
                ))}
              </div>
            </div>
            <span className="text-sm text-[var(--color-text-gray)]">Baseado em avaliações do Google</span>
          </div>
          {/* Fake Google Logo Badge */}
          <div className="flex items-center justify-center gap-2 bg-white px-4 py-2 rounded-full border border-[var(--color-light-gray)] shadow-sm w-fit mt-3">
            <img src="/logo_google.png" alt="Google" className="h-5 w-auto object-contain" />
            <span className="text-sm text-[var(--color-graphite)] font-medium">Avaliações</span>
          </div>
        </div>
      </div>

      {/* Row 1 - Sliding Left */}
      <div className="w-full relative overflow-hidden flex gap-4 mb-4">
        <div className="animate-marquee-left flex gap-4">
          {[...fakeReviewsRow1, ...fakeReviewsRow1].map((review, index) => (
            <div 
              key={`row1-${review.id}-${index}`} 
              className="snap-start shrink-0 w-[280px] sm:w-[320px] md:w-[380px] bg-[var(--color-warm-white)] rounded-2xl p-6 border border-[var(--color-light-gray)] flex flex-col"
            >
              <div className="flex justify-between items-start mb-4 gap-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shrink-0 ${getAvatarColor(review.name)}`}>
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-dark)] text-sm">{review.name}</h3>
                    <p className="text-xs text-[var(--color-text-gray)]">{review.date}</p>
                  </div>
                </div>
                <img src="/logo_google.png" alt="Google Review" className="h-4.5 w-auto object-contain shrink-0 mt-1" />
              </div>
              
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" aria-hidden="true" />
                ))}
              </div>
              
              <p className="text-sm text-[var(--color-text-gray)] leading-relaxed flex-1">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - Sliding Right */}
      <div className="w-full relative overflow-hidden flex gap-4">
        <div className="animate-marquee-right flex gap-4">
          {[...fakeReviewsRow2, ...fakeReviewsRow2].map((review, index) => (
            <div 
              key={`row2-${review.id}-${index}`} 
              className="snap-start shrink-0 w-[280px] sm:w-[320px] md:w-[380px] bg-[var(--color-warm-white)] rounded-2xl p-6 border border-[var(--color-light-gray)] flex flex-col"
            >
              <div className="flex justify-between items-start mb-4 gap-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shrink-0 ${getAvatarColor(review.name)}`}>
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-dark)] text-sm">{review.name}</h3>
                    <p className="text-xs text-[var(--color-text-gray)]">{review.date}</p>
                  </div>
                </div>
                <img src="/logo_google.png" alt="Google Review" className="h-4.5 w-auto object-contain shrink-0 mt-1" />
              </div>
              
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" aria-hidden="true" />
                ))}
              </div>
              
              <p className="text-sm text-[var(--color-text-gray)] leading-relaxed flex-1">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 0.5rem));
          }
        }
        @keyframes marquee-right {
          0% {
            transform: translateX(calc(-50% - 0.5rem));
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: marquee-left 45s linear infinite;
        }
        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: marquee-right 45s linear infinite;
        }
        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
