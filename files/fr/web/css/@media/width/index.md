---
title: width
slug: Web/CSS/@media/width
tags:
  - CSS
  - Caractéristique média
  - Reference
translation_of: Web/CSS/@media/width
---
<div>{{CSSRef}}</div>

<p><strong><code>width</code></strong> est une caractéristique média CSS (cf. {{cssxref("@media")}}) qui permet d'appliquer des styles différents en fonction de la largeur de la zone d'affichage (<em>viewport</em>) ou de la largeur de la page (pour <a href="/fr/docs/Web/CSS/M%C3%A9dia_pagin%C3%A9s">les média paginés</a>). La largeur est exprimée comme une longueur CSS (type {{cssxref("&lt;length&gt;")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<p><strong><code>width</code></strong> est une valeur décrivant la largeur d'affichage, les versions préfixées <strong><code>min-width</code></strong> et <code><strong>max-width</strong></code> peuvent également être utilisées afin de décrire la largeur minimale (resp. la largeur maximale).</p>

<pre class="brush: css">/* Largeur exacte */
@media (width: 300px) {}

/* Un viewport avec une largeur minimale */
@media (min-width: 50em) {}

/* Un viewport avec une largeur maximale */
@media (max-width: 1000px) {}
</pre>

<h2 id="Exemples">Exemples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div&gt;Observez cet élément lorsque vous redimensionnez la largeur du viewport.&lt;/div&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">/* Largeur exacte */
@media (width: 360px) {
  div {
    color: red;
  }
}

/* Largeur minimale */
@media (min-width: 35rem) {
  div {
    background: yellow;
  }
}

/* Largeur maximale */
@media (max-width: 50rem) {
  div {
    border: 2px solid blue;
  }
}
</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample('Exemples','90%')}}</p>

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
   <td>{{SpecName('CSS4 Media Queries', '#width', 'width')}}</td>
   <td>{{Spec2('CSS4 Media Queries')}}</td>
   <td>La valeur peut désormais être négative (ce qui correspond à un booléen faux).</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Media Queries', '#width', 'width')}}</td>
   <td>{{Spec2('CSS3 Media Queries')}}</td>
   <td>Définition initiale. La valeur ne peut pas être négative.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.at-rules.media.width")}}</p>
