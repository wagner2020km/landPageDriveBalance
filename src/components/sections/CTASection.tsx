"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { FaArrowRight } from 'react-icons/fa';

const CTASection: React.FC = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div 
          className="card p-8 md:p-12 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Efeito de brilho */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#f9c900]/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#f9c900]/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Pronto para encontrar seu <span className="text-[#f9c900]">equilíbrio</span>?
            </motion.h2>
            
            <motion.p 
              className="text-[#cccccc] max-w-2xl mx-auto mb-8 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Junte-se a milhares de motoristas que já transformaram sua experiência ao volante com o Drive Balance. Baixe agora e comece a economizar combustível, aumentar sua segurança e desfrutar de cada trajeto.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button className="px-8 py-4 text-lg">
                Baixar Agora <FaArrowRight className="ml-2 inline" />
              </Button>
              <Button variant="secondary" className="px-8 py-4 text-lg">
                Saiba Mais
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
