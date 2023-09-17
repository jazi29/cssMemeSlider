let currentSlide = 0;
const slides = document.querySelectorAll('.slide')
const indicators = document.querySelectorAll('.indicator')
const text = document.getElementById('text')
const description = document.querySelectorAll('.meme-desc')

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active_slide');
            indicators[i].classList.add('active_indicator');
            description[i].classList.add('active_text'); 
        } else {
            slide.classList.remove('active_slide');
            indicators[i].classList.remove('active_indicator');
            description[i].classList.remove('active_text'); 
        }
    });
    text.textContent = slides[index].querySelector('p').textContent;
}


indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
        currentSlide = i;
        showSlide(currentSlide);
    });
});

showSlide(currentSlide);

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 3000);
