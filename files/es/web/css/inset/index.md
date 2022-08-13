---
title: inset
slug: Web/CSS/inset
translation_of: Web/CSS/inset
---
<div>{{CSSRef}}{{SeeCompatTable}}</div>

<p>La propiedad de <a href="/en-US/docs/Web/CSS" title="CSS">CSS</a>  <strong><code>inset</code></strong> define el bloque lógico y las compensaciones de inicio y finalización en línea de un elemento, que se asignan a las compensaciones físicas en función del modo de escritura, la direccionalidad y la orientación del texto del elemento. Corresponde a las propiedades {{cssxref ("top")}} y {{cssxref ("bottom")}}, o {{cssxref ("right")}} y {{cssxref ("left")}} dependiendo de las propiedades en los valores definidos para {{cssxref ("modo de escritura")}}, {{cssxref ("dirección")}} y {{cssxref ("orientación de texto")}}.</p>

<pre class="brush:css no-line-numbers">/* &lt;length&gt; values */
inset: 3px 10px 3px 10px;
inset: 2.4em 3em 3em 3em;
inset: 10px; /* value applied to all edges */

/* &lt;percentage&gt;s of the width or height of the containing block */
inset: 10% 5% 5% 5%;

/* Keyword value */
inset: auto;

/* Global values */
inset: inherit;
inset: initial;
inset: unset;

</pre>

<p>{{cssinfo}}</p>

<h2 id="Sintaxis">Sintaxis</h2>

<h3 id="Valores">Valores</h3>

<p>La propiedad <code>inset</code> toma los mismos valores de la propiedad {{cssxref("left")}}.</p>

<h3 id="Sintaxis_formal">Sintaxis formal</h3>

{{csssyntax}}

<h2 id="Ejemplo">Ejemplo</h2>

<h3 id="Contenido_HTML">Contenido HTML</h3>

<pre class="brush: html">&lt;div&gt;
  &lt;p class="exampleText"&gt;Example text&lt;/p&gt;
&lt;/div&gt;
</pre>

<h3 id="Contenido_CSS">Contenido CSS</h3>

<pre class="brush: css">div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-lr;
  position: relative;
  inset: 20px 50px 30px 10px;
  background-color: #c8c800;
}</pre>

<p>{{EmbedLiveSample("Ejemplo", 140, 140)}}</p>

<h2 id="Especificación">Especificación</h2>

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
   <td>{{SpecName("CSS Logical Properties", "#propdef-inset", "inset")}}</td>
   <td>{{Spec2("CSS Logical Properties")}}</td>
   <td>Definición inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_en_navegadores">Compatibilidad en navegadores</h2>



<p>{{Compat("css.properties.inset")}}</p>

<h2 id="Mira_también">Mira también</h2>

<ul>
 <li>Las propiedades físicas mapeadas: {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, y {{cssxref("left")}}</li>
 <li>{{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}</li>
</ul>
