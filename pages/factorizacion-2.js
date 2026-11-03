// pages/factorizacion-2.js
var contenidoEntrada = `
<p class="apunte-texto">
    En esta segunda parte se profundiza en polinomios que no corresponden a cuadrados perfectos ni a diferencias cuadráticas: sumas y restas cúbicas, y trinomios generales de segundo grado resueltos mediante inspección y aspa simple.
</p>

<!-- ============================================================
    1. SUMA Y DIFERENCIA DE CUBOS
    ============================================================ -->
<h3 class="apunte-subtitulo">1. Suma y Diferencia de Cubos</h3>
<p class="apunte-texto">
    Se identifica al tener dos términos con raíz cúbica exacta. Se factoriza como el producto de un binomio por un trinomio siguiendo el patrón nemotécnico de signos <strong>MOS</strong> (<strong>M</strong>ismo signo, signo <strong>O</strong>puesto, <strong>S</strong>iempre positivo).
</p>

<div class="caja-regla">
    <div class="regla-etiqueta">Fórmulas Generales</div>
    <div class="regla-formula">a³ + b³ = (a + b)(a² - ab + b²)</div>
    <div class="regla-formula" style="margin-top: 6px;">a³ - b³ = (a - b)(a² + ab + b²)</div>
</div>

<div class="bloque-ejemplo">
    <span class="ejemplo-badge">Ejemplo 1 (Diferencia de Cubos)</span>
    <p class="apunte-texto">Factorizar: <strong>8x³ - 27</strong></p>
    <ol class="lista-pasos">
        <li><strong>Raíces cúbicas:</strong> ∛(8x³) = 2x y ∛27 = 3.</li>
        <li><strong>Binomio (Mismo signo):</strong> (2x - 3).</li>
        <li><strong>Trinomio:</strong> (2x)² + (2x)(3) + 3² = 4x² + 6x + 9.</li>
        <li><strong>Resultado:</strong> <span class="resultado-destacado">(2x - 3)(4x² + 6x + 9)</span></li>
    </ol>
</div>

<div class="bloque-ejemplo">
    <span class="ejemplo-badge">Ejemplo 2 (Suma con Potencias Múltiplos de 3)</span>
    <p class="apunte-texto">Factorizar: <strong>m⁶ + 64y³</strong></p>
    <ol class="lista-pasos">
        <li><strong>Raíces cúbicas:</strong> ∛(m⁶) = m² (el exponente se divide entre 3) y ∛(64y³) = 4y.</li>
        <li><strong>Binomio:</strong> (m² + 4y).</li>
        <li><strong>Trinomio:</strong> (m²)² - (m²)(4y) + (4y)² = m⁴ - 4m²y + 16y².</li>
        <li><strong>Resultado:</strong> <span class="resultado-destacado">(m² + 4y)(m⁴ - 4m²y + 16y²)</span></li>
    </ol>
</div>

<!-- ============================================================
    2. TRINOMIOS DE LA FORMA x² + bx + c
    ============================================================ -->
<h3 class="apunte-subtitulo">2. Trinomios de la forma x² + bx + c</h3>
<p class="apunte-texto">
    Es el regreso de los binomios con término común. Se buscan dos valores <span class="codigo-matematico">m</span> y <span class="codigo-matematico">n</span> tales que multiplicados resulten en <span class="codigo-matematico">c</span> y sumados algebraicamente den el coeficiente lineal <span class="codigo-matematico">b</span>.
</p>

<div class="caja-regla">
    <div class="regla-etiqueta">Estructura</div>
    <div class="regla-formula">x² + (m + n)x + mn = (x + m)(x + n)</div>
</div>

<div class="bloque-ejemplo">
    <span class="ejemplo-badge">Ejemplo 1 (Signos Mixtos)</span>
    <p class="apunte-texto">Factorizar: <strong>y² - 3y - 28</strong></p>
    <ol class="lista-pasos">
        <li><strong>Análisis de signos:</strong> Como c = -28 es negativo, los números tendrán signos distintos; el de mayor valor absoluto será negativo como b (-3).</li>
        <li><strong>Pares de factores de 28:</strong> (1, 28) → dif 27; (2, 14) → dif 12; (4, 7) → dif 3.</li>
        <li><strong>Números correctos:</strong> -7 y +4.</li>
        <li><strong>Resultado:</strong> <span class="resultado-destacado">(y - 7)(y + 4)</span></li>
    </ol>
</div>

<!-- ============================================================
    3. TRINOMIOS ax² + bx + c (MÉTODO DE ASPA SIMPLE)
    ============================================================ -->
<h3 class="apunte-subtitulo">3. Trinomios de la forma ax² + bx + c (Aspa Simple)</h3>
<p class="apunte-texto">
    Cuando el coeficiente principal es distinto de 1, se descomponen los términos de los extremos en dos columnas verticales, se multiplica en cruz (aspa) y se suman los productos resultantes para verificar que igualen al término intermedio.
</p>

<div class="bloque-ejemplo">
    <span class="ejemplo-badge">Ejemplo Resuelto</span>
    <p class="apunte-texto">Factorizar: <strong>3x² + 11x + 6</strong></p>
    <ol class="lista-pasos">
        <li><strong>Descomposición del primer término (3x²):</strong> 3x · x.</li>
        <li><strong>Descomposición del término independiente (+6):</strong> +2 · +3.</li>
        <li>
            <strong>Verificación en aspa:</strong><br>
            • 3x · (+3) = 9x<br>
            • x · (+2) = 2x<br>
            • Suma: 9x + 2x = <strong>11x</strong> (coincide con el término central).
        </li>
        <li><strong>Lectura horizontal de los factores:</strong> <span class="resultado-destacado">(3x + 2)(x + 3)</span></li>
    </ol>
</div>

<!-- ============================================================
    ESTRATEGIA GENERAL DE FACTORIZACIÓN
    ============================================================ -->
<h3 class="apunte-subtitulo">Estrategia General: Algoritmo de Decisión</h3>
<p class="apunte-texto">
    Al enfrentarse a cualquier polinomio, sigue este flujo ordenado para evitar pasos innecesarios:
</p>

<ol class="lista-pasos">
    <li><strong>Paso 1:</strong> ¿Existe un Factor Común? De ser así, extráelo en primer lugar.</li>
    <li>
        <strong>Paso 2:</strong> Contar la cantidad de términos restantes:
        <br>• <strong>2 términos:</strong> Evalúa si es Diferencia de Cuadrados (a² - b²) o Suma/Diferencia de Cubos (a³ ± b³).
        <br>• <strong>3 términos:</strong> Comprueba primero si es TCP; de lo contrario, aplica x² + bx + c o Aspa Simple.
        <br>• <strong>4 términos:</strong> Procede mediante agrupación de términos por parejas.
    </li>
    <li><strong>Paso 3:</strong> Revisa minuciosamente cada factor generado para determinar si es factorizable una vez más.</li>
</ol>
`;