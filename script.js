// ANIMACIÓN AL HACER SCROLL
let slides = document.querySelectorAll(".slides img");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("activo");
  index = (index + 1) % slides.length;
  slides[index].classList.add("activo");
}, 3000);