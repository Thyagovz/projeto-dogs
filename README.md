# Projeto Dogs — Portfolio

Este repositório contém o projeto "Dogs" construído com React + Vite. Este README descreve o propósito do projeto, a estrutura do código, dependências e pontos que podem ser destacados.

## Visão geral

Projeto front-end em React que simula um feed de fotos (Dogs), com:

- Feed paginado de fotos
- Modal para visualização de imagem e detalhes
- Upload de imagens e formulários (login/registro)
- Rotas SPA e gerenciamento de usuário via Context
- Hooks customizados para abstração de lógica

Ideal para demonstrar componentes reutilizáveis, hooks customizados e boas práticas de organização.

## Tecnologias e dependências principais

- React + Vite
- React Router (rotas)
- CSS Modules para estilos isolados
- Ferramentas de build e scripts via npm

## Estrutura do projeto (pontos-chave)

- index.html — HTML base
- vite.config.js — configuração do Vite
- vercel.json — configuração de rewrite para SPA (deploy Vercel)
- src/
  - main.jsx — entrada da aplicação
  - App.jsx — componente raiz com rotas
  - api.js — abstração/integração com backend/API
  - UserContext.jsx — contexto para autenticação/usuário
  - App.css — estilos globais
  - Components/ — pasta com componentes e páginas
    - Header.jsx, Footer.jsx
    - Home.jsx, NotFound.jsx
    - Feed/
      - Feed.jsx, FeedPhotos.jsx, FeedModal.jsx, FeedPhotosItem.jsx
    - Forms e páginas de usuário, login e upload
  - Hooks/
    - useFetch.jsx — fetch e estados de carregamento/erro
    - useForm.jsx — gerenciamento de formulários
    - useMedia.jsx — resposta a media queries

## Componentes e hooks importantes

- Header, Footer — layout e navegação
- Feed, FeedPhotos, FeedModal — galeria e modal de imagem
- FeedPhotosItem — item da galeria (imagem, likes, comentários)
- useFetch — lógica de requisições reutilizável (paginação, cache simples)
- useForm — validação e controle de inputs
- UserContext — provider para estado de usuário e autenticação

## Estilos

- CSS Modules para componentes específicos (ex.: Footer.module.css, Header.module.css, FeedModal.module.css)
- App.css para estilos globais e resets

## API e Autenticação

- Padrão de consumo centralizado em src/api.js — facilita troca de URL/base ou headers de autenticação.
- UserContext gerencia login, logout e dados do usuário, compartilhando com componentes via contexto.

## Pontos para destacar no portfólio

- Componentização clara e reutilização de componentes.
- Hooks customizados para separar lógica de apresentação.
- Uso de Context para gerenciamento de usuário.
- Estrutura de pastas organizada para escala.
- Adaptação responsiva via useMedia e CSS Modules.
- Preparado para deploy moderno (Vercel/Vite).

## Como rodar localmente

1. Clone o repositório e entre na pasta do projeto:

```powershell
git clone <repo-url>
```

2. Instale dependências:

```powershell
npm install
```

3. Rode o servidor de desenvolvimento:

```powershell
npm run dev
```
