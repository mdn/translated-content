---
title: padding-inline
slug: Web/CSS/padding-inline
translation_of: Web/CSS/padding-inline
---
<p>{{CSSRef}}{{SeeCompatTable}} </p>

<p>La propiedad de <a href="/en-US/docs/Web/CSS">CSS</a>  <strong><code>padding-inline</code></strong> define el relleno en línea lógico de inicio y final de un elemento, que asigna las propiedades de relleno físicas dependiendo del modo de escritura del elemento, direccionalidad, y orientación del texto.</p>

<pre class="brush:css no-line-numbers">/* &lt;length&gt; values */
padding-inline: 10px 20px;  /* An absolute length */
padding-inline: 1em 2em;   /* relative to the text size */
padding-inline: 5% 2%;    /* relative to the nearest block container's width */
padding-inline: 10px; /* sets both start and end values */

/* Keyword values */
padding-inline: auto;

/* Global values */
padding-inline: inherit;
padding-inline: initial;
padding-inline: unset;
</pre>

<p>Estos valores corresponden a las propiedades{{cssxref("padding-top")}} y  {{cssxref("padding-bottom")}}, o  {{cssxref("padding-right")}}, y {{cssxref("padding-left")}} dependiendo de los valores definidos {{cssxref("writing-mode")}}, {{cssxref("direction")}}, y {{cssxref("text-orientation")}}.</p>

<p>Los valores pueden ser establecidos individualmente como {{cssxref("padding-inline-start")}} y {{cssxref("padding-inline-end")}}. La propiedad de la dirección bloque es {{cssxref("padding-block")}} que establece {{cssxref("padding-block-start")}}, y {{cssxref("padding-block-end")}}.</p>

<p>{{cssinfo}}</p>

<h2 id="Sintaxis">Sintaxis</h2>

<h3 id="Valores">Valores</h3>

<p>La propiedad <code>padding-inline</code> toma los mismos valores de la propiedad {{cssxref("padding-left")}}.</p>

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
  writing-mode: vertical-rl;
  padding-inline: 20px 40px;
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
   <td>{{SpecName("CSS Logical Properties", "#propdef-padding-inline", "padding-inline")}}</td>
   <td>{{Spec2("CSS Logical Properties")}}</td>
   <td>Definición inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_en_navegadores">Compatibilidad en navegadores</h2>



<p>{{Compat("css.properties.padding-inline")}}</p>

<h2 id="Mira_también">Mira también</h2>

<ul>
 <li>Las propiedades físicas mapeadas: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, y {{cssxref("padding-left")}}</li>
 <li>{{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}</li>
</ul>
