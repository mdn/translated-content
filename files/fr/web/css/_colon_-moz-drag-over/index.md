---
title: ':-moz-drag-over'
slug: 'Web/CSS/:-moz-drag-over'
tags:
  - CSS
  - Non-standard
  - Pseudo-classe
  - Reference
translation_of: 'Web/CSS/:-moz-drag-over'
---
<div>{{Non-standard_header}}{{CSSRef}}</div>

<p>La pseudo-classe <strong><code>:-moz-drag-over</code></strong> permet de mettre en forme un élément lorsqu'un événement <code>drag-over</code> est appelé dessus.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>element</var>:-moz-drag-over { <em>propriétés de mise en forme</em> }
</pre>

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush:css">td:-moz-drag-over {
  color: red;
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush:html">&lt;table border="1"&gt;
  &lt;tr&gt;
    &lt;td width="100px" height="100px"&gt;Drag Over&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples","200","200")}}</p>

<h2 id="Spécifications">Spécifications</h2>

<p>Cette pseudo-classe est une pseudo-classe propriétaire liée à Gecko/Mozilla et ne fait partie d'aucune spécification.</p>
