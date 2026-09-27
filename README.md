# Talent Engine - Landing Page

Esta é a página institucional estática da Talent Engine, pronta para ser publicada no GitHub Pages.

## 🚀 Como testar localmente

Não é necessário compilar o projeto. Para visualizá-lo em sua máquina, você pode simplesmente:
1. Abrir o arquivo `index.html` em seu navegador.
2. **Recomendado:** Utilizar um servidor HTTP local para testar a responsividade e os caminhos relativos corretamente. Em seu terminal, execute:
   ```bash
   python3 -m http.server 8000
   ```
   Depois, acesse: [http://localhost:8000](http://localhost:8000)

## ✏️ Como editar textos e contatos

- **Textos:** Todo o conteúdo da página pode ser editado diretamente no arquivo `index.html`. Busque pelas seções correspondentes (ex: `<section id="sobre">`).
- **Contatos (E-mail, LinkedIn, GitHub):** Abra o arquivo `assets/js/main.js` e preencha o objeto `siteConfig` no início do arquivo. Se as strings estiverem vazias, botões e links de contato serão ocultados automaticamente para evitar redirecionamentos quebrados.

```javascript
const siteConfig = {
    email: "mailto:contato@talentengine.com.br",
    linkedin: "https://linkedin.com/company/sua-pagina",
    github: "" 
};
```

## 🎨 Como alterar a identidade visual

- **Cores:** As cores estão definidas como variáveis CSS no início do arquivo `assets/css/styles.css` (`:root`).
- **Logotipo e Favicon:** Substitua os arquivos `assets/img/logotipo.svg` e `favicon.svg` pelas novas versões em vetor. Se precisar usar PNG, certifique-se de atualizar os caminhos no `index.html`.
- **Arquivos SEO e Open Graph:** A URL do site e configurações de compartilhamento encontram-se nas meta-tags `<head>` do arquivo `index.html`. Lembre-se de preencher a URL oficial após o deploy (propriedades `og:url` e `canonical`).

## 🌐 Como publicar no GitHub Pages

Este projeto está configurado para publicação no GitHub Pages de forma simplificada, utilizando apenas arquivos estáticos. O arquivo invisível `.nojekyll` garante que o GitHub não remova pastas ignoradas pelo Jekyll acidentalmente, embora este projeto utilize uma estrutura amigável.

Siga os passos abaixo, ou acesse as opções conforme a interface mais recente do GitHub:

1. Acesse a página do repositório no GitHub.
2. No menu superior, clique em **Settings** (Configurações).
3. Na barra lateral esquerda, clique em **Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Em **Branch**, selecione a branch `main` (ou a branch principal que estiver utilizando) e a pasta `/root`. Clique em **Save**.
6. Aguarde alguns minutos até que o Action do GitHub termine o fluxo. Um link será disponibilizado no topo da página de configurações do Pages (ex: `https://seu-usuario.github.io/nome-do-repositorio/`).

### Configurando uma URL personalizada futuramente

Se desejar apontar um domínio próprio (como `www.talentengine.com.br`) após a página já estar no ar, vá na mesma seção **Pages**, role até **Custom domain**, digite o domínio desejado e clique em Save. Não se esqueça de criar o registro CNAME / A nos servidores DNS do seu provedor apontando para o seu GitHub Pages.
