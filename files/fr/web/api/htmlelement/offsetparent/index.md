---
title: HTMLElement.offsetParent
slug: Web/API/HTMLElement/offsetParent
translation_of: Web/API/HTMLElement/offsetParent
browser-compat: api.HTMLElement.offsetParent
---
{{APIRef("HTML DOM")}}

La propriété en lecture seule **`HTMLElement.offsetParent`** fournit une référence vers le plus proche élément ancêtre positionné (plus proche selon la hiérarchie). S'il n'y a pas d'élément ancêtre positionné, c'est le plus proche ancêtre `td`, `th`, `table` qui sera renvoyé, ou `body` s'il n'y a non plus pas d'élément de tableau comme ancêtre.

> **Note :** `offsetParent` renvoie `null` dans les situations suivantes&nbsp;:
>
> - La propriété `display` de l'élément ou de son élément parent vaut `none`.
> - La propriété `position` de l'élément vaut `fixed` (Firefox renverra `<body>`).
> - L'élément courant est `<body>` ou `<html>`.

`offsetParent` est utile car [`offsetTop`](/fr/docs/Web/API/HTMLElement/offsetTop) et [`offsetLeft`](/fr/docs/Web/API/HTMLElement/offsetLeft) sont relatifs au bord de remplissage.

## Valeur

Une référence objet vers l'élément dans lequel l'élément courant est décalé.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
