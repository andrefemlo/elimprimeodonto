"use strict";AOS.init({duration:700,once:!0});var swiper=new Swiper(".swiper.choice",{loop:!0,lazyLoading:!0,centeredSlides:!0,spaceBetween:16,breakpoints:{0:{slidesPerView:1.2},676:{slidesPerView:1.4},840:{loop:!1,centeredSlides:!1,slidesPerView:2.2}}}),swiper=new Swiper(".swiper.testemonies",{lazyLoading:!0,centeredSlides:!0,spaceBetween:16,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{0:{slidesPerView:1.2},840:{slidesPerView:2},1180:{centeredSlides:!1,slidesPerView:3}}}),swiper=new Swiper(".swiper.transformations",{loop:!0,lazyLoading:!0,centeredSlides:!0,speed:2e3,autoplay:{delay:0},spaceBetween:12,breakpoints:{0:{slidesPerView:1.1},676:{slidesPerView:2.2},840:{slidesPerView:3.2},1020:{centeredSlides:!1,slidesPerView:4}}});function openMobileSidebar(){document.querySelector("#navigation").removeAttribute("style","display: none;")}function closeMobileSidebar(){document.querySelector("#navigation").setAttribute("style","display: none;")}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".accordion").forEach(function(e){var n=e.querySelectorAll(".accordion-item");n.forEach(function(i){i.querySelector(".accordion-header").addEventListener("click",function(){var e=i.classList.contains("active");n.forEach(function(e){e.classList.remove("active")}),e||i.classList.add("active")})})})}),window.addEventListener("load",function(){var e=document.createElement("link");e.rel="stylesheet",e.href="https://unpkg.com/lenis@1.1.13/dist/lenis.css",document.head.appendChild(e)});var lenis=new Lenis({duration:1.2,easing:function(e){return Math.min(1,1.001-Math.pow(2,-10*e))},smooth:!0});function raf(e){lenis.raf(e),requestAnimationFrame(raf)}requestAnimationFrame(raf);