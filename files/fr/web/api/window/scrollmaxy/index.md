---
title: "Window : propriété scrollMaxY"
short-title: scrollMaxY
slug: Web/API/Window/scrollMaxY
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}{{Non-standard_Header}}

La propriété en lecture seule **`scrollMaxY`** de l'interface {{DOMxRef("Window")}} retourne le nombre maximum de pixels que le document peut être défilé verticalement.

## Valeur

Un nombre.

## Exemples

```js
// Fait défiler jusqu'au bas de la page
let maxY = window.scrollMaxY;

window.scrollTo(0, maxY);
```

## Notes

Ne pas utiliser cette propriété pour obtenir la hauteur totale du document, qui n'est pas équivalente à {{DOMxRef("window.innerHeight")}} + window\.scrollMaxY, car {{DOMxRef("window.innerHeight")}} inclut la largeur de toute barre de défilement horizontale visible, ce qui fait que le résultat dépasse la hauteur totale du document de la largeur de toute barre de défilement horizontale visible. Utilisez plutôt {{DOMxRef("element.scrollHeight","document.body.scrollHeight")}}. Voir aussi {{DOMxRef("window.scrollMaxX")}} et {{DOMxRef("window.scrollTo")}}.

## Spécifications

Ne fait pas partie d'une spécification.

## Compatibilité des navigateurs

{{Compat}}
