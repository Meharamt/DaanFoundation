/*!
* Start Bootstrap - Agency v7.0.6 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

document.getElementById("varunlinkedin").onclick = function () {
    location.href = "https://www.linkedin.com/in/varun-prabhakar-7958441bb";
};

document.getElementById("sabhyalinkedin").onclick = function () {
    location.href = "https://www.linkedin.com/mwlite/in/sabhya-dhir-8a6821158";
};

document.getElementById("meharlinkedin").onclick = function () {
    location.href = "https://www.linkedin.com/in/meharamt-singh/";
};

document.getElementById("divyanshulinkedin").onclick = function () {
    location.href = "https://www.linkedin.com/in/divyanshu-anand-31281b1bb";
};

document.getElementById("varuninsta").onclick = function () {
    location.href = "https://www.instagram.com/_varun.x/";
};

document.getElementById("sabhyainsta").onclick = function () {
    location.href = "https://www.instagram.com/s.xbhya/";
};

document.getElementById("meharinsta").onclick = function () {
    location.href = "https://www.instagram.com/meharamt_singh/";
};

document.getElementById("divyanshuinsta").onclick = function () {
    location.href = "https://www.instagram.com/_anand_divyanshu_/";
};











