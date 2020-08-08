const links = document.querySelectorAll('.preload-link');
const preloaderBefore = document.querySelector('.preloader-before');
const container = document.querySelector('.container');
const preloader = document.querySelector(".preloader-after");
const svg = document.querySelector(".preloader-svg-container");



window.addEventListener("load", function () {

   window.setTimeout(function () {
      svg.classList.add('svg-hidden');
   }, 500);
   window.setTimeout(function () {
      preloader.classList.add('preloader-after-hidden');
   }, 500);
   window.setTimeout(function () {
      container.style.transform = 'scale(1)';
   }, 1000);

});


window.onload = function () {

   links.forEach(function (link) {

      link.addEventListener('click', onLinkClicked);

      function onLinkClicked(event) {
         event.preventDefault();
         preloaderBefore.classList.add('preloader-before-active');
         container.style.transform = 'scale(0.9)';
         setTimeout(onAnimationComplete, 1000);
      }

      function onAnimationComplete() {
         window.location = link.href;
      }

   });

}