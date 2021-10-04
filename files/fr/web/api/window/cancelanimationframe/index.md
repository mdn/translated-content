---
title: window.cancelAnimationFrame()
slug: Web/API/Window/cancelAnimationFrame
tags:
  - API
  - Animation
  - DOM
  - Experimental
  - Méthode
  - Reference
  - Window
translation_of: Web/API/Window/cancelAnimationFrame
---
{{APIRef}}La méthode **`window.cancelAnimationFrame()`** met fin à une animation précédement configurée par un appel à {{domxref("window.requestAnimationFrame()")}}.

## Syntaxe

    window.cancelAnimationFrame(requestID);

### Paramètres

- `requestID`
  - : L'identifiant retourné par l'appel à {{domxref("window.requestAnimationFrame()")}} qui a généré la fonction de rappel (callback)

## Exemples

```js
var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

var start = window.mozAnimationStartTime;  // Seulement supporté par Firefox. Les autre navigateurs peuvent utiliser quelque chose comme Date.now()..

var myReq; // Déclarer la variable globalement avant de lancer l'animation

function step(timestamp) {
  var progress = timestamp - start;
  d.style.left = Math.min(progress / 10, 200) + 'px';
  if (progress < 2000) {
    // Ne pas oublier de récupérer l'identifiant à chaque appel de la fonction
    myReq = requestAnimationFrame(step);
  }
}
myReq = requestAnimationFrame(step);
// L'annulation utilise le dernier identifiant
cancelAnimationFrame(myReq);
```

## Spécifications

| Spécification                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{spec("https://www.w3.org/TR/html51/webappapis.html#animation-frames", "Timing control for script-based animations: cancelAnimationFrame", "WD")}} |

## Compatibilité des navigateurs

{{Compat("api.Window.cancelAnimationFrame")}}

## Voir aussi

- {{domxref("window.mozAnimationStartTime")}}
- {{domxref("window.requestAnimationFrame()")}}
