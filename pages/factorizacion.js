// pages/factorizacion.js
var contenidoEntrada = `
<p class="apunte-texto">
    Proceso algebraico inverso a la multiplicación que consiste en descomponer una expresión matemática en el producto de sus factores irreducibles.
</p>

<div class="caja-regla">
    <div class="regla-etiqueta">Fórmula General</div>
    <div class="regla-formula">a² + 2ab + b² = (a + b)²</div>
</div>

<h3 class="apunte-subtitulo">Caso 1: Trinomio Cuadrado Perfecto</h3>
<p class="apunte-texto">
    Un trinomio cuadrado perfecto resulta de elevar un binomio al cuadrado. Para identificarlo, el primer y tercer término deben tener raíces cuadradas exactas, y el término central debe ser el doble producto de dichas raíces.
</p>

<div class="bloque-ejemplo">
    <span class="ejemplo-badge">Ejemplo Práctico</span>
    <p class="apunte-texto">Factorizar la expresión: <strong>x² + 6x + 9</strong></p>
    
    <ol class="lista-pasos">
        <li>
            <strong>Paso 1:</strong> Raíces de los extremos:
            <span class="codigo-matematico">√x² = x</span> y <span class="codigo-matematico">√9 = 3</span>.
        </li>
        <li>
            <strong>Paso 2:</strong> Comprobar el doble producto:
            <span class="codigo-matematico">2 · (x) · (3) = 6x</span> (cumple).
        </li>
        <li>
            <strong>Resultado final:</strong>
            <span class="resultado-destacado">(x + 3)²</span>
        </li>
    </ol>
</div>
`;