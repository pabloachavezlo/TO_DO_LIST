function modal(){
    document.querySelector(".modal").classList.add("activar");
}

let boton = document.querySelector("#boton_x");
boton.addEventListener("click", modal);

function cerrar (){
    document.querySelector(".modal").classList.remove("activar");
}

let fin = document.querySelector(".btn_cerrartarea");
fin.addEventListener("click", cerrar)

