// Librería
import { imprimir_todoes } from "./cargar_los_todos.js";

imprimir_todoes();
completar_tarea();

// Función 
function nueva_tarea() {
    let mensaje = document.querySelector(".txt").value;

    DATA.push (
        {
            id: 11111,
            mensaje: mensaje,
            estado: true
        },
    );

    document.querySelector(".todo_listt").innerHTML = "";

    imprimir_todoes();

    document.querySelector(".modal").classList.remove("activar");

    document.querySelector(".txt").value = " ";

}

document.querySelector(".btn-tarea").addEventListener("click", nueva_tarea);