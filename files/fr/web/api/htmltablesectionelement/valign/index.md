---
title: "HTMLTableSectionElement : propriété vAlign"
short-title: vAlign
slug: Web/API/HTMLTableSectionElement/vAlign
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

La propriété **`vAlign`** de l'interface {{DOMxRef("HTMLTableSectionElement")}} est une chaîne de caractères indiquant comment aligner verticalement le texte dans une section de tableau {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} ou {{HTMLElement("tfoot")}}. Les lignes et cellules individuelles peuvent la remplacer.

> [!NOTE]
> Cette propriété est obsolète. Utilisez la propriété CSS {{CSSxRef("vertical-align")}} pour aligner verticalement le texte dans les cellules de section à la place.

## Valeur

Les valeurs possibles sont&nbsp;: `"top"`, `"middle"`, `"bottom"` ou `"baseline"`

- `top`
  - : Aligne le texte en haut de la cellule. Utilisez plutôt `vertical-align: top`.
- `center`
  - : Centre verticalement le texte dans la cellule. Synonyme de `middle`. Utilisez plutôt `vertical-align: middle`.
- `middle`
  - : Centre verticalement le texte dans la cellule. Utilisez plutôt `vertical-align: middle`.
- `bottom`
  - : Aligne le texte en bas de la cellule. Utilisez plutôt `vertical-align: bottom`.
- `baseline`
  - : Semblable à `top`, mais aligne la ligne de base du texte aussi près que possible du haut pour qu'aucune partie du caractère ne dépasse de la cellule.

## Exemples

Utilisez plutôt le CSS {{CSSxRef("vertical-align")}}, qui prévaut, comme démontré dans l'[exemple d'alignement vertical dans une cellule de tableau](/fr/docs/Web/CSS/Reference/Properties/vertical-align#alignement_vertical_dune_cellule_de_tableau).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété CSS {{CSSxRef("vertical-align")}}
- [Apprendre&nbsp;: Mise en forme des tableaux](/fr/docs/Learn_web_development/Core/Styling_basics/Tables)
