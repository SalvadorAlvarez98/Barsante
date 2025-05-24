const slides = document.querySelectorAll('.slide');
const slideNumber = document.getElementById('slide-number');
let current = 0;
let intervalTime = 5000;
let slideInterval;

function updateSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    if (i !== index) slide.style.left = '100%';
  });
  slideNumber.textContent = `${(index + 1).toString().padStart(2, '0')} / ${slides.length.toString().padStart(2, '0')}`;
}

function showNextSlide() {
  current = (current + 1) % slides.length;
  updateSlide(current);
}

function showPrevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  updateSlide(current);
}

function startAutoplay() {
  slideInterval = setInterval(showNextSlide, intervalTime);
}

function resetAutoplay() {
  clearInterval(slideInterval);
  startAutoplay();
}

document.getElementById('next').addEventListener('click', () => {
  showNextSlide();
  resetAutoplay();
});

document.getElementById('prev').addEventListener('click', () => {
  showPrevSlide();
  resetAutoplay();
});

updateSlide(current);
startAutoplay();



// Menú responsive
document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('menu').classList.toggle('active');
});

