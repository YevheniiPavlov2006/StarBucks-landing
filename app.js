
document.addEventListener("DOMContentLoaded", () => {
  const nextBtn = document.getElementById('btn-next')
  const backBtn = document.getElementById('btn-back')
  
  const slider = document.getElementById('slider')
  const slides = document.querySelectorAll(".shop-slider-card");
  const totalSlides = slides.length;
  
  let index = totalSlides - 1;

  function showSlide(){
    slides.forEach((slide, i) => {
      if (i === index) {
          slide.style.display = "block";
          slide.classList.add('active-card')
      } else {
          slide.classList.remove('active-card')
      }
    });
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % totalSlides;
    showSlide();
  });
  
  backBtn.addEventListener("click", () => {
    index = (index - 1 + totalSlides) % totalSlides;
    showSlide();
  });
  
  showSlide();

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
