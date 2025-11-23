---
title: <content-position>
slug: Web/CSS/Reference/Values/content-position
original_slug: Web/CSS/content-position
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le [type de données](/fr/docs/Web/CSS/Reference/Values/Data_types) {{Glossary("enumerated", "énuméré")}} [CSS](/fr/docs/Web/CSS) **`<content-position>`** est utilisé par les propriétés {{CSSxRef("justify-content")}} et {{CSSxRef("align-content")}}, ainsi que par le raccourci {{CSSxRef("place-content")}}, pour aligner le contenu de la boîte à l'intérieur de celle-ci.

## Syntaxe

```plain
<content-position> = center | start | end | flex-start | flex-end
```

## Valeurs

Le type de valeur énuméré `<content-position>` se spécifie à l'aide de l'un des mots-clés suivants&nbsp;:

- `center`
  - : Centre le {{Glossary("alignment subject", "sujet d'alignement")}} dans son {{Glossary("alignment container", "conteneur d'alignement")}}.
- `start`
  - : Aligne le sujet d'alignement contre le bord de début du conteneur d'alignement.
- `end`
  - : Aligne le sujet d'alignement contre le bord de fin du conteneur d'alignement.
- `flex-start`
  - : En mode flex, aligne le sujet d'alignement contre le bord du conteneur d'alignement correspondant au côté main-start ou cross-start du conteneur flex, selon le cas. Il est identique à `start` pour les autres modes de mise en page.
- `flex-end`
  - : En mode flex, aligne le sujet d'alignement contre le bord du conteneur d'alignement correspondant au côté main-end ou cross-end du conteneur flex, selon le cas. Identique à `end` pour les autres modes de mise en page.

> [!NOTE]
> Les mots-clés `left` et `right` sont exclus de `<content-position>`, bien qu'ils soient des valeurs d'alignement valides pour les propriétés `justify-*` ({{CSSxRef("justify-content")}}, {{CSSxRef("justify-self")}} et {{CSSxRef("justify-items")}}), car ils ne sont pas autorisés dans les propriétés `align-*` ({{CSSxRef("align-content")}}, {{CSSxRef("align-self")}} et {{CSSxRef("align-items")}}). Ils sont explicitement inclus dans la grammaire des propriétés `justify-*`.

## Spécifications

{{Specifications}}

## Voir aussi

- Propriétés utilisant ce type de donnée&nbsp;: {{CSSxRef("align-content")}}, {{CSSxRef("justify-content")}}, {{CSSxRef("place-content")}}
- Autres types de données d'alignement de boîte&nbsp;: {{CSSxRef("baseline-position")}}, {{CSSxRef("content-distribution")}}, `content-position`, {{CSSxRef("overflow-position")}} et {{CSSxRef("self-position")}}
- Le module [d'Alignement des boîtes CSS](/fr/docs/Web/CSS/Guides/Box_alignment)
- Le module [Flexbox CSS](/fr/docs/Web/CSS/Guides/Flexible_box_layout)
- Le module de [Grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout)
