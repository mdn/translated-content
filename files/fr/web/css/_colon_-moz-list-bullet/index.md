---
title: '::-moz-list-bullet'
slug: Web/CSS/:-moz-list-bullet
tags:
  - CSS
  - Non-standard
  - Pseudo-element
  - Reference
translation_of: Web/CSS/:-moz-list-bullet
original_slug: Web/CSS/::-moz-list-bullet
---
<div>{{Non-standard_header}}{{CSSRef}}</div>

<p>Le <a href="/fr/docs/Web/CSS/Pseudo-éléments">pseudo-élément CSS</a> non-standard <strong><code>::-moz-list-bullet</code></strong> de Mozilla est utilisé pour appliquer un style aux puces des éléments d'une liste non ordonnée (autrement dit, pour un élément {{htmlelement("li")}}) contenu dans un élément {{htmlelement("ul")}}).</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">li::-moz-list-bullet { <em>propriétés de style</em> }</pre>

<h2 id="Exemples">Exemples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;ul&gt;
  &lt;li&gt;Numéro 1&lt;/li&gt;
  &lt;li&gt;Numéro 2&lt;/li&gt;
  &lt;li&gt;Numéro 3&lt;/li&gt;
&lt;/ul&gt;

&lt;ul class="list"&gt;
  &lt;li&gt;Numéro 1&lt;/li&gt;
  &lt;li&gt;Numéro 2&lt;/li&gt;
  &lt;li&gt;Numéro 3&lt;/li&gt;
&lt;/ul&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">.list ::-moz-list-bullet {
  font-size: 36px;
}</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample('Exemples', '', '', '', 'Web/CSS/:-moz-list-bullet')}}</p>

<h2 id="Spécifications">Spécifications</h2>

<p>Ce pseudo-élément est un pseudo-élément propriétaire lié à Gecko/Mozilla et ne fait partie d'aucune spécification.</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref(":-moz-list-number")}}</li>
 <li>{{cssxref("::marker")}}</li>
</ul>
