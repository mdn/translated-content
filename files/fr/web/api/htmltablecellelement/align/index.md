---
title: "HTMLTableCellElement : propriété align"
short-title: align
slug: Web/API/HTMLTableCellElement/align
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

La propriété **`align`** de l'interface {{DOMxRef("HTMLTableCellElement")}} est une chaîne de caractères indiquant comment aligner horizontalement le texte dans la cellule de tableau {{HTMLElement("th")}} ou {{HTMLElement("td")}}.

> [!NOTE]
> Cette propriété est obsolète, et il convient d'utiliser le CSS pour aligner le texte horizontalement dans une cellule. Utilisez la propriété CSS {{CSSxRef("text-align")}}, qui a priorité, pour aligner le texte horizontalement dans une cellule.

## Valeur

Les valeurs possibles sont&nbsp;:

- `left`
  - : Aligne le texte à gauche. Utilisez plutôt `text-align: left`.
- `right`
  - : Aligne le texte à droite. Utilisez plutôt `text-align: right`.
- `center`
  - : Centre le texte dans la cellule. Utilisez plutôt `text-align: center`.

## Exemples

Utilisez plutôt CSS `text-align`. Un [exemple](/fr/docs/Web/CSS/Reference/Properties/text-align#table_alignment) est disponible sur la page {{CSSxRef("text-align")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété CSS {{CSSxRef("text-align")}}
- [Apprendre&nbsp;: Mise en forme des tableaux](/fr/docs/Learn_web_development/Core/Styling_basics/Tables)
