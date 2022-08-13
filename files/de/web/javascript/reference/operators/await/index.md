---
title: await
slug: Web/JavaScript/Reference/Operators/await
tags:
  - Experimental
  - JavaScript
  - Operator
translation_of: Web/JavaScript/Reference/Operators/await
---
{{jsSidebar("Operators")}}

Der `await` Operator wird genutzt, um auf einen {{jsxref("Promise")}} zu warten. Er kann nur in einer {{jsxref("Statements/async_function", "async Funktion")}} benutzt werden.

## Syntax

    [rv] = await expression;

- `expression`
  - : Ein {{jsxref("Promise")}} oder jeder Wert, auf den gewartet wird.
- `rv`
  - : Gibt den ermittelten Wert des `Promise` zurück, oder den Wert selbst, wenn es sich nicht um ein `Promise` handelt.

## Beschreibung

Der `await` Ausdruck lässt `async` Funktionen pausieren, bis ein `Promise` erfüllt oder abgewiesen ist, und führt die `async` danach weiter aus. Wenn die Funktion weiter ausgeführt wird, ist der Wert des `await` Ausdrucks der Wert des erfüllten `Promise`.

Wenn das `Promise` abgewiesen wird, wirft der `await` Ausdruck eine Exception mit dem zurückgewiesenen Wert.

Ist der Wert des Ausdrucks, der auf den `await` Operator folgt, kein `Promise` ist, wird dieser zu einem [erfüllten Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) konvertiert.

## Beispiele

Wenn ein `Promise` im `await` Ausdruck genutzt wird, wartet dieser, bis das `Promise` fertig ist und gibt den ermittelten Wert zurück.

```js
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  var x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}
f1();
```

Wenn der Wert kein `Promise` ist, wird dieser zu einem erfüllten `Promise` konvertiert und dessen Wert zurückgegeben.

```js
async function f2() {
  var y = await 20;
  console.log(y); // 20
}
f2();
```

Wird ein `Promise` abgewiesen, so wird eine Exception mit dem zurückgewiesene Wert geworfen.

```js
async function f3() {
  try {
    var z = await Promise.reject(30);
  } catch(e) {
    console.log(e); // 30
  }
}
f3();
```

Abfangen von abgewiesenen `Promise`s ohne try-Block.

```js
var response = await promisedFunction().catch((err) => { console.log(err); });
// response will be undefined if the promise is rejected
```

## Spezifikationen

| Spezifikation                                                                                            | Status                       | Kommentar                      |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------------------ |
| {{SpecName('ESDraft', '#sec-async-function-definitions', 'async functions')}} | {{Spec2('ESDraft')}} | Initiale Definition in ES2017. |

## Browserkompatibilität

{{Compat("javascript.operators.await")}}

## Siehe auch

- {{jsxref("Statements/async_function", "async Funktion")}}
- {{jsxref("Operators/async_function", "async Funktionsausdruck")}}
- {{jsxref("AsyncFunction")}} Objekt
