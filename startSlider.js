const slider = document.querySelector('.slider');
let slides = document.querySelectorAll('.slide');

let currentIndex = 0;
let slideWidth;

function updateSlideWidth() {
    slideWidth = slider.clientWidth;
}

updateSlideWidth();
window.addEventListener('resize', updateSlideWidth);

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

slider.appendChild(firstClone);
slider.insertBefore(lastClone, slides[0]);

slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

slider.style.transform = `translateX(-${slideWidth}px)`;

function nextSlide() {
    currentIndex++;
    slider.style.transition = `transform 0.5s ease-in-out`;
    slider.style.transform = `translateX(-${slideWidth * (currentIndex + 1)}px)`;

    if (currentIndex >= totalSlides - 2) {
        setTimeout(() => {
            currentIndex = 0;
            slider.style.transition = `transform 0s ease-in-out`;
            slider.style.transform = `translateX(-${slideWidth}px)`;
        }, 500);
    }
}

function prevSlide() {
    currentIndex--;
    slider.style.transition = `transform 0.5s ease-in-out`;
    slider.style.transform = `translateX(-${slideWidth * (currentIndex + 1)}px)`;

    if (currentIndex <= -1) {
        setTimeout(() => {
            currentIndex = totalSlides - 3;
            slider.style.transition = `transform 0s ease-in-out`;
            slider.style.transform = `translateX(-${slideWidth * (currentIndex + 1)}px)`;
        }, 500);
    }
}


setInterval(nextSlide, 3000);
