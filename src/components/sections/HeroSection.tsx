"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import AnimatedTitle from '../ui/AnimatedTitle';
import Button from '../ui/Button';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import login from '../../app/assets/imgCarrocel/login.jpeg';
import home from '../../app/assets/imgCarrocel/home.jpeg';
import fuel from '../../app/assets/imgCarrocel/fuel.jpeg';

const HeroSection: React.FC = () => {
  // Estado para controlar o slide atual do carrossel
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array de imagens reais do app para o carrossel
  const carouselImages = [
    { id: 1, src: login, alt: "Tela de login do Drive Balance" },
    { id: 2, src: home, alt: "Tela inicial do Drive Balance" },
    { id: 3, src: fuel, alt: "Tela de abastecimento do Drive Balance" }
  ];
  // Função para avançar para o próximo slide
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  }, [carouselImages.length]);

  // Função para voltar para o slide anterior
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  // Avançar automaticamente o carrossel a cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="min-h-screen flex items-center section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatedTitle text="Drive Balance" />
            <motion.p
              className="text-xl text-[#cccccc] mt-4 italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Equilíbrio que move você.
            </motion.p>
            <motion.p
              className="text-lg mt-6 mb-8 text-[#ffffff] max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Transforme sua experiência ao volante com o aplicativo que equilibra
              praticidade, economia e prazer em cada trajeto. Monitore seu desempenho,
              economize combustível e aprimore sua condução com o Drive Balance.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Button
                onClick={() => window.open('https://webpontocom.com.br/apkDriveBanlance/app-driveBalance.apk	', '_blank', 'noopener,noreferrer')}
              >
                Baixar Agora <FaArrowRight className="ml-2 inline" />
              </Button>
              <Button variant="secondary">
                Saiba Mais
              </Button>
            </motion.div>
          </motion.div>

          {/* Carrossel de imagens */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative w-full max-w-md">
              {/* Efeito de brilho */}
              <div className="absolute inset-0 bg-[#f9c900]/20 rounded-full blur-3xl"></div>

              {/* Container do carrossel */}
              <div className="relative float-animation rounded-xl overflow-hidden shadow-2xl border-2 border-[#f9c900]/30" style={{ height: '600px' }}>
                {/* Slides do carrossel */}
                <div className="relative w-full h-full">
                  {carouselImages.map((image, index) => (
                    <div
                      key={image.id}
                      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          style={{
                            objectFit: 'contain',
                            objectPosition: 'center'
                          }}
                          priority={index === 0}
                          className="rounded-xl"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Controles do carrossel */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-20"
                  aria-label="Slide anterior"
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-20"
                  aria-label="Próximo slide"
                >
                  <FaChevronRight />
                </button>

                {/* Indicadores de slide */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white/50'
                        }`}
                      aria-label={`Ir para slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
