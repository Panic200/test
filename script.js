// File: script.js

document.addEventListener('DOMContentLoaded', () => {
  // ☰ Menu responsivo
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.getElementById('nav-links');

  if (mobileMenu && navLinks) {
    mobileMenu.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // 💖 Botão Surpresa (música)
const surpriseBtn = document.getElementById('surprise-btn');
const music = document.getElementById('bg-music');
const loveMessage = document.getElementById('love-message');

if (surpriseBtn && music && loveMessage) {
  surpriseBtn.addEventListener('click', () => {
    music.play();
    loveMessage.classList.remove('hidden');
  });
}


  // 📸 Galeria de Slides
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  const next = document.querySelector('.next');
  const prev = document.querySelector('.prev');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  if (next && prev && slides.length > 0) {
    next.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });

    prev.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });

    showSlide(currentSlide); // Mostrar o primeiro slide
  }

  // 📬 Formulário de contato
  const contactForm = document.getElementById('contact-form');
  const responseBox = document.getElementById('form-response');

  if (contactForm && responseBox) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      responseBox.textContent = 'Mensagem enviada com sucesso! 💌';
      contactForm.reset();
    });
  }
});

// 

document.addEventListener('DOMContentLoaded', () => {
  const events = document.querySelectorAll('.event');
  
  events.forEach(event => {
    event.addEventListener('click', () => {
      event.classList.toggle('active');
    });
  });
});

