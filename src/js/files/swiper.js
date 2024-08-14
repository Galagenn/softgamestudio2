import Swiper from "swiper";
import { Navigation } from "swiper/modules";

function initSliders() {
   if (document.querySelector(".swiper")) {
      new Swiper(".swiper", {
         modules: [Navigation],
         observer: true,
         observeParents: true,
         slidesPerView: 1,
         spaceBetween: 0,
         speed: 800,
         navigation: {
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
         },
      });
   }
}

window.addEventListener("load", () => {
   initSliders();
});
