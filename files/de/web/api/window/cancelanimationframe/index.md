---
title: Window.cancelAnimationFrame()
slug: Web/API/Window/cancelAnimationFrame
tags:
  - API
  - Animation
  - DOM
  - Experimentell
  - Méthode
translation_of: Web/API/Window/cancelAnimationFrame
---
{{APIRef}}{{SeeCompatTable}}

## Zusammenfassung

Stopt eine vorher durch {{domxref("window.requestAnimationFrame()")}} geplante Animation.

## Syntax

    window.cancelAnimationFrame(requestID);

### Parameter

- `requestID`
  - : Der ID Wert der beim Aufruf von {{domxref("window.requestAnimationFrame()")}} vorher zurückgegeben wurde.

## Beispiel

```js
var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

var start = window.mozAnimationStartTime;  // Nur unterstützt in FF. Andere Browsers können zB Date.now() benutzen.

var myReq;

function step(timestamp) {
  var progress = timestamp - start;
  d.style.left = Math.min(progress/10, 200) + "px";
  if (progress < 2000) {
    myReq = requestAnimationFrame(step);
  }
}
myReq = requestAnimationFrame(step);

window.cancelAnimationFrame(myReq);
```

## Spezifikation

- {{spec("http://www.w3.org/TR/animation-timing/#cancelAnimationFrame", "Timing control for script-based animations: cancelAnimationFrame", "WD")}}

## Browserkompatibilität

{{Compat("api.Window.cancelAnimationFrame")}}

## Siehe auch

- {{domxref("window.mozAnimationStartTime")}}
- {{domxref("window.requestAnimationFrame()")}}
