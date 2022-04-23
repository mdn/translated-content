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
Cette page illustre l'application de CSS sur des documents [SVG](/fr/docs/Web/SVG), le langage spécialisé dans la création d'éléments graphiques vectoriels.

Nous allons voir par la suite un exemple que vous pourrez copier pour l'exécuter dans votre navigateur (à la condition que celui-ci soit compatible avec SVG).

> **Note :** Les éléments référencés par des éléments [`<use>`](/fr/docs/Web/SVG/Element/use) héritent des styles de cet élément. Pour leur appliquer des styles différents, il faut donc utiliser [les propriétés CSS personnalisées (_custom properties_)](/fr/docs/Web/CSS/CSS_Variables).

## Exemple

Créez un nouveau document SVG en tant que fichier texte brut, `doc.svg`. Copiez et collez le contenu qui suit, en vous assurant de faire défiler le texte pour obtenir l'intégralité de l'exemple :

```html
<svg width="600px" height="600px" viewBox="-300 -300 600 600"
  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

<title>Démonstration SVG</title>
<desc>Démarrer avec CSS et SVG</desc>

<defs>
  <radialGradient id="fade" cx="0" cy="0" r="200"
      gradientUnits="userSpaceOnUse">
    <stop id="fade-stop-1" offset="33%"/>
    <stop id="fade-stop-2" offset="95%"/>
  </radialGradient>
</defs>

<text id="heading" x="-280" y="-270">Démonstration SVG</text>
<text id="caption" x="-280" y="-250">Déplacez le pointeur de
 votre souris sur la fleur.</text>

<g id="flower">
  <circle id="overlay" cx="0" cy="0" r="200" stroke="none" fill="url(#fade)"/>

  <g id="outer-petals">
    <g class="quadrant">
      <g class="segment">
        <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
        <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
      </g>
      <g class="segment" transform="rotate(18)">
        <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
        <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
      </g>
      <g class="segment" transform="rotate(36)">
        <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
        <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
      </g>
      <g class="segment" transform="rotate(54)">
        <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
        <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
      </g>
      <g class="segment" transform="rotate(72)">
        <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
        <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
      </g>
    </g>

    <g class="quadrant">
      <g class="segment" transform="rotate(90)">
        <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
        <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
      </g>
      <g class="segment" transform="rotate(108)">
        <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
        <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
      </g>
      <g class="segment" transform="rotate(126)">
        <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
        <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
      </g>
      <g class="segment" transform="rotate(144)">
        <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
        <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
      </g>
      <g class="segment" transform="rotate(162)">
        <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
        <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
      </g>
    </g>

    <g class="quadrant">
      <g class="segment" transform="rotate(180)">
        <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
        <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
      </g>
      <g class="segment" transform="rotate(198)">
        <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
        <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
      </g>
      <g class="segment" transform="rotate(216)">
        <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
        <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
      </g>
      <g class="segment" transform="rotate(234)">
        <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
        <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
      </g>
      <g class="segment" transform="rotate(252)">
        <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
        <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
      </g>
    </g>

    <g class="quadrant">
      <g class="segment" transform="rotate(270)">
        <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
        <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
      </g>
      <g class="segment" transform="rotate(288)">
        <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
        <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
      </g>
      <g class="segment" transform="rotate(306)">
        <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
        <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
      </g>
      <g class="segment" transform="rotate(324)">
        <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
        <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
      </g>
      <g class="segment" transform="rotate(342)">
        <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
        <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
      </g>
    </g>
  </g>

  <g id="inner-petals" transform="rotate(9) scale(0.33)">
    <g class="quadrant">
      <g class="segment">
        <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
        <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
      </g>
      <g class="segment" transform="rotate(18)">
        <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
        <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
      </g>
      <g class="segment" transform="rotate(36)">
        <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
        <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
      </g>
      <g class="segment" transform="rotate(54)">
        <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
        <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
      </g>
      <g class="segment" transform="rotate(72)">
        <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
        <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
      </g>
    </g>

    <g class="quadrant">
      <g class="segment" transform="rotate(90)">
        <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
        <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
      </g>
      <g class="segment" transform="rotate(108)">
        <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
        <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
      </g>
      <g class="segment" transform="rotate(126)">
        <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
        <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
      </g>
      <g class="segment" transform="rotate(144)">
        <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
        <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
      </g>
      <g class="segment" transform="rotate(162)">
        <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
        <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
      </g>
    </g>

    <g class="quadrant">
      <g class="segment" transform="rotate(180)">
        <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
        <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
      </g>
      <g class="segment" transform="rotate(198)">
        <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
        <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
      </g>
      <g class="segment" transform="rotate(216)">
        <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
        <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
      </g>
      <g class="segment" transform="rotate(234)">
        <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
        <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
      </g>
      <g class="segment" transform="rotate(252)">
        <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
        <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
      </g>
    </g>

    <g class="quadrant">
      <g class="segment" transform="rotate(270)">
        <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
        <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
      </g>
      <g class="segment" transform="rotate(288)">
        <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
        <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
      </g>
      <g class="segment" transform="rotate(306)">
        <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
        <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
      </g>
      <g class="segment" transform="rotate(324)">
        <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
        <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
      </g>
      <g class="segment" transform="rotate(342)">
        <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
        <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
      </g>
    </g>
  </g>
</g>
</svg>
```

Créez un nouveau fichier CSS, `style.css`. Copiez et collez-y le contenu ci-dessous, en vous assurant de le faire défiler pour en obtenir la totalité :

```css
/*** Démonstration SVG ***/

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
  Façon non standard de styliser les éléments référencés via les éléments <use>,
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

#outer-petals .segment:hover > .segment-fill {
  fill: plum;
  stroke: none;
}

#outer-petals .segment:hover > .segment-edge {
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
  Façon non standard de styliser les éléments référencés via les éléments <use>,
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

#inner-petals .segment:hover > .segment-fill {
  fill: darkseagreen;
  stroke: none;
}

#inner-petals .segment:hover > .segment-edge {
  stroke: green;
}
```

Ouvrez le document dans votre navigateur compatible SVG. Déplacez le pointeur de votre souris sur le graphique pour voir ce qui se passe.

### Résultat

{{EmbedLiveSample("Exemple", "660", "660")}}

Notes sur cette démonstration :

- Le document SVG lie la feuille de style de la façon habituelle.
- Le SVG a ses propres propriétés et valeurs CSS. Certaines d'entre elles sont similaires aux propriétés CSS utilisées pour le HTML.

> **Note :** Modifiez la feuille de style de sorte que les pétales intérieurs deviennent tous roses lorsque le pointeur de la souris passe sur l'un d'entre eux, sans modifier le fonctionnement des pétales extérieurs.<!--</p-->

[Voir une solution à ce défi.](/fr/docs/Web/Guide/CSS/Getting_started/Challenge_solutions#svg_and_css)

## Structure simplifiée

La structure SVG présentée ci-dessus pourrait être écrite de manière beaucoup plus concise en référençant les différentes parties de la fleur via des éléments [`<use>`](/fr/docs/Web/SVG/Element/use). Ce [comportement est normalisé](https://www.w3.org/TR/SVG2/struct.html#UseStyleInheritance), bien que seuls quelques navigateurs prennent en charge la pseudo-classe [`:hover`](/fr/docs/Web/CSS/:hover) et d'autres sélecteurs CSS plus complexes sur les éléments référencés via les éléments `<use>`, pour le moment. Il existe [un débat sur les règles applicables à ces éléments référencés](https://github.com/w3c/svgwg/issues/504).

Voici comment se présente la structure du document SVG désormais.

```html
<svg width="600px" height="600px" viewBox="-300 -300 600 600"
    xmlns="http://www.w3.org/2000/svg">

  <title>Démonstration SVG</title>
  <desc>Démarrer avec CSS et SVG</desc>

  <defs>
    <g id="segment" class="segment">
      <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z"/>
      <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10"/>
    </g>
    <g id="quadrant">
      <use xlink:href="#segment"/>
      <use xlink:href="#segment" transform="rotate(18)"/>
      <use xlink:href="#segment" transform="rotate(36)"/>
      <use xlink:href="#segment" transform="rotate(54)"/>
      <use xlink:href="#segment" transform="rotate(72)"/>
    </g>
    <g id="petals">
      <use xlink:href="#quadrant"/>
      <use xlink:href="#quadrant" transform="rotate(90)"/>
      <use xlink:href="#quadrant" transform="rotate(180)"/>
      <use xlink:href="#quadrant" transform="rotate(270)"/>
    </g>
    <radialGradient id="fade" cx="0" cy="0" r="200"
        gradientUnits="userSpaceOnUse">
      <stop id="fade-stop-1" offset="33%"/>
      <stop id="fade-stop-2" offset="95%"/>
    </radialGradient>
  </defs>

  <text id="heading" x="-280" y="-270">Démonstration SVG</text>
  <text id="caption" x="-280" y="-250">Déplacez le pointeur de votre souris sur la fleur.</text>

  <g id="flower">
    <circle id="overlay" cx="0" cy="0" r="200" stroke="none" fill="url(#fade)"/>
    <use id="outer-petals" xlink:href="#petals"/>
    <use id="inner-petals" xlink:href="#petals"
      transform="rotate(9) scale(0.33)"/>
  </g>

</svg>
```

## Et ensuite ?

Dans cette démonstration, le navigateur, compatible SVG, sait déjà comment afficher les éléments SVG. La feuille de style ne fait que modifier l'affichage de certaines manières. Ceci est également vrai pour les documents HTML. Mais vous pouvez utiliser CSS pour des documents XML à usage général, où il n'y a pas de manière prédéfinie d'afficher les éléments. La page suivante en fait la démonstration : [Données XML](/fr/docs/Archive/Beginner_tutorials/XML_data).
