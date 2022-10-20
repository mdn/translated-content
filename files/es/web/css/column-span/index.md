---
title: column-span
slug: Web/CSS/column-span
tags:
  - CSS
  - Propiedad CSS
  - Referencia
translation_of: Web/CSS/column-span
---
<div>{{CSSRef}}</div>

<p>La propiedad <strong><code>column-span</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> hace posible que un elemento se extienda sobre todas las columnas cuando su valor se establece a <code>all</code>.</p>

<div>{{EmbedInteractiveExample("pages/css/column-span.html")}}</div>

<pre class="brush:css no-line-numbers">/* Keyword values */
column-span: none;
column-span: all;

/* Global values */
column-span: inherit;
column-span: initial;
column-span: unset;
</pre>

<p>A un elemento que se extiende más de una columna se le llama elemento extendido (<em>spanning element)</em>.</p>

<h2 id="Sintaxis">Sintaxis</h2>

<p>La propiedad <code>column-span</code> se especifica como una de las palabras clave listadas a continuación.</p>

<h3 id="Valores">Valores</h3>

<dl>
 <dt><code>none</code></dt>
 <dd>El elemento no se extiende en sobre varias columnas.</dd>
 <dt><code>all</code></dt>
 <dd>El elemento se extiende sobre todas las columnas. El contenido en el flujo normal que aparece antes del elemento se equilibra automáticamente en todas las columnas antes de que aparezca el elemento. El elemento establece un nuevo contexto de formato de bloque..</dd>
</dl>

<h3 id="Sintaxis_formal">Sintaxis formal</h3>

{{csssyntax}}

<h2 id="Ejemplo">Ejemplo</h2>

<p>En este ejemplo, la cabecera se expande sobre todas las columnas del artículo.</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;article&gt;
  &lt;h2&gt;My Very Special Columns&lt;/h2&gt;
  &lt;p&gt;This is a bunch of text split into three columns
     using the CSS `columns` property. The text
     is equally distributed over the columns.&lt;/p&gt;
&lt;/article&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush:css">article {
  columns: 3;
}

h2 {
  column-span: all;
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
   <td>{{SpecName('CSS3 Multicol', '#column-span', 'column-span')}}</td>
   <td>{{Spec2('CSS3 Multicol')}}</td>
   <td>Definición inicial.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>



<p>{{Compat("css.properties.column-span")}}</p>
