---
title: cy
slug: Web/CSS/Reference/Properties/cy
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`cy`** définit le point central sur l'axe des ordonnées d'un élément SVG {{SVGElement("circle")}} ou {{SVGElement("ellipse")}}. Si elle est présente, elle remplace l'attribut SVG {{SVGAttr("cy")}} de l'élément.

> [!NOTE]
> Bien que l'attribut SVG {{SVGAttr("cy")}} soit pris en charge par l'élément SVG {{SVGElement("radialGradient")}}, la propriété `cy` ne s'applique qu'aux éléments {{SVGElement("circle")}} et {{SVGElement("ellipse")}} imbriqués dans un {{SVGElement("svg")}}. Cette propriété ne s'applique ni à `<radialGradient>`, ni à d'autres éléments SVG, ni aux éléments HTML ou pseudo-éléments.

## Syntaxe

```css
/* Valeurs de longueur et de pourcentage */
cy: 3px;
cy: 20%;

/* Valeurs globales */
cy: inherit;
cy: initial;
cy: revert;
cy: revert-layer;
cy: unset;
```

### Valeurs

Les valeurs {{CSSxRef("&lt;length&gt;")}} et {{CSSxRef("&lt;percentage&gt;")}} indiquent le centre vertical du cercle ou de l'ellipse.

- {{CSSxRef("&lt;length&gt;")}}
  - : En tant que longueur absolue ou relative, elle peut être exprimée dans n'importe quelle unité autorisée par le type de donnée CSS {{CSSxRef("&lt;length&gt;")}}. Les valeurs négatives sont invalides.

- {{CSSxRef("&lt;percentage&gt;")}}
  - : Les pourcentages se réfèrent à la hauteur de la zone d'affichage SVG actuelle.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir la coordonnée de l'axe y d'un cercle et d'une ellipse

Dans cet exemple, nous avons deux éléments `<circle>` identiques et deux éléments `<ellipse>` identiques dans un SVG&nbsp;; leurs valeurs d'attribut `cy` sont respectivement `50px` et `150px`.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="30" />
  <circle cx="50" cy="50" r="30" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
</svg>
```

Avec CSS, nous mettons en forme uniquement le premier cercle et la première ellipse, laissant leurs jumeaux utiliser les styles par défaut (avec {{CSSxRef("fill")}} par défaut à noir). Nous utilisons la propriété `cy` pour remplacer la valeur de l'attribut SVG {{SVGAttr("cy")}} et ajoutons aussi un `fill` et {{CSSxRef("stroke")}} pour différencier les premiers éléments de chaque paire de leur jumeau. Le navigateur affiche les images SVG avec une largeur de `300px` et une hauteur de `150px` par défaut.

```css
svg {
  border: 1px solid;
}

circle:first-of-type {
  cy: 30px;
  fill: lightgreen;
  stroke: black;
}
ellipse:first-of-type {
  cy: 100px;
  fill: pink;
  stroke: black;
}
```

{{EmbedLiveSample("Définir la coordonnée de l'axe y d'un cercle et d'une ellipse", 300, 180)}}

Le centre du cercle mis en forme est à `30px` du bord supérieur de la zone d'affichage SVG et l'ellipse mise en forme est à `100px` de ce bord, comme défini dans les valeurs de la propriété CSS `cy`. Les centres des formes non stylisées sont tous deux à `50px` du bord supérieur de la zone d'affichage SVG, comme défini dans leurs valeurs de l'attribut SVG `cy`.

### Coordonnées de l'axe y en valeurs de pourcentage

Dans cet exemple, nous utilisons la même structure que dans l'exemple précédent. La seule différence est la valeur de la propriété CSS `cy`&nbsp;; dans ce cas, nous utilisons les valeurs de pourcentage `30%` et `50%`.

```html hidden
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="30" />
  <circle cx="50" cy="50" r="30" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
</svg>
```

```css
svg {
  border: 1px solid;
}

circle:first-of-type {
  cy: 30%;
  fill: lightgreen;
  stroke: black;
}
ellipse:first-of-type {
  cy: 50%;
  fill: pink;
  stroke: black;
}
```

{{EmbedLiveSample("Coordonnées de l'axe y en valeurs de pourcentage", 300, 180)}}

Dans ce cas, les coordonnées sur l'axe y du centre du cercle et de l'ellipse sont respectivement `30%` et `50%` de la hauteur de la zone d'affichage SVG actuelle. Comme la hauteur de l'image par défaut est de `150px`, la valeur de `cy` équivaut donc à `45px` et `120px`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut SVG {{SVGAttr("cy")}}
- Les propriétés géométriques&nbsp;: `cy`, {{CSSxRef("cx")}}, {{CSSxRef("r")}}, {{CSSxRef("rx")}}, {{CSSxRef("ry")}}, {{CSSxRef("x")}}, {{CSSxRef("y")}}, {{CSSxRef("width")}}, {{CSSxRef("height")}}
- La propriété {{CSSxRef("fill")}}
- La propriété {{CSSxRef("stroke")}}
- La propriété {{CSSxRef("paint-order")}}
- La propriété raccourcie {{CSSxRef("border-radius")}}
- La fonction {{CSSxRef("gradient/radial-gradient", "radial-gradient()")}}
- Le type de données {{CSSxRef("basic-shape")}}
