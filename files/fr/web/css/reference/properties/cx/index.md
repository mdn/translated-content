---
title: cx
slug: Web/CSS/Reference/Properties/cx
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`cx`** définit le point central sur l'axe des abscisses d'un élément SVG {{SVGElement("circle")}} ou {{SVGElement("ellipse")}}. Si elle est présente, elle remplace l'attribut SVG {{SVGAttr("cx")}} de l'élément.

> [!NOTE]
> Bien que l'attribut SVG {{SVGAttr("cx")}} soit pertinent pour l'élément SVG {{SVGElement("radialGradient")}}, la propriété `cx` ne s'applique qu'aux éléments {{SVGElement("circle")}} et {{SVGElement("ellipse")}} imbriqués dans un {{SVGElement("svg")}}. Elle ne s'applique ni à `<radialGradient>`, ni à d'autres éléments SVG, ni aux éléments HTML ou pseudo-éléments.

## Syntaxe

```css
/* Valeurs de longueur et de pourcentage */
cx: 20px;
cx: 20%;

/* Valeurs globales */
cx: inherit;
cx: initial;
cx: revert;
cx: revert-layer;
cx: unset;
```

### Valeurs

Les valeurs {{CSSxRef("&lt;length&gt;")}} et {{CSSxRef("&lt;percentage&gt;")}} indiquent le centre horizontal du cercle ou de l'ellipse.

- {{CSSxRef("&lt;length&gt;")}}
  - : En tant que longueur absolue ou relative, elle peut être exprimée dans n'importe quelle unité autorisée par le type de donnée CSS {{CSSxRef("&lt;length&gt;")}}. Les valeurs négatives sont invalides.

- {{CSSxRef("&lt;percentage&gt;")}}
  - : Les pourcentages se réfèrent à la largeur de la zone d'affichage SVG actuelle.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir la coordonnée de l'axe x d'un cercle et d'une ellipse

Cet exemple montre le cas d'utilisation de base de `cx`, et comment la propriété CSS `cx` prend le dessus sur l'attribut `cx`.

#### HTML

Nous incluons deux éléments `<circle>` identiques et deux éléments `<ellipse>` identiques dans un SVG&nbsp;; leurs valeurs d'attribut `cx` sont respectivement `50` et `150`.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="30" />
  <circle cx="50" cy="50" r="30" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
</svg>
```

#### CSS

Avec CSS, nous mettons en forme uniquement le premier cercle et la première ellipse, laissant leurs jumeaux utiliser les styles par défaut (avec {{CSSxRef("fill")}} par défaut à noir). Nous utilisons la propriété `cx` pour remplacer la valeur de l'attribut SVG {{SVGAttr("cx")}} et ajoutons aussi un `fill` et {{CSSxRef("stroke")}} pour différencier les premiers éléments de chaque paire de leur jumeau. Le navigateur affiche les images SVG avec une largeur de `300px` et une hauteur de `150px` par défaut.

```css
svg {
  border: 1px solid;
}

circle:first-of-type {
  cx: 30px;
  fill: lightgreen;
  stroke: black;
}
ellipse:first-of-type {
  cx: 180px;
  fill: pink;
  stroke: black;
}
```

#### Résultats

{{EmbedLiveSample("Définir la coordonnée de l'axe x d'un cercle et d'une ellipse", 300, 180)}}

Le centre du cercle mis en forme est à `30px` du bord gauche de la zone d'affichage SVG et l'ellipse mise en forme est à `180px` de ce bord, comme défini dans les valeurs de la propriété CSS `cx`. Les centres des formes non stylisées sont à `50px` et `150px` du bord gauche de la zone d'affichage SVG, comme défini dans leurs valeurs d'attribut SVG `cx`.

### Coordonnées de l'axe x en pourcentage

Cet exemple montre l'utilisation de valeurs de pourcentage pour `cx`.

#### HTML

Nous utilisons la même structure que dans l'exemple précédent.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="30" />
  <circle cx="50" cy="50" r="30" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
</svg>
```

#### CSS

Nous utilisons un CSS similaire à l'exemple précédent. La seule différence est la valeur de la propriété CSS `cx`&nbsp;; dans ce cas, nous utilisons les valeurs de pourcentage `30%` pour le `<circle>` et `80%` pour le `<ellipse>`.

```css
svg {
  border: 1px solid;
}

circle:first-of-type {
  cx: 30%;
  fill: lightgreen;
  stroke: black;
}
ellipse:first-of-type {
  cx: 80%;
  fill: pink;
  stroke: black;
}
```

#### Résultats

{{EmbedLiveSample("Coordonnées de l'axe x en pourcentage", 300, 180)}}

Lorsque vous utilisez des valeurs de pourcentage pour `cx`, celles-ci sont relatives à la largeur de la zone d'affichage SVG. Ici, les coordonnées sur l'axe x du centre du cercle et de l'ellipse mis en forme sont respectivement `30%` et `80%` de la largeur de la zone d'affichage SVG actuelle. Comme la largeur par défaut est de `300px`, les valeurs de `cx` sont donc `90px` et `240px` à partir du bord gauche de la zone d'affichage SVG.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut SVG {{SVGAttr("cx")}}
- Les propriétés géométriques&nbsp;: `cx`, {{CSSxRef("cy")}}, {{CSSxRef("r")}}, {{CSSxRef("rx")}}, {{CSSxRef("ry")}}, {{CSSxRef("x")}}, {{CSSxRef("y")}}, {{CSSxRef("width")}}, {{CSSxRef("height")}}
- La propriété {{CSSxRef("fill")}}
- La propriété {{CSSxRef("stroke")}}
- La propriété {{CSSxRef("paint-order")}}
- La propriété raccourcie {{CSSxRef("border-radius")}}
- La fonction {{CSSxRef("gradient/radial-gradient", "radial-gradient()")}}
- Le type de données {{CSSxRef("basic-shape")}}
