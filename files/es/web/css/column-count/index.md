---
title: column-count
slug: Web/CSS/column-count
tags:
  - CSS
  - CSS Multicolumna
  - Propiedad CSS
  - Referencia
translation_of: Web/CSS/column-count
---
<div>{{CSSRef}}</div>

<p>La propiedad <a href="/es/docs/Web/CSS">CSS</a> <strong><code>column-count</code></strong> divide el contenido de un elemento en el número de columnas indicado.</p>

<div>{{EmbedInteractiveExample("pages/css/column-count.html")}}</div>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="brush:css no-line-numbers">/* Keyword value */
column-count: auto;

/* &lt;integer&gt; value */
column-count: 3;

/* Global values */
column-count: inherit;
column-count: initial;
column-count: unset;</pre>

<h3 id="Valores">Valores</h3>

<dl>
 <dt><code>auto</code></dt>
 <dd>El número de columnas es determinado por otras propiedades CSS, como {{cssxref("column-width")}}.</dd>
 <dt><code>{{cssxref("&lt;integer&gt;")}}</code></dt>
 <dd>Es un {{cssxref("&lt;integer&gt;")}} estrictamente positivo que describe el número ideal de columnas en las que el contenido del elemento va a fluir. Si la propiedad {{cssxref("column-width")}} se establece a un valor que no sea <code>auto</code>, se limitará a indicar el número máximo permitido de columnas.</dd>
</dl>

<h3 id="Sintaxis_formal">Sintaxis formal</h3>

{{csssyntax}}

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p class="content-box"&gt;
  This is a bunch of text split into three columns
  using the CSS `column-count` property. The text
  is equally distributed over the columns.
&lt;/p&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">.content-box {
  column-count: 3;
}
</pre>

<h3 id="Resultado">Resultado</h3>

<p>{{EmbedLiveSample('Example', 'auto', 120)}}</p>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentario</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSS3 Multicol', '#column-count', 'column-count')}}</td>
   <td>{{Spec2('CSS3 Multicol')}}</td>
   <td>Definición inicial</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>

<p>{{Compat("css.properties.column-count")}}</p>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li><a href="/en-US/docs/Learn/CSS/CSS_layout/Multiple-column_Layout">Diseño con columnas múltiples</a></li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Columns/Basic_Concepts_of_Multicol">Conceptos básicos de Multicol</a></li>
</ul>
