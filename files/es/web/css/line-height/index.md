---
title: line-height
slug: Web/CSS/line-height
tags:
  - CSS
  - 'CSS:Referencias'
  - Referencia_CSS
  - Todas_las_Categorías
  - para_revisar
  - páginas_a_traducir
translation_of: Web/CSS/line-height
---
<pre class="syntaxbox"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS">https://developer.mozilla.org/en-US/docs/Web/CSS</a>{{ CSSRef() }}
/*Keyword value*/
line-height: normal;

/</pre>



<h3 id="Resumen" name="Resumen">Resumen</h3>

<p>La propiedad  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a> <code>line-height</code><a href="https://developer.mozilla.org/en-US/docs/Web/CSS"> </a>establece la altura de una casilla remarcada por líneas. Comúnmente se usa para establecer la distancia entre líneas de texto. A nivel de elementos de bloque, define la altura mínima de las casillas encuadradas por líneas dentro del elemento. En elementos en linea no reemplazables, especifica la altura que se usa para calcular la altura de la casila encuadrada por líneas.</p>

<ul>
 <li>{{ Cssxref("initial", "Valor inicial") }}: {{ Cssxref("normal") }}</li>
 <li>Aplicable a: todos los elementos.</li>
 <li>{{ Cssxref("inheritance", "Valor heredado") }}: sí</li>
 <li>Porcentajes: se refieren a tamaño de la fuente del elemento mismo.</li>
 <li>Medio: {{ Xref_cssvisual() }}</li>
 <li>{{ Cssxref("computed value", "Valor calculado") }}: para los valores &lt;length&gt; y &lt;percentage&gt;, el valor absoluto, en otro caso, como se especifica.</li>
</ul>

<h2 id="Syntax">Syntax</h2>



<pre><code>/* Keyword value */
line-height: normal;

/* Unitless values: usa esta cifra multiplicada por el tamaño de fuente
del elemento */
line-height: 3.5;

/* &lt;longitud&gt; valores */
line-height: 3em;

/* &lt;porcentaje&gt; valores */
line-height: 34%;

/* Valores absolutos */
line-height: inherit;
line-height: initial;
line-height: unset;</code></pre>



<h3 id="Sintaxis" name="Sintaxis">Valores</h3>

<dl>
 <dt><code>normal </code></dt>
 <dd>
 <p>Depende del agente del usuario. Los navegadores de escritorio (incluido Firefox) usan un valor por defecto de apenas <strong>1.2,</strong> dependiendo del <code>font-family</code> del elemento.</p>
 </dd>
 <dt><code>&lt;número&gt; </code></dt>
 <dd>El valor utilizado es este<code> <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/number">&lt;número&gt;</a></code> sin unidades multiplicado por el propio tamaño de fuente del elemento. El valor calculado es el mismo que el <code><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/number">&lt;número&gt;</a></code> especificado. En la mayoría de los casos, esta es la forma preferida de establecer <code><a href="https://developer.mozilla.org/es/docs/Web/CSS/line-height">line-height </a></code>y evitar resultados inesperados debido a la herencia.</dd>
 <dt><code>&lt;longitud&gt; </code></dt>
 <dd>La <a href="https://developer.mozilla.org/es/docs/Web/CSS/length">&lt;longitud&gt; </a>especificada se utiliza en el cálculo de la altura de la casilla encuadrada por líneas. Los valores dados en unidades <code>em</code> pueden producir resultados inesperados (ver ejemplo más abajo).</dd>
 <dt><code>&lt;porcentaje&gt; </code></dt>
 <dd>En relación con el tamaño de fuente del elemento en sí. El valor calculado es este <a href="https://developer.mozilla.org/es/docs/Web/CSS/porcentaje">&lt;porcentaje&gt;</a> multiplicado por el tamaño de letra del elemento calculado. Los valores porcentuales pueden producir resultados inesperados (ver el segundo ejemplo a continuación).</dd>
</dl>

<h3 id="Ejemplos" name="Ejemplos">Ejemplos</h3>

<pre><code>/* Todas las reglas debajo ofrecen la misma line-height resultante */

div { line-height: 1.2;   font-size: 10pt; }   /* número/unitless */
div { line-height: 1.2em; font-size: 10pt; }   /* longitud */
div { line-height: 120%;  font-size: 10pt; }   /* porcentaje */
div { font: 10pt/1.2  Georgia,"Bitstream Charter",serif; } /* font shorthand */</code></pre>

<p>A menudo es más conveniente establecer el <code><a href="https://developer.mozilla.org/es/docs/Web/CSS/line-height">line-height </a></code> usando {{cssxref("font")}} abreviadamente, como se muestra arriba, pero esto también requiere especificar la propiedad <code>font-family</code>.</p>

<h3 id="Notas" name="Notas">Notas</h3>

<h3 id="Especificaciones" name="Especificaciones">Especificaciones</h3>

<ul>
 <li><a class="external" href="http://www.w3.org/TR/CSS21/visudet.html#propdef-line-height">CSS 2.1</a></li>
</ul>

<h3 id="Compatibilidad_de_navegadores" name="Compatibilidad_de_navegadores">Compatibilidad de navegadores</h3>

<table class="standard-table">
 <tbody>
  <tr>
   <th>Navegador</th>
   <th>Versión mínima</th>
  </tr>
  <tr>
   <td>Internet Explorer</td>
   <td>?</td>
  </tr>
  <tr>
   <td>Firefox</td>
   <td>1</td>
  </tr>
  <tr>
   <td>Netscape</td>
   <td>?</td>
  </tr>
  <tr>
   <td>Opera</td>
   <td>?</td>
  </tr>
  <tr>
   <td>Safari</td>
   <td>?</td>
  </tr>
 </tbody>
</table>

<h3 id="Ver_tambi.C3.A9n" name="Ver_tambi.C3.A9n">Ver también</h3>

<p>{{ Cssxref("font-size") }}</p>
