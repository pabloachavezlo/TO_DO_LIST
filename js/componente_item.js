export function item_componente (numero_tarea) {
    let item = `
    <div class="todo_item">
        <span class="icono">¤</span>
        <p class="tarea${numero_tarea}">
            ${DATA[numero_tarea].mensaje}
        </p>
        <span class="icono2">X</span>
    </div>
    `;

    return item;

}