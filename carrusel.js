let index = 0;

function showSlide() {
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

function prevSlide() {
    index = (index === 0) ? 3 : index - 1;
    showSlide();
}

function nextSlide() {
    index = (index === 3) ? 0 : index + 1;
    showSlide();
}