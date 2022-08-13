---
title: Array.prototype.find()
slug: Web/JavaScript/Reference/Global_Objects/Array/find
tags:
  - Array
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/find
---
{{JSRef}}

Die Methode **`find()`** gibt den **Wert** des Elements eines Arrays zurück, welches **als erstes** die Bedingung einer bereitgestellten Testfunktion erfüllt. Andernfalls wird {{jsxref("undefined")}} zurückgegeben.

{{EmbedInteractiveExample("pages/js/array-find.html")}}

Siehe auch die Methode {{jsxref("Array.prototype.findIndex()", "findIndex()")}}, die den **Index** eines gefundenen Elements im Array anstelle seines Werts zurückgibt.

Wenn Sie die Position eines Elements ermitteln oder feststellen müssen, ob ein Element in einem Array vorhanden ist, verwenden Sie {{jsxref("Array.prototype.indexOf()", "indexOf()")}} oder {{jsxref("Array.prototype.includes()", "includes()")}}.

## Syntax

    arr.find(callback[, thisArg])

### Parameter

- `callback`
  - : Funktion, die auf jedes Element angewendet wird mit drei Argumenten:_ `element`
    _ : Das aktuelle Element, das im Array verarbeitet wird.
    - `index` {{optional_inline}}
      - : Der Index des aktuellen Elements im Array.
    - `array` {{optional_inline}}
      - : Das Array, welches mit `find()` durlaufen wird.
- `thisArg` {{optional_inline}}
  - : Wert der als `this` verwendet wird, wenn `callback` ausgeführt wird.

### Rückgabewert

Der **Wert** des Elements, welches **als erstes** die Bedingung der bereitgestellten Testfunktion erfüllt. Andernfalls wird {{jsxref("undefined")}} zurückgegeben.

## Beschreibung

`find()` führt die `callback`-Funktion einmal für jeden Index des Arrays aus, bis ein Index gefunden wird, in dem `callback` einen {{Glossary("truthy")}}-Wert zurückgibt. Wenn ein solches Element gefunden wird, gibt `find()` sofort den Wert dieses Elements zurück, {{jsxref("undefined")}}. `callback` wird für jeden Index des Arrays von `0` bis `length - 1` aufgerufen und nicht nur für Indizes, denen Werte zugewiesen wurden. Dies kann bedeuten, dass es für Arrays mit Leerstellen weniger effizient ist als andere Methoden, die nur Indizes durchlaufen, denen ein Wert zugewiesen wurde.

`callback` wird mit drei Argumenten aufgerufen:

1. Der Wert des Elements
2. Der Index des Elements
3. Das Array-Objekt, das durchlaufen wird

Falls der Parameter `thisArg` an `find()` übergeben wird, wird er als Wert für `this` innerhalb von `callback` verwendet. Andernfalls hat `this` den Wert {{jsxref("undefined")}}. Welchen Wert `callback` letztendlich in `this` sieht wird gemäß [der üblichen Regeln bestimmt, nach denen `this` für eine Funktion ermittelt wird](/de/docs/Web/JavaScript/Reference/Operators/this).

`find()` selbst verändert das Array nicht, auf dem es aufgerufen wird.

Der Bereich der von `find()` verarbeiteten Elemente wird vor dem ersten Aufruf von `callback` festgelegt. Elemente, die nach Beginn des Aufrufs von `find()` an das Array angehängt werden, werden von `callback` nicht berücksichtigt. Wenn vorhandene Elemente des Arrays geändert werden, ist der Wert maßgeblich, den `find()` beim Erreichen eines Elements antrifft und dann an `callback` übergibt. [Gelöschte](/de/docs/Web/JavaScript/Reference/Operators/delete) Elemente werden weiterhin verarbeitet.

## Beispiele

### Ermitteln eines Objekts innerhalb eines Arrays anhand eines seiner Eigenschaften

```js
var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

function isCherries(fruit) {
    return fruit.name === 'cherries';
}

console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }
```

#### Benutzung einer ES2015 Pfeilfunktion

```js
const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

const result = inventory.find( fruit => fruit.name === 'cherries' );

console.log(result) // { name: 'cherries', quantity: 5 }
```

### Ermitteln einer Primzahl innerhalb eines Arrays

Im folgenden Beispiel wird ein Element im Array ermittelt, das eine Primzahl ist (oder {{jsxref("undefined")}} zurückgibt, wenn keine Primzahl vorhanden ist).

```js
function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5
```

Das folgende Beispiel zeigt, dass nicht vorhandene und gelöschte Elemente durchlaufen werden und der Wert maßgeblich ist, der beim Erreichen des Elements angetroffen und an `callback` übergeben wird.

```js
// Array deklarieren, das an Index 2, 3 und 4 keine Elemente hat
var array = [0,1,,,,5,6];

// Zeige alle Indizes, nicht nur die denen Werte zugewiesen wurden
array.find(function(value, index) {
  console.log('Visited index ' + index + ' with value ' + value);
});

// Zeige alle Indizes, inklusive gelöschter
array.find(function(value, index) {

  // Lösche Element 5 in erstem Durchlauf
  if (index == 0) {
    console.log('Deleting array[5] with value ' + array[5]);
    delete array[5];
  }
  // Element 5 wird weiterhin durchlaufen, obwohl es gelöscht wurde
  console.log('Visited index ' + index + ' with value ' + value);
});
// Erwartete Ausgaben:
// Deleting array[5] with value 5
// Visited index 0 with value 0
// Visited index 1 with value 1
// Visited index 2 with value undefined
// Visited index 3 with value undefined
// Visited index 4 with value undefined
// Visited index 5 with value undefined
// Visited index 6 with value 6
```

## Polyfill

Diese Methode wurde der ECMAScript 2015-Spezifikation hinzugefügt und ist möglicherweise noch nicht in allen JavaScript-Implementierungen verfügbar. Sie können `Array.prototype.find()` jedoch mit dem folgenden Snippet nachrüsten:

```js
// https://tc39.github.io/ecma262/#sec-array.prototype.find
if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
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
        // d. If testResult is true, return kValue.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return undefined.
      return undefined;
    },
    configurable: true,
    writable: true
  });
}
```

Wenn Sie stark veraltete JavaScript-Engines unterstützen müssen, die {{jsxref("Object.defineProperty()")}} nicht unterstützen, empfiehlt es sich Methoden aus `Array.prototype` gar nicht mit Polyfills nachzubauen, da es nicht möglich ist sie als nicht-enumerierbar zu kennzeichnen.

## Specifikationen

| Specification                                                                                        | Status                       | Comment              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-array.prototype.find', 'Array.prototype.find')}} | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-array.prototype.find', 'Array.prototype.find')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Array.find")}}

## Siehe auch

- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
