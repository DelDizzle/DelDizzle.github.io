/**
 * hamburger.js
 * Lukas Del Zotto
 * 
 * controls functionality of the navigation hamburger
 */

function toggleHamburgerMenu(){
    //get navigation burger element
    const burger = document.getElementById("navbarBurger");

    //get navigation menu element
    const menu = document.getElementById("navbarMenu");

    //toggle if burger is active
    burger.classList.toggle('is-active');

    //toggle if menu is active
    menu.classList.toggle('is-active');
}