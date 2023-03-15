import { item_componente } from "./componente_item.js";


function imprimir_todoes (){

    let caja_de_todos = document.querySelector(".todo_listt");

    DATA.forEach((element, indice) => {
        let todo = document.createElement("div");
        todo.innerHTML = item_componente(indice);
        caja_de_todos.appendChild(todo)
    });

}

export {imprimir_todoes};