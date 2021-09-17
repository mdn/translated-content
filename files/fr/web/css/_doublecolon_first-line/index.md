---
title: '::first-line (:first-line)'
slug: Web/CSS/::first-line
tags:
  - CSS
  - Pseudo-element
  - Reference
translation_of: Web/CSS/::first-line
---
<div>{{CSSRef}}</div>

<p>Le <a href="/fr/docs/Web/CSS/Pseudo-elements">pseudo-élément</a> <strong><code>::first-line</code></strong> applique la décoration à la première ligne d'un élément. La quantité de texte sur la première ligne dépend de nombreux facteurs, comme la largeur des éléments ou du document, mais aussi de la taille du texte. Comme tous les pseudo-éléments, les sélecteurs contenant <code>::first-line</code> ne ciblent pas un élément HTML réel.</p>

<pre class="brush: css no-line-numbers">/* Sélectionne la première ligne */
/*  d'un élément &lt;p&gt; */
::first-line {
  color: red;
  text-transform: uppercase;
}</pre>

<p>Une première ligne n'a de sens que dans une <a href="/fr/docs/CSS/Visual_formatting_model#Block-level_elements_and_block_boxes">boîte de type bloc</a>, et ainsi le pseudo-élément <code>::first-line</code> n'a d'effet que sur les éléments dont {{cssxref("display")}} à une valeur de <code>block</code>, <code>inline-block</code>, <code>table-cell</code> ou <code>table-caption</code>. Dans tous les autres cas, <code>::first-line</code> n'a pas d'effet.</p>

<h2 id="Propriétés_utilisables">Propriétés utilisables</h2>

<p>Seul un sous-ensemble de propriétés CSS peut être utilisé dans un bloc de déclaration contenant un sélecteur CSS utilisant le pseudo-élément <code>::first-line</code> :</p>

<ul>
 <li>Toutes les propriétés liées aux polices de caractères : {{cssxref("font")}}, {{cssxref("font-kerning")}}, {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-synthesis")}}, {{cssxref("font-feature-settings")}}, {{cssxref("font-language-override")}}, {{cssxref("font-weight")}}, {{cssxref("font-size")}}, {{cssxref("font-size-adjust")}}, {{cssxref("font-stretch")}} et {{cssxref("font-family")}}</li>
 <li>La propriété {{cssxref("color")}}</li>
 <li>Toutes les propriétés liées à l'arrière-plan : {{cssxref("background-color")}}, {{cssxref("background-clip")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}}, {{cssxref("background-repeat")}}, {{cssxref("background-size")}},  {{cssxref("background-attachment")}} et {{cssxref("background-blend-mode")}}</li>
 <li>{{cssxref("word-spacing")}}, {{cssxref("letter-spacing")}}, {{cssxref("text-decoration")}}, {{cssxref("text-transform")}} et {{cssxref("line-height")}}</li>
 <li>{{cssxref("text-shadow")}}, {{cssxref("text-decoration")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}} et {{cssxref("vertical-align")}}.</li>
</ul>

<p>Comme cette liste sera étendue dans le futur, il est recommandé de ne pas utiliser d'autres propriétés dans un bloc de déclaration, de manière à ce que le CSS reste pérenne.</p>

<div class="note">
  <p><strong>Note :</strong> Dans CSS 2, les pseudo-éléments étaient précédés d'un seul caractère deux-points. Comme les pseudo-classes utilisaient aussi la même convention, ils n'était pas possible de les distinguer. Afin de résoudre cela, CSS 2.1 à changé la convention des pseudo-éléments. Désormais, un pseudo-élément est précédé de deux caractères deux-points, et une pseudo-classe d'un seul.</p>
  <p>Puisque de nombreux navigateurs avaient déjà mis en place la version CSS 2 dans une version publique, tous les navigateurs supportent les deux syntaxes.</p>
  <p>Si les navigateurs anciens doivent être supportés, <code>:first-line</code> est le seul choix viable ; sinon<code>,::first-line</code> est préféré.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="text-transform"><code>text-transform</code></h3>

<p>Toutes les lettres de la première ligne de chaque paragraphe sont en majuscules.</p>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">p::first-line {
  text-transform: uppercase;
}</pre>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;p&gt;
  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore.
&lt;/p&gt;</pre>

<h4 id="Résultat">Résultat</h4>

<p>{{EmbedLiveSample('text-transform', 250, 100)}}</p>

<h3 id="margin-left"><code>margin-left</code></h3>

<p>Ici, l'effet est nul car <code>margin-left</code> ne peut pas être appliquée sur ce pseudo-élément.</p>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css">p::first-line {
  margin-left: 20px;
}</pre>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;p&gt;
  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore.
&lt;/p&gt;</pre>

<h4 id="Résultat_2">Résultat</h4>

<p>{{EmbedLiveSample('margin-left', 250, 100)}}</p>

<h3 id="text-indent"><code>text-indent</code></h3>

<p>Là encore, l'effet est nul, <code>text-indent</code> ne peut pas être appliqué sur ce pseudo-élément.</p>

<h4 id="CSS_3">CSS</h4>

<pre class="brush: css">p::first-line {
  text-indent: 20px;
}</pre>

<h4 id="HTML_3">HTML</h4>

<pre class="brush: html">&lt;p&gt;
  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore.
&lt;/p&gt;</pre>

<h4 id="Résultat_3">Résultat</h4>

<p>{{EmbedLiveSample('text-indent', 250, 100)}}</p>

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
   <td>{{SpecName('CSS4 Pseudo-Elements', '#first-line-pseudo', '::first-line')}}</td>
   <td>{{Spec2('CSS4 Pseudo-Elements')}}</td>
   <td>La définition est affinée pour indiquer où ce pseudo-élément peut correspondre. Les propriétés possibles sont généralisées (fontes, décoration, disposition en ligne et {{cssxref("opacity")}}). Définit l'héritage de <code>::first-letter</code>.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Text Decoration', '#text-shadow', 'text-shadow with ::first-line')}}</td>
   <td>{{Spec2('CSS3 Text Decoration')}}</td>
   <td>La propriété {{cssxref("text-shadow")}} peut être utilisée avec <code>::first-letter</code>.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Selectors', '#first-line', '::first-line')}}</td>
   <td>{{Spec2('CSS3 Selectors')}}</td>
   <td>La définition de « première ligne » a été reformulée. La syntaxe utilise désormais deux fois le caractère deux-points.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'selector.html#first-line-pseudo', '::first-line')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>Aucune modification.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS1', '#the-first-line-pseudo-element', '::first-line')}}</td>
   <td>{{Spec2('CSS1')}}</td>
   <td>La définition initiale qui utilise la syntaxe avec un seul caractère deux-points.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.selectors.first-line")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref("::first-letter")}}</li>
</ul>
