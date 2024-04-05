---
title: setInterval()
slug: Web/API/setInterval
---

{{APIRef("HTML DOM")}}

**`setInterval()`** 函式, {{domxref("Window")}} 與 {{domxref("Worker")}} 介面皆提供此一函式, 此函式作用為重複地執行一個函式呼叫或一個程式碼片斷, 每一次執行間隔固定的延遲時間. 此函式呼叫時將傳回一個間隔代碼(Interval ID)用以識別該間隔程序, 因此後續你可以呼叫 {{domxref("clearInterval()")}} 函式移除該間隔程序. 此函式為由 `WindowOrWorkerGlobalScope` 混合定義。

## Syntax

```plain
var intervalID = scope.setInterval(func, [delay, arg1, arg2, ...]);
var intervalID = scope.setInterval(code, [delay]);
```

### Parameters

- `func`
  - : A {{jsxref("function")}} to be executed every `delay` milliseconds. The function is not passed any arguments, and no return value is expected.
- `code`
  - : An optional syntax allows you to include a string instead of a function, which is compiled and executed every `delay` milliseconds. This syntax is _not recommended_ for the same reasons that make using {{jsxref("eval", "eval()")}} a security risk.
- `delay`{{optional_inline}}
  - : The time, in milliseconds (thousandths of a second), the timer should delay in between executions of the specified function or code. See [Delay restrictions](#delay_restrictions) below for details on the permitted range of `delay` values.
- `arg1, ..., argN` {{optional_inline}}
  - : Additional arguments which are passed through to the function specified by _func_ once the timer expires.

> **備註：** Passing additional arguments to `setInterval()` in the first syntax does not work in Internet Explorer 9 and earlier. If you want to enable this functionality on that browser, you must use a polyfill (see the [Callback arguments](#Callback_arguments) section).

### Return value

The returned `intervalID` is a numeric, non-zero value which identifies the timer created by the call to `setInterval()`; this value can be passed to {{domxref("clearInterval()")}} to cancel the timeout.

It may be helpful to be aware that `setInterval()` and {{domxref("setTimeout()")}} share the same pool of IDs, and that `clearInterval()` and {{domxref("clearTimeout()")}} can technically be used interchangeably. For clarity, however, you should try to always match them to avoid confusion when maintaining your code.

> **備註：** The `delay` argument is converted to a signed 32-bit integer. This effectively limits `delay` to 2147483647 ms, since it's specified as a signed integer in the IDL.

## Examples

### Example 1: Basic syntax

The following example demonstrates `setInterval()`'s basic syntax.

```js
var intervalID = window.setInterval(
  myCallback,
  500,
  "Parameter 1",
  "Parameter 2",
);

function myCallback(a, b) {
  // Your code here
  // Parameters are purely optional.
  console.log(a);
  console.log(b);
}
```

### Example 2: Alternating two colors

The following example calls the `flashtext()` function once a second until the Stop button is pressed.

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>setInterval/clearInterval example</title>

    <script>
      var nIntervId;

      function changeColor() {
        nIntervId = setInterval(flashText, 1000);
      }

      function flashText() {
        var oElem = document.getElementById("my_box");
        oElem.style.color = oElem.style.color == "red" ? "blue" : "red";
        // oElem.style.color == 'red' ? 'blue' : 'red' is a ternary operator.
      }

      function stopTextColor() {
        clearInterval(nIntervId);
      }
    </script>
  </head>

  <body onload="changeColor();">
    <div id="my_box">
      <p>Hello World</p>
    </div>

    <button onclick="stopTextColor();">Stop</button>
  </body>
</html>
```

## Callback arguments

As previously discussed, Internet Explorer versions 9 and below do not support the passing of arguments to the callback function in either `setTimeout()` or `setInterval()`. The following **IE-specific** code demonstrates a method for overcoming this limitation. To use, simply add the following code to the top of your script.

```js
/*\
|*|
|*|  IE-specific polyfill that enables the passage of arbitrary arguments to the
|*|  callback functions of javascript timers (HTML5 standard syntax).
|*|
|*|  https://developer.mozilla.org/zh-TW/docs/Web/API/window.setInterval
|*|  https://developer.mozilla.org/User:fusionchess
|*|
|*|  Syntax:
|*|  var timeoutID = window.setTimeout(func, delay[, arg1, arg2, ...]);
|*|  var timeoutID = window.setTimeout(code, delay);
|*|  var intervalID = window.setInterval(func, delay[, arg1, arg2, ...]);
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

Another possibility is to use an anonymous function to call your callback, although this solution is a bit more expensive. Example:

```js
var intervalID = setInterval(function () {
  myFunc("one", "two", "three");
}, 1000);
```

Another possibility is to use [function's bind](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Function/bind). Example:

```js
var intervalID = setInterval(function (arg1) {}.bind(undefined, 10), 1000);
```

### Inactive tabs

Starting in Gecko 5.0, intervals are clamped to fire no more often than once per second in inactive tabs.

## The "[`this`](/zh-TW/docs/Web/JavaScript/Reference/Operators/this)" problem

When you pass a method to `setInterval()` or any other function, it is invoked with the wrong [`this`](/zh-TW/docs/Web/JavaScript/Reference/Operators/this) value. This problem is explained in detail in the [JavaScript reference](/zh-TW/docs/Web/JavaScript/Reference/Operators/this#As_an_object_method).

### Explanation

Code executed by `setInterval()` runs in a separate execution context than the function from which it was called. As a consequence, the [`this`](/zh-TW/docs/Web/JavaScript/Reference/Operators/this) keyword for the called function is set to the `window` (or `global`) object, it is not the same as the `this` value for the function that called `setTimeout`. See the following example (which uses `setTimeout()` instead of `setInterval()` – the problem, in fact, is the same for both timers):

```js
myArray = ["zero", "one", "two"];

myArray.myMethod = function (sProperty) {
  alert(arguments.length > 0 ? this[sProperty] : this);
};

myArray.myMethod(); // prints "zero,one,two"
myArray.myMethod(1); // prints "one"
setTimeout(myArray.myMethod, 1000); // prints "[object Window]" after 1 second
setTimeout(myArray.myMethod, 1500, "1"); // prints "undefined" after 1,5 seconds
// passing the 'this' object with .call won't work
// because this will change the value of this inside setTimeout itself
// while we want to change the value of this inside myArray.myMethod
// in fact, it will be an error because setTimeout code expects this to be the window object:
setTimeout.call(myArray, myArray.myMethod, 2000); // error: "NS_ERROR_XPC_BAD_OP_ON_WN_PROTO: Illegal operation on WrappedNative prototype object"
setTimeout.call(myArray, myArray.myMethod, 2500, 2); // same error
```

As you can see there are no ways to pass the `this` object to the callback function in the legacy JavaScript.

### A possible solution

A possible way to solve the "`this`" problem is to replace the two native `setTimeout()` or `setInterval()` global functions with two _non-native_ ones that enable their invocation through the [`Function.prototype.call`](/zh-TW/docs/JavaScript/Reference/Global_Objects/Function/call) method. The following example shows a possible replacement:

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

> **備註：** These two replacements also enable the HTML5 standard passage of arbitrary arguments to the callback functions of timers in IE. So they can be used as _non-standard-compliant_ polyfills also. See the [callback arguments paragraph](#Callback_arguments) for a _standard-compliant_ polyfill.

New feature test:

```js
myArray = ["zero", "one", "two"];

myArray.myMethod = function (sProperty) {
  alert(arguments.length > 0 ? this[sProperty] : this);
};

setTimeout(alert, 1500, "Hello world!"); // the standard use of setTimeout and setInterval is preserved, but...
setTimeout.call(myArray, myArray.myMethod, 2000); // prints "zero,one,two" after 2 seconds
setTimeout.call(myArray, myArray.myMethod, 2500, 2); // prints "two" after 2,5 seconds
```

Another, more complex, solution for **the [`this`](/zh-TW/docs/Web/JavaScript/Reference/Operators/this) problem** is [the following framework](#MiniDaemon_-_A_framework_for_managing_timers).

> **備註：** JavaScript 1.8.5 introduces the [`Function.prototype.bind()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) method, which lets you specify the value that should be used as `this` for all calls to a given function. This lets you easily bypass problems where it's unclear what this will be, depending on the context from which your function was called. Also, ES2015 supports [arrow functions](/zh-TW/docs/Web/JavaScript/Reference/Functions/Arrow_functions), with lexical this allowing us to write setInterval( () => this.myMethod) if we're inside myArray method.

## Usage notes

The `setInterval()` function is commonly used to set a delay for functions that are executed again and again, such as animations. You can cancel the interval using {{domxref("clearInterval()")}}.

If you wish to have your function called _once_ after the specified delay, use {{domxref("setTimeout()")}}.

### Delay restrictions

It's possible for intervals to be nested; that is, the callback for `setInterval()` can in turn call `setInterval()` to start another interval running, even though the first one is still going. To mitigate the potential impact this can have on performance, once intervals are nested beyond five levels deep, the browser will automatically enforce a 4 ms minimum value for the interval. Attempts to specify a value less than 4 ms in deeply-nested calls to `setInterval()` will be pinned to 4 ms.

Browsers may enforce even more stringent minimum values for the interval under some circumstances, although these should not be common. Note also that the actual amount of time that elapses between calls to the callback may be longer than the given `delay`; see [Reasons for delays longer than specified](/zh-TW/docs/Web/API/setTimeout#reasons_for_delays_longer_than_specified) for examples.

### Ensure that execution duration is shorter than interval frequency

If there is a possibility that your logic could take longer to execute than the interval time, it is recommended that you recursively call a named function using {{domxref("setTimeout()")}}. For example, if using `setInterval()` to poll a remote server every 5 seconds, network latency, an unresponsive server, and a host of other issues could prevent the request from completing in its allotted time. As such, you may find yourself with queued up XHR requests that won't necessarily return in order.

In these cases, a recursive `setTimeout()` pattern is preferred:

```js
(function loop() {
  setTimeout(function () {
    // Your logic here

    loop();
  }, delay);
})();
```

In the above snippet, a named function `loop()` is declared and is immediately executed. `loop()` is recursively called inside `setTimeout()` after the logic has completed executing. While this pattern does not guarantee execution on a fixed interval, it does guarantee that the previous interval has completed before recursing.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript timers](/zh-TW/Add-ons/Code_snippets/Timers)
- {{domxref("setTimeout")}}
- {{domxref("clearTimeout")}}
- {{domxref("clearInterval")}}
- {{domxref("window.requestAnimationFrame")}}
- [_Daemons_ management](/zh-TW/Add-ons/Code_snippets/Timers/Daemons)
