---
title: Selectores de tipo
slug: Web/CSS/Type_selectors
tags:
  - CSS
  - Principiante
  - Referencia CSS
  - Selectores
translation_of: Web/CSS/Type_selectors
---
<div>{{CSSRef}}</div>

<div>El selector de tipo CSS selecciona elementos por nombre de nodo. En otras palabras, selecciona todos los elementos del tipo dado dentro de un documento.</div>

<div> </div>

<pre class="brush: css">/* Todos los elementos &lt;a&gt; */
a {
  color: red;
}</pre>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox">element { <em>style properties</em> }
</pre>

<h2 id="Ejemplo">Ejemplo</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">span {
  background-color: skyblue;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;span&gt;Aquí hay un elemento 'span' con algo de texto.&lt;/span&gt;
&lt;p&gt;Aquí hay un elemento 'p' con algo de texto.&lt;/p&gt;
&lt;span&gt;Aquí hay un elemento 'span' con más texto.&lt;/span&gt;
</pre>

<h3 id="Resultado">Resultado</h3>

<p>{{EmbedLiveSample('Ejemplo', 200, 150)}}</p>

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
   <td>{{SpecName('CSS4 Selectors', '#type-selectors', 'Type (tag name) selector')}}</td>
   <td>{{Spec2('CSS4 Selectors')}}</td>
   <td>Ningún cambio.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Selectors', '#type-selectors', 'type selectors')}}</td>
   <td>{{Spec2('CSS3 Selectors')}}</td>
   <td>Ningún cambio.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'selector.html#type-selectors', 'type selectors')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('CSS1', '#basic-concepts', 'type selectors')}}</td>
   <td>{{Spec2('CSS1')}}</td>
   <td>Definición inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>

<p>{{Compat("css.selectors.type")}}</p>

<div id="compat-mobile"> </div>
