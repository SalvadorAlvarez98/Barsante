document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll('.slider');

  function startSlider(sliderElement) {
    const slides = sliderElement.querySelectorAll('.slide');
    let index = 0;

    setInterval(() => {
      slides.forEach(slide => slide.classList.remove('active'));
      index = (index + 1) % slides.length;
      slides[index].classList.add('active');
    }, 3000);
  }

  sliders.forEach(slider => {
    if (slider.classList.contains('visible')) {
      startSlider(slider);
    }
  });

  // Cambiar slider según la sección visible
  window.addEventListener("hashchange", () => {
    sliders.forEach(slider => slider.classList.remove('visible'));
    const id = 'slider-' + location.hash.replace('#', '');
    const activeSlider = document.getElementById(id);
    if (activeSlider) {
      activeSlider.classList.add('visible');
      startSlider(activeSlider);
    }
  });
});

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

