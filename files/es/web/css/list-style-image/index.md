---
title: list-style-image
slug: Web/CSS/list-style-image
tags:
  - CSS
  - 'CSS:Referencias'
  - Referencia_CSS
  - Todas_las_Categorías
translation_of: Web/CSS/list-style-image
---
<p>{{ CSSRef() }}</p>

<h3 id="Resumen" name="Resumen">Resumen</h3>

<p>La imagen de lista (<code>list-style-image</code>) define la imagen que será utilizada como marcador del <a href="es/HTML/Element/li">listado</a>.</p>

<ul>
 <li>{{ Cssxref("initial", "Valor inicial") }}: {{ Cssxref("none", "ninguno") }}</li>
 <li>Se aplica a: elementos con 'display: list-item'</li>
 <li>{{ Cssxref("inheritance", "Valor heredado") }}: Sí</li>
 <li>Porcentajes: n/a</li>
 <li>Medio: {{ Cssxref("Media:Visual", "visual") }}</li>
 <li>{{ Cssxref("computed value", "Valor calculado") }}: URI absoluta o <code>none</code></li>
</ul>

<h3 id="Sintaxis" name="Sintaxis">Sintaxis</h3>

<pre class="eval">list-style-image: &lt;uri&gt; | none | inherit
</pre>

<h3 id="Valores" name="Valores">Valores</h3>

<dl>
 <dt><code>uri</code> </dt>
 <dd>directorio donde se encuentra la imagen que se utilizará como marcador.</dd>
</dl>

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;ul&gt;
    &lt;li&gt;Item 1&lt;/li&gt;
    &lt;li&gt;Item 2&lt;/li&gt;
&lt;/ul&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">ul {
  list-style-image: url("https://mdn.mozillademos.org/files/11981/starsolid.gif")
}</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample('Ejemplos')}}</p>

<h3 id="Especificaciones" name="Especificaciones">Especificaciones</h3>

<ul>
 <li><a class="external" href="http://www.w3.org/TR/CSS1#list-style-image">CSS 1</a></li>
 <li><a class="external" href="http://www.w3.org/TR/CSS21/generate.html#propdef-list-style-image">CSS 2.1</a></li>
 <li><a class="external" href="http://www.w3.org/TR/css3-lists/#list-style-image">css3-lists</a></li>
</ul>

<h3 id="Compatibilidad_con_navegadores" name="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h3>

<h3 id="Ver_tambi.C3.A9n" name="Ver_tambi.C3.A9n">Ver también</h3>

<p>{{ Cssxref("list-style") }}, {{ Cssxref("list-style-type") }}, {{ Cssxref("list-style-position") }}</p>

<p>{{ languages( { "fr": "fr/CSS/list-style-image", "pl": "pl/CSS/list-style-image", "en": "en/CSS/list-style-image" } ) }}</p>
