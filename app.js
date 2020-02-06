const burger = document.querySelector('.bars');
const navList = document.querySelector('.nav-list');
const navItem = document.querySelectorAll('.nav-item');
const bars = document.querySelector('.bars');

burger.addEventListener("click", () => {
    navList.classList.toggle('nav-open');

    bars.classList.toggle('bar-open');

    navItem.forEach(item => {
        item.classList.toggle('item-open');
    });
});