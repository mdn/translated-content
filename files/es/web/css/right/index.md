---
title: right
slug: Web/CSS/right
tags:
  - CSS Reference
  - NeedsTechnicalReview
  - Referencia_CSS
translation_of: Web/CSS/right
---
<p>{{ CSSRef() }}</p>

<h3 id="Sumario" name="Sumario">Sumario</h3>

<p>La propiedad <code>right</code> especifica parte de la posición de un elemento (posicionado - es decir, con una posición determinada por código).</p>

<p>Para los elementos con una posición absoluta (aquellos que tienen la propiedad {{ Cssxref("position") }}<code>: absolute</code> ó <code>position: fixed</code>), la propiedad right determina la distancia entre el margen derecho del elemento y el borde derecho de su bloque contenedor.</p>

<ul>
 <li>{{ Xref_cssinitial() }}: {{ Cssxref("auto") }}</li>
 <li>Se aplica a: <a href="es/CSS/position">positioned elements</a></li>
 <li>{{ Xref_cssinherited() }}: no</li>
 <li>Porcentajes: se refiere al ancho del bloque contenedor.</li>
 <li>Media: {{ Xref_cssvisual() }}</li>
 <li>{{ Xref_csscomputed() }}: valor absoluto, porcentaje ó auto.</li>
</ul>

<h3 id="Sintaxis" name="Sintaxis">Sintaxis</h3>

<pre class="eval">right: &lt;length&gt; | &lt;percentage&gt; | auto | inherit ;
</pre>

<h3 id="Valores" name="Valores">Valores</h3>

<dl>
 <dt>{{cssxref("&lt;length&gt;")}} </dt>
 <dd>Una longitud, puede ser un valor negativo, cero, o un valor positivo.</dd>
 <dt>{{cssxref("&lt;percentage&gt;")}} </dt>
 <dd>Un porcentaje del ancho del bloque contenedor.</dd>
</dl>

<h3 id="Ejemplos" name="Ejemplos">Ejemplos</h3>

<pre class="eval">div {
   position: absolute;
   right: 20px;
   height: 200px;
   border: 1px solid #000;
}
</pre>

<h3 id="Notas" name="Notas">Notas</h3>

<h3 id="Especificaciones" name="Especificaciones">Especificaciones</h3>

<ul>
 <li><a class="external" href="http://www.w3.org/TR/CSS21/visuren.html#propdef-right">CSS 2.1</a></li>
 <li><a class="external" href="http://www.w3.org/Style/CSS/current-work#positioning">CSS 3</a></li>
</ul>

<h3 id="Compatibilidad_entre_navegadores" name="Compatibilidad_entre_navegadores">Compatibilidad entre navegadores</h3>

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

<p>{{ Cssxref("position") }}, {{ Cssxref("top") }}, {{ Cssxref("bottom") }}, {{ Cssxref("left") }}</p>
