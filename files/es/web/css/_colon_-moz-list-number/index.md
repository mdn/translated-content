---
title: '::-moz-list-number'
slug: 'Web/CSS/:-moz-list-number'
tags:
  - CSS
  - NeedsCompatTable
  - No estandar
  - Pseudo-elemento
  - Referencia CSS
translation_of: 'Web/CSS/:-moz-list-number'
---
<div>{{Non-standard_header}}{{CSSRef}}</div>

<h2 id="Resumen">Resumen</h2>

<p>El  <a href="/es/docs/Web/CSS/Pseudo-elements">pseudo-elemento </a><a href="/es/docs/Web/CSS">CSS </a><code>::-moz-list-number</code> te permite personalizar la apariencia de los números de los elementos de lista  ({{HTMLElement("li")}}) en listas que sean listas ordenadas ({{HTMLElement("ol")}}).</p>

<h2 id="Síntaxis">Síntaxis</h2>

<pre class="syntaxbox">li::-moz-list-number { <em>style properties</em> }
</pre>

<h2 id="Ejemplo">Ejemplo</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush:css">li::-moz-list-number {
  font-style: italic;
  font-weight: bold;
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush:html">&lt;ol&gt;
  &lt;li&gt;First item&lt;/li&gt;
  &lt;li&gt;Second item&lt;/li&gt;
  &lt;li&gt;Third item&lt;/li&gt;
&lt;/ol&gt;
</pre>

<h3 id="Resultado">Resultado</h3>

<p><img alt="moz-list-number.png" class="default internal" src="/@api/deki/files/4668/=moz-list-number.png"><br>
 {{EmbedLiveSample("Example")}}</p>
