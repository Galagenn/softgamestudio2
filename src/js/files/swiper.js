import Swiper from "swiper";
import { Autoplay } from "swiper/modules";

import "swiper/scss";

function initSliders() {
   if (document.querySelector(".services__slider")) {
      new Swiper(".services__slider", {
         modules: [Autoplay],
         observer: true,
         observeParents: true,
         slidesPerView: 2.5,
         spaceBetween: 230,
         speed: 800,
         centeredSlides: true,
         loop: true,
         autoplay: {
            delay: 2000,
            disableOnInteraction: false,
         },
         breakpoints: {
            320: {
               slidesPerView: 1.1,
               spaceBetween: 10,
               centeredSlides: false,
            },
            480: {
               slidesPerView: 1.5,
               spaceBetween: 15,
               centeredSlides: false,
            },
            650: {
               slidesPerView: 1.8,
               spaceBetween: 20,
            },
            768: {
               slidesPerView: 2.1,
               spaceBetween: 40,
            },
            992: {
               slidesPerView: 2.2,
               spaceBetween: 50,
            },
            1024: {
               slidesPerView: 2.2,
               spaceBetween: 50,
            },
            1324: {
               slidesPerView: 2.4,
               spaceBetween: 100,
            },
            1476: {
               slidesPerView: 2.5,
               spaceBetween: 230,
            },
         },
      });
   }
   if (document.querySelector(".partners__slider")) {
      new Swiper(".partners__slider", {
         modules: [Autoplay],
         observer: true,
         observeParents: true,
         slidesPerView: 3,
         spaceBetween: 45,
         speed: 800,
         loop: true,
         autoplay: {
            delay: 2000,
            disableOnInteraction: false,
         },
         breakpoints: {
            320: {
               slidesPerView: 1,
               spaceBetween: 15,
            },
            600: {
               slidesPerView: 2,
               spaceBetween: 25,
            },
            768: {
               slidesPerView: 2.2,
               spaceBetween: 30,
            },
            992: {
               slidesPerView: 2.5,
               spaceBetween: 35,
            },
            1024: {
               slidesPerView: 3,
               spaceBetween: 45,
            },
         },
      });
   }
}

window.addEventListener("load", () => {
   initSliders();
});
