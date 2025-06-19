"use client";

import React from "react";
import { motion } from "framer-motion";

const PoliticaDePrivacidade: React.FC = () => {
    return (
        <section className="section-padding">
            <div className="container-custom">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        Política de <span className="text-[#f9c900]">Privacidade</span>
                    </h1>
                    <p className="text-[#cccccc] max-w-2xl mx-auto">
                        Esta Política descreve como coletamos, usamos e protegemos os dados
                        pessoais ao utilizar o sistema Drive Balance.
                    </p>
                </motion.div>

                <div className="space-y-10 text-[#cccccc] max-w-4xl mx-auto text-sm md:text-base leading-relaxed">
                    {[
                        {
                            title: "A sua privacidade é importante para nós.",
                            content: (
                                <>
                                    Esta Política de Privacidade descreve como coletamos, usamos,
                                    armazenamos, compartilhamos e protegemos os seus dados
                                    pessoais ao utilizar o sistema Drive Balance, acessível pelo
                                    site{" "}
                                    <strong>https://webpontocom.com.br/driveBalance/</strong>.
                                    <br />
                                    <br />
                                    Ao acessar ou utilizar nossos serviços, você concorda com os
                                    termos desta Política.
                                </>
                            ),
                        },
                        {
                            title: "1. Informações que Coletamos",
                            content: (
                                <ul className="list-disc ml-6 space-y-2">
                                    <li>
                                        <strong>Dados de identificação:</strong> nome completo,
                                        CPF, e-mail, telefone;
                                    </li>
                                    <li>
                                        <strong>Dados de acesso:</strong> endereço IP, data e hora
                                        de acesso, tipo de navegador e dispositivo;
                                    </li>
                                    <li>
                                        <strong>Dados operacionais:</strong> registros de
                                        abastecimento, controle de quilometragem, custos
                                        operacionais e dados de veículos;
                                    </li>
                                    <li>
                                        <strong>Cookies e dados de navegação:</strong> para melhorar
                                        a experiência do usuário.
                                    </li>
                                </ul>
                            ),
                        },
                        {
                            title: "2. Finalidade da Coleta",
                            content: (
                                <ul className="list-disc ml-6 space-y-2">
                                    <li>Identificar e autenticar usuários;</li>
                                    <li>Gerenciar e oferecer os serviços do Drive Balance;</li>
                                    <li>Fornecer suporte técnico e atendimento;</li>
                                    <li>Cumprir obrigações legais e regulatórias;</li>
                                    <li>
                                        Analisar o uso da plataforma para aprimoramento contínuo;
                                    </li>
                                    <li>
                                        Enviar comunicações relevantes, quando autorizado pelo
                                        usuário.
                                    </li>
                                </ul>
                            ),
                        },
                        {
                            title: "3. Compartilhamento de Dados",
                            content: (
                                <ul className="list-disc ml-6 space-y-2">
                                    <li>
                                        Fornecedores que auxiliam na operação da plataforma, sob
                                        contrato;
                                    </li>
                                    <li>
                                        Autoridades legais, quando exigido por lei ou ordem
                                        judicial;
                                    </li>
                                    <li>
                                        Com consentimento expresso, para parcerias ou recursos
                                        adicionais.
                                    </li>
                                </ul>
                            ),
                        },
                        {
                            title: "4. Segurança da Informação",
                            content: (
                                <ul className="list-disc ml-6 space-y-2">
                                    <li>Criptografia de dados sensíveis;</li>
                                    <li>Controles de acesso por permissão;</li>
                                    <li>Monitoramento de atividades suspeitas;</li>
                                    <li>Backups regulares e ambiente seguro de hospedagem.</li>
                                </ul>
                            ),
                        },
                        {
                            title: "5. Direitos dos Titulares",
                            content: (
                                <>
                                    Conforme a LGPD, você tem direito à:
                                    <ul className="list-disc ml-6 space-y-2 mt-2">
                                        <li>Confirmação do tratamento de dados;</li>
                                        <li>Acesso aos seus dados;</li>
                                        <li>Correção de dados incompletos ou desatualizados;</li>
                                        <li>
                                            Anonimização, bloqueio ou eliminação de dados
                                            desnecessários;
                                        </li>
                                        <li>Portabilidade de dados;</li>
                                        <li>Revogação de consentimento;</li>
                                        <li>
                                            Solicitação de eliminação dos dados tratados com base no
                                            consentimento.
                                        </li>
                                    </ul>
                                    <p className="mt-2">
                                        Para exercer seus direitos, entre em contato pelo e-mail:{" "}
                                        <strong>contato@webpontocom.com.br</strong>.
                                    </p>
                                </>
                            ),
                        },
                        {
                            title: "6. Retenção e Exclusão de Dados",
                            content:
                                "Manteremos seus dados apenas pelo tempo necessário para cumprir as finalidades ou conforme exigido por obrigações legais.",
                        },
                        {
                            title: "7. Cookies e Tecnologias de Rastreamento",
                            content: (
                                <>
                                    Utilizamos cookies para:
                                    <ul className="list-disc ml-6 space-y-2 mt-2">
                                        <li>Autenticar sessões;</li>
                                        <li>Lembrar preferências do usuário;</li>
                                        <li>Realizar análises estatísticas de navegação.</li>
                                    </ul>
                                    <p className="mt-2">
                                        Você pode gerenciar cookies nas configurações do navegador.
                                    </p>
                                </>
                            ),
                        },
                        {
                            title: "8. Alterações nesta Política",
                            content:
                                "Esta Política pode ser atualizada a qualquer momento. Recomendamos revisá-la periodicamente. Alterações entram em vigor após publicação no site.",
                        },
                    ].map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <h2 className="text-xl font-bold text-white mb-3">
                                {section.title}
                            </h2>
                            <div>{section.content}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
           <footer className="bg-black text-[#cccccc] min-h-[200px] flex flex-col justify-center items-center text-center px-4 py-10">
  <div className="w-full max-w-6xl">
    <div className="flex flex-col items-center gap-6">
      <div className="text-white text-xl font-bold">Drive Balance</div>
      <ul className="flex flex-wrap justify-center gap-4 text-sm">
        <li><a href="/" className="hover:text-[#f9c900] transition-colors">Início</a></li>
        <li><a href="#recursos" className="hover:text-[#f9c900] transition-colors">Recursos</a></li>
        <li><a href="#como-funciona" className="hover:text-[#f9c900] transition-colors">Como Funciona</a></li>
        <li><a href="/politica-de-privacidade" className="hover:text-[#f9c900] transition-colors">Política de Privacidade</a></li>
        <li><a href="/termos-de-uso" className="hover:text-[#f9c900] transition-colors">Termos de Uso</a></li>
        <li><a href="/cookies" className="hover:text-[#f9c900] transition-colors">Cookies</a></li>
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

export default PoliticaDePrivacidade;
