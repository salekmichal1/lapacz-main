'use strict';

window.onload = function () {
  document.body.style.display = 'block';
};

const swiper = new Swiper('.mySwiper', {
  slidesPerView: 2,
  grid: {
    rows: 2,
    fill: 'row',
  },
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
      grid: {
        rows: 1,
      },
    },
    1024: {
      slidesPerView: 4,
      grid: {
        rows: 1,
      },
    },
    1440: {
      spaceBetween: 20,
      slidesPerView: 5,
      grid: {
        rows: 1,
      },
    },
  },
});
