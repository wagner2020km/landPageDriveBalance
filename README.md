# Drive Balance - Landing Page

Uma landing page moderna e responsiva para o aplicativo Drive Balance, desenvolvida com Next.js, TypeScript e Tailwind CSS.

## Sobre o Projeto

Esta landing page foi criada para divulgar o aplicativo "Drive Balance", um app que ajuda motoristas a equilibrar segurança, economia e prazer na condução. A página apresenta as principais características e benefícios do aplicativo em um design moderno e atraente.

## Tecnologias Utilizadas

- **Next.js 15** - Framework React com renderização do lado do servidor
- **TypeScript** - Superset tipado de JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Biblioteca para animações
- **React Icons** - Ícones para React

## Estrutura do Projeto

- `src/app` - Arquivos principais do Next.js (page.tsx, layout.tsx)
- `src/components/ui` - Componentes de UI reutilizáveis
- `src/components/sections` - Seções da landing page

## Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório ou extraia o arquivo zip
2. Navegue até a pasta do projeto
3. Instale as dependências:

```bash
npm install
# ou
yarn install
```

### Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

Acesse `http://localhost:3000` no seu navegador.

### Build

Para criar uma versão de produção:

```bash
npm run build
# ou
yarn build
```

Para iniciar a versão de produção:

```bash
npm run start
# ou
yarn start
```

## Personalização

### Cores e Estilos

As cores principais e estilos estão definidos em `src/app/globals.css`. As principais variáveis são:

- `--primary-color: #f9c900` - Cor principal (amarelo)
- `--background-start-rgb: 26, 26, 26` - Início do gradiente de fundo
- `--background-end-rgb: 0, 0, 0` - Fim do gradiente de fundo

### Componentes

Cada seção da landing page está em um componente separado na pasta `src/components/sections`, facilitando a personalização e manutenção.

## Responsividade

A landing page é totalmente responsiva, adaptando-se a diferentes tamanhos de tela, desde dispositivos móveis até desktops.

## Licença

Este projeto pode ser utilizado livremente para fins comerciais ou pessoais.
