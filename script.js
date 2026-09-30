// Botón "Ver productos"
const botonProductos = document.querySelector("#inicio button");

botonProductos.addEventListener("click", function() {
    document.querySelector("#productos").scrollIntoView({
        behavior: "smooth"
    });
});


// Botón "Contactar"
const btnContacto = document.querySelector("#btnContacto");

btnContacto.addEventListener("click", function() {
    window.location.href = "https://wa.me/59162280649";
});