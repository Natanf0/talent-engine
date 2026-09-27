/**
 * Configuração de contatos
 * Preencha as strings abaixo com os links reais. 
 * Se estiverem vazias, o botão correspondente será ocultado/desativado.
 */
const siteConfig = {
    email: "",      // ex: "mailto:contato@talentengine.com.br"
    linkedin: "",   // ex: "https://linkedin.com/company/talentengine"
    github: ""      // ex: "https://github.com/talentengine"
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Atualizar ano do copyright
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Menu Mobile
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (mobileBtn && navMenu) {
        mobileBtn.addEventListener('click', () => {
            const isExpanded = mobileBtn.getAttribute('aria-expanded') === 'true';
            mobileBtn.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
        });

        // Fechar menu ao clicar em um link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileBtn.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('active');
            });
        });
    }

    // 3. Renderizar Contatos dinâmicos
    const ctaContainer = document.getElementById('cta-container');
    const fallbackBtn = document.getElementById('btn-fallback');
    const footerContact = document.getElementById('footer-contact');

    let hasContact = false;
    let mainBtnHtml = '';
    let footerHtml = '<h3>Contato</h3><ul>';

    if (siteConfig.email) {
        hasContact = true;
        mainBtnHtml += `<a href="${siteConfig.email}" class="btn btn-primary">Fale com a Talent Engine</a>`;
        footerHtml += `<li><a href="${siteConfig.email}">E-mail</a></li>`;
    }
    
    if (siteConfig.linkedin) {
        hasContact = true;
        footerHtml += `<li><a href="${siteConfig.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>`;
    }
    
    if (siteConfig.github) {
        hasContact = true;
        footerHtml += `<li><a href="${siteConfig.github}" target="_blank" rel="noopener noreferrer">GitHub</a></li>`;
    }
    footerHtml += '</ul>';

    if (hasContact) {
        // Se houver e-mail, adiciona o botão primário. Adicionamos o botão "Conheça a solução" como secundário.
        if (ctaContainer) {
            ctaContainer.innerHTML = mainBtnHtml + `<a href="#solucao" class="btn btn-secondary">Conheça a solução</a>`;
        }
        if (footerContact) {
            footerContact.innerHTML = footerHtml;
        }
    } else {
        // Se não houver contatos, esconde o botão primário e deixa o secundário navegável, garantimos que o fallback vire um link válido
        if (ctaContainer && fallbackBtn) {
            ctaContainer.innerHTML = `<a href="#solucao" class="btn btn-primary">Conheça a solução</a>`;
        }
        if (footerContact) {
            footerContact.innerHTML = '';
        }
        
        // Atualiza o menu do Header para remover o "Fale conosco" se não houver contato apontando pra lugar nenhum
        const headerNavBtn = document.querySelector('.nav-menu .nav-btn');
        if (headerNavBtn) {
            headerNavBtn.href = "#sobre";
            headerNavBtn.textContent = "Sobre nós";
        }
    }
});
