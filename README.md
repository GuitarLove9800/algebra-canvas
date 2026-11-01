# Blog Matemático Interactivo (algebra-canvas)

Plataforma web orientada al aprendizaje, consulta y resolución práctica de conceptos clave de fundamentos de álgebra y matemáticas esenciales, estructurada con un diseño visual tipo cuaderno técnico.

---

## Características

- **Diseño Estilo Hoja de Cuaderno:** Interfaz visual con fondo cuadriculado, margen guía, cajas de fórmulas y tipografía Poppins en negro mate y azul tecnológico.
- **Renderizado Dinámico de Temas:** Generación automática de tarjetas flotantes (*cards*) en el índice principal a partir de un arreglo centralizado de publicaciones.
- **Carga Modular de Apuntes:** Inyección bajo demanda del contenido teórico y analítico desde scripts específicos (`factorizacion.js`, `productos-notables.js`) en una plantilla unificada.
- **Demostraciones Paso a Paso:** Ejemplos prácticos estructurados con desglose secuencial de pasos, expresiones algebraicas resaltadas y resultados destacados.
- **Sección de Conceptos Rápidos:** Panel colapsable/interactivo que permite alternar y resaltar definiciones fundamentales de álgebra, geometría, cálculo y estadística.

---

## Tecnologías Utilizadas

- **HTML5:** Marcado semántico para la portada (`index.html`) y la plantilla de lectura (`pages/entradas.html`).
- **CSS3:** Variables CSS (`:root`), cuadrículas adaptables (*CSS Grid* y *Flexbox*), patrones de fondo, sombras flotantes y diseño adaptable a pantallas móviles.
- **JavaScript (ES6):** Manipulación del DOM, captura de parámetros en URL (`URLSearchParams`) y carga asíncrona/dinámica de scripts.
- **Google Fonts:** Tipografía *Poppins* (pesos 400 a 800).

---

## Estructura del Proyecto

```text
blog-matematico/
├── assets/
│   ├── icons/                  # Iconografía y recursos gráficos
│   └── img/                    # Diagramas e ilustraciones
├── css/
│   ├── entradas.css            # Estilos específicos / complementarios de lectura
│   └── styles.css              # Hoja de estilos global, tarjetas flotantes y cuaderno
├── js/
│   ├── entradas.js             # Lógica para leer el parámetro id y cargar el tema correspondiente
│   ├── main.js                 # Inyección dinámica de cards en la portada e interactividad
│   └── post.js                 # Registro y metadata de las publicaciones (id, título, fecha, archivo)
├── pages/
│   ├── entradas.html           # Plantilla contenedora para la visualización del apunte
│   ├── factorizacion.js        # Contenido teórico, fórmulas y ejemplos de factorización
│   └── productos-notables.js   # Contenido teórico y ejercicios de productos notables
├── .gitignore                  # Exclusiones para control de versiones en Git
├── index.html                  # Página principal (hero, cards flotantes y conceptos rápidos)
└── README.md                   # Documentación técnica del repositorio