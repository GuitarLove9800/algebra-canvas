// js/main.js
const contenedorLista = document.getElementById('lista-entradas');

if (typeof publicaciones !== 'undefined' && publicaciones.length > 0) {
    publicaciones.forEach(post => {
        const card = document.createElement('article');
        card.className = 'card-flotante';
        card.innerHTML = `
            <div class="card-header">
                <span class="card-tag">Fundamentos de Álgebra</span>
                <time class="fecha-post">${post.fecha}</time>
            </div>
            <h3 class="card-titulo">${post.titulo}</h3>
            <p class="resumen-post">${post.resumen}</p>
            <a href="pages/entradas.html?id=${post.id}" class="card-btn">
                Explorar tema <span>→</span>
            </a>
        `;
        contenedorLista.appendChild(card);
    });
} else {
    contenedorLista.innerHTML = '<p class="sin-entradas">No hay entradas publicadas aún.</p>';
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