document.addEventListener("DOMContentLoaded", () => {

    const links = document.querySelectorAll(".navbar a");
    const btnCita = document.querySelector(".btn-1");

    const form = document.querySelector(".form-container");
    const topBar = document.querySelector(".top-bar");
    const contacto = document.querySelector(".Conctacto-Dr");

    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();

            const id = link.dataset.section;
            const section = document.getElementById(id);

            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }

            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");

            contacto.style.display = id === "contacto" ? "block" : "none";
            form.style.display = "none";
            topBar.style.display = "none";
        });
    });

    btnCita.addEventListener("click", e => {
        e.preventDefault();

        
        form.style.display = "block";
        topBar.style.display = "flex";
        contacto.style.display = "none";

        form.scrollIntoView({ behavior: "smooth" });

        links.forEach(l => l.classList.remove("active"));
    });

});
