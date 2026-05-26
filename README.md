# Dogs

Uma plataforma moderna de rede social voltada para entusiastas de animais de estimação, focada em performance e experiência do usuário fluida através de tecnologias frontend avançadas.

---

### Stack Tecnológica

A arquitetura do projeto foi planejada para garantir escalabilidade e uma interface altamente reativa. Abaixo, as principais tecnologias e o porquê de suas escolhas:

* **React 19**: Utilizado como núcleo da aplicação para aproveitar o novo sistema de renderização e otimizações de hooks, garantindo uma manipulação eficiente do DOM e estado da UI.
* **Vite**: Escolhido como ferramenta de build devido ao seu HMR (Hot Module Replacement) extremamente rápido e pipeline de build otimizado baseado em ES Modules.
* **Victory**: Implementado para a visualização de dados e estatísticas. Sua escolha deve-se à flexibilidade na criação de gráficos modulares e suporte nativo a interações complexas dentro do ecossistema React.
* **React Router 7**: Responsável pelo gerenciamento de rotas e navegação SPA. Utilizado para garantir uma navegação sem recarregamento de página, essencial para a experiência de aplicativo web moderno.
* **CSS Modules**: Adotado para o escopo local de estilos, prevenindo conflitos e garantindo que o design permaneça modular e fácil de manter conforme o projeto cresce.
* **Context API**: Utilizada para o gerenciamento de estado global (autenticação e dados do usuário), eliminando a necessidade de prop-drilling e mantendo a lógica de negócio centralizada e acessível.

### Engenharia e Performance

O projeto aplica diversos conceitos de **Creative Development** e otimização de performance para entregar uma experiência interativa:

* **Gerenciamento de Estado**: Fluxo de autenticação robusto via JWT, com persistência em LocalStorage e revalidação automática de tokens.
* **Interações em Tempo Real**: Feed dinâmico com carregamento infinito e atualização de comentários sem refresh, priorizando o feedback imediato ao usuário.
* **Animações e Micro-interações**: Uso de transições CSS otimizadas (`animeLeft`, `scaleUp`) e componentes Skeleton para reduzir a percepção de tempo de carregamento e guiar o foco visual.
* **Otimização de Imagens**: Carregamento lazy-loading e tratamento de estados de erro/carregamento para garantir que a interface permaneça estável durante o consumo de dados da API.

### Funcionalidades

* **Autenticação Completa**: Login, criação de conta e recuperação de senha.
* **Feed Personalizado**: Visualização de fotos, contagem de visualizações e comentários.
* **Perfil do Usuário**: Estatísticas detalhadas de engajamento e gerenciamento de postagens.
* **Postagem de Fotos**: Upload e integração com API REST para gerenciamento de conteúdo.

### Instalação e Execução

Para rodar o projeto localmente, siga os passos abaixo:

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. O projeto estará disponível em `http://localhost:5173`.

---

**Observações**: Este projeto foi desenvolvido com foco em boas práticas de engenharia de software frontend, visando um código limpo, componentização inteligente e alta performance.

Para mais informações ou colaborações, entre em contato através dos canais oficiais do repositório.
