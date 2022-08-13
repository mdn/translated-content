---
title: padding-inline-start
slug: Web/CSS/padding-inline-start
translation_of: Web/CSS/padding-inline-start
---
<div>{{CSSRef}}{{SeeCompatTable}}</div>

<p>La propiedad de <a href="/en-US/docs/Web/CSS">CSS</a> <strong> <code>padding-inline-start</code></strong> define el relleno de inicio lógico en línea de un elemento, que se asigna a un relleno físico en función del modo de escritura, la direccionalidad y la orientación del texto del elemento. Corresponde a las propiedades {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, or {{cssxref("padding-left")}} dependiendo de los valores definidos por {{cssxref("writing-mode")}}, {{cssxref("direction")}}, y {{cssxref("text-orientation")}}.</p>

<p>Esto se relaciona con {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, y {{cssxref("padding-inline-end")}}, que define los rellenos de los otros elementos.</p>

<div>{{EmbedInteractiveExample("pages/css/padding-inline-start.html")}}</div>



<h2 id="Sintaxis">Sintaxis</h2>

<pre class="brush:css no-line-numbers">/* &lt;length&gt; values */
padding-inline-start: 10px;   /* An absolute length */
padding-inline-start: 1em;    /* A length relative to the text size */

/* &lt;percentage&gt; value */
padding-inline-start: 5%;     /* A padding relative to the block container's width */

/* Global values */
padding-inline-start: inherit;
padding-inline-start: initial;
padding-inline-start: unset;
</pre>

<p>{{cssinfo}}</p>

<h3 id="Valores">Valores</h3>

<p>La propiedad <code>padding-inline-start</code> toma los mismos valores de la propiedad {{cssxref("padding-left")}}.</p>

<h3 id="Sintaxis_formal">Sintaxis formal</h3>

{{csssyntax}}

<h2 id="Ejemplo">Ejemplo</h2>

<h3 id="Contenido_HTML">Contenido HTML </h3>

<pre class="brush: html">&lt;div&gt;
  &lt;p class="exampleText"&gt;Example text&lt;/p&gt;
&lt;/div&gt;
</pre>

<h3 id="Contenido_CSS">Contenido CSS </h3>

<pre class="brush: css">div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-lr;
  padding-inline-start: 20px;
  background-color: #C8C800;
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
   <td>{{SpecName("CSS Logical Properties", "#propdef-padding-inline-start", "padding-inline-start")}}</td>
   <td>{{Spec2("CSS Logical Properties")}}</td>
   <td>Definición inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_en_navegadores">Compatibilidad en navegadores</h2>



<p>{{Compat("css.properties.padding-inline-start")}}</p>

<h2 id="Mira_también">Mira también</h2>

<ul>
 <li>Las propiedades físicas mapeadas: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, y {{cssxref("padding-left")}}</li>
 <li>{{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}</li>
</ul>
