---
title: "HTMLTableRowElement : propriété bgColor"
short-title: bgColor
slug: Web/API/HTMLTableRowElement/bgColor
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

La propriété **`bgColor`** de l'interface {{DOMxRef("HTMLTableRowElement")}} permet de définir la couleur d'arrière-plan d'une ligne ou de récupérer la valeur de l'attribut obsolète [`bgColor`](/fr/docs/Web/HTML/Reference/Elements/tr#bgcolor), si présent.

> [!NOTE]
> Cette propriété est obsolète et il faut utiliser CSS pour définir la couleur d'arrière-plan. Utilisez plutôt la propriété CSS {{CSSxRef("background-color")}}.

## Valeur

On peut utiliser l'un des types de valeurs suivants&nbsp;:

- un nom de couleur, comme `red` ou `blue`
- un code hexadécimal, comme `#0000dd`

> [!NOTE]
> Les valeurs acceptées ici sont un sous-ensemble des valeurs de couleur CSS. Vous pouvez réutiliser les valeurs de couleur HTML en CSS, mais pas l'inverse&nbsp;: les couleurs inconnues pourraient s'afficher différemment de ce qui est attendu.

## Exemples

Utilisez plutôt le CSS `background-color`. Un [exemple](/fr/docs/Web/CSS/Reference/Properties/background-color#colorer_les_tableaux) est disponible sur la page {{CSSxRef("background-color")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLTableCellElement.bgColor")}}
