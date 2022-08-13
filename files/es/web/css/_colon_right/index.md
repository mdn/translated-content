---
title: ':right'
slug: 'Web/CSS/:right'
tags:
  - '@page'
  - CSS
  - Diseño
  - Pseudo-clase
  - Referencia
  - Web
translation_of: 'Web/CSS/:right'
---
<div>{{ CSSRef() }}</div>

<p>La <a href="/es/docs/Web/CSS/Pseudo-classes">pseudo-clase</a> <a href="/es/docs/Web/CSS">CSS</a> <strong><code>:right</code></strong>, utilizada con la <a href="/es/docs/Web/CSS/At-rule">regla-at</a> {{cssxref("@page")}}, representa todas las páginas de la derecha de un documento impreso.</p>

<pre class="brush: css no-line-numbers">/* Selecciona cualquier página de la derecha al imprimir */
@page :right {
  margin: 2in 3in;
}</pre>

<p>Que una página dada sea "izquierda" o "derecha" está determinada por la dirección principal de escritura del documento. Por ejemplo, si la primera página tiene una dirección de escritura principal de izquierda a derecha, entonces será una página <code>:right</code>; si tiene una dirección de escritura principal de derecha a izquierda, entonces será una página {{Cssxref(":left")}}.</p>

<div class="note">
<p><strong>Nota:</strong> No puede cambiar todas las propiedades de CSS con esta pseudo-clase. Solo puede cambiar las propiedades {{ Cssxref("margin") }}, {{ Cssxref("padding") }}, {{ Cssxref("border") }}, y {{ Cssxref("background") }} de la caja de página. Se ignorarán todas las demás propiedades y solo se verá afectada la caja de página, no el contenido del documento en la página.</p>
</div>

<h2 id="Sintaxis">Sintaxis</h2>

{{csssyntax}}

<h2 id="Ejemplos">Ejemplos</h2>

<pre class="brush: css">@page :right {
  margin: 2in 3in;
}
</pre>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentarios</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{ SpecName('CSS3 Paged Media', '#left-right-first', ':right') }}</td>
   <td>{{ Spec2('CSS3 Paged Media') }}</td>
   <td>Ningún cambio.</td>
  </tr>
  <tr>
   <td>{{ SpecName('CSS2.1', 'page.html#page-selectors', ':right') }}</td>
   <td>{{ Spec2('CSS2.1') }}</td>
   <td>Definición inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>

<p> </p>



<p>{{Compat("css.selectors.right")}}</p>

<p> </p>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>{{ Cssxref("@page") }}</li>
 <li>Otras páginas relacionadas con la pseudo-clases: {{ Cssxref(":first") }}, {{ Cssxref(":left") }}</li>
</ul>
