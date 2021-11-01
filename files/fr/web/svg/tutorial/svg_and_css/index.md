---
title: SVG et CSS
slug: Web/SVG/Tutorial/SVG_and_CSS
tags:
  - CSS
  - CSS:Getting_Started
  - Example
  - Guide
  - Intermediate
  - NeedsUpdate
  - SVG
  - Web
translation_of: Web/SVG/Tutorial/SVG_and_CSS
original_slug: CSS/Premiers_pas/Graphiques_SVG
---
<div>Cette page illustre l'application de CSS sur des documents <a href="/fr/docs/Web/SVG">SVG</a>, le langage spécialisé dans la création d'éléments graphiques vectoriels.</div>

<p>Nous allons voir par la suite un exemple que vous pourrez copier pour l'exécuter dans votre navigateur (à la condition que celui-ci soit compatible avec SVG).</p>

<div class="note">
  <p><strong>Note :</strong> Les éléments référencés par des éléments <a href="/fr/docs/Web/SVG/Element/use"><code>&lt;use&gt;</code></a> héritent des styles de cet élément. Pour leur appliquer des styles différents, il faut donc utiliser <a href="/fr/docs/Web/CSS/CSS_Variables">les propriétés CSS personnalisées (<i>custom properties</i>)</a>.</p>
</div>

<h2 id="example">Exemple</h2>

<p>Créez un nouveau document SVG en tant que fichier texte brut, <code>doc.svg</code>. Copiez et collez le contenu qui suit, en vous assurant de faire défiler le texte pour obtenir l'intégralité de l'exemple :</p>

<pre class="brush: html">&lt;svg width="600px" height="600px" viewBox="-300 -300 600 600"
  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"&gt;

&lt;title&gt;Démonstration SVG&lt;/title&gt;
&lt;desc&gt;Démarrer avec CSS et SVG&lt;/desc&gt;

&lt;defs&gt;
  &lt;radialGradient id="fade" cx="0" cy="0" r="200"
      gradientUnits="userSpaceOnUse"&gt;
    &lt;stop id="fade-stop-1" offset="33%"/&gt;
    &lt;stop id="fade-stop-2" offset="95%"/&gt;
  &lt;/radialGradient&gt;
&lt;/defs&gt;

&lt;text id="heading" x="-280" y="-270"&gt;Démonstration SVG&lt;/text&gt;
&lt;text  id="caption" x="-280" y="-250"&gt;Déplacez le pointeur de
 votre souris sur la fleur.&lt;/text&gt;

&lt;g id="flower"&gt;
  &lt;circle id="overlay" cx="0" cy="0" r="200" stroke="none" fill="url(#fade)"/&gt;

  &lt;g id="outer-petals"&gt;
    &lt;g class="quadrant"&gt;
      &lt;g class="segment"&gt;
        &lt;path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/&gt;
        &lt;path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/&gt;
      &lt;/g&gt;
      &lt;g class="segment" transform="rotate(18)"&gt;
        &lt;path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/&gt;
        &lt;path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/&gt;
      &lt;/g&gt;
      &lt;g class="segment" transform="rotate(36)"&gt;
        &lt;path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/&gt;
        &lt;path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/&gt;
      &lt;/g&gt;
      &lt;g class="segment" transform="rotate(54)"&gt;
        &lt;path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/&gt;
        &lt;path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/&gt;
      &lt;/g&gt;
      &lt;g class="segment" transform="rotate(72)"&gt;
        &lt;path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/&gt;
        &lt;path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/&gt;
      &lt;/g&gt;
    &lt;/g&gt;

    &lt;g class="quadrant"&gt;
      &lt;g class="segment" transform="rotate(90)"&gt;
        &lt;path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/&gt;
        &lt;path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/&gt;
      &lt;/g&gt;
      &lt;g class="segment" transform="rotate(108)"&gt;
        &lt;path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/&gt;
        &lt;path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/&gt;
      &lt;/g&gt;
      &lt;g class="segment" transform="rotate(126)"&gt;
        &lt;path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/&gt;
        &lt;path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/&gt;
      &lt;/g&gt;
      &lt;g class="segment" transform="rotate(144)"&gt;
        &lt;path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/&gt;
        &lt;path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/&gt;
      &lt;/g&gt;
      &lt;g class="segment" transform="rotate(162)"&gt;
        &lt;path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/&gt;
        &lt;path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/&gt;
      &lt;/g&gt;
    &lt;/g&gt;

    &lt;g class="quadrant"&gt;
      &lt;g class="segment" transform="rotate(180)"&gt;
        &lt;path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/&gt;
        &lt;path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/&gt;
      &lt;/g&gt;
      &lt;g class="segment" transform="rotate(198)"&gt;
        &lt;path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/&gt;
        &lt;path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/&gt;
      &lt;/g&gt;
      &lt;g class="segment" transform="rotate(216)"&gt;
        &lt;path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/&gt;
        &lt;path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/&gt;
      &lt;/g&gt;
      &lt;g class="segment" transform="rotate(234)"&gt;
        &lt;path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/&gt;
        &lt;path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/&gt;
      &lt;/g&gt;
      &lt;g class="segment" transform="rotate(252)"&gt;
        &lt;path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/&gt;
        &lt;path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/&gt;
      &lt;/g&gt;
    &lt;/g&gt;

    &lt;g class="quadrant"&gt;
      &lt;g class="segment" transform="rotate(270)"&gt;
        &lt;path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/&gt;
        &lt;path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/&gt;
      &lt;/g&gt;
      &lt;g class="segment" transform="rotate(288)"&gt;
        &lt;path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/&gt;
        &lt;path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/&gt;
      &lt;/g&gt;
      &lt;g class="segment" transform="rotate(306)"&gt;
        &lt;path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/&gt;
        &lt;path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/&gt;
      &lt;/g&gt;
      &lt;g class="segment" transform="rotate(324)"&gt;
        &lt;path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/&gt;
        &lt;path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/&gt;
      &lt;/g&gt;
      &lt;g class="segment" transform="rotate(342)"&gt;
        &lt;path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/&gt;
        &lt;path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/&gt;
      &lt;/g&gt;
    &lt;/g&gt;
  &lt;/g&gt;

  &lt;g id="inner-petals" transform="rotate(9) scale(0.33)"&gt;
    &lt;g class="quadrant"&gt;
      &lt;g class="segment"&gt;
        &lt;path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/&gt;
        &lt;path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/&gt;
      &lt;/g&gt;
      &lt;g class="segment" transform="rotate(18)"&gt;
        &lt;path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/&gt;
        &lt;path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/&gt;
      &lt;/g&gt;
      &lt;g class="segment" transform="rotate(36)"&gt;
        &lt;path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/&gt;
        &lt;path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/&gt;
      &lt;/g&gt;
      &lt;g class="segment" transform="rotate(54)"&gt;
        &lt;path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/&gt;
        &lt;path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/&gt;
      &lt;/g&gt;
      &lt;g class="segment" transform="rotate(72)"&gt;
        &lt;path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/&gt;
        &lt;path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/&gt;
      &lt;/g&gt;
    &lt;/g&gt;

    &lt;g class="quadrant"&gt;
      &lt;g class="segment" transform="rotate(90)"&gt;
        &lt;path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/&gt;
        &lt;path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/&gt;
      &lt;/g&gt;
      &lt;g class="segment" transform="rotate(108)"&gt;
        &lt;path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/&gt;
        &lt;path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/&gt;
      &lt;/g&gt;
      &lt;g class="segment" transform="rotate(126)"&gt;
        &lt;path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/&gt;
        &lt;path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/&gt;
      &lt;/g&gt;
      &lt;g class="segment" transform="rotate(144)"&gt;
        &lt;path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/&gt;
        &lt;path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/&gt;
      &lt;/g&gt;
      &lt;g class="segment" transform="rotate(162)"&gt;
        &lt;path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/&gt;
        &lt;path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/&gt;
      &lt;/g&gt;
    &lt;/g&gt;

    &lt;g class="quadrant"&gt;
      &lt;g class="segment" transform="rotate(180)"&gt;
        &lt;path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/&gt;
        &lt;path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/&gt;
      &lt;/g&gt;
      &lt;g class="segment" transform="rotate(198)"&gt;
        &lt;path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/&gt;
        &lt;path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/&gt;
      &lt;/g&gt;
      &lt;g class="segment" transform="rotate(216)"&gt;
        &lt;path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/&gt;
        &lt;path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/&gt;
      &lt;/g&gt;
      &lt;g class="segment" transform="rotate(234)"&gt;
        &lt;path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/&gt;
        &lt;path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/&gt;
      &lt;/g&gt;
      &lt;g class="segment" transform="rotate(252)"&gt;
        &lt;path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/&gt;
        &lt;path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/&gt;
      &lt;/g&gt;
    &lt;/g&gt;

    &lt;g class="quadrant"&gt;
      &lt;g class="segment" transform="rotate(270)"&gt;
        &lt;path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/&gt;
        &lt;path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/&gt;
      &lt;/g&gt;
      &lt;g class="segment" transform="rotate(288)"&gt;
        &lt;path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/&gt;
        &lt;path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/&gt;
      &lt;/g&gt;
      &lt;g class="segment" transform="rotate(306)"&gt;
        &lt;path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/&gt;
        &lt;path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/&gt;
      &lt;/g&gt;
      &lt;g class="segment" transform="rotate(324)"&gt;
        &lt;path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/&gt;
        &lt;path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/&gt;
      &lt;/g&gt;
      &lt;g class="segment" transform="rotate(342)"&gt;
        &lt;path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/&gt;
        &lt;path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/&gt;
      &lt;/g&gt;
    &lt;/g&gt;
  &lt;/g&gt;
&lt;/g&gt;
&lt;/svg&gt;</pre>

<p>Créez un nouveau fichier CSS, <code>style.css</code>. Copiez et collez-y le contenu ci-dessous, en vous assurant de le faire défiler pour en obtenir la totalité :</p>

<pre class="brush: css">/*** Démonstration SVG ***/

/* page */
svg {
  background-color: beige;
}

#heading {
  font-size: 24px;
  font-weight: bold;
}

#caption {
  font-size: 12px;
}

/* fleur */
#flower:hover {
  cursor: crosshair;
}

/* dégradé */
#fade-stop-1 {
  stop-color: blue;
}

#fade-stop-2 {
  stop-color: white;
}

/* pétales */
.segment-fill {
  fill: var(--segment-fill-fill);
  stroke: var(--segment-fill-stroke);
  stroke-width: var(--segment-fill-stroke-width);
}

.segment-fill:hover {
  fill: var(--segment-fill-fill-hover);
  stroke: var(--segment-fill-stroke-hover);
}

.segment-edge {
  fill: var(--segment-edge-fill);
  stroke: var(--segment-edge-stroke);
  stroke-width: var(--segment-edge-stroke-width);
}

.segment-edge:hover {
  stroke: var(--segment-edge-stroke-hover);
}

/* extérieurs de pétales */
#outer-petals {
  opacity: .75;
  --segment-fill-fill: azure;
  --segment-fill-stroke: lightsteelblue;
  --segment-fill-stroke-width: 1;
  --segment-edge-fill: none;
  --segment-edge-stroke: deepskyblue;
  --segment-edge-stroke-width: 3;
  --segment-fill-fill-hover: plum;
  --segment-fill-stroke-hover: none;
  --segment-edge-stroke-hover: slateblue;
}

/*
  Façon non standard de styliser les éléments référencés via les éléments &lt;use&gt;,
  supportée par certains anciens navigateurs
*/
#outer-petals .segment-fill {
  fill: azure;
  stroke: lightsteelblue;
  stroke-width: 1;
}

#outer-petals .segment-edge {
  fill: none;
  stroke: deepskyblue;
  stroke-width: 3;
}

#outer-petals .segment:hover &gt; .segment-fill {
  fill: plum;
  stroke: none;
}

#outer-petals .segment:hover &gt; .segment-edge {
  stroke: slateblue;
}

/* intérieurs de pétales */
#inner-petals {
  --segment-fill-fill: yellow;
  --segment-fill-stroke: yellow;
  --segment-fill-stroke-width: 1;
  --segment-edge-fill: none;
  --segment-edge-stroke: yellowgreen;
  --segment-edge-stroke-width: 9;
  --segment-fill-fill-hover: darkseagreen;
  --segment-fill-stroke-hover: none;
  --segment-edge-stroke-hover: green;
}

/*
  Façon non standard de styliser les éléments référencés via les éléments &lt;use&gt;,
  supportée par certains anciens navigateurs
*/
#inner-petals .segment-fill {
  fill: yellow;
  stroke: yellow;
  stroke-width: 1;
}

#inner-petals .segment-edge {
  fill: none;
  stroke: yellowgreen;
  stroke-width: 9;
}

#inner-petals .segment:hover &gt; .segment-fill {
  fill: darkseagreen;
  stroke: none;
}

#inner-petals .segment:hover &gt; .segment-edge {
  stroke: green;
}</pre>

<p>Ouvrez le document dans votre navigateur compatible SVG. Déplacez le pointeur de votre souris sur le graphique pour voir ce qui se passe.</p>

<h3 id="result">Résultat</h3>

<p>{{EmbedLiveSample("example", "660", "660")}}</p>

<p>Notes sur cette démonstration :</p>

<ul>
  <li>Le document SVG lie la feuille de style de la façon habituelle.</li>
  <li>Le SVG a ses propres propriétés et valeurs CSS. Certaines d'entre elles sont similaires aux propriétés CSS utilisées pour le HTML.</li>
</ul>

<div class="note">
  <p><strong>Note :</strong> Modifiez la feuille de style de sorte que les pétales intérieurs deviennent tous roses lorsque le pointeur de la souris passe sur l'un d'entre eux, sans modifier le fonctionnement des pétales extérieurs.</</p>
</div>
<p><a href="/fr/docs/Web/Guide/CSS/Getting_started/Challenge_solutions#svg_and_css">Voir une solution à ce défi.</a></p>

<h2 id="simplified_structure">Structure simplifiée</h2>

<p>La structure SVG présentée ci-dessus pourrait être écrite de manière beaucoup plus concise en référençant les différentes parties de la fleur via des éléments <a href="/fr/docs/Web/SVG/Element/use"><code>&lt;use&gt;</code></a>. Ce <a href="https://www.w3.org/TR/SVG2/struct.html#UseStyleInheritance">comportement est normalisé</a>, bien que seuls quelques navigateurs prennent en charge la pseudo-classe <a href="/fr/docs/Web/CSS/:hover"><code>:hover</code></a> et d'autres sélecteurs CSS plus complexes sur les éléments référencés via les éléments <code>&lt;use&gt;</code>, pour le moment. Il existe <a href="https://github.com/w3c/svgwg/issues/504">un débat sur les règles applicables à ces éléments référencés</a>.</p>

<p>Voici comment se présente la structure du document SVG désormais.</p>

<pre class="brush: html">&lt;svg width="600px" height="600px" viewBox="-300 -300 600 600"
    xmlns="http://www.w3.org/2000/svg"&gt;

  &lt;title&gt;Démonstration SVG&lt;/title&gt;
  &lt;desc&gt;Démarrer avec CSS et SVG&lt;/desc&gt;

  &lt;defs&gt;
    &lt;g id="segment" class="segment"&gt;
      &lt;path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/&gt;
      &lt;path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/&gt;
    &lt;/g&gt;
    &lt;g id="quadrant"&gt;
      &lt;use xlink:href="#segment"/&gt;
      &lt;use xlink:href="#segment" transform="rotate(18)"/&gt;
      &lt;use xlink:href="#segment" transform="rotate(36)"/&gt;
      &lt;use xlink:href="#segment" transform="rotate(54)"/&gt;
      &lt;use xlink:href="#segment" transform="rotate(72)"/&gt;
    &lt;/g&gt;
    &lt;g id="petals"&gt;
      &lt;use xlink:href="#quadrant"/&gt;
      &lt;use xlink:href="#quadrant" transform="rotate(90)"/&gt;
      &lt;use xlink:href="#quadrant" transform="rotate(180)"/&gt;
      &lt;use xlink:href="#quadrant" transform="rotate(270)"/&gt;
    &lt;/g&gt;
    &lt;radialGradient id="fade" cx="0" cy="0" r="200"
        gradientUnits="userSpaceOnUse"&gt;
      &lt;stop id="fade-stop-1" offset="33%"/&gt;
      &lt;stop id="fade-stop-2" offset="95%"/&gt;
    &lt;/radialGradient&gt;
  &lt;/defs&gt;

  &lt;text id="heading" x="-280" y="-270"&gt;Démonstration SVG&lt;/text&gt;
  &lt;text  id="caption" x="-280" y="-250"&gt;Déplacez le pointeur de votre souris sur la fleur.&lt;/text&gt;

  &lt;g id="flower"&gt;
    &lt;circle id="overlay" cx="0" cy="0" r="200" stroke="none" fill="url(#fade)"/&gt;
    &lt;use id="outer-petals" xlink:href="#petals"/&gt;
    &lt;use id="inner-petals" xlink:href="#petals"
      transform="rotate(9) scale(0.33)"/&gt;
  &lt;/g&gt;

&lt;/svg&gt;
</pre>

<h2 id="what_next">Et ensuite ?</h2>

<p>Dans cette démonstration, le navigateur, compatible SVG, sait déjà comment afficher les éléments SVG. La feuille de style ne fait que modifier l'affichage de certaines manières. Ceci est également vrai pour les documents HTML. Mais vous pouvez utiliser CSS pour des documents XML à usage général, où il n'y a pas de manière prédéfinie d'afficher les éléments. La page suivante en fait la démonstration : <a href="/fr/docs/Archive/Beginner_tutorials/XML_data">Données XML</a>.</p>
