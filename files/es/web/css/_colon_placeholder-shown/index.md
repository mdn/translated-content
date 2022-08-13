---
title: ':placeholder-shown'
slug: 'Web/CSS/:placeholder-shown'
tags:
  - CSS
  - Experimental
  - Pseudo-clase
  - Referencia
translation_of: 'Web/CSS/:placeholder-shown'
---
<div>{{CSSRef}}{{SeeCompatTable}}</div>

<p>La <a href="/es/docs/CSS/Pseudo-classes">pseudo-clase</a> <strong><code>:placeholder-shown</code></strong> de <a href="/es/docs/Web/CSS">CSS</a>  representa cualquier elemento {{htmlElement("input")}} o {{htmlElement("textarea")}} que esté mostrando actualmente el <a href="/es/docs/Web/HTML/Element/input#attr-placeholder">texto de marcador de posición (placeholder)</a>.</p>

<pre class="brush: css no-line-numbers">/* Selecciona cualquier elemento con un placeholder activo */
:placeholder-shown {
  border: 2px solid silver;
}</pre>

<h2 id="Sintaxis">Sintaxis</h2>

{{csssyntax}}

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="Ejemplo_básico">Ejemplo básico</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;input placeholder="¡Escribe algo aquí!"&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css; highlight[6]">input {
  border: 2px solid black;
  padding: 3px;
}

input:placeholder-shown {
  border-color: silver;
}</pre>

<h4 id="Resultado">Resultado</h4>

<p>{{EmbedLiveSample("Ejemplo_básico", 200, 60)}}</p>

<h3 id="Texto_desbordante">Texto desbordante</h3>

<p>En pantallas angostas como teléfonos inteligentes, el ancho de los cuadros de búsqueda y otros campos de formulario pueden acortarse drásticamente. Esto puede provocar que el texto de marcador de posición se recorte de una manera no deseada. A menudo es útil alterar este comportamiento con la propiedad {{cssxref("text-overflow")}}.</p>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;input placeholder="¡Ingresa algo en este campo, por favor!"&gt;</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css">input:placeholder-shown {
  text-overflow: ellipsis;
}</pre>

<h4 id="Resultado_2">Resultado</h4>

<p>{{EmbedLiveSample("Texto_desbordante", 200, 60)}}</p>

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
   <td>{{SpecName("CSS4 Selectors", "#placeholder", ":placeholder-shown")}}</td>
   <td>{{Spec2("CSS4 Selectors")}}</td>
   <td>Definición Inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>



<p>{{Compat("css.selectors.placeholder-shown")}}</p>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>El pseudo-elemento {{cssxref("::placeholder")}} estiliza el placeholder <em>por sí mismo</em>.</li>
 <li>Elementos HTML relacionados: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}</li>
 <li>{{cssxref(":-moz-placeholder")}}, {{cssxref("::-moz-placeholder")}}</li>
 <li><a href="/es/docs/Learn/HTML/Forms">Formularios HTML</a></li>
</ul>
