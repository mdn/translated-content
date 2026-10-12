---
title: "Window : propriété scrollMaxX"
short-title: scrollMaxX
slug: Web/API/Window/scrollMaxX
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}{{Non-standard_Header}}

La propriété en lecture seule **`scrollMaxX`** de l'interface {{DOMxRef("Window")}} retourne le nombre maximum de pixels que le document peut être défilé horizontalement.

## Valeur

Un nombre.

## Exemples

```js
// Fait défiler jusqu'au bord droit de la page
let maxX = window.scrollMaxX;

window.scrollTo(maxX, 0);
```

## Notes

Ne pas utiliser cette propriété pour obtenir la largeur totale du document, qui n'est pas équivalente à [window.innerWidth](/fr/docs/Web/API/Window/innerWidth) + window\.scrollMaxX, car {{DOMxRef("window.innerWidth")}} inclut la largeur de toute barre de défilement verticale visible, ce qui fait que le résultat dépasse la largeur totale du document de la largeur de toute barre de défilement verticale visible. Utilisez plutôt {{DOMxRef("element.scrollWidth","document.body.scrollWidth")}}. Voir aussi {{DOMxRef("window.scrollMaxY")}}.

## Spécifications

Ne fait pas partie d'une spécification.

## Compatibilité des navigateurs

{{Compat}}
