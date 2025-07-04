"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaUserPlus, FaCar, FaGasPump, FaMoneyBillWave, FaChartLine } from 'react-icons/fa';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: <FaUserPlus className="text-3xl text-[#f9c900]" />,
      title: "Crie sua Conta",
      description: "Realize seu cadastro no aplicativo e efetue login para acessar todas as funcionalidades."
    },
    {
      icon: <FaCar className="text-3xl text-[#f9c900]" />,
      title: "Cadastre seu Veículo",
      description: "Adicione as informações do seu veículo para que os dados sejam analisados corretamente."
    },
    {
      icon: <FaGasPump className="text-3xl text-[#f9c900]" />,
      title: "Registre seus Abastecimentos",
      description: "Informe cada abastecimento realizado para um controle preciso do consumo e dos custos."
    },
    {
      icon: <FaMoneyBillWave className="text-3xl text-[#f9c900]" />,
      title: "Inclua Gastos e Receitas",
      description: "Adicione despesas e entradas relacionadas ao veículo para uma visão financeira completa."
    },
    {
      icon: <FaChartLine className="text-3xl text-[#f9c900]" />,
      title: "Acompanhe sua Performance",
      description: "Visualize no dashboard da tela inicial todos os indicadores de desempenho, consumo e saúde financeira do veículo."
    }
  ];

  return (
    <section className="bg-[#0a0a0a] section-padding">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como <span className="text-[#f9c900]">Funciona</span>
          </h2>
          <p className="text-[#cccccc] max-w-2xl mx-auto">
            Siga estes passos simples para começar a utilizar o aplicativo e ter total controle sobre os dados e custos do seu veículo.
          </p>
        </motion.div>

        <div className="relative">
          {/* Linha conectora */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#f9c900] to-[#f9c900]/30 transform -translate-x-1/2"></div>
          
          <div className="space-y-16 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="md:grid md:grid-cols-2 md:gap-8 items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className={`flex ${index % 2 === 0 ? 'md:justify-end' : 'md:order-2'}`}>
                  <div className="relative">
                    <div className="hidden md:block absolute top-1/2 w-8 h-8 bg-[#0a0a0a] border-4 border-[#f9c900] rounded-full transform -translate-y-1/2 left-full translate-x-4"></div>
                    <div className={`card max-w-md ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                      <div className="flex items-center mb-4">
                        <div className="bg-[#f9c900]/10 p-3 rounded-full mr-4">
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                      </div>
                      <p className="text-[#cccccc]">{step.description}</p>
                    </div>
                  </div>
                </div>
                <div className={`hidden md:flex ${index % 2 === 0 ? 'md:order-2 md:justify-start' : 'md:justify-end'}`}>
                  <div className="w-full max-w-xs aspect-square flex items-center justify-center">
                    <div className="text-6xl text-[#f9c900] font-bold">
                      {index + 1}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
