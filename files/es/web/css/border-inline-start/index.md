---
title: border-inline-start
slug: Web/CSS/border-inline-start
translation_of: Web/CSS/border-inline-start
---
<p>{{CSSRef}}{{SeeCompatTable}}</p>

<p>La propiedad de <a href="/en-US/docs/Web/CSS" title="CSS">CSS</a> <strong> <code>border-inline-start</code></strong> es una <a href="/en-US/docs/Web/CSS/Shorthand_properties">propiedad abreviada</a> para establecer los valores de la propiedad inicial del borde individual en línea en un solo lugar en la hoja de estilos.</p>

<div>{{EmbedInteractiveExample("pages/css/border-inline-start.html")}}</div>



<h2 id="Sintaxis">Sintaxis</h2>

<pre class="brush:css no-line-numbers">border-inline-start: 1px;
border-inline-start: 2px dotted;
border-inline-start: medium dashed green;
</pre>

<p><code>border-inline-start</code> es especificado con uno o más de {{cssxref("border-inline-start-width")}}, {{cssxref("border-inline-start-style")}}, and {{cssxref("border-inline-start-color")}}. El borde físico al que se mapea depende del modo de escritura, la direccionalidad y la orientación del texto del elemento. Esto corresponde a las propiedades {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, o {{cssxref("border-left")}} dependiendo de los valores definidos por {{cssxref("writing-mode")}}, {{cssxref("direction")}}, y {{cssxref("text-orientation")}}.</p>

<p>Propiedades relacionadas son {{cssxref("border-block-start")}}, {{cssxref("border-block-end")}}, and {{cssxref("border-inline-end")}}, que definen los otros bordes del elemento.</p>

<p>{{cssinfo}}</p>

<h3 id="Valores">Valores</h3>

<p>El <code>border-inline-start</code> es especificado con uno o más de los sigueintes valores, en cualquier orden:</p>

<dl>
 <dt><code>&lt;'border-width'&gt;</code></dt>
 <dd>El ancho del borde. Mira {{cssxref("border-width")}}.</dd>
 <dt><code>&lt;'border-style'&gt;</code></dt>
 <dd>La línea de estilo del borde. Mira {{cssxref("border-style")}}.</dd>
 <dt><code>&lt;'color'&gt;</code></dt>
 <dd>El color del borde. Mira {{cssxref("color")}}.</dd>
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
  writing-mode: vertical-rl;
  border-inline-start: 5px dashed blue;
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
   <td>{{SpecName("CSS Logical Properties", "#propdef-border-inline-start", "border-inline-start")}}</td>
   <td>{{Spec2("CSS Logical Properties")}}</td>
   <td>Definición inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_en_navegadores">Compatibilidad en navegadores</h2>



<p>{{Compat("css.properties.border-inline-start")}}</p>

<h2 id="Mira_también">Mira también</h2>

<ul>
 <li>Esta propiedad se asigna a una de las propiedades del borde físico: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, o {{cssxref("border-left")}}.</li>
 <li>{{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}</li>
</ul>
