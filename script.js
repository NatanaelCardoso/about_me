
const textos = {
  pt: {
    home: "Início",
    about: "Sobre",
    projects: "Projetos",
    contact: "Contato",
    aboutTitle: "Sobre Mim",
    aboutParagraph:
      "Sou um desenvolvedor front-end apaixonado por criar aplicações modernas, responsivas e intuitivas. Adoro transformar ideias em realidade através de código limpo e design funcional. Meu interesse constante em estudar e aprender coisas novas, como diferentes linguagens e tecnologias, me permite aprimorar continuamente minha bagagem de conhecimento e garantir que eu entregue o meu melhor em todos os projetos. ",
    projectsTitle: "Projetos",
    contactTitle: "Entre em contato",
    footerText: "Vamos trabalhar juntos!",
    sendButton: "Enviar pelo WhatsApp",
    placeholderName: "Nome",
    placeholderMessage: "Digite sua mensagem",
    main_description: "Criando experiências web funcionais e bonitas",
  },
  en: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    aboutTitle: "About Me",
    aboutParagraph:
      "I am a front-end developer passionate about creating modern, responsive, and intuitive applications. I love turning ideas into reality through clean code and functional design. My constant interest in studying and learning new things, such as different languages and technologies, allows me to continuously improve my knowledge base and ensure I deliver my best in every project.",
    projectsTitle: "Projects",
    contactTitle: "Contact us",
    footerText: "Let's work together!",
    sendButton: "Send Whatsapp",
    placeholderName: "Name",
    placeholderMessage: "Type your message",
    main_description: "Creating beautiful and functional web experiences",
  },
};

function safeQuery(selector) {
  return document.querySelector(selector);
}

function mudarIdioma(lang) {
  const t = textos[lang];
  if (!t) return;

  const elHome = safeQuery('a[href="#home"]');
  const elAbout = safeQuery('a[href="#about"]');
  const elProjects = safeQuery('a[href="#projects"]');
  const elContact = safeQuery('a[href="#contact"]');

  if (elHome) elHome.textContent = t.home;
  if (elAbout) elAbout.textContent = t.about;
  if (elProjects) elProjects.textContent = t.projects;
  if (elContact) elContact.textContent = t.contact;

  const mainDesc = safeQuery('#main_description');
  if (mainDesc) mainDesc.textContent = t.main_description;

  const aboutTitle = safeQuery('.about-title');
  if (aboutTitle) aboutTitle.textContent = t.aboutTitle;

  const aboutParagraph = safeQuery('.about-paragraph');
  if (aboutParagraph) aboutParagraph.textContent = t.aboutParagraph;

  const projectsTitle = safeQuery('.title-project');
  if (projectsTitle) projectsTitle.textContent = t.projectsTitle;

  const contactTitle = safeQuery('.title-contact');
  if (contactTitle) contactTitle.textContent = t.contactTitle;

  const footerP = safeQuery('.footer-p');
  if (footerP) footerP.textContent = t.footerText;

  const formButton = safeQuery('.form-button');
  if (formButton) formButton.textContent = t.sendButton;

  const inputName = safeQuery('input[placeholder]');
  if (inputName) inputName.placeholder = t.placeholderName;

  const textarea = safeQuery('textarea[placeholder]');
  if (textarea) textarea.placeholder = t.placeholderMessage;


  document.querySelectorAll('.language-selector img').forEach(img => {
    img.classList.remove('active');
    if (img.getAttribute('data-lang') === lang) {
      img.classList.add('active');
    }
  });

  localStorage.setItem("lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  // carregar idioma salvo
  const lang = localStorage.getItem("lang") || "en";
  mudarIdioma(lang);

  // adicionar listeners nas bandeiras (caso não use onclick inline)
  document.querySelectorAll('.language-selector img').forEach(img => {
    img.addEventListener('click', () => {
      const l = img.getAttribute('data-lang');
      if (l) mudarIdioma(l);
    });
  });

  // botão WhatsApp
  const btn = document.getElementById('btn-whatsapp');
  if (btn) {
    btn.addEventListener('click', enviarWhatsApp);
  }
});

function enviarWhatsApp() {
  const nomeEl = document.querySelector('input[placeholder]');
  const textoEl = document.querySelector('textarea[placeholder]');
  const nome = nomeEl ? nomeEl.value.trim() : "";
  const mensagem = textoEl ? textoEl.value.trim() : "";

  if (!mensagem) {
    alert("Por favor, digite uma mensagem antes de enviar.");
    return;
  }

  const telefone = "5583996303794";
  const texto = `Olá! Meu nome é ${nome || "visitante"}. ${mensagem}`;
  const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;
  window.open(url, "_blank");
}
