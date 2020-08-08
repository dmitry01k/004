/* cursor */
const mouseCursor = document.querySelector(".cursor");
const Links = document.querySelectorAll("a");

window.addEventListener('mousemove', cursor);

function cursor(e) {
   mouseCursor.style.top = e.pageY + 'px';
   mouseCursor.style.left = e.pageX + 'px';
   /*parallax*/
   const x = e.pageX / window.innerWidth;
   const y = e.pageY / window.innerHeight;
   const parallax = document.querySelector(".parallax-fon");
   parallax.style.transform = 'translate(-' + x * 25 + 'px, -' + y * 25 + 'px)';
}

Links.forEach(link => {
   link.addEventListener('mouseleave', () => {
      mouseCursor.classList.remove("link-grow");
      link.classList.remove("link-zindex");
   });
   link.addEventListener('mouseover', () => {
      mouseCursor.classList.add("link-grow");
      link.classList.add("link-zindex");
   });
});
/* /cursor */