const btnMenuSection = document.querySelector("#btnMenuSection");
const menuSection = document.querySelector("#menu-lugares");

// Mostrar el menu
btnMenuSection.addEventListener("click", function () {
    // Para ñadir la clase mostrar
    menuSection.classList.toggle("mostrarSection");

});
