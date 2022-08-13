---
title: font-style
slug: Web/CSS/font-style
tags:
  - CSS
  - Propiedad de CSS
  - Referencia
  - Tipos de letra de CSS
  - Web
  - tipo de letra
translation_of: Web/CSS/font-style
---
<div>{{CSSRef}}</div>

<h2 id="Resumen">Resumen</h2>

<p>La propiedad <code>font-style</code> permite definir el aspecto de una familia tipográfica entre los valores: <code>normal</code>, italic (cursiva) y <code>oblique</code>.</p>

<p>{{cssinfo}}</p>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="brush:css">font-style: normal;
font-style: italic;
font-style: oblique;

/* Valores globales */
font-style: inherit;
font-style: initial;
font-style: unset;
</pre>

<h3 id="Valores">Valores</h3>

<dl>
 <dt><code>normal</code></dt>
 <dd>Escoge un tipo de letra clasificado como <code>normal</code> dentro de una {{Cssxref("font-family", "familia de fuente")}}.</dd>
 <dt><code>italic</code></dt>
 <dd>Escoge un tipo de letra etiquetado como <code>italic</code>, o, si una versión cursiva del tipo de letra no esté disponible, escoge un tipo de letra etiquetado como <code>oblique</code> en lugar de eso.</dd>
 <dt><code>oblique</code></dt>
 <dd>Escoge un tipo de letra etiquetado como <code>oblique</code>, o, si una versión oblique del tipo de letra no esté disponible, escoge un tipo de letra etiquetado como <code>italic</code> en lugar de eso.</dd>
</dl>

<h3 id="Sintaxis_formal">Sintaxis formal</h3>

{{csssyntax}}

<h2 id="Ejemplo" name="Ejemplo">Ejemplo</h2>

<p>El ejemplo muestra los valores diferentes de <code>font-style</code>.</p>

<pre class="brush: html" style="display: none;">&lt;p class="normal"&gt;This paragraph is normal.&lt;/p&gt;
&lt;p class="italic"&gt;This paragraph is italic.&lt;/p&gt;
&lt;p class="oblique"&gt;This paragraph is oblique.&lt;/p&gt;
</pre>

<pre class="brush: css">.normal {
  font-style: normal;
}

.italic {
  font-style: italic;
}

.oblique {
  font-style: oblique;
}</pre>

<p>{{ EmbedLiveSample('Ejemplo') }}</p>

<p>Ten en cuenta que no todas las fuentes tienen tipos de letra distintos para <code>oblique</code> y <code>italic</code>, si este no es el caso, los navegadores simulan el estilo que falta utilizando el tipo de letra presente. Un ejemplo de representación de una fuente con ambos tipos de letra:</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/12049/Screen%20Shot%202015-12-05%20at%2008.41.03.png" style="height: 135px; width: 466px;"></p>

<h2 id="Especificaciones">Especificaciones</h2>

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
   <td>{{SpecName('CSS3 Fonts', '#font-style-prop', 'font-style')}}</td>
   <td>{{Spec2('CSS3 Fonts')}}</td>
   <td>Sin cambio</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'fonts.html#propdef-font-style', 'font-style')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>Sin cambio</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS1', '#font-style', 'font-style')}}</td>
   <td>{{Spec2('CSS1')}}</td>
   <td>Definición inicial</td>
  </tr>
 </tbody>
</table>

{{Compat("css.properties.font-style")}}
