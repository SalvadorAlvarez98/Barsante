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

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  }
});
