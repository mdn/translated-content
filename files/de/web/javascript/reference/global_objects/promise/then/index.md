---
title: Promise.prototype.then()
slug: Web/JavaScript/Reference/Global_Objects/Promise/then
translation_of: Web/JavaScript/Reference/Global_Objects/Promise/then
---
{{JSRef}}Die **then()**-Methode gibt ein `Promise`-Objekt zurück. Sie benötigt zwei Argumente, jeweils eine Callback-Funktion für den Erfolg und den Fehlschlag des `Promise`.

## Syntax

    p.then(onFulfilled, onRejected);

    p.then(function(value) {
       // fulfillment
      }, function(reason) {
      // rejection
    });

### Parameter

- onFulfilled
  - : Eine {{jsxref("Function")}}, welche aufgerufen wird, wenn der `Promise` erfüllt wurde. Die Funktion hat ein Argument, den Rückgabewert `value`.
- onRejected {{optional_inline}}
  - : Eine {{jsxref("Function")}}, welche aufgerufen wird, wenn der `Promise` fehlschlägt. Die Funktion hat ein Argument, den Grund für den Fehlschlag: `reason`. Ist keine Funktion definiert, so wird sie intern durch die "Thrower" Funktion ersetzt (Dieser gibt einen Fehler als Argument zurück)

## Beschreibung

Die `then`- und {{jsxref("Promise.prototype.catch()")}}-Methoden, können, da sie Promises zurückgeben, verkettetet werden — ein Vorgehen, das _composition_ genannt wird.

## Beispiele

### Benutzen der `then`-Methode

```js
var p1 = new Promise(function(resolve, reject) {
  resolve("Success!");
  // or
  // reject ("Error!");
});

p1.then(function(value) {
  console.log(value); // Success!
}, function(reason) {
  console.log(reason); // Error!
});
```

### Verketten

Da die `then`-Methode einen `Promise` zurückliefert, können `then`-Aufrufe leicht verkettet werden.

```js
var p2 = new Promise(function(resolve, reject) {
  resolve(1);
});

p2.then(function(value) {
  console.log(value); // 1
  return value + 1;
}).then(function(value) {
  console.log(value); // 2
});

p2.then(function(value) {
  console.log(value); // 1
});
```

## Spezifikationen

| Spezifikation                                                                                            | Status                   | Kommentar                                         |
| -------------------------------------------------------------------------------------------------------- | ------------------------ | ------------------------------------------------- |
| {{SpecName('ES2015', '#sec-promise.prototype.then', 'Promise.prototype.then')}} | {{Spec2('ES2015')}} | Initiale Definition in einem ECMAScript-Standard. |

## Browserkompatibilität

{{Compat}}

\[1] Gecko 24 besitzt, unter dem Namen Future, eine experimentielle Implementation von Promise. In Gecko 25 wurde der Name final festgelegt aber standardmäßig durch die Einstellung `dom.promise.enabled`deaktiviert. Durch [Bug 918806](https://bugzilla.mozilla.org/show_bug.cgi?id=918806) wurden Promises in Gecko 29 standardmäßig aktiviert.

## Siehe auch

- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.catch()")}}
