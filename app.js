document.addEventListener("DOMContentLoaded", () => {
  const nextBtn = document.getElementById('btn-next');
  const backBtn = document.getElementById('btn-back');

  const slides = document.querySelectorAll(".shop-slider-card");
  const totalSlides = slides.length;

  let index = totalSlides - 1;

  function showSlide() {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active-card", i === index);

      // Если ширина экрана <= 800px, скрываем неактивные карточки
      if (window.innerWidth <= 800) {
        slide.style.display = i === index ? "block" : "none";
      } else {
        slide.style.display = "block"; // Показываем все карточки на большом экране
      }
    });
  }
  nextBtn.addEventListener("click", () => {
    index = (index + 1) % totalSlides;

    slides.forEach((slide, i) => {
      slide.classList.toggle("active-card", i === index);
      showSlide();
    });
  });

  backBtn.addEventListener("click", () => {
    index = (index - 1 + totalSlides) % totalSlides;

    slides.forEach((slide, i) => {
      slide.classList.toggle("active-card-back", i === index);
      showSlide();
    });
  });

  // Начальная отрисовка слайда
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
    slide.classList.toggle("active-card", i === index);
    showSlide();
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

