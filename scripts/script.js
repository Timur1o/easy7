const menu = document.querySelector('.menu');
const items = document.querySelector('.goods__items');

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

function previousSlide() {
    items.scrollLeft-=items.clientWidth;
}

function nextSlide() {
    items.scrollLeft+=items.clientWidth;
}
