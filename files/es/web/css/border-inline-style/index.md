---
title: border-inline-style
slug: Web/CSS/border-inline-style
translation_of: Web/CSS/border-inline-style
---
<div>{{CSSRef}}{{SeeCompatTable}} </div>

<p>La propiedad de <a href="/en-US/docs/Web/CSS" title="CSS">CSS</a><strong> <code>border-inline-style</code></strong> define el estilo de los bordes lógicos en línea de un elemento, que se asigna al estilo de borde físico dependiendo del modo de escritura, la direccionalidad y la orientación del texto del elemento. Esto corresponde a las propiedades {{cssxref("border-top-style")}} y {{cssxref("border-bottom-style")}}, o {{cssxref("border-left-style")}}, y {{cssxref("border-right-style")}} dependiendo de los valores definidos por {{cssxref("writing-mode")}}, {{cssxref("direction")}}, y {{cssxref("text-orientation")}}.</p>

<pre class="brush:css no-line-numbers">/* &lt;'border-style'&gt; values */
border-inline-style: dashed;
border-inline-style: dotted;
border-inline-style: groove;
</pre>

<p>El estilo del borde en otra dimensión puede establecerse con {{cssxref("border-block-style")}}, que establece {{cssxref("border-block-start-style")}}, y {{cssxref("border-block-end-style")}}.</p>

<p>{{cssinfo}}</p>

<h2 id="Sintaxis">Sintaxis</h2>

<h3 id="Valores">Valores</h3>

<dl>
 <dt><code>&lt;'border-style'&gt;</code></dt>
 <dd>La línea de estilo del borde. Mira {{ cssxref("border-style") }}.</dd>
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
  border: 5px solid blue;
  border-inline-style: dashed;
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
   <td>{{SpecName("CSS Logical Properties", "#propdef-border-inline-style", "border-inline-style")}}</td>
   <td>{{Spec2("CSS Logical Properties")}}</td>
   <td>Definición inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_en_navegadores">Compatibilidad en navegadores</h2>



<p>{{Compat("css.properties.border-inline-style")}}</p>

<p> </p>

<h2 id="Mira_también">Mira también</h2>

<ul>
 <li>Esta propiedad se asigna a una de las propiedades del borde físico: {{cssxref("border-top-style")}}, {{cssxref("border-right-style")}}, {{cssxref("border-bottom-style")}}, o {{cssxref("border-left-style")}}.</li>
 <li>{{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}</li>
</ul>
