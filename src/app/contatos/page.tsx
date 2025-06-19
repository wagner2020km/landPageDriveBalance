"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const FormularioContato: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("sending");

    // Aqui você pode fazer a chamada para uma API ou serviço para enviar a mensagem
    // Por enquanto, só simulo um delay e sucesso:
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // simula delay

      setStatus("success");
      setFormData({ nome: "", email: "", assunto: "", mensagem: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="section-padding">
      <div className="container-custom max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Fale <span className="text-[#f9c900]">Conosco</span>
          </h1>
          <p className="text-[#cccccc] max-w-2xl mx-auto">
            Preencha o formulário abaixo para entrar em contato com a equipe Drive Balance.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <label htmlFor="nome" className="block mb-2 font-semibold">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-gray-600 bg-black p-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#f9c900]"
              placeholder="Seu nome"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-gray-600 bg-black p-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#f9c900]"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label htmlFor="assunto" className="block mb-2 font-semibold">
              Assunto
            </label>
            <input
              type="text"
              id="assunto"
              name="assunto"
              value={formData.assunto}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-gray-600 bg-black p-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#f9c900]"
              placeholder="Assunto da mensagem"
            />
          </div>

          <div>
            <label htmlFor="mensagem" className="block mb-2 font-semibold">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              required
              rows={5}
              className="w-full rounded-md border border-gray-600 bg-black p-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#f9c900]"
              placeholder="Escreva sua mensagem aqui..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-[#f9c900] text-black font-bold px-6 py-3 rounded-md hover:bg-yellow-500 transition-colors disabled:opacity-50"
          >
            {status === "sending" ? "Enviando..." : "Enviar Mensagem"}
          </button>

          {status === "success" && (
            <p className="text-green-400 mt-4">Mensagem enviada com sucesso!</p>
          )}
          {status === "error" && (
            <p className="text-red-500 mt-4">
              Ocorreu um erro ao enviar a mensagem. Tente novamente.
            </p>
          )}
        </motion.form>
      </div>

      <footer className="bg-black text-[#cccccc] min-h-[200px] flex flex-col justify-center items-center text-center px-4 py-10 mt-20">
        <div className="w-full max-w-6xl">
          <div className="flex flex-col items-center gap-6">
            <div className="text-white text-xl font-bold">Drive Balance</div>
            <ul className="flex flex-wrap justify-center gap-4 text-sm">
              <li>
                <a href="/" className="hover:text-[#f9c900] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#recursos" className="hover:text-[#f9c900] transition-colors">
                  Recursos
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-[#f9c900] transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a
                  href="/politica-de-privacidade"
                  className="hover:text-[#f9c900] transition-colors"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="/termos-de-uso" className="hover:text-[#f9c900] transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="/cookies" className="hover:text-[#f9c900] transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-4 text-xs text-gray-500">
            © 2025 Drive Balance. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FormularioContato;
