/* =========================
   PREMIUM GOLD CURSOR JS
   ========================= */

const cursor = document.querySelector(".custom-cursor");

if (cursor) {

    document.addEventListener("mousemove", function (e) {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

        // Sparkle
        if (Math.random() > 0.7) {

            const sparkle = document.createElement("div");

            sparkle.className = "cursor-sparkle";

            sparkle.style.left = e.clientX + "px";
            sparkle.style.top = e.clientY + "px";

            document.body.appendChild(sparkle);

            setTimeout(() => {
                sparkle.remove();
            }, 700);
        }
    });


    /* Hover effect */

    const hoverElements = document.querySelectorAll(
        "a, button, input, textarea, select"
    );

    hoverElements.forEach(element => {

        element.addEventListener("mouseenter", () => {
            cursor.classList.add("hover");
        });

        element.addEventListener("mouseleave", () => {
            cursor.classList.remove("hover");
        });

    });
}