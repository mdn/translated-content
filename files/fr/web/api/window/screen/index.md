---
title: "Window : propriété screen"
short-title: screen
slug: Web/API/Window/screen
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef("CSSOM")}}

La propriété **`screen`** de l'interface {{DOMxRef("Window")}} retourne une référence à l'objet `screen` associé à la fenêtre. L'objet `screen`, qui implémente l'interface {{DOMxRef("Screen")}}, est un objet spécial servant à examiner les propriétés de l'écran sur lequel la fenêtre courante est affichée.

## Valeur

Un objet {{DOMxRef("Screen")}}.

## Exemples

```js
if (screen.pixelDepth < 8) {
  // utilise la version à faible couleur de la page
} else {
  // utilise la page normale et colorée
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
