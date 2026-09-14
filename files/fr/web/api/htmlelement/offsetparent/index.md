---
title: "HTMLElement : propriété offsetParent"
short-title: offsetParent
slug: Web/API/HTMLElement/offsetParent
l10n:
  sourceCommit: 678f7ed93e03b90cae88e9a3c7e4b81b0f969664
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`offsetParent`** de l'interface {{DOMxRef("HTMLElement")}} retourne une référence vers l'élément ancêtre positionné le plus proche (le plus proche dans la hiérarchie de conteneur).

Un ancêtre positionné peut être&nbsp;:

- un [bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block#identifier_le_bloc_englobant) pour les éléments positionnés absolument
- un élément ayant une valeur de [zoom](/fr/docs/Web/CSS/Reference/Properties/zoom) effective différente (c'est-à-dire le produit de tous les facteurs de zoom de ses parents) de celle de cet élément
- `td`, `th`, `table` si l'élément lui-même est en position statique.

S'il n'y a pas d'élément ancêtre positionné, c'est le `body` qui est retourné.

> [!NOTE]
> `offsetParent` retourne `null` dans les situations suivantes&nbsp;:
>
> - La propriété `display` de l'élément ou de son élément parent vaut `none`.
> - L'élément a la propriété `position` définie sur `fixed` et son bloc englobant est la zone d'affichage.
>   Si le bloc englobant n'est pas la zone d'affichage, `offsetParent` retourne l'ancêtre le plus proche qui forme
>   un bloc englobant, par exemple, un ancêtre avec des styles `transform`, `perspective` ou `filter` définis.
> - L'élément courant est `<body>` ou `<html>`.

`offsetParent` est utile, car {{DOMxRef("HTMLElement.offsetTop", "offsetTop")}} et {{DOMxRef("HTMLElement.offsetLeft", "offsetLeft")}} sont relatifs au bord de remplissage.

## Valeur

Une référence objet vers l'élément dans lequel l'élément courant est décalé.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
