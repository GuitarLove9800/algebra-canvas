const params = new URLSearchParams(window.location.search);
const postId = params.get('id');
const postInfo = publicaciones.find(p => p.id === postId);
const contenedor = document.getElementById('contenido-entrada');

if (postInfo) {
    document.getElementById('titulo-pagina').textContent = postInfo.titulo + " - Blog Matemático";
    document.getElementById('titulo-entrada').textContent = postInfo.titulo;
    document.getElementById('fecha-entrada').textContent = "Publicado el: " + postInfo.fecha;

    const script = document.createElement('script');
    // Se carga directamente desde la carpeta pages/
    script.src = `./${postInfo.archivo}`;
    
    script.onload = () => { 
        if (typeof contenidoEntrada !== 'undefined') {
            contenedor.innerHTML = contenidoEntrada; 
        } else {
            contenedor.innerHTML = "<p>El archivo se cargó pero no define la variable contenidoEntrada.</p>";
        }
    };
    script.onerror = () => { 
        contenedor.innerHTML = "<p>Error al cargar el contenido de la entrada (revisa que el archivo exista en pages/).</p>"; 
    };
    
    document.body.appendChild(script);
} else {
    contenedor.innerHTML = "<p>Entrada no encontrada.</p>";
}