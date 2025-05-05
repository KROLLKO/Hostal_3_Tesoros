const toggle = document.getElementById('menu-toggle');
const nav = document.querySelector('.main-nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// SLIDER AUTOMÁTICO
const slides = document.querySelectorAll('.slide');
let current = 0;

function showNextSlide() {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}

setInterval(showNextSlide, 5000);

//SCRIP DE SECCION DE HABITACIONES 



    const track = document.querySelector('.slider-track');
    const next = document.querySelector('.slider-btn.next');
    const prev = document.querySelector('.slider-btn.prev');

    let index = 0;

    function updateSlider() {
      const itemWidth = document.querySelector('.habitacion-item').offsetWidth;
      const visibleItems = Math.floor(document.querySelector('.habitaciones-slider').offsetWidth / itemWidth);
      const totalItems = document.querySelectorAll('.habitacion-item').length;
      const maxIndex = totalItems - visibleItems;
      if (index < 0) index = 0;
      if (index > maxIndex) index = maxIndex;
      track.style.transform = `translateX(-${index * itemWidth}px)`;
    }

    next.addEventListener('click', () => {
      index++;
      updateSlider();
    });

    prev.addEventListener('click', () => {
      index--;
      updateSlider();
    });

    window.addEventListener('resize', updateSlider);
    window.addEventListener('load', updateSlider);



    //script de boton de whatsapp 



    const whatsappBtn = document.getElementById("whatsapp-button");
  const chatbox = document.getElementById("whatsapp-chatbox");

  whatsappBtn.addEventListener("click", () => {
    chatbox.style.display = chatbox.style.display === "block" ? "none" : "block";
  });

  // Si haces clic fuera del chatbox, se cierra
  window.addEventListener("click", function (e) {
    if (!chatbox.contains(e.target) && !whatsappBtn.contains(e.target)) {
      chatbox.style.display = "none";
    }
  });


  //cierre del menu mobil 


  const closeBtn = document.getElementById('menu-close');
closeBtn.addEventListener('click', () => {
  nav.classList.remove('open');
});