---
title: ':only-child'
slug: 'Web/CSS/:only-child'
tags:
  - CSS
  - Diseño
  - Pseudo-clase
  - Referencia
  - Web
translation_of: 'Web/CSS/:only-child'
---
<div>{{CSSRef}}</div>

<p>La <a href="/es/docs/CSS/Pseudo-classes">pseudo-clase</a> <strong><code>:only-child</code></strong> de <a href="/es/docs/Web/CSS">CSS</a> representa un elemento sin hermanos. Esto es lo mismo que <code>:first-child:last-child</code> o <code>:nth-child(1):nth-last-child(1)</code>, pero con una especificidad menor.</p>

<pre class="brush: css no-line-numbers">/* Selecciona cada &lt;p&gt;, pero solo si es el */
/* único hijo de su padre */
p:only-child {
  background-color: lime;
}</pre>

<div class="note">
<p><strong>Nota</strong>: Como se definió originalmente, el elemento seleccionado tenía que tener un padre. Comenzando con el Nivel 4 de Selectores, esto ya no es necesario.</p>
</div>

<h2 id="Sintaxis">Sintaxis</h2>

{{csssyntax}}

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="Ejemplo_básico">Ejemplo básico</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;main&gt;
  &lt;div&gt;
    &lt;i&gt;Soy un hijo único y solitario.&lt;/i&gt;
  &lt;/div&gt;

  &lt;div&gt;
    &lt;i&gt;Yo tengo hermanos.&lt;/i&gt;&lt;br&gt;
    &lt;b&gt;¡Yo también!&lt;/b&gt;&lt;br&gt;
    &lt;span&gt;Yo también tengo hermanos, &lt;span&gt;pero este es un hijo único.&lt;/span&gt;&lt;/span&gt;
  &lt;/div&gt;
&lt;/main&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">main :only-child {
  color: red;
}
</pre>

<h4 id="Resultado">Resultado</h4>

<p>{{EmbedLiveSample('Ejemplo_básico','100%',180)}}</p>

<h3 id="Ejemplo_de_lista">Ejemplo de lista</h3>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;ol&gt;
  &lt;li&gt;Primero
    &lt;ul&gt;
      &lt;li&gt;Esta lista tiene solo un elemento.
    &lt;/ul&gt;
  &lt;/li&gt;
  &lt;li&gt;Segundo
    &lt;ul&gt;
      &lt;li&gt;Esta lista tiene tres elementos.
      &lt;li&gt;Esta lista tiene tres elementos.
      &lt;li&gt;Esta lista tiene tres elementos.
    &lt;/ul&gt;
  &lt;/li&gt;
&lt;ol&gt;
</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css">li li {
  list-style-type: disc;
}
li:only-child {
  color: red;
  list-style-type: square;
}</pre>

<h4 id="Resultado_2">Resultado</h4>

<p>{{EmbedLiveSample('Ejemplo_de_lista', '100%', 210)}}</p>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSS4 Selectors', '#only-child-pseudo', ':only-child')}}</td>
   <td>{{Spec2('CSS4 Selectors')}}</td>
   <td>Los elementos coincidentes no requieren tener un padre.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Selectors', '#only-child-pseudo', ':only-child')}}</td>
   <td>{{Spec2('CSS3 Selectors')}}</td>
   <td><br>
    Definición Inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>

<div>
<div>


<p>{{Compat("css.selectors.only-child")}}</p>
</div>
</div>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>{{Cssxref(":only-of-type")}}</li>
 <li>{{Cssxref(":first-child")}}</li>
 <li>{{Cssxref(":last-child")}}</li>
 <li>{{Cssxref(":nth-child")}}</li>
</ul>
