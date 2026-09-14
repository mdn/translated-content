---
title: Modèle de boîte CSS
short-title: Modèle de boîte
slug: Web/CSS/Guides/Box_model
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Le module de **modèle de boîte CSS** définit les propriétés `margin` et `padding`, qui, avec la [hauteur](/fr/docs/Web/CSS/Guides/Box_sizing), la [largeur](/fr/docs/Web/CSS/Guides/Box_sizing) et les [propriétés de bordure](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders), composent le [modèle de boîte CSS](/fr/docs/Web/CSS/Guides/Box_model/Introduction).

Chaque élément visible sur une page web est une boîte disposée selon [le modèle de mise en forme visuel](/fr/docs/Web/CSS/Guides/Display/Visual_formatting_model). Les propriétés CSS définissent leur taille, leur position et leur niveau d'empilement, les propriétés du modèle de boîte (et d'autres) définissent la taille extrinsèque de chaque boîte et l'espace autour d'elles.

Chaque boîte possède une zone de contenu (<i lang="en">content</i> en anglais) rectangulaire, à l'intérieur de laquelle sont affichés le texte, les images et tout autre contenu. Le contenu peut être entouré de marge interne (<i lang="en">padding</i> en anglais), d'une bordure (<i lang="en">border</i> en anglais) et d'une marge (<i lang="en">margin</i> en anglais), sur un ou plusieurs côtés. La marge interne entoure le contenu, la bordure entoure la marge interne, et la marge se trouve à l'extérieur de la bordure. Le modèle de boîte décrit comment ces éléments — le contenu, la marge interne, la bordure et la marge — fonctionnent ensemble pour créer une boîte telle qu'affichée par CSS.

![Les composants du modèle de boîte CSS](boxmodel.png)

Le module du modèle de boîte CSS définit des propriétés physiques (ou «&nbsp;relatives à la page&nbsp;») telles que `margin-top` et `padding-top`. Les propriétés relatives au flux telles que `margin-block-start` et `margin-inline-start` (qui sont liées à la direction du texte) sont définies dans [Propriétés et valeurs logiques](/fr/docs/Web/CSS/Guides/Logical_properties_and_values). Le module du modèle de boîte est étendu par le [module de dimensionnement de boîte CSS](/fr/docs/Web/CSS/Guides/Box_sizing), qui introduit la valeur {{Glossary("intrinsic size", "taille intrinsèque")}} et permet de définir le {{Glossary("aspect ratio", "rapport d'aspect")}} pour les éléments dont la taille est automatique dans au moins une dimension.

## Référence

### Propriétés

- {{CSSxRef("margin")}} (raccourcie)
- {{CSSxRef("margin-bottom")}}
- {{CSSxRef("margin-left")}}
- {{CSSxRef("margin-right")}}
- {{CSSxRef("margin-top")}}
- {{CSSxRef("margin-trim")}}
- {{CSSxRef("padding")}} (raccourcie)
- {{CSSxRef("padding-bottom")}}
- {{CSSxRef("padding-left")}}
- {{CSSxRef("padding-right")}}
- {{CSSxRef("padding-top")}}

### Types de donnée

- {{CSSxRef("box-edge")}}
  - [`<visual-box>`](/fr/docs/Web/CSS/Reference/Values/box-edge#visual-box)
  - [`<layout-box>`](/fr/docs/Web/CSS/Reference/Values/box-edge#layout-box)
  - [`<paint-box>`](/fr/docs/Web/CSS/Reference/Values/box-edge#paint-box)
  - [`<coord-box>`](/fr/docs/Web/CSS/Reference/Values/box-edge#coord-box)
  - [`<geometry-box>`](/fr/docs/Web/CSS/Reference/Values/box-edge#geometry-box)

## Guides

- [Une introduction au modèle de boîte CSS](/fr/docs/Web/CSS/Guides/Box_model/Introduction)
  - : Explique l'un des concepts fondamentaux de CSS&nbsp;: le modèle de boîte. Ce modèle définit comment CSS dispose les éléments, y compris leurs zones de contenu, de remplissage, de bordure et de marge.

- [Maîtriser la fusion des marges](/fr/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
  - : Parfois, deux marges adjacentes sont fusionnées en une seule. Cet article décrit les règles qui gouvernent quand et pourquoi cela se produit, et comment le contrôler.

- [Le modèle de mise en forme visuel](/fr/docs/Web/CSS/Guides/Display/Visual_formatting_model)
  - : Explique le modèle de mise en forme visuel.

## Concepts associés

- Le module [d'arrières plans et de bordures CSS](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders)
  - {{CSSxRef("border-width")}} (raccourcie)
  - {{CSSxRef("border-bottom-width")}}
  - {{CSSxRef("border-left-width")}}
  - {{CSSxRef("border-right-width")}}
  - {{CSSxRef("border-top-width")}}
- Le module [des propriétés logiques CSS](/fr/docs/Web/CSS/Guides/Logical_properties_and_values)
  - {{CSSxRef("block-size")}}
  - {{CSSxRef("inline-size")}}
  - {{CSSxRef("max-block-size")}}
  - {{CSSxRef("max-inline-size")}}
  - {{CSSxRef("min-block-size")}}
  - {{CSSxRef("min-inline-size")}}
  - {{CSSxRef("margin-block")}}
  - {{CSSxRef("margin-block-end")}}
  - {{CSSxRef("margin-block-start")}}
  - {{CSSxRef("margin-inline")}}
  - {{CSSxRef("margin-inline-end")}}
  - {{CSSxRef("margin-inline-start")}}
  - {{CSSxRef("padding-block")}}
  - {{CSSxRef("padding-block-end")}}
  - {{CSSxRef("padding-block-start")}}
  - {{CSSxRef("padding-inline")}}
  - {{CSSxRef("padding-inline-end")}}
  - {{CSSxRef("padding-inline-start")}}
  - {{CSSxRef("border-block")}}
  - {{CSSxRef("border-block-end")}}
  - {{CSSxRef("border-block-end-width")}}
  - {{CSSxRef("border-block-start")}}
  - {{CSSxRef("border-block-start-width")}}
  - {{CSSxRef("border-block-style")}}
  - {{CSSxRef("border-block-width")}}
  - {{CSSxRef("border-inline")}}
  - {{CSSxRef("border-inline-end")}}
  - {{CSSxRef("border-inline-end-width")}}
  - {{CSSxRef("border-inline-start")}}
  - {{CSSxRef("border-inline-start-width")}}
  - {{CSSxRef("border-inline-width")}}
- Le module [des dimensionnement de boîte CSS](/fr/docs/Web/CSS/Guides/Box_sizing)
  - {{CSSxRef("aspect-ratio")}}
  - {{CSSxRef("box-sizing")}}
  - {{CSSxRef("contain-intrinsic-block-size")}}
  - {{CSSxRef("contain-intrinsic-height")}}
  - {{CSSxRef("contain-intrinsic-inline-size")}}
  - {{CSSxRef("contain-intrinsic-size")}}
  - {{CSSxRef("contain-intrinsic-width")}}
  - {{CSSxRef("height")}}
  - {{CSSxRef("max-height")}}
  - {{CSSxRef("max-width")}}
  - {{CSSxRef("min-height")}}
  - {{CSSxRef("min-width")}}
  - {{CSSxRef("width")}}
- Le module [des gestion du débordement CSS](/fr/docs/Web/CSS/Guides/Overflow)
  - {{CSSxRef("overflow")}} (raccourcie)
  - {{CSSxRef("overflow-block")}}
  - {{CSSxRef("overflow-clip-margin")}}
  - {{CSSxRef("overflow-inline")}}
  - {{CSSxRef("overflow-x")}}
  - {{CSSxRef("overflow-y")}}
  - {{CSSxRef("text-overflow")}}

## Spécifications

{{Specifications}}

## Voir aussi

- Le module [d'affichage CSS](/fr/docs/Web/CSS/Guides/Display)
- Le module [de disposition flexible CSS](/fr/docs/Web/CSS/Guides/Flexible_box_layout)
- Le module [d disposition par grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout)
- Le module [des tableaux CSS](/fr/docs/Web/CSS/Guides/Table)
- Le module [de mise en page positionnée CSS](/fr/docs/Web/CSS/Guides/Positioned_layout)
- Le module [de fragmentation CSS](/fr/docs/Web/CSS/Guides/Fragmentation)
- [Comprendre les rapports d'aspect](/fr/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
