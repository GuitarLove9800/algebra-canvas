// pages/productos-notables.js
var contenidoEntrada = `
<p class="apunte-texto">
    Un <strong>producto notable</strong> es una multiplicación de expresiones algebraicas que sigue un patrón constante. Conocer su regla nos permite escribir el resultado por simple inspección, optimizando tiempo y evitando desarrollar la multiplicación paso a paso mediante tablas o propiedad distributiva.
</p>

<!-- ============================================================
    1. BINOMIO AL CUADRADO
    ============================================================ -->
<h3 class="apunte-subtitulo">1. Binomio al Cuadrado</h3>
<p class="apunte-texto">
    <strong>Regla:</strong> Cuadrado del primer término, más (o menos) el doble del primer término multiplicado por el segundo, más el cuadrado del segundo término. El desarrollo produce siempre un <em>Trinomio Cuadrado Perfecto</em>.
</p>

<div class="caja-regla">
    <div class="regla-etiqueta">Fórmula General</div>
    <div class="regla-formula">(a ± b)² = a² ± 2ab + b²</div>
</div>

<p class="apunte-texto">
    <em>Nota de signos:</em> El término central conserva el signo del binomio original. El término cuadrático final (<span class="codigo-matematico">+b²</span>) siempre resulta positivo al ser una potencia par.
</p>

<div class="bloque-ejemplo" style="border-left: 4px solid #ef4444;">
    <span class="ejemplo-badge" style="background-color: #ef4444;">¡Cuidado! Error Frecuente</span>
    <p class="apunte-texto">
        <strong>(a + b)² nunca es igual a a² + b²</strong>. Al cometer esta omisión, se descarta el término central correspondiente al área de los rectángulos del producto cruzado.
    </p>
    <p class="apunte-texto" style="margin-bottom: 0;">
        <strong>Comprobación con valores:</strong> Si <span class="codigo-matematico">a = 2</span> y <span class="codigo-matematico">b = 5</span>:<br>
        • Valor correcto: <span class="codigo-matematico">(2 + 5)² = 7² = 49</span><br>
        • Error común: <span class="codigo-matematico">2² + 5² = 4 + 25 = 29</span> (hace falta sumar <span class="codigo-matematico">2(2)(5) = 20</span>).
    </p>
</div>

<div class="bloque-ejemplo">
    <span class="ejemplo-badge">Ejemplo 1 (Básico)</span>
    <p class="apunte-texto">Desarrollar: <strong>(y + 6)²</strong></p>
    <ol class="lista-pasos">
        <li><strong>Cuadrado del primero:</strong> <span class="codigo-matematico">y²</span></li>
        <li><strong>Doble del primero por el segundo:</strong> <span class="codigo-matematico">2 · (y) · (6) = 12y</span></li>
        <li><strong>Cuadrado del segundo:</strong> <span class="codigo-matematico">6² = 36</span></li>
        <li><strong>Resultado:</strong> <span class="resultado-destacado">y² + 12y + 36</span></li>
    </ol>
</div>

<div class="bloque-ejemplo">
    <span class="ejemplo-badge">Ejemplo 2 (Con coeficientes y signo negativo)</span>
    <p class="apunte-texto">Desarrollar: <strong>(3m - 4)²</strong></p>
    <ol class="lista-pasos">
        <li><strong>Cuadrado del primero:</strong> <span class="codigo-matematico">(3m)² = 9m²</span></li>
        <li><strong>Doble del primero por el segundo:</strong> <span class="codigo-matematico">2 · (3m) · (-4) = -24m</span></li>
        <li><strong>Cuadrado del segundo:</strong> <span class="codigo-matematico">(-4)² = +16</span></li>
        <li><strong>Resultado:</strong> <span class="resultado-destacado">9m² - 24m + 16</span></li>
    </ol>
</div>

<div class="bloque-ejemplo">
    <span class="ejemplo-badge">Ejemplo 3 (Potencia con variables múltiples)</span>
    <p class="apunte-texto">Desarrollar: <strong>(2x³ + 5y)²</strong></p>
    <ol class="lista-pasos">
        <li><strong>Cuadrado del primero:</strong> <span class="codigo-matematico">(2x³)² = 4x⁶</span></li>
        <li><strong>Doble del primero por el segundo:</strong> <span class="codigo-matematico">2 · (2x³) · (5y) = 20x³y</span></li>
        <li><strong>Cuadrado del segundo:</strong> <span class="codigo-matematico">(5y)² = 25y²</span></li>
        <li><strong>Resultado:</strong> <span class="resultado-destacado">4x⁶ + 20x³y + 25y²</span></li>
    </ol>
</div>

<div class="caja-regla" style="background-color: #f8fafc; border-left-color: #64748b;">
    <div class="regla-etiqueta" style="color: #475569;">Aplicación: Cálculo Mental</div>
    <p class="apunte-texto" style="margin-bottom: 0;">
        • <strong>41²</strong> = (40 + 1)² = 40² + 2(40)(1) + 1² = 1600 + 80 + 1 = <strong class="codigo-matematico">1681</strong><br>
        • <strong>89²</strong> = (90 - 1)² = 90² - 2(90)(1) + 1² = 8100 - 180 + 1 = <strong class="codigo-matematico">7921</strong>
    </p>
</div>

<!-- ============================================================
    2. BINOMIO AL CUBO
    ============================================================ -->
<h3 class="apunte-subtitulo">2. Binomio al Cubo</h3>
<p class="apunte-texto">
    Consta de un polinomio de cuatro términos que se calcula metódicamente mediante el algoritmo del tablero cruzado o la regla directa de cubos y productos triples.
</p>

<div class="caja-regla">
    <div class="regla-etiqueta">Fórmula General</div>
    <div class="regla-formula">(a ± b)³ = a³ ± 3a²b + 3ab² ± b³</div>
</div>

<p class="apunte-texto">
    <strong>Método de Resolución:</strong><br>
    1. Se ubica el binomio con un coeficiente 3 a los extremos: <span class="codigo-matematico">3 (a ± b) 3</span>.<br>
    2. Debajo se colocan los cuadrados de cada elemento: <span class="codigo-matematico">a²</span> y <span class="codigo-matematico">b²</span>.<br>
    3. Las columnas verticales generan los cubos de los extremos.<br>
    4. Las multiplicaciones cruzadas por 3 determinan los términos intermedios.<br>
    5. Se ordenan los exponentes de forma descendente.
</p>

<div class="bloque-ejemplo">
    <span class="ejemplo-badge">Ejemplo 1 (Básico)</span>
    <p class="apunte-texto">Desarrollar: <strong>(x + 4)³</strong></p>
    <ol class="lista-pasos">
        <li><strong>Cubos de los extremos:</strong> <span class="codigo-matematico">x · x² = x³</span> y <span class="codigo-matematico">4 · 4² = 64</span></li>
        <li><strong>Primer término central:</strong> <span class="codigo-matematico">3 · (x²) · (4) = 12x²</span></li>
        <li><strong>Segundo término central:</strong> <span class="codigo-matematico">3 · (x) · (4²) = 3 · x · 16 = 48x</span></li>
        <li><strong>Resultado final:</strong> <span class="resultado-destacado">x³ + 12x² + 48x + 64</span></li>
    </ol>
</div>

<div class="bloque-ejemplo">
    <span class="ejemplo-badge">Ejemplo 2 (Con signo negativo)</span>
    <p class="apunte-texto">Desarrollar: <strong>(m - 3)³</strong></p>
    <ol class="lista-pasos">
        <li><strong>Cubo del primero:</strong> <span class="codigo-matematico">m³</span></li>
        <li><strong>Triple del cuadrado del primero por el segundo:</strong> <span class="codigo-matematico">3 · (m²) · (-3) = -9m²</span></li>
        <li><strong>Triple del primero por el cuadrado del segundo:</strong> <span class="codigo-matematico">3 · (m) · (-3)² = 3 · m · 9 = +27m</span></li>
        <li><strong>Cubo del segundo:</strong> <span class="codigo-matematico">(-3)³ = -27</span></li>
        <li><strong>Resultado final:</strong> <span class="resultado-destacado">m³ - 9m² + 27m - 27</span></li>
    </ol>
</div>

<div class="bloque-ejemplo">
    <span class="ejemplo-badge">Ejemplo 3 (Con coeficientes mayores a 1)</span>
    <p class="apunte-texto">Desarrollar: <strong>(3x - 2)³</strong></p>
    <ol class="lista-pasos">
        <li><strong>Extremos cúbicos:</strong> <span class="codigo-matematico">(3x)³ = 27x³</span> y <span class="codigo-matematico">(-2)³ = -8</span></li>
        <li><strong>Término de segundo grado:</strong> <span class="codigo-matematico">3 · (3x)² · (-2) = 3 · (9x²) · (-2) = -54x²</span></li>
        <li><strong>Término lineal:</strong> <span class="codigo-matematico">3 · (3x) · (-2)² = 3 · (3x) · 4 = 36x</span></li>
        <li><strong>Resultado ordenado:</strong> <span class="resultado-destacado">27x³ - 54x² + 36x - 8</span></li>
    </ol>
</div>

<!-- ============================================================
    3. BINOMIOS CON TÉRMINO COMÚN
    ============================================================ -->
<h3 class="apunte-subtitulo">3. Binomios con Término Común</h3>
<p class="apunte-texto">
    <strong>Regla:</strong> Cuadrado del término repetido, más la suma algebraica de los términos no comunes multiplicada por el común, más el producto algebraico de los no comunes.
</p>

<div class="caja-regla">
    <div class="regla-etiqueta">Fórmula General</div>
    <div class="regla-formula">(x + a)(x + b) = x² + (a + b)x + ab</div>
</div>

<div class="bloque-ejemplo">
    <span class="ejemplo-badge">Ejemplo 1 (Signos positivos)</span>
    <p class="apunte-texto">Desarrollar: <strong>(x + 7)(x + 4)</strong></p>
    <ol class="lista-pasos">
        <li><strong>Cuadrado del común:</strong> <span class="codigo-matematico">x²</span></li>
        <li><strong>Suma de no comunes por el común:</strong> <span class="codigo-matematico">(7 + 4)x = 11x</span></li>
        <li><strong>Producto de no comunes:</strong> <span class="codigo-matematico">(7)(4) = 28</span></li>
        <li><strong>Resultado final:</strong> <span class="resultado-destacado">x² + 11x + 28</span></li>
    </ol>
</div>

<div class="bloque-ejemplo">
    <span class="ejemplo-badge">Ejemplo 2 (Signos contrarios)</span>
    <p class="apunte-texto">Desarrollar: <strong>(y - 9)(y + 3)</strong></p>
    <ol class="lista-pasos">
        <li><strong>Cuadrado del común:</strong> <span class="codigo-matematico">y²</span></li>
        <li><strong>Suma de no comunes por el común:</strong> <span class="codigo-matematico">(-9 + 3)y = -6y</span></li>
        <li><strong>Producto de no comunes:</strong> <span class="codigo-matematico">(-9)(3) = -27</span></li>
        <li><strong>Resultado final:</strong> <span class="resultado-destacado">y² - 6y - 27</span></li>
    </ol>
</div>

<div class="bloque-ejemplo">
    <span class="ejemplo-badge">Ejemplo 3 (Término común con exponente par)</span>
    <p class="apunte-texto">Desarrollar: <strong>(a³ - 5)(a³ - 8)</strong></p>
    <ol class="lista-pasos">
        <li><strong>Cuadrado del común:</strong> <span class="codigo-matematico">(a³)² = a⁶</span></li>
        <li><strong>Suma de no comunes por el común:</strong> <span class="codigo-matematico">(-5 - 8)a³ = -13a³</span></li>
        <li><strong>Producto de no comunes:</strong> <span class="codigo-matematico">(-5)(-8) = +40</span></li>
        <li><strong>Resultado final:</strong> <span class="resultado-destacado">a⁶ - 13a³ + 40</span></li>
    </ol>
</div>

<!-- ============================================================
    4. BINOMIOS CONJUGADOS
    ============================================================ -->
<h3 class="apunte-subtitulo">4. Binomios Conjugados</h3>
<p class="apunte-texto">
    Se presentan al multiplicar dos binomios idénticos excepto por el signo del segundo elemento. Los términos intermedios se anulan mutuamente, originando una <strong>Diferencia de Cuadrados</strong>.
</p>

<div class="caja-regla">
    <div class="regla-etiqueta">Fórmula General</div>
    <div class="regla-formula">(a + b)(a - b) = a² - b²</div>
</div>

<div class="bloque-ejemplo">
    <span class="ejemplo-badge">Ejemplos Prácticos</span>
    <ol class="lista-pasos">
        <li>
            <strong>Básico:</strong> <span class="codigo-matematico">(x + 7)(x - 7) = x² - 7²</span> → <span class="resultado-destacado">x² - 49</span>
        </li>
        <li>
            <strong>Con coeficientes múltiples:</strong> <span class="codigo-matematico">(4a + 5b)(4a - 5b) = (4a)² - (5b)²</span> → <span class="resultado-destacado">16a² - 25b²</span>
        </li>
        <li>
            <strong>Con potencias elevadas:</strong> <span class="codigo-matematico">(m⁴ + 6)(m⁴ - 6) = (m⁴)² - 6²</span> → <span class="resultado-destacado">m⁸ - 36</span>
        </li>
    </ol>
</div>

<div class="caja-regla" style="background-color: #f8fafc; border-left-color: #64748b;">
    <div class="regla-etiqueta" style="color: #475569;">Aplicación: Multiplicación Mental Rápida</div>
    <p class="apunte-texto" style="margin-bottom: 0;">
        • <strong>38 × 42</strong> = (40 - 2)(40 + 2) = 40² - 2² = 1600 - 4 = <strong class="codigo-matematico">1596</strong>
    </p>
</div>

<!-- ============================================================
    TABLA RESUMEN GENERAL
    ============================================================ -->
<h3 class="apunte-subtitulo">Tabla Comparativa de Reglas</h3>
<div style="overflow-x: auto; margin-top: 15px;">
    <table style="width: 100%; border-collapse: collapse; background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid var(--borde);">
        <thead>
            <tr style="background: #0f172a; color: #ffffff; text-align: left; font-size: 0.85rem;">
                <th style="padding: 12px 16px;">Caso</th>
                <th style="padding: 12px 16px;">Estructura</th>
                <th style="padding: 12px 16px;">Forma Resultante</th>
            </tr>
        </thead>
        <tbody style="font-size: 0.92rem; color: var(--texto-secundario);">
            <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 12px 16px; font-weight: 600; color: var(--texto-oscuro);">Binomio al cuadrado</td>
                <td style="padding: 12px 16px;"><span class="codigo-matematico">(a ± b)²</span></td>
                <td style="padding: 12px 16px; font-weight: 600;">a² ± 2ab + b²</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 12px 16px; font-weight: 600; color: var(--texto-oscuro);">Binomio al cubo</td>
                <td style="padding: 12px 16px;"><span class="codigo-matematico">(a ± b)³</span></td>
                <td style="padding: 12px 16px; font-weight: 600;">a³ ± 3a²b + 3ab² ± b³</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 12px 16px; font-weight: 600; color: var(--texto-oscuro);">Término común</td>
                <td style="padding: 12px 16px;"><span class="codigo-matematico">(x + a)(x + b)</span></td>
                <td style="padding: 12px 16px; font-weight: 600;">x² + (a + b)x + ab</td>
            </tr>
            <tr>
                <td style="padding: 12px 16px; font-weight: 600; color: var(--texto-oscuro);">Binomios conjugados</td>
                <td style="padding: 12px 16px;"><span class="codigo-matematico">(a + b)(a - b)</span></td>
                <td style="padding: 12px 16px; font-weight: 600;">a² - b²</td>
            </tr>
        </tbody>
    </table>
</div>
`;