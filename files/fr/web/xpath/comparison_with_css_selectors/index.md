---
title: Comparison entre les sélecteurs CSS et XPath
slug: Web/XPath/Comparison_with_CSS_selectors
tags:
  - CSS
  - Draft
  - NeedsContent
  - Reference
  - XPath
translation_of: Web/XPath/Comparison_with_CSS_selectors
original_slug: Web/CSS/Sélecteurs_CSS/Comparison_with_XPath
---
<div>{{CSSRef("Selectors")}}{{QuickLinksWithSubpages("/fr/docs/Web/XPath")}}{{Draft}}</div>

<p>Dans cet article, nous listerons les différences entre les sélecteurs CSS et les fonctionnalités XPath afin que les développeurs web puissent choisir l'outil le plus pertinent.</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col"><a href="/fr/docs/Web/XPath">Fonctionnalité XPath</a></th>
   <th scope="col"><a href="/fr/docs/Web/CSS/Sélecteurs_CSS">Équivalent CSS</a></th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>Axe <a href="/fr/docs/XPath/Axes/ancestor"><code>ancestor</code></a>, <a href="/fr/docs/XPath/Axes/parent"><code>parent</code></a> ou <a href="/fr/docs/XPath/Axes/preceding-sibling"><code>preceding-sibling</code></a></td>
   <td>{{CSSxRef(":has",":has()")}} selector {{experimental_inline}}</td>
  </tr>
  <tr>
   <td>Axe <a href="/fr/docs/XPath/Axes/attribute"><code>attribute</code></a></td>
   <td><a href="/en-US/docs/Web/CSS/Attribute_selectors">Sélecteurs d'attribut</a></td>
  </tr>
  <tr>
   <td>Axe <a href="/fr/docs/XPath/Axes/child"><code>child</code></a></td>
   <td><a href="/fr/docs/Web/CSS/Sélecteurs_enfant">Sélecteurs d'enfant</a></td>
  </tr>
  <tr>
   <td>Axe <a href="/fr/docs/XPath/Axes/descendant"><code>descendant</code></a></td>
   <td><a href="/fr/docs/Web/CSS/Sélecteurs_descendant">Sélecteur de descendant</a></td>
  </tr>
  <tr>
   <td>Axe <a href="/fr/docs/XPath/Axes/following-sibling"><code>following-sibling</code></a></td>
   <td><a href="/fr/docs/Web/CSS/Sélecteurs_de_voisins_généraux">Sélecteur de voisin général</a> ou <a href="/fr/docs/Web/CSS/Sélecteur_de_voisin_direct">sélecteur de voisin direct</a></td>
  </tr>
  <tr>
   <td>Axe <a href="/fr/docs/XPath/Axes/self"><code>self</code></a></td>
   <td>Sélecteur {{CSSxRef(":scope")}} ou {{CSSxRef(":host")}}</td>
  </tr>
 </tbody>
</table>
