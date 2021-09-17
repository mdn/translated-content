---
title: grid
slug: Web/CSS/@media/grid
tags:
  - CSS
  - Caractéristique média
  - Reference
translation_of: Web/CSS/@media/grid
---
<div>{{CSSRef}}</div>

<p><strong><code>grid</code></strong> est une caractéristique média CSS (cf {{cssxref("@media")}}) dont la valeur est un booléen qui indique si l'appareil d'affichage fonctionne grâce à une grille (ex. un terminal ou un appareil qui ne dispose que d'une police à chasse fixe) ou grâce à une matrice d'affichage (avec des pixels « classiques »).</p>

<p>La plupart des ordinateurs actuels possèdent des écrans matriciels. Parmi les appareils qui utilisent un affichage en grille, on trouve les appareils qui n'affichent que du texte dans un terminal ou des téléphones simples avec une seule police fixe.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<p>La caractéristique <code>grid</code> est une valeur booléenne (<code>0</code> ou <code>1</code>) (type {{cssxref("&lt;mq-boolean&gt;")}}) qui indique si l'appareil d'affichage fonctionne selon une grille.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p class="unknown"&gt;Impossible de savoir si l'affichage fonctionne sur une grille. :-(&lt;/p&gt;
&lt;p class="bitmap"&gt;L'appareil dispose d'un affichage matriciel.&lt;/p&gt;
&lt;p class="grid"&gt;L'appareil utilise une grille pour l'affichage !&lt;/p&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">:not(.unknown) {
  color: lightgray;
}

@media (grid: 0) {
  .unknown {
    color: lightgray;
  }

  .bitmap {
    color: red;
    text-transform: uppercase;
  }
}

@media (grid: 1) {
  .unknown {
    color: lightgray;
  }

  .grid {
    color: black;
    text-transform: uppercase;
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
   <td>{{SpecName('CSS3 Media Queries', '#grid', 'grid')}}</td>
   <td>{{Spec2('CSS3 Media Queries')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.at-rules.media.grid")}}</p>
