function modal() {
    document.querySelector(".modal").classList.add("activar");
}

let boton = document.querySelector(".boton");
boton.addEventListener("click", modal);

function cerrar (){
    document.querySelector(".modal").classList.remove("activar");
    document.querySelector(".txt").value = "";
}

let close = document.querySelector(".btn_cerrartarea");
close.addEventListener("click", cerrar)