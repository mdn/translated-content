---
title: list-style-position
slug: Web/CSS/list-style-position
tags:
  - CSS
  - 'CSS:Referencias'
  - Referencia_CSS
  - Todas_las_Categorías
translation_of: Web/CSS/list-style-position
---
<p>{{ CSSRef() }}</p>

<h3 id="Resumen" name="Resumen">Resumen</h3>

<p>La posición de la lista (<code>list-style-position</code>) especifica donde será colocado el marcador de la lista en relación a la caja principal.</p>

<ul>
 <li>{{ Cssxref("initial", "Valor inicial") }}: {{ Cssxref("outside", "outside (afuera)") }}</li>
 <li>Se aplica a: elementos con 'display: list-item'</li>
 <li>{{ Cssxref("inheritance", "Valor heredado") }}: Sí</li>
 <li>Porcentajes: n/a</li>
 <li>Medio: {{ Cssxref("Media:Visual", "visual") }}</li>
 <li>{{ Cssxref("computed value", "Valor calculado") }}: como especificado</li>
</ul>

<h3 id="Sintaxis" name="Sintaxis">Sintaxis</h3>

<pre class="eval">list-style-position: inside | outside | inherit
</pre>

<h3 id="Valores" name="Valores">Valores</h3>

<dl>
 <dt><code>outside</code> </dt>
 <dd>el marcador se encuentra fuera de la caja principal.</dd>
 <dt><code>inside</code> </dt>
 <dd>el marcador es la primera caja en línea dentro de la caja principal, después de la cual fluye el resto de los elementos.</dd>
</dl>

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;ul class="one"&gt; List 1
  &lt;li&gt;List Item 1-1&lt;/li&gt;
  &lt;li&gt;List Item 1-2&lt;/li&gt;
  &lt;li&gt;List Item 1-3&lt;/li&gt;
  &lt;li&gt;List Item 1-4&lt;/li&gt;
&lt;/ul&gt;
&lt;ul class="two"&gt; List 2
  &lt;li&gt;List Item 2-1&lt;/li&gt;
  &lt;li&gt;List Item 2-2&lt;/li&gt;
  &lt;li&gt;List Item 2-3&lt;/li&gt;
  &lt;li&gt;List Item 2-4&lt;/li&gt;
&lt;/ul&gt;
&lt;ul class="three"&gt; List 3
  &lt;li&gt;List Item 3-1&lt;/li&gt;
  &lt;li&gt;List Item 3-2&lt;/li&gt;
  &lt;li&gt;List Item 3-3&lt;/li&gt;
  &lt;li&gt;List Item 3-4&lt;/li&gt;
&lt;/ul&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush:css;">.one {
  list-style:square inside;
}

.two {
  list-style-position: outside;
  list-style-type: circle;
}

.three {
  list-style-image: url("https://mdn.mozillademos.org/files/11979/starsolid.gif");
  list-style-position: inherit;
}</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample("Ejemplos","200","420")}}</p>

<h3 id="Especificaciones" name="Especificaciones">Especificaciones</h3>

<ul>
 <li><a class="external" href="http://www.w3.org/TR/CSS1#list-style-position">CSS 1</a></li>
 <li><a class="external" href="http://www.w3.org/TR/CSS21/generate.html#propdef-list-style-position">CSS 2.1</a></li>
 <li><a class="external" href="http://www.w3.org/TR/css3-lists/#list-style-position">css3-lists</a></li>
</ul>

<h3 id="Compatibilidad_con_navegadores" name="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h3>

<h3 id="Ver_tambi.C3.A9n" name="Ver_tambi.C3.A9n">Ver también</h3>

<p>{{ Cssxref("list-style") }}, {{ Cssxref("list-style-type") }}, {{ Cssxref("list-style-image") }}</p>

<p>{{ languages( { "fr": "fr/CSS/list-style-position", "pl": "pl/CSS/list-style-position", "en": "en/CSS/list-style-position" } ) }}</p>
