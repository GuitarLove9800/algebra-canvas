
        // Función para cambiar el color del título
        function cambiarColorTitulo() {
            var titulo = document.getElementById('titulo');
            titulo.classList.toggle('cambio-color');
        }

        // Función para mostrar u ocultar una lista
        function alternarLista(id) {
            var lista = document.getElementById(id);
            lista.classList.toggle('oculto');
        }

        // Función para resaltar un elemento
        function resaltarElemento(elemento) {
            elemento.classList.toggle('resaltado');
        }
