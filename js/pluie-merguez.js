document.addEventListener("DOMContentLoaded", function () {

    function creerImage() {
        const img = document.createElement("img");
        img.src = "images/merguez_simple.png";
        img.classList.add("pluie-img");

        const rotBase = Math.random() * 360;
        const rotFin = rotBase + 360;
        const duree = 6 + Math.random() * 6;
        const delai = Math.random() * 5;
        const posX = Math.random() * 100;

        img.style.left = `${posX}vw`;
        img.style.transform = `rotate(${rotBase}deg)`;
        img.style.setProperty("--rot-fin", `${rotFin}deg`);
        img.style.animationDuration = `${duree}s`;
        img.style.animationDelay = `-${delai}s`;

        document.body.appendChild(img);
    }

    for (let i = 0; i < 20; i++) {
        creerImage();
    }

});