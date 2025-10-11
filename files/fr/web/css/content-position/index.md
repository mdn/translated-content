---
title: <content-position>
slug: Web/CSS/content-position
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Le [type de données](/fr/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) {{glossary("enumerated", "énuméré")}} [CSS](/fr/docs/Web/CSS) **`<content-position>`** est utilisé par les propriétés {{cssxref("justify-content")}} et {{cssxref("align-content")}}, ainsi que par le raccourci {{cssxref("place-content")}}, pour aligner le contenu de la boîte à l'intérieur de celle-ci.

## Syntaxe

```plain
<content-position> = center | start | end | flex-start | flex-end
```

## Valeurs

Le type de valeur énuméré `<content-position>` se spécifie à l'aide de l'un des mots-clés suivants&nbsp;:

- `center`
  - : Centre le {{glossary("alignment subject", "sujet d'alignement")}} dans son {{glossary("alignment container", "conteneur d'alignement")}}.
- `start`
  - : Aligne le sujet d'alignement contre le bord de début du conteneur d'alignement.
- `end`
  - : Aligne le sujet d'alignement contre le bord de fin du conteneur d'alignement.
- `flex-start`
  - : En mode flex, aligne le sujet d'alignement contre le bord du conteneur d'alignement correspondant au côté main-start ou cross-start du conteneur flex, selon le cas. Il est identique à `start` pour les autres modes de mise en page.
- `flex-end`
  - : En mode flex, aligne le sujet d'alignement contre le bord du conteneur d'alignement correspondant au côté main-end ou cross-end du conteneur flex, selon le cas. Identique à `end` pour les autres modes de mise en page.

> [!NOTE]
> Les mots-clés `left` et `right` sont exclus de `<content-position>`, bien qu'ils soient des valeurs d'alignement valides pour les propriétés `justify-*` ({{cssxref("justify-content")}}, {{cssxref("justify-self")}} et {{cssxref("justify-items")}}), car ils ne sont pas autorisés dans les propriétés `align-*` ({{cssxref("align-content")}}, {{cssxref("align-self")}} et {{cssxref("align-items")}}). Ils sont explicitement inclus dans la grammaire des propriétés `justify-*`.

## Spécifications

{{Specifications}}

## Voir aussi

- Propriétés utilisant ce type de donnée&nbsp;: {{cssxref("align-content")}}, {{cssxref("justify-content")}}, {{cssxref("place-content")}}
- Autres types de données d'alignement de boîte&nbsp;: {{cssxref("baseline-position")}}, {{cssxref("content-distribution")}}, `content-position`, {{cssxref("overflow-position")}} et {{cssxref("self-position")}}
- Le module [d'Alignement des boîtes CSS](/fr/docs/Web/CSS/CSS_box_alignment)
- Le module [Flexbox CSS](/fr/docs/Web/CSS/CSS_flexible_box_layout)
- Le module de [Grille CSS](/fr/docs/Web/CSS/CSS_grid_layout)
