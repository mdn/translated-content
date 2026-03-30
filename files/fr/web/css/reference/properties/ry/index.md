---
title: ry
slug: Web/CSS/Reference/Properties/ry
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`ry`** définit le rayon de l'axe y, ou vertical, d'une {{SVGElement("ellipse")}} SVG et la courbure verticale des coins d'un rectangle {{SVGElement("rect")}} SVG. Si elle est présente, elle remplace l'attribut {{SVGAttr("ry")}} de la forme.

> [!NOTE]
> La propriété `ry` ne s'applique qu'aux éléments SVG {{SVGElement("ellipse")}} et {{SVGElement("rect")}} imbriqués dans un {{SVGElement("svg")}}. Elle ne s'applique pas aux autres éléments SVG, aux éléments HTML ou aux pseudo-éléments.

## Syntaxe

```css
/* Valeur initiale */
ry: auto;

/* Valeurs de longueur et de pourcentage */
ry: 30px;
ry: 30%;

/* Valeurs globales */
ry: inherit;
ry: initial;
ry: revert;
ry: revert-layer;
ry: unset;
```

### Valeurs

La valeur de type {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, ou le mot-clé `auto` désigne le rayon vertical des ellipses et le rayon de bordure vertical des rectangles.

- {{CSSxRef("&lt;length&gt;")}}
  - : Les longueurs absolues ou relatives peuvent être exprimées dans n'importe quelle unité autorisée par le type de données CSS {{CSSxRef("&lt;length&gt;")}}. Les valeurs négatives sont invalides.

- {{CSSxRef("&lt;percentage&gt;")}}
  - : Les pourcentages se réfèrent à la hauteur de la fenêtre SVG actuelle. La valeur utilisée pour un `<rect>` n'est jamais supérieure à 50% de la hauteur du rectangle.

- `auto`
  - : Lorsque la valeur est définie sur `auto` ou par défaut, la valeur de `ry` est égale à la valeur absolue utilisée pour {{CSSxRef("rx")}}. Si `ry` et `rx` ont tous deux une valeur calculée de `auto`, la valeur utilisée est `0`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Créer des coins arrondis

Cet exemple montre comment créer des rectangles avec des coins arrondis en appliquant la propriété `ry` aux éléments `<rect>` SVG.

#### HTML

Nous incluons une image SVG avec quatre éléments `<rect>`&nbsp;; tous les rectangles sont identiques sauf pour la valeur de leur attribut {{SVGAttr("x")}}, qui les positionne le long de l'axe x.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <rect width="50" height="120" y="5" x="5" />
  <rect width="50" height="120" y="5" x="60" />
  <rect width="50" height="120" y="5" x="115" />
  <rect width="50" height="120" y="5" x="170" />
  <rect width="50" height="120" y="5" x="225" />
</svg>
```

#### CSS

Avec CSS, nous définissons une valeur `ry` sur quatre des rectangles&nbsp;:

```css
svg {
  border: 1px solid;
}

rect:nth-of-type(2) {
  ry: 10px;
  fill: red;
}

rect:nth-of-type(3) {
  ry: 2em;
  fill: blue;
}

rect:nth-of-type(4) {
  ry: 5%;
  fill: orange;
}

rect:nth-of-type(5) {
  ry: 80%;
  fill: green;
}
```

#### Résultats

{{EmbedLiveSample("Créer des coins arrondis", 300, 180)}}

Le premier rectangle utilise la valeur par défaut `auto`&nbsp;; comme toutes les valeurs `rx` de cet exemple utilisent également `auto` par défaut, la valeur utilisée de `ry` est `0`. Les rectangles rouge et bleu ont des coins arrondis de `10px` et `2em`, respectivement. Comme la fenêtre SVG par défaut est de 300px par 150px, la valeur de `5%` du rectangle orange crée un rayon de `7,5px`. Le rectangle vert a `ry: 80%` défini. Cependant, comme la valeur de `ry` n'est jamais supérieure à `50%` de la hauteur du rectangle, l'effet est comme si `ry: 50%; rx: 50%` était défini.

### Définir le rayon vertical d'une ellipse

Cet exemple de base `<ellipse>` montre comment la propriété CSS `ry` prend le pas sur un attribut SVG `ry` pour définir le rayon vertical de la forme.

#### HTML

Nous incluons deux éléments `<ellipse>` identiques dans un SVG&nbsp;; chacun avec l'attribut `ry` défini sur `20`.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="80" cy="50" rx="40" ry="20" />
  <ellipse cx="80" cy="50" rx="40" ry="20" />
</svg>
```

#### CSS

Nous mettons en forme uniquement la première ellipse, laissant sa jumelle utiliser les styles par défaut de l'agent utilisateur (avec {{CSSxRef("fill")}} par défaut à noir). La propriété géométrique `ry` remplace la valeur de l'attribut SVG {{SVGAttr("ry")}}. Nous définissons également les propriétés `fill` et {{CSSxRef("stroke")}} pour différencier la mise en forme de sa jumelle.

```css
svg {
  border: 1px solid;
}

ellipse:first-of-type {
  ry: 80px;
  fill: magenta;
  stroke: rebeccapurple;
}
```

#### Résultat

{{EmbedLiveSample("Définir le rayon vertical d'une ellipse", 300, 180)}}

Le rayon vertical de l'ellipse mise en forme est de `80px`, comme défini dans la valeur de la propriété CSS `ry`. Le rayon vertical de l'ellipse non mise en forme est de `20px`, qui était défini par l'attribut `ry`.

### Valeurs en pourcentage du rayon vertical d'une ellipse

Cet exemple montre comment utiliser des valeurs en pourcentage pour `ry`.

#### HTML

Nous utilisons le même balisage que dans l'exemple précédent.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="80" cy="50" rx="40" ry="20" />
  <ellipse cx="80" cy="50" rx="40" ry="20" />
</svg>
```

#### CSS

Le CSS est similaire à l'exemple précédent, la seule différence étant la valeur de la propriété `ry`&nbsp;; dans ce cas, nous utilisons une valeur en pourcentage.

```css
svg {
  border: 1px solid;
}

ellipse:first-of-type {
  ry: 30%;
  fill: magenta;
  stroke: rebeccapurple;
}
```

#### Résultat

{{EmbedLiveSample("Valeurs en pourcentage du rayon vertical d'une ellipse", 300, 180)}}

Lorsque vous utilisez des valeurs en pourcentage pour `ry`, les valeurs sont relatives à la hauteur de la fenêtre SVG. Ici, la taille du rayon vertical de l'ellipse stylée est de `30%` de la hauteur de la fenêtre SVG actuelle. Comme la hauteur par défaut est de `150px`, la valeur de `ry` est de `45px`, ce qui rend l'ellipse haute de `90px`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés de géométrie&nbsp;: `ry`, {{CSSxRef("cx")}}, {{CSSxRef("cy")}}, {{CSSxRef("r")}}, {{CSSxRef("rx")}}, {{CSSxRef("x")}}, {{CSSxRef("y")}}, {{CSSxRef("width")}}, {{CSSxRef("height")}}
- La propriété {{CSSxRef("fill")}}
- La propriété {{CSSxRef("stroke")}}
- La propriété {{CSSxRef("paint-order")}}
- La propriété raccourcie {{CSSxRef("border-radius")}}
- La fonction {{CSSxRef("gradient/radial-gradient", "radial-gradient()")}}
- Le type de donnée {{CSSxRef("basic-shape")}}
- L'attribut SVG {{SVGAttr("ry")}}
