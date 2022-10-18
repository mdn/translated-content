---
title: border-collapse
slug: Web/CSS/border-collapse
tags:
  - CSS
  - 'CSS:Referencias'
  - Todas_las_Categorías
translation_of: Web/CSS/border-collapse
---
<p>&lt;&lt; <a href="es/Gu%c3%ada_de_referencia_de_CSS">Volver</a></p>

<h3 id="Resumen" name="Resumen">Resumen</h3>

<p>La propiedad <code>border-collapse</code> se utiliza para fusionar los bordes. Ésto tiene una gran influencia sobre la presentación y el estilo de las celdas de tabla. La representación de los bordes de tabla es dividida en dos categorías en CSS2 - "fusión" y "separación" (<small>collapsed - separated</small>). Esta propiedad especifica que modo de presentación de borde hay que usar.</p>

<p>En el modelo de fusión, las celdas adyacentes comparten los mismos bordes</p>

<p>En el modelo de separación, cada celda adyacente tiene su propio borde (la distancia entre cada borde es dado con la propiedad del {{ Cssxref("border-spacing", "espaciado de borde") }}).</p>

<ul>
 <li>{{ Cssxref("initial", "Valor inicial") }}: {{ Cssxref("separate", "separado") }}</li>
 <li>{{ Cssxref("inheritance", "Valor heredado") }}: Yes</li>
 <li>Media: {{ Xref_cssvisual() }}</li>
 <li>{{ Cssxref("computed value", "Valor calculado") }}:</li>
</ul>

<h3 id="Sintaxis" name="Sintaxis">Sintaxis</h3>

<pre class="eval">border-collapse: value
</pre>

<h3 id="Valores" name="Valores">Valores</h3>

<ul>
 <li><strong>inherit</strong> : Define explícitamente el valor como heredada del elemento padre.</li>
 <li><strong>separate</strong> : Utiliza el modo de presentación de separación de borde.</li>
 <li><strong>collapse</strong> : Utiliza el modo de presentación de fusión de borde</li>
</ul>

<h3 id="Ejemplos" name="Ejemplos">Ejemplos</h3>

<p><a href="/samples/cssref/border-collapse.html">Ver El Ejemplo Vivo</a></p>

<pre>&lt;table border="1" style="border-collapse: collapse" bordercolor="#111111" width="500"&gt;
</pre>

<pre>&lt;table border="1" style="border-collapse: separate" bordercolor="#111111" width="500"&gt;
</pre>

<h3 id="Notas" name="Notas">Notas</h3>

<p>En el modelo de fusión, el valor del {{ Cssxref("border-style", "estilo de borde") }} de <code>inset</code> se comporta como <code>groove</code>, y <code>outset</code> como <code>ridge</code>.</p>

<p>CSS 2 especifica que el valor inicial para esta propiedad es <code>collapse</code>, pero CSS 2.1 y Mozilla/Opera definen o se comportan como si el valor inicial fuera <code>separate</code>.</p>

<h3 id="Especificaciones" name="Especificaciones">Especificaciones</h3>

<ul>
 <li><a class="external" href="http://www.w3.org/TR/CSS21/tables.html#collapsing-borders">CSS 2.1</a></li>
 <li><a class="external" href="http://www.w3.org/TR/REC-CSS2/tables.html#borders">CSS 3</a></li>
</ul>

<h3 id="Compatibilidades" name="Compatibilidades">Compatibilidades</h3>

<table class="standard-table">
 <tbody>
  <tr>
   <th>Navegador</th>
   <th>Versión mínima</th>
  </tr>
  <tr>
   <td>Internet Explorer</td>
   <td>5.5</td>
  </tr>
  <tr>
   <td>Netscape</td>
   <td>7</td>
  </tr>
  <tr>
   <td>Opera</td>
   <td>5</td>
  </tr>
 </tbody>
</table>

<p> </p>

<h3 id="Ver_tambi.C3.A9n" name="Ver_tambi.C3.A9n">Ver también</h3>

<p>{{ Cssxref("border-spacing") }}</p>

<div class="noinclude">
<p><span class="comment">Categorías</span></p>

<p><span class="comment">Interwiki Languages</span></p>
</div>

<p>{{ languages( { "en": "en/CSS/border-collapse", "fr": "fr/CSS/border-collapse", "pl": "pl/CSS/border-collapse" } ) }}</p>
