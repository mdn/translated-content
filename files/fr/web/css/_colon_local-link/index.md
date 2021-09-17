---
title: ':local-link'
slug: 'Web/CSS/:local-link'
browser-compat: css.selectors.local-link
translation_of: Web/CSS/:local-link
---
<p>{{CSSRef}}</p>

<p>La <a href="/fr/docs/Web/CSS/Pseudo-classes">pseudo-classe</a> <a href="/fr/docs/Web/CSS">CSS</a> <strong><code>:local-link</code></strong> représente un lien vers le même document. Il s'agit donc d'un élément qui est l'ancre source d'un lien hypertexte dont la cible est une URL absolue correspondant à l'URL du document contenant l'élément.</p>

<pre>/* Sélectionne n'importe quel &lt;a&gt; ciblant le document courant */
a:local-link {
  color: green;
}
</pre>

<h2 id="Syntax">Syntaxe</h2>

<p>{{csssyntax}}</p>

<h2 id="Examples">Exemples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;a href="#target"&gt;Voici un lien vers la page courante.&lt;/a&gt;&lt;br&gt;
&lt;a href="https://example.com"&gt;Voici un lien externe&lt;/a&gt;&lt;br&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">a:local-link {
  color: green;
}
</pre>

<h3 id="Result">Résultat</h3>

<p>{{EmbedLiveSample("Examples")}}</p>

<h2 id="Specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
  <li>Pseudo-classes relatives aux liens : {{cssxref(":link")}}, {{cssxref(":visited")}}, {{cssxref(":hover")}}, {{cssxref(":active")}}</li>
</ul>
