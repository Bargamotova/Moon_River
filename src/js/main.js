'use strict';
import initMap from "./map";
import slider from "./slider";
import burger from "./burger";
import switchLanguage from "./switch";
initMap();
slider();
burger();
switchLanguage();



const menuList = document.querySelectorAll('.menu__link');
menuList.forEach(el => {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    menuList.forEach(el => el.classList.remove('active'));
    this.classList.add('active');
  });
});


