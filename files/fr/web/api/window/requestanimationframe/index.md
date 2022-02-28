---
title: Window.requestAnimationFrame()
slug: Web/API/Window/requestAnimationFrame
tags:
  - API
  - DOM
  - JavaScript
translation_of: Web/API/window/requestAnimationFrame
---
{{APIRef("Window")}}

La méthode **`window.requestAnimationFrame()`** notifie le navigateur que vous souhaitez exécuter une animation et demande que celui-ci exécute une fonction spécifique de mise à jour de l'animation, avant le prochain rafraîchissement du navigateur. Cette méthode prend comme argument un callback qui sera appelé avant le rafraîchissement du navigateur.

> **Note :** Si vous souhaitez animer une nouvelle frame durant le prochain repaint, votre callback doit appeler la méthode `requestAnimationFrame()`.

Vous devez appeler cette méthode dès que vous êtes prêt à rafraîchir votre animation. La fonction contenant l'animation doit être appelée avant que le navigateur n'effectue un nouveau rafraîchissement . En moyenne, le callback sera appelé 60 fois par seconde, cela dépendra de la fréquence de rafraîchissement de votre écran, conformément aux recommandations de la W3C. Cette fréquence peut être inférieure si plusieurs onglets sont ouverts simultanément.

Le callback possède un seul argument, un {{domxref("DOMHighResTimeStamp")}}, qui est le temps, en millisecondes avec une précision minimum de 10 µs, durant lequel l'exécution du rafraîchissement est prévu.

## Syntaxe

```js
requestID = window.requestAnimationFrame(callback);       // Firefox 23 / IE 10 / Chrome / Safari 7 (incl. iOS)
requestID = window.mozRequestAnimationFrame(callback);    // Firefox < 23
requestID = window.webkitRequestAnimationFrame(callback); // Anciennes versions de Safari / Chrome
```

### Paramètres

- `callback`
  - : Un paramètre définissant la fonction à appeler lorsque votre animation va être rafraîchie lors du prochain rafraîchissement. Le callback ne prend qu'un seul argument, un {{domxref("DOMHighResTimeStamp")}}, qui est le temps à partir duquel requestAnimationFrame va commencer à appeler les callbacks.

### Valeur retournée

`requestID` est un entier `long` unique identifiant l'élément dans la liste des callbacks. C'est une valeur différente de zéro, mais il est prudent de ne pas faire de suppositions sur cette valeur. En passant cette valeur en paramètre de la méthode {{domxref("window.cancelAnimationFrame()")}},  vous annulez l'appel du callback.

## Exemple

```js
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;


var start = null;

var d = document.getElementById("SomeElementYouWantToAnimate");

function step(timestamp) {
  var progress;
  if (start === null) start = timestamp;
  progress = timestamp - start;
  d.style.left = Math.min(progress/10, 200) + "px";
  if (progress < 2000) {
    requestAnimationFrame(step);
  }
}

requestAnimationFrame(step);
```

## Compatibilités

{{Compat("api.Window.requestAnimationFrame")}}

### Notes pour Gecko

\[1] Avant Gecko 11.0 {{geckoRelease("11.0")}}, `mozRequestAnimationFrame()` pouvait être appelée sans paramètres d'entrée. Cela n'est plus supporté et n'est pas susceptible d'être standardisé.

\[2] Le callback prend comme paramètre un {{domxref("DOMTimeStamp")}} au lieu d'un {{domxref("DOMHighResTimeStamp")}} si c'est la version préfixée qui est utilisée. `DOMTimeStamp` n'a qu'une précision de l'ordre de la milliseconde, mais `DOMHightResTimeStamp` a une précision minimale de l'ordre de 10 microsecondes.

### Notes pour Chrome

La syntaxe correcte dans Chrome pour annuler l'exécution est `window.cancelAnimationFrame()`. Dans les anciennes versions, `window.webkitCancelAnimationFrame()` et `window.webkitCancelRequestAnimationFrame()` sont obsolètes mais sont toujours supportées pour le moment.

## Specification

{{spec("http://www.w3.org/TR/animation-timing/#requestAnimationFrame", "Timing control for script-based animations: requestAnimationFrame", "WD")}}

## Voir aussi

- {{domxref("window.mozAnimationStartTime")}}
- {{domxref("window.cancelAnimationFrame()")}}
- [mozRequestAnimationFrame](http://weblogs.mozillazine.org/roc/archives/2010/08/mozrequestanima.html) - Blog post
- [requestAnimationFrame for smart animating](http://paulirish.com/2011/requestanimationframe-for-smart-animating/) - Blog post
- [Animating with javascript: from setInterval to requestAnimationFrame](http://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/) - Blog post
- [Using PC Hardware more efficiently in HTML5: New Web Performance APIs, Part 1](http://blogs.msdn.com/b/ie/archive/2011/07/05/using-pc-hardware-more-efficiently-in-html5-new-web-performance-apis-part-1.aspx) - Blog post
- [TestUFO: Test your web browser for requestAnimationFrame() Timing Deviations](http://www.testufo.com/#test=animation-time-graph)
