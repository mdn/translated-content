---
title: clip-rule
slug: Web/CSS/Reference/Properties/clip-rule
l10n:
  sourceCommit: 13f5bce7caf7be6e4156655d827e5927091310b9
---

La propriété [CSS](/fr/docs/Web/CSS) **`clip-rule`** détermine, lorsque des parties du chemin se superposent à d'autres, quels pixels dans la boîte du masque sont à l'intérieur de la forme de découpe définie par un [chemin de découpe](/fr/docs/Web/CSS/Reference/Properties/clip-path) et lesquels sont à l'extérieur.

La propriété `clip-rule` ne s'applique qu'aux éléments SVG contenus dans un élément SVG {{SVGElement("clipPath")}}, et remplace la valeur de l'attribut SVG {{SVGAttr("clip-rule")}} de l'élément si elle est présente. La propriété `clip-rule` fonctionne essentiellement comme la propriété {{CSSxRef("fill-rule")}}, sauf qu'elle s'applique aux définitions de `<clipPath>`. Elle n'a aucun effet sur les {{CSSxRef("basic-shape")}} CSS.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
clip-rule: nonzero;
clip-rule: evenodd;

/* Valeurs globales */
clip-rule: inherit;
clip-rule: initial;
clip-rule: revert;
clip-rule: revert-layer;
clip-rule: unset;
```

### Valeurs

- `nonzero`
  - : Pour chaque point dans la boîte du masque de découpe, un rayon est tracé dans une direction aléatoire. Chaque fois que le rayon croise une partie du chemin de découpe, un compteur est augmenté de un si la partie du chemin se déplace de la gauche vers la droite à travers le rayon, ou diminué de un si la partie du chemin se déplace de la droite vers la gauche à travers le rayon. Si le total final du compteur est zéro, le point est à l'extérieur de la forme du chemin. Sinon, il est à l'intérieur de la forme du chemin.

- `even-odd`
  - : Pour chaque point dans la boîte du masque de découpe, un rayon est tracé dans une direction aléatoire. Chaque fois que le rayon croise une partie du chemin de découpe, un compteur est augmenté de un. Si le total final du compteur est pair, le point est à l'extérieur de la forme du chemin&nbsp;; sinon, il est à l'intérieur de la forme du chemin. Zéro est considéré comme pair.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Comparaison des valeurs

Dans cet exemple, nous allons appliquer différentes valeurs CSS `clip-rule` à des éléments SVG {{SVGElement("path")}} similaires pour démontrer la différence entre `evenodd` et `nonzero`.

#### HTML

Le balisage contient plusieurs conteneurs `<svg>`, chacun contenant un élément `<clipPath>` qui définit une forme d'étoile, et un élément `<rect>` pour dessiner l'étoile à l'intérieur. Les étoiles sont créées avec des lignes qui se chevauchent. À l'exception de l'attribut `id`, le balisage des deux premiers éléments SVG est identique. Le troisième SVG inclut uniquement l'élément `<path>`, montrant comment les lignes du chemin qui a créé l'étoile se chevauchent.

```html
<svg>
  <clipPath id="star1">
    <path d="M50,0 21,90 98,35 2,35 79,90z" />
  </clipPath>
  <rect clip-path="url(#star1)" width="95" height="95" />
</svg>

<svg>
  <clipPath id="star2">
    <path d="M50,0 21,90 98,35 2,35 79,90z" />
  </clipPath>
  <rect clip-path="url(#star2)" width="95" height="95" />
</svg>

<svg id="star3">
  <path d="M50,0 21,90 98,35 2,35 79,90z" />
</svg>
```

#### CSS

La propriété `clip-rule` pour le `<path>` dans le premier SVG est définie sur `evenodd`&nbsp;; sur `nonzero` dans le second SVG. Pour le SVG ne contenant que le chemin, nous avons supprimé la valeur par défaut de {{CSSxRef("fill")}} et défini à la fois une couleur {{CSSxRef("stroke")}} et une {{CSSxRef("stroke-width")}} pour rendre visibles les lignes du chemin qui se chevauchent&nbsp;:

```css hidden
body {
  display: flex;
  gap: 20px;
}
svg {
  width: 110px;
  height: 110px;
}
```

```css
#star1 path {
  clip-rule: evenodd;
}

#star2 path {
  clip-rule: nonzero;
}

#star3 path {
  fill: none;
  stroke: black;
  stroke-width: 1;
}
```

#### Résultats

{{EmbedLiveSample("Comparaison des valeurs", "", 130)}}

### Dans les définitions de formes de base

Cet exemple montre que, bien que la propriété `clip-rule` n'ait aucun effet sur les {{CSSxRef("basic-shape")}} CSS, elle peut affecter un `<clipPath>` utilisé comme source d'une forme.

#### HTML

Nous incluons un SVG avec deux éléments `<clipPath>` qui définissent des formes d'étoile, identiques à l'exception de la valeur de leur attribut `id`. Nous incluons également deux éléments `<div>` qui contiendront nos formes d'étoile.

```html
<svg height="0" width="0">
  <defs>
    <clipPath id="star1">
      <path d="M100,0 42,180 196,70 4,70 158,180z" />
    </clipPath>
    <clipPath id="star2">
      <path d="M100,0 42,180 196,70 4,70 158,180z" />
    </clipPath>
  </defs>
</svg>

<div></div>
<div></div>
```

#### CSS

Nous donnons aux éléments `<div>` une largeur ({{CSSxRef("width")}}) et une hauteur ({{CSSxRef("height")}}) définies, en ajoutant un {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}} pour la valeur de leur {{CSSxRef("background-image")}}&nbsp;:

```css hidden
body {
  display: flex;
  gap: 20px;
}
```

```css
div {
  height: 200px;
  width: 200px;
  background-image: conic-gradient(
    at center,
    rebeccapurple,
    green,
    lightblue,
    rebeccapurple
  );
}
```

Nous utilisons la propriété {{CSSxRef("clip-path")}} pour définir les différents éléments `<clipPath>` comme chemin de découpe pour chaque `<div>`&nbsp;:

```css
div:first-of-type {
  clip-path: url("#star1");
}
div:last-of-type {
  clip-path: url("#star2");
}
```

Enfin, nous définissons les différentes valeurs `clip-rule` pour chacun des éléments `<path>` de chaque élément `<clipPath>`&nbsp;:

```css
#star1 path {
  clip-rule: evenodd;
}
#star2 path {
  clip-rule: nonzero;
}
```

#### Résultats

{{EmbedLiveSample("Dans les définitions de formes de base", "", 200)}}

### Choisir entre les règles pour un chemin avec tous les tracés dans le sens horaire

Dans cette image SVG, nous avons deux rectangles qui sont découpés, chacun avec une règle de découpe différente. Il y a deux éléments SCG {{SVGElement("clipPath")}}, de sorte que l'un peut être configuré pour utiliser la règle de découpe non nulle et l'autre la règle pair-impair. Les deux chemins sont tracés dans le sens horaire pour leurs parties intérieure et extérieure.

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50">
  <g stroke="#112233" fill="#bbccdd">
    <!-- rectange simple et visualisation du chemin de découpe -->
    <rect x="10" y="10" width="30" height="30" />
    <path
      d="M 65,5 l 20,20 -20,20 -20,-20 20,-20 m 0,10 l 10,10 -10,10 -10,-10 10,-10 z"
      fill="none"
      stroke-width="0.5" />
    <!-- rectangles à découper -->
    <rect x="110" y="10" width="30" height="30" clip-path="url(#clipper1)" />
    <rect x="160" y="10" width="30" height="30" clip-path="url(#clipper2)" />
  </g>
  <!-- chemins de découpe -->
  <clipPath id="clipper1" clipPathUnits="objectBoundingBox">
    <path
      d="M 0.5 -0.15 l 0.65 0.65 -0.65,0.65 -0.65,-0.65 0.65,-0.65 m 0,0.33 l 0.33,0.33 -0.33,0.33 -0.33,-0.33 0.33,-0.33 z"
      clip-rule="evenodd" />
  </clipPath>
  <clipPath id="clipper2" clipPathUnits="objectBoundingBox">
    <path
      d="M 0.5 -0.15 l 0.65 0.65 -0.65,0.65 -0.65,-0.65 0.65,-0.65 m 0,0.33 l 0.33,0.33 -0.33,0.33 -0.33,-0.33 0.33,-0.33 z"
      clip-rule="nonzero" />
  </clipPath>
</svg>
```

Pour les chemins de découpe appliqués aux rectangles découpés, la propriété CSS `clip-rule` est utilisée pour définir un chemin avec la règle `nonzero` et l'autre avec la règle `evenodd`. Celles-ci remplacent les valeurs des attributs `clip-path` dans le SVG, qui ont été intentionnellement définies sur des valeurs opposées à celles imposées par le CSS.

```css
#clipper1 {
  clip-rule: nonzero;
}
#clipper2 {
  clip-rule: evenodd;
}
```

Comme les parties intérieure et extérieure du chemin se déplacent toutes deux dans le sens horaire (de gauche à droite), la forme de découpe résultante sera différente selon la règle de découpe. Pour `nonzero`, tout rayon à l'intérieur de la partie extérieure de la forme aura une valeur supérieure à zéro, car il rencontrera un ou plusieurs fragments de chemin allant de gauche à droite. Pour `even-odd`, les points situés entre les deux parties du chemin auront un total impair, tandis que tout point à l'intérieur du chemin intérieur ou à l'extérieur de la partie extérieure aura un total pair.

{{EmbedLiveSample("Choisir entre les règles pour un chemin avec tous les tracés dans le sens horaire", 500, 200)}}

### Choisir entre les règles pour un chemin avec des tracés de sens différents

Cet exemple utilise le même SVG que l'exemple précédent, à la différence que la partie intérieure du chemin de découpe s'enroule dans le sens antihoraire.

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50">
  <g stroke="#112233" fill="#bbccdd">
    <!-- rectangle simple et visualisation du chemin de découpe -->
    <rect x="10" y="10" width="30" height="30" />
    <path
      d="M 65,5 l 20,20 -20,20 -20,-20 20,-20 m 0,10 l 10,10 -10,10 -10,-10 10,-10 z"
      fill="none"
      stroke-width="0.5" />
    <!-- rectangles à découper -->
    <rect x="110" y="10" width="30" height="30" clip-path="url(#clipper1)" />
    <rect x="160" y="10" width="30" height="30" clip-path="url(#clipper2)" />
  </g>
  <!-- chemins de découpe -->
  <clipPath id="clipper1" clipPathUnits="objectBoundingBox">
    <path
      d="M 0.5 -0.15 l 0.65 0.65 -0.65,0.65 -0.65,-0.65 0.65,-0.65 m 0,0.33 l -0.33,0.33 0.33,0.33 0.33,-0.33 -0.33,-0.33 z" />
  </clipPath>
  <clipPath id="clipper2" clipPathUnits="objectBoundingBox">
    <path
      d="M 0.5 -0.15 l 0.65 0.65 -0.65,0.65 -0.65,-0.65 0.65,-0.65 m 0,0.33 l 0.33,0.33 -0.33,0.33 -0.33,-0.33 0.33,-0.33 z" />
  </clipPath>
</svg>
```

Nous appliquons le même CSS qu'auparavant.

```css
#clipper1 {
  clip-rule: nonzero;
}
#clipper2 {
  clip-rule: evenodd;
}
```

Dans ce cas, comme la partie extérieure du chemin se déplace dans le sens horaire (de gauche à droite) et que la partie intérieure du chemin se déplace dans le sens antihoraire (de droite à gauche), la forme de découpe résultante sera identique quelle que soit la règle de découpe utilisée.

{{EmbedLiveSample("Choisir entre les règles pour un chemin avec des tracés de sens différents", 500, 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("fill-rule")}}
- La propriété {{CSSxRef("clip-path")}}
- [Introduction au découpage CSS](/fr/docs/Web/CSS/Guides/Masking/Clipping)
- Le module [de masque CSS](/fr/docs/Web/CSS/Guides/Masking)
- L'attribut SVG {{SVGAttr("clip-rule")}}
- L'élément SVG {{SVGElement("clipPath")}}
- L'attribut SVG {{SVGAttr("fill-rule")}}
