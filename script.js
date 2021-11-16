window.addEventListener('DOMContentLoaded', () => {
// https://codepen.io/ljc-dev/embed/GRoLWxj?height=600&default-tab=js,result&embed-version=2
// https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0
const navbar = document.querySelector('.navbar'); // list
const ham = document.querySelector('.ham'); // button
const menuLinks = document.querySelectorAll('.menu-link');

function toggleHamburger() {
  navbar.classList.toggle('showNav');
  ham.classList.toggle('showClose');
}

// toggles hamburger menu in and out when clicking on the hamburger
ham.addEventListener('click', toggleHamburger);

// toggle when clicking on links
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', toggleHamburger);
});

})