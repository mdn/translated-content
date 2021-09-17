---
title: <filter-function>
slug: Web/CSS/filter-function
tags:
  - CSS
  - Reference
  - Type
translation_of: Web/CSS/filter-function
---
<div>{{CSSRef}}</div>

<p>Le type de donnée <code><strong>&lt;filter-function&gt;</strong></code> représente un effet graphique qui peut modifier l'apparence d'une image. Il est notamment utilisé avec les propriétés {{cssxref("filter")}} et {{cssxref("backdrop-filter")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<p>Une valeur de type <code>&lt;filter-function&gt;</code> se construit avec l'une des fonctions listées ci-après. Chaque fonction utilise un argument et si celui-ci est invalide, aucun filtre n'est appliqué.</p>

<dl>
 <dt>{{cssxref("filter-function/blur", "blur()")}}</dt>
 <dd>Ajoute un flou sur l'image.</dd>
 <dt>{{cssxref("filter-function/brightness", "brightness()")}}</dt>
 <dd>Rend l'image plus claire ou plus sombre.</dd>
 <dt>{{cssxref("filter-function/contrast", "contrast()")}}</dt>
 <dd>Augmente ou diminue le contraste de l'image.</dd>
 <dt>{{cssxref("filter-function/drop-shadow", "drop-shadow()")}}</dt>
 <dd>Applique une ombre portée derrière l'image.</dd>
 <dt>{{cssxref("filter-function/grayscale", "grayscale()")}}</dt>
 <dd>Convertit l'image en niveaux de gris.</dd>
 <dt>{{cssxref("filter-function/hue-rotate", "hue-rotate()")}}​​​​​​​​​​​​​​</dt>
 <dd>Modifie la teinte globale de l'image.</dd>
 <dt>{{cssxref("filter-function/invert", "invert()")}}</dt>
 <dd>Inverse les couleurs de l'image.</dd>
 <dt>{{cssxref("filter-function/opacity", "opacity()")}}</dt>
 <dd>Rend l'image transparente.</dd>
 <dt>{{cssxref("filter-function/saturate", "saturate()")}}</dt>
 <dd>Sursature ou désature l'image.</dd>
 <dt>{{cssxref("filter-function/sepia", "sepia()")}}</dt>
 <dd>Convertit l'image en sépia.</dd>
</dl>

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
   <td>{{SpecName('Filters 1.0', '#typedef-filter-function', '&lt;filter-function&gt;')}}</td>
   <td>{{Spec2('Filters 1.0')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>Les propriétés qui utilisent ce type de donnée :
  <ul>
   <li>{{cssxref("filter")}}</li>
   <li>{{cssxref("backdrop-filter")}}</li>
  </ul>
 </li>
</ul>
