// pages/ecuaciones-primer-grado.js
var contenidoEntrada = `
<p class="apunte-texto">
    Una <strong>ecuación</strong> es una igualdad matemática condicional que contiene una o más cantidades desconocidas llamadas incógnitas. Es de <strong>primer grado</strong> (o lineal) porque la incógnita tiene exponente 1. Resolverla implica hallar el valor numérico exacto que satisface la igualdad.
</p>

<!-- Analogía Balanza -->
<div class="caja-regla">
    <div class="regla-etiqueta">Principio Fundamental: La Balanza en Equilibrio</div>
    <div class="regla-formula">Operación en miembro izquierdo = Misma operación en miembro derecho</div>
</div>

<p class="apunte-texto">
    La regla de despeje conocida popularmente como «pasar al otro lado con la operación contraria» no es magia: si sumas, restas, multiplicas o divides en un lado por una cantidad, debes aplicar exactamente la misma operación en el otro miembro para conservar el equilibrio.
</p>

<!-- ============================================================
    PROCEDIMIENTO GENERAL
    ============================================================ -->
<h3 class="apunte-subtitulo">Algoritmo General de Resolución</h3>
<ol class="lista-pasos">
    <li><strong>Paso 1 (Signos de agrupación):</strong> Suprimir paréntesis, corchetes y llaves de adentro hacia afuera aplicando la propiedad distributiva o la ley de signos.</li>
    <li><strong>Paso 2 (Denominadores):</strong> Multiplicar todos los términos de ambos miembros por el Mínimo Común Múltiplo (MCM) para transformar la expresión en una ecuación entera.</li>
    <li><strong>Paso 3 (Transposición de términos):</strong> Agrupar todos los términos literales con incógnita en un miembro y los valores constantes en el opuesto.</li>
    <li><strong>Paso 4 (Reducción):</strong> Sumar o restar los términos semejantes en cada lado.</li>
    <li><strong>Paso 5 (Despeje):</strong> Dividir ambos miembros entre el coeficiente numérico de la incógnita.</li>
    <li><strong>Paso 6 (Validación / Test):</strong> Sustituir el valor obtenido en la ecuación original y verificar la igualdad numérica.</li>
</ol>

<!-- ============================================================
    1. ECUACIONES ENTERAS
    ============================================================ -->
<h3 class="apunte-subtitulo">1. Ecuaciones Enteras</h3>
<p class="apunte-texto">
    No presentan incógnitas en denominadores ni signos de fracción fraccionaria. Se resuelven directamente agrupando términos y reduciendo.
</p>

<div class="bloque-ejemplo">
    <span class="ejemplo-badge">Ejemplo Resuelto</span>
    <p class="apunte-texto">Resolver: <strong>4x - 9 = x + 6</strong></p>
    <ol class="lista-pasos">
        <li><strong>Transponer términos:</strong> <span class="codigo-matematico">4x - x = 6 + 9</span></li>
        <li><strong>Reducción de semejantes:</strong> <span class="codigo-matematico">3x = 15</span></li>
        <li><strong>Despeje:</strong> <span class="codigo-matematico">x = 15 ÷ 3</span></li>
        <li><strong>Resultado:</strong> <span class="resultado-destacado">x = 5</span></li>
        <li><strong>Comprobación:</strong> 4(5) - 9 = 20 - 9 = <strong>11</strong>; 5 + 6 = <strong>11</strong> (11 == 11 ✓).</li>
    </ol>
</div>

<!-- ============================================================
    2. ECUACIONES CON SIGNOS DE AGRUPACIÓN
    ============================================================ -->
<h3 class="apunte-subtitulo">2. Ecuaciones con Signos de Agrupación</h3>
<p class="apunte-texto">
    Si un paréntesis está precedido por un signo negativo, <em>todos los términos internos invierten su signo</em>. Si está precedido por un coeficiente, este multiplica distributivamente a cada elemento interior.
</p>

<div class="bloque-ejemplo">
    <span class="ejemplo-badge">Ejemplo Resuelto</span>
    <p class="apunte-texto">Resolver: <strong>4(x - 3) - 2(x + 1) = 8</strong></p>
    <ol class="lista-pasos">
        <li><strong>Eliminar paréntesis:</strong> <span class="codigo-matematico">4x - 12 - 2x - 2 = 8</span></li>
        <li><strong>Reducción previa:</strong> <span class="codigo-matematico">2x - 14 = 8</span></li>
        <li><strong>Agrupar constantes:</strong> <span class="codigo-matematico">2x = 8 + 14 → 2x = 22</span></li>
        <li><strong>Despejar:</strong> <span class="codigo-matematico">x = 22 ÷ 2</span></li>
        <li><strong>Resultado:</strong> <span class="resultado-destacado">x = 11</span></li>
        <li><strong>Comprobación:</strong> 4(11 - 3) - 2(11 + 1) = 4(8) - 2(12) = 32 - 24 = <strong>8</strong> (8 == 8 ✓).</li>
    </ol>
</div>

<!-- ============================================================
    3. ECUACIONES FRACCIONARIAS
    ============================================================ -->
<h3 class="apunte-subtitulo">3. Ecuaciones Fraccionarias</h3>
<p class="apunte-texto">
    Para eliminar fracciones, calculamos el MCM de los denominadores y multiplicamos <strong>cada término de la ecuación</strong> por este valor (incluidos los términos enteros).
</p>

<div class="bloque-ejemplo">
    <span class="ejemplo-badge">Ejemplo Resuelto</span>
    <p class="apunte-texto">Resolver: <strong>(x + 2)/3 - (x - 4)/5 = 2</strong></p>
    <ol class="lista-pasos">
        <li><strong>MCM de los denominadores (3 y 5):</strong> 15.</li>
        <li><strong>Multiplicar toda la expresión por 15:</strong> <span class="codigo-matematico">5(x + 2) - 3(x - 4) = 15(2)</span></li>
        <li><strong>Distribuir factores:</strong> <span class="codigo-matematico">5x + 10 - 3x + 12 = 30</span> (atención al cambio de signo en +12).</li>
        <li><strong>Reducir términos:</strong> <span class="codigo-matematico">2x + 22 = 30</span></li>
        <li><strong>Despejar x:</strong> <span class="codigo-matematico">2x = 30 - 22 → 2x = 8 → x = 4</span></li>
        <li><strong>Resultado:</strong> <span class="resultado-destacado">x = 4</span></li>
        <li><strong>Comprobación:</strong> (4 + 2)/3 - (4 - 4)/5 = 6/3 - 0 = 2 - 0 = <strong>2</strong> (2 == 2 ✓).</li>
    </ol>
</div>

<!-- ============================================================
    4. ECUACIONES CON LITERALES
    ============================================================ -->
<h3 class="apunte-subtitulo">4. Ecuaciones Literales (Despeje de Fórmulas)</h3>
<p class="apunte-texto">
    Las constantes se expresan con letras en lugar de números fijos. Para despejar la incógnita objetivo, agrupamos todos sus términos en un lado, factorizamos dicha variable por <strong>factor común</strong> y transponemos el factor divisor resultante.
</p>

<div class="bloque-ejemplo">
    <span class="ejemplo-badge">Ejemplo de Despeje</span>
    <p class="apunte-texto">Despejar la incógnita <strong>x</strong> de la ecuación: <strong>mx + p = nx + q</strong></p>
    <ol class="lista-pasos">
        <li><strong>Agrupar términos con x a la izquierda:</strong> <span class="codigo-matematico">mx - nx = q - p</span></li>
        <li><strong>Factorizar la incógnita x por factor común:</strong> <span class="codigo-matematico">x(m - n) = q - p</span></li>
        <li><strong>Despejar dividiendo entre el binomio:</strong> <span class="codigo-matematico">x = (q - p) / (m - n)</span></li>
        <li><strong>Condición de existencia (Restricción):</strong> Es estrictamente necesario que <span class="codigo-matematico">m ≠ n</span> para evitar división entre cero en tiempo de ejecución.</li>
        <li><strong>Resultado:</strong> <span class="resultado-destacado">x = (q - p) / (m - n)</span></li>
    </ol>
</div>

<!-- ============================================================
    5. PLANTEAMIENTO Y VALIDACIÓN DE PROBLEMAS
    ============================================================ -->
<h3 class="apunte-subtitulo">5. Planteamiento de Problemas y Validación</h3>
<p class="apunte-texto">
    Plantear consiste en traducir requerimientos en lenguaje natural a un modelo algebraico computable. La validación comprueba no solo que la ecuación esté bien operada, sino que la solución tenga sentido lógico y físico dentro del contexto del problema.
</p>

<div class="bloque-ejemplo">
    <span class="ejemplo-badge">Problema Práctico de Planteamiento</span>
    <p class="apunte-texto">
        <strong>Enunciado:</strong> Un desarrollador distribuye las horas de su jornada laboral de la siguiente forma: dedica la mitad del tiempo a programar nuevas funcionalidades, un tercio a resolver incidencias (debugging) y revisión de código, y las 2 horas restantes a reuniones con el cliente. ¿De cuántas horas consta su jornada de trabajo?
    </p>
    <ol class="lista-pasos">
        <li><strong>Definición de incógnita:</strong> Sea <span class="codigo-matematico">x</span> el total de horas de la jornada.</li>
        <li><strong>Modelado de componentes:</strong> Programación = <span class="codigo-matematico">x/2</span>, Debugging = <span class="codigo-matematico">x/3</span>, Reuniones = <span class="codigo-matematico">2</span>.</li>
        <li><strong>Ecuación planteada:</strong> <span class="codigo-matematico">x/2 + x/3 + 2 = x</span></li>
        <li><strong>Resolución (MCM = 6):</strong><br>
            • Multiplicar por 6: <span class="codigo-matematico">3x + 2x + 12 = 6x</span><br>
            • Reducir: <span class="codigo-matematico">5x + 12 = 6x</span><br>
            • Agrupar: <span class="codigo-matematico">12 = 6x - 5x → x = 12</span>
        </li>
        <li><strong>Validación contextual:</strong><br>
            • Programación: 12/2 = 6 horas.<br>
            • Debugging: 12/3 = 4 horas.<br>
            • Reuniones: 2 horas fijas.<br>
            • Suma total: 6 + 4 + 2 = <strong>12 horas</strong>. El resultado es positivo, entero y cumple exactamente con la distribución.
        </li>
        <li><strong>Respuesta final:</strong> <span class="resultado-destacado">La jornada laboral dura 12 horas.</span></li>
    </ol>
</div>

<!-- ============================================================
    TABLA RESUMEN GENERAL
    =========================================================== -->
<h3 class="apunte-subtitulo">Resumen de Tipos y Métodos de Solución</h3>
<div style="overflow-x: auto; margin-top: 15px;">
    <table style="width: 100%; border-collapse: collapse; background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid var(--borde);">
        <thead>
            <tr style="background: #0f172a; color: #ffffff; text-align: left; font-size: 0.85rem;">
                <th style="padding: 12px 16px;">Tipo de Ecuación</th>
                <th style="padding: 12px 16px;">Estrategia Clave</th>
                <th style="padding: 12px 16px;">Precaución Crítica</th>
            </tr>
        </thead>
        <tbody style="font-size: 0.92rem; color: var(--texto-secundario);">
            <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 12px 16px; font-weight: 600; color: var(--texto-oscuro);">Entera</td>
                <td style="padding: 12px 16px;">Agrupar incógnitas a un lado y constantes al otro.</td>
                <td style="padding: 12px 16px;">Conservar signos al reducir términos semejantes.</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 12px 16px; font-weight: 600; color: var(--texto-oscuro);">Con Signos de Agrupación</td>
                <td style="padding: 12px 16px;">Distribuir productos y suprimir de adentro hacia afuera.</td>
                <td style="padding: 12px 16px;">Un signo «-» previo afecta a todos los términos dentro del paréntesis.</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 12px 16px; font-weight: 600; color: var(--texto-oscuro);">Fraccionaria</td>
                <td style="padding: 12px 16px;">Multiplicar todos los términos por el MCM de denominadores.</td>
                <td style="padding: 12px 16px;">No olvidar multiplicar los términos enteros que no tienen fracción.</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 12px 16px; font-weight: 600; color: var(--texto-oscuro);">Literal</td>
                <td style="padding: 12px 16px;">Factorizar la incógnita como factor común tras agrupar.</td>
                <td style="padding: 12px 16px;">Establecer las restricciones de denominador distinto de cero.</td>
            </tr>
            <tr>
                <td style="padding: 12px 16px; font-weight: 600; color: var(--texto-oscuro);">Planteamiento</td>
                <td style="padding: 12px 16px;">Traducir condiciones del lenguaje natural a ecuaciones algebraicas.</td>
                <td style="padding: 12px 16px;">Validar contra el problema real (evitar respuestas incoherentes como tiempos negativos).</td>
            </tr>
        </tbody>
    </table>
</div>
`;