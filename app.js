document.addEventListener("DOMContentLoaded", () => {
  const nextBtn = document.getElementById('btn-next');
  const backBtn = document.getElementById('btn-back');

  const slides = document.querySelectorAll(".shop-slider-card");
  const totalSlides = slides.length;

  let index = totalSlides - 1;

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % totalSlides;

    slides.forEach((slide, i) => {
      slide.classList.toggle("active-card", i === index);
      slide.style.display = i === index ? "block" : "none";
    });
  });

  backBtn.addEventListener("click", () => {
    index = (index - 1 + totalSlides) % totalSlides;

    slides.forEach((slide, i) => {
      slide.classList.toggle("active-card-back", i === index);
      slide.style.display = i === index ? "block" : "none";
    });
  });

  // Начальная отрисовка слайда
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
    slide.classList.toggle("active-card", i === index);
  });
});



//------------------------------menu-panel----------------------//

const openPanel = document.getElementById("header-menu-open")
const closePanel = document.getElementById("header-menu-close")
const menuPanel = document.getElementById("menu-panel")

openPanel.addEventListener('click', function(){
  menuPanel.style.top = '0px';
})

closePanel.addEventListener('click', function(){
  menuPanel.style.top = '-100%';
})

