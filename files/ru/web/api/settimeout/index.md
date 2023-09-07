---
title: WindowTimers.setTimeout()
slug: Web/API/setTimeout
---

{{ APIRef() }}

## Краткое изложение

Вызов функции или выполнение фрагмента кода после указанной задержки.

## Синтаксис

```
var timeoutID = window.setTimeout(func, [, delay, param1, param2, ...]);
var timeoutID = window.setTimeout(code [, delay]);
```

где

- `timeoutID -` это _числовой_ ID, который может быть использован позже с {{domxref("window.clearTimeout()")}}.
- `func -` это [функция](/ru/docs/JavaScript/Reference/Global_Objects/Function), которую требуется вызвать после `delay` миллисекунд.
- `code` - в альтернативном варианте применения это строка, содержащая код, который вы хотите выполнить после `delay` миллисекунд (использовать этот метод **не рекомендуется** по тем же причинам, что и [eval()](/ru/docs/JavaScript/Reference/Global_Objects/eval#Don%27t_use_eval!))
- `delay` {{optional_inline}} - задержка в миллисекундах (тысячных долях секунды), после которой будет выполнен вызов функции. Реальная задержка может быть больше; см. [Notes](#notes) ниже.

Необходимо принять во внимание, что передача дополнительных параметров функции в первом варианте не работает в Internet Explorer 9 и ниже. Для использования этой функциональности в таких браузерах, необходимо использовать код для совместимости (см. раздел [Аргументы колбэк-функции](#Аргументы_колбэк-функции)).

> **Предупреждение:** **Important:** Prior to Gecko 13, Gecko passed an extra parameter to the callback routine, indicating the "actual lateness" of the timeout in milliseconds. This non-standard parameter is no longer passed.

## Пример

В следующем примере на веб странице создаются две простые кнопки, к которым привязываются действия setTimeout и clearTimeout. Нажатие на первую кнопку установит таймаут, который вызовет диалоговое окно через две секунды. Также будет сохранён id для clearTimeout. Таймаут также может быть отменён по нажатию на вторую кнопку.

### HTML Content

```html
<p>Live Example</p>
<button onclick="delayedAlert();">Show an alert box after two seconds</button>
<p></p>
<button onclick="clearAlert();">Cancel alert before it happens</button>
```

### JavaScript Content

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

Смотрите также [`пример clearTimeout()`](/ru/docs/DOM/window.clearTimeout#Example).

## Аргументы колбэк-функции

Если вам нужно передать аргумент в вашу callback функцию, но нужно, чтобы это работало в Internet Explorer 9 и ниже, который не поддерживает передачу дополнительных параметров (ни с `setTimeout()` или `setInterval()`), то вы можете прописать специальный код для _совместимости с IE,_ вставив этот код в начало ваших скриптов, который включит функцию передачи стандартных параметров HTML5 в Internet Explorer для обоих таймеров.

```js
/*\
|*|
|*|  IE-specific polyfill which enables the passage of arbitrary arguments to the
|*|  callback functions of JavaScript timers (HTML5 standard syntax).
|*|
|*|  https://developer.mozilla.org/ru/docs/DOM/window.setInterval
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
  window.setTimeout = function (
    vCallback,
    nDelay /*, argumentToPass1, argumentToPass2, etc. */,
  ) {
    var aArgs = Array.prototype.slice.call(arguments, 2);
    return __nativeST__(
      vCallback instanceof Function
        ? function () {
            vCallback.apply(null, aArgs);
          }
        : vCallback,
      nDelay,
    );
  };
  window.setTimeout.isPolyfill = true;
}

if (document.all && !window.setInterval.isPolyfill) {
  var __nativeSI__ = window.setInterval;
  window.setInterval = function (
    vCallback,
    nDelay /*, argumentToPass1, argumentToPass2, etc. */,
  ) {
    var aArgs = Array.prototype.slice.call(arguments, 2);
    return __nativeSI__(
      vCallback instanceof Function
        ? function () {
            vCallback.apply(null, aArgs);
          }
        : vCallback,
      nDelay,
    );
  };
  window.setInterval.isPolyfill = true;
}
```

## Правка только для IE

If you want a completely unobtrusive hack for every other mobile or desktop browser, including IE 9 and below, you can either use JavaScript conditional comments:

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

Или используйте очень чистый подход, основанный на условном свойстве IE HTML:

```html
<!--[if lte IE 9
  ]><script>
    (function (f) {
      window.setTimeout = f(window.setTimeout);
      window.setInterval = f(window.setInterval);
    })(function (f) {
      return function (c, t) {
        var a = [].slice.call(arguments, 2);
        return f(function () {
          c.apply(this, a);
        }, t);
      };
    });
  </script><!
[endif]-->
```

Another possibility is to use an anonymous function to call your callback, but this solution is a bit more expensive. Example:

```js
var intervalID = setTimeout(function () {
  myFunc("one", "two", "three");
}, 1000);
```

Yet another possibility is to use [function's bind](/ru/docs/JavaScript/Reference/Global_Objects/Function/bind). Example:

```js
setTimeout(function (arg1) {}.bind(undefined, 10));
```

## Проблема с "`this`"

Когда вы передаёте метод в `setTimeout()` (или в любую другую функцию, если на то пошло), то вызов будет осуществлён с неправильным значением `this`. Эта проблема разъясняется детально в [JavaScript reference](/ru/docs/JavaScript/Reference/Operators/this#Method_binding).

### Объяснение

Code executed by `setTimeout()` is run in a separate execution context to the function from which it was called. As a consequence, the `this` keyword for the called function will be set to the `window` (or `global`) object; it will not be the same as the `this` value for the function that called `setTimeout`. See the following example:

```js
myArray = ["zero", "one", "two"];
myArray.myMethod = function (sProperty) {
  alert(arguments.length > 0 ? this[sProperty] : this);
};

myArray.myMethod(); // prints "zero,one,two"
myArray.myMethod(1); // prints "one"
setTimeout(myArray.myMethod, 1000); // prints "[object Window]" after 1 second
setTimeout(myArray.myMethod, 1500, "1"); // prints "undefined" after 1.5 seconds
// let's try to pass the 'this' object
setTimeout.call(myArray, myArray.myMethod, 2000); // error: "NS_ERROR_XPC_BAD_OP_ON_WN_PROTO: Illegal operation on WrappedNative prototype object"
setTimeout.call(myArray, myArray.myMethod, 2500, 2); // same error
```

Как видите, нет способов передать объект `this` в колбэк-функцию..

### Возможное решение

A possible way to solve the "`this`" problem is to replace the two native `setTimeout()` or `setInterval()` global functions with two _non-native_ ones which will enable their invocation through the [`Function.prototype.call`](/en-US/docs/JavaScript/Reference/Global_Objects/Function/call) method. The following example shows a possible replacement:

```js
// Enable the passage of the 'this' object through the JavaScript timers

var __nativeST__ = window.setTimeout,
  __nativeSI__ = window.setInterval;

window.setTimeout = function (
  vCallback,
  nDelay /*, argumentToPass1, argumentToPass2, etc. */,
) {
  var oThis = this,
    aArgs = Array.prototype.slice.call(arguments, 2);
  return __nativeST__(
    vCallback instanceof Function
      ? function () {
          vCallback.apply(oThis, aArgs);
        }
      : vCallback,
    nDelay,
  );
};

window.setInterval = function (
  vCallback,
  nDelay /*, argumentToPass1, argumentToPass2, etc. */,
) {
  var oThis = this,
    aArgs = Array.prototype.slice.call(arguments, 2);
  return __nativeSI__(
    vCallback instanceof Function
      ? function () {
          vCallback.apply(oThis, aArgs);
        }
      : vCallback,
    nDelay,
  );
};
```

> **Примечание:** These two replacements will also enable the HTML5 standard passage of arbitrary arguments to the callback functions of timers in IE. So they can be used as polyfills also. See the [Callback arguments](#Аргументы_колбэк-функции) paragraph.

Новая тестируемая особенность:

```js
myArray = ["zero", "one", "two"];
myArray.myMethod = function (sProperty) {
  alert(arguments.length > 0 ? this[sProperty] : this);
};

setTimeout(alert, 1500, "Hello world!"); // the standard use of setTimeout and setInterval is preserved, but...
setTimeout.call(myArray, myArray.myMethod, 2000); // prints "zero,one,two" after 2 seconds
setTimeout.call(myArray, myArray.myMethod, 2500, 2); // prints "two" after 2.5 seconds
```

Это не нативные решения _ad hoc_ для этой проблемы.

> **Примечание:** JavaScript 1.8.5 introduces the [`Function.prototype.bind()`](/ru/docs/JavaScript/Reference/Global_Objects/Function/bind) method, which lets you specify the value that should be used as `this` for all calls to a given function. This lets you easily bypass problems where it's unclear what this will be, depending on the context from which your function was called.

## Замечания

Отложенное выполнение кода можно отменить, используя [`window.clearTimeout()`](/ru/docs/DOM/window.clearTimeout). Если функция должна вызываться неоднократно (например, каждые N миллисекунд), необходимо использовать [`window.setInterval()`](/ru/docs/DOM/window.setInterval).

Важно заметить, что функция или код не могут быть выполнены, пока не завершится поток, вызвавший `setTimeout()`.

### Passing string literals

Передача строки вместо функции в `setTimeout()` сопряжена с теми же опасностями, что и использование `eval.`

```js
// Правильно
window.setTimeout(function () {
  alert("Hello World!");
}, 500);

// Неправильно
window.setTimeout('alert("Hello World!");', 500);
```

String literals are evaluated in the global context, so local symbols in the context where `setTimeout()` was called will not be available when the string is evaluated as code.

### Минимальная/ максимальная задержка и вложенность таймаута

[Historically](http://code.google.com/p/chromium/issues/detail?id=792#c10) browsers implement `setTimeout()` "clamping": successive `setTimeout()` calls with `delay` smaller than the "minimum delay" limit are forced to use at least the minimum delay. The minimum delay, `DOM_MIN_TIMEOUT_VALUE`, is 4 ms (stored in a preference in Firefox: `dom.min_timeout_value`), with a `DOM_CLAMP_TIMEOUT_NESTING_LEVEL` of 5ms.

In fact, 4ms is [specified by the HTML5 spec](http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#timers) and is consistent across browsers released in 2010 and onward. Prior to Gecko 5.0, the minimum timeout value for nested timeouts was 10 ms.

In addition to "clamping", the timeout can also fire later when the page (or the OS/browser itself) is busy with other tasks.

To implement a 0 ms timeout in a modern browser, you can use {{ domxref("window.postMessage()") }} as [described here](http://dbaron.org/log/20100309-faster-timeouts).

Browsers including Internet Explorer, Chrome, Safari, and Firefox store the delay as a 32-bit signed Integer internally. This causes an Integer overflow when using delays larger than 2147483647, resulting in the timeout being executed immediately.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Также интересно

- [JavaScript timers](/ru/docs/JavaScript/Timers)
- [Timer.jsm](/ru/docs/Mozilla/JavaScript_code_modules/Timer.jsm)
- {{domxref("window.setInterval")}}
- {{domxref("window.requestAnimationFrame")}}
- [_Daemons_ management](/ru/docs/JavaScript/Timers/Daemons)
