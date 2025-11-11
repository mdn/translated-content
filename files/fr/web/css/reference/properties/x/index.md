---
title: x
slug: Web/CSS/Reference/Properties/x
original_slug: Web/CSS/x
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
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

La longueur {{cssxref("length")}} et le pourcentage {{cssxref("percentage")}} indiquent la position des coordonnées de l'axe des x du coin supérieur gauche de l'élément SVG.

- {{cssxref("length")}}
  - : En tant que longueur absolue ou relative, elle peut être exprimée dans n'importe quelle unité autorisée par le type de données CSS {{cssxref("&lt;length&gt;")}}.

- {{cssxref("percentage")}}
  - : Les pourcentages se réfèrent à la hauteur du SVG {{SVGAttr("viewBox")}}, s'il est déclaré, sinon, le pourcentage fait référence à la hauteur de la fenêtre SVG actuelle.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{csssyntax}}

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

Nous stylisons tous les rectangles pour qu'ils aient une bordure noire et soient légèrement transparents, de sorte que les rectangles qui se chevauchent soient visibles. Nous fournissons aux rectangles différents remplissages {{cssxref("fill")}} et valeurs en `x`.

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

{{EmbedLiveSample("Définition des coordonnées de l'axe x des formes SVG", "300", "180")}}

Les bords gauches des rectangles sont à `10` (à partir de l'attribut), `3em`, `180px`, et `50%`, respectivement. Le SVG est de `300px` de large, de sorte que le côté gauche du dernier rectangle est la marque des `150px`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut SVG {{SVGAttr("x")}}
- Propriétés de géométrie `x`, {{cssxref("cx")}}, {{cssxref("cy")}}, {{cssxref("r")}}, {{cssxref("rx")}}, {{cssxref("ry")}}, {{cssxref("y")}}, {{cssxref("width")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- Type de données {{cssxref("basic-shape")}}
