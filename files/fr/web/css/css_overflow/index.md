---
title: CSS Overflow
slug: Web/CSS/CSS_Overflow
tags:
  - CSS
  - CSS Overflow
  - Reference
translation_of: Web/CSS/CSS_Overflow
---
<p>{{CSSRef}}<br>
 Le module de spécification <em><strong>CSS Overflow</strong></em> décrit les fonctionnalités CSS relatives au dépassement et au défilement du contenu pour les médias visuels. En CSS, le dépassement se produit lorsque le contenu d'une boîte s'étend au-delà des bords de la boîte.</p>

<h2 id="Dépassement_au_dessin_ink_overflow_et_dépassement_défilable_scrollable_overflow">Dépassement au dessin (<em>ink overflow</em>) et dépassement défilable (<em>scrollable overflow</em>)</h2>

<p>Il existe deux types de dépassement en CSS. Le premier, intitulé en anglais <em><strong>ink overflow</strong></em> (qu'on pourrait traduire par « dépassement pour le dessin ») indique le dépassement des effets visuels qui ne modifient pas la disposition ou le dimensionnement (ex. les ombres des boîtes, les bordures des images, les décorations du texte, les caractères avec un jambage qui dépasse, etc.).</p>

<p>Le second type de dépassement, <em><strong>scrollable overflow</strong></em> (ou dépassement défilable) se produit lorsque du contenu se situe hors de la boîte et qu'il est nécessaire de fournir un mécanisme pour faire défiler le contenu afin de pouvoir le consulter. Les propriétés de ce module de spécification décrivent ce qui se passe lorsque le contenu dépasse d'une boîte. </p>

<h2 id="Exemple">Exemple</h2>

<p>L'exempel interactif suivant illustre comment la modification de la valeur de la propriété <code>overflow</code> change la façon dont est géré le dépassement pour une boîte avec une hauteur fixe.</p>

<div>{{EmbedInteractiveExample("pages/css/overflow.html")}}</div>

<h2 id="Référence">Référence</h2>

<h3 id="Propriétés_CSS">Propriétés CSS</h3>

<ul>
 <li>{{CSSxRef("overflow")}}</li>
 <li>{{CSSxRef("overflow-block")}}</li>
 <li>{{CSSxRef("overflow-inline")}}</li>
 <li>{{CSSxRef("overflow-x")}}</li>
 <li>{{CSSxRef("overflow-y")}}</li>
 <li>{{CSSxRef("text-overflow")}}</li>
 <li>{{CSSxRef("block-overflow")}} {{experimental_inline}}</li>
 <li>{{CSSxRef("line-clamp")}} {{experimental_inline}}</li>
 <li>{{CSSxRef("max-lines")}} {{experimental_inline}}</li>
 <li>{{CSSxRef("continue")}} {{experimental_inline}}</li>
</ul>

<h3 id="Propriétés_spécifiques">Propriétés spécifiques</h3>

<ul>
 <li>{{CSSxRef("-webkit-line-clamp")}} {{non-standard_inline}}</li>
</ul>

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
   <td>{{SpecName('CSS3 Overflow', '#propdef-overflow', 'overflow')}}</td>
   <td>{{Spec2('CSS3 Overflow')}}</td>
   <td>Modification de la syntaxe afin de permettre d'utilise un ou deux mots-clés (plutôt qu'un seul auparavant).</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'visufx.html#overflow', 'overflow')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>Les propriétés qui permettent de mettre en forme les barres de défilement/ascenceurs : {{CSSxRef("scrollbar-width")}} et {{CSSxRef("scrollbar-color")}}</li>
</ul>
