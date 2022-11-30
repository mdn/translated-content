---
title: EventTarget.removeEventListener()
slug: Web/API/EventTarget/removeEventListener
---

{{APIRef("DOM Events")}}

El método **`EventTarget.removeEventListener()`** remueve del {{domxref("EventTarget")}} un detector de evento previamente registrado con {{domxref("EventTarget.addEventListener")}}. El detector de evento a ser removido es identificado usando una combinación de tipos de eventos, la misma funcion del detector de eventos, y muchas opciones adicionales que pueden afectar

## Sintaxis

```
target.removeEventListener(type, listener[, options]);
target.removeEventListener(tipo, listener[, useCapture])
```

### Parámetros

- _tipo_
  - : Un string representando el tipo de evento del que se está removiendo un detector de evento.
- _detector (listener)_
  - : La función {{domxref("EventListener")}} del manejador de evento a eliminar del objetivo del evento.
- _options_ {{optional_inline}}

  - : Un objeto que especifíca diversas características acerca del detector de eventos. Las opciones disponibles son:

    - `capture`: Un {{jsxref("Boolean")}} que indica que eventos de este tipo serán enviados al `listener` antes de ser enviado a cualquier `EventTarget` debado de éste en el DOM.
    - {{non-standard_inline}} `mozSystemGroup`: Sólo disponible ejecutando XBL o Firefox' chrome, es un {{jsxref("Boolean")}} que define si el detector es añadido al grupo del sistema.

- `useCapture` {{optional_inline}}

  - : Especifíca si el {{domxref("EventListener")}} que se está eliminando fue registrado como un detector de captura o no. Si no se indica, por defecto `useCapture` asumirá el valor `false`.

    Si un detector se registro dos veces, uno con captura y otro sin, cada uno debe ser eliminado por separado. La eliminación de un detector de captura no afecta a una versión de "no-captura" del mismo detector, y viceversa.

### Valor de retorno

`undefined`.

### Coincidiendo disparadores de evento para su eliminación

Habiendose añadido detector de evento llamando {{domxref("EventTarget.addEventListener", "addEventListener()")}}, puede llegar un punto donde se requiera eliminar. Obviamente, se necesita especificar los mismos parámetros de `tipo` y `listener` a `removeEventListener()`, pero que hay acerca de los parámetros de `options` o de `useCapture`?

Mientras `addEventListener()` permite añadir el mismo detector más de una vez para el mismo tipo, si la opción es diferente, la única opción que `removeEventListener()` revisará es la bandera de `capture`/`useCapture`. Su valor debe coincidir con `removeEventListener()` para coincidir, pero otros valores no necesitan corresponder.

Por ejemplo, considerar la siguiente llamada a `addEventListener()`:

```js
element.addEventListener("mousedown", handleMouseDown, true);
```

Ahora, considera `removeEventListener()`:

```js
element.removeEventListener("mousedown", handleMouseDown, false);     // Fallo
element.removeEventListener("mousedown", handleMouseDown, true);      // Éxito
```

La primera llamada falla porque el valor de `useCapture` no coincide. El segundo valor funciona, puesto que `useCapture` es igual a su valor cuando se añadió el detector.

Ahora considera lo siguiente:

```js
element.addEventListener("mousedown", handleMouseDown, { passive: true });
```

Aqui, especificamos un objeto `options` en el cual `passive` esta definido como `true`, mientras que otras opciones son dejados con su valor por defecto de `false`.

Vea consecutivamente, cada una de las siguientes llamadas a `removeEventListener()`. Cualquiera de éstas donde `capture` o `useCapture` es `true` falla; en todas las demás funciona. Solo la configuración `capture` importa a `removeEventListener()`.

```js
element.removeEventListener("mousedown", handleMouseDown, { passive: true });     // Funciona
element.removeEventListener("mousedown", handleMouseDown, { capture: false });    // Funciona
element.removeEventListener("mousedown", handleMouseDown, { capture: true });     // Falla
element.removeEventListener("mousedown", handleMouseDown, { passive: false });    // Funciona
element.removeEventListener("mousedown", handleMouseDown, false);                 // Funciona
element.removeEventListener("mousedown", handleMouseDown, true);                  // Falla
```

Vale la pena mencionar que algunos navegadores tienen un comportamiento inconsistente, y a menos que se tengan razones específicas, es probablemente una buena idea usar los mismos valores usados por la llamada a `addEventListener()` al momento de utilizar `removeEventListener()`.

## Notas

Si un {{ domxref("EventListener") }} es removido de un {{ domxref("EventTarget") }} cuando aún se está procesando el evento, no será ejecutado. Después de ser removido, un {{ domxref("EventListener") }} no será invocado por el evento al cual se registró, sin embargo se podrá adjuntar de nuevo a dicho evento.

Llamar {{ domxref("<code>removeEventListener</code>") }} en algún {{ domxref("EventTarget") }} que no contenga el {{ domxref("EventListener") }} especificado será un acción sin efecto, es decir, se podrá llamar {{ domxref("<code>removeEventListener</code>") }} sin efectos negativos en los scripts.

## Ejemplo

Este es un ejemplo en donde se agrega y después se elimina un {{ domxref("EventListener") }}

```js
var body = document.querySelector('body'),
    clickTarget = document.getElementById('click-target'),
    mouseOverTarget = document.getElementById('mouse-over-target'),
    toggle = false;

function makeBackgroundYellow() {
    'use strict';

    if (toggle) {
        body.style.backgroundColor = 'white';
    } else {
        body.style.backgroundColor = 'yellow';
    }

    toggle = !toggle;
}

clickTarget.addEventListener('click',
    makeBackgroundYellow,
    false
);

mouseOverTarget.addEventListener('mouseover', function () {
    'use strict';

    clickTarget.removeEventListener('click',
        makeBackgroundYellow,
        false
    );
});
```

## Especificaciones

{{Specifications}}

## Compatibilidad de los navegadores

{{Compat("api.EventTarget.removeEventListener", 3)}}

## Polyfill to support older browsers

`addEventListener()` and `removeEventListener()` are not present in older browsers. You can work around this by inserting the following code at the beginning of your scripts, allowing use of `addEventListener()` and `removeEventListener()` in implementations which do not natively support it. However, this method will not work on Internet Explorer 7 or earlier, since extending the Element.prototype was not supported until Internet Explorer 8.

```js
if (!Element.prototype.addEventListener) {
  var oListeners = {};
  function runListeners(oEvent) {
    if (!oEvent) { oEvent = window.event; }
    for (var iLstId = 0, iElId = 0, oEvtListeners = oListeners[oEvent.type]; iElId < oEvtListeners.aEls.length; iElId++) {
      if (oEvtListeners.aEls[iElId] === this) {
        for (iLstId; iLstId < oEvtListeners.aEvts[iElId].length; iLstId++) { oEvtListeners.aEvts[iElId][iLstId].call(this, oEvent); }
        break;
      }
    }
  }
  Element.prototype.addEventListener = function (sEventType, fListener /*, useCapture (will be ignored!) */) {
    if (oListeners.hasOwnProperty(sEventType)) {
      var oEvtListeners = oListeners[sEventType];
      for (var nElIdx = -1, iElId = 0; iElId < oEvtListeners.aEls.length; iElId++) {
        if (oEvtListeners.aEls[iElId] === this) { nElIdx = iElId; break; }
      }
      if (nElIdx === -1) {
        oEvtListeners.aEls.push(this);
        oEvtListeners.aEvts.push([fListener]);
        this["on" + sEventType] = runListeners;
      } else {
        var aElListeners = oEvtListeners.aEvts[nElIdx];
        if (this["on" + sEventType] !== runListeners) {
          aElListeners.splice(0);
          this["on" + sEventType] = runListeners;
        }
        for (var iLstId = 0; iLstId < aElListeners.length; iLstId++) {
          if (aElListeners[iLstId] === fListener) { return; }
        }
        aElListeners.push(fListener);
      }
    } else {
      oListeners[sEventType] = { aEls: [this], aEvts: [ [fListener] ] };
      this["on" + sEventType] = runListeners;
    }
  };
  Element.prototype.removeEventListener = function (sEventType, fListener /*, useCapture (will be ignored!) */) {
    if (!oListeners.hasOwnProperty(sEventType)) { return; }
    var oEvtListeners = oListeners[sEventType];
    for (var nElIdx = -1, iElId = 0; iElId < oEvtListeners.aEls.length; iElId++) {
      if (oEvtListeners.aEls[iElId] === this) { nElIdx = iElId; break; }
    }
    if (nElIdx === -1) { return; }
    for (var iLstId = 0, aElListeners = oEvtListeners.aEvts[nElIdx]; iLstId < aElListeners.length; iLstId++) {
      if (aElListeners[iLstId] === fListener) { aElListeners.splice(iLstId, 1); }
    }
  };
}
```

## Ver también

- {{ domxref("EventTarget.addEventListener()") }}.
- {{non-standard_inline}}{{domxref("EventTarget.detachEvent()")}}.
