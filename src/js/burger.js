const burger = () => {

  const burgerBtn = document.querySelectorAll('.burger');
  const burgerBox = document.querySelectorAll('.burger-box');
  const nav = document.querySelector('.navigation');
  const hero = document.querySelector('.hero');

  const toggleMenu = (e) => {
    e.preventDefault();
    nav.classList.toggle('show');
    hero.classList.toggle('show');
    burgerBtn.forEach(el => {
      el.classList.toggle('active')
    });
  };
  burgerBox.forEach(el => el.addEventListener('click', toggleMenu));
}


export default burger;
