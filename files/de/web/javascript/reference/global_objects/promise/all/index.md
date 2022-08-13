---
title: Promise.all()
slug: Web/JavaScript/Reference/Global_Objects/Promise/all
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Promise
translation_of: Web/JavaScript/Reference/Global_Objects/Promise/all
---
{{JSRef}}

Die **`Promise.all(iterable)`** Methode gibt einen {{jsxref("Promise")}} zurück, welcher erfüllt(_resolved)_ wird, wenn alle Promises in dem _iterable_ - Argument erfüllt wurden oder wenn das _iterable_ - Argument keine Promises enthält. Eine Ablehnung (_reject_) erfolgt mit dem Grund des ersten Promises, das abgelehnt wurde, oder mit dem Error der von dem ersten Argument, wenn das innerhalb eines try/catch/throw blocks gefangen wurde.

Es wird typischerweise für mehrere asynchrone Aufgaben die parallel laufen und die Promises als Ergebnisse haben, so das eines warten kann, bis alle anderen Aufgaben abgeschlossen sind.

{{EmbedInteractiveExample("pages/js/promise-all.html")}}

## Syntax

    Promise.all(iterable);

### Parameter

- iterable
  - : Ein [iterierbares](/de/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol) Objekt, z.B. ein {{jsxref("Array")}} oder ein {{jsxref("String")}}.

### Rückgabe-Wert

- Ein **bereits eingelöstes** {{jsxref("Promise")}}, wenn das eingegebene _iterable_ - Argument leer ist.
- Ein **asynchron eingelöstes** {{jsxref("Promise")}}, wenn das eingegebene _iterable_ - Argument keine Promises enthält. Achtung, Google Chrome 58 gibt in diesem Fall ein **bereits eingelöstes** Promise zurück.
- Ein **ausstehendes** (_pending_) {{jsxref("Promise")}} in allen anderen Fällen. Dieses zurückgegebene Promise wird dann **asynchron** erfüllt/abgelehnt (sobald der _stack_ leer ist), wenn alle Promises des gegebenen _iterable_ erfüllt wurden, oder wenn irgendeiner der Promises abgelehnt wird. Die Rückgabewerte entsprechen dann der Reihenfolge der Promises, unabhängig von der Reihenfolge der Erfüllung.

## Beschreibung

Diese Methode dient dem Bündeln von mehreren Promises.

Erfüllt:
Wenn alle Promises erfolgreich erfüllt werden, oder keine Promises sind, wird `Promise.all` mit einem Array, welches die Rückgabewerte der einzelnen Promises (aber auch die nicht-Promise Werte) enthält, erfüllt. Wenn ein leeres Array übergeben wird, wird `Promise.all` (synchron) sofort erfüllt.

Abgelehnt:
Wenn eines der übergebenen Promises abgelehnt wird, wird `Promise.all` asynchron mit dem Wert des fehlgeschlagenen Promise abgelehnt, ganz egal, ob die anderen Promises erfolgreich waren oder nicht.

## Beispiele

### Erfolgreich:

```js
var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
   setTimeout(resolve, 100, 'foo');
});

Promise.all([p1, p2, p3])
.then(values => {
  console.log(values); // [3, 1337, "foo"]
});
```

### Sofortige Ablehnung:

```js
var p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'one');
});
var p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'two');
});
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'three');
});
var p4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, 'four');
});
var p5 = new Promise((resolve, reject) => {
  reject('reject');
});

Promise.all([p1, p2, p3, p4, p5]).then(values => {
  console.log(values);
}, reason => {
  console.log(reason)
});

//From console:
//"reject"

//You can also use .catch
Promise.all([p1, p2, p3, p4, p5]).then(values => {
  console.log(values);
}).catch(reason => {
  console.log(reason)
});

//From console:
//"reject"
```

## Spezifikationen

| Specification                                                                 | Status                   | Comment                                    |
| ----------------------------------------------------------------------------- | ------------------------ | ------------------------------------------ |
| [domenic/promises-unwrapping](https://github.com/domenic/promises-unwrapping) | Draft                    | Standardization work is taking place here. |
| {{SpecName('ES2015', '#sec-promise.all', 'Promise.all')}}  | {{Spec2('ES2015')}} | Initial definition in an ECMA standard.    |

## Browserkompatiblität

{{Compat("javascript.builtins.Promise.all")}}

## Siehe auch

- {{jsxref("Promise")}}
- {{jsxref("Promise.race()")}}
