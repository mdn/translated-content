---
title: ':-moz-last-node'
slug: 'Web/CSS/:-moz-last-node'
tags:
  - CSS
  - NeedsCompatTable
  - No estandar
  - Referencia CSS
translation_of: 'Web/CSS/:-moz-last-node'
---
<div>{{Non-standard_header}}{{CSSRef}}</div>

<h2 id="Resumen">Resumen</h2>

<p>La  <a href="/es/docs/Web/CSS/Pseudo-classes" title="Pseudo-classes">pseudo-clase</a> <a href="/es/docs/Web/CSS">CSS</a> <code>:-moz-last-node</code> selecciona un elemento si es el último nodo hijo de algún otro elemento. Se diferencia de {{cssxref(":last-child")}} en que no selecciona el último elemento hijo si tiene texto (sin contar espacios en blanco) después de él.</p>

<p class="note">Cualquier espacio en blanco al final de un elemento se ignora al usar <code>:-moz-last-node</code>.</p>

<h2 id="Síntaxis">Síntaxis</h2>

<pre class="syntaxbox"><var>span</var>:-moz-last-node {<em>propiedades del estilo</em> }
</pre>

<h2 id="Ejemplo">Ejemplo</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush:css">span:-moz-last-node {
  background-color: lime;
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush:html">&lt;div&gt;
  &lt;span&gt;:-moz-first-node&lt;/span&gt;
  &lt;span&gt;:-moz-last-node&lt;/span&gt;
&lt;/div&gt;
</pre>

<p>{{EmbedLiveSample("Example", "220", "20")}}</p>

<h2 id="Ver_además">Ver además</h2>

<ul>
 <li>{{cssxref(":-moz-first-node")}}</li>
 <li>{{cssxref(":last-child")}}</li>
</ul>
