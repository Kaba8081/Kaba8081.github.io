var nav_menu_img = document.getElementById("nav-menu-img");
var small_nav = document.getElementById("small-navbar");

function mobileNavMenu(){
    if (nav_menu_img.getAttribute('src') === "img/menu.svg"){
        nav_menu_img.setAttribute('src', "img/close.svg");
        small_nav.style['display'] ='flex';
    } else {
        nav_menu_img.setAttribute('src', "img/menu.svg");
        small_nav.style['display'] = 'none';
    }
};