/* eslint-disable */
import {freeze, unfreeze} from '../../blocks/js-functions/freeze';

export default () => {
  const el = $('.header');

  if (!el.length) return;

  const delta = 5;
  let lastScrollTop = 0;

  const scrollListener = () => {
    const st = window.pageYOffset || document.documentElement.scrollTop;

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta) {
      return;
    }

    if (st > lastScrollTop) {
      el.addClass('scrolled');
    } else {
      el.removeClass('scrolled').addClass('minified');
    }

    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  };

  scrollListener();
  window.addEventListener('scroll', scrollListener, false);

  const burger = document.querySelector('.navigation__burger');
  const navigation = document.querySelector('.navigation__list');
  const navigationLinks = document.querySelectorAll('.navigation__link');

  burger.onclick = () => {
    burger.classList.toggle('is-active');
    navigation.classList.toggle('is-active');

    burger.classList.contains('is-active')?freeze():unfreeze();
  };

  [].forEach.call(navigationLinks, link => {
    link.onclick = () => {
      for (let i=0;i<navigationLinks.length;i++) {
        if (navigationLinks[i].classList.contains('is-active')) navigationLinks[i].classList.remove('is-active');
      };

      link.classList.add('is-active');
    };
  });
};

/* eslint-enable */
