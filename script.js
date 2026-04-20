function mostrar() {
    const wrap = document.getElementById('imgWrap');
    wrap.classList.add('visible');
}
function mostrarDescripcion(texto) {
    document.getElementById("descripcion").innerText = texto;
}

function mostrarDescripcion(elemento) {
    document.getElementById("descripcion").innerText = elemento.dataset.descripcion;
}
