"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Button from "../ui/Button";

// Função para calcular o tempo restante
const calculateTimeLeft = () => {
  const difference = +new Date("2025-06-14T00:00:00") - +new Date();
  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const CTASection: React.FC = () => {
  const [showModal, setShowModal] = useState(true);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
              Pronto para encontrar seu{" "}
              <span className="text-[#f9c900]">equilíbrio</span>?
            </motion.h2>

            <motion.p
              className="text-[#cccccc] max-w-2xl mx-auto mb-8 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Junte-se a milhares de motoristas que já transformaram sua
              experiência ao volante com o Drive Balance. Baixe agora e comece
              a economizar combustível e tenha controle total dos custos,
              consumo e desempenho do seu veículo. Cadastre-se, registre seu
              veículo, insira abastecimentos, despesas e receitas, e acompanhe
              todos os indicadores diretamente no dashboard. Simples, rápido e
              eficiente.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                className="px-8 py-4 text-lg"
                onClick={() =>
                  /*
                  window.open(
                    "https://webpontocom.com.br/apkDriveBanlance/app-driveBalance.apk",
                    "_blank",
                    "noopener,noreferrer"
                  )
                    */
                   alert('Em breve ')
                }
              >
                Baixar Agora <FaArrowRight className="ml-2 inline" />
              </Button>

              <Button variant="secondary" className="px-8 py-4 text-lg">
                Saiba Mais
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Modal com contagem regressiva */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#222] rounded-2xl p-8 max-w-md w-full text-center border border-[#444]"
              initial={{ scale: 0.8, y: -50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: -50 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h2 className="text-2xl md:text-3xl text-[#f9c900] font-bold mb-4">
                🚀 Lançamento Está Próximo!
              </h2>

              <p className="text-sm text-[#888] mb-2">
                Data de lançamento: <span className="text-white font-semibold">14 de Junho de 2025</span>
              </p>

              <p className="text-[#ccc] mb-6">
                Faltam apenas:
              </p>

              <div className="flex justify-center gap-4 mb-6">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-white">
                    {timeLeft.days}
                  </span>
                  <span className="text-sm text-[#aaa]">Dias</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-white">
                    {timeLeft.hours}
                  </span>
                  <span className="text-sm text-[#aaa]">Horas</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-white">
                    {timeLeft.minutes}
                  </span>
                  <span className="text-sm text-[#aaa]">Minutos</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-white">
                    {timeLeft.seconds}
                  </span>
                  <span className="text-sm text-[#aaa]">Segundos</span>
                </div>
              </div>

              <Button
                className="w-full"
                onClick={() => setShowModal(false)}
              >
                Fechar
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CTASection;
