---
title: ':-moz-locale-dir(ltr)'
slug: 'Web/CSS/:-moz-locale-dir(ltr)'
tags:
  - CSS
  - Localisation
  - Non-standard
  - Pseudo-classe
  - Reference
  - l10n
translation_of: 'Web/CSS/:-moz-locale-dir(ltr)'
---
<div>{{Non-standard_header}}{{CSSRef}}{{gecko_minversion_header("1.9.2")}}</div>

<p>La pseudo-classe <strong><code>:-moz-locale-dir(ltr)</code></strong> correspond à un élément si l'interface utilisateur est affichée de gauche à droite. Ceci est déterminé par la préférence <code>intl.uidirection.</code><em><code>locale</code></em> (où <em><code>locale</code></em> est le language courant) qui est fixé à "ltr".</p>

<p>Cela permet aux extensions (et thèmes) d'adapter facilement leur interface utilisateur basée sur les besoins du langage de l'utilisateur. Cela peut varier d'une fenêtre à une autre et même d'un onglet à un autre. Cela permet aussi aux extensions de fonctionner même si elles ne prennent pas en compte le langage de l'utilisateur par défaut, puisqu'elles peuvent prendre en compte les agencements de gauche à droite et de droite à gauche sans être inquiétée par les spécificités du langage.</p>

<p>Ce sélecteur ne fonctionne pas pour les documents l'HTML; il fait correspondre toujours, peu importe si le langage de l'UI va de gauche à droite ou de droite à gauche.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;Sur une interface allant de gauche à droite, ce texte devrait être rouge.&lt;/p&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">p:-moz-locale-dir(ltr) {
  color: red;
}</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples")}}</p>

<h2 id="Spécifications">Spécifications</h2>

<p>Cette pseudo-classe est une pseudo-classe propriétaire liée à Gecko/Mozilla et ne fait partie d'aucune spécification.</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref(":dir",":dir(…)")}}</li>
 <li>{{cssxref(":-moz-locale-dir(rtl)")}}</li>
</ul>
