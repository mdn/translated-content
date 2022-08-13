---
title: ':-moz-drag-over'
slug: 'Web/CSS/:-moz-drag-over'
tags:
  - CSS
  - NeedsCompatTable
  - No estandar
  - Referencia CSS
translation_of: 'Web/CSS/:-moz-drag-over'
---
<div>{{Non-standard_header}}{{CSSRef}}</div>

<h2 id="Resumen">Resumen</h2>

<p>La  <a href="/es/docs/Web/CSS/Pseudo-classes">pseudo-clase</a> <a href="/es/docs/Web/CSS">CSS</a> <code>:-moz-drag-over</code>  se usa para editar un elemento cuando se produce un evento de arrasttar (drag) sobre él.</p>

<h2 id="Síntaxis">Síntaxis</h2>

<pre class="syntaxbox"><var>element</var>:-moz-drag-over { propiedades del estilo }
</pre>

<h2 id="Ejemplo">Ejemplo</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush:css">td:-moz-drag-over {
  color: red;
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush:html">&lt;table border="1"&gt;
  &lt;tr&gt;
    &lt;td width="100px" height="100px"&gt;Arrastra aquí&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
</pre>

<h3 id="Resultado">Resultado</h3>

<p>{{EmbedLiveSample("Example")}}</p>
