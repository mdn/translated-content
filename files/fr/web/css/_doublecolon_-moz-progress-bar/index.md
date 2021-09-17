---
title: '::-moz-progress-bar'
slug: 'Web/CSS/::-moz-progress-bar'
tags:
  - CSS
  - Non-standard
  - Pseudo-element
  - Reference
translation_of: 'Web/CSS/::-moz-progress-bar'
---
<div>{{Non-standard_header}}{{CSSRef}}</div>

<p>Le pseudo-élément <strong><code>::-moz-progress-bar</code></strong> s'appliquant à la zone d'élément HTML {{HTMLElement("progress")}} représente la valeur de la progression effectuée jusqu'à présent. Vous pourrez par exemple, modifier la couleur de la barre de progression.</p>

<h2 id="Syntaxe">Syntaxe</h2>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">#redbar::-moz-progress-bar {
  background-color: red;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush:html;">&lt;progress id="redbar" value="30" max="100"&gt;30 %&lt;/progress&gt;</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample('Exemples')}}</p>

<h2 id="Spécifications">Spécifications</h2>

<p>Ce pseudo-élément est un pseudo-élément propriétaire lié à Gecko/Mozilla et ne fait partie d'aucune spécification.</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{HTMLElement("progress")}}</li>
 <li>{{cssxref("::-ms-fill")}}</li>
 <li>{{cssxref("::-webkit-progress-bar")}}</li>
 <li>{{cssxref("::-webkit-progress-value")}}</li>
 <li>{{cssxref("::-webkit-progress-inner-element")}}</li>
</ul>
