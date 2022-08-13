---
title: Promise.race()
slug: Web/JavaScript/Reference/Global_Objects/Promise/race
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Promise
translation_of: Web/JavaScript/Reference/Global_Objects/Promise/race
---
{{JSRef}}

**`Promise.race(iterable)`** gibt ein erfolgreiches oder fehlgeschlagenes Promise zurück, sobald eines der Promises in dem `iterable` erfolgreich war oder fehlgeschlagen ist, entsprechend mit dem `value` oder dem `reason` dieses Promises.

{{EmbedInteractiveExample("pages/js/promise-race.html")}}

## Syntax

    Promise.race(iterable);

### Parameter

- iterable
  - : Ein iterierbares Objekt, wie zum Beispiel {{jsxref("Array")}}. Siehe auch [iterable](/de/docs/Web/JavaScript/Guide/iterable).

### Rückgabewert

Eine {{jsxref("Promise")}} im Status **pending**, die **asynchron** (sobald der Stack leer ist) einen erfolgreichen oder fehlerhaften Status annimmt, sobald die erste Promise erfolgreich, bzw. fehlerhaft ist und entsprechend diesen Wert zurückliefert.

## Beschreibung

Die `race` Funktion gibt eine `Promise` zurück, die sich genauso verhält, wie die Promise aus `iterable`, die als erstes einen erfolgreichen oder fehlerhaften Status annimmt und entsprechend diesen Wert zurückliefert.

Wenn das übergebene `iterable` leer ist, wird die Promise für immer im Status **pending** verharren.

Wenn `iterable` einen oder mehrere Werte enthält, die keine Promise sind bzw. Promises die bereits einen erfolgreichen oder fehlerhaften Status angenommen haben, dann wird die zurückgegebene Promise von `Promise.race` entsprechend den ersten dieser Werte aus `iterable` annehmen.

## Beispiele

### Asynchronität von `Promise.race`

Das folgende Beispiel demonstriert the Asynchronität von `Promise.race:`

```js
// wir übergeben als Argument ein Array von Promises, die bereits einen
// erfolgreichen Status angenommen haben, um Promise.race sofort auszulösen
var resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

var p = Promise.race(resolvedPromisesArray);
// sofortiges Loggen des Wertes aus p
console.log(p);

// mit setTimeout wird der Code erst nachdem der Stack leer ist ausgeführt
setTimeout(function(){
    console.log('der Stack ist jetzt leer');
    console.log(p);
});

// Logs, in der Reihenfolge:
// Promise { <state>: "pending" }
// der Stack ist jetzt leer
// Promise { <state>: "fulfilled", <value>: 33 }
```

Ein leeres `iterable` führt zu einer Promise, die für immer im Status **pending** bleibt:

```js
var foreverPendingPromise = Promise.race([]);
console.log(foreverPendingPromise);
setTimeout(function(){
    console.log('der Stack ist jetzt leer');
    console.log(foreverPendingPromise);
});

// Logs, in der Reihenfolge:
// Promise { <state>: "pending" }
// der Stack ist jetzt leer
// Promise { <state>: "pending" }
```

Wenn `iterable` einen oder mehrere Werte enthält, die keine Promise sind bzw. Promises die bereits einen erfolgreichen oder fehlerhaften Status angenommen haben, dann wird `Promise.race` entsprechend den ersten dieser Werte aus `iterable` annehmen:

```js
var foreverPendingPromise = Promise.race([]);
var alreadyResolvedProm = Promise.resolve(666);

var arr = [foreverPendingPromise, alreadyResolvedProm, "keine Promise"];
var arr2 = [foreverPendingPromise, "keine Promise", Promise.resolve(666)];
var p = Promise.race(arr);
var p2 = Promise.race(arr2);

console.log(p);
console.log(p2);
setTimeout(function(){
    console.log('der Stack ist jetzt leer');
    console.log(p);
    console.log(p2);
});

// Logs, in der Reihenfolge:
// Promise { <state>: "pending" }
// Promise { <state>: "pending" }
// der Stack ist jetzt leer
// Promise { <state>: "fulfilled", <value>: 666 }
// Promise { <state>: "fulfilled", <value>: "keine Promise" }
```

### Benutzung von `Promise.race` – Beispiele mit [`setTimeout`](/de/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)

```js
var p1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, 'eins');
});
var p2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, 'zwei');
});

Promise.race([p1, p2]).then(function(value) {
  console.log(value); // "zwei"
  // beide erfolgreich, aber p2 ist schneller
});

var p3 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, 'drei');
});
var p4 = new Promise(function(resolve, reject) {
    setTimeout(reject, 500, 'vier');
});

Promise.race([p3, p4]).then(function(value) {
  console.log(value); // "drei"
  // p3 ist schneller, also insgesamt erfolgreich
}, function(reason) {
  // nicht aufgerufen
});

var p5 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, 'fünf');
});
var p6 = new Promise(function(resolve, reject) {
    setTimeout(reject, 100, 'sechs');
});

Promise.race([p5, p6]).then(function(value) {
  // nicht aufgerufen
}, function(reason) {
  console.log(reason); // "sechs"
  // p6 ist schneller, also insgesamt fehlerhaft
});
```

## Spezifikationen

| Spezifikation                                                                    | Status                       | Kommentar                                 |
| -------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------- |
| {{SpecName('ES2015', '#sec-promise.race', 'Promise.race')}} | {{Spec2('ES2015')}}     | Initiale Definition eines ECMA Standards. |
| {{SpecName('ESDraft', '#sec-promise.race', 'Promise.race')}} | {{Spec2('ESDraft')}} |                                           |

## Browserkompatibilität

{{Compat("javascript.builtins.Promise.race")}}

## Siehe auch

- {{jsxref("Promise")}}
- {{jsxref("Promise.all()")}}
