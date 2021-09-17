---
title: '::-moz-list-number'
slug: Web/CSS/:-moz-list-number
tags:
  - CSS
  - Non-standard
  - Pseudo-element
  - Reference
translation_of: Web/CSS/:-moz-list-number
original_slug: Web/CSS/::-moz-list-number
---
<div>{{Non-standard_header}}{{CSSRef}}</div>

<p>Le <a href="/fr/docs/Web/CSS/Pseudo-éléments">pseudo-élément CSS</a> <strong><code>::-moz-list-number</code></strong> permet de personnaliser l'apparence des numéros des éléments de liste ({{HTMLElement("li")}}) au sein des listes numérotées ({{HTMLElement("ol")}}).</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">li::-moz-list-number { <em>propriétés de style</em> }
</pre>

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush:css">li::-moz-list-number {
  font-style: italic;
  font-weight: bold;
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush:html">&lt;ol&gt;
  &lt;li&gt;Premier élément&lt;/li&gt;
  &lt;li&gt;Second élément&lt;/li&gt;
  &lt;li&gt;Troisième élément&lt;/li&gt;
&lt;/ol&gt;
</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemple")}}</p>

<h2 id="Spécifications">Spécifications</h2>

<p>Ce pseudo-élément est un pseudo-élément propriétaire lié à Gecko/Mozilla et ne fait partie d'aucune spécification.</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref(":-moz-list-bullet")}}</li>
 <li>{{cssxref("::marker")}}</li>
</ul>
