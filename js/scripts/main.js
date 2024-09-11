// window.addEventListener("scroll", function () {
//   let header = document.querySelector("header");
//   let scrollPosition = window.scrollY;

//   if (scrollPosition > 0) {
//     header.classList.add("active");
//   } else {
//     header.classList.remove("active");
//   }
// });

// AOS
AOS.init({
  duration: 700,
  once: true,
});

// function loadVideo(container) {
//   if (!container.classList.contains('video-loaded')) {
//     container.innerHTML = `
//           <video controls autoplay>
//               <source src="./assets/video-apresentacao-revendcell.mp4" type="video/mp4">
//               Your browser does not support the video tag.
//           </video>
//       `;
//     container.classList.add('video-loaded');
//     container.style.cursor = 'default';
//   }
// }

// SwiperJS 
var swiper = new Swiper('.swiper.choice', {
  loop: true,
  lazyLoading: true,
  centeredSlides: true,
  spaceBetween: 16,
  breakpoints: {
    0: {
      slidesPerView: 1.2,
    },
    676: {
      slidesPerView: 1.4,
    },
    840: {
      loop: false,
      centeredSlides: false,
      slidesPerView: 2.2
    }
  },
});

var swiper = new Swiper('.swiper.testemonies', {
  lazyLoading: true,
  centeredSlides: true,
  spaceBetween: 16,
  breakpoints: {
    0: {
      slidesPerView: 1.2,
    },
    676: {
      slidesPerView: 2,
    },
    840: {
      centeredSlides: false,
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper('.swiper.transformations', {
  loop: true,
  lazyLoading: true,
  centeredSlides: true,
  spaceBetween: 12,
  breakpoints: {
    0: {
      slidesPerView: 1.1,
    },
    676: {
      slidesPerView: 2.2,
    },
    840: {
      slidesPerView: 3.2,
    },
    1020: {
      centeredSlides: false,
      slidesPerView: 4,
    }
  },
});


// function aceitarCookies() {
//   var dataExpiracao = new Date();
//   dataExpiracao.setDate(dataExpiracao.getDate() + 30);

//   document.cookie = "cookiesAceitos=true; expires=" + dataExpiracao.toUTCString() + "; path=/";
//   document.getElementById("cookieNotice").style.display = "none";
// }

// function verificarCookiesAceitos() {
//   var cookiesAceitos = document.cookie.includes("cookiesAceitos=true");
//   if (!cookiesAceitos) {
//     document.getElementById("cookieNotice").style.display = "block";
//   } else {
//     document.getElementById("cookieNotice").style.display = "none";
//   }
// }

// window.onload = verificarCookiesAceitos

// Acordeão
document.addEventListener("DOMContentLoaded", function () {
  var accordion = document.querySelectorAll(".accordion");

  accordion.forEach((el) => {
    var accordionItems = el.querySelectorAll(".accordion-item");

    accordionItems.forEach(function (item) {
      var header = item.querySelector(".accordion-header");

      header.addEventListener("click", function () {
        var currentActiveItem = item.classList.contains("active");

        accordionItems.forEach(function (el) {
          el.classList.remove("active");
        });

        if (!currentActiveItem) {
          item.classList.add("active");
        }
      });
    });
  });
});

// Menu mobile;
function openMobileSidebar() {
  var item = document.querySelector('#navigation');
  item.removeAttribute('style', 'display: none;');
}

function closeMobileSidebar() {
  var item = document.querySelector('#navigation');
  item.setAttribute('style', 'display: none;');
}

window.addEventListener('load', function () {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://unpkg.com/lenis@1.1.13/dist/lenis.css';
  document.head.appendChild(link);
});

// Use Lenis for Smooth Scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)