# algebra-canvas
Plataforma web interactiva orientado al aprendizaje, consulta y resolución de conceptos clave de fundamentos de algebra.

## Caracteristicas
- **Conceptos Interactivos** Despliege dinámico de definiciones esenciales de álgebra, geometría, cálculo y estadistica.

- **Formulario y Reglas** Tablas Interactivas con Fórmulas algebraicas.

- **Metodologia Paso a Paso** Guia estructurada para la resolución analítica de problemas.

- **Modulos especializados** Secciones dedicadas para algebra y proximamente para calculo, geometria y estadistica.

## Tecnologias

- **HTML5** Marcado sematico y estructura de vistas.
- **CSS3** Diseño responsivo, transiciones y estilos de componentes.
- **JavaScript (ES6)** Manipulación dinamica del DOM e interactividad de elementos.

## Estructura del Proyecto

```text
algebra-canvas/
├── assets/             # Recursos multimedia y gráficos
│   ├── icons/          # Iconografía e isotipos
│   └── img/            # Diagramas matemáticos e ilustraciones
├── css/
│   ├── components.css  # Estilos modulares (calculadoras, tablas, tarjetas)
│   └── styles.css      # Estilos globales, tipografía y maquetación base
├── js/
│   ├── algebra.js      # Lógica de cálculo matemático (ecuaciones, matrices)
│   ├── script.js       # Controladores de eventos e interactividad global
│   └── utils.js        # Funciones auxiliares y validaciones reutilizables
├── pages/              # Vistas secundarias por asignatura
│   ├── algebra.html    # Módulo interactivo de álgebra
│   ├── calculo.html    # Módulo de límites, derivadas e integrales
│   ├── estadistica.html# Módulo de tratamiento de datos
│   └── geometria.html  # Módulo de fórmulas y figuras geométricas
├── .gitignore          # Reglas de exclusión para Git
├── index.html          # Vista principal y panel de navegación
└── README.md           # Documentación técnica del proyecto