// Prueba
function cambiar() {
    document.querySelectorAll("img").forEach(imgActual => {
        imgActual.setAttribute("style","width: 250px;");
    });
}
let btnlist = document.getElementById("btnlist");
let list = document.getElementById("list");
btnlist.addEventListener("click", function(){"use strict"; list.classList.toggle("mostrar");
});