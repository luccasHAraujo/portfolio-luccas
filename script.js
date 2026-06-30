// ==========================================================================
// FUNCIONALIDADE 1: ALTERNÂNCIA DE TEMA CLARO / ESCURO
// ==========================================================================

// Captura referências do elemento body e do botão de alternância
const bodyElement = document.body;
const themeToggleButton = document.getElementById('theme-toggle');

// Ouvinte de evento de clique para alternar as classes CSS de controle de temas
themeToggleButton.addEventListener('click', () => {
    if (bodyElement.classList.contains('dark-theme')) {
        bodyElement.classList.remove('dark-theme');
        bodyElement.classList.add('light-theme');
    } else {
        bodyElement.classList.remove('light-theme');
        bodyElement.classList.add('dark-theme');
    }
});

// ==========================================================================
// FUNCIONALIDADE 2: VALIDAÇÃO E SIMULAÇÃO DE ENVIO DO FORMULÁRIO DE CONTATO
// ==========================================================================

// Captura a referência do formulário HTML
const contactForm = document.getElementById('form-contato');

contactForm.addEventListener('submit', function(event) {
    // Impede o comportamento padrão de recarregar a página ao submeter
    event.preventDefault();

    // Captura os valores digitados e remove espaços vazios nas extremidades (.trim())
    const inputNome = document.getElementById('nome').value.trim();
    const inputEmail = document.getElementById('email').value.trim();
    const inputMensagem = document.getElementById('mensagem').value.trim();

    // REGEX para validação de formato padrão de e-mail (usuario@dominio.com)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // 1. Validação estrutural: verifica se há algum campo totalmente em branco
    if (inputNome === "" || inputEmail === "" || inputMensagem === "") {
        alert("Por favor, preencha todos os campos do formulário antes de enviar.");
        return; // Interrompe a execução da função
    }

    // 2. Validação lógica: testa se o e-mail atende aos critérios da Expressão Regular
    if (!emailRegex.test(inputEmail)) {
        alert("Por favor, insira um endereço de e-mail válido (exemplo: usuario@dominio.com).");
        return; // Interrompe a execução da função
    }

    // 3. Simulação de envio com sucesso (Valores válidos)
    alert("Mensagem enviada com sucesso!\nObrigado pelo contato, Luccas Henrique responderá em breve.");
    
    // Limpa os campos do formulário de forma limpa para novas interações
    contactForm.reset();
});