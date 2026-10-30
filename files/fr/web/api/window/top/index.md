---
title: "Window : propriété top"
short-title: top
slug: Web/API/Window/top
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

La propriété **`top`** de l'interface {{DOMxRef("Window")}} retourne une référence à la fenêtre la plus haute dans la hiérarchie des fenêtres.

## Valeur

La référence à la fenêtre la plus haute.

## Notes

Là où la propriété {{DOMxRef("window.parent")}} retourne le parent immédiat de la fenêtre courante, `window.top` retourne la fenêtre la plus haute dans la hiérarchie des objets de fenêtre.

Cette propriété est particulièrement utile lorsque vous avez affaire à une fenêtre qui se trouve dans un sous-cadre d'un ou de plusieurs parents, et que vous souhaitez accéder au jeu de frameset de niveau supérieur.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
