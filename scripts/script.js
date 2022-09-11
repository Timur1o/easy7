const menu = document.querySelector('.menu');

function showMenu(menu) {
    menu.classList.add('menu_opened');
}

function hideMenu(menu) {
    menu.classList.remove('menu_opened');
}

function openMenu() {
    showMenu(menu);
}

function closeMenu() {
    hideMenu(menu);
}

let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("goods__items__card");

    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

