---
title: device-aspect-ratio
slug: Web/CSS/@media/device-aspect-ratio
tags:
  - CSS
  - Caractéristique média
  - Déprécié
  - Reference
translation_of: Web/CSS/@media/device-aspect-ratio
---
<div>{{CSSRef}}{{deprecated_header}}</div>

<p><strong><code>device-aspect-ratio</code></strong> est une caractéristique média (cf. {{cssxref("@media")}}) dont la valeur correspond au ratio entre la largeur et la hauteur de l'appareil d'affichage.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<p>La caractéristique <code>device-aspect-ratio</code> est définie sous la forme d'un ratio (type CSS {{cssxref("&lt;ratio&gt;")}}). C'est une caractéristique d'intervalle ce qui signifie qu'on peut utiliser les variantes préfixées <strong><code>min-device-aspect-ratio</code></strong> et <code><strong>max-device-aspect-ratio</strong></code> afin de cibler des règles en fonction de minimum ou maximum.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: css">article {
  padding: 1rem;
}

@media screen and (min-device-aspect-ratio: 16/9) {
  article {
    padding: 1rem 5vw;
  }
}</pre>

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
   <td>{{SpecName('CSS4 Media Queries', '#device-aspect-ratio', 'device-aspect-ratio')}}</td>
   <td>{{Spec2('CSS4 Media Queries')}}</td>
   <td>Dépréciation dans la spécification de niveau 4 pour les requêtes média.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Media Queries', '#device-aspect-ratio', 'device-aspect-ratio')}}</td>
   <td>{{Spec2('CSS3 Media Queries')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.at-rules.media.device-aspect-ratio")}}</p>
