---
title: '-moz-orient'
slug: Web/CSS/-moz-orient
tags:
  - CSS
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/-moz-orient
---
<div>{{CSSRef}}{{Non-standard_header}}</div>

<p>La propriété <strong><code>-moz-orient</code></strong> définit l'orientation de l'élément sur lequel elle est appliquée.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<p>La propriété <code>moz-orient</code> est définie avec un mot-clé parmi ceux de la liste ci-après.</p>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>inline</code></dt>
 <dd>L'élément est affiché dans la même direction que l'axe du texte : il est horizontal si le mode d'écriture est horizontal et vertical pour un mode d'écriture vertical.</dd>
 <dt><code>block</code></dt>
 <dd>L'élément est affiché dans la direction perpendiculaire à l'axe du texte : il est vertical si le mode d'écriture est horizontal et horizontal pour un mode d'écriture vertical.</dd>
 <dt><code>horizontal</code></dt>
 <dd>L'élément est affiché horizontalement.</dd>
 <dt><code>vertical</code></dt>
 <dd>L'élément est affiché verticalement.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;
  La barre de progression suivante est
  horizontale (le comportement par défaut) :
&lt;/p&gt;
&lt;progress max="100" value="75"&gt;&lt;/progress&gt;

&lt;p&gt;
  La barre de progression suivante
  est verticale :
&lt;/p&gt;
&lt;progress class="vert" max="100" value="75"&gt;&lt;/progress&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">.vert {
  -moz-orient: vertical;
  width: 16px;
  height: 150px;
}</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples","200","360")}}</p>

<h2 id="Spécifications">Spécifications</h2>

<p>Bien que <a href="https://lists.w3.org/Archives/Public/www-style/2014Jun/0396.html">proposée</a> au W3C, cette propriété ne fait partie d'aucune spécification standard. C'est donc une propriété propriétaire liée à Mozilla/Gecko.</p>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.-moz-orient")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref("box-orient")}}</li>
</ul>
