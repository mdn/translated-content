---
title: y
slug: Web/CSS/Reference/Properties/y
original_slug: Web/CSS/y
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La propriété [CSS](/fr/docs/Web/CSS) **`y`** définit la coordonnée de l'axe y du coin supérieur gauche de l'élément de forme SVG {{SVGElement("rect")}}, d'image {{SVGElement("image")}}, de fenêtre {{SVGElement("foreignObject")}} et de l'élément imbriqué {{SVGElement("svg")}} par rapport au plus proche `<svg>` présent dans le [système de coordonée](/fr/docs/Web/API/CSSOM_view_API/Coordinate_systems). S'il est présent, il remplace l'attribut {{SVGAttr("y")}}.

> [!NOTE]
> La propriété `y` ne s'applique qu'aux éléments {{SVGElement("rect")}}, {{SVGElement("image")}}, {{SVGElement("foreignObject")}}, et {{SVGElement("svg")}} imbriqués dans un élément `<svg>`. Il n'a aucun effet sur les zones `<svg>` extérieures et ne s'applique pas aux autres éléments SVG ni aux éléments ou pseudo-éléments HTML.

## Syntaxe

```css
/* Valeurs de longueur et en pourcentage */
y: 10px;
y: 10%;

/* Valeurs globales */
y: inherit;
y: initial;
y: revert;
y: revert-layer;
y: unset;
```

### Valeurs

La longueur {{cssxref("length")}} et le pourcentage {{cssxref("percentage")}} indiquent la position des coordonnées de l'axe des y du coin supérieur gauche de l'élément SVG.

- {{cssxref("length")}}
  - : En tant que longueur absolue ou relative, elle peut être exprimée dans n'importe quelle unité autorisée par le type de données CSS {{cssxref("&lt;length&gt;")}}.

- {{cssxref("percentage")}}
  - : Les pourcentages se réfèrent à la hauteur du SVG {{SVGAttr("viewBox")}}, s'il est déclaré, sinon, le pourcentage fait référence à la hauteur de la fenêtre SVG actuelle.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Définition des coordonnées de l'axe y des formes SVG

Cet exemple illustre le cas d'utilisation de base de `y`, et comment la propriété CSS `y` a préséance sur l'attribut `y`.

#### HTML

Nous incluons quatre SVG identiques de l'élément `<rect>`&nbsp;; leurs valeurs des attributs {{SVGAttr("x")}} et `y` sont toutes de `10`, ce qui signifie que les quatre rectangles sont tous au même endroit, `10px` en haut et à gauche de la fenêtre SVG.

```html
<svg>
  <rect width="40" height="40" x="10" y="10" />
  <rect width="40" height="40" x="10" y="10" />
  <rect width="40" height="40" x="10" y="10" />
  <rect width="40" height="40" x="10" y="10" />
</svg>
```

#### CSS

Nous stylisons tous les rectangles pour qu'ils aient une bordure noire et soient légèrement transparents, de sorte que les rectangles qui se chevauchent soient visibles. Nous fournissons aux rectangles différents remplissages {{cssxref("fill")}} et valeurs en `y`.

```css
svg {
  border: 1px solid;
}

rect {
  fill: none;
  stroke: black;
  opacity: 0.8;
}

rect:nth-of-type(2) {
  y: -20px;
  fill: red;
}

rect:nth-of-type(3) {
  y: 4em;
  fill: yellow;
}

rect:nth-of-type(4) {
  y: 60%;
  fill: orange;
}
```

#### Résultats

{{EmbedLiveSample("Définition des coordonnées de l'axe y des formes SVG", "300", "180")}}

Les bords supérieurs des rectangles sont à `10` (à partir de l'attribut), `-20px`, `4em`, et `60%`, respectivement. Le rectangle est `40px`grand, donc le `-20px` place la moitié du rectangle rouge à l'extérieur de la fenêtre. Le SVG est de `150px` de large, de sorte que le côté supérieur du rectangle orange se trouve à `90px` à partir du haut de la fenêtre SVG.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut SVG {{SVGAttr("y")}}
- Propriétés de géométrie `y`, {{cssxref("cx")}}, {{cssxref("cy")}}, {{cssxref("r")}}, {{cssxref("rx")}}, {{cssxref("ry")}}, {{cssxref("x")}}, {{cssxref("width")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- Type de données {{cssxref("basic-shape")}}
