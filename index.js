const elHamburgerBtn = document.querySelector(".toggle");
const elHeader = document.querySelector(".head");

elHamburgerBtn.addEventListener('click', ()=> {
  elHeader.classList.toggle('header--open');
})