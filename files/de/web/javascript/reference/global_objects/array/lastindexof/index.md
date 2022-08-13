---
title: Array.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Method
  - Prototype
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
---
{{JSRef}}

Die **`lastIndexOf()`** Methode gibt den letzten Index zurück, an dem ein übergebenes Element im Array gefunden wurde, oder -1, wenn es nicht vorhanden ist. Das Array wird rückwärts durchsucht beginnend beim `fromIndex`.

{{EmbedInteractiveExample("pages/js/array-lastindexof.html")}}

## Syntax

    arr.lastIndexOf(searchElement)
    arr.lastIndexOf(searchElement, fromIndex)

### Parameter

- `searchElement`
  - : Element, nach dem im Feld gesucht wird.
- `fromIndex` {{optional_inline}}
  - : Der Index an dem die Suche rückwärts begonnen wird. Der Standardwert ist die Arraylänge minus eins (`arr.length - 1`), d. h. das gesamte Feld wird durchsucht. Wenn der Index größer oder gleich der Länge des Arrays ist, wird das gesamte Array durchsucht. Ist der Index eine negative Zahl, wird er als Offset vom Ende des Arrays behandelt. Bei Verwendung eines negativen Index wird das Array trotzdem von hinten nach vorne durchsucht. Wenn der errechnete Index kleiner als 0 ist, wird -1 zurückgegeben, d.h. das Feld wird nicht durchsucht.

### Rückgabewert

Der letzte Index des gesuchten Elementes aus dem Feld. **-1** wenn keins gefunden wurde.

## Beschreibung

`lastIndexOf` vergleicht das `searchElement` mit den Elementen des Feldes und verwendet hierzu die [strikte Gleichheit](/de/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Die_Gleichheitsoperatoren_anwenden) (Die gleiche Methode, die beim `===` Operator (triple-equals) angewendet wird.

## Beispiele

### `lastIndexOf` verwenden

Das folgende Beispiel verwendet `lastIndexOf`, um Werte in einem Array zu finden.

```js
var numbers = [2, 5, 9, 2];
numbers.lastIndexOf(2);     // 3
numbers.lastIndexOf(7);     // -1
numbers.lastIndexOf(2, 3);  // 3
numbers.lastIndexOf(2, 2);  // 0
numbers.lastIndexOf(2, -2); // 0
numbers.lastIndexOf(2, -1); // 3
```

### Finde jedes Vorkommen eines Elementes

Das folgende Beispiel benutzt `lastIndexOf`, um alle Indizes eines Elementes in einem Array zu finden, wobei sie mit Hilfe von {{jsxref("Array.prototype.push", "push")}} zu einem anderen Array hinzugefügt werden, sobald sie gefunden werden.

```js
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.lastIndexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = (idx > 0 ? array.lastIndexOf(element, idx - 1) : -1);
}

console.log(indices);
// [4, 2, 0]
```

Der Fall `idx == 0` muss hier separat behandelt werden, weil das Element immer gefunden wird, unabhängig vom `fromIndex` Parameter, falls es das erste Element im Feld ist. Das ist der Unterschieder zur {{jsxref("Array.prototype.indexOf", "indexOf")}} Methode.

## Polyfill

`lastIndexOf` wurde dem ECMA-262-Standard in der fünften Edition hinzugefügt; sie könnte daher nicht in allen Browsern verfügbar sein. Der Fehler kann umgangen werden, indem der folgende Code zu Beginn eines Skriptes eingesetzt wird. Dies ermöglicht die Verwendung von `lastIndexOf`, auch wenn die Methode nativ nicht unterstützt wird. Dieser Algorithmus stimmt mit dem überein, was in ECMA-262 der 5. Edition, spezifiziert wurde, unter der Annahme, dass {{jsxref("Object")}}, {{jsxref("TypeError")}}, {{jsxref("Number")}}, {{jsxref("Math.floor")}}, {{jsxref("Math.abs")}}, und {{jsxref("Math.min")}} ihre originalen Werte haben.

```js
// Production steps of ECMA-262, Edition 5, 15.4.4.15
// Reference: http://es5.github.io/#x15.4.4.15
if (!Array.prototype.lastIndexOf) {
  Array.prototype.lastIndexOf = function(searchElement /*, fromIndex*/) {
    'use strict';

    if (this === void 0 || this === null) {
      throw new TypeError();
    }

    var n, k,
      t = Object(this),
      len = t.length >>> 0;
    if (len === 0) {
      return -1;
    }

    n = len - 1;
    if (arguments.length > 1) {
      n = Number(arguments[1]);
      if (n != n) {
        n = 0;
      }
      else if (n != 0 && n != (1 / 0) && n != -(1 / 0)) {
        n = (n > 0 || -1) * Math.floor(Math.abs(n));
      }
    }

    for (k = n >= 0 ? Math.min(n, len - 1) : len - Math.abs(n); k >= 0; k--) {
      if (k in t && t[k] === searchElement) {
        return k;
      }
    }
    return -1;
  };
}
```

Erneute Anmerkung: Diese Implementation zielt auf eine absolute Kompatibilität von `lastIndexOf` mit Firefox und der SpiderMonkey JavaScript Umgebung aus, inklusive einigen Fällen, welche wohl Grenzfälle sind. Beim Vorhaben diese Funktion in eigenen Applikationen zu verwenden, ist eine Berechnung von `from` mit weniger komplizierten Code möglich, wenn diese Fälle ignoriert werden.

## Spezifikationen

| Spezifikation                                                                                                            | Status                       | Kommentar                                             |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.4.4.15', 'Array.prototype.lastIndexOf')}}                             | {{Spec2('ES5.1')}}     | Initiale Definition. Implementiert in JavaScript 1.6. |
| {{SpecName('ES6', '#sec-array.prototype.lastindexof', 'Array.prototype.lastIndexOf')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-array.prototype.lastindexof', 'Array.prototype.lastIndexOf')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Array.lastIndexOf")}}

## Kompatibilitätshinweise

- Beginnend mit Firefox 47 {{geckoRelease(47)}}, gibt diese Methode nicht mehr `-0 zurück`. Zum Beispiel wird `[0].lastIndexOf(0, -0)` immer `+0` zurückgeben ({{bug(1242043)}}).

## Siehe auch

- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
