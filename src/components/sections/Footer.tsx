"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Drive Balance</h3>
            <p className="text-[#cccccc] mb-4">Equilíbrio que move você.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#f9c900] hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-[#f9c900] hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-[#f9c900] hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-[#f9c900] hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Produto</h3>
            <ul className="space-y-2 text-[#cccccc]">
              <li><a href="#" className="hover:text-[#f9c900] transition-colors">Recursos</a></li>
              <li><a href="#" className="hover:text-[#f9c900] transition-colors">Como Funciona</a></li>
              <li><a href="#" className="hover:text-[#f9c900] transition-colors">Preços</a></li>
              <li><a href="#" className="hover:text-[#f9c900] transition-colors">FAQ</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Empresa</h3>
            <ul className="space-y-2 text-[#cccccc]">
              <li><a href="#" className="hover:text-[#f9c900] transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-[#f9c900] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#f9c900] transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-[#f9c900] transition-colors">Contato</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Contato</h3>
            <p className="text-[#cccccc] mb-2">Tem alguma dúvida?</p>
            <a href="mailto:contato@drivebalance.com" className="flex items-center text-[#f9c900] hover:underline">
              <FaEnvelope className="mr-2" /> contato@drivebalance.com
            </a>
          </motion.div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#cccccc] text-sm mb-4 md:mb-0">
              &copy; {currentYear} Drive Balance. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-[#cccccc]">
              <a href="#" className="hover:text-[#f9c900] transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-[#f9c900] transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-[#f9c900] transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
