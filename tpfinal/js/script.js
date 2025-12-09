(() => {
  'use strict';

  const forms = document.querySelectorAll('#contactForm');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();

window.addEventListener("load", () => {
  const overlay = document.querySelector(".overlay");

  setTimeout(() => {
    overlay.style.display = "none";
  }, 1500);

  const btn = document.getElementById("btnScroll");

  btn.addEventListener("click", () => {
    document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
  });
});

window.addEventListener('load', () => {
  setTimeout(() => {
    const scrollDown = document.querySelector('.scroll-down');
    scrollDown.classList.add('visible');
  }, 3000);

  const btnScroll = document.getElementById('btnScroll');

  btnScroll.addEventListener('click', () => {
    const catalogo = document.getElementById('catalogo');
    catalogo.scrollIntoView({ behavior: 'smooth' });
  });
});





const catalogoCarousel = new bootstrap.Carousel('#catalogoCarousel', {
  interval: 4000, 
  ride: 'carousel',
  pause: false,
  wrap: true
});
