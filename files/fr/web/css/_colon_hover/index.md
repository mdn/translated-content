---
title: ':hover'
slug: Web/CSS/:hover
tags:
  - CSS
  - Pseudo-classe
  - Reference
translation_of: Web/CSS/:hover
---
<div>{{CSSRef}}</div>

<p>La <a href="/fr/docs/Web/CSS/Pseudo-classes">pseudo-classe</a> <strong><code>:hover</code></strong> permet de spécifier l'apparence d'un élément au moment où l'utilisateur le survole avec le pointeur, sans nécessairement l'activer.</p>

<pre class="brush: css no-line-numbers">/* Cible n'importe quel élément &lt;a&gt; lorsque  */
/* celui-ci est survolé */
a:hover {
  background-color: gold;
}</pre>

<p>La mise en forme ciblée par cette pseudo-classe peut être surchargée par d'autres pseudo-classes relatives aux liens hypertextes comme {{cssxref(":link")}}, {{cssxref(":visited")}}, et {{cssxref(":active")}}, apparaissant dans des règles subséquentes. Pour décorer les liens sans effet de bord problématique, on placera la règle <code>:hover</code> après les règles <code>:link</code> et <code>:visited</code> mais avant la règle <code>:active</code> (l'ordre est  <code>:link</code> — <code>:visited</code> — <code>:hover</code> — <code>:active</code> – un moyen mnémotechnique est de se souvenir des initiales LVHA) tandis que l'ordre de la règle {{cssxref(":focus")}} est indifférent.</p>

<p>La pseudo-classe <code>:hover</code> peut être appliquée à n'importe quel <a href="/fr/docs/Web/CSS/Pseudo-elements">pseudo-élément</a>. {{experimental_inline}}</p>

<div class="note">
  <p><strong>Note :</strong> sur les écrans tactiles, <code>:hover</code> est problématique voire impossible. La pseudo-classe <code>:hover</code> n'est jamais valide, ou seulement pendant un très court instant après avoir touché l'élément. Puisque les appareils à écrans tactiles sont très courants, il est important que les développeurs web ne placent pas de contenu accessible seulement lors du survol, puisque ce contenu sera caché pour les utilisateurs de tels appareils.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">a:hover {
  background-color: gold;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;
  &lt;a href="#"&gt;Ce lien sera écrit sur un fond doré lors du survol.&lt;/a&gt;
&lt;/p&gt;</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample('Exemples')}}</p>

<div class="note">
<p><strong>Note :</strong> On peut utiliser la pseudo-classe <code>:checked</code> dans une galerie d'images afin d'afficher une version agrandie de l'image lorsqu'on survole la vignette.</p>
</div>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Commentaires</th>
   <th scope="col">Retours</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'scripting.html#selector-hover', ':hover')}}</td>
   <td> </td>
   <td><a href="https://github.com/whatwg/html/issues"><em>Issues</em> GitHub du WHATWG HTML (en anglais)</a></td>
  </tr>
  <tr>
   <td>{{SpecName('CSS4 Selectors', '#the-hover-pseudo', ':hover')}}</td>
   <td>Permet d'appliquer <code>:hover</code> à n'importe quel pseudo-élément.</td>
   <td><a href="https://github.com/w3c/csswg-drafts/issues">Issues GitHub pour les brouillons du groupe de travail CSS (en anglais)</a></td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Selectors', '#the-user-action-pseudo-classes-hover-act', ':hover')}}</td>
   <td> </td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'selector.html#dynamic-pseudo-classes', ':hover')}}</td>
   <td>Définition initiale.</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.selectors.hover")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="https://code.google.com/p/chromium/issues/detail?id=370155">Bogue Chromium #370155 : Don't make :hover sticky on tap on sites that set a mobile viewport</a></li>
 <li><a href="https://code.google.com/p/chromium/issues/detail?id=306581">Bogue Chromium #306581 : Immediately show hover and active states on touch when page isn't scrollable</a></li>
</ul>
