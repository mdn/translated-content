---
title: resolution
slug: Web/CSS/@media/resolution
tags:
  - CSS
  - Caractéristique média
  - Reference
translation_of: Web/CSS/@media/resolution
---
<div>{{CSSRef}}</div>

<p><strong><code>resolution</code></strong> est une caractéristique média CSS dont la valeur représente la densité de pixels de l'appareil d'affichage.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<p>La caractéristique <code>resolution</code> est une valeur de type {{cssxref("&lt;resolution&gt;")}} qui représente la densité de pixels de l'appareil d'affichage. C'est une caractéristique d'intervalle, cela signifie qu'on peut utiliser les variantes préfixées <code><strong>min-resolution</strong></code> et <strong><code>max-resolution</code></strong> afin d'établir des règles selon un minimum ou un maximum.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;Un test pour la densité de pixels de votre appareil.&lt;/p&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">/* Résolution exacte  */
@media (resolution: 150dpi) {
  p {
    color: red;
  }
}

/* Résolution minimale */
@media (min-resolution: 72dpi) {
  p {
    text-decoration: underline;
  }
}

/* Résolution maximale */
@media (max-resolution: 300dpi) {
  p {
    background: yellow;
  }
}</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples")}}</p>

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
   <td>{{SpecName('CSS3 Media Queries', '#resolution', 'resolution')}}</td>
   <td>{{Spec2('CSS3 Media Queries')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.at-rules.media.resolution")}}</p>
