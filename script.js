/* =================================
   MOBILE MENU
================================= */

const menuBtn = document.getElementById("menuBtn");

const nav = document.getElementById("nav");


menuBtn.addEventListener("click", function () {

    nav.classList.toggle("show");

});



/* =================================
   CLOSE MOBILE MENU
   AFTER CLICKING A LINK
================================= */

const navLinks = document.querySelectorAll(".nav a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("show");

    });

});



/* =================================
   ACTIVE NAVIGATION
================================= */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
