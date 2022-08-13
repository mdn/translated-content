---
title: list-style-type
slug: Web/CSS/list-style-type
tags:
  - CSS
  - 'CSS:Referencias'
  - Referencia_CSS
  - Todas_las_Categorías
translation_of: Web/CSS/list-style-type
---
<p>{{ CSSRef() }}</p>

<h3 id="Resumen" name="Resumen">Resumen</h3>

<p>El {{ Cssxref("list-style-type", "tipo de estilo de lista") }} especifica la apariencia del <a href="/es/HTML/Element/li" title="es/HTML/Element/li">listado</a>.</p>

<ul>
 <li>{{ Cssxref("initial", "Valor inicial") }}: {{ Cssxref("disc", "disco/punto") }}</li>
 <li>Se aplica a: elementos con 'display: list-item'</li>
 <li>{{ Cssxref("inheritance", "Valor heredado") }}: Sí</li>
 <li>Porcentajes: n/a</li>
 <li>Medio: {{ Cssxref("Media:Visual", "visual") }}</li>
 <li>{{ Cssxref("computed value", "Valor calculado") }}: según se especificó</li>
</ul>

<h3 id="Sintaxis" name="Sintaxis">Sintaxis</h3>

<pre class="eval"> list-style-type:  &lt;std-list-style-name&gt; | {{ Cssxref("none") }} | {{ Cssxref("inherit") }} ;
</pre>

<h3 id="Valores" name="Valores">Valores</h3>

<dl>
 <dt>&lt;std-list-style-name&gt;</dt>
 <dd>un nombre de estilo de lista estándar: <code>disc, circle, square, decimal, decimal-leading-zero, lower-roman, upper-roman, lower-greek, lower-latin, upper-latin, armenian, georgian, lower-alpha, upper-alpha</code></dd>
 <dt><code>disc</code></dt>
 <dd>un disco.</dd>
 <dt><code>circle</code></dt>
 <dd>un círculo.</dd>
 <dt><code>square</code></dt>
 <dd>un cuadrado.</dd>
 <dt><code>decimal</code></dt>
 <dd>números decimales empezando con 1.</dd>
 <dt><code>decimal-leading-zero</code></dt>
 <dd>números decimales empezando eventualmente por ceros (por ejemplo: 01, 02, 03, ..., 98, 99).</dd>
 <dt><code>lower-roman</code></dt>
 <dd>números romanos en minúscula (i, ii, iii, iv, v, etc.).</dd>
 <dt><code>upper-roman</code></dt>
 <dd>números romanos en mayúscula (I, II, III, IV, V, etc.).</dd>
 <dt><code>lower-greek</code></dt>
 <dd>letras griegas en minúscula alfa/α, beta/β, gamma/γ, ...</dd>
 <dt><code>lower-latin</code></dt>
 <dd>letras ASCII en minúscula (a, b, c, ... z).</dd>
 <dt><code>upper-latin</code></dt>
 <dd>letras ASCII en mayúscula (A, B, C, ... Z).</dd>
 <dt><code>armenian</code></dt>
 <dd>numeración armenia tradicional (ayb/ayp, ben/pen, gim/keem, ...).</dd>
 <dt><code>georgian</code></dt>
 <dd>numeración georgiana tradicional (an, ban, gan, ..., he, tan, in, in-an, ...).</dd>
 <dt><code>lower-alpha</code></dt>
 <dd>es igual que <code>lower-latin</code>.</dd>
 <dt><code>upper-alpha</code></dt>
 <dd>es igual que <code>upper-latin</code>.</dd>
 <dt><code>none</code></dt>
 <dd>nada.</dd>
</dl>

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">ol.normal {
  list-style-type: upper-alpha;
}

/* or use the shortcut "list-style": */
ol.shortcut {
  list-style: upper-alpha;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;ol class="normal"&gt;List 1
  &lt;li&gt;Hello&lt;/li&gt;
  &lt;li&gt;World&lt;/li&gt;
  &lt;li&gt;What's up?&lt;/li&gt;
&lt;/ol&gt;

&lt;ol class="shortcut"&gt;List 2
  &lt;li&gt;Looks&lt;/li&gt;
  &lt;li&gt;Like&lt;/li&gt;
  &lt;li&gt;The&lt;/li&gt;
  &lt;li&gt;Same&lt;/li&gt;
&lt;/ol&gt;
</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample("Ejemplos","200","300")}}</p>

<h3 id="Notas" name="Notas">Notas</h3>

<p>Ésta especificación no define el comportamiento en el caso de una lista con más elementos que la cantidad de letras del alfabeto utilizado. Por ejemplo, después de 26 letras, el resultado con <code>lower-latin</code> no es definido (y continuará como: AA, AB, AC,...). Por eso, para listas largas, es recomendable utilizar números.</p>

<h3 id="Especificaciones" name="Especificaciones">Especificaciones</h3>

<ul>
 <li><a class="external" href="http://www.w3.org/TR/CSS1#list-style-type">CSS 1</a></li>
 <li><a class="external" href="http://www.w3.org/TR/CSS21/generate.html#propdef-list-style-type">CSS 2.1</a></li>
 <li><a class="external" href="http://www.w3.org/TR/css3-lists/#list-style-type">css3-lists</a></li>
</ul>

<h3 id="Compatibilidad_con_navegadores" name="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h3>

<h3 id="Ver_tambi.C3.A9n" name="Ver_tambi.C3.A9n">Ver también</h3>

<p>{{ Cssxref("list-style") }}, {{ Cssxref("list-style-image") }}, {{ Cssxref("list-style-position") }}</p>
