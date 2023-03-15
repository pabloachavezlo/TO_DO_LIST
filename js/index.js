// Librería
import { imprimir_todoes } from "./cargar_los_todos.js";


imprimir_todoes();

// Función 
function nueva_tarea() {
    let mensaje = document.querySelector(".texto").value;

    DATA.push (
        {
            id: 11111,
            mensaje: "Pepepe",
            estado: true
        },
    );

    document.querySelector(".todo_listt").innerHTML = "";

    imprimir_todoes();

    document.querySelector(".modal").classList.remove("activar");

    document.querySelector(".txt").value = " ";

}

document.querySelector(".btn_tarea");