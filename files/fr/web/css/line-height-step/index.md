---
title: line-height-step
slug: Web/CSS/line-height-step
tags:
  - CSS
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/line-height-step
---
<div>{{CSSRef}}{{Non-standard_header}}</div>

<p>La propriété <strong><code>line-height-step</code></strong> définit le pas de hauteur des boîtes de ligne. Quand le pas est positif, les hauteurs des boîtes de ligne sont arrondies au pas le plus proche. Les valeurs négatives sont invalides.</p>

<pre class="brush:css no-line-numbers">/* Valeurs avec une longueur */
line-height-step: 18pt;
</pre>

<h2 id="Syntaxe">Syntaxe</h2>

<p>La propriété <code>line-height-step</code> peut être définie avec une valeur de type <code><a href="#&lt;length>">&lt;length&gt;</a></code>.</p>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>&lt;length&gt;</code></dt>
 <dd>La longueur indiquée est utilisée pour calculer le « pas » pour la hauteur de la boîte de chaque ligne. Voir {{cssxref("&lt;length&gt;")}} pour plus d'informations sur ce type de valeur.</dd>
</dl>

<h3 id="Formal_syntax">Formal syntax</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple suivant, la hauteur de la boîte des lignes pour chaque paragraphe est arrondie à l'unité supérieure. La boîte de la ligne pour l'élément <code>&lt;h1&gt;</code> ne tient pas sur une unité et en occupe donc deux (mais est toujours centrée sur ces deux unités).</p>

<pre class="brush: css">:root {
  font-size: 12pt;
  --my-grid: 18pt;
  line-height-step: var(--my-grid);
}
h1 {
  font-size: 20pt;
  margin-top: calc(2 * var(--my-grid));
}</pre>

<p>Voici le résultat obtenu avec une capture d'écran :</p>

<p><img alt="How the line-height-step property affects the appearance of text." src="line-grid-center.png"></p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSS Rhythmic Sizing', '#line-height-step', 'line-height-step')}}</td>
   <td>{{Spec2('CSS Rhythmic Sizing')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.line-height-step")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref("font")}}</li>
 <li>{{cssxref("font-size")}}</li>
 <li>{{cssxref("line-height")}}</li>
</ul>
