"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaCoins, FaShieldAlt, FaBell, FaTrophy, FaMobileAlt } from 'react-icons/fa';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <FaChartLine className="text-4xl text-[#f9c900]" />,
      title: "Análise de Condução",
      description: "Monitore e analise seu estilo de direção com métricas detalhadas e feedback em tempo real."
    },
    {
      icon: <FaCoins className="text-4xl text-[#f9c900]" />,
      title: "Economia de Combustível",
      description: "Reduza gastos com combustível através de dicas personalizadas baseadas no seu padrão de condução."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#f9c900]" />,
      title: "Segurança Aprimorada",
      description: "Receba alertas preventivos e sugestões para uma condução mais segura em todas as situações."
    },
    {
      icon: <FaBell className="text-4xl text-[#f9c900]" />,
      title: "Alertas Inteligentes",
      description: "Notificações contextuais que ajudam a identificar e corrigir comportamentos de risco ao volante."
    },
    {
      icon: <FaTrophy className="text-4xl text-[#f9c900]" />,
      title: "Gamificação",
      description: "Ganhe pontos, conquiste medalhas e compare seu desempenho com outros motoristas."
    },
    {
      icon: <FaMobileAlt className="text-4xl text-[#f9c900]" />,
      title: "Interface Intuitiva",
      description: "Design moderno e fácil de usar, com acesso rápido a todas as funcionalidades do aplicativo."
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
