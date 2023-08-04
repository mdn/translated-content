---
title: window.clearTimeout
slug: Web/API/clearTimeout
---

{{ApiRef}}

## Resumen

Borra el retraso asignado por {{domxref("window.setTimeout","window.setTimeout()")}}.

## Sintaxis

```
window.clearTimeout(timeoutID)
```

- `timeoutID` es el ID del timeout que desee borrar, retornado por {{domxref("window.setTimeout","window.setTimeout()")}}.

## Ejemplo

Ejecute el script de abajo en el contexto de una página web y haga clic en la página una vez. Verá un mensaje emergente en un segundo. Si permanece haciendo clic en la página cada segundo, la alerta nunca aparece.

```js
var alarm = {
  remind: function (aMessage) {
    alert(aMessage);
    delete this.timeoutID;
  },

  setup: function () {
    this.cancel();
    var self = this;
    this.timeoutID = window.setTimeout(
      function (msg) {
        self.remind(msg);
      },
      1000,
      "Wake up!",
    );
  },

  cancel: function () {
    if (typeof this.timeoutID == "number") {
      window.clearTimeout(this.timeoutID);
      delete this.timeoutID;
    }
  },
};
window.onclick = function () {
  alarm.setup();
};
```

## Notas

Pasar un ID inválido a `clearTimeout` no tiene ningún efecto (y no lanza una excepción).

## Especificación

DOM Nivel 0. Especificado en [HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-cleartimeout).

## Vea también

- [JavaScript timers](/es/docs/JavaScript/Timers)
- {{domxref("window.setTimeout")}}
- {{domxref("window.setInterval")}}
- {{domxref("window.clearInterval")}}
- {{domxref("window.requestAnimationFrame")}}
- [_Daemons_ management](/es/docs/JavaScript/Timers/Daemons)
