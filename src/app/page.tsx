"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Declaração global para o Facebook Pixel
declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

// Função para rastrear evento de checkout
const trackInitiateCheckout = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'InitiateCheckout', {
      content_name: 'Curso Lash Cílios',
      content_category: 'Cursos',
      value: 29.90,
      currency: 'BRL'
    });
  }
};

const bannerImages = [
  "/images/hgf.png",
  "/images/lash.png",
  "/images/palestra.png",
];

const depoimentos = [
  {
    nome: "Maria Silva",
    cidade: "São Paulo, SP",
    texto:
      "O curso transformou minha vida! Saí do zero e hoje tenho minha própria agenda lotada. O suporte é incrível!",
    estrelas: 5,
    foto: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    nome: "Ana Paula Santos",
    cidade: "Rio de Janeiro, RJ",
    texto:
      "Melhor investimento que fiz! Em 3 meses já recuperei o valor do curso e hoje ganho mais de R$5.000/mês.",
    estrelas: 5,
    foto: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    nome: "Juliana Costa",
    cidade: "Belo Horizonte, MG",
    texto:
      "As técnicas ensinadas são realmente diferenciadas. Minhas clientes amam o resultado!",
    estrelas: 5,
    foto: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    nome: "Fernanda Oliveira",
    cidade: "Curitiba, PR",
    texto:
      "Já fiz outros cursos, mas esse é completo de verdade. O certificado abriu muitas portas!",
    estrelas: 5,
    foto: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    nome: "Camila Rodrigues",
    cidade: "Salvador, BA",
    texto:
      "Comecei a atender em casa e hoje tenho meu próprio estúdio. Gratidão eterna!",
    estrelas: 5,
    foto: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    nome: "Patrícia Lima",
    cidade: "Fortaleza, CE",
    texto:
      "O método é muito didático. Mesmo sem experiência, aprendi tudo rapidamente!",
    estrelas: 5,
    foto: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    nome: "Beatriz Almeida",
    cidade: "Porto Alegre, RS",
    texto:
      "Profissionalismo nota 10! O curso me deu toda base técnica e empresarial que eu precisava.",
    estrelas: 5,
    foto: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    nome: "Larissa Martins",
    cidade: "Recife, PE",
    texto:
      "Mudei de carreira aos 40 anos e foi a melhor decisão! Hoje trabalho fazendo o que amo.",
    estrelas: 5,
    foto: "https://randomuser.me/api/portraits/women/8.jpg",
  },
];

function Estrelas({ quantidade }: { quantidade: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(quantidade)].map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-amber-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function CardDepoimento({
  depoimento,
}: {
  depoimento: (typeof depoimentos)[0];
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100 hover:shadow-xl transition-all hover:-translate-y-1">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={depoimento.foto}
          alt={depoimento.nome}
          className="w-14 h-14 rounded-full object-cover border-2 border-amber-300"
        />
        <div>
          <h4 className="font-semibold text-amber-900">{depoimento.nome}</h4>
          <p className="text-sm text-amber-700/70">{depoimento.cidade}</p>
        </div>
      </div>
      <Estrelas quantidade={depoimento.estrelas} />
      <p className="mt-4 text-amber-800 italic">&quot;{depoimento.texto}&quot;</p>
    </div>
  );
}

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-3 justify-center">
      <div className="bg-amber-900 text-white px-4 py-2 rounded-lg text-center min-w-[70px]">
        <div className="text-2xl font-bold">{String(timeLeft.hours).padStart(2, "0")}</div>
        <div className="text-xs text-amber-200">HORAS</div>
      </div>
      <div className="bg-amber-900 text-white px-4 py-2 rounded-lg text-center min-w-[70px]">
        <div className="text-2xl font-bold">{String(timeLeft.minutes).padStart(2, "0")}</div>
        <div className="text-xs text-amber-200">MIN</div>
      </div>
      <div className="bg-amber-900 text-white px-4 py-2 rounded-lg text-center min-w-[70px]">
        <div className="text-2xl font-bold">{String(timeLeft.seconds).padStart(2, "0")}</div>
        <div className="text-xs text-amber-200">SEG</div>
      </div>
    </div>
  );
}

const nomesBrasileiros = [
  "Ana", "Maria", "Juliana", "Fernanda", "Camila", "Patricia", "Beatriz", "Larissa",
  "Gabriela", "Amanda", "Leticia", "Bruna", "Carol", "Mariana", "Jessica", "Aline",
  "Priscila", "Natalia", "Vanessa", "Raquel", "Sandra", "Claudia", "Renata", "Cristina",
  "Adriana", "Daniela", "Tatiana", "Simone", "Luciana", "Fabiana"
];

const cidadesBrasileiras = [
  "São Paulo, SP", "Rio de Janeiro, RJ", "Belo Horizonte, MG", "Curitiba, PR",
  "Salvador, BA", "Fortaleza, CE", "Brasília, DF", "Recife, PE", "Porto Alegre, RS",
  "Goiânia, GO", "Manaus, AM", "Florianópolis, SC", "Campo Grande, MS", "Natal, RN",
  "Vitória, ES", "João Pessoa, PB", "Maceió, AL", "Teresina, PI", "São Luís, MA"
];

function PurchaseNotification() {
  const [notification, setNotification] = useState<{ nome: string; cidade: string; visible: boolean }>({
    nome: "",
    cidade: "",
    visible: false,
  });

  useEffect(() => {
    const showNotification = () => {
      const nome = nomesBrasileiros[Math.floor(Math.random() * nomesBrasileiros.length)];
      const cidade = cidadesBrasileiras[Math.floor(Math.random() * cidadesBrasileiras.length)];
      
      setNotification({ nome, cidade, visible: true });
      
      setTimeout(() => {
        setNotification((prev) => ({ ...prev, visible: false }));
      }, 4000);
    };

    // Primeira notificação após 3 segundos
    const initialTimeout = setTimeout(showNotification, 3000);
    
    // Notificações a cada 25-35 segundos (2+ por minuto)
    const interval = setInterval(() => {
      showNotification();
    }, Math.random() * 10000 + 25000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-6 bg-white rounded-2xl shadow-2xl p-4 max-w-xs border border-green-200 transition-all duration-500 z-50 ${
        notification.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
        <div>
          <p className="text-sm text-gray-800">
            <strong className="text-green-600">{notification.nome}</strong> de {notification.cidade}
          </p>
          <p className="text-xs text-gray-500">Acabou de se matricular!</p>
        </div>
      </div>
    </div>
  );
}

function VagasRestantes() {
  const [vagas, setVagas] = useState(10);

  useEffect(() => {
    // Reduz vagas aleatoriamente a cada 45-90 segundos
    const interval = setInterval(() => {
      setVagas((prev) => {
        if (prev > 3) {
          return prev - 1;
        }
        // Quando chega em 3, volta para 10 para manter a urgência
        return 10;
      });
    }, Math.random() * 45000 + 45000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
      <div className="flex items-center justify-center gap-2 text-red-600">
        <span className="animate-pulse text-2xl">⚠️</span>
        <span className="font-bold">ATENÇÃO:</span>
      </div>
      <p className="text-red-700 mt-1">
        Restam apenas <span className="font-bold text-xl text-red-600 animate-pulse">{vagas}</span> vagas com este preço!
      </p>
    </div>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50">
      {/* Barra de Urgência */}
      <div className="bg-amber-900 text-white py-2 px-4 text-center text-sm">
        <span className="animate-pulse">🔥</span> ÚLTIMAS VAGAS com <strong>40% OFF</strong> - Oferta encerra em breve! <span className="animate-pulse">🔥</span>
      </div>

      {/* Header */}
      <header className="bg-amber-50/95 backdrop-blur-md sticky top-0 z-50 border-b border-amber-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl">✨</span>
            <div>
              <span className="text-xl font-bold text-amber-900">Lash Cílios Cursos</span>
              <p className="text-xs text-amber-700">Desde 2018</p>
            </div>
          </div>
          <a
            href="https://checkout.lashcilioscursos.site/VCCL1O8SCU50"
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackInitiateCheckout}
            className="bg-amber-800 hover:bg-amber-900 text-white px-6 py-2 rounded-full font-semibold transition-all text-sm shadow-lg hover:shadow-xl hover:scale-105"
          >
            GARANTIR VAGA
          </a>
        </div>
      </header>

      {/* Hero Section com Carousel */}
      <section className="relative">
        {/* Banner Carousel */}
        <div className="relative w-full h-[400px] md:h-[550px] overflow-hidden">
          {bannerImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={img}
                alt={`Banner ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-amber-900/60 via-amber-900/30 to-amber-50" />
            </div>
          ))}
          
          {/* Conteúdo sobre o banner */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4 max-w-4xl">
              <div className="inline-block bg-white/90 backdrop-blur-sm text-amber-900 px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
                🎓 +5.000 PROFISSIONAIS FORMADAS DESDE 2018
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
                Transforme Sua Paixão em
                <br />
                <span className="text-amber-300">Profissão Lucrativa</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow">
                Domine as técnicas mais avançadas de extensão de cílios e comece a faturar <strong className="text-amber-300">R$5.000 a R$15.000/mês</strong>
              </p>
              <a
                href="https://checkout.lashcilioscursos.site/VCCL1O8SCU50"
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackInitiateCheckout}
                className="inline-block bg-amber-500 hover:bg-amber-400 text-amber-950 px-10 py-5 rounded-full font-bold text-lg transition-all hover:scale-110 shadow-2xl animate-bounce"
              >
                QUERO COMEÇAR AGORA →
              </a>
            </div>
          </div>

          {/* Indicadores */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {bannerImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-amber-400 w-8"
                    : "bg-white/70 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Garantias Rápidas */}
      <section className="bg-amber-100 py-6 border-y border-amber-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-amber-900">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Certificado Reconhecido</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Suporte Vitalício</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Garantia de 7 Dias</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Kit Profissional Incluso</span>
            </div>
          </div>
        </div>
      </section>

      {/* Números/Prova Social */}
      <section className="bg-amber-900 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="group">
              <div className="text-5xl md:text-6xl font-bold text-amber-300 group-hover:scale-110 transition-transform">+5.000</div>
              <div className="text-amber-100 mt-2 font-medium">Alunas Formadas</div>
            </div>
            <div className="group">
              <div className="text-5xl md:text-6xl font-bold text-amber-300 group-hover:scale-110 transition-transform">8</div>
              <div className="text-amber-100 mt-2 font-medium">Anos no Mercado</div>
            </div>
            <div className="group">
              <div className="text-5xl md:text-6xl font-bold text-amber-300 group-hover:scale-110 transition-transform">98%</div>
              <div className="text-amber-100 mt-2 font-medium">Taxa de Aprovação</div>
            </div>
            <div className="group">
              <div className="text-5xl md:text-6xl font-bold text-amber-300 group-hover:scale-110 transition-transform">4.9</div>
              <div className="text-amber-100 mt-2 font-medium">Avaliação Média ⭐</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problema/Solução */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-8">
            Você Está Cansada de...
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-left">
              <span className="text-2xl">😩</span>
              <p className="mt-2 text-red-800">Trabalhar muito e ganhar pouco</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-left">
              <span className="text-2xl">😔</span>
              <p className="mt-2 text-red-800">Depender do salário do mês</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-left">
              <span className="text-2xl">😤</span>
              <p className="mt-2 text-red-800">Não ter tempo para sua família</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-left">
              <span className="text-2xl">😢</span>
              <p className="mt-2 text-red-800">Sonhar com independência financeira</p>
            </div>
          </div>
          
          <div className="text-4xl mb-8">⬇️</div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-amber-900 mb-8">
            Imagine Ter Uma Profissão Onde Você...
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-left">
              <span className="text-2xl">💰</span>
              <p className="mt-2 text-green-800 font-medium">Fatura R$5.000 a R$15.000/mês</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-left">
              <span className="text-2xl">⏰</span>
              <p className="mt-2 text-green-800 font-medium">Faz seu próprio horário</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-left">
              <span className="text-2xl">🏠</span>
              <p className="mt-2 text-green-800 font-medium">Trabalha de casa ou em estúdio</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-left">
              <span className="text-2xl">❤️</span>
              <p className="mt-2 text-green-800 font-medium">Ama o que faz todos os dias</p>
            </div>
          </div>
        </div>
      </section>

      {/* Técnicas Completas - Seção Principal */}
      <section className="py-20 bg-gradient-to-b from-amber-900 via-amber-800 to-amber-900 relative overflow-hidden">
        {/* Background decorativo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-amber-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-amber-300 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block bg-amber-400 text-amber-950 px-6 py-2 rounded-full text-sm font-bold mb-4 uppercase tracking-wider">
              +20 Técnicas Profissionais
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Domine TODAS as Técnicas do Mercado
            </h2>
            <p className="text-amber-200 text-lg max-w-3xl mx-auto">
              O curso mais completo do Brasil com técnicas exclusivas que vão te diferenciar da concorrência
            </p>
          </div>

          {/* Grid de Técnicas Premium */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Fio a Fio Clássico */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-amber-400/30 hover:border-amber-400 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fio a Fio Clássico</h3>
              <p className="text-amber-200 text-sm mb-3">Técnica fundamental com acabamento natural e elegante</p>
              <div className="flex items-center gap-2 text-amber-400 text-xs">
                <span className="bg-amber-400/20 px-2 py-1 rounded">Iniciante</span>
                <span>4 módulos</span>
              </div>
            </div>

            {/* Volume Russo */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-amber-400/30 hover:border-amber-400 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">💫</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Volume Russo</h3>
              <p className="text-amber-200 text-sm mb-3">Leques perfeitos 2D a 6D para olhar marcante</p>
              <div className="flex items-center gap-2 text-amber-400 text-xs">
                <span className="bg-amber-400/20 px-2 py-1 rounded">Avançado</span>
                <span>6 módulos</span>
              </div>
            </div>

            {/* Mega Volume */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-amber-400/30 hover:border-amber-400 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🌟</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Mega Volume</h3>
              <p className="text-amber-200 text-sm mb-3">Leques 10D a 20D para máximo impacto visual</p>
              <div className="flex items-center gap-2 text-amber-400 text-xs">
                <span className="bg-orange-400/20 px-2 py-1 rounded text-orange-300">Expert</span>
                <span>5 módulos</span>
              </div>
            </div>

            {/* Volume Híbrido */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-amber-400/30 hover:border-amber-400 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Volume Híbrido</h3>
              <p className="text-amber-200 text-sm mb-3">Combinação perfeita de clássico + volume</p>
              <div className="flex items-center gap-2 text-amber-400 text-xs">
                <span className="bg-amber-400/20 px-2 py-1 rounded">Intermediário</span>
                <span>4 módulos</span>
              </div>
            </div>

            {/* Lifting de Cílios */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-amber-400/30 hover:border-amber-400 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">⬆️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Lifting de Cílios</h3>
              <p className="text-amber-200 text-sm mb-3">Curvatura natural que dura até 8 semanas</p>
              <div className="flex items-center gap-2 text-amber-400 text-xs">
                <span className="bg-green-400/20 px-2 py-1 rounded text-green-300">Popular</span>
                <span>3 módulos</span>
              </div>
            </div>

            {/* Brow Lamination */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-amber-400/30 hover:border-amber-400 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🪄</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Brow Lamination</h3>
              <p className="text-amber-200 text-sm mb-3">Sobrancelhas perfeitas e alinhadas</p>
              <div className="flex items-center gap-2 text-amber-400 text-xs">
                <span className="bg-pink-400/20 px-2 py-1 rounded text-pink-300">Tendência</span>
                <span>4 módulos</span>
              </div>
            </div>

            {/* Lash Designer */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-amber-400/30 hover:border-amber-400 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">👁️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Lash Design</h3>
              <p className="text-amber-200 text-sm mb-3">Mapeamento personalizado para cada olhar</p>
              <div className="flex items-center gap-2 text-amber-400 text-xs">
                <span className="bg-amber-400/20 px-2 py-1 rounded">Avançado</span>
                <span>5 módulos</span>
              </div>
            </div>

            {/* Efeito Sirena */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-amber-400/30 hover:border-amber-400 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🧜‍♀️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Efeito Sirena</h3>
              <p className="text-amber-200 text-sm mb-3">Visual dramático com ponta externa alongada</p>
              <div className="flex items-center gap-2 text-amber-400 text-xs">
                <span className="bg-purple-400/20 px-2 py-1 rounded text-purple-300">Exclusivo</span>
                <span>3 módulos</span>
              </div>
            </div>
          </div>

          {/* Segunda linha de técnicas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Kim K */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-amber-400/30 hover:border-amber-400 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">💎</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Efeito Kim K</h3>
              <p className="text-amber-200 text-sm mb-3">Cílios espaçados estilo celebridade</p>
              <div className="flex items-center gap-2 text-amber-400 text-xs">
                <span className="bg-pink-400/20 px-2 py-1 rounded text-pink-300">Tendência</span>
                <span>2 módulos</span>
              </div>
            </div>

            {/* Wet Look */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-amber-400/30 hover:border-amber-400 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">💧</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Wet Look</h3>
              <p className="text-amber-200 text-sm mb-3">Efeito molhado super moderno</p>
              <div className="flex items-center gap-2 text-amber-400 text-xs">
                <span className="bg-blue-400/20 px-2 py-1 rounded text-blue-300">Novo</span>
                <span>3 módulos</span>
              </div>
            </div>

            {/* Natural Wispies */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-amber-400/30 hover:border-amber-400 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🌿</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Natural Wispies</h3>
              <p className="text-amber-200 text-sm mb-3">Visual natural com textura delicada</p>
              <div className="flex items-center gap-2 text-amber-400 text-xs">
                <span className="bg-green-400/20 px-2 py-1 rounded text-green-300">Popular</span>
                <span>3 módulos</span>
              </div>
            </div>

            {/* Cílios Coloridos */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-amber-400/30 hover:border-amber-400 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🌈</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Cílios Coloridos</h3>
              <p className="text-amber-200 text-sm mb-3">Técnicas com cores e degradês</p>
              <div className="flex items-center gap-2 text-amber-400 text-xs">
                <span className="bg-purple-400/20 px-2 py-1 rounded text-purple-300">Exclusivo</span>
                <span>4 módulos</span>
              </div>
            </div>

            {/* Efeito Boneca */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-amber-400/30 hover:border-amber-400 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🎀</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Efeito Boneca</h3>
              <p className="text-amber-200 text-sm mb-3">Olhar aberto e arredondado</p>
              <div className="flex items-center gap-2 text-amber-400 text-xs">
                <span className="bg-amber-400/20 px-2 py-1 rounded">Intermediário</span>
                <span>3 módulos</span>
              </div>
            </div>

            {/* Cat Eye */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-amber-400/30 hover:border-amber-400 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🐱</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Cat Eye</h3>
              <p className="text-amber-200 text-sm mb-3">Olhar felino sedutor e marcante</p>
              <div className="flex items-center gap-2 text-amber-400 text-xs">
                <span className="bg-amber-400/20 px-2 py-1 rounded">Avançado</span>
                <span>3 módulos</span>
              </div>
            </div>

            {/* Fox Eye */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-amber-400/30 hover:border-amber-400 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🦊</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fox Eye</h3>
              <p className="text-amber-200 text-sm mb-3">Tendência que alonga o olhar</p>
              <div className="flex items-center gap-2 text-amber-400 text-xs">
                <span className="bg-orange-400/20 px-2 py-1 rounded text-orange-300">Expert</span>
                <span>4 módulos</span>
              </div>
            </div>

            {/* Remoção Segura */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-amber-400/30 hover:border-amber-400 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Remoção Segura</h3>
              <p className="text-amber-200 text-sm mb-3">Técnicas sem danificar cílios naturais</p>
              <div className="flex items-center gap-2 text-amber-400 text-xs">
                <span className="bg-green-400/20 px-2 py-1 rounded text-green-300">Essencial</span>
                <span>2 módulos</span>
              </div>
            </div>
          </div>

          {/* Mais técnicas em lista */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-amber-400/30">
            <h3 className="text-2xl font-bold text-white text-center mb-8">+ Técnicas Bônus Incluídas</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="flex items-center gap-3 text-amber-100">
                <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                <span>Manutenção Perfeita</span>
              </div>
              <div className="flex items-center gap-3 text-amber-100">
                <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                <span>Correção de Falhas</span>
              </div>
              <div className="flex items-center gap-3 text-amber-100">
                <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                <span>Biossegurança Completa</span>
              </div>
              <div className="flex items-center gap-3 text-amber-100">
                <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                <span>Anamnese Profissional</span>
              </div>
              <div className="flex items-center gap-3 text-amber-100">
                <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                <span>Alongamento Lower Lash</span>
              </div>
              <div className="flex items-center gap-3 text-amber-100">
                <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                <span>Leques Handmade</span>
              </div>
              <div className="flex items-center gap-3 text-amber-100">
                <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                <span>Promade vs Handmade</span>
              </div>
              <div className="flex items-center gap-3 text-amber-100">
                <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                <span>Tipos de Curvaturas</span>
              </div>
              <div className="flex items-center gap-3 text-amber-100">
                <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                <span>Espessuras e Diâmetros</span>
              </div>
              <div className="flex items-center gap-3 text-amber-100">
                <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                <span>Colas e Adesivos</span>
              </div>
              <div className="flex items-center gap-3 text-amber-100">
                <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                <span>Posicionamento Correto</span>
              </div>
              <div className="flex items-center gap-3 text-amber-100">
                <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                <span>Isolamento Perfeito</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="https://checkout.lashcilioscursos.site/VCCL1O8SCU50"
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackInitiateCheckout}
              className="inline-block bg-gradient-to-r from-amber-400 to-orange-500 text-amber-950 px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl shadow-amber-500/30"
            >
              QUERO DOMINAR TODAS AS TÉCNICAS →
            </a>
            <p className="text-amber-300 mt-4 text-sm">Acesso imediato a +60 horas de conteúdo prático</p>
          </div>
        </div>
      </section>

      {/* O Que Você Vai Aprender - Complementar */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-900 mb-4">
            Além das Técnicas, Você Também Vai Dominar
          </h2>
          <p className="text-center text-amber-700 mb-12 max-w-2xl mx-auto">
            Formação completa para você construir um negócio de sucesso
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-200 hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-amber-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl">📱</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-4">Marketing & Vendas</h3>
                  <ul className="text-amber-700 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> Instagram Profissional para Lash Artists
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> Captação de Clientes pelo WhatsApp
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> Fotos e Vídeos que Vendem
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> Stories que Convertem Seguidores em Clientes
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> Estratégias de Fidelização
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> Reels Virais no Nicho de Beleza
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-200 hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-amber-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl">💼</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-4">Gestão do Negócio</h3>
                  <ul className="text-amber-700 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> Precificação Estratégica para Lucrar Mais
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> Controle Financeiro Simplificado
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> Como Manter Agenda Sempre Lotada
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> Atendimento Premium e Encantador
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> Escalando Seus Ganhos
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> Montar Seu Espaço com Baixo Custo
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-20 bg-gradient-to-b from-orange-50 to-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-900 mb-4">
            Histórias Reais de Transformação
          </h2>
          <p className="text-center text-amber-700 mb-12 max-w-2xl mx-auto">
            Milhares de mulheres já mudaram de vida com o nosso método comprovado
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {depoimentos.map((dep, index) => (
              <CardDepoimento key={index} depoimento={dep} />
            ))}
          </div>
        </div>
      </section>

      {/* Provas Sociais WhatsApp */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>RESULTADOS REAIS DE ALUNAS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              Veja o Que Nossas Alunas Dizem
            </h2>
            <p className="text-amber-700 max-w-2xl mx-auto">
              Conversas reais no WhatsApp de alunas que transformaram suas vidas com nosso curso
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 border border-green-100">
              <Image
                src="/images/provasocial/1.png"
                alt="Depoimento WhatsApp 1"
                width={300}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 border border-green-100">
              <Image
                src="/images/provasocial/2.png"
                alt="Depoimento WhatsApp 2"
                width={300}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 border border-green-100">
              <Image
                src="/images/provasocial/3.png"
                alt="Depoimento WhatsApp 3"
                width={300}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 border border-green-100">
              <Image
                src="/images/provasocial/img_0136.png"
                alt="Depoimento WhatsApp 4"
                width={300}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="text-center mt-10">
            <a
              href="https://checkout.lashcilioscursos.site/VCCL1O8SCU50"
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackInitiateCheckout}
              className="inline-block bg-green-600 hover:bg-green-500 text-white px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-xl"
            >
              QUERO FAZER PARTE DESSA TRANSFORMAÇÃO →
            </a>
          </div>
        </div>
      </section>

      {/* Por Que Escolher */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
                ✨ FORMAÇÃO PROFISSIONAL COMPLETA
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
                Por Que a Lash Cílios Cursos é Diferente?
              </h2>
              <p className="text-amber-700 mb-8 text-lg">
                Há mais de <strong>8 anos</strong> formando as melhores profissionais do Brasil. Nosso método exclusivo une técnica de ponta + estratégias de negócio para você se destacar.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 bg-amber-50 p-4 rounded-xl">
                  <div className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span>🎯</span>
                  </div>
                  <div>
                    <strong className="text-amber-900">Aulas 100% Práticas</strong>
                    <p className="text-amber-700 text-sm">Com modelos reais para você ganhar confiança e segurança</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 bg-amber-50 p-4 rounded-xl">
                  <div className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span>🎁</span>
                  </div>
                  <div>
                    <strong className="text-amber-900">Kit Profissional Completo</strong>
                    <p className="text-amber-700 text-sm">Materiais de alta qualidade para você começar a atender</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 bg-amber-50 p-4 rounded-xl">
                  <div className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span>👥</span>
                  </div>
                  <div>
                    <strong className="text-amber-900">Comunidade VIP Exclusiva</strong>
                    <p className="text-amber-700 text-sm">Networking + suporte contínuo com outras profissionais</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 bg-amber-50 p-4 rounded-xl">
                  <div className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span>♾️</span>
                  </div>
                  <div>
                    <strong className="text-amber-900">Acesso Vitalício</strong>
                    <p className="text-amber-700 text-sm">Todas as atualizações futuras sem pagar nada a mais</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-200 via-amber-300 to-amber-400 rounded-3xl p-8 aspect-square flex items-center justify-center shadow-2xl">
                <div className="text-center text-amber-900">
                  <span className="text-7xl mb-4 block">✨</span>
                  <h3 className="text-3xl font-bold">Lash Cílios</h3>
                  <p className="text-amber-800 text-lg">Cursos</p>
                  <div className="mt-4 bg-white/80 rounded-full px-4 py-2 text-sm font-medium">
                    Desde 2018
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-amber-100">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <img src="https://randomuser.me/api/portraits/women/10.jpg" className="w-8 h-8 rounded-full border-2 border-white" alt="" />
                    <img src="https://randomuser.me/api/portraits/women/11.jpg" className="w-8 h-8 rounded-full border-2 border-white" alt="" />
                    <img src="https://randomuser.me/api/portraits/women/12.jpg" className="w-8 h-8 rounded-full border-2 border-white" alt="" />
                  </div>
                  <span className="text-sm text-amber-800 font-medium">+5.000 formadas</span>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 bg-green-500 text-white rounded-2xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-xs">Aprovação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Matrícula */}
      <section id="matricula" className="py-20 bg-gradient-to-b from-amber-800 via-amber-900 to-amber-950">
        <div className="max-w-xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Badge de Urgência */}
            <div className="absolute top-0 right-0 bg-red-500 text-white px-6 py-2 rounded-bl-2xl font-bold text-sm">
              ÚLTIMAS VAGAS
            </div>

            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-amber-900 mb-4">
                Garanta Sua Vaga Agora
              </h2>
              <p className="text-amber-700 mb-6">
                Promoção especial por tempo limitado
              </p>
              
              {/* Vagas Restantes */}
              <VagasRestantes />
              
              {/* Countdown */}
              <div className="mt-6">
                <CountdownTimer />
              </div>
              
              <div className="mt-6 text-center">
                <span className="text-gray-400 line-through text-lg">De R$ 1.997,00</span>
                <div className="text-4xl font-bold text-amber-900">
                  R$ 29<span className="text-lg">,90</span>
                </div>
                <p className="text-green-600 font-medium">Pagamento único</p>
              </div>
            </div>

            <div className="space-y-5">
              <a
                href="https://checkout.lashcilioscursos.site/VCCL1O8SCU50"
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackInitiateCheckout}
                className="block w-full bg-green-500 hover:bg-green-600 text-white py-5 rounded-xl font-bold text-xl transition-all hover:scale-[1.02] shadow-lg text-center"
              >
                QUERO GARANTIR MINHA VAGA →
              </a>
              <div className="flex items-center justify-center gap-4 text-sm text-amber-700">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  Compra Segura
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Garantia 7 Dias
                </span>
              </div>
              
              {/* Métodos de Pagamento */}
              <div className="pt-4 border-t border-amber-100">
                <p className="text-center text-amber-600 text-sm mb-3">Formas de pagamento aceitas:</p>
                <div className="flex justify-center items-center gap-4 text-amber-400">
                  <span className="text-xs bg-amber-50 px-3 py-1 rounded-full">PIX</span>
                  <span className="text-xs bg-amber-50 px-3 py-1 rounded-full">Cartão de Crédito</span>
                  <span className="text-xs bg-amber-50 px-3 py-1 rounded-full">Boleto</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-center text-amber-700 mb-12 max-w-2xl mx-auto">
            Tire todas as suas dúvidas antes de se matricular
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Coluna 1 */}
            <div className="space-y-4">
              <details className="bg-white rounded-2xl p-6 shadow-md border border-amber-100 group">
                <summary className="font-semibold text-amber-900 cursor-pointer list-none flex justify-between items-center">
                  Preciso ter experiência prévia?
                  <span className="text-amber-600 group-open:rotate-180 transition-transform text-xl">▼</span>
                </summary>
                <p className="mt-4 text-amber-700">
                  Não! Nosso curso é completo, do básico ao avançado. Você vai aprender tudo do zero, mesmo sem nunca ter feito cílios antes. Nosso método foi desenvolvido especialmente para iniciantes, com passo a passo detalhado e acompanhamento próximo.
                </p>
              </details>

              <details className="bg-white rounded-2xl p-6 shadow-md border border-amber-100 group">
                <summary className="font-semibold text-amber-900 cursor-pointer list-none flex justify-between items-center">
                  O certificado é reconhecido?
                  <span className="text-amber-600 group-open:rotate-180 transition-transform text-xl">▼</span>
                </summary>
                <p className="mt-4 text-amber-700">
                  Sim! Nosso certificado é reconhecido em todo o Brasil. Você pode usá-lo para comprovar sua qualificação profissional, abrir seu próprio negócio, trabalhar em salões de beleza, spas e clínicas de estética. O certificado inclui carga horária e conteúdo programático completo.
                </p>
              </details>

              <details className="bg-white rounded-2xl p-6 shadow-md border border-amber-100 group">
                <summary className="font-semibold text-amber-900 cursor-pointer list-none flex justify-between items-center">
                  Quanto tempo leva para começar a atender?
                  <span className="text-amber-600 group-open:rotate-180 transition-transform text-xl">▼</span>
                </summary>
                <p className="mt-4 text-amber-700">
                  A maioria das nossas alunas começa a atender entre 2 a 4 semanas após iniciar o curso. Durante a formação, você já pratica em modelos reais e ganha confiança. Muitas alunas relatam que conseguem seus primeiros clientes ainda durante o período de treinamento.
                </p>
              </details>

              <details className="bg-white rounded-2xl p-6 shadow-md border border-amber-100 group">
                <summary className="font-semibold text-amber-900 cursor-pointer list-none flex justify-between items-center">
                  E se eu não gostar do curso?
                  <span className="text-amber-600 group-open:rotate-180 transition-transform text-xl">▼</span>
                </summary>
                <p className="mt-4 text-amber-700">
                  Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeita com o conteúdo, metodologia ou qualquer outro aspecto, devolvemos 100% do seu investimento sem perguntas e sem burocracia. Basta enviar um email solicitando o reembolso.
                </p>
              </details>

              <details className="bg-white rounded-2xl p-6 shadow-md border border-amber-100 group">
                <summary className="font-semibold text-amber-900 cursor-pointer list-none flex justify-between items-center">
                  O que está incluso no curso?
                  <span className="text-amber-600 group-open:rotate-180 transition-transform text-xl">▼</span>
                </summary>
                <p className="mt-4 text-amber-700">
                  Você recebe: Formação completa em todas as técnicas (Fio a Fio, Volume Russo, Mega Volume, Lifting, Brown Lamination), kit profissional de materiais para começar a atender, certificado reconhecido, acesso à comunidade VIP exclusiva, suporte vitalício e todas as atualizações futuras do curso sem custo adicional.
                </p>
              </details>

              <details className="bg-white rounded-2xl p-6 shadow-md border border-amber-100 group">
                <summary className="font-semibold text-amber-900 cursor-pointer list-none flex justify-between items-center">
                  Qual a duração do curso?
                  <span className="text-amber-600 group-open:rotate-180 transition-transform text-xl">▼</span>
                </summary>
                <p className="mt-4 text-amber-700">
                  O curso completo tem carga horária equivalente a 40 horas de conteúdo. Você pode consumir no seu próprio ritmo, sem pressão. O acesso é vitalício, então você pode revisar quantas vezes quiser. A maioria das alunas conclui em 2 a 4 semanas estudando algumas horas por dia.
                </p>
              </details>
            </div>

            {/* Coluna 2 */}
            <div className="space-y-4">
              <details className="bg-white rounded-2xl p-6 shadow-md border border-amber-100 group">
                <summary className="font-semibold text-amber-900 cursor-pointer list-none flex justify-between items-center">
                  Como funciona o acesso ao curso?
                  <span className="text-amber-600 group-open:rotate-180 transition-transform text-xl">▼</span>
                </summary>
                <p className="mt-4 text-amber-700">
                  Após a confirmação do pagamento, você recebe imediatamente os dados de acesso por email. O curso é 100% online, disponível em nossa plataforma exclusiva. Você pode assistir pelo celular, tablet ou computador, a qualquer hora do dia ou da noite, de qualquer lugar com internet.
                </p>
              </details>

              <details className="bg-white rounded-2xl p-6 shadow-md border border-amber-100 group">
                <summary className="font-semibold text-amber-900 cursor-pointer list-none flex justify-between items-center">
                  Quais formas de pagamento são aceitas?
                  <span className="text-amber-600 group-open:rotate-180 transition-transform text-xl">▼</span>
                </summary>
                <p className="mt-4 text-amber-700">
                  Aceitamos cartão de crédito (em até 12x), PIX (com desconto especial), boleto bancário e todas as principais bandeiras. O pagamento é processado de forma 100% segura pela plataforma. Você pode parcelar no cartão e começar a estudar imediatamente.
                </p>
              </details>

              <details className="bg-white rounded-2xl p-6 shadow-md border border-amber-100 group">
                <summary className="font-semibold text-amber-900 cursor-pointer list-none flex justify-between items-center">
                  O kit de materiais está incluso?
                  <span className="text-amber-600 group-open:rotate-180 transition-transform text-xl">▼</span>
                </summary>
                <p className="mt-4 text-amber-700">
                  Sim! Um kit profissional completo está incluso no valor do curso. Ele contém todos os materiais necessários para você começar a atender suas primeiras clientes: cílios de diferentes tamanhos e curvaturas, pinças profissionais, cola, removedor, micropore, e todos os acessórios essenciais.
                </p>
              </details>

              <details className="bg-white rounded-2xl p-6 shadow-md border border-amber-100 group">
                <summary className="font-semibold text-amber-900 cursor-pointer list-none flex justify-between items-center">
                  Quanto posso ganhar como lash designer?
                  <span className="text-amber-600 group-open:rotate-180 transition-transform text-xl">▼</span>
                </summary>
                <p className="mt-4 text-amber-700">
                  Os ganhos variam conforme sua dedicação e região, mas nossas alunas relatam faturamentos entre R$3.000 a R$15.000 por mês. Uma aplicação de cílios custa em média R$150 a R$350, e você pode fazer de 3 a 6 atendimentos por dia. Muitas conseguem pagar o investimento do curso na primeira semana atendendo.
                </p>
              </details>

              <details className="bg-white rounded-2xl p-6 shadow-md border border-amber-100 group">
                <summary className="font-semibold text-amber-900 cursor-pointer list-none flex justify-between items-center">
                  Tenho suporte para tirar dúvidas?
                  <span className="text-amber-600 group-open:rotate-180 transition-transform text-xl">▼</span>
                </summary>
                <p className="mt-4 text-amber-700">
                  Sim! Você tem suporte vitalício através da nossa comunidade VIP exclusiva no WhatsApp, onde pode tirar dúvidas diretamente com nossa equipe e trocar experiências com outras alunas. Além disso, respondemos dúvidas no próprio ambiente do curso em até 24 horas úteis.
                </p>
              </details>

              <details className="bg-white rounded-2xl p-6 shadow-md border border-amber-100 group">
                <summary className="font-semibold text-amber-900 cursor-pointer list-none flex justify-between items-center">
                  Posso trabalhar de casa?
                  <span className="text-amber-600 group-open:rotate-180 transition-transform text-xl">▼</span>
                </summary>
                <p className="mt-4 text-amber-700">
                  Com certeza! Muitas de nossas alunas montam seu espaço de atendimento em casa, em um cantinho organizado. Você só precisa de uma maca, boa iluminação e seus materiais. No curso, ensinamos como montar seu home studio de forma profissional e atrair clientes para atender no conforto do seu lar.
                </p>
              </details>
            </div>
          </div>

          {/* Perguntas adicionais em largura total */}
          <div className="mt-4 space-y-4">
            <details className="bg-white rounded-2xl p-6 shadow-md border border-amber-100 group">
              <summary className="font-semibold text-amber-900 cursor-pointer list-none flex justify-between items-center">
                Aprendo a captar clientes e divulgar meu trabalho?
                <span className="text-amber-600 group-open:rotate-180 transition-transform text-xl">▼</span>
              </summary>
              <p className="mt-4 text-amber-700">
                Sim! Além das técnicas de extensão de cílios, temos um módulo completo de Marketing e Vendas onde você aprende: como criar um perfil profissional no Instagram, fazer fotos que vendem, criar stories que convertem, captar clientes pelo WhatsApp, precificar corretamente seus serviços, fidelizar clientes e construir uma agenda cheia. Você sai pronta para empreender!
              </p>
            </details>

            <details className="bg-white rounded-2xl p-6 shadow-md border border-amber-100 group">
              <summary className="font-semibold text-amber-900 cursor-pointer list-none flex justify-between items-center">
                O curso é atualizado?
                <span className="text-amber-600 group-open:rotate-180 transition-transform text-xl">▼</span>
              </summary>
              <p className="mt-4 text-amber-700">
                Sim! O mercado de extensão de cílios está sempre evoluindo, e nosso curso acompanha essas mudanças. Todas as atualizações são incluídas automaticamente no seu acesso, sem nenhum custo adicional. Estamos sempre adicionando novas técnicas, tendências e melhorias no conteúdo.
              </p>
            </details>

            <details className="bg-white rounded-2xl p-6 shadow-md border border-amber-100 group">
              <summary className="font-semibold text-amber-900 cursor-pointer list-none flex justify-between items-center">
                Vocês emitem nota fiscal?
                <span className="text-amber-600 group-open:rotate-180 transition-transform text-xl">▼</span>
              </summary>
              <p className="mt-4 text-amber-700">
                Sim! Emitimos nota fiscal para todas as compras. A nota é enviada automaticamente para o email cadastrado após a confirmação do pagamento. Se precisar de nota fiscal com dados específicos de empresa, basta entrar em contato conosco após a compra.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-amber-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Seu Futuro Começa Agora
          </h2>
          <p className="text-amber-100 text-xl mb-8 max-w-2xl mx-auto">
            Milhares de mulheres já transformaram suas vidas. A próxima pode ser você!
          </p>
          <a
            href="https://checkout.lashcilioscursos.site/VCCL1O8SCU50"
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackInitiateCheckout}
            className="inline-block bg-amber-400 hover:bg-amber-300 text-amber-950 px-12 py-5 rounded-full font-bold text-xl transition-all hover:scale-110 shadow-2xl"
          >
            QUERO MUDAR MINHA VIDA →
          </a>
          <p className="mt-6 text-amber-200 text-sm">
            Últimas vagas com 40% de desconto • Garantia de 7 dias
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 text-amber-200 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✨</span>
              <div>
                <span className="text-xl font-bold text-white">Lash Cílios Cursos</span>
                <p className="text-sm text-amber-300">Formação Profissional em Extensão de Cílios</p>
              </div>
            </div>
            <p className="text-sm text-center md:text-right text-amber-400">
              © 2018 - 2026 Lash Cílios Cursos. Todos os direitos reservados.<br />
              Formando profissionais de sucesso há mais de 8 anos.
            </p>
          </div>
        </div>
      </footer>

      {/* Notificação de compras em tempo real */}
      <PurchaseNotification />

    </div>
  );
}
