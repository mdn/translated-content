---
title: background-color
slug: Web/CSS/background-color
tags:
  - CSS
  - 'CSS:Referencias'
  - Todas_las_Categorías
translation_of: Web/CSS/background-color
---
<p> </p>

<h3 id="Resumen" name="Resumen">Resumen</h3>

<p><code>Background-color</code> es un propiedad de CSS que define el color de fondo de un elemento, puede ser el valor de un color o la palabra "<code>transparent</code>e".</p>

<ul>
 <li>{{ Cssxref("initial", "Valor inicial") }}: transparente</li>
 <li>Se aplica a: todos los elementos</li>
 <li>{{ Cssxref("inheritance", "Herencia") }}: no</li>
 <li>Percentages: N/A</li>
 <li>Medio: {{ Cssxref("Media:Visual", "visual") }}</li>
 <li>{{ Cssxref("computed value", "Valor calculado") }}: como se haya especificado</li>
</ul>

<h3 id="Sintaxis" name="Sintaxis">Sintaxis</h3>

<pre class="eval">background-color: <em>color</em> | transparent | inherit
</pre>

<h3 id="Valores" name="Valores">Valores</h3>

<dl>
 <dt>&lt;color&gt;</dt>
 <dd>Se puede especificar el color de fondo como un valor RGB hexa-decimal o regular, o utilizando una de las palabras claves predefinidas de color.</dd>
</dl>

<dl>
 <dt>transparent </dt>
 <dd>El valor por defecto del color de fondo (<code>background-color</code>) es <code>transparent</code>e tomando así el color del elemento que está justo debajo de él en el apilamiento.</dd>
</dl>

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div class="exampleone"&gt;
 Lorem ipsum dolor sit amet, consectetuer
&lt;/div&gt;

&lt;div class="exampletwo"&gt;
  Lorem ipsum dolor sit amet, consectetuer
&lt;/div&gt;

&lt;div class="examplethree"&gt;
  Lorem ipsum dolor sit amet, consectetuer
&lt;/div&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css; highlight:[2,7,12,17];">.exampleone {
  background-color: teal;
  color: white;
}

.exampletwo {
  background-color: rgb(153,102,153);
  color: rgb(255,255,204);
}

.examplethree {
  background-color: #777799;
  color: #FFFFFF;
}
</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample("Ejemplos","200","150")}}</p>

<h3 id="Notas" name="Notas">Notas</h3>

<p><span class="comment">(Add links to good colour reference sites here.)</span></p>

<p> </p>

<h3 id="Especificaciones" name="Especificaciones">Especificaciones</h3>

<ul>
 <li><a class="external" href="http://www.w3.org/TR/CSS1#background-color">CSS 1 (en)</a></li>
 <li><a class="external" href="http://www.w3.org/TR/CSS21/colors.html#propdef-background-color">CSS 2.1 (en)</a></li>
 <li><a class="external" href="http://www.w3.org/TR/2005/WD-css3-background-20050216/#background-color">CSS 3 (en)</a></li>
</ul>

<h3 id="Compatibilidad_de_navegadores" name="Compatibilidad_de_navegadores">Compatibilidad de navegadores</h3>

<p><span class="comment">TBD: This may be removed in favour of a centralized compatibility chart.</span></p>

<table class="standard-table">
 <tbody>
  <tr>
   <th>Navegador</th>
   <th>soporta background-color</th>
  </tr>
  <tr>
   <td>Internet Explorer 6</td>
   <td>parcialmente</td>
  </tr>
  <tr>
   <td>Internet Explorer 7</td>
   <td>parcialmente</td>
  </tr>
  <tr>
   <td>Firefox 1.5</td>
   <td>Sí</td>
  </tr>
  <tr>
   <td>Firefox 2</td>
   <td>Sí</td>
  </tr>
  <tr>
   <td>Opera 8.5</td>
   <td>parcialmente</td>
  </tr>
  <tr>
   <td>Opera 9</td>
   <td>parcialmente</td>
  </tr>
  <tr>
   <td>Konqueror 3.5</td>
   <td>Sí</td>
  </tr>
  <tr>
   <td>Safari 2</td>
   <td>Sí</td>
  </tr>
 </tbody>
</table>

<h3 id="Ver_tambi.C3.A9n" name="Ver_tambi.C3.A9n">Ver también</h3>

<p>{{ Cssxref("background") }}, {{ Cssxref("background-attachment") }}, {{ Cssxref("background-color") }}, {{ Cssxref("background-image") }}, {{ Cssxref("background-position") }}, {{ Cssxref("background-repeat") }}</p>
