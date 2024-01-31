import { heroText } from "./translate";

const switchLanguage = () => {
  const switchBtns = document.querySelectorAll('[data-btn]')
  const allLang = ['ru', 'en'];

  let currentLang
    = localStorage.getItem('language') || checkBrowserLang() || "ru";


  function changeLang() {
    for (const key in heroText) {
      const elem = document.querySelector(`[data-lang=${key}]`);
      if (elem) {
        elem.textContent = heroText[key][currentLang
        ]
      };
    }
  }
  changeLang();

  switchBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      currentLang
        = event.target.dataset.btn;
      localStorage.setItem('language', event.target.dataset.btn);

      resetActiveClass(switchBtns, 'lang-switch__btn--active')
      btn.classList.add('lang-switch__btn--active');
      changeLang();
    });
  });

  function resetActiveClass(arr, activeClass) {
    arr.forEach(el => el.classList.remove(activeClass))
  }

  function checkActiveLangBtn() {
    switch (currentLang) {
      case "ru":
        document
          .querySelector('[data-btn="ru"]')
          .classList.add('lang-switch__btn--active');
        break;
      case "en":
        document
          .querySelector('[data-btn="en"]')
          .classList.add('lang-switch__btn--active');
        break;
      default:
        document
          .querySelector('[data-btn="ru"]')
          .classList.add('lang-switch__btn--active');
        break;
    }
  }
  checkActiveLangBtn();
  function checkBrowserLang() {
    const navLang = navigator.language.slice(0, 2).toLowerCase();
    const result = allLang.some(el => {
      return el === navLang;
    })
    if (result) return navLang;
  }
  console.log(heroText);
};
export default switchLanguage;
