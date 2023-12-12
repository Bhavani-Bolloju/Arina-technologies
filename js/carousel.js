let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function startCarousel() {
    setInterval(() => {
        nextSlide();
    }, 5000); // Change 5000 to the desired interval in milliseconds (e.g., 5000 for 5 seconds)
}

// Initial display
showSlide(currentSlide);

// Start the carousel automatically
startCarousel();
