---
title: ':-moz-only-whitespace'
slug: 'Web/CSS/:-moz-only-whitespace'
tags:
  - CSS
  - NeedsCompatTable
  - No estandar
  - Pseudo-clase
  - Referencia CSS
translation_of: 'Web/CSS/:-moz-only-whitespace'
---
<div>{{Non-standard_header}}{{CSSRef}}</div>

<h2 id="Resumen">Resumen</h2>

<p>La  <a href="/en-US/docs/Web/CSS/Pseudo-classes">pseudo-class </a><a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a><code>:-moz-only-whitespace</code> selecciona un elemento si no tiene ningún hijo, o bien nodos textos vacíos o bien nodos texto que sólo contienen espacios en blanco. Sólo cuando hay elementos o nodos texto con uno o más caracteres dentro, el elemento no será seleccionado por esta pseudo-clase.</p>

<h2 id="Síntaxis">Síntaxis</h2>

<pre class="syntaxbox"><var>span</var>:-moz-only-whitespace { <em>propiedades del estilo</em> }
</pre>

<h2 id="Ejemplo">Ejemplo</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush:css">span:-moz-only-whitespace::before {
  background-color: lime;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;span&gt; &lt;/span&gt;
</pre>

<p>{{EmbedLiveSample("Example", "50", "20")}}</p>
