$(document).ready(function(){
    // Add smooth scrolling to .smoth-scrol
    $(".smoth-scrol").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
  });
const nav = () => {
    const burger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.mainNav');

    burger.addEventListener('click', () => {
        mainNav.classList.toggle('on');
    });

}
nav();

const list = () => {
    const menu = document.querySelector('.menu');
    const genres = document.querySelector('.genres');

    menu.addEventListener('click', () => {
        genres.classList.toggle('display');
    });
}
list();