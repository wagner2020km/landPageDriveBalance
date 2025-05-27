"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaCoins, FaShieldAlt, FaBell, FaTrophy, FaMobileAlt } from 'react-icons/fa';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <FaChartLine className="text-4xl text-[#f9c900]" />,
      title: "Análise de Custos",
      description: "Acompanhe em tempo real seus gastos operacionais e identifique oportunidades para economizar."
    },
    {
      icon: <FaCoins className="text-4xl text-[#f9c900]" />,
      title: "Otimização de Combustível",
      description: "Receba insights e estratégias personalizadas para reduzir o consumo de combustível de forma eficiente."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#f9c900]" />,
      title: "Controle Financeiro",
      description: "Tenha controle total sobre seus custos, com alertas sobre variações e desperdícios no seu dia a dia."
    },
    {
      icon: <FaBell className="text-4xl text-[#f9c900]" />,
      title: "Alertas de Despesas",
      description: "Seja notificado instantaneamente sobre picos de gastos, desvios no consumo ou manutenção pendente."
    },
    {
      icon: <FaTrophy className="text-4xl text-[#f9c900]" />,
      title: "Desempenho Econômico",
      description: "Acompanhe seu desempenho em economia, estabeleça metas e visualize seus avanços financeiros."
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#f9c900]" />,
      title: "Gestão na Palma da Mão",
      description: "Acesse relatórios, indicadores e análises detalhadas em uma interface intuitiva e prática."
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Recursos <span className="text-[#f9c900]">Exclusivos</span>
          </h2>
          <p className="text-[#cccccc] max-w-2xl mx-auto">
            O Drive Balance oferece um conjunto completo de ferramentas para transformar sua experiência ao volante, combinando tecnologia avançada e usabilidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card hover:border-[#f9c900] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-[#f9c900]/10 p-4 rounded-full inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-[#cccccc]">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
