# Entrelinhas — Site do Parceiro

Site institucional do **Entrelinhas**, projeto de extensão do IFPR Campus Londrina que conecta estudantes à leitura de literatura nacional através de pesquisa, comunidade e indicações de livros.

Projeto desenvolvido na disciplina de **Extensão II** — Engenharia de Dados e Construção do Site.

## 🔗 Demo

Após publicar com o GitHub Pages (veja abaixo), o site ficará disponível em:

```
https://SEU-USUARIO.github.io/entrelinhas/
```

## 📁 Estrutura do projeto

```
entrelinhas/
├── index.html        # estrutura das páginas (Home, Sobre, Serviços, Participe, Comunidade)
├── css/
│   └── style.css     # estilos e identidade visual
├── js/
│   └── script.js      # navegação entre seções (SPA simples, sem recarregar a página)
└── README.md
```

## ✨ Funcionalidades

- **Navegação em abas** ("lombadas de livro"): Home, Sobre, Serviços, Participe e Comunidade, sem recarregar a página.
- **Página Participe**: QR Code funcional (gerado dinamicamente) e botão que leva direto ao formulário de pesquisa.
- **Botão flutuante de feedback**, visível em todas as páginas, que leva ao formulário de avaliação do projeto.
- **Integração com Instagram** do parceiro (@ifprlondrina).
- **Seção de prova social** (depoimentos), pronta para receber relatos reais dos participantes.
- Layout responsivo, com foco de teclado visível e respeito à preferência de "reduzir movimento" do usuário.

## 🚀 Como publicar no GitHub Pages

1. Crie um repositório no GitHub (ex: `entrelinhas`) e envie estes arquivos:
   ```bash
   git init
   git add .
   git commit -m "Primeira versão do site Entrelinhas"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/entrelinhas.git
   git push -u origin main
   ```
2. No GitHub, vá em **Settings → Pages**.
3. Em **Source**, selecione a branch `main` e a pasta `/ (root)`.
4. Salve. Em alguns minutos o site estará no ar em `https://SEU-USUARIO.github.io/entrelinhas/`.

## 🛠️ Rodando localmente

Basta abrir o `index.html` diretamente no navegador, ou, para evitar restrições de arquivos locais, rodar um servidor simples:

```bash
python3 -m http.server 8000
```

E acessar `http://localhost:8000`.

## 🔗 Links importantes usados no site

- Formulário de pesquisa: https://forms.gle/stNEmNsnSGmgvugS6
- Formulário de feedback: https://forms.gle/eQynqdgZPKQyvCjd9
- Instagram do parceiro: https://www.instagram.com/ifprlondrina
- Arte oficial do QR Code (Canva): https://canva.link/h7t5lvf4rzqpov6

## 📄 Licença

Projeto acadêmico — uso livre para fins educacionais no âmbito do IFPR Campus Londrina.
