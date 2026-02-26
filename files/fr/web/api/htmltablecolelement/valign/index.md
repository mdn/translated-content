---
title: "HTMLTableColElement : propriété vAlign"
short-title: vAlign
slug: Web/API/HTMLTableColElement/vAlign
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

La propriété **`vAlign`** de l'interface {{DOMxRef("HTMLTableColElement")}} est une chaîne de caractères indiquant comment aligner verticalement le texte dans un élément de colonne {{HTMLElement("col")}} d'un tableau.

> [!NOTE]
> Cette propriété est obsolète, et il convient d'utiliser le CSS pour aligner verticalement le texte dans une colonne. Utilisez la propriété CSS {{CSSxRef("vertical-align")}}, qui prévaut, pour aligner verticalement le texte dans chaque cellule de colonne.
>
> Comme les éléments {{HTMLElement("td")}} ne sont pas des enfants de {{HTMLElement("col")}}, vous ne pouvez pas la définir directement sur un élément {{HTMLElement("col")}}. Il faut sélectionner les cellules de la colonne à l'aide d'un sélecteur `td:nth-child(n)` ou similaire (`n` étant le numéro de la colonne).

## Valeur

Les valeurs possibles sont&nbsp;: `"top"`, `"middle"`, `"bottom"` ou `"baseline"`

- `top`
  - : Aligne le texte en haut de la colonne. Utilisez plutôt `vertical-align: top`.
- `center`
  - : Centre verticalement le texte dans la colonne. Synonyme de `middle`. Utilisez plutôt `vertical-align: middle`.
- `middle`
  - : Centre verticalement le texte dans la colonne. Utilisez plutôt `vertical-align: middle`.
- `bottom`
  - : Aligne le texte en bas de la colonne. Utilisez plutôt `vertical-align: bottom`.
- `baseline`
  - : Semblable à `top`, mais aligne la ligne de base du texte aussi près que possible du haut afin qu'aucune partie du caractère ne dépasse de la cellule.

## Exemples

Utilisez la propriété CSS `vertical-align`. Comme les éléments HTML {{HTMLElement("td")}} d'une colonne ne sont pas des enfants de {{HTMLElement("col")}}, vous ne pouvez pas la définir directement sur un {{HTMLElement("col")}}. Il faut sélectionner les cellules à l'aide d'un sélecteur `td:nth-child(n)` ou similaire (`n` étant le numéro de la colonne).

Un [exemple](/fr/docs/Web/CSS/Reference/Selectors/:nth-child#mettre_en_forme_une_colonne_de_tableau) est disponible sur la page de {{CSSxRef(":nth-child()")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété CSS {{CSSxRef("vertical-align")}}
- La pseudo-classe CSS {{CSSxRef(":nth-child()")}}
- [Apprendre&nbsp;: Mise en forme des tableaux](/fr/docs/Learn_web_development/Core/Styling_basics/Tables)
