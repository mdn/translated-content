---
title: <self-position>
slug: Web/CSS/Reference/Values/self-position
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) {{Glossary("enumerated", "énuméré")}} [CSS](/fr/docs/Web/CSS) **`<self-position>`** est employé par les propriétés {{CSSxRef("justify-self")}} et {{CSSxRef("align-self")}}, ainsi que par le raccourci {{CSSxRef("place-self")}}, pour aligner la boîte dans son conteneur d'alignement. Il est également utilisé par les propriétés {{CSSxRef("justify-items")}} et {{CSSxRef("align-items")}}, ainsi que par le raccourci {{CSSxRef("place-items")}}, pour définir les valeurs par défaut de `justify-self` et `align-self`.

## Syntaxe

```plain
<self-position> = center | start | end | self-start | self-end | flex-start | flex-end
```

## Valeurs

Les mots‑clés représentés par le terme de grammaire `<self-position>` sont les suivants&nbsp;:

- `center`
  - : Centre le {{Glossary("alignment subject", "sujet d'alignement")}} dans son {{Glossary("alignment container", "conteneur d'alignement")}}.
- `start`
  - : Aligne le sujet d'alignement contre le bord de début du conteneur d'alignement.
- `end`
  - : Aligne le sujet d'alignement contre le bord de fin du conteneur d'alignement.
- `self-start`
  - : Aligne le sujet d'alignement contre le bord du conteneur d'alignement correspondant au côté de début du sujet d'alignement.
- `self-end`
  - : Aligne le sujet d'alignement contre le bord du conteneur d'alignement correspondant au côté de fin du sujet d'alignement.
- `flex-start`
  - : Dans le modèle flex, aligne le sujet d'alignement contre le bord du conteneur d'alignement correspondant au main-start ou au cross-start du conteneur flex, selon le cas. Identique à `start` pour les modes de disposition autres que flex.
- `flex-end`
  - : Dans le modèle flex, aligne le sujet d'alignement contre le bord du conteneur d'alignement correspondant au main-end ou au cross-end du conteneur flex, selon le cas. Identique à `end` pour les modes de disposition autres que flex.

> [!NOTE]
> Les mots‑clés `left` et `right` sont exclus de `<self-position>`, bien qu'ils soient des valeurs d'alignement valides pour les propriétés `justify-*` ({{CSSxRef("justify-content")}}, {{CSSxRef("justify-self")}} et {{CSSxRef("justify-items")}}), car ils ne sont pas autorisés dans les propriétés `align-*` ({{CSSxRef("align-content")}}, {{CSSxRef("align-self")}} et {{CSSxRef("align-items")}}). Ils figurent en revanche explicitement dans la grammaire des propriétés `justify-*`.

## Spécifications

{{Specifications}}

## Voir aussi

- Les propriétés qui utilisent ce type de donnée&nbsp;: {{CSSxRef("align-self")}}, {{CSSxRef("justify-self")}}, {{CSSxRef("place-self")}}, {{CSSxRef("align-items")}}, {{CSSxRef("justify-items")}}, {{CSSxRef("place-items")}}
- Les autres types de données d'alignement des boîtes&nbsp;: {{CSSxRef("baseline-position")}}, {{CSSxRef("content-distribution")}}, {{CSSxRef("overflow-position")}}, et {{CSSxRef("content-position")}}
- Le module [d'alignement des boîtes CSS](/fr/docs/Web/CSS/Guides/Box_alignment)
- Le module [de disposition flexible des boîtes CSS](/fr/docs/Web/CSS/Guides/Flexible_box_layout)
- Le module [de disposition en grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout)
