---
title: setTimeout
slug: Web/API/setTimeout
original_slug: Web/API/WindowOrWorkerGlobalScope/setTimeout
---

{{APIRef("HTML DOM")}}

El método **`setTimeout()`** establece un temporizador que ejecuta una función o una porción de código después de que transcurre un tiempo establecido.

## Sintaxis

```
var idTemporizador = scope.setTimeout(funcion[, retraso, parametro1, parametro2, ...]);
var idTimeout = scope.setTimeout(funcion[, retraso]);
var idTimeout = scope.setTimeout(codigo[, retraso]);
```

### Parámetros

- `funcion`
  - : Una {{jsxref("function")}} para ejecutar después de que expire el temporizador.
- `codigo`
  - : Una sintaxis opcional que le permite incluir una cadena en lugar de una función, la cual es compilada y ejecutada cuando el temporizador expira. Esta sintaxis **no se recomienda** por las mismas razones que hacen del uso de {{jsxref("Global_Objects/eval", "eval()")}} un riesgo de seguridad.
- `retraso` {{optional_inline}}
  - : Tiempo, en milisegundos (milésimas de segundo), que el temporizador debe esperar antes de ejecutar la función o el código. Si se omite este parámetro se usa el valor 0. Tenga en cuenta que el retraso real puede ser más prolongado; ver más abajo [Reasons for delays longer than specified](#reasons_for_delays_longer_than_specified).
- `param1, ..., paramN` {{optional_inline}}
  - : Parámetros adicionales que se pasan a la función especificada por _func_ una vez el temporizador expira.

> **Nota:** Pasar parámetros adicionales a la función en la primera sintaxis no funciona en Internet Explorer 9 o inferior. Si quiere habilitar esta funcionalidad en ese navegador, debe usar un código de compatibilidad (vea la sección [Callback arguments](#Callback_arguments)).

### Valor retornado

El valor retornado `IDtemporizador` es númerico y no es cero; identifica el temporizador creado con la llamada a `setTimeout()`; este valor puede pasarse a {{domxref("clearTimeout()")}} para cancelar el temporizador.

Puede ser útil advertir que `setTimeout()` y {{domxref("setInterval", "setInterval()")}} comparten la misma piscina de IDs, y que tanto `clearTimeout()` como {{domxref("clearInterval", "clearInterval()")}} pueden intercambiarse. Por claridad, sin embargo, debe hacerlos coincidir para evitar confusiones cuando mantenga su código.

## Ejemplo

El siguiente ejemplo establece dos botones simples en una página web y los engancha a las rutinas `setTimeout()` y `clearTimeout()`. Presionando el primer botón establecerá un temporizador que llama un diálogo de alerta después de dos segundos y guarda el id del temporizador para usarlo con `clearTimeout()`. Opcionalmente puede cancelar este temporizador presionando el segundo botón.

HTML

```html
<p>Ejemplo funcional</p>
<button onclick="delayedAlert();">Muestra una caja de alerta después de dos segundos</button>
<p></p>
<button onclick="clearAlert();">Cancela la alerta antes de que ocurra</button>
```

JavaScript

```js
var timeoutID;

function delayedAlert() {
  timeoutID = window.setTimeout(slowAlert, 2000);
}

function slowAlert() {
  alert("That was really slow!");
}

function clearAlert() {
  window.clearTimeout(timeoutID);
}
```

{{ EmbedLiveSample('Example') }}

Vea también [`clearTimeout()` example](/es/docs/DOM/window.clearTimeout#Example).

## Callback arguments

Si necesita pasar un argumento a su función callback, pero necesita que funcione en Internet Explorer, que no soporta el envío de parámetros adicionales (ni con `setTimeout()` o `setInterval()`) usted puede incluir este código de compatibilidad _IE-specific_ que habilitará la funcionalidad estándar de HTML5 para pasar los parámetros adicionales en ese navegador para ambos temporizadores solamente insertandolo al inicio de sus scripts.

```js
/*\
|*|
|*|  IE-specific polyfill which enables the passage of arbitrary arguments to the
|*|  callback functions of JavaScript timers (HTML5 standard syntax).
|*|
|*|  https://developer.mozilla.org/en-US/docs/DOM/window.setInterval
|*|
|*|  Syntax:
|*|  var timeoutID = window.setTimeout(func, delay, [param1, param2, ...]);
|*|  var timeoutID = window.setTimeout(code, delay);
|*|  var intervalID = window.setInterval(func, delay[, param1, param2, ...]);
|*|  var intervalID = window.setInterval(code, delay);
|*|
\*/

if (document.all && !window.setTimeout.isPolyfill) {
  var __nativeST__ = window.setTimeout;
  window.setTimeout = function (vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */) {
    var aArgs = Array.prototype.slice.call(arguments, 2);
    return __nativeST__(vCallback instanceof Function ? function () {
      vCallback.apply(null, aArgs);
    } : vCallback, nDelay);
  };
  window.setTimeout.isPolyfill = true;
}

if (document.all && !window.setInterval.isPolyfill) {
  var __nativeSI__ = window.setInterval;
  window.setInterval = function (vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */) {
    var aArgs = Array.prototype.slice.call(arguments, 2);
    return __nativeSI__(vCallback instanceof Function ? function () {
      vCallback.apply(null, aArgs);
    } : vCallback, nDelay);
  };
  window.setInterval.isPolyfill = true;
}
```

## Arreglo solo para IE

Si quiere una solución completamente no intrusiva con otros navegadores móviles o de escritorio, incluyendo IE 9 y superior, puede usar los comentarios condicionales de JavaScript:

```js
/*@cc_on
  // conditional IE < 9 only fix
  @if (@_jscript_version <= 6)
  (function(f){
     window.setTimeout =f(window.setTimeout);
     window.setInterval =f(window.setInterval);
  })(function(f){return function(c,t){var a=[].slice.call(arguments,2);return f(function(){c.apply(this,a)},t)}});
  @end
@*/
```

O usar un enfoque más limpio basado en el condicional para IE de HTML:

```html
<!--[if lt IE 9]><script>
(function(f){
window.setTimeout =f(window.setTimeout);
window.setInterval =f(window.setInterval);
})(function(f){return function(c,t){
var a=[].slice.call(arguments,2);return f(function(){c.apply(this,a)},t)}
});
</script><![endif]-->
```

Otra posibilidad es usar una función anónima para llamar el callback, pero esta solución es un poco más costosa. Ejemplo:

```js
var intervalID = setTimeout(function() { myFunc("uno", "dos", "tres"); }, 1000);
```

Sin embargo, otra posibilidad es usar [function's bind](/es/docs/JavaScript/Reference/Global_Objects/Function/bind). Ejemplo:

```js
setTimeout(function(arg1){}.bind(undefined, 10));
```

## El problema "`this`"

Cuando pasa un método a `setTimeout()` (o cualquier otra función , por el estilo), podría ser invocada con el valor de `this` equivocado. Este problema es explicado en detalle en la [referencia de JavaScript](/es/docs/JavaScript/Reference/Operators/this#Method_binding).

### Explicación

El código ejecutado por `setTimeout()` corre en un contexto de ejecución diferente al de la función por la que fue llamado. Como consecuencia, la palabra clave `this para la función llamada`será asignado al objeto `window` (o `global`); no tendrá el mismo valor del `this` de la función que llamó al `setTimeout`. Vea el siguiente ejemplo:

```js
myArray = ["cero", "uno", "dos"];
myArray.myMethod = function (sProperty) {
    alert(arguments.length > 0 ? this[sProperty] : this);
};

myArray.myMethod(); // imprime "cero,uno,dos"
myArray.myMethod(1); // imprime "uno"
setTimeout(myArray.myMethod, 1000); // imprime "[object Window]" después de 1 segundo
setTimeout(myArray.myMethod, 1500, "1"); // imprime "undefined" después de 1.5 segundos
// intentemos pasar el objeto 'this'
setTimeout.call(myArray, myArray.myMethod, 2000); // error: "NS_ERROR_XPC_BAD_OP_ON_WN_PROTO: Illegal operation on WrappedNative prototype object"
setTimeout.call(myArray, myArray.myMethod, 2500, 2); // mismo error
```

Como puedes ver no hay forma de pasar el objeto `this` a la función callback.

### Una posible solución

Una posible forma de resolver el problema del "`this`" es reemplazar las dos funciones globales nativas `setTimeout()` or `setInterval()por dos no-nativas` que permitan su invocación a través del método [`Function.prototype.call`](en-US/docs/JavaScript/Reference/Global_Objects/Function/call). El siguiente ejemplo muestra un posible reemplazo:

```js
// Enable the passage of the 'this' object through the JavaScript timers

var __nativeST__ = window.setTimeout, __nativeSI__ = window.setInterval;

window.setTimeout = function (vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */) {
  var oThis = this, aArgs = Array.prototype.slice.call(arguments, 2);
  return __nativeST__(vCallback instanceof Function ? function () {
    vCallback.apply(oThis, aArgs);
  } : vCallback, nDelay);
};

window.setInterval = function (vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */) {
  var oThis = this, aArgs = Array.prototype.slice.call(arguments, 2);
  return __nativeSI__(vCallback instanceof Function ? function () {
    vCallback.apply(oThis, aArgs);
  } : vCallback, nDelay);
};
```

> **Nota:** Estos dos reemplazos habilitarán el estándar HTML5 para el paso de argumentos arbitrarios a las funciones callback de los temporizadores en IE. Pueden usarse como polyfills también. Vea el párrafo [Callback arguments](#Callback_arguments).

Prueba de la nueva característica:

```js
myArray = ["zero", "one", "two"];
myArray.myMethod = function (sProperty) {
    alert(arguments.length > 0 ? this[sProperty] : this);
};

setTimeout(alert, 1500, "Hello world!"); // the standard use of setTimeout and setInterval is preserved, but...
setTimeout.call(myArray, myArray.myMethod, 2000); // prints "zero,one,two" after 2 seconds
setTimeout.call(myArray, myArray.myMethod, 2500, 2); // prints "two" after 2.5 seconds
```

No hay soluciones nativas _ad hoc_ a este problema.

> **Nota:** JavaScript 1.8.5 introduce el método [`Function.prototype.bind(`](/es/docs/JavaScript/Reference/Global_Objects/Function/bind), que permite especificar el valor que debería usarse como `this` para todas las llamadas a una función dada. Esto permite evitar fácilmente los problemas en los que no es claro que será, dependiendo del contexto desde el cual la función sea llamada.

## Notas

Puede cancelar el temporizador usando [`window.clearTimeout()`](/es/docs/DOM/window.clearTimeout). Si desea tener una función llamada repetidamente (p.e., cada N milisegundos), considere usar [`window.setInterval()`](/es/docs/DOM/window.setInterval).

Es importante notar que la función o fragmento de código no puede ser ejecutado hasta que el hilo que llamó `setTimeout()` haya terminado.

### Pasando cadenas literales

Pasando una cadena en vez de una función a `setTimeout()` pasa lo mismo que al usar `eval.`

```js
// Correcto
window.setTimeout(function() {
    alert("Hello World!");
}, 500);

// Incorrecto
window.setTimeout("alert(\"Hello World!\");", 500);
```

Las cadenas literales son evaluadas en el contexto global, así que los símbolos locales en el contexto donde `setTimeout()` fue llamado no estarán disponibles cuando la cadena es evaluada como código.

### Minimum/ maximum delay and timeout nesting

[Historically](http://code.google.com/p/chromium/issues/detail?id=792#c10) browsers implement `setTimeout()` "clamping": successive `setTimeout()` calls with `delay` smaller than the "minimum delay" limit are forced to use at least the minimum delay. The minimum delay, `DOM_MIN_TIMEOUT_VALUE`, is 4 ms (stored in a preference in Firefox: `dom.min_timeout_value`), with a `DOM_CLAMP_TIMEOUT_NESTING_LEVEL` of 5ms.

In fact, 4ms is [specified by the HTML5 spec](http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#timers) and is consistent across browsers released in 2010 and onward. Prior to (Firefox 5.0 / Thunderbird 5.0 / SeaMonkey 2.2), the minimum timeout value for nested timeouts was 10 ms.

In addition to "clamping", the timeout can also fire later when the page (or the OS/browser itself) is busy with other tasks.

To implement a 0 ms timeout in a modern browser, you can use {{ domxref("window.postMessage()") }} as [described here](http://dbaron.org/log/20100309-faster-timeouts).

Browsers including Internet Explorer, Chrome, Safari, and Firefox store the delay as a 32-bit signed Integer internally. This causes an Integer overflow when using delays larger than 2147483647, resulting in the timeout being executed immediately.

#### Inactive tabs

In (Firefox 5.0 / Thunderbird 5.0 / SeaMonkey 2.2) and Chrome 11, timeouts are clamped to firing no more often than once per second (1000ms) in inactive tabs; see {{ bug(633421) }} for more information about this in Mozilla or [crbug.com/66078](http://crbug.com/66078) for details about this in Chrome.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- [JavaScript timers](/es/docs/JavaScript/Timers)
- [Timer.jsm](/es/docs/Mozilla/JavaScript_code_modules/Timer.jsm)
- {{domxref("window.setInterval")}}
- {{domxref("window.requestAnimationFrame")}}
- [_Daemons_ management](/es/docs/JavaScript/Timers/Daemons)
