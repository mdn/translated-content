---
title: ':last-of-type'
slug: 'Web/CSS/:last-of-type'
tags:
  - CSS
  - Diseño
  - Pseudo-clase
  - Referencia
  - Web
translation_of: 'Web/CSS/:last-of-type'
---
<div>{{CSSRef}}</div>

<p>La <a href="/es/docs/Web/CSS/Pseudo-classes">pseudo-class</a> <strong><code>:last-of-type</code></strong> de <a href="/es/docs/Web/CSS">CSS</a> representa el último elemento de su tipo entre un grupo de elementos hermanos.</p>

<pre class="brush: css no-line-numbers">/* Selecciona cualquier &lt;p&gt; que sea el último elemento
   de su tipo entre sus hermanos */
p:last-of-type {
  color: lime;
}</pre>

<div class="note">
<p><strong>Nota</strong>: Como se definió originalmente, el elemento seleccionado tenía que tener un padre. Comenzando con el Nivel 4 de Selectores, esto ya no es necesario.</p>
</div>

<h2 id="Sintaxis">Sintaxis</h2>

{{csssyntax}}

<h2 id="Ejemplo">Ejemplo</h2>

<h3 id="Diseñando_el_último_párrafo">Diseñando el último párrafo</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;h2&gt;Título&lt;/h2&gt;
&lt;p&gt;Párrafo 1&lt;/p&gt;
&lt;p&gt;Párrafo 2&lt;/p&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">p:last-of-type {
  color: red;
  font-style: italic;
}</pre>

<h4 id="Resultado">Resultado</h4>

<p>{{EmbedLiveSample('Diseñando_el_último_párrafo')}}</p>

<h3 id="Elementos_anidados">Elementos anidados</h3>

<p>Este ejemplo muestra cómo los elementos anidados también pueden utilizarse. Tenga en cuenta que el <a href="/es/docs/Web/CSS/Universal_selectors">selector universal</a> (<code>*</code>) está implícito cuando no se escribe un selector simple.</p>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;article&gt;
  &lt;div&gt;Este `div` es primero.&lt;/div&gt;
  &lt;div&gt;¡Este &lt;span&gt;'span' anidado es el último&lt;/span&gt;!&lt;/div&gt;
  &lt;div&gt;¡Este &lt;em&gt;`em` anidado es el primero&lt;/em&gt;, pero este &lt;em&gt;`em` anidado es el último&lt;/em&gt;!&lt;/div&gt;
  &lt;b&gt;¡Este `b` califica!&lt;/b&gt;
  &lt;div&gt;¡Este es el 'div' final!&lt;/div&gt;
&lt;/article&gt;
</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css">article :last-of-type {
  background-color: pink;
}</pre>

<h4 id="Resultado_2">Resultado</h4>

<p>{{EmbedLiveSample('Elementos_anidados', 500)}}</p>

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
   <td>{{SpecName('CSS4 Selectors', '#last-of-type-pseudo', ':last-of-type')}}</td>
   <td>{{Spec2('CSS4 Selectors')}}</td>
   <td>Los elementos coincidentes no requieren tener un padre.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Selectors', '#last-of-type-pseudo', ':last-of-type')}}</td>
   <td>{{Spec2('CSS3 Selectors')}}</td>
   <td>Definición Inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>

<div>


<p>{{Compat("css.selectors.last-of-type")}}</p>
</div>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>{{cssxref(":last-child")}}, {{Cssxref(":nth-last-of-type")}}</li>
</ul>
