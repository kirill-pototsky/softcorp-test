/* eslint-disable no-unused-vars */
// http://idangero.us/swiper/
import Swiper from 'swiper';

// example of use
export default () => {
  const mySlider = new Swiper('.js-slider', {
    loop: true,
    speed: 700,
    autoplay: {
      delay: 2000,
    },
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    roundLengths: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
    },
  });
};
/* eslint-enable no-unused-vars */
