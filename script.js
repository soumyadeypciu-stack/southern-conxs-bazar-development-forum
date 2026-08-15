/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.getElementById("menuBtn");

const nav = document.getElementById("nav");


menuBtn.addEventListener("click", function () {

    nav.classList.toggle("active");


    if (nav.classList.contains("active")) {

        menuBtn.textContent = "✕";

    } else {

        menuBtn.textContent = "☰";

    }

});



/* =====================================================
   CLOSE MOBILE MENU
===================================================== */

const navLinks = document.querySelectorAll(".nav a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});



/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm = document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name = document.getElementById("name").value;


        alert(
            "Thank you, " +
            name +
            "! Your message has been received."
        );


        contactForm.reset();

    });

}



/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections = document.querySelectorAll("section[id]");


window.addEventListener("scroll", function () {

    let current = "";


    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        const sectionId = section.getAttribute("id");


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = sectionId;

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");


        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});
