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

  setTimeout(() => {
    const scrollDown = document.querySelector('.scroll-down');
    if (scrollDown) scrollDown.classList.add('visible');
  }, 3000);

  const btnScroll = document.getElementById("btnScroll");
  if (btnScroll) {
    btnScroll.addEventListener("click", () => {
      const catalogo = document.getElementById("catalogo");
      const offset = 60;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = catalogo.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    });
  }
});

const catalogoCarousel = document.querySelector('#catalogoCarousel');
if (catalogoCarousel) {
  new bootstrap.Carousel('#catalogoCarousel', {
    interval: 4000, 
    ride: 'carousel',
    pause: false,
    wrap: true
  });
}

// Inicialización del nuevo carrusel de Blog para móvil
const blogCarousel = document.querySelector('#blogCarousel');
if (blogCarousel) {
  new bootstrap.Carousel('#blogCarousel', {
    interval: 5000, 
    ride: 'carousel',
    pause: false,
    wrap: true
  });
}

document.addEventListener('DOMContentLoaded', () => {
    
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const menuToggle = document.getElementById('menu');
    const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});

    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href').substring(1);
            if (targetId) {
                e.preventDefault();
                
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    let offset = 60; 

                    if (targetId === 'catalogo') offset = 60;
                    if (targetId === 'blog') offset = 35;
                    
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = targetElement.getBoundingClientRect().top;
                    let elementPosition = elementRect - bodyRect;
                    
                    let offsetPosition = elementPosition - offset;

                    if (targetId === 'sobre') {
                        offsetPosition += 160;
                    }

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }

            if (menuToggle.classList.contains('show')) {
                bsCollapse.hide();
            }
        });
    });

    document.addEventListener('click', (event) => {
        const isClickInsideMenu = menuToggle.contains(event.target);
        const isClickOnToggler = document.querySelector('.navbar-toggler').contains(event.target);

        if (!isClickInsideMenu && !isClickOnToggler && menuToggle.classList.contains('show')) {
            bsCollapse.hide();
        }
    });

});