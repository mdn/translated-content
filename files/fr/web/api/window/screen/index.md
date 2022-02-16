---
title: Window.screen
slug: Web/API/Window/screen
tags:
  - API
  - CSSOM View
  - DOM
  - Fenêtre
  - Propriété
  - Vue CSSOM
  - Écran
translation_of: Web/API/Window/screen
---
{{APIRef("CSSOM View")}}Retourne une référence à l'objet `screen` associé à la fenêtre. L'object `screen`, qui implémente l'interface {{domxref("Screen")}}, est un objet spécial servant à examiner les propriétés de l'écran qui affiche la fenêtre courante.

## Syntaxe

    objetEcran = window.screen;

## Examples

```js
if (screen.pixelDepth < 8) {
  // utiliser la page en colorisation réduite
} else {
  // utiliser la page en coolorisation normale
}
```

## Spécifications

| Spécification                                                                            | État                             | Commentaires |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ------------ |
| {{SpecName('CSSOM View', '#dom-window-screen', 'window.screen')}} | {{Spec2('CSSOM View')}} |              |

## Compatibilité des navigateurs

{{Compat("api.Window.screen")}}
