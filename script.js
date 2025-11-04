// script.js

const textos = {
  pt: {
    home: "Início",
    about: "Sobre",
    projects: "Projetos",
    contact: "Contato",
    aboutTitle: "Sobre Mim",
    aboutParagraph:
      "Sou um desenvolvedor front-end apaixonado por criar aplicações modernas, responsivas e intuitivas. Adoro transformar ideias em realidade através de código limpo e design funcional.",
    projectsTitle: "Projetos",
    contactTitle: "Entre em contato",
    footerText: "Vamos trabalhar juntos!",
    sendButton: "Enviar pelo WhatsApp",
    placeholderName: "Nome",
    placeholderMessage: "Digite sua mensagem",
  },
  en: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    aboutTitle: "About Me",
    aboutParagraph:
      "I'm a passionate front-end developer focused on building modern, responsive, and user-friendly web applications. I love turning ideas into reality through clean code and intuitive design.",
    projectsTitle: "Projects",
    contactTitle: "Contact us",
    footerText: "Let's work together!",
    sendButton: "Send Whatsapp",
    placeholderName: "Name",
    placeholderMessage: "Type your message",
  },
};

function mudarIdioma(lang) {
  const t = textos[lang];

  document.querySelector('a[href="#home"]').textContent = t.home;
  document.querySelector('a[href="#about"]').textContent = t.about;
  document.querySelector('a[href="#projects"]').textContent = t.projects;
  document.querySelector('a[href="#contact"]').textContent = t.contact;

  document.querySelector(".about-title").textContent = t.aboutTitle;
  document.querySelector(".about-paragraph").textContent = t.aboutParagraph;
  document.querySelector(".title-project").textContent = t.projectsTitle;
  document.querySelector(".title-contact").textContent = t.contactTitle;
  document.querySelector(".footer-p").textContent = t.footerText;
  document.querySelector(".form-button").textContent = t.sendButton;

  document.querySelector('input[placeholder]').placeholder = t.placeholderName;
  document.querySelector('textarea[placeholder]').placeholder = t.placeholderMessage;

  // Destaque visual da bandeira ativa
  document.querySelectorAll('.language-selector img').forEach(img => {
    img.classList.remove('active');
    if (img.getAttribute('data-lang') === lang) {
      img.classList.add('active');
    }
  });

  // Salvar idioma escolhido
  localStorage.setItem("lang", lang);
}

// Carregar idioma salvo
document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "en";
  mudarIdioma(lang);
});

function enviarWhatsApp() {
  const nome = document.querySelector('input[placeholder]').value.trim();
  const mensagem = document.querySelector('textarea[placeholder]').value.trim();

  if (!mensagem) {
    alert("Por favor, digite uma mensagem antes de enviar.");
    return;
  }


  const telefone = "5583996303794"; 

  // Cria o texto que será enviado
  const texto = `Olá! Meu nome é ${nome || "visitante"}. ${mensagem}`;

  // Monta o link do WhatsApp com encode
  const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;

  // Abre o WhatsApp (em nova aba)
  window.open(url, "_blank");
}
