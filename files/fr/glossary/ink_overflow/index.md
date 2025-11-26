---
title: Débordement d'encre (ink overflow)
slug: Glossary/Ink_overflow
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Le **débordement d'encre** (<i lang="en">ink overflow</i> en anglais) d'une boîte désigne la partie de la boîte et de son contenu qui crée un effet visuel en dehors de la boîte englobante (<i lang="en">border box</i>). Purement visuel, le débordement d'encre n'affecte pas la mise en page car il n'a aucun impact sur les propriétés du modèle de boîte.

Le débordement d'encre correspond au débordement d'effets de peinture comme les [ombres portées](/fr/docs/Web/CSS/Reference/Properties/box-shadow), les [bordures en image](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders), la [décoration de texte](/fr/docs/Web/CSS/Guides/Text_decoration), les [contours externes](/fr/docs/Web/CSS/Reference/Properties/outline), etc., qui n'affectent pas la mise en page ni n'étendent la zone de débordement défilable. Le débordement d'encre inclut aussi le dépassement des glyphes, comme les hampes ascendantes et descendantes qui dépassent de la boîte em.

Comme les {{Glossary("replaced elements", "éléments remplacés")}} établissent toujours un [contexte de formatage](/fr/docs/Web/CSS/Guides/Display/Formatting_contexts) indépendant, tout débordement de contenu remplacé est toujours un débordement d'encre (par opposition au [débordement défilable](/fr/docs/Learn_web_development/Core/Styling_basics/Overflow)).

## Voir aussi

- Le module [de débordement CSS](/fr/docs/Web/CSS/Guides/Overflow)
