// Librería
import { item_componente } from "./componente_item.js";
import { DATA } from "./DATA.js";

// Función para imprimir cada elemento de la lista de tareas
let caja_de_todos = document.querySelector(".todo_listt")

// Función 
function imprimir_todoes (){

    DATA.forEach((element, indice) => {

        let todo = document.createElement("div");

        todo.innerHTML = item_componente(indice);

        caja_de_todos.appendChild(todo)

    });
}

function nueva_tarea () {
    DATA.push("nueva tarea");
    caja_de_todos.innerHTML = "";
    imprimir_todoes();
}

let boton = document.querySelector(".boton");
boton.addEventListener("click", nueva_tarea)


imprimir_todoes();

