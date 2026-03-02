---
title: "HTMLElement : propriété offsetParent"
short-title: offsetParent
slug: Web/API/HTMLElement/offsetParent
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
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
> - La propriété `position` de l'élément vaut `fixed` (Firefox retourne `<body>`).
> - L'élément courant est `<body>` ou `<html>`.

`offsetParent` est utile car {{DOMxRef("HTMLElement.offsetTop", "offsetTop")}} et {{DOMxRef("HTMLElement.offsetLeft", "offsetLeft")}} sont relatifs au bord de remplissage.

## Valeur

Une référence objet vers l'élément dans lequel l'élément courant est décalé.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
