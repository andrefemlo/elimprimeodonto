"use strict";AOS.init({duration:700,once:!0});var swiper=new Swiper(".swiper.choice",{loop:!0,lazyLoading:!0,centeredSlides:!0,spaceBetween:16,breakpoints:{0:{slidesPerView:1.2},676:{slidesPerView:1.4},840:{loop:!1,centeredSlides:!1,slidesPerView:2.2}}}),swiper=new Swiper(".swiper.testemonies",{lazyLoading:!0,centeredSlides:!0,spaceBetween:16,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{0:{slidesPerView:1.2},840:{slidesPerView:2},1180:{centeredSlides:!1,slidesPerView:3}}}),swiper=new Swiper(".swiper.transformations",{loop:!0,centeredSlides:!0,speed:2e3,pauseOnInteraction:!0,autoplay:{delay:200},spaceBetween:12,breakpoints:{0:{slidesPerView:1.4},676:{slidesPerView:3.2},840:{slidesPerView:4,centeredSlides:!1}}});function openMobileSidebar(){document.querySelector("#navigation").removeAttribute("style","display: none;")}function closeMobileSidebar(){document.querySelector("#navigation").setAttribute("style","display: none;")}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".accordion").forEach(function(e){var i=e.querySelectorAll(".accordion-item");i.forEach(function(o){o.querySelector(".accordion-header").addEventListener("click",function(){var e=o.classList.contains("active");i.forEach(function(e){e.classList.remove("active")}),e||o.classList.add("active")})})})}),window.addEventListener("load",function(){var e=document.createElement("link");e.rel="stylesheet",e.href="https://unpkg.com/lenis@1.1.13/dist/lenis.css",document.head.appendChild(e)});var lenis=new Lenis({duration:1.2,easing:function(e){return Math.min(1,1.001-Math.pow(2,-10*e))},smooth:!0});function raf(e){lenis.raf(e),requestAnimationFrame(raf)}function loadVideo1(e){e.classList.contains("video-loaded")||(e.innerHTML='\n          <video controls autoplay>\n              <source src="./assets/videos/a-vontade-de-sorrir-agora-e-maior.mp4" type="video/mp4">\n              Your browser does not support the video tag.\n          </video>\n      ',e.classList.add("video-loaded"),e.style.cursor="default")}function loadVideo2(e){e.classList.contains("video-loaded")||(e.innerHTML='\n          <video controls autoplay>\n              <source src="./assets/videos/eu-tinha-muita-vontade-de-mudar-meu-sorriso.mp4" type="video/mp4">\n              Your browser does not support the video tag.\n          </video>\n      ',e.classList.add("video-loaded"),e.style.cursor="default")}function loadVideo3(e){e.classList.contains("video-loaded")||(e.innerHTML='\n          <video controls autoplay>\n              <source src="./assets/videos/confesso-que-fiquei-impressionado-com-o-resultado.mp4" type="video/mp4">\n              Your browser does not support the video tag.\n          </video>\n      ',e.classList.add("video-loaded"),e.style.cursor="default")}requestAnimationFrame(raf);