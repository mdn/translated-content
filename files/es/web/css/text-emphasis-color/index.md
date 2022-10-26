---
title: text-emphasis-color
slug: Web/CSS/text-emphasis-color
tags:
  - CSS
  - Colores HTML
  - Decoración de Texto CSS
  - Estilizando HTML
  - Estilos CSS
  - Propiedad CSS
  - Referencia
  - text-decoration-color
  - Énfasis de Texto
translation_of: Web/CSS/text-emphasis-color
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary">La propiedad <a href="/es/docs/Web/CSS">CSS</a> <strong><code>text-emphasis-color</code></strong> (que podría traducirse como color del texto con énfasis) define el color de las marcas de énfasis. Este valor también puede definirse usando el atajo {{cssxref("text-emphasis")}}</span></p>

<pre class="brush:css no-line-numbers">/* Valor inicial*/
text-emphasis-color: currentColor;

/* &lt;color&gt;  */
text-emphasis-color: #555;
text-emphasis-color: blue;
text-emphasis-color: rgba(90, 200, 160, 0.8);
text-emphasis-color: transparent;

/* Valores globales */
text-emphasis-color: inherit;
text-emphasis-color: initial;
text-emphasis-color: unset;
</pre>

<p>{{cssinfo}}</p>

<h2 id="Sintáxis">Sintáxis</h2>

<h3 id="Valores">Valores</h3>

<dl>
 <dt><code>&lt;color&gt;</code></dt>
 <dd>Define el color de las marcas de énfasis. Si ningún color es declarado, el color por defecto es <code>currentColor</code> (color actual).</dd>
</dl>

<h3 id="Sintáxis_Formal">Sintáxis Formal</h3>

{{csssyntax}}

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">h3 {
  text-emphasis-color: #555;
  text-emphasis-style: "*";
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;Este es un ejemplo:&lt;/p&gt;

&lt;h3&gt;Esto está marcado con énfasis!&lt;/h3&gt;
</pre>

<h3 id="Resultado">Resultado</h3>

<p>{{EmbedLiveSample("Examples", 450, 100)}}Ejemplo incrustado en vivo</p>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificaciones</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentario</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSS3 Text Decoration', '#text-emphasis-color-property', 'text-emphasis')}}</td>
   <td>{{Spec2('CSS3 Text Decoration')}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_de_Navegadores">Compatibilidad de Navegadores</h2>



<p>{{Compat("css.properties.text-emphasis-color")}}</p>

<h2 id="Ver_También">Ver También</h2>

<ul>
 <li>El tipo de dato {{cssxref("&lt;color&gt;")}}.</li>
 <li>Las otras propiedades de marcas de énfasis relacioanadas: {{cssxref('text-emphasis-style')}}, {{cssxref('text-emphasis')}}, y {{cssxref("text-emphasis-position")}}.</li>
 <li>Otras propiedades relacionadas al color: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, y {{cssxref("column-rule-color")}}</li>
 <li><a href="/es/docs/Web/HTML/Aplicar_Color">Aplicando color a los elementos HTML utilizando CSS.</a></li>
</ul>
