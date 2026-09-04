---
title: Propriété CSS `x`
short-title: x
slug: Web/CSS/Reference/Properties/x
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`x`** définit la coordonnée de l'axe x du coin supérieur gauche de l'élément de forme SVG {{SVGElement("rect")}}, d'image {{SVGElement("image")}}, de fenêtre {{SVGElement("foreignObject")}} et de l'élément imbriqué {{SVGElement("svg")}} par rapport au plus proche `<svg>` présent dans le [système de coordonée](/fr/docs/Web/API/CSSOM_view_API/Coordinate_systems). S'il est présent, il remplace l'attribut {{SVGAttr("x")}}.

> [!NOTE]
> La propriété `x` ne s'applique qu'aux éléments {{SVGElement("rect")}}, {{SVGElement("image")}}, {{SVGElement("foreignObject")}}, et {{SVGElement("svg")}} imbriqués dans un élément `<svg>`. Il n'a aucun effet sur les zones `<svg>` extérieures et ne s'applique pas aux autres éléments SVG ni aux éléments ou pseudo-éléments HTML.

## Syntaxe

```css
/* Valeurs de longueur et en pourcentage */
x: 40px;
x: 40%;

/* Valeurs globales */
x: inherit;
x: initial;
x: revert;
x: revert-layer;
x: unset;
```

### Valeurs

La longueur ({{CSSxRef("&lt;length&gt;")}}) et le pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) indiquent la position des coordonnées de l'axe des x du coin supérieur gauche de l'élément SVG.

- {{CSSxRef("&lt;length&gt;")}}
  - : En tant que longueur absolue ou relative, elle peut être exprimée dans n'importe quelle unité autorisée par le type de données CSS {{CSSxRef("&lt;length&gt;")}}.

- {{CSSxRef("&lt;percentage&gt;")}}
  - : Les pourcentages se réfèrent à la hauteur du SVG {{SVGAttr("viewBox")}}, s'il est déclaré, sinon, le pourcentage fait référence à la hauteur de la fenêtre SVG actuelle.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définition des coordonnées de l'axe x des formes SVG

Cet exemple illustre le cas d'utilisation de base de `x`, et comment la propriété CSS `x` a préséance sur l'attribut `x`.

#### HTML

Nous incluons quatre SVG identiques de l'élément `<rect>`&nbsp;; leurs valeurs des attributs `x` et {{SVGAttr("y")}} sont toutes de `10`, ce qui signifie que les quatre rectangles sont tous au même endroit, `10px` en haut et à gauche de la fenêtre SVG.

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" x="10" y="10" />
  <rect width="100" height="100" x="10" y="10" />
  <rect width="100" height="100" x="10" y="10" />
  <rect width="100" height="100" x="10" y="10" />
</svg>
```

#### CSS

Nous stylisons tous les rectangles pour qu'ils aient une bordure noire et soient légèrement transparents, de sorte que les rectangles qui se chevauchent soient visibles. Nous fournissons aux rectangles différents remplissages {{CSSxRef("fill")}} et valeurs en `x`.

```css
svg {
  border: 1px solid;
  width: 300px;
}

rect {
  fill: none;
  stroke: black;
  opacity: 0.8;
}

rect:nth-of-type(2) {
  x: 3em;
  fill: red;
}

rect:nth-of-type(3) {
  x: 180px;
  fill: yellow;
}

rect:nth-of-type(4) {
  x: 50%;
  fill: orange;
}
```

#### Résultats

{{EmbedLiveSample("Définition des coordonnées de l'axe x des formes SVG", 300, 180)}}

Les bords gauches des rectangles sont à `10` (à partir de l'attribut), `3em`, `180px`, et `50%`, respectivement. Le SVG est de `300px` de large, de sorte que le côté gauche du dernier rectangle est la marque des `150px`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut SVG {{SVGAttr("x")}}
- Les propriétés de géométrie `x`, {{CSSxRef("cx")}}, {{CSSxRef("cy")}}, {{CSSxRef("r")}}, {{CSSxRef("rx")}}, {{CSSxRef("ry")}}, {{CSSxRef("y")}}, {{CSSxRef("width")}}, {{CSSxRef("height")}}
- La propriété {{CSSxRef("fill")}}
- La propriété {{CSSxRef("stroke")}}
- La propriété {{CSSxRef("paint-order")}}
- Le type de données {{CSSxRef("basic-shape")}}
