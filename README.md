# 💰 Ticto Finance

Uma aplicação moderna de controle financeiro pessoal desenvolvida com Next.js, React e TypeScript. Gerencie suas receitas, despesas e acompanhe seu saldo de forma intuitiva e responsiva.

![Ticto Finance](https://img.shields.io/badge/Next.js-16.0.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Sass](https://img.shields.io/badge/Sass-1.93.2-pink?style=for-the-badge&logo=sass)

## ✨ Funcionalidades

### 📊 **Dashboard Financeiro**

- **Cards de Resumo**: Visualização rápida de entradas, saídas e saldo total
- **Formatação de Moeda**: Valores em Real brasileiro (BRL)
- **Cálculo Automático**: Saldo calculado automaticamente baseado nas transações

### 💳 **Gestão de Transações**

- **Adicionar Transações**: Modal intuitivo para cadastro de receitas e despesas
- **Categorização**: Organize transações por categorias personalizadas
- **Tipos de Transação**: Diferenciação clara entre entradas e saídas
- **Exclusão**: Remova transações com um clique

### 📱 **Design Responsivo**

- **Mobile First**: Interface otimizada para dispositivos móveis
- **Breakpoints Inteligentes**: Adaptação automática para diferentes tamanhos de tela
- **Touch Friendly**: Elementos interativos otimizados para toque
- **Acessibilidade**: Suporte completo a leitores de tela e navegação por teclado

### 🎨 **Interface Moderna**

- **Design System**: Paleta de cores consistente e profissional
- **Animações Suaves**: Transições e efeitos visuais elegantes
- **Ícones Lucide**: Iconografia moderna e consistente
- **Tipografia Roboto**: Fonte otimizada para legibilidade

## 🚀 Tecnologias Utilizadas

### **Frontend**

- **[Next.js 16.0.0](https://nextjs.org/)** - Framework React com App Router
- **[React 19.2.0](https://react.dev/)** - Biblioteca de interface de usuário
- **[TypeScript 5.0](https://www.typescriptlang.org/)** - Tipagem estática
- **[Sass 1.93.2](https://sass-lang.com/)** - Pré-processador CSS

### **Ícones e UI**

- **[Lucide React 0.546.0](https://lucide.dev/)** - Biblioteca de ícones moderna
- **CSS Modules** - Estilização modular e scoped

### **Ferramentas de Desenvolvimento**

- **[ESLint 9](https://eslint.org/)** - Linting de código
- **[Next.js ESLint Config](https://nextjs.org/docs/app/building-your-application/configuring/eslint)** - Configuração otimizada

## 📦 Instalação

### Pré-requisitos

- Node.js 18+
- npm, yarn, pnpm ou bun

### Passos para Instalação

1. **Clone o repositório**

   ```bash
   git clone https://github.com/seu-usuario/ticto-finance.git
   cd ticto-finance
   ```

2. **Instale as dependências**

   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. **Execute o servidor de desenvolvimento**

```bash
npm run dev
   # ou
yarn dev
   # ou
pnpm dev
   ```

1. **Acesse a aplicação**

   Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 🏗️ Estrutura do Projeto

```text
ticto-finance/
├── src/
│   ├── app/                    # App Router do Next.js
│   │   ├── globals.scss        # Estilos globais
│   │   ├── layout.tsx          # Layout principal
│   │   ├── page.tsx            # Página inicial
│   │   └── page.module.scss    # Estilos da página
│   ├── components/             # Componentes React
│   │   ├── Header/            # Cabeçalho da aplicação
│   │   ├── SummaryCards/       # Cards de resumo financeiro
│   │   ├── TransactionList/    # Lista de transações
│   │   └── TransactionModal/   # Modal de cadastro
│   ├── styles/                # Variáveis e mixins Sass
│   │   └── _variables.scss    # Cores e configurações
│   ├── types/                 # Definições TypeScript
│   │   └── Transaction.ts      # Interface de transação
│   └── assets/                # Recursos estáticos
│       ├── icons/             # Ícones SVG
│       └── image/            # Imagens
├── public/                    # Arquivos públicos
├── package.json              # Dependências e scripts
├── tsconfig.json             # Configuração TypeScript
├── next.config.ts            # Configuração Next.js
└── README.md                # Documentação
```

## 🎯 Componentes Principais

### **Header**

- Logo da aplicação
- Botão de nova transação (responsivo)
- Navegação principal

### **SummaryCards**

- **Card de Entradas**: Total de receitas
- **Card de Saídas**: Total de despesas
- **Card de Saldo**: Saldo líquido calculado

### **TransactionList**

- Lista responsiva de transações
- Formatação de valores em BRL
- Botões de exclusão por transação
- Layout adaptativo (grid em desktop, stack em mobile)

### **TransactionModal**

- Formulário de cadastro de transações
- Validação de campos obrigatórios
- Seleção de tipo (entrada/saída)
- Categorização personalizada

## 📱 Responsividade

### **Breakpoints**

- **Mobile**: ≤ 640px
- **Tablet**: 641px - 1024px
- **Desktop**: ≥ 1025px

### **Adaptações Mobile**

- Cards empilhados verticalmente
- Lista de transações em layout vertical
- Modal otimizado para telas pequenas
- Botões com tamanho adequado para toque
- Font-size 16px para prevenir zoom no iOS

## 🎨 Design System

### **Paleta de Cores**

```scss
$primary-color: #30107D;      // Roxo principal
$success-color: #22c55e;      // Verde para entradas
$danger-color: #ef4444;       // Vermelho para saídas
$background-color: #F1F5F8;   // Fundo claro
$add-button-color: #401A9B;    // Botão de ação
$card-title-color: #484F55;    // Texto secundário
```

### **Tipografia**

- **Fonte Principal**: Roboto (Google Fonts)
- **Fallback**: System fonts (-apple-system, BlinkMacSystemFont, etc.)
- **Pesos**: 400 (Regular), 500 (Medium), 700 (Bold)

## 🚀 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Servidor de desenvolvimento

# Produção
npm run build        # Build para produção
npm run start        # Servidor de produção

# Qualidade de Código
npm run lint         # Verificação ESLint
```

## 🔧 Configurações

### **Next.js**

- App Router habilitado
- Webpack como bundler
- Otimizações automáticas de imagem e fontes

### **TypeScript**

- Strict mode habilitado
- Tipagem completa dos componentes
- Interfaces bem definidas

### **Sass**

- Variáveis centralizadas
- Mixins para responsividade
- CSS Modules para scoping

## 🌟 Próximas Funcionalidades

- [ ] **Persistência de Dados**: Integração com banco de dados
- [ ] **Filtros e Busca**: Filtros por categoria, data e valor
- [ ] **Relatórios**: Gráficos e relatórios financeiros
- [ ] **Categorias Predefinidas**: Sistema de categorias inteligente
- [ ] **Exportação**: Exportar dados para CSV/PDF
- [ ] **Metas Financeiras**: Definição e acompanhamento de objetivos
- [ ] **Notificações**: Lembretes e alertas personalizados

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Desenvolvido por

**Lucas Muryllo** - Desenvolvedor Frontend

---
