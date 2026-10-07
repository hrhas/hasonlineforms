/* =========================================================
   HAS ONLINE FORMS
   Main JavaScript
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    // Get all form cards
    const cards = document.querySelectorAll(".form-card");

    // Stop if no cards are found
    if (!cards.length) {
        console.warn("HAS Online Forms: No .form-card elements found.");
        return;
    }

    cards.forEach(function (card) {

        const header = card.querySelector(".card-header");

        // Stop if this card has no header
        if (!header) {
            return;
        }

        header.addEventListener("click", function () {

            // Check whether the clicked card is currently open
            const isOpen = card.classList.contains("active");

            /*
                Close all cards first.
                This makes sure only one card
                can be open at a time.
            */
            cards.forEach(function (otherCard) {

                otherCard.classList.remove("active");

                const otherHeader =
                    otherCard.querySelector(".card-header");

                if (otherHeader) {
                    otherHeader.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }

            });

            /*
                If the clicked card was closed,
                open it.

                If it was already open,
                leave everything closed.
            */
            if (!isOpen) {

                card.classList.add("active");

                header.setAttribute(
                    "aria-expanded",
                    "true"
                );

            }

        });

    });

});
