document.addEventListener('DOMContentLoaded', function () {
   /* Создает тег для подключения срипта на разрешении больше 768 */

   if (window.innerWidth > 530) {
      var script = document.createElement('script');
      script.src = './js/CursorParallax.js';
      document.head.appendChild(script);
   }
   /* animate */
   const rubberBand = document.querySelectorAll(".rubberBand");

   rubberBand.forEach(function (item) {
      item.addEventListener("mouseover", function () {
         item.classList.add("animate");
         setTimeout(function () {
            item.classList.remove("animate");
         }, 600);
      });

   });
   /* burger */
   const burger = document.querySelector('.toggle-menu');
   const MobileMenu = document.querySelector('.mobile-menu');

   burger.addEventListener('click', function () {
      burger.classList.toggle('active');
      MobileMenu.classList.toggle('open');
   });

});