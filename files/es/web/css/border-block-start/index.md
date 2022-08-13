---
title: border-block-start
slug: Web/CSS/border-block-start
translation_of: Web/CSS/border-block-start
---
<p>{{CSSRef}}{{SeeCompatTable}}</p>

<p>La propiedad de <a href="/en-US/docs/Web/CSS" title="CSS">CSS</a> <strong><code>border-block-start</code></strong> es una <a href="/en-US/docs/Web/CSS/Shorthand_properties">propiedad abreviada</a> para establecer los valores lógicos individuales del borde de bloque inicial en un solo lugar en la hoja de estilos.  </p>

<div>{{EmbedInteractiveExample("pages/css/border-block-start.html")}}</div>



<h2 id="Sintaxis">Sintaxis</h2>

<pre class="brush:css  no-line-numbers">border-block-start: 1px;
border-block-start: 2px dotted;
border-block-start: medium dashed blue;
</pre>

<p><code>border-block-start</code> puede ser usado para establecer los valores de uno o más de {{cssxref("border-block-start-width")}}, {{cssxref("border-block-start-style")}}, y {{cssxref("border-block-start-color")}}. El borde físico al que se asigna depende del modo de escritura, la direccionalidad y la orientación del texto del elemento. Esto corresponde a las propiedades {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, o {{cssxref("border-left")}} dependiendo de los valores definidos para {{cssxref("writing-mode")}}, {{cssxref("direction")}}, y {{cssxref("text-orientation")}}.</p>

<p>Propiedades relacionadas son {{cssxref("border-block-end")}}, {{cssxref("border-inline-start")}}, y {{cssxref("border-inline-end")}}, que definen los otros bordes del elemento.</p>

<p>{{cssinfo}}</p>

<h3 id="Valores">Valores</h3>

<p>El <code>border-block-start</code> es especificado con uno o más de los siguientes valores, en cualquier orden:</p>

<dl>
 <dt><code>&lt;'border-width'&gt;</code></dt>
 <dd>El ancho del borde. Mira {{cssxref("border-width")}}.</dd>
 <dt><code>&lt;'border-style'&gt;</code></dt>
 <dd>El estilo de la línea del borde. Mira {{cssxref("border-style")}}.</dd>
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

<pre class="brush:css  no-line-numbers">div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-rl;
  border-block-start: 5px dashed blue;
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
   <td>{{SpecName("CSS Logical Properties", "#propdef-border-block-start", "border-block-start")}}</td>
   <td>{{Spec2("CSS Logical Properties")}}</td>
   <td>Definición Inicial</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_en_navegadores">Compatibilidad en navegadores</h2>



<p>{{Compat("css.properties.border-block-start")}}</p>

<h2 id="Mira_también">Mira también</h2>

<ul>
 <li>Esta propiedad se asigna a una de las propiedades del borde físico: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, o {{cssxref("border-left")}}.</li>
 <li>{{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}</li>
</ul>
