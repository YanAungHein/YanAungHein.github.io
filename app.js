const menu = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');
const navItem = document.querySelectorAll('.nav-item');

menu.addEventListener("click", () => {
    navList.classList.toggle('nav-open');

    menu.classList.toggle('bar-open');

    navItem.forEach(item => {
        item.classList.toggle('item-open');
    });
});
