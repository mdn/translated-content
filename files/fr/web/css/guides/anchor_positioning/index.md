---
title: Position par ancres CSS
short-title: Position par ancres
slug: Web/CSS/Guides/Anchor_positioning
l10n:
  sourceCommit: 8300697ca75ca1e77175912110d4fe9ef48cb0bb
---

Le module de **position par ancres CSS** définit des fonctionnalités permettant d'attacher des éléments entre eux. Certains éléments sont définis comme des **éléments ancre**&nbsp;; les **éléments positionnés par ancre** peuvent alors avoir leur taille et leur position définies en fonction de la taille et de la position des éléments ancre auxquels ils sont liés.

De plus, la spécification fournit des mécanismes CSS permettant de&nbsp;:

- Définir un ensemble de positions alternatives pour un élément ancré&nbsp;; lorsque la position de rendu par défaut le fait déborder de son bloc conteneur et/ou l'affiche hors écran, le navigateur essaiera d'afficher l'élément ancré dans les positions alternatives.
- Déclarer des conditions dans lesquelles les éléments positionnés par ancre doivent être masqués, dans les situations où il n'est pas approprié de les attacher à des éléments ancre.

## Référence

### Propriétés

- {{CSSxRef("anchor-scope")}}
- {{CSSxRef("anchor-name")}}
- {{CSSxRef("position-anchor")}}
- {{CSSxRef("position-area")}}
- {{CSSxRef("position-try-fallbacks")}}
- {{CSSxRef("position-try-order")}}
- {{CSSxRef("position-try")}} (raccourcie)
- {{CSSxRef("position-visibility")}}

### Règles @ et descripteurs

- {{CSSxRef("@position-try")}}

### Fonctions

- {{CSSxRef("anchor()")}}
- {{CSSxRef("anchor-size()")}}

### Types de données et valeurs

- [`anchor-center`](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using#centrage_sur_lancre_à_laide_de_anchor-center)
- [`<anchor-side>`](/fr/docs/Web/CSS/Reference/Values/anchor#anchor-side)
- [`<anchor-size>`](/fr/docs/Web/CSS/Reference/Values/anchor-size#anchor-size)
- [`<position-area>`](/fr/docs/Web/CSS/Reference/Values/position-area_value)
- [`<try-size>`](/fr/docs/Web/CSS/Reference/Properties/position-try-order#try-size)
- [`<try-tactic>`](/fr/docs/Web/CSS/Reference/Properties/position-try-fallbacks#try-tactic)

### Attributs HTML

- [`anchor`](/fr/docs/Web/HTML/Reference/Global_attributes/anchor) {{Non-standard_Inline}}

### Interfaces

- {{DOMxRef("CSSPositionTryDescriptors")}}
- {{DOMxRef("CSSPositionTryRule")}}
- {{DOMxRef("HTMLElement.anchorElement")}} {{Non-standard_Inline}}

## Guides

- [Utiliser la position par ancres CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using)
  - : Un guide d'introduction aux concepts fondamentaux du positionnement par ancre, incluant l'association, le positionnement et le dimensionnement des éléments par rapport à leur ancre.

- [Options de repli et masquage conditionnel en cas de dépassement](/fr/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
  - : Un guide sur les mécanismes que le positionnement par ancre CSS propose pour éviter que les éléments positionnés par ancre ne débordent de leur conteneur ou de la fenêtre, incluant les options de repli et le masquage conditionnel.

## Concepts associés

- Le modude des [propriétés et valeurs logiques CSS](/fr/docs/Web/CSS/Guides/Logical_properties_and_values)&nbsp;:
  - {{CSSxRef("inset-block-start")}}
  - {{CSSxRef("inset-block-end")}}
  - {{CSSxRef("inset-inline-start")}}
  - {{CSSxRef("inset-inline-end")}}
  - {{CSSxRef("inset-block")}}
  - {{CSSxRef("inset-inline")}}
  - {{CSSxRef("inset")}} (raccourcie)
  - {{CSSxRef("inline-size")}}
  - {{CSSxRef("min-block-size")}}
  - {{CSSxRef("min-inline-size")}}
  - {{CSSxRef("block-size")}}
  - {{CSSxRef("max-block-size")}}
  - {{CSSxRef("max-inline-size")}}
  - {{CSSxRef("margin-block")}}
  - {{CSSxRef("margin-block-end")}}
  - {{CSSxRef("margin-block-start")}}
  - {{CSSxRef("margin-inline")}}
  - {{CSSxRef("margin-inline-end")}}
  - {{CSSxRef("margin-inline-start")}}
  - Le terme de glossaire [Propriétés inset](/fr/docs/Glossary/Inset_properties)
- Le module de [mise en page positionnée CSS](/fr/docs/Web/CSS/Guides/Positioned_layout)&nbsp;:
  - {{CSSxRef("top")}}
  - {{CSSxRef("left")}}
  - {{CSSxRef("bottom")}}
  - {{CSSxRef("right")}}
- Le module de [modèle de boîte CSS](/fr/docs/Web/CSS/Guides/Box_model)&nbsp;:
  - {{CSSxRef("width")}}
  - {{CSSxRef("height")}}
  - {{CSSxRef("min-width")}}
  - {{CSSxRef("min-height")}}
  - {{CSSxRef("max-width")}}
  - {{CSSxRef("max-height")}}
  - {{CSSxRef("margin")}}
  - {{CSSxRef("margin-bottom")}}
  - {{CSSxRef("margin-left")}}
  - {{CSSxRef("margin-right")}}
  - {{CSSxRef("margin-top")}}
- Le module de [alignement des boîtes CSS](/fr/docs/Web/CSS/Guides/Box_alignment)&nbsp;:
  - {{CSSxRef("align-items")}}
  - {{CSSxRef("align-self")}}
  - {{CSSxRef("justify-items")}}
  - {{CSSxRef("justify-self")}}
  - {{CSSxRef("place-items")}}
  - {{CSSxRef("place-self")}}

## Spécifications

{{Specifications}}

## Voir aussi

- Le module [d'ancrage du défilement CSS](/fr/docs/Web/CSS/Guides/Scroll_anchoring)
- [Apprendre&nbsp;: positionnement CSS](/fr/docs/Learn_web_development/Core/CSS_layout/Positioning)
- Le module [de propriétés et valeurs logiques CSS](/fr/docs/Web/CSS/Guides/Logical_properties_and_values)
- [Apprendre&nbsp;: dimensionner des éléments en CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Sizing)
