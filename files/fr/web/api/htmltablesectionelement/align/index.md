---
title: "HTMLTableSectionElement : propriété align"
short-title: align
slug: Web/API/HTMLTableSectionElement/align
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

La propriété **`align`** de l'interface {{DOMxRef("HTMLTableSectionElement")}} est une chaîne de caractères indiquant comment aligner horizontalement le texte dans une section de tableau {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} ou {{HTMLElement("tfoot")}}. Les lignes et cellules individuelles peuvent la remplacer.

> [!NOTE]
> Cette propriété est obsolète, et il convient d'utiliser le CSS pour aligner horizontalement le texte dans une cellule. Utilisez la propriété CSS {{CSSxRef("text-align")}}, qui prévaut, pour aligner horizontalement le texte dans les cellules de section à la place.

## Valeur

Les valeurs possibles sont&nbsp;:

- `left`
  - : Aligne le texte à gauche. Utilisez plutôt `text-align: left`.
- `right`
  - : Aligne le texte à droite. Utilisez plutôt `text-align: right`.
- `center`
  - : Centre le texte dans la cellule. Utilisez plutôt `text-align: center`.

## Exemples

Utilisez plutôt le CSS `text-align`. Un [exemple](/fr/docs/Web/CSS/Reference/Properties/text-align#alignement_dans_les_tableaux) est disponible sur la page {{CSSxRef("text-align")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété CSS {{CSSxRef("text-align")}}
- [Apprendre&nbsp;: Mise en forme des tableaux](/fr/docs/Learn_web_development/Core/Styling_basics/Tables)
