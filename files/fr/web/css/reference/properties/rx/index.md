---
title: Propriété CSS `rx`
short-title: rx
slug: Web/CSS/Reference/Properties/rx
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`rx`** définit le rayon de l'axe x, ou horizontal, d'une {{SVGElement("ellipse")}} SVG et la courbure horizontale des coins d'un rectangle {{SVGElement("rect")}} SVG. Si elle est présente, elle remplace l'attribut {{SVGAttr("rx")}} de la forme.

> [!NOTE]
> La propriété `rx` ne s'applique qu'aux éléments SVG {{SVGElement("ellipse")}} et {{SVGElement("rect")}} imbriqués dans un {{SVGElement("svg")}}. Elle ne s'applique pas aux autres éléments SVG, aux éléments HTML ou aux pseudo-éléments.

## Syntaxe

```css
/* Valeur initiale */
rx: auto;

/* Valeurs de longueur et de pourcentage */
rx: 20px;
rx: 20%;

/* Valeurs globales */
rx: inherit;
rx: initial;
rx: revert;
rx: revert-layer;
rx: unset;
```

### Valeurs

La valeur de type {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, ou le mot-clé `auto` désigne le rayon horizontal des ellipses et le rayon de bordure horizontal des rectangles.

- {{CSSxRef("&lt;length&gt;")}}
  - : Les longueurs absolues ou relatives peuvent être exprimées dans n'importe quelle unité autorisée par le type de données CSS {{CSSxRef("&lt;length&gt;")}}. Les valeurs négatives sont invalides.

- {{CSSxRef("&lt;percentage&gt;")}}
  - : Les pourcentages se réfèrent à la largeur de la fenêtre SVG actuelle. La valeur utilisée pour un `<rect>` n'est jamais supérieure à 50% de la largeur du rectangle.

- `auto`
  - : Lorsque la valeur est définie sur `auto` ou par défaut, la valeur de `rx` est égale à la valeur absolue utilisée pour {{CSSxRef("ry")}}. Si `rx` et `ry` ont tous deux une valeur calculée de `auto`, la valeur utilisée est `0`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Créer des coins arrondis

Cet exemple montre comment créer des rectangles avec des coins arrondis en appliquant la propriété `rx` aux éléments `<rect>` SVG.

#### HTML

Nous incluons une image SVG avec quatre éléments `<rect>` ; tous les rectangles sont identiques sauf pour la valeur de leur attribut {{SVGAttr("x")}}, qui les positionne le long de l'axe x.

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

Avec CSS, nous définissons une valeur `rx` sur quatre des rectangles&nbsp;:

```css
svg {
  border: 1px solid;
}

rect:nth-of-type(2) {
  rx: 10px;
  fill: red;
}

rect:nth-of-type(3) {
  rx: 2em;
  fill: blue;
}

rect:nth-of-type(4) {
  rx: 5%;
  fill: orange;
}

rect:nth-of-type(5) {
  rx: 80%;
  fill: green;
}
```

#### Résultats

{{EmbedLiveSample("Créer des coins arrondis", 300, 180)}}

Le premier rectangle utilise la valeur par défaut `auto`&nbsp;; comme toutes les valeurs `ry` de cet exemple utilisent également `auto` par défaut, la valeur utilisée de `rx` est `0`. Les rectangles rouge et bleu ont des coins arrondis de `10px` et `2em`, respectivement. Comme la fenêtre SVG par défaut est de 300px par 150px, la valeur de `5%` du rectangle orange crée un rayon de `15px`. Le rectangle vert a `rx: 80%` défini. Cependant, comme la valeur de `rx` n'est jamais supérieure à `50%` de la largeur du rectangle, l'effet est comme si `rx: 50%; ry: 50%` était défini.

### Définir le rayon horizontal d'une ellipse

Cet exemple de base `<ellipse>` montre comment la propriété CSS `rx` prend le pas sur un attribut SVG `rx` pour définir le rayon horizontal de la forme.

#### HTML

Nous incluons deux éléments `<ellipse>` identiques dans un SVG&nbsp;; chacun avec l'attribut `rx` défini sur `20`.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="80" cy="50" rx="20" ry="40" />
  <ellipse cx="80" cy="50" rx="20" ry="40" />
</svg>
```

#### CSS

Nous mettons en forme uniquement la première ellipse, laissant sa jumelle utiliser les styles par défaut de l'agent utilisateur (avec {{CSSxRef("fill")}} par défaut à noir). La propriété géométrique `rx` remplace la valeur de l'attribut SVG {{SVGAttr("rx")}}. Nous définissons également les propriétés `fill` et {{CSSxRef("stroke")}} pour différencier la mise en forme de sa jumelle.

```css
svg {
  border: 1px solid;
}

ellipse:first-of-type {
  rx: 80px;
  fill: magenta;
  stroke: rebeccapurple;
}
```

#### Résultat

{{EmbedLiveSample("Définir le rayon horizontal d'une ellipse", 300, 180)}}

Le rayon horizontal de l'ellipse mise en forme est de `80px`, comme défini dans la valeur de la propriété CSS `rx`. Le rayon horizontal de l'ellipse non mise en forme est de `20px`, défini par l'attribut `rx`.

### Valeurs en pourcentage du rayon horizontal d'une ellipse

Cet exemple montre comment utiliser des valeurs en pourcentage pour `rx`.

#### HTML

Nous utilisons le même balisage que dans l'exemple précédent.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="80" cy="50" rx="20" ry="40" />
  <ellipse cx="80" cy="50" rx="20" ry="40" />
</svg>
```

#### CSS

Le CSS est similaire à l'exemple précédent, la seule différence étant la valeur de la propriété `rx`&nbsp;; dans ce cas, nous utilisons une valeur en pourcentage.

```css
svg {
  border: 1px solid;
}

ellipse:first-of-type {
  rx: 30%;
  fill: magenta;
  stroke: rebeccapurple;
}
```

#### Résultat

{{EmbedLiveSample("Valeurs en pourcentage du rayon horizontal d'une ellipse", 300, 180)}}

Lorsque vous utilisez des valeurs en pourcentage pour `rx`, les valeurs sont relatives à la largeur de la fenêtre SVG. Ici, la taille du rayon horizontal de l'ellipse stylée est de `30%` de la largeur de la fenêtre SVG actuelle. Comme la largeur par défaut est de `300px`, la valeur de `rx` est de `90px`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés de géométrie&nbsp;: `rx`, {{CSSxRef("cx")}}, {{CSSxRef("cy")}}, {{CSSxRef("r")}}, {{CSSxRef("ry")}}, {{CSSxRef("x")}}, {{CSSxRef("y")}}, {{CSSxRef("width")}}, {{CSSxRef("height")}}
- La propriété {{CSSxRef("fill")}}
- La propriété {{CSSxRef("stroke")}}
- La propriété {{CSSxRef("paint-order")}}
- La propriété raccourcie {{CSSxRef("border-radius")}}
- La fonction {{CSSxRef("gradient/radial-gradient", "radial-gradient()")}}
- Le type de donnée {{CSSxRef("basic-shape")}}
- L'attribut SVG {{SVGAttr("rx")}}
