---
title: Propriétés inset
slug: Glossary/Inset_properties
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

En CSS, les **propriétés inset** contrôlent la position des éléments positionnés en spécifiant des décalages par rapport à leur position par défaut. Il existe des propriétés inset physiques, logiques et des raccourcis.

Les propriétés inset incluent les propriétés physiques {{CSSxRef("top")}}, {{CSSxRef("left")}}, {{CSSxRef("bottom")}} et {{CSSxRef("right")}}, leurs équivalents relatifs au flux&nbsp;: {{CSSxRef("inset-block-start")}}, {{CSSxRef("inset-block-end")}}, {{CSSxRef("inset-inline-start")}}, {{CSSxRef("inset-inline-end")}} ({{Glossary("logical properties", "propriétés logiques")}}), ainsi que les raccourcis {{CSSxRef("inset-block")}}, {{CSSxRef("inset-inline")}} et {{CSSxRef("inset")}}.

Les **propriétés physiques** font référence à des côtés physiques spécifiques d'un élément. Les propriétés logiques utilisent des mots-clés directionnels relatifs aux axes de bloc et d'inline. L'**axe de bloc** correspond à l'axe qui définit l'ordre d'empilement des éléments dans une disposition en bloc. L'**axe d'inline** est perpendiculaire à l'axe de bloc et représente la direction dans laquelle le contenu en ligne, comme le texte, s'écoule dans un bloc. La correspondance dépend des propriétés {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}} et {{CSSxRef("text-orientation")}} de l'élément.

L'interprétation des propriétés inset dépend de la valeur de la propriété {{CSSxRef("position")}}. Lorsque `position: absolute` est utilisé, elles représentent les décalages depuis le [bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block) ou l'[élément d'ancrage](/fr/docs/Web/CSS/CSS_anchor_positioning/Using). Avec `position: relative`, elles représentent les décalages depuis la position par défaut du bord de la marge de la boîte. Avec `sticky`, elles représentent les décalages depuis le bord du {{Glossary("scroll container", "conteneur de défilement")}}. La valeur `fixed` est similaire à `absolute`, sauf que l'élément est positionné et dimensionné par rapport à son bloc de positionnement fixe, qui est souvent la zone d'affichage (<i lang="en">viewport</i> en anglais).

## Voir aussi

- [Disposition et bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block)
- Le module [de positionnement CSS](/fr/docs/Web/CSS/Guides/Positioned_layout)
- Le module [des propriétés logiques et valeurs CSS](/fr/docs/Web/CSS/Guides/Logical_properties_and_values)
- Le module [d'ancrage CSS](/fr/docs/Web/CSS/CSS_anchor_positioning)
