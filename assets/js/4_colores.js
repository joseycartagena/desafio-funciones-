function pintarBloque(id, color) {
    const elemento = document.querySelector(`#${id}`);
    elemento.style.backgroundColor = color;
}

document.querySelector("#bloque-1").addEventListener("click", function() {
    pintarBloque('bloque-1', 'black');
});

document.querySelector("#bloque-2").addEventListener("click", function() {
    pintarBloque('bloque-2', 'black');
});

document.querySelector("#bloque-3").addEventListener("click", function() {
    pintarBloque('bloque-3', 'black');
});

document.querySelector("#bloque-4").addEventListener("click", function() {
    pintarBloque('bloque-4', 'black');
});
