document.addEventListener("DOMContentLoaded", () => {
  const nextBtn = document.getElementById('btn-next');
  const backBtn = document.getElementById('btn-back');

  const slides = document.querySelectorAll(".shop-slider-card");
  const totalSlides = slides.length;

  let index = totalSlides - 1;

  function showSlide() {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active-card", i === index);

      if (window.innerWidth <= 800) {
        slide.style.display = i === index ? "block" : "none";
      } else {
        slide.style.display = "block"; 
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

const headerMenuBtn1 = document.getElementById('navLink1')
const headerMenuBtn2 = document.getElementById('navLink2')
const headerMenuBtn3 = document.getElementById('navLink3')
const headerMenuBtn4 = document.getElementById('navLink4')
headerMenuBtn1.addEventListener('click', () => {
  menuPanel.style.top = '-100%';
})

headerMenuBtn2.addEventListener('click', () => {
  menuPanel.style.top = '-100%';
})

headerMenuBtn3.addEventListener('click', () => {
  menuPanel.style.top = '-100%';
})

headerMenuBtn4.addEventListener('click', () => {
  menuPanel.style.top = '-100%';
})