// js/main.js
const contenedorLista = document.getElementById('lista-entradas');

if (typeof publicaciones !== 'undefined' && publicaciones.length > 0) {
    publicaciones.forEach(post => {
        const li = document.createElement('li');
        li.innerHTML = `
            <a href="pages/entradas.html?id=${post.id}">${post.titulo}</a>
            <span class="fecha-post">${post.fecha}</span>
            <p class="resumen-post">${post.resumen}</p>
        `;
        contenedorLista.appendChild(li);
    });
} else {
    contenedorLista.innerHTML = '<li>No hay entradas publicadas aún.</li>';
}

function cambiarColorTitulo() {
    var titulo = document.getElementById('titulo');
    titulo.classList.toggle('cambio-color');
}

function alternarLista(id) {
    var lista = document.getElementById(id);
    lista.classList.toggle('oculto');
}

function resaltarElemento(elemento) {
    elemento.classList.toggle('resaltado');
}