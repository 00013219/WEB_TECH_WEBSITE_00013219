let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide) => {
        slide.style.display = 'none';
        slide.classList.remove('fade');
    });
    slides[index].style.display = 'block';
    slides[index].classList.add('fade');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function setSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

showSlide(0);

setInterval(nextSlide, 3000);