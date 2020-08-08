document.addEventListener('DOMContentLoaded', function () {
   /* Carousel */

   $("#slider").owlCarousel({
      center: true,
      items: 2,
      loop: false,
      margin: 0,
      nav: true,
      navText: [],
      smartSpeed: 1000,

   });

   /* Создает тег для подключения срипта на разрешении больше 768 */

   if (window.innerWidth > 530) {
      /* cursor */
      const mouseCursor = document.querySelector(".cursor");
      const Links = document.querySelectorAll("a");
      const Links2 = document.querySelectorAll(".slider-overlay");
      const Links3 = document.querySelectorAll(".owl-nav");
      const Links4 = document.querySelectorAll(".slider-github");

      window.addEventListener('mousemove', cursor);

      function cursor(e) {
         mouseCursor.style.top = e.pageY + 'px';
         mouseCursor.style.left = e.pageX + 'px';
      }

      Links.forEach(link => {
         link.addEventListener('mouseleave', () => {
            mouseCursor.classList.remove("link-grow");
         });
         link.addEventListener('mouseover', () => {
            mouseCursor.classList.add("link-grow");
         });
      });
      Links2.forEach(link2 => {
         link2.addEventListener('mouseleave', () => {
            mouseCursor.classList.remove("link-grow2");
         });
         link2.addEventListener('mouseover', () => {
            mouseCursor.classList.add("link-grow2");
         });
      });
      Links3.forEach(link3 => {
         link3.addEventListener('mouseleave', () => {
            mouseCursor.classList.remove("link-grow3");
         });
         link3.addEventListener('mouseover', () => {
            mouseCursor.classList.add("link-grow3");
         });
      });
      Links4.forEach(link4 => {
         link4.addEventListener('mouseleave', () => {
            mouseCursor.classList.remove("link-github");
         });
         link4.addEventListener('mouseover', () => {
            mouseCursor.classList.add("link-github");
         });
      });
      /* /cursor */
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