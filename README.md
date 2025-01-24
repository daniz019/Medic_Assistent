# Assistente Médico Virtual 🚑💻

O **Assistente Médico Virtual** é uma aplicação web que ajuda os usuários a descrever seus sintomas e obter possíveis diagnósticos com base em uma lista de doenças predefinidas. A aplicação utiliza técnicas de **Processamento de Linguagem Natural (NLP)** para mapear os sintomas descritos pelo usuário e sugerir condições médicas prováveis. Com uma interface intuitiva e moderna, o sistema permite ajustes personalizados com base na idade e no gênero, fornecendo diagnósticos mais precisos.

## Funcionalidades ✨

- **Descrição de Sintomas**: O usuário pode descrever seus sintomas em linguagem natural.
- **Processamento Inteligente de Sintomas**: A aplicação processa os sintomas e os traduz para termos médicos padronizados.
- **Sugestão de Diagnósticos**: Com base nos sintomas fornecidos, a aplicação retorna uma lista de diagnósticos possíveis com suas respectivas probabilidades.
- **Ajustes por Idade e Gênero**: Os diagnósticos sugeridos são ajustados conforme o perfil demográfico do usuário (idade e gênero).
- **Interface Moderna e Responsiva**: Desenvolvida para ser acessível e amigável, com transições suaves e uma experiência de usuário imersiva.

## Tecnologias Utilizadas 🛠️

- **Next.js**: Framework React para a construção de aplicações web rápidas e escaláveis.
- **Tailwind CSS**: Framework de utilitários CSS para estilização eficiente e responsiva.
- **Framer Motion**: Biblioteca para criar animações e interações fluidas.
- **TypeScript**: Tipagem estática para maior segurança e escalabilidade do código.
- **Lucide Icons**: Conjunto de ícones elegantes e customizáveis para uma interface clean.

## Como Funciona ⚙️

1. **Início da Consulta**: O usuário começa clicando no botão "Iniciar Consulta".
2. **Preenchimento de Informações**: O usuário preenche um formulário com dados como idade, gênero e descreve seus sintomas.
3. **Processamento de Sintomas**: A aplicação analisa os sintomas e os converte em termos médicos reconhecidos.
4. **Sugestão de Diagnósticos**: Uma lista de possíveis condições médicas é apresentada, cada uma com uma probabilidade associada.
5. **Nova Consulta**: O usuário pode reiniciar o processo a qualquer momento.

## Estrutura do Projeto 📁

- **`pages/index.tsx`**: Página principal que gerencia a lógica de navegação e exibe o formulário de sintomas e resultados.
- **`components/SymptomForm.tsx`**: Componente responsável por capturar os sintomas e dados do usuário.
- **`components/ResultsList.tsx`**: Exibe a lista de diagnósticos sugeridos com base nos sintomas processados.
- **`utils/symptomProcessor.ts`**: Algoritmo que mapeia os sintomas para doenças predefinidas e calcula a probabilidade de cada diagnóstico.
- **`data/diseases.ts`**: Base de dados com a lista de doenças, seus sintomas e descrições detalhadas.
- **`data/synonyms.ts`**: Mapeamento de sinônimos comuns para termos médicos padronizados.
- **`styles/globals.css`**: Estilos globais da aplicação.
- **`types/index.ts`**: Definições de tipos utilizados ao longo do projeto para garantir consistência com TypeScript.

## Pré-requisitos 🔧

- **Node.js** (v14+)
- **npm** ou **yarn** (gerenciador de pacotes)

## Como Executar o Projeto 🚀

1. **Clone este repositório**:
   ```bash
   git clone https://github.com/daniz019/Medic_Assistent.git
   cd Medic_Assistent
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse a aplicação:**
   Abra seu navegador e vá para `http://localhost:3000` para visualizar o Assistente Médico Virtual em ação.

## Aviso Legal ⚠️

Este aplicativo não substitui a consulta médica presencial. As sugestões fornecidas são apenas para fins informativos e educacionais. Em caso de emergência ou sintomas graves, procure atendimento médico imediatamente.

## Segurança 🔒

- Os dados fornecidos pelos usuários são processados localmente e não são armazenados
- Nenhuma informação pessoal é compartilhada com terceiros
- As sugestões de diagnóstico são baseadas em algoritmos predefinidos e não substituem o diagnóstico médico profissional

## Licença 📝

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para detalhes.
