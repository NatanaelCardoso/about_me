// script.js
document.addEventListener("DOMContentLoaded", () => {
  const textos = {
    pt: {
      home: "Início",
      about: "Sobre",
      projects: "Projetos",
      contact: "Contato",
      aboutTitle: "Sobre Mim",
      aboutParagraph:
        "Sou um desenvolvedor front-end apaixonado por criar aplicações modernas, responsivas e intuitivas. Adoro transformar ideias em realidade através de código limpo e design funcional. Meu interesse constante em estudar e aprender coisas novas, como diferentes linguagens e tecnologias, me permite aprimorar continuamente minha bagagem de conhecimento e garantir que eu entregue o meu melhor em todos os projetos.",
      projectsTitle: "Projetos",
      contactTitle: "Entre em contato",
      footerText: "Vamos trabalhar juntos!",
      sendButton: "Enviar pelo WhatsApp",
      placeholderName: "Nome",
      placeholderMessage: "Digite sua mensagem",
      main_description: "Criando experiências web funcionais e bonitas",
      hero_h2: "Dev Front End 👨‍💻"
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
      hero_h2: "Front-end Developer 👨‍💻"
    }
  };

  function mudarIdioma(lang) {
    const t = textos[lang] || textos.en;

    // navegação
    const navHome = document.querySelector('a[href="#home"]');
    if (navHome) navHome.textContent = t.home;

    const navAbout = document.querySelector('a[href="#about"]');
    if (navAbout) navAbout.textContent = t.about;

    const navProjects = document.querySelector('a[href="#projects"]');
    if (navProjects) navProjects.textContent = t.projects;

    const navContact = document.querySelector('a[href="#contact"]');
    if (navContact) navContact.textContent = t.contact;

    // hero / descrição principal
    const mainDesc = document.getElementById("main_description");
    if (mainDesc) mainDesc.textContent = t.main_description;

    // h2 do hero (ajustar seletor conforme seu HTML)
    const heroH2 = document.querySelector(".hero-h2");
    if (heroH2) heroH2.textContent = t.hero_h2 || t.heroH2 || "";

    // Sobre
    const aboutTitle = document.querySelector(".about-title");
    if (aboutTitle) aboutTitle.textContent = t.aboutTitle;

    const aboutParagraph = document.querySelector(".about-paragraph");
    if (aboutParagraph) aboutParagraph.textContent = t.aboutParagraph;

    // Projetos / Contato / Footer
    const projectsTitle = document.querySelector(".title-project");
    if (projectsTitle) projectsTitle.textContent = t.projectsTitle;

    const contactTitle = document.querySelector(".title-contact");
    if (contactTitle) contactTitle.textContent = t.contactTitle;

    const footerP = document.querySelector(".footer-p");
    if (footerP) footerP.textContent = t.footerText;

    const formButton = document.querySelector(".form-button");
    if (formButton) formButton.textContent = t.sendButton;

    // Inputs - recomendo dar ids para esses campos no HTML (#nome, #mensagem)
    const nameInput = document.querySelector('input#name') || document.querySelector('input[name="name"]');
    if (nameInput) nameInput.placeholder = t.placeholderName;

    const messageTextarea = document.querySelector('textarea#message') || document.querySelector('textarea[name="message"]');
    if (messageTextarea) messageTextarea.placeholder = t.placeholderMessage;

    // Atualiza destaque das bandeiras (se existirem)
    document.querySelectorAll('.language-selector img').forEach(img => {
      img.classList.toggle('active', img.dataset.lang === lang);
    });
  }

  // --- Inicialização: ler idioma salvo ou padrão
  const savedLang = localStorage.getItem("site_lang") || "pt";
  mudarIdioma(savedLang);

  // --- Eventos das bandeiras / botões (se existirem)
  document.querySelectorAll('.language-selector img').forEach(img => {
    img.addEventListener("click", () => {
      const lang = img.dataset.lang;
      if (!lang) return;
      mudarIdioma(lang);
      localStorage.setItem("site_lang", lang);
    });
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
