// js/main.js
document.addEventListener("DOMContentLoaded", () => {
    // 1. Renderizar tarjetas flotantes
    const contenedorLista = document.getElementById('lista-entradas');

    if (contenedorLista) {
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
    }

    // 2. Control de Modo Oscuro
    const btnTema = document.getElementById("toggle-tema");
    const esDarkInicial = localStorage.getItem("tema_preferido") === "dark" || 
    document.documentElement.classList.contains("dark-mode");

    if (esDarkInicial) {
        document.body.classList.add("dark-mode");
        if (btnTema) btnTema.textContent = "☀️";
    }

    if (btnTema) {
        btnTema.addEventListener("click", () => {
            const activo = document.body.classList.toggle("dark-mode");
            document.documentElement.classList.toggle("dark-mode", activo);
            btnTema.textContent = activo ? "☀️" : "🌙";
            localStorage.setItem("tema_preferido", activo ? "dark" : "light");
        });
    }
});

// Funciones interactivas de apoyo
function cambiarColorTitulo() {
    const titulo = document.getElementById('titulo');
    if (titulo) titulo.classList.toggle('cambio-color');
}

function alternarLista(id) {
    const lista = document.getElementById(id);
    if (lista) lista.classList.toggle('oculto');
}

function resaltarElemento(elemento) {
    elemento.classList.toggle('resaltado');
}