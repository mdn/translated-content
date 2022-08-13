---
title: margin-inline-start
slug: Web/CSS/margin-inline-start
translation_of: Web/CSS/margin-inline-start
---
<p>{{CSSRef}}{{SeeCompatTable}}</p>

<p>The <strong><code>margin-inline-start</code></strong> define el margen de inicio en línea lógico de un elemento, que se asigna a un margen físico según el modo de escritura, la direccionalidad y la orientación del texto del elemento. Corresponde a la las propiedades {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, o {{cssxref("margin-left")}} dependiendo de los valores definidos por {{cssxref("writing-mode")}}, {{cssxref("direction")}}, y {{cssxref("text-orientation")}}.</p>

<div>{{EmbedInteractiveExample("pages/css/margin-inline-start.html")}}</div>



<h2 id="Sintaxis">Sintaxis</h2>

<pre class="brush:css no-line-numbers">/* &lt;length&gt; values */
margin-inline-start: 10px;  /* An absolute length */
margin-inline-start: 1em;   /* relative to the text size */
margin-inline-start: 5%;    /* relative to the nearest block container's width */

/* Keyword values */
margin-inline-start: auto;

/* Global values */
margin-inline-start: inherit;
</pre>

<p>Se relaciona con {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, and {{cssxref("margin-inline-end")}}, que define las otras márgenes del elemento.</p>

<p>{{cssinfo}}</p>

<h3 id="Valores">Valores</h3>

<p>La propiedad <code>margin-inline-start</code> toma los mismos valores de la propiedad {{cssxref("margin-left")}}.</p>

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
  margin-inline-start: 20px;
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
   <td>{{SpecName("CSS Logical Properties", "#propdef-margin-inline-start", "margin-inline-start")}}</td>
   <td>{{Spec2("CSS Logical Properties")}}</td>
   <td>Definición inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_en_navegadores">Compatibilidad en navegadores</h2>



<p>{{Compat("css.properties.margin-inline-start")}}</p>

<h2 id="Mira_también">Mira también</h2>

<ul>
 <li>{{cssxref("margin-inline-end")}}</li>
 <li>Las propiedades físicas mapeadas: {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, y {{cssxref("margin-left")}}</li>
 <li>{{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}</li>
</ul>
