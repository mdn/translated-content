---
title: Dimensionnement de boîte CSS
short-title: Dimensionnement de boîte
slug: Web/CSS/Guides/Box_sizing
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le module de **dimensionnement de boîte CSS** permet de préciser comment les éléments s'ajustent à leur contenu ou s'intègrent dans un contexte de mise en page donné. Il définit des propriétés de dimensionnement, de dimensionnement minimum et maximum, et étend les propriétés de dimensionnement CSS avec des mots-clés représentant la {{Glossary("intrinsic size", "taille intrinsèque")}} fondée sur le contenu et la {{Glossary("extrinsic size", "taille extrinsèque")}} fondée sur le contexte.

Les éléments peuvent être dimensionnés de façon extrinsèque ou intrinsèque. Le [modèle de boîte CSS](/fr/docs/Web/CSS/Guides/Box_model) définit des propriétés relatives à la page permettant de fixer explicitement, ou «&nbsp;extrinsèquement&nbsp;», la taille d'un élément, notamment les propriétés `width`, `height`, `padding` et `margin` (ainsi que les propriétés `border` définies dans le module [Arrière-plans et bordures CSS](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders)). Ce module du dimensionnement des boîtes CSS étend le module du modèle de boîte pour permettre de dimensionner un élément de façon intrinsèque — définir la taille d'un élément en fonction de la taille de son contenu.

Les valeurs de dimensionnement introduites dans ce module permettent aux éléments utilisant le [confinement de la taille](/fr/docs/Web/CSS/Guides/Containment/Using#size_containment) d'adopter des tailles intrinsèques explicites, comme si la largeur et la hauteur de leur contenu en flux correspondaient à la taille intrinsèque explicite définie, plutôt que d'être dimensionnés comme s'ils étaient vides.

Ce module introduit également la possibilité de définir un ratio d'aspect pour la boîte d'un élément, ce qui permet au navigateur d'ajuster automatiquement les dimensions d'un élément afin de maintenir un ratio d'aspect défini dès lors qu'une des dimensions est dimensionnée automatiquement.

Le [module des propriétés et valeurs logiques](/fr/docs/Web/CSS/Guides/Logical_properties_and_values) a étendu les propriétés disponibles dans les modules du modèle de boîte et du dimensionnement des boîtes pour inclure des équivalents relatifs au mode d'écriture des propriétés physiques correspondantes du modèle de boîte et du dimensionnement intrinsèque.

## Référence

### Propriétés

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

Le module de dimensionnement des boîtes CSS introduit également la propriété `min-intrinsic-sizing`. Actuellement, aucun navigateur ne prend en charge cette fonctionnalité.

### Types de données et valeurs

- Le type de donnée {{CSSxRef("ratio")}}
- La valeur {{CSSxRef("min-content")}}
- La valeur {{CSSxRef("max-content")}}
- La valeur {{CSSxRef("fit-content")}}

### Fonctions

- [`fit-content()`](/fr/docs/Web/CSS/Reference/Values/fit-content_function)

### Termes de glossaire

- {{Glossary("Intrinsic size", "Taille intrinsèque")}}
- {{Glossary("Extrinsic size", "Taille extrinsèque")}}

## Guides

- [Comprendre les ratios d'aspect](/fr/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
  - : Comprendre la propriété `aspect-ratio`, aborder les ratios d'aspect pour les éléments remplacés et non remplacés, et examiner quelques cas d'utilisation courants.

- [Introduction au modèle de boîte CSS](/fr/docs/Web/CSS/Guides/Box_model/Introduction)
  - : Présente l'un des concepts fondamentaux de CSS&nbsp;: le modèle de boîte. Ce modèle définit la manière dont CSS met en page les éléments, y compris leur contenu, leur padding, leur bordure et leurs marges.

- [Maîtriser l'effondrement des marges](/fr/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
  - : Parfois, deux marges adjacentes sont fusionnées en une seule. Cet article décrit les règles qui régissent quand et pourquoi cela se produit, et comment le contrôler.

- [Modèle de formatage visuel](/fr/docs/Web/CSS/Guides/Display/Visual_formatting_model)
  - : Présente le modèle de formatage visuel.

- [Contrôler les ratios des éléments flexibles le long de l'axe principal](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
  - : Explique le dimensionnement intrinsèque en tant que prérequis pour comprendre comment contrôler la taille et la flexibilité des éléments flexibles le long de l'axe principal en utilisant {{CSSxRef("flex-grow")}}, {{CSSxRef("flex-shrink")}}, et {{CSSxRef("flex-basis")}}.

## Concepts associés

- Le module [des propriétés logiques CSS](/fr/docs/Web/CSS/Guides/Logical_properties_and_values)
  - {{CSSxRef("min-inline-size")}}
  - {{CSSxRef("block-size")}}
  - {{CSSxRef("inline-size")}}
  - {{CSSxRef("max-block-size")}}
  - {{CSSxRef("max-inline-size")}}
  - {{CSSxRef("min-block-size")}}
  - {{CSSxRef("min-inline-size")}}
  - {{CSSxRef("margin-block")}}
  - {{CSSxRef("margin-inline")}}
  - {{CSSxRef("padding-block")}}
  - {{CSSxRef("padding-inline")}}
  - {{CSSxRef("border-block")}}
  - {{CSSxRef("border-inline")}}
  - {{CSSxRef("contain-intrinsic-block-size")}}
  - {{CSSxRef("contain-intrinsic-inline-size")}}
  - {{CSSxRef("overflow-block")}}
  - {{CSSxRef("overflow-inline")}}
  - {{CSSxRef("overscroll-behavior-block")}}
  - {{CSSxRef("overscroll-behavior-inline")}}
- Le module [du modèles de boîte CSS](/fr/docs/Web/CSS/Guides/Box_model)
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
- Le module [d'arrière-plan et des bordures CSS](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders)
  - {{CSSxRef("border")}} (raccourcie)
  - {{CSSxRef("border-width")}} (raccourcie)
  - {{CSSxRef("border-bottom-width")}}
  - {{CSSxRef("border-left-width")}}
  - {{CSSxRef("border-right-width")}}
  - {{CSSxRef("border-top-width")}}
- Le module [du débordement CSS](/fr/docs/Web/CSS/Guides/Overflow)
  - {{CSSxRef("overflow")}} (raccourcie)
  - {{CSSxRef("overflow-block")}}
  - {{CSSxRef("overflow-clip-margin")}}
  - {{CSSxRef("overflow-inline")}}
  - {{CSSxRef("overflow-x")}}
  - {{CSSxRef("overflow-y")}}
  - {{CSSxRef("text-overflow")}}
- Le module [du modèle de grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout)
  - {{CSSxRef("grid")}}
  - {{CSSxRef("grid-auto-columns")}}
  - {{CSSxRef("grid-auto-rows")}}
  - {{CSSxRef("grid-template-columns")}}
  - {{CSSxRef("grid-template-rows")}}
  - {{CSSxRef("repeat")}}
  - {{CSSxRef("minmax")}} function
- Le module [du modèle de boîte flexible CSS](/fr/docs/Web/CSS/Guides/Flexible_box_layout)
  - {{CSSxRef("flex-basis")}}
  - {{CSSxRef("flex")}}

## Spécifications

{{Specifications}}

## Voir aussi

- Le module [du modèle d'affichage CSS](/fr/docs/Web/CSS/Guides/Display)
- Le module [du modèle de boîte flexible CSS](/fr/docs/Web/CSS/Guides/Flexible_box_layout)
- Le module [du modèle de grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout)
- Le module [du modèle de positionnement CSS](/fr/docs/Web/CSS/Guides/Positioned_layout)
- Le module [de la fragmentation CSS](/fr/docs/Web/CSS/Guides/Fragmentation)
