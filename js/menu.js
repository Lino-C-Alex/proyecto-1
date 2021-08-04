const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");

// Mostrar el menu
btnMenu.addEventListener("click", function () {
    // Para ñadir la clase mostrar
    menu.classList.toggle("mostrar");

});

// Mostrar el submenu
const btnSubmenu = document.querySelectorAll(".btnSubmenu");
// En caso de tener más de un submenu
for (let i = 0; i < btnSubmenu.length; i++) {
    btnSubmenu[i].addEventListener("click", function () {
        // Condicion para que funcione solo en celular
        if (window.innerWidth < 750) {
            const subMenu = this.nextElementSibling;
            // Para que se ajuste el alto y empuje el resto de elementos
            const height = subMenu.scrollHeight;

            if (subMenu.classList.contains("desplegar")) {
                subMenu.classList.remove("desplegar");
                subMenu.removeAttribute("style");
            } else {
                subMenu.classList.add("desplegar");
                subMenu.style.height = height + "px";
            }

        }
    });
}