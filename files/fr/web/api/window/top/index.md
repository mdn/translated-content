---
title: Window.top
slug: Web/API/Window/top
---

{{APIRef}}

Renvoie une référence à la fenêtre la plus haute dans la hiérarchie des fenêtres

## Syntaxe

```js
var topWindow = window.top;
```

## Notes

Là où la propriété {{domxref("window.parent")}} renvoie le parent immédiat de la fenêtre courante, `window.top` renvoie la fenêtre la plus haute dans la hiérarchie des objets de fenêtre.

Cette propriété est particulièrement utile lorsque vous avez affaire à une fenêtre qui se trouve dans une subframe d'un ou de plusieurs parents, et que vous souhaitez accéder au jeu de frameset de niveau supérieur.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
