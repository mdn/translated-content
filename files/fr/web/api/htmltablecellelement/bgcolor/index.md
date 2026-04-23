---
title: "HTMLTableCellElement : propriété bgColor"
short-title: bgColor
slug: Web/API/HTMLTableCellElement/bgColor
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

La propriété **`bgColor`** de l'interface {{DOMxRef("HTMLTableCellElement")}} permet de définir la couleur de fond d'une cellule ou d'obtenir la valeur de l'attribut obsolète [`bgColor`](/fr/docs/Web/HTML/Reference/Elements/td#bgcolor), si présent.

> [!NOTE]
> Cette propriété est obsolète et il convient d'utiliser le CSS pour définir la couleur de fond. Utilisez plutôt la propriété CSS {{CSSxRef("background-color")}}.

## Valeur

L'une des valeurs suivantes peut être utilisée&nbsp;:

- une couleur nommée, comme `red` ou `blue`
- un code hexadécimal, comme `#0000dd` ou `#00d`

> [!NOTE]
> Les valeurs acceptées ici sont un sous-ensemble limité des valeurs de couleur CSS. Seules {{CSSxRef("named-color")}} et {{CSSxRef("hex-color")}} sur 3 ou 6 chiffres (sans canal alpha) sont acceptées. Toutes les valeurs de couleur HTML sont valides en CSS, mais l'inverse n'est pas vrai.

## Exemples

Utilisez plutôt le CSS `background-color`. Un exemple d'utilisation de [`background-color` avec des éléments de tableau HTML](/fr/docs/Web/CSS/Reference/Properties/background-color#colorer_les_tableaux) est disponible sur la page {{CSSxRef("background-color")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLTableRowElement.bgColor")}}
