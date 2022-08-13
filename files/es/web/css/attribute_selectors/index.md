---
title: Selectores de atributo
slug: Web/CSS/Attribute_selectors
tags:
  - Atributos
  - CSS
  - Selectores
  - Selectores de Atributo
translation_of: Web/CSS/Attribute_selectors
original_slug: Web/CSS/Selectores_atributo
---
<div>{{CSSRef}}</div>

<p>El <strong>selector de atributos</strong> CSS coincide con los elementos en función de la presencia o el valor de un atributo determinado.</p>

<pre class="brush: css no-line-numbers">/* Elementos &lt;a&gt; con un atributo title */
a[title] {
  color: purple;
}

/* Elementos &lt;a&gt; con un href que coincida con "https://example.org" */
a[href="https://example.org"] {
  color: green;
}

/* Elementos &lt;a&gt; con un href que contenga "example" */
a[href*="example"] {
  font-size: 2em;
}

/* Elementos &lt;a&gt; con un href que comience con "#" */
a[href^="#"] {
  color: #001978;
}

/* Elementos &lt;a&gt; con un href que termine en ".org" */
a[href$=".org"] {
  font-style: italic;
}

/* Elementos &lt;a&gt; cuyo atributo class contenga la palabra "logo" */
a[class~="logo"] {
  padding: 2px;
}
</pre>

<dl>
 <dt><code>[<em>attr</em>]</code></dt>
 <dd>Selecciona los elementos que tienen el atributo <em>attr</em>.</dd>
 <dt><code>[<em>attr</em>=<em>value</em>]</code></dt>
 <dd>Selecciona los elementos cuyo atributo <em>attr</em> tenga exactamente el valor <em>value</em>.</dd>
 <dt><code>[<em>attr</em>~=<em>value</em>]</code></dt>
 <dd>
 <p>Selecciona los elementos cuyo atributo <em>attr</em> tenga por valor una lista de palabras separadas por espacios, una de las cuales sea <em>value</em>.</p>
 </dd>
 <dt><code>[<em>attr</em>|=<em>value</em>]</code></dt>
 <dd>Selecciona los elementos cuyo atributo <em>attr</em> tenga exactamente el valor <em>value</em> o empiece por <em>value</em> seguido de un guión <code>-</code> (U+002D). Se puede usar para coincidencias de subcódigos en otros idiomas.</dd>
 <dt><code>[<em>attr</em>^=<em>value</em>]</code></dt>
 <dd>Selecciona los elementos cuyo atributo <em>attr</em> tenga un valor prefijado  por <em>value</em>.</dd>
 <dt><code>[<em>attr</em>$=<em>value</em>]</code></dt>
 <dd>Selecciona los elementos cuyo atributo <em>attr</em> cuyo valor tiene el sufijo (seguido) de <em>value</em>.</dd>
 <dt><code>[<em>attr</em>*=<em>value</em>]</code></dt>
 <dd>Selecciona los elementos cuyo atributo <em>attr</em> tenga un valor que contenga <em>value</em>.</dd>
 <dt id="case-insensitive"><code>[<em>attr</em> <em>operator</em> <em>value</em> i]</code></dt>
 <dd>Agregar una <code>i</code> (o <code>I</code>) antes del corchete de cierre hace que el valor sea comparado sin distinguir entre mayúsculas y minúsculas (para caracteres dentro del rango ASCII).</dd>
 <dt id="case-insensitive"><code>[<em>attr</em> <em>operator</em> <em>value</em> s]</code> {{Experimental_Inline}}</dt>
 <dd>Agregar una <code>s</code> (o <code>S</code>) antes del corchete de cierre hace que el valor sea comparado distinguiendo entre mayúsculas y minúsculas (para caracteres dentro del rango ASCII).</dd>
</dl>

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="Enlaces">Enlaces</h3>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">a {
  color: blue;
}

/* Enlaces internos, comenzando con "#" */
a[href^="#"] {
  background-color: gold;
}

/* Enlaces con "example" en cualquier parte de la URL */
a[href*="example"] {
  background-color: silver;
}

/* Enlaces con "insensitive" en cualquier parte de la URL,
   independientemente de las mayúsculas */
a[href*="insensitive" i] {
  color: cyan;
}

/* Enlaces que terminan en ".org" */
a[href$=".org"] {
  color: red;
}
</pre>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;ul&gt;
  &lt;li&gt;&lt;a href="#internal"&gt;Enlace interno&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="http://example.com"&gt;Enlace de ejemplo&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="#InSensitive"&gt;Enlace interno insensible Insensitive&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="http://example.org"&gt;Ejemplo de enlace .org&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;</pre>

<h4 id="Resultado">Resultado</h4>

<p>{{EmbedLiveSample('Enlaces')}}</p>

<h3 id="Idiomas">Idiomas</h3>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css">/* Todos los divs con un atributo `lang` están en negrita. */
div[lang] {
  font-weight: bold;
}

/* Todos los divs en inglés de EE. UU. son azules. */
div[lang~="en-us"] {
  color: blue;
}

/* Todos los divs en portugués son verdes. */
div[lang="pt"] {
  color: green;
}

/* Todos los divs en chino son rojos, ya sean
   simplificados (zh-CN) o tradicionales (zh-TW). */
div[lang|="zh"] {
  color: red;
}

/* Todos los divs con `data-lang` Traditional Chinese
   son de color púrpura. */
/* Nota: también puede usar atributos con guiones
   sin comillas dobles */
div[data-lang="zh-TW"] {
  color: purple;
}
</pre>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;div lang="en-us en-gb en-au en-nz"&gt;Hello World!&lt;/div&gt;
&lt;div lang="pt"&gt;Olá Mundo!&lt;/div&gt;
&lt;div lang="zh-CN"&gt;世界您好！&lt;/div&gt;
&lt;div lang="zh-TW"&gt;世界您好！&lt;/div&gt;
&lt;div data-lang="zh-TW"&gt;?世界您好！&lt;/div&gt;
</pre>

<h4 id="Resultado_2">Resultado</h4>

<p>{{EmbedLiveSample('Idiomas')}}</p>

<h3 id="Listas_Ordenadas">Listas Ordenadas</h3>

<p>{{SeeCompatTable}}</p>

<p><span class="tlid-translation translation" lang="es"><span title="">La especificación HTML requiere que el atributo </span></span>{{htmlattrxref("type", "input")}}<span class="tlid-translation translation" lang="es"><span title=""> distinga entre mayúsculas y minúsculas debido a que se usa principalmente en el elemento </span></span>{{HTMLElement("input")}}<span class="tlid-translation translation" lang="es"><span title="">, tratando de usar selectores de atributos con el atributo </span></span>{{htmlattrxref("type", "ol")}}<span class="tlid-translation translation" lang="es"><span title=""> de una </span></span>{{HTMLElement("ol", "lista ordenada")}}<span class="tlid-translation translation" lang="es"><span title=""> no funciona sin el modificador de mayúsculas y minúsculas</span><span title="">.</span></span></p>

<h4 id="CSS_3">CSS</h4>

<pre class="brush: css line-numbers language-css"><code class="language-css"><span class="comment token">/*
Los tipos de lista requieren poder distinguir entre mayúsculas
y minúsculas debido al peculiar comportamiento que tiene HTML
con el atributo "type"
*/
</span>
<span class="selector token">ol<span class="attribute token"><span class="punctuation token">[</span><span class="attribute token">type</span><span class="operator token">=</span><span class="token value">"a"</span><span class="punctuation token">]</span></span></span> <span class="punctuation token">{</span>
  <span class="property token">list-style-type</span><span class="punctuation token">:</span> lower-alpha<span class="punctuation token">;</span>
  <span class="property token">background</span><span class="punctuation token">:</span> red<span class="punctuation token">;</span>
<span class="punctuation token">}</span>

<span class="selector token">ol<span class="attribute token"><span class="punctuation token">[</span><span class="attribute token">type</span><span class="operator token">=</span><span class="token value">"a"</span> <span class="case-sensitivity keyword token">s</span><span class="punctuation token">]</span></span></span> <span class="punctuation token">{</span>
  <span class="property token">list-style-type</span><span class="punctuation token">:</span> lower-alpha<span class="punctuation token">;</span>
  <span class="property token">background</span><span class="punctuation token">:</span> lime<span class="punctuation token">;</span>
<span class="punctuation token">}</span>

<span class="selector token">ol<span class="attribute token"><span class="punctuation token">[</span><span class="attribute token">type</span><span class="operator token">=</span><span class="token value">"A"</span> <span class="case-sensitivity keyword token">s</span><span class="punctuation token">]</span></span></span> <span class="punctuation token">{</span>
  <span class="property token">list-style-type</span><span class="punctuation token">:</span> upper-alpha<span class="punctuation token">;</span>
  <span class="property token">background</span><span class="punctuation token">:</span> lime<span class="punctuation token">;</span>
<span class="punctuation token">}</span></code></pre>

<h4 id="HTML_3">HTML</h4>

<pre class="brush: html; line-numbers language-html"><code class="language-html"><span class="tag token"><span class="tag token"><span class="punctuation token">&lt;</span>ol</span> <span class="attr-name token">type</span><span class="attr-value token"><span class="punctuation token">=</span><span class="punctuation token">"</span>A<span class="punctuation token">"</span></span><span class="punctuation token">&gt;</span></span>
  <span class="tag token"><span class="tag token"><span class="punctuation token">&lt;</span>li</span><span class="punctuation token">&gt;</span></span>Example list<span class="tag token"><span class="tag token"><span class="punctuation token">&lt;/</span>li</span><span class="punctuation token">&gt;</span></span>
<span class="tag token"><span class="tag token"><span class="punctuation token">&lt;/</span>ol</span><span class="punctuation token">&gt;</span></span></code></pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample("HTML_ordered_lists")}}</p>

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
   <td>{{SpecName('CSS4 Selectors', '#attribute-selectors', 'attribute selectors')}}</td>
   <td>{{Spec2('CSS4 Selectors')}}</td>
   <td>Agrega un modificador para la selección de valores de atributos insensibles a mayúsculas / minúsculas ASCII.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Selectors', '#attribute-selectors', 'attribute selectors')}}</td>
   <td>{{Spec2('CSS3 Selectors')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'selector.html#attribute-selectors', 'attribute selectors')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>Definición Inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>



<p>{{Compat("css.selectors.attribute")}}</p>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>Seleccionando un solo elemento:{{domxref("Document.querySelector()")}}, {{domxref("DocumentFragment.querySelector()")}}, o {{domxref("Element.querySelector()")}}</li>
 <li>Seleccionar todos los elementos coincidentes:{{domxref("Document.querySelectorAll()")}}, {{domxref("DocumentFragment.querySelectorAll()")}}, o {{domxref("Element.querySelectorAll()")}}</li>
 <li>Todos los métodos anteriores se implementan en base a {{domxref("ParentNode")}} mixin; vea  {{domxref("ParentNode.querySelector()")}} y {{domxref("ParentNode.querySelectorAll()")}}</li>
</ul>
