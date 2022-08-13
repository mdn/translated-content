---
title: border-inline-end
slug: Web/CSS/border-inline-end
translation_of: Web/CSS/border-inline-end
---
<p>{{CSSRef}}{{SeeCompatTable}}</p>

<p>La propiedad de <a href="/en-US/docs/Web/CSS" title="CSS">CSS</a>  <strong><code>border-inline-end</code></strong> es una <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties">propiedad abreviada</a> para establecer los valores lógicos individuales del borde en línea final en un solo lugar en la hoja de estilos. </p>

<div>{{EmbedInteractiveExample("pages/css/border-inline-end.html")}}</div>



<h2 id="Sintaxis">Sintaxis</h2>

<pre class="brush:css no-line-numbers">border-inline-end: 1px;
border-inline-end: 2px dashed;
border-inline-end: medium dashed blue;
</pre>

<p><code>border-inline-end</code> puede ser usado para establecer los valores de uno o más de {{cssxref("border-inline-end-width")}}, {{cssxref("border-inline-end-style")}}, y {{cssxref("border-inline-end-color")}}. El borde físico al que se mapea depende<span style="font-size: 1rem; letter-spacing: -0.00278rem;"> del modo de escritura, la direccionalidad y la orientación del texto del elemento. Esto corresponde a las propiedades</span><span style="font-size: 1rem; letter-spacing: -0.00278rem;"> {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, o {{cssxref("border-left")}} dependiendo de los valores definidos por {{cssxref("writing-mode")}}, {{cssxref("direction")}}, y {{cssxref("text-orientation")}}.</span></p>

<p>Propiedades relacionadas son {{cssxref("border-block-start")}}, {{cssxref("border-block-end")}}, and {{cssxref("border-inline-start")}}, que definen los otros bordes del elemento.</p>

<p>{{cssinfo}}</p>

<h3 id="Valores">Valores</h3>

<p>El <code>border-inline-end</code> es especificado con uno o más de los siguientes valores, en cualquier orden:</p>

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
  border-inline-end: 5px dashed blue;
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
   <td>{{SpecName("CSS Logical Properties", "#propdef-border-inline-end", "border-inline-end")}}</td>
   <td>{{Spec2("CSS Logical Properties")}}</td>
   <td>Definición inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_en_navegadores">Compatibilidad en navegadores</h2>



<p>{{Compat("css.properties.border-inline-end")}}</p>

<h2 id="Mira_también">Mira también</h2>

<ul>
 <li>Esta propiedad se asigna a una de las propiedades del borde físico:{{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, o {{cssxref("border-left")}}.</li>
 <li>{{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}</li>
</ul>
