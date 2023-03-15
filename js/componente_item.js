export function item_componente (numero_tarea) {
    let item_componente = `
    <div class="todo_item">
        <span class="icono">¤</span>
        <p>
            ${DATA[numero_tarea].mensaje}
        </p>
        <span class="icono2">X</span>
    </div>
    `;

    return item_componente;

}