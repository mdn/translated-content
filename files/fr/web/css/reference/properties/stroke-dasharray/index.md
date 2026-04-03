---
title: stroke-dasharray
slug: Web/CSS/Reference/Properties/stroke-dasharray
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`stroke-dasharray`** définit un motif de tirets et d'espaces utilisé pour peindre le contour d'une forme [SVG](/fr/docs/Web/SVG). Si elle est présente, elle remplace l'attribut SVG {{SVGAttr("stroke-dasharray")}} de l'élément.

Cette propriété s'applique à tout élément de forme SVG ou de contenu textuel (voir {{SVGAttr("stroke-dasharray")}} pour une liste complète), mais en tant que propriété héritée, elle peut être appliquée à des éléments tels que {{SVGElement("g")}} et avoir toujours l'effet souhaité sur les contours des éléments descendants.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
stroke-dasharray: none;

/* Valeurs numériques, de longueur et de pourcentage */
stroke-dasharray: 2px, 5px;
stroke-dasharray: 20%, 50%;
stroke-dasharray: 2, 5;

/* Les deux règles suivantes sont équivalentes */
stroke-dasharray: 2, 5, 3;
stroke-dasharray: 2, 5, 3, 2, 5, 3;

/* Valeurs globales */
stroke-dasharray: inherit;
stroke-dasharray: initial;
stroke-dasharray: revert;
stroke-dasharray: revert-layer;
stroke-dasharray: unset;
```

### Valeurs

La valeur est une liste de valeurs `<number>`, `<length>` et / ou `<percentage>` séparées par des virgules et/ou des espaces blancs qui définissent les longueurs des tirets et des espaces alternés, ou le mot-clé `none`. Si un nombre impair de valeurs est donné, l'ensemble de la valeur sera répété afin de définir un nombre pair de valeurs.

- `none`
  - : Le contour sera tracé sans aucun tiret. Valeur par défaut.

- {{CSSxRef("&lt;number&gt;")}}
  - : Un nombre d'unités SVG, dont la taille est définie par l'espace d'unité actuel. Les valeurs négatives sont invalides.

- {{CSSxRef("&lt;length&gt;")}}
  - : Les unités de pixels sont traitées de la même manière que les unités SVG (voir `<number>`, ci-dessus) et les longueurs basées sur la police telles que `em` sont calculées par rapport à la valeur SVG de l'élément pour la taille du texte&nbsp;; les effets des autres unités de longueur peuvent dépendre du navigateur. Les valeurs négatives sont invalides.

- {{CSSxRef("&lt;percentage&gt;")}}
  - : Les pourcentages se réfèrent à la diagonale normalisée de la fenêtre SVG actuelle, qui est calculée comme <math><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math>. Les valeurs négatives sont invalides.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Tableau de tirets simple

Cet exemple démontre l'utilisation de base de la propriété `stroke-dasharray` en utilisant des valeurs `<number>` séparées par des espaces.

#### HTML

Tout d'abord, nous configurons une forme de rectangle SVG de base. À ce rectangle, un contour rouge d'une largeur de `2` est appliqué.

```html
<svg viewBox="0 0 100 50" width="500" height="250">
  <rect
    x="10"
    y="10"
    width="80"
    height="30"
    fill="none"
    stroke="red"
    stroke-width="2" />
</svg>
```

#### CSS

Nous définissons un motif de tirets pour le contour&nbsp;: dix unités de tiret, suivies de cinq unités d'espace. Cela signifie que les espaces entre les tirets auront la moitié de la longueur des tirets eux-mêmes.

```css
rect {
  stroke-dasharray: 10 5;
}
```

#### Résultats

{{EmbedLiveSample("Tableau de tirets simple", 500, 250)}}

Lorsque le contour tourne un coin, le motif est transporté le long du chemin, pour ainsi dire. Dans le coin supérieur gauche, où le début et la fin du contour se rejoignent, le tiret de départ de dix unités semble se joindre à la partie du motif de tirets visible à la fin du chemin, créant ce qui ressemble à une ligne plus longue que dix unités se courbant autour du coin.

### Tableau de tirets répétés

Cet exemple inclut un nombre impair de valeurs `<number>` séparées par des virgules pour démontrer comment la valeur est répétée si un nombre impair de valeurs est donné afin de définir un nombre pair de valeurs.

#### HTML

Dans ce cas, nous définissons deux rectangles.

```html
<svg viewBox="0 0 100 100" width="500" height="500">
  <rect
    x="10"
    y="10"
    width="80"
    height="30"
    fill="none"
    stroke="red"
    stroke-width="2" />
  <rect
    x="10"
    y="60"
    width="80"
    height="30"
    fill="none"
    stroke="red"
    stroke-width="2" />
</svg>
```

#### CSS

Pour le premier rectangle, nous définissons un tableau de tirets de `5, 5, 1`, ce qui correspond à cinq unités de tiret, cinq unités d'espace et une unité de tiret. Cependant, comme il s'agit d'un nombre impair de valeurs, l'ensemble des valeurs est répété, créant ainsi une valeur identique à celle appliquée au deuxième rectangle.

```css
rect:nth-of-type(1) {
  stroke-dasharray: 5, 5, 1;
}
rect:nth-of-type(2) {
  stroke-dasharray: 5, 5, 1, 5, 5, 1;
}
```

#### Résultats

{{EmbedLiveSample("Tableau de tirets répétés", 500, 500)}}

La raison pour laquelle un nombre pair de valeurs est requis est que chaque tableau de tirets commence par un tiret et se termine par un espace. Ainsi, le motif défini est un tiret de cinq unités, un espace de cinq unités, un tiret d'une unité, un espace de cinq unités, un tiret de cinq unités et un espace d'une unité. Dans le contour résultant, chaque instance d'un espace d'une unité entre deux tirets de cinq unités indique un endroit où le tableau de tirets recommence.

### Pourcentages et valeurs en pixels

Cet exemple démontre l'utilisation de valeurs `<percentage>` et `<length>` dans la valeur de la propriété `stroke-dasharray`.

#### HTML

Comme dans l'exemple précédent, nous définissons deux rectangles.

```html
<svg viewBox="0 0 100 100" width="500" height="500">
  <rect
    x="10"
    y="10"
    width="80"
    height="30"
    fill="none"
    stroke="red"
    stroke-width="2" />
  <rect
    x="10"
    y="60"
    width="80"
    height="30"
    fill="none"
    stroke="red"
    stroke-width="2" />
</svg>
```

#### CSS

Cette fois, plutôt que des collections de nombres bruts, nous utilisons des unités en pixels et des pourcentages.

```css
rect:nth-of-type(1) {
  stroke-dasharray: 5px, 5px, 1px;
}
rect:nth-of-type(2) {
  stroke-dasharray: 5%, 5%, 1%;
}
```

#### Résultats

{{EmbedLiveSample("Pourcentages et valeurs en pixels", 500, 500)}}

Les résultats sont essentiellement indiscernables de ceux de l'exemple précédent.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("stroke-dashoffset")}}
- La propriété {{CSSxRef("stroke-linecap")}}
- La propriété {{CSSxRef("stroke-linejoin")}}
- La propriété {{CSSxRef("stroke-miterlimit")}}
- La propriété {{CSSxRef("stroke-opacity")}}
- La propriété {{CSSxRef("stroke-width")}}
- La propriété raccourcie {{CSSxRef("stroke")}}
- L'attribut SVG {{SVGAttr("stroke-dasharray")}}
