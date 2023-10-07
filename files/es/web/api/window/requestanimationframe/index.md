---
title: Window.requestAnimationFrame()
slug: Web/API/window/requestAnimationFrame
---

{{APIRef}}El método **`window.requestAnimationFrame`** informa al navegador que quieres realizar una animación y solicita que el navegador programe el repintado de la ventana para el próximo ciclo de animación. El método acepta como argumento una función a la que llamar antes de efectuar el repintado.

> **Nota:** Si no quieres que tu animación se detenga, debes asegurarte de llamar a su vez a `requestAnimationFrame()` desde tu callback.

Debes llamar a este método cuando estés preparado para actualizar tu animación en la pantalla para pedir que se programe el repintado. Ésto puede suceder hasta 60 veces por segundo en pestañas en primer plano, pero se puede ver reducido a velocidades inferiores en pestañas en segundo plano.

El método indicado como callback recibe un único argumento que indica el tiempo en el que está programado que se ejecute el ciclo de animación.

## Sintaxis

```js
requestID = window.mozRequestAnimationFrame(callback);   // Firefox
window.msRequestAnimationFrame(callback);                // IE 10 PP2+
window.webkitRequestAnimationFrame(callback[, element]); // Chrome/Webkit
```

### Parámetros

- `callback`
  - : Parámetro que especifica la función a la cual llamar llegado el momento de actualizar tu animación para el próximo repintado.

### Valor devuelto

Un valor entero `long`, es un entero de tipo long que identifica de manera exclusiva la entrada en la lista de callbacks. Es siempre un distinto de cero, pero no debes realizar ninguna otra suposición acerca de su valor. Puedes pasar este valor a {{ domxref("window.cancelAnimationFrame()") }} para cancelar la petición de actualización del callback.

## Ejemplo

```js
(function () {
  var requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

var start = null;
var element = document.getElementById("SomeElementYouWantToAnimate");

function step(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;
  element.style.transform =
    "translateX(" + Math.min(progress / 10, 200) + "px)";
  if (progress < 2000) {
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{ domxref("window.mozAnimationStartTime") }}
- {{ domxref("window.cancelAnimationFrame()") }}
- [mozRequestAnimationFrame](https://robert.ocallahan.org/2010/08/mozrequestanimationframe-frame-rate_17.html) - Blog post
- [requestAnimationFrame for smart animating](http://paulirish.com/2011/requestanimationframe-for-smart-animating/) - Blog post
- [Animating with javascript: from setInterval to requestAnimationFrame](http://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/) - Blog post
- [Using PC Hardware more efficiently in HTML5: New Web Performance APIs, Part 1](http://blogs.msdn.com/b/ie/archive/2011/07/05/using-pc-hardware-more-efficiently-in-html5-new-web-performance-apis-part-1.aspx) - Blog post
