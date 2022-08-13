---
title: border-block-start-color
slug: Web/CSS/border-block-start-color
translation_of: Web/CSS/border-block-start-color
---
<div>{{CSSRef}}{{SeeCompatTable}}</div>

<p>La propiedad de <a href="/en-US/docs/Web/CSS" title="CSS">CSS</a>  <strong><code>border-block-start-color</code></strong> define el color del borde lógico de bloque inicial de un elemento, que se asigna al color de borde físico dependen del modo de escritura, la direccionalidad y la orientación del texto del elemento. Esto corresponde a las propiedades {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}}, o {{cssxref("border-left-color")}} dependiendo de los valores definidos por {{cssxref("writing-mode")}}, {{cssxref("direction")}}, y {{cssxref("text-orientation")}}.</p>

<div>{{EmbedInteractiveExample("pages/css/border-block-start-color.html")}}</div>



<h2 id="Sintaxis">Sintaxis</h2>

<pre class="brush:css no-line-numbers">border-block-start-color: blue;
border-block-start-color: #4c5d21;
</pre>

<p>Propiedades relacionadas son {{cssxref("border-block-end-color")}}, {{cssxref("border-inline-start-color")}}, y {{cssxref("border-inline-end-color")}}, que definen los otros colores del borde del elemento.</p>

<p>{{cssinfo}}</p>

<h3 id="Valores">Valores</h3>

<dl>
 <dt><code>&lt;'color'&gt;</code></dt>
 <dd>Mira {{ cssxref("border-color") }}</dd>
</dl>

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
  border: 10px solid blue;
  border-block-start-color: red;
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
   <td>{{SpecName("CSS Logical Properties", "#propdef-border-block-start-color", "border-block-start-color")}}</td>
   <td>{{Spec2("CSS Logical Properties")}}</td>
   <td>Definición Inicial</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_en_navegadores">Compatibilidad en navegadores</h2>



<p>{{Compat("css.properties.border-block-start-color")}}</p>

<h2 id="Mira_también">Mira también</h2>

<ul>
 <li>Esta propiedad se asigna a una de las propiedades del borde físico: {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}}, o {{cssxref("border-left-color")}}.</li>
 <li>{{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}</li>
</ul>
