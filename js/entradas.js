// js/entradas.js
document.addEventListener("DOMContentLoaded", () => {
    // 1. Manejo del Modo Oscuro
    const btnTema = document.getElementById("toggle-tema");
    const esDark = localStorage.getItem("tema_preferido") === "dark" || 
                   document.documentElement.classList.contains("dark-mode");

    if (esDark) {
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

    // 2. Carga dinámica de la lección
    const params = new URLSearchParams(window.location.search);
    const postId = params.get('id');
    const contenedor = document.getElementById('contenido-entrada');

    if (typeof publicaciones === 'undefined') {
        contenedor.innerHTML = "<p>No se encontraron los datos de publicaciones.</p>";
        return;
    }

    const postInfo = publicaciones.find(p => p.id === postId);

    if (postInfo) {
        document.getElementById('titulo-pagina').textContent = postInfo.titulo + " - Blog Matemático";
        document.getElementById('titulo-entrada').textContent = postInfo.titulo;
        document.getElementById('fecha-entrada').textContent = "Publicado: " + postInfo.fecha;

        const script = document.createElement('script');
        script.src = `./${postInfo.archivo}`;
        
        script.onload = () => { 
            if (typeof contenidoEntrada !== 'undefined') {
                contenedor.innerHTML = contenidoEntrada; 
            } else {
                contenedor.innerHTML = "<p>El archivo cargó pero no define contenidoEntrada.</p>";
            }
        };
        script.onerror = () => { 
            contenedor.innerHTML = "<p>Error al cargar el tema (" + postInfo.archivo + ").</p>"; 
        };
        
        document.body.appendChild(script);
    } else {
        contenedor.innerHTML = "<p>Entrada no encontrada.</p>";
    }
});