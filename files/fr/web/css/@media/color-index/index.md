---
title: color-index
slug: Web/CSS/@media/color-index
tags:
  - CSS
  - Caractéristique média
  - Reference
translation_of: Web/CSS/@media/color-index
---
<div>{{CSSRef}}</div>

<p><strong><code>color-index</code></strong> est une caractéristique média CSS (cf. {{cssxref("@media")}}) dont la valeur correspond au nombre d'entrées que comporte la palette de couleurs du périphérique de sortie, ou zéro si ce dernier n'en utilise pas.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<p>La caractéristique <code>color-index</code> est définie sous la forme d'un entier (type {{cssxref("&lt;integer&gt;")}}) et représente le nombre d'entrées de la palette de couleurs de l'appareil d'affichage (ou zéro si l'appareil n'utilise pas une telle palette). C'est une caractéristique d'intervalle ce qui signifie qu'on peut utiliser les variantes préfixées <strong><code>min-color-index</code></strong> et <code><strong>max-color-index</strong></code> afin cibler des règles en fonction d'un minimum ou d'un maximum.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Exemple_simple">Exemple simple</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;p&gt;Un test simple.&lt;/p&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">p {
  color: black;
}

@media (color-index) {
  p {
    color: red;
  }
}

@media (min-color-index: 15000) {
  p {
    color: #1475ef;
  }
}</pre>

<h4 id="Résultat">Résultat</h4>

<p>{{EmbedLiveSample("Exemple_simple")}}</p>

<h3 id="Feuille_de_style_personnalisée">Feuille de style personnalisée</h3>

<p>Ce fragment HTML permet d'appliquer une feuille de style spécifique pour les appareils qui disposent d'au moins 256 couleurs.</p>

<pre class="brush: html"><code>&lt;link rel="stylesheet" href="http://toto.truc.com/base.css" /&gt;
&lt;link rel="stylesheet" media="all and (min-color-index: 256)" href="http://toto.truc.com/feuille_style_couleurs.css" /&gt;</code></pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Etat</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSS4 Media Queries', '#color-index', 'color-index')}}</td>
   <td>{{Spec2('CSS4 Media Queries')}}</td>
   <td>La valeur peut désormais être négative (ce qui correspond à un booléen faux).</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Media Queries', '#color-index', 'color-index')}}</td>
   <td>{{Spec2('CSS3 Media Queries')}}</td>
   <td>Définition initiale, la valeur ne peut pas être négative.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.at-rules.media.color-index")}}</p>
