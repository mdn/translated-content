---
title: max-inline-size
slug: Web/CSS/max-inline-size
translation_of: Web/CSS/max-inline-size
---
<p>{{CSSRef}}{{SeeCompatTable}} </p>

<p>La propiedad de <a href="/en-US/docs/Web/CSS">CSS</a>  <strong><code>max-inline-size</code></strong> define el tamaño máximo horizontal o vertical de un elemento bloque dependiendo del modo de escritura. Esto corresponde a las propiedades {{cssxref("max-width")}} o {{cssxref("max-height")}} dependiendo de los valores definidos por {{cssxref("writing-mode")}}. Si el modo de escritura esta orientado verticalmente, el valor de <code>max-inline-size</code> relacionado al alto máximo del elemento, de lo contrario, se relaciona con el ancho máximo del elemento. Se relaciona con {{cssxref("max-block-size")}}, que define la otra dimensión del elemento.</p>

<div>{{EmbedInteractiveExample("pages/css/max-inline-size.html")}}</div>



<h2 id="Sintaxis">Sintaxis</h2>

<pre class="brush:css no-line-numbers">/* &lt;length&gt; values */
max-inline-size: 300px;
max-inline-size: 25em;

/* &lt;percentage&gt; values */
max-inline-size: 75%;

/* Keyword values */
max-inline-size: none;
max-inline-size: max-content;
max-inline-size: min-content;
max-inline-size: fit-content;
max-inline-size: fill-available;

/* Global values */
max-inline-size: inherit;
max-inline-size: initial;
max-inline-size: unset;
</pre>

<p>{{cssinfo}}</p>

<h3 id="Valores">Valores</h3>

<p>La propiedad <code>max-inline-size</code> toma los mismos valores como las propiedades {{cssxref("max-width")}} y {{cssxref("max-height")}}.</p>

<h3 id="Sintaxis_formal">Sintaxis formal</h3>

{{csssyntax}}

<h2 id="Ejemplo">Ejemplo</h2>

<h3 id="Contenido_HTML">Contenido HTML </h3>

<pre class="brush: html">&lt;p class="exampleText"&gt;Example text&lt;/p&gt;
</pre>

<h3 id="Contenido_CSS">Contenido CSS </h3>

<pre class="brush: css">.exampleText {
  writing-mode: vertical-rl;
  background-color: yellow;
  block-size: 100%;
  max-inline-size: 200px;
}</pre>

<p>{{EmbedLiveSample("Ejemplo")}}</p>

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
   <td>{{SpecName("CSS Logical Properties", "#propdef-max-inline-size", "max-inline-size")}}</td>
   <td>{{Spec2("CSS Logical Properties")}}</td>
   <td>Definición inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_en_navegadores">Compatibilidad en navegadores</h2>



<p>{{Compat("css.properties.max-inline-size")}}</p>

<h2 id="Mira_también">Mira también</h2>

<ul>
 <li>Las propiedades físicas mapeadas: {{cssxref("max-width")}} y {{cssxref("max-height")}}</li>
 <li>{{cssxref("writing-mode")}}</li>
</ul>
