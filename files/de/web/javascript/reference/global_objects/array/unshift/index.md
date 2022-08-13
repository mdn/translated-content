---
title: Array.prototype.unshift()
slug: Web/JavaScript/Reference/Global_Objects/Array/unshift
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Array/unshift
---
{{JSRef}}

Die **`unshift()`** Methode fügt ein oder mehrere Elemente am Anfang eines Array hinzu und gibt die neue Länge des Arrays zurück.

{{EmbedInteractiveExample("pages/js/array-unshift.html")}}

## Syntax

    arr.unshift(element1[, ...[, elementN]])

### Parameter

- `elementN`
  - : Die Elemente die am Anfang des Arrays hinzugefügt werden sollen.

### Rückgabewert

Die neue {{jsxref("Array.length", "length")}} Eigenschaft des Arrays auf dem die Methode aufgerufen wurde.

## Beschreibung

Die `unshift` Methode fügt die gegeben Elemente am Anfang eines Arrays ähnlichen Objektes hinzu.

`unshift` ist extra generisch gehalten. Diese Methode kann mit {{jsxref("Function.call", "call", "", 1)}} oder {{jsxref("Function.apply", "apply", "", 1)}} auf einem Array ähnlichen Objekt angewendet werden. Objekte, die nicht über die Eigenschaft `length` verfügen, welche nicht das letzte in einer Reihe aufeinander folgenden, null-basierenden nummerische Werten repräsentieren, können sinnlose Ergebnisse liefern.

## Beispiele

```js
var arr = [1, 2];

arr.unshift(0); // result of call is 3, the new array length
// arr is [0, 1, 2]

arr.unshift(-2, -1); // = 5
// arr is [-2, -1, 0, 1, 2]

arr.unshift([-3]);
// arr is [[-3], -2, -1, 0, 1, 2]
```

## Spezifikationen

| Spezifikation                                                                                                | Status                       | Kommentar                                             |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                     | {{Spec2('ES3')}}         | Initiale Definition. Implementiert in JavaScript 1.2. |
| {{SpecName('ES5.1', '#sec-15.4.4.13', 'Array.prototype.unshift')}}                     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-array.prototype.unshift', 'Array.prototype.unshift')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-array.prototype.unshift', 'Array.prototype.unshift')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Array.unshift")}}

## Siehe auch

- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.concat()")}}
