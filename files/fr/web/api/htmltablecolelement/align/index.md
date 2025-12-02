---
title: "HTMLTableColElement : propriété align"
short-title: align
slug: Web/API/HTMLTableColElement/align
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

La propriété **`align`** de l'interface {{DOMxRef("HTMLTableColElement")}} est une chaîne de caractères indiquant comment aligner horizontalement le texte dans un élément de colonne {{HTMLElement("col")}} d'un tableau.

> [!NOTE]
> Cette propriété est obsolète, et il convient d'utiliser le CSS pour aligner horizontalement le texte dans une colonne. Utilisez la propriété CSS {{CSSxRef("text-align")}}, qui prévaut, pour aligner horizontalement le texte dans une colonne.
>
> Comme les éléments {{HTMLElement("td")}} ne sont pas des enfants de {{HTMLElement("col")}}, vous ne pouvez pas la définir directement sur un élément {{HTMLElement("col")}}. Il faut sélectionner les cellules de la colonne à l'aide d'un sélecteur `td:nth-last-child(n)` ou similaire (`n` étant le numéro de la colonne, en comptant à partir de la fin).

## Valeur

Les valeurs possibles sont&nbsp;:

- `left`
  - : Aligne le texte à gauche. Utilisez plutôt `text-align: left` appliqué directement sur {{HTMLElement("td")}} ou {{HTMLElement("th")}}.
- `right`
  - : Aligne le texte à droite. Utilisez plutôt `text-align: right` appliqué directement sur `<td>` ou `<th>`.
- `center`
  - : Centre le texte dans la cellule. Utilisez plutôt `text-align: center`.

## Exemples

Utilisez la propriété CSS `text-align` sur les éléments HTML {{HTMLElement("td")}} et {{HTMLElement("th")}}. Comme les éléments {{HTMLElement("td")}} d'une colonne ne sont pas des enfants de {{HTMLElement("col")}}, définir l'attribut `align` en HTML ou la propriété CSS `text-align` sur un élément {{HTMLElement("col")}} n'aura aucun effet. Sélectionnez plutôt les cellules d'une colonne à l'aide de [`:is(td, tr):nth-child(n)`](/fr/docs/Web/CSS/Reference/Selectors/:nth-child), où `n` est le numéro de la colonne, ou d'un sélecteur similaire.

Un [exemple](/fr/docs/Web/CSS/Reference/Selectors/:nth-child#mettre_en_forme_une_colonne_de_tableau) est disponible sur la page de {{CSSxRef(":nth-child()")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété CSS {{CSSxRef("text-align")}}
- La pseudo-classe CSS {{CSSxRef(":nth-child()")}}
- La pseudo-classe CSS {{CSSxRef(":nth-last-child()")}}
- [Apprendre&nbsp;: Mise en forme des tableaux](/fr/docs/Learn_web_development/Core/Styling_basics/Tables)
