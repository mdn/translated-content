---
title: ':-moz-locale-dir(rtl)'
slug: 'Web/CSS/:-moz-locale-dir(rtl)'
tags:
  - CSS
  - Droite-à-gauche
  - Localisation
  - Non-standard
  - Pseudo-classe
  - Reference
translation_of: 'Web/CSS/:-moz-locale-dir(rtl)'
---
<div>{{Non-standard_header}}{{CSSRef}}{{gecko_minversion_header("1.9.2")}}</div>

<p>La <a href="/fr/docs/Web/CSS/Pseudo-classes">pseudo-classe CSS</a> <strong><code>:-moz-locale-dir(rtl)</code></strong> correspond à un élément si l'interface utilisateur est affichée de droite à gauche. Elle est déterminée par la préférence <code>intl.uidirection.</code><em><code>locale</code></em> (où <em><code>locale</code></em> est la langue courante) qui est fixée à <code>"rtl"</code>.</p>

<p>Cela permet aux extensions (et thèmes) d'adapter facilement leur interface utilisateur basée sur les besoins de la langue de l'utilisateur. Cela peut varier d'une fenêtre à une autre et même d'un onglet à un autre. Cela permet aussi aux extensions de fonctionner même si elles ne prennent pas en compte la langue de l'utilisateur par défaut, puisqu'elles peuvent prendre en compte les agencements de gauche à droite et de droite à gauche sans être inquiétées par les spécificités de la langue.</p>

<p>Ce sélecteur ne fonctionne pas correctement pour des documents HTML ; il ne fait jamais correspondre, peu importe si la langue de l'interface utilisateur va de gauche à droite ou de droite à gauche.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">p:-moz-locale-dir(rtl) {
  color: red;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;En utilisant une interface de droite à gauche, ce texte sera rouge.&lt;/p&gt;
</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples")}}</p>

<h2 id="Spécifications">Spécifications</h2>

<p>Cette pseudo-classe est une pseudo-classe propriétaire liée à Gecko/Mozilla et ne fait partie d'aucune spécification.</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref(":-moz-locale-dir(ltr)")}}</li>
 <li><a href="/en-US/docs/Making_Sure_Your_Theme_Works_with_RTL_Locales">Garantir le fonctionnement de votre thème avec les locales RTL</a></li>
</ul>
