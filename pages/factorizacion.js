// pages/factorizacion.js
var contenidoEntrada = `
<p class="apunte-texto">
    <strong>Factorizar</strong> es el proceso inverso a la multiplicación algebraica: consiste en tomar un polinomio y descomponerlo en los factores que lo originan. Para comprobar que una factorización es correcta, basta con multiplicar los factores obtenidos y verificar que se retorne a la expresión inicial.
</p>

<!-- ============================================================
     1. TÉRMINO COMÚN Y AGRUPACIÓN
     ============================================================ -->
<h3 class="apunte-subtitulo">1. Factor Común y Factorización por Agrupación</h3>
<p class="apunte-texto">
    Se basa en la propiedad distributiva invertida. Se localiza el Máximo Común Divisor (MCD) de los coeficientes numéricos y las variables que se repitan en todos los términos, tomadas siempre con su menor exponente.
</p>

<div class="caja-regla">
    <div class="regla-etiqueta">Propiedad Base</div>
    <div class="regla-formula">ab + ac = a(b + c)</div>
</div>

<div class="bloque-ejemplo">
    <span class="ejemplo-badge">Ejemplo 1 (Factor Común Monomio)</span>
    <p class="apunte-texto">Factorizar: <strong>18x⁴ - 12x³ + 6x²</strong></p>
    <ol class="lista-pasos">
        <li><strong>MCD de coeficientes:</strong> MCD(18, 12, 6) = 6.</li>
        <li><strong>Variable repetida con menor potencia:</strong> x².</li>
        <li><strong>Factor común determinado:</strong> 6x².</li>
        <li><strong>División término a término:</strong> 18x⁴ ÷ 6x² = 3x², -12x³ ÷ 6x² = -2x, 6x² ÷ 6x² = 1 (nunca se omite).</li>
        <li><strong>Resultado:</strong> <span class="resultado-destacado">6x²(3x² - 2x + 1)</span></li>
    </ol>
</div>

<div class="bloque-ejemplo">
    <span class="ejemplo-badge">Ejemplo 2 (Factor Común Binomio y Agrupación)</span>
    <p class="apunte-texto">Factorizar agrupando de dos en dos: <strong>2am - 6an + bm - 3bn</strong></p>
    <ol class="lista-pasos">
        <li><strong>Asociar términos por parejas:</strong> (2am - 6an) + (bm - 3bn).</li>
        <li><strong>Extraer factor común a cada bloque:</strong> 2a(m - 3n) + b(m - 3n).</li>
        <li><strong>Extraer el paréntesis común:</strong> <span class="resultado-destacado">(m - 3n)(2a + b)</span></li>
    </ol>
</div>

<!-- ============================================================
     2. TRINOMIO CUADRADO PERFECTO (TCP)
     ============================================================ -->
<h3 class="apunte-subtitulo">2. Trinomio Cuadrado Perfecto (TCP)</h3>
<p class="apunte-texto">
    Es el proceso inverso al binomio al cuadrado. Ocurre cuando el primer y tercer término tienen raíz cuadrada exacta y el término central equivale estrictamente al doble producto de dichas raíces.
</p>

<div class="caja-regla">
    <div class="regla-etiqueta">Fórmula General</div>
    <div class="regla-formula">a² ± 2ab + b² = (a ± b)²</div>
</div>

<div class="bloque-ejemplo" style="border-left: 4px solid #ef4444;">
    <span class="ejemplo-badge" style="background-color: #ef4444;">Comprobación Obligatoria</span>
    <p class="apunte-texto">
        Que los extremos tengan raíz cuadrada exacta no garantiza un TCP. En la expresión <strong>x² + 10x + 16</strong>, las raíces son x y 4; sin embargo, 2(x)(4) = 8x ≠ 10x. No es un TCP.
    </p>
</div>

<div class="bloque-ejemplo">
    <span class="ejemplo-badge">Ejemplo Práctico</span>
    <p class="apunte-texto">Factorizar: <strong>25x² - 30x + 9</strong></p>
    <ol class="lista-pasos">
        <li><strong>Raíz del primer término:</strong> √(25x²) = 5x.</li>
        <li><strong>Raíz del tercer término:</strong> √9 = 3.</li>
        <li><strong>Validación del término central:</strong> 2 · (5x) · (3) = 30x (coincide).</li>
        <li><strong>Signo central:</strong> Negativo (-).</li>
        <li><strong>Resultado:</strong> <span class="resultado-destacado">(5x - 3)²</span></li>
    </ol>
</div>

<!-- ============================================================
     3. DIFERENCIA DE CUADRADOS
     ============================================================ -->
<h3 class="apunte-subtitulo">3. Diferencia de Cuadrados</h3>
<p class="apunte-texto">
    Es el proceso inverso a los binomios conjugados. Aplica exclusivamente a dos términos cuadráticos separados por un signo menos.
</p>

<div class="caja-regla">
    <div class="regla-etiqueta">Fórmula General</div>
    <div class="regla-formula">a² - b² = (a + b)(a - b)</div>
</div>

<div class="bloque-ejemplo">
    <span class="ejemplo-badge">Ejemplo 1 (Con coeficientes y variables)</span>
    <p class="apunte-texto">Factorizar: <strong>49m² - 64n⁴</strong></p>
    <ol class="lista-pasos">
        <li><strong>Raíz cuadrada de 49m²:</strong> 7m.</li>
        <li><strong>Raíz cuadrada de 64n⁴:</strong> 8n².</li>
        <li><strong>Escribir como binomios conjugados:</strong> <span class="resultado-destacado">(7m + 8n²)(7m - 8n²)</span></li>
    </ol>
</div>

<div class="bloque-ejemplo">
    <span class="ejemplo-badge">Ejemplo 2 (Factorización Completa / Doble)</span>
    <p class="apunte-texto">Factorizar hasta la mínima expresión: <strong>m⁴ - 16</strong></p>
    <ol class="lista-pasos">
        <li><strong>Primera descomposición:</strong> (m² + 4)(m² - 4).</li>
        <li><strong>Análisis de factores resultantes:</strong> (m² - 4) vuelve a ser una diferencia de cuadrados → (m + 2)(m - 2). El factor (m² + 4) es una suma y en los números reales no se descompone.</li>
        <li><strong>Resultado final:</strong> <span class="resultado-destacado">(m² + 4)(m + 2)(m - 2)</span></li>
    </ol>
</div>

<div class="caja-regla" style="background-color: #f8fafc; border-left-color: #64748b;">
    <div class="regla-etiqueta" style="color: #475569;">Cálculo Mental Rápido</div>
    <p class="apunte-texto" style="margin-bottom: 0;">
        • <strong>62² - 58²</strong> = (62 + 58)(62 - 58) = (120)(4) = <strong class="codigo-matematico">480</strong>
    </p>
</div>

<!-- ============================================================
     TABLA RESUMEN FACTORIZACIÓN I
     ============================================================ -->
<h3 class="apunte-subtitulo">Resumen: De la Multiplicación a la Factorización</h3>
<div style="overflow-x: auto; margin-top: 15px;">
    <table style="width: 100%; border-collapse: collapse; background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid var(--borde);">
        <thead>
            <tr style="background: #0f172a; color: #ffffff; text-align: left; font-size: 0.85rem;">
                <th style="padding: 12px 16px;">Caso</th>
                <th style="padding: 12px 16px;">Identificación</th>
                <th style="padding: 12px 16px;">Factorización</th>
                <th style="padding: 12px 16px;">Operación de Regreso</th>
            </tr>
        </thead>
        <tbody style="font-size: 0.92rem; color: var(--texto-secundario);">
            <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 12px 16px; font-weight: 600; color: var(--texto-oscuro);">Factor Común</td>
                <td style="padding: 12px 16px;">Elemento que se repite en cada monomio</td>
                <td style="padding: 12px 16px;"><span class="codigo-matematico">a(b + c)</span></td>
                <td style="padding: 12px 16px;">Propiedad Distributiva</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 12px 16px; font-weight: 600; color: var(--texto-oscuro);">Trinomio Cuadrado Perfecto</td>
                <td style="padding: 12px 16px;">3 términos, extremos cuadráticos, centro doble</td>
                <td style="padding: 12px 16px;"><span class="codigo-matematico">(a ± b)²</span></td>
                <td style="padding: 12px 16px;">Binomio al Cuadrado</td>
            </tr>
            <tr>
                <td style="padding: 12px 16px; font-weight: 600; color: var(--texto-oscuro);">Diferencia de Cuadrados</td>
                <td style="padding: 12px 16px;">2 términos con resta y raíces exactas</td>
                <td style="padding: 12px 16px;"><span class="codigo-matematico">(a + b)(a - b)</span></td>
                <td style="padding: 12px 16px;">Binomios Conjugados</td>
            </tr>
        </tbody>
    </table>
</div>
`;