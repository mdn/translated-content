---
title: r
slug: Web/CSS/Reference/Properties/r
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`r`** définit le rayon d'un cercle. Elle ne peut être utilisée qu'avec l'élément SVG {{SVGElement("circle")}}. Si elle est présente, elle remplace l'attribut {{SVGAttr("r")}} du cercle.

> [!NOTE]
> La propriété `r` ne s'applique qu'aux éléments SVG {{SVGElement("circle")}} imbriqués dans un {{SVGElement("svg")}}. Elle ne s'applique pas aux autres éléments SVG, aux éléments HTML ou aux pseudo-éléments.

## Syntaxe

```css
/* Valeurs de longueur et de pourcentage */
r: 3px;
r: 20%;

/* Valeurs globales */
r: inherit;
r: initial;
r: revert;
r: revert-layer;
r: unset;
```

### Valeurs

Les valeurs de type {{CSSxRef("&lt;length&gt;")}} et {{CSSxRef("&lt;percentage&gt;")}} définissent le rayon du cercle.

- {{CSSxRef("&lt;length&gt;")}}
  - : Les longueurs absolues ou relatives peuvent être exprimées dans n'importe quelle unité autorisée par le type de données CSS {{CSSxRef("&lt;length&gt;")}}. Les valeurs négatives ne sont pas valides.

- {{CSSxRef("&lt;percentage&gt;")}}
  - : Les pourcentages se réfèrent à la diagonale normalisée de la fenêtre SVG actuelle, qui est calculée comme <math><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math>.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir le rayon d'un cercle

Dans cet exemple, nous avons deux éléments `<circle>` identiques dans un SVG, chacun avec un rayon de `10` et les mêmes coordonnées x et y pour leurs points centraux.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="10" />
  <circle cx="50" cy="50" r="10" />
</svg>
```

Avec CSS, nous stylons uniquement le premier cercle, permettant au deuxième cercle d'utiliser les styles par défaut (avec {{CSSxRef("fill")}} par défaut à noir). Nous utilisons la propriété `r` pour remplacer la valeur de l'attribut SVG {{SVGAttr("r")}}, en lui donnant un `fill` et {{CSSxRef("stroke")}}. La taille par défaut d'un SVG est de `300px` de large et `150px` de haut.

```css
svg {
  border: 1px solid black;
}

circle:first-of-type {
  r: 30px;
  fill: lightgreen;
  stroke: black;
}
```

{{EmbedLiveSample("Définir le rayon d'un cercle", 300, 180)}}

### Différence entre `viewBox` et les pixels de la fenêtre d'affichage

Cet exemple contient deux SVG, chacun avec deux éléments `<circle>`. Le deuxième SVG inclut un attribut `viewBox` pour démontrer la différence entre le `viewBox` SVG et les fenêtres d'affichage SVG.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="10" />
  <circle cx="50" cy="50" r="10" />
</svg>
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="10" />
  <circle cx="50" cy="50" r="10" />
</svg>
```

Le CSS est similaire à l'exemple précédent, avec `r: 30px` défini, mais nous définissons une {{CSSxRef("width")}} pour garantir que les images ont toutes deux une largeur de `300px`&nbsp;:

```css
svg {
  border: 1px solid black;
  width: 300px;
}

circle:first-of-type {
  r: 30px;
  fill: lightgreen;
  stroke: black;
}
```

{{EmbedLiveSample("Différence entre `viewBox` et les pixels de la fenêtre d'affichage", 300, 360)}}

Parce que l'attribut `viewBox` définit le SVG avec une largeur de 200 pixels dans le système de coordonnées SVG et que l'image est agrandie à `300px`, les `30` pixels de coordonnées SVG sont mis à l'échelle pour être affichés sous forme de `45` pixels CSS.

## Définir le rayon d'un cercle en utilisant des pourcentages

Dans cet exemple, nous utilisons le même balisage que dans l'exemple précédent. La seule différence est la valeur de `r`&nbsp;; dans ce cas, nous utilisons une valeur en pourcentage.

```html hidden
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="10" />
  <circle cx="50" cy="50" r="10" />
</svg>
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="10" />
  <circle cx="50" cy="50" r="10" />
</svg>
```

```css
svg {
  border: 1px solid black;
  width: 300px;
}

circle:first-of-type {
  r: 30%;
  fill: lightgreen;
  stroke: black;
}
```

{{EmbedLiveSample("Définir le rayon d'un cercle en utilisant des pourcentages", 300, 360)}}

Dans les deux cas, le rayon du cercle est de `30%` de la diagonale normalisée de la fenêtre d'affichage SVG. Le rayon `r` est égal à <math><mn>0.3</mn><mo>&#xd7;</mo><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math>. Alors que la première image utilise `300` et `150` pixels CSS et que la seconde utilise `200` et `100` unités de la boîte de vue SVG, 30% est une valeur proportionnelle. En conséquence, la valeur de `r` est la même&nbsp;: `47.43` unités de la boîte de vue, ce qui correspond à `71.15` pixels CSS.

Alors que le `r` est le même, les points centraux diffèrent parce que le second SVG est agrandi de 50%, décalant son centre vers le bas et vers la droite de 50%.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés de géométrie&nbsp;: `r`, {{CSSxRef("cx")}}, {{CSSxRef("cy")}}, {{CSSxRef("rx")}}, {{CSSxRef("ry")}}, {{CSSxRef("x")}}, {{CSSxRef("y")}}, {{CSSxRef("width")}}, {{CSSxRef("height")}}
- La propriété {{CSSxRef("fill")}}
- La propriété {{CSSxRef("stroke")}}
- La propriété {{CSSxRef("paint-order")}}
- La propriété raccourcie {{CSSxRef("border-radius")}}
- La fonction {{CSSxRef("gradient/radial-gradient", "radial-gradient()")}}
- Le type de donnée {{CSSxRef("basic-shape")}}
- L'attribut SVG {{SVGAttr("r")}}
