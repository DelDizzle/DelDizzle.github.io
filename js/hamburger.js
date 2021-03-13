/**
 * hamburger.js
 * Lukas Del Zotto
 * 03/10/21 - 03/12/21
 * 
 * controls functionality of the navigation hamburger
 */
function toggleHamburgerMenu(){
    //get navigation hamburger element
    const hamburger = document.getElementById("navbarBurger");

    //get navigation menu element
    const menu = document.getElementById("navbarMenu");

    //toggle hamburger is active
    hamburger.classList.toggle('is-active');

    //toggle menu is active
    menu.classList.toggle('is-active');
}