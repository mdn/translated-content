---
title: Application d'effets SVG à du contenu HTML
short-title: Effets SVG pour HTML
slug: Web/SVG/Guides/Applying_SVG_effects_to_HTML_content
l10n:
  sourceCommit: 3ee333bf5e414ac81c452ec10fed7af645c96740
---

Les navigateurs modernes supportent le format [SVG](/fr/docs/Web/SVG) utilisant du [CSS](/fr/docs/Web/CSS) pour appliquer des effets graphiques au contenu HTML.

Vous pouvez éditer un SVG avec du CSS, soit directement dans le document, soit dans une feuille de style externe. Il y a 3 propriétés que vous pouvez utiliser&nbsp;: {{CSSxRef("mask")}}, {{CSSxRef("clip-path")}} et {{CSSxRef("filter")}}.

> [!NOTE]
> Dans des fichiers externes, les références à un SVG doivent être à la [même origine](/fr/docs/Web/Security/Defenses/Same-origin_policy) que le document de référence.

## Utilisation de SVG intégré

Pour appliquer un effet SVG à l'aide de styles CSS, vous devez d'abord créer la règle CSS qui référence le SVG à appliquer.

```css
p {
  mask: url("#my-mask");
}
```

Dans l'exemple ci-dessus, tous les paragraphes utilisent un [SVG `<mask>`](/fr/docs/Web/SVG/Reference/Element/mask) avec l'[ID](/fr/docs/Web/HTML/Reference/Global_attributes/id) de `my-mask`.

### Exemple : Appliquer un masque

Par exemple, vous pouvez appliquer un dégradé à du contenu HTML à l'intérieur de votre document en utilisant SVG et du code CSS similaire à celui-ci&nbsp;:

```html
<svg height="0">
  <mask id="mask-1">
    <linearGradient id="gradient-1" y2="1">
      <stop stop-color="white" offset="0" />
      <stop stop-opacity="0" offset="1" />
    </linearGradient>
    <circle cx="0.25" cy="0.25" r="0.25" id="circle" fill="white" />
    <rect x="0.5" y="0.2" width="300" height="100" fill="url(#gradient-1)" />
  </mask>
</svg>
```

```css
.target {
  mask: url("#mask-1");
}
p {
  width: 300px;
  border: 1px solid black;
  display: inline-block;
}
p.target {
  background: lime;
}
```

Notez que dans ce code CSS, le masque est spécifié à l'aide d'une URL à l'ID `#mask-1`, qui est l'ID du masque SVG spécifié précédemment. Tout le reste concerne le dégradé.

L'application d'effet SVG à du (X)HTML est réalisé en affectant la classe `target` définie ci-dessus à un élément, comme ceci&nbsp;:

```html
<p class="target">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
</p>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing
  <em class="target"
    >elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua.</em
  >
  Ut enim ad minim veniam.
</p>
```

L'exemple ci-dessus serait rendu avec le masque appliqué.

{{EmbedLiveSample('Exemple : Appliquer un masque', 650, 200)}}

### Exemple : Rogner

Cet exemple montre comment utiliser un SVG pour rogner du contenu HTML. Remarquez que même les zones cliquables (les liens) sont rognées.

```html
<p class="target">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
</p>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing
  <em class="target"
    >elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua.</em
  >
  Ut enim ad minim veniam.
</p>

<button>Changer le rayon</button>

<svg height="0">
  <clipPath id="clipping-path-1" clipPathUnits="objectBoundingBox">
    <circle cx="0.25" cy="0.25" r="0.25" id="circle" />
    <rect x="0.5" y="0.2" width="0.5" height="0.8" />
  </clipPath>
</svg>
```

```css
.target {
  clip-path: url("#clipping-path-1");
}
p {
  width: 300px;
  border: 1px solid black;
  display: inline-block;
}
p.target {
  background: lime;
}
```

Cela crée une zone de découpe composée d'un cercle et d'un rectangle, lui attribue l'ID `#clipping-path-1`, puis la référence dans le CSS. Le chemin de découpe peut être appliqué à n'importe quel élément ayant la classe `target`.

Vous pouvez modifier le SVG en temps réel et voir immédiatement l'effet sur le rendu HTML. Par exemple, vous pouvez redimensionner le cercle dans le chemin de découpe établi ci-dessus&nbsp;:

```js
const circle = document.getElementById("circle");

function toggleRadius() {
  circle.r.baseVal.value = 0.4 - circle.r.baseVal.value;
}

document.querySelector("button").addEventListener("click", toggleRadius);
```

{{EmbedLiveSample('Exemple : Rogner', 650, 200)}}

### Exemple : Filtres

Cet exemple montre comment utiliser des filtres avec un SVG. À l'aide du CSS, nous appliquons plusieurs filtres à trois éléments à la fois dans leur état normal, que quand ils sont [survolés](/fr/docs/Web/CSS/Reference/Selectors/:hover) par la souris.

```html
<p class="target">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
</p>
<pre class="target">lorem</pre>
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing
  <em class="target"
    >elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua.</em
  >
  Ut enim ad minim veniam.
</p>
```

```css hidden
p.target {
  background: lime;
}
```

N'importe quel filtre SVG peut être appliqué de cette façon. Par exemple, pour appliquer un effet de flou, vous pouvez utiliser&nbsp;:

```html
<svg height="0">
  <filter id="f1">
    <feGaussianBlur stdDeviation="3" />
  </filter>
</svg>
```

Vous pouvez aussi appliquer une matrice de transformation des couleurs&nbsp;:

```html
<svg height="0">
  <filter id="f2">
    <feColorMatrix
      values="0.3333 0.3333 0.3333 0 0
              0.3333 0.3333 0.3333 0 0
              0.3333 0.3333 0.3333 0 0
              0      0      0      1 0" />
  </filter>
</svg>
```

Et encore d'autres filtres&nbsp;:

```html
<svg height="0">
  <filter id="f3">
    <feConvolveMatrix
      filterRes="100 100"
      color-interpolation-filters="sRGB"
      order="3"
      kernelMatrix="0 -1 0
                   -1 4 -1
                    0 -1 0"
      preserveAlpha="true" />
  </filter>
  <filter id="f4">
    <feSpecularLighting
      surfaceScale="5"
      specularConstant="1"
      specularExponent="10"
      lighting-color="white">
      <fePointLight x="-5000" y="-10000" z="20000" />
    </feSpecularLighting>
  </filter>
  <filter id="f5">
    <feColorMatrix
      values="1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 1 0 0 0"
      color-interpolation-filters="sRGB" />
  </filter>
</svg>
```

Les cinq filtres sont appliqués en utilisant le CSS suivant :

```css
p.target {
  filter: url("#f3");
}
p.target:hover {
  filter: url("#f5");
}
em.target {
  filter: url("#f1");
}
em.target:hover {
  filter: url("#f4");
}
pre.target {
  filter: url("#f2");
}
pre.target:hover {
  filter: url("#f3");
}
```

{{EmbedLiveSample('Exemple : Filtres', 650, 200)}}

### Exemple : Texte flouté

Pour flouter du texte, il existe une fonction de filtre CSS appelée {{CSSxRef("filter-function/blur")}}. Vous pouvez obtenir le même effet en utilisant des filtres SVG.

```html
<p class="blur">Il est temps de nettoyer mes lunettes</p>
<svg height="0">
  <defs>
    <filter id="wherearemyglasses" x="0" y="0">
      <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
    </filter>
  </defs>
</svg>
```

Vous pouvez appliquer le filtre SVG et le filtre CSS à la même classe&nbsp;:

```css
.blur {
  filter: url("#wherearemyglasses");
}
```

{{EmbedLiveSample('Exemple : Texte flouté', 300, 100)}}

Le floutage est un calcul assez lourd alors utilisez le avec précaution et faites particulièrement attention aux éléments scrollables ou animés.

### Exemple : Effets de texte

Les effets SVG peuvent aussi être utilisés pour ajouter une approche plus dynamique et flexible à l'ajout de texte, comparé au texte HTML classique.

En créant le texte à l'aide d'éléments SVG combinés à du HTML, vous pouvez réaliser une grande variété d'effets de texte différents. Vous pouvez par exemple faire pivoter le texte&nbsp;:

```html
<svg height="60" width="200">
  <text x="0" y="15" fill="blue" transform="rotate(30 20,50)">
    Texte d'exemple
  </text>
</svg>
```

## Utilisation de références externes

Vous pouvez utiliser des fichiers externes pour rogner ou pour appliquer des masques et des filtres SVG, tant que cette source vient de la même origine que le document HTML auquel il est appliqué.

Par exemple, si votre CSS est un fichier nommé `default.css`, il pourrait contenir le code ci-dessous&nbsp;:

```css
.target {
  clip-path: url("resources.svg#c1");
}
```

Le SVG est alors importé depuis un fichier nommé `resources.svg`, utilisant `clip-path` avec l'ID `c1`.

## Voir aussi

- [SVG](/fr/docs/Web/SVG)
- La propriété CSS {{CSSxRef('clip-path')}}
- La propriété CSS {{CSSxRef('mask')}}
- [Formes pour le rognage et le masquage — et comment les utiliser <sup>(angl.)</sup>](https://hacks.mozilla.org/2017/06/css-shapes-clipping-and-masking/)
