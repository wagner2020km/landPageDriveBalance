"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaMoneyBillWave, FaSmile } from 'react-icons/fa';

const ProblemSolutionSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

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
            Desafios na <span className="text-[#f9c900]">Direção</span>, 
            <br />Soluções em <span className="text-[#f9c900]">Equilíbrio</span>
          </h2>
          <p className="text-[#cccccc] max-w-2xl mx-auto">
            Entendemos os desafios diários de motoristas e criamos soluções que transformam cada viagem em uma experiência mais segura, econômica e prazerosa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6">Os Desafios</h3>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.li variants={itemVariants} className="flex items-start">
                <div className="bg-[#f9c900]/10 p-3 rounded-full mr-4">
                  <FaShieldAlt className="text-[#f9c900] text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Segurança Comprometida</h4>
                  <p className="text-[#cccccc]">Motoristas frequentemente desconhecem padrões de condução arriscados que podem levar a acidentes.</p>
                </div>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start">
                <div className="bg-[#f9c900]/10 p-3 rounded-full mr-4">
                  <FaMoneyBillWave className="text-[#f9c900] text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Gastos Excessivos</h4>
                  <p className="text-[#cccccc]">Consumo de combustível elevado devido a hábitos de condução ineficientes e falta de monitoramento.</p>
                </div>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start">
                <div className="bg-[#f9c900]/10 p-3 rounded-full mr-4">
                  <FaSmile className="text-[#f9c900] text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Experiência Estressante</h4>
                  <p className="text-[#cccccc]">Dirigir se torna uma tarefa estressante sem feedback construtivo e orientação para melhorias.</p>
                </div>
              </motion.li>
            </motion.ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="card"
          >
            <h3 className="text-2xl font-bold mb-6">Nossa Solução</h3>
            <p className="text-[#cccccc] mb-6">
              O Drive Balance transforma sua experiência ao volante através de:
            </p>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <motion.li variants={itemVariants} className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-[#f9c900] mr-3"></div>
                <p>Monitoramento em tempo real do seu estilo de condução</p>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-[#f9c900] mr-3"></div>
                <p>Análise detalhada de padrões e sugestões personalizadas</p>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-[#f9c900] mr-3"></div>
                <p>Economia de combustível através de orientações inteligentes</p>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-[#f9c900] mr-3"></div>
                <p>Alertas de segurança preventivos para evitar riscos</p>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-[#f9c900] mr-3"></div>
                <p>Interface intuitiva com feedback construtivo e motivador</p>
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
