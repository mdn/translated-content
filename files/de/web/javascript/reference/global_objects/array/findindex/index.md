---
title: Array.prototype.findIndex()
slug: Web/JavaScript/Reference/Global_Objects/Array/findIndex
tags:
  - Array
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/findIndex
---
{{JSRef}}

Die Methode **`findIndex()`** gibt den **Index** des ersten Elements im Array zurück, **das die bereitgestellte Testfunktion erfüllt.** Andernfalls wird -1 zurückgegeben, um anzuzeigen, dass kein Element den Test bestanden hat.

{{EmbedInteractiveExample("pages/js/array-findindex.html")}}

Siehe auch die Methode {{jsxref("Array.find", "find()")}}, die den Wert eines Arrayelements anstelle dessen Index zurückgibt.

## Syntax

    arr.findIndex(callback(element[, index[, array]])[, thisArg])

### Parameter

- `callback`
  - : Eine Funktion, die für jeden Wert im Array ausgeführt wird, bis sie `true` zurückgibt, um anzuzeigen, dass das gewünschte Element gefunden wurde. Sie akzeptiert 3 Argumente:_ `element`
    _ : Das aktuelle Element, das im Array verarbeitet wird.
    - `index` {{optional_inline}}
      - : Der Index des aktuellen Elements, das im Array verarbeitet wird.
    - `array` {{optional_inline}}
      - : Das Array, welches mit `findIndex()` durchlaufen wird.
- `thisArg` {{optional_inline}}
  - : Wert der als `this` verwendet wird, wenn `callback` ausgeführt wird

### Rückgabewert

Ein Index im Array, wenn ein Element den Test besteht, ansonsten **-1.**

## Beschreibung

`findIndex()` ruft eine bereitgestellte `callback`-Funktion einmal für jeden Array-Index `0..length-1` (inklusive) im Array auf bis `callback` einen {{Glossary("truthy")}}-Wert findet.

Wird ein solches Element gefunden gibt `findIndex()` sofort den Index des gefundenen Elements zurück. Gibt callback nie einen {{Glossary("truthy")}}-Wert zurück oder ist `length` gleich 0 gibt `findIndex()` -1 zurück. Im Gegensatz zu einigen anderen Array-Methoden wie {{jsxref("Array.prototype.some()", "some()")}} wird in Arrays mit Leerstellen `callback` **auch für** Indizes aufgerufen, die keinen Inhalt haben.

`callback` wird mit drei Argumenten aufgerufen:

1.  Der Wert des Elements
2.  Der Index des Elements
3.  Das Array-Objekt, das durchlaufen wird

Falls der Parameter `thisArg` an `findIndex()` übergeben wird, wird er als Wert für `this` innerhalb von `callback` verwendet. Andernfalls hat `this` den Wert {{jsxref("undefined")}}. Welchen Wert `callback` letztendlich in `this` sieht wird gemäß [der üblichen Regeln bestimmt, nach denen `this` für eine Funktion ermittelt wird](/de/docs/Web/JavaScript/Reference/Operators/this).

Der Bereich der von `findIndex()` verarbeiteten Elemente wird vor dem ersten Aufruf von `callback` festgelegt. Elemente, die nach Beginn des Aufrufs von `findIndex()` an das Array angehängt werden, werden von `callback` nicht berücksichtigt. Wenn vorhandene Elemente des Arrays geändert werden, ist der Wert maßgeblich, den `findIndex()` beim Erreichen eines Elements antrifft und dann an `callback` übergibt. [Gelöschte](/de/docs/Web/JavaScript/Reference/Operators/delete) Elemente werden weiterhin verarbeitet.

## Beispiele

### Index einer Primzahl in einem Array finden

Das folgende Beispiel gibt den Index eines Elements im Array zurück, das eine Primzahl ist, oder -1, wenn keine Primzahl vorhanden ist.

```js
function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start < 1) {
      return false;
    } else {
      start++;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].findIndex(isPrime)); // -1, not found
console.log([4, 6, 7, 12].findIndex(isPrime)); // 2 (array[2] is 7)
```

### Index mithilfe einer Pfeilfunktion ermitteln

Im folgenden Beispiel wird der Index einer Frucht mithilfe einer Pfeilfunktion ermittelt:

```js
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = fruits.findIndex(fruit => fruit === "blueberries");

console.log(index); // 3
console.log(fruits[index]); // blueberries
```

## Polyfill

```js
// https://tc39.github.io/ecma262/#sec-array.prototype.findindex
if (!Array.prototype.findIndex) {
  Object.defineProperty(Array.prototype, 'findIndex', {
    value: function(predicate) {
     // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return k.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return k;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return -1.
      return -1;
    },
    configurable: true,
    writable: true
  });
}
```

Wenn Sie stark veraltete JavaScript-Engines unterstützen müssen, die {{jsxref("Object.defineProperty()")}} nicht unterstützen, empfiehlt es sich Methoden aus `Array.prototype` gar nicht mit Polyfills nachzubauen, da es nicht möglich ist sie als nicht-enumerierbar zu kennzeichnen.

## Spezifikationen

| Specification                                                                                                        | Status                       | Comment              |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-array.prototype.findindex', 'Array.prototype.findIndex')}}     | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-array.prototype.findIndex', 'Array.prototype.findIndex')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Array.findIndex")}}

## Siehe auch

- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.indexOf()")}}
