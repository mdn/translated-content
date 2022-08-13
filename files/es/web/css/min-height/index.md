---
title: min-height
slug: Web/CSS/min-height
tags:
  - CSS
  - 'CSS:Referencias'
  - Todas_las_Categorías
translation_of: Web/CSS/min-height
---
<div>{{CSSRef}}</div>

<h3 id="Resumen" name="Resumen">Resumen</h3>

<p>La propiedad <code>min-height</code> se utiliza para definir la altura mínima de un elemento dado. Impide que el valor de la propiedad {{ Cssxref("height") }} llegue a ser más pequeña que la especificada en la altura mínima (<code>min-height</code>).</p>

<p>{{cssinfo}}</p>

<h3 id="Sintaxis" name="Sintaxis">Sintaxis</h3>

{{csssyntax}}

<h3 id="Values" name="Values">Values</h3>

<ul>
 <li><strong>length</strong> : puede ser en px, cm, in (píxel, centímetro o inches)</li>
 <li><strong>percentage</strong> : % especificado como un porcentaje de la altura del bloque contenedor.</li>
</ul>

<h3 id="Examples" name="Examples">Examples</h3>

<pre>table {min-height: 75%;}

form {min-height: 0;}
</pre>

<h3 id="Notes" name="Notes">Notes</h3>

<p>{{ Cssxref("min-height") }} tiene prioridad sobre los valores {{ Cssxref("max-height") }} y {{ Cssxref("height") }}.</p>

<h3 id="Esdpecificaciones" name="Esdpecificaciones">Esdpecificaciones</h3>

<ul>
 <li><a class="external" href="http://www.w3.org/TR/CSS2/visudet.html#min-max-heights">CSS 2.1</a></li>
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
   <td>6</td>
  </tr>
  <tr>
   <td>Netscape</td>
   <td>6</td>
  </tr>
  <tr>
   <td>Opera</td>
   <td>3.5</td>
  </tr>
 </tbody>
</table>

<h3 id="Ver_tambi.C3.A9n" name="Ver_tambi.C3.A9n">Ver también</h3>

<p>{{ Cssxref("Modelo de caja", "modelo de caja") }}, {{ Cssxref("width", "ancho") }}, {{ Cssxref("-moz-box-sizing", "tamaño de cajas -Mozilla") }}, {{ Cssxref("min-height", "altura mínima") }}, {{ Cssxref("max-height", "altura máxima") }}</p>
