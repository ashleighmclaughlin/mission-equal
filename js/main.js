var burger = document.querySelector('.burger');
var nav = document.querySelector('#'+ burger.dataset.target);

// Bulma responsive nav
burger.addEventListener('click', function(){
    burger.classList.toggle('is-active');
    nav.classList.toggle('is-active');
  });