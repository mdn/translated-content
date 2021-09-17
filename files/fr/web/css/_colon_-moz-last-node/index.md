---
title: ':-moz-last-node'
slug: 'Web/CSS/:-moz-last-node'
tags:
  - CSS
  - Non-standard
  - Pseudo-classe
  - Reference
translation_of: 'Web/CSS/:-moz-last-node'
---
<div>{{Non-standard_header}}{{CSSRef}}</div>

<p>La pseudo-classe <strong><code>:-moz-last-node</code></strong> correspond à un élément si celui-ci est le dernier nœud d'un autre élément. Cette pseudo-classe est différente de {{cssxref(":last-child")}} car elle ne cible pas le dernier élément qui possède du texte (hors blancs).</p>

<div class="note">
  <p><strong>Note :</strong> Tout blanc qui serait à la fin d'un élément est ignoré pour la détermination de <code>:-moz-last-node</code>.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>span</var>:-moz-last-node { <em>propriétés de mise en forme</em> }
</pre>

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush:css">span:-moz-last-node {
  background-color: lime;
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush:html">&lt;p&gt;
  &lt;span&gt;:-moz-first-node&lt;/span&gt;
  &lt;span&gt;:-moz-last-node&lt;/span&gt;
&lt;/p&gt;
&lt;p&gt;
  &lt;span&gt;Cet élément n'est pas ciblé car il est suivi par du texte.&lt;/span&gt;
  Bip bop bip bop.
&lt;/p&gt;
</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples", "220", "20")}}</p>

<h2 id="Spécifications">Spécifications</h2>

<p>Cette pseudo-classe est une pseudo-classe propriétaire liée à Gecko/Mozilla et ne fait partie d'aucune spécification.</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref(":-moz-first-node")}}</li>
 <li>{{cssxref(":last-child")}}</li>
</ul>
