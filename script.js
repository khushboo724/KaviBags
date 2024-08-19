const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
 
// Add CSS classes for animation
slides.forEach((slide) => {
  slide.classList.add('slide-animation');
});
 
// Set initial slide position
slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
});
 
// Auto-slide functionality
setInterval(() => {
  // Animate out current slide
  slides[currentSlide].style.transform = `translateX(-100%)`;
  slides[currentSlide].style.transition = 'transform 0.5s ease-in-out';
 
  // Wait for animation to finish
  setTimeout(() => {
    // Hide current slide
    slides[currentSlide].style.display = 'none';
 
    // Show next slide
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = 'flex';
    slides[currentSlide].style.transform = `translateX(0%)`;
    slides[currentSlide].style.transition = 'transform 0.5s ease-in-out';
  }, 500); // 500ms = 0.5 seconds
}, 3000); // 3000ms = 3 seconds