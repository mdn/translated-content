---
title: border-color
slug: Web/CSS/border-color
tags:
  - CSS
  - 'CSS:Referencias'
  - Todas_las_Categorías
translation_of: Web/CSS/border-color
---
<p>{{ PreviousNext("CSS:border", "CSS:border-style") }}</p>

<h3 id="Resumen" name="Resumen">Resumen</h3>

<p>la propiedad <code>border-color</code> es un atajo para definir el color de los cuatro bordes de un elemento.</p>

<ul>
 <li>{{ Cssxref("initial", "Valor inicial") }}: el {{ Cssxref("color") }} del elemento en sí</li>
 <li>Se aplica a: todos los elementos</li>
 <li>{{ Cssxref("inheritance", "Herencia") }}: no</li>
 <li>Percentages: N/A</li>
 <li>Medio: {{ Cssxref("Media:Visual", "visual") }}</li>
 <li>{{ Cssxref("computed value", "Valor calculada") }}: el valor del <code>color</code> por defecto, o lo que se especificó.</li>
</ul>

<h3 id="Sintaxis" name="Sintaxis">Sintaxis</h3>

<pre class="eval">border-color: [ &lt;color&gt; || transparent ]{1,4} | <em>inherit</em>
</pre>

<h3 id="Valores" name="Valores">Valores</h3>

<dl>
 <dt>&lt;color&gt; </dt>
 <dd>el color se puede especificar con un valor RGB hexa-decimal o regular, o con el nombre predefinido de ese color.</dd>
</dl>

<dl>
 <dt>transparent </dt>
 <dd>el borde no aparece pero ocupa el sitio definido.</dd>
</dl>

<p>Se pueden pasar hasta cuatro valores;</p>

<p>Con <strong>un</strong> color, los cuatro lados tendrán el mismo.<br>
 Con <strong>dos</strong> colores, los lados de arriba y abajo utilizan el primer valor y los izquierda y derecha el segundo.<br>
 Con <strong>tres</strong> colores, el primero para arriba, el segundo para izquierda y derecha y el tercero para abajo.<br>
 Con <strong>cuatro</strong> colores, el primero para arriba, el segundo para la derecha, el tercero para abajo y el cuarto para la izquierda.</p>

<h3 id="Ejemplos" name="Ejemplos">Ejemplos</h3>

<p><a href="/samples/cssref/border.html">Ver El Ejemplo Vivo</a></p>

<pre>element {
  border-width: 1px;
  border-style: solid;
  border-color: black;
}
</pre>

<h3 id="Notas" name="Notas">Notas</h3>

<p>Para poder ver el/los bordes también hay que definir {{ Cssxref("border-width", "el ancho") }} con un valor positivo y {{ Cssxref("border-style", "el estilo") }} con algo visible. (<em>diferente de <code>none o hidden</code></em>)</p>

<h3 id="Especificaciones" name="Especificaciones">Especificaciones</h3>

<ul>
 <li><a class="external" href="http://www.w3.org/TR/CSS1#border-color">CSS 1</a></li>
 <li><a class="external" href="http://www.w3.org/TR/CSS21/box.html#border-color-properties">CSS 2.1</a></li>
 <li><a class="external" href="http://www.w3.org/TR/css3-background/#the-border-color">CSS 3</a></li>
</ul>

<h3 id="Compatibilidad" name="Compatibilidad">Compatibilidad</h3>

<table class="standard-table">
 <tbody>
  <tr>
   <th>Navegadores</th>
   <th>Versión mínima</th>
  </tr>
  <tr>
   <td>Internet Explorer</td>
   <td>4</td>
  </tr>
  <tr>
   <td>Firefox</td>
   <td>1</td>
  </tr>
  <tr>
   <td>Netscape</td>
   <td>4</td>
  </tr>
  <tr>
   <td>Opera</td>
   <td>3.5</td>
  </tr>
 </tbody>
</table>

<h3 id="Extensiones_Mozilla" name="Extensiones_Mozilla">Extensiones Mozilla</h3>

<p>La siguientes extensiones definen los múltiples colores de los respectivos bordes en los navegadores Gecko.</p>

<ul>
 <li>{{ Cssxref("-moz-border-bottom-colors") }}</li>
 <li>{{ Cssxref("-moz-border-left-colors") }}</li>
 <li>{{ Cssxref("-moz-border-right-colors") }}</li>
 <li>{{ Cssxref("-moz-border-top-colors") }}</li>
</ul>

<h3 id="Ver_tambi.C3.A9n" name="Ver_tambi.C3.A9n">Ver también</h3>

<p>{{ Cssxref("border") }}, {{ Cssxref("border-color") }}, {{ Cssxref("border-style") }}, {{ Cssxref("border-width") }}</p>
