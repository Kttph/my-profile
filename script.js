/* ===============================
My Profile - JavaScript
=============================== */

document.addEventListener("DOMContentLoaded", function () {

console.log("My Profile website loaded successfully.");

// Smooth scrolling
const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId.startsWith("#")) {

            event.preventDefault();

            const target = document.querySelector(targetId);

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }

    });

});


// PDF button
const pdfButton = document.querySelector(".pdf-button");

if (pdfButton) {

    pdfButton.addEventListener("click", function () {

        console.log(
            "Opening Project 2 PDF..."
        );

    });

}

});
