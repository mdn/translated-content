---
title: Fonction d'accélération CSS
short-title: Fonctions d'accélération
slug: Web/CSS/Guides/Easing_functions
l10n:
  sourceCommit: a516a9818e8cef06c626d436ee1d73fc6d87ec51
---

Le module des **fonctions d'accélération CSS** définit des fonctions d'accélération, qui fournissent un moyen de contrôler la transformation des valeurs. Les fonctions définies incluent les fonctions d'accélération linéaires, cubiques de Bézier et par étapes. Ces fonctions d'accélération peuvent être appliquées aux animations et aux transitions.

Augmenter progressivement la vitesse à laquelle un élément se déplace peut donner à l'élément une sensation de poids, comme s'il prenait de l'élan. Les fonctions d'accélération permettent de contrôler le taux de changement. Les fonctions d'accélération cubiques de Bézier peuvent être utilisées pour produire des éléments d'interface utilisateur intuitifs ou des accessoires de dessin animé convaincants qui se comportent comme leurs homologues physiques.

De manière alternative, vous pouvez vouloir qu'une animation avance par étapes distinctes, pour créer un mouvement robotique, ou l'effet d'une roue segmentée qui tourne de telle sorte que les segments apparaissent toujours dans la même position. Pour cela, les fonctions d'accélération par étapes peuvent être utilisées.

## Référence

### Fonctions

- {{CSSxRef("easing-function/cubic-bezier", "cubic-bezier()")}}
- {{CSSxRef("easing-function/linear", "linear()")}}
- {{CSSxRef("easing-function/steps", "steps()")}}

### Types de donnée

- {{CSSxRef("&lt;easing-function&gt;")}}
- {{CSSxRef("easing-function#linear-easing-function", "&lt;linear-easing-function&gt;")}}
- {{CSSxRef("easing-function#cubic-bezier-easing-function", "&lt;cubic-bezier-easing-function&gt;")}}
- {{CSSxRef("easing-function#step-easing-function", "&lt;step-easing-function&gt;")}}

### Termes et définitions du glossaire

- {{Glossary("Bezier curve", "Courbe de Bézier")}}
- {{Glossary("Interpolation")}}

## Guides

- [Fonctions de valeur CSS&nbsp;: fonctions d'accélération](/fr/docs/Web/CSS/Reference/Values/Functions#easing_functions)
  - : Les instructions CSS qui invoquent un traitement spécial des données ou des calculs pour retourner une valeur CSS pour une propriété CSS.

## Concepts associés

- Le module des [animations CSS](/fr/docs/Web/CSS/Guides/Animations)
  - La propriété {{CSSxRef("animation-timing-function")}}
  - La propriété raccourcie {{CSSxRef("animation")}}

- Le module des [transitions CSS](/fr/docs/Web/CSS/Guides/Transitions)
  - La propriété {{CSSxRef("transition-timing-function")}}
  - La propriété raccourcie {{CSSxRef("transition")}}

## Spécifications

{{Specifications}}

## Voir aussi

- [Les fonctions de valeur CSS](/fr/docs/Web/CSS/Reference/Values/Functions)
- La propriété {{CSSxRef("will-change")}}
