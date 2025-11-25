---
title: <axis>
slug: Web/CSS/Reference/Values/axis
l10n:
  sourceCommit: 12b296d2b3937c45b2363f34ed8afadcf00ed166
---

Le type de donnée {{Glossary("enumerated", "énuméré")}} **`<axis>`** définit l'axe de défilement du {{Glossary("scroll container", "conteneur de défilement")}} qui pilote une [timeline de défilement](/fr/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines).

Les mots-clés du type `<axis>` sont utilisés dans les fonctions et propriétés CSS suivantes&nbsp;:

- {{CSSxRef("scroll-timeline-axis")}}
- {{CSSxRef("scroll-timeline")}} (raccourci)
- [`scroll()`](/fr/docs/Web/CSS/Reference/Properties/animation-timeline/scroll)
- {{CSSxRef("view-timeline-axis")}}
- {{CSSxRef("view-timeline")}} (raccourci)
- [`view()`](/fr/docs/Web/CSS/Reference/Properties/animation-timeline/view)

## Syntaxe

Valeurs valides pour `<axis>`&nbsp;:

- `block`
  - : L'axe bloc de l'élément de défilement, c'est-à-dire l'axe perpendiculaire au flux du texte à l'intérieur d'une ligne. Pour les modes d'écriture horizontaux, comme le français, il correspond à `y`, tandis que pour les modes d'écriture verticaux, il correspond à `x`.
- `inline`
  - : L'axe en ligne de l'élément de défilement, c'est-à-dire l'axe parallèle au flux du texte dans une ligne. Pour les modes d'écriture horizontaux, il correspond à `x`, tandis que pour les modes d'écriture verticaux, il correspond à `y`.
- `x`
  - : L'axe horizontal de l'élément de défilement.
- `y`
  - : L'axe vertical de l'élément de défilement.

## Syntaxe formelle

{{CSSSyntaxRaw(`<axis> = block | inline | x | y`)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{CSSxRef("animation-timeline")}}
- Le guide [des timelines d'animation dirigées par le défilement](/fr/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- Le module [des animations CSS dirigées par le défilement](/fr/docs/Web/CSS/Guides/Scroll-driven_animations)
