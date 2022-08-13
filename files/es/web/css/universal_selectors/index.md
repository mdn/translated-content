---
title: Selectores universales
slug: Web/CSS/Universal_selectors
tags:
  - CSS
  - Principiante
  - Referencia CSS
  - Selectores
translation_of: Web/CSS/Universal_selectors
---
<div>{{CSSRef}}</div>

<p>El <strong>selector universal</strong> CSS (<code>*</code>) coincide con elementos de cualquier tipo.</p>

<pre class="brush: css no-line-numbers">/* Selecciona todos los elementos */
* {
  color: green;
}</pre>

<p>A partir de CSS3, el asterisco se puede usar en combinación con {{cssxref("CSS_Namespaces", "namespaces")}}:</p>

<ul>
 <li><code>ns|*</code> - coincide con todos los elementos en el espacio de nombres <em>ns</em></li>
 <li><code>*|*</code> - coincide con todos los elementos</li>
 <li><code>|*</code> - matches all elements without any declared namespace</li>
</ul>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox">* { <em>style properties</em> }</pre>

<p>El asterisco es opcional con selectores simples. Por ejemplo, <code>*.warning</code> y <code>.warning</code> son equivalentes.</p>

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">* [lang^=en] {
  color: green;
}

*.warning {
  color: red;
}

*#maincontent {
  border: 1px solid blue;
}

.floating {
  float: left
}

/* despejar automáticamente el siguiente hermano después de un elemento flotante */
.floating + * {
  clear: left;
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p class="warning"&gt;
  &lt;span lang="en-us"&gt;Un span verde&lt;/span&gt; en un párrafo rojo.&lt;/span&gt;
&lt;/p&gt;
&lt;p id="maincontent" lang="en-gb"&gt;
  &lt;span class="warning"&gt;Un span rojo&lt;/span&gt; en un párrafo verde.&lt;/span&gt;
&lt;/p&gt;</pre>

<h3 id="Resultado">Resultado</h3>

<p>{{EmbedLiveSample('Ejemplos')}}</p>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentarios</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSS4 Selectors', '#the-universal-selector', 'universal selector')}}</td>
   <td>{{Spec2('CSS4 Selectors')}}</td>
   <td>Ningún cambio.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Selectors', '#universal-selector', 'universal selector')}}</td>
   <td>{{Spec2('CSS3 Selectors')}}</td>
   <td>Define el comportamiento con respecto a los espacios de nombres y agrega la sugerencia de que se permite omitir el selector dentro de los pseudo-elementos.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'selector.html#universal-selector', 'universal selector')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>Definición Inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>



<p>{{Compat("css.selectors.universal")}}</p>
