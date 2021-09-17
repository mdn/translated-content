---
title: alpha-value
slug: Web/CSS/alpha-value
tags:
  - CSS
  - Reference
  - Type de donnée
translation_of: Web/CSS/alpha-value
---
<p>{{CSSRef}}{{draft()}}</p>

<p>Le <a href="/fr/docs/Web/CSS/Types_CSS">type de donnée</a> CSS <strong><code>&lt;alpha-value&gt;</code></strong> représente une valeur qui peut être un nombre ({{cssxref("&lt;number&gt;")}}) ou un pourcentage ({{cssxref("&lt;percentage&gt;")}}) et qui indique le <a href="https://fr.wikipedia.org/wiki/Canal_alpha">canal alpha</a> ou <em>l'opacité</em> d'une couleur.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<p>Si la valeur est fournie comme un nombre, la valeur peut être comprise entre 0 (complètement transparent) et 1 (complètement opaque). Il est possible d'utiliser des valeurs décimales comprises entre ces valeurs. Les valeurs à l'extérieur de cet intervalle sont valides mais elles sont écrétées à 0 ou 1.</p>

<p>Lorsque la valeur est fournie en pourcentage 0% correspond à une transparence complète tandis que 100% correspond à une opacité totale.</p>

<h2 id="Interpolation">Interpolation</h2>

<p>Lorsqu'une animation fait évoluer une valeur de type <code>&lt;alpha-value&gt;</code>, les valeurs sont interpolées comme des nombres réels à point flottant. La vitesse de l'interpolation est déterminée par la <a href="/fr/docs/Web/CSS/timing-function">fonction de temporisation</a> associée à l'animation.</p>

<h2 id="Exemples">Exemples</h2>

<p>Certaines fonctionnalités CSS utilisent des valeurs <code>&lt;alpha-value&gt;</code> dont <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#RGB_colors">les notations fonctionnelles pour les couleurs telles que <code>rgba()</code> et <code>hsla()</code></a> et aussi {{cssxref("shape-image-threshold")}} (qui détermine les pixels à prendre en compte pour une image lorsqu'on souhaite en extraire une forme).</p>

<pre class="brush: css">
/* &lt;rgba()&gt; */
color: rgba(34, 12, 64, 0.6);
color: rgba(34.0 12 64 / 60%);
</pre>

<pre class="brush: css">
/* shape-image-threshold */
shape-image-threshold: 70%;
shape-image-threshold: 0.7;
</pre>

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
   <td>{{SpecName('CSS4 Colors', '#type-def-alpha-value', '&lt;alpha-value&gt;')}}</td>
   <td>{{Spec2('CSS4 Colors')}}</td>
   <td>Aucune modification significative.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Colors', '#alphavaluedt', '&lt;alpha-value&gt;')}}</td>
   <td>{{Spec2('CSS3 Colors')}}</td>
   <td>Introduit le type <code>&lt;alpha-value&gt;</code> ainsi que les notations fonctionnelles <code>rgba()</code> et <code>hsla()</code>.</td>
  </tr>
 </tbody>
</table>
