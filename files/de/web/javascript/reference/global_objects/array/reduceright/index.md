---
title: Array.prototype.reduceRight()
slug: Web/JavaScript/Reference/Global_Objects/Array/ReduceRight
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Method
  - Prototype
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/ReduceRight
---
{{JSRef}}

Die **`reduceRight()`** Methode wendet eine Funktion gegen einen Akkumulator auf jeden Wert des Arrays (von rechts nach links) auf und reduziert es um einen einzelnen Wert.

{{EmbedInteractiveExample("pages/js/array-reduce-right.html")}}

Siehe auch {{jsxref("Array.prototype.reduce()")}} für links nach rechts Reduzierung.

## Syntax

    arr.reduceRight(callback[, initialValue])

### Parameter

- `callback`
  - : Funktion, welche für jeden Wert im Array aufgerufen wird und vier Argumente hat:_ `previousValue`
    _ : Der zuvor im letzten Aufruf des Rückrufs zurückgegebene Wert, oder `initialValue`, wenn unterstützt. (siehe unten)
    - `currentValue`
      - : Das derzeitige zu verarbeitende Element in dem Array.
    - `index`{{optional_inline}}
      - : Der Index des derzeitigen zu verarbeitenden Elements in dem Array.
    - `array`{{optional_inline}}
      - : Das Arrayobjekt, in dem das Element enthalten ist.
- `initialValue`{{optional_inline}}
  - : Objekt, welches beim ersten Aufruf der `callback` Funktion initial benutzt wird. Wenn kein Initialwert angegeben ist wird das letzte Element aus dem Array benutzt. Der aufruf auf einem leeren Array ohne angabe von `initialValue` führt zu einem Fehler.

### Rückgabewert

Der Wert, der aus der Reduktion resultiert.

## Beschreibung

`reduceRight` Führt die Rückruffunktion einmal für jedes im Array vorhandene Element aus, ohne Löcher im Array, wobei vier Argumente empfangen werden: der Initialwert (`initialValue)` (oder Wert des vorherigen `callback` Aufrufes), der Wert des derzeitigen Elements, der derzeitige Index, und das Array auf welches der Durchlauf stattfindet.

Der Aufruf des reduceRight `callback` würde ungefähr so aussehen:

```js
array.reduceRight(function(previousValue, currentValue, index, array) {
  // ...
});
```

Wenn die Funktion das erste Mal ausgeführt wird, kann der vorherige Wert (`previousValue)` und der derzeitige Wert (`currentValue)` eines von zwei Werten sein. Wenn ein Initialwert (`initialValue)` der Callback-Funktion zu `reduceRight` mitgegeben wird, dann wird der `previousValue` und `der initialValue` gleich dem `initialValue` in dem Array. Wenn kein `initialValue` mitgegeben wird, dann ist der `previousValue` gleich dem Wert in dem Array und `currentValue` wird gleich zu dem geich dem zweiten bis letzten Wert.

Wenn das Array leer ist und kein `initialValue` angegeben ist wird ein {{jsxref("TypeError")}} erzeugt. Wenn das Array nur ein Element hat (die Position ist egal) und kein `initialValue` angegeben ist oder wenn `initialValue` angegeben ist und das Array leer ist, wird der einzelne Wert zurückgegeben ohne `callback` aufzurufen.

Einige Beispieldurchläufe der Funktion würden wie folgt aussehen:

```js
[0, 1, 2, 3, 4].reduceRight(function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
});
```

Die `callback` Funktion wird vier mal aufgerufen. Die Parameter und der Rückgabewert dieser Funktion sind wie folgt:

| `callback` | `previousValue` | `currentValue` | `index` | `array`           | Rückgabewert |
| ---------- | --------------- | -------------- | ------- | ----------------- | ------------ |
| 1. Aufruf  | `4`             | `3`            | `3`     | `[0, 1, 2, 3, 4]` | `7`          |
| 2. Aufruf  | `7`             | `2`            | `2`     | `[0, 1, 2, 3, 4]` | `9`          |
| 3. Aufruf  | `9`             | `1`            | `1`     | `[0, 1, 2, 3, 4]` | `10`         |
| 4. Aufruf  | `10`            | `0`            | `0`     | `[0, 1, 2, 3, 4]` | `10`         |

Der Wert, der von `reduceRight` zurückgegeben wird, ist der Rückgabewert der letzen `callback` Funktion (`10`).

Wenn ein `initialValue` angegeben wird, sieht das Resultat folgendermaßen aus:

```js
[0, 1, 2, 3, 4].reduceRight(function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
}, 10);
```

| `callback` | `previousValue` | `currentValue` | `index` | `array`           | Rückgabewert |
| ---------- | --------------- | -------------- | ------- | ----------------- | ------------ |
| 1. Aufruf  | `10`            | `4`            | `4`     | `[0, 1, 2, 3, 4]` | `14`         |
| 2. Aufruf  | `14`            | `3`            | `3`     | `[0, 1, 2, 3, 4]` | `17`         |
| 3. Aufruf  | `17`            | `2`            | `2`     | `[0, 1, 2, 3, 4]` | `19`         |
| 4. Aufruf  | `19`            | `1`            | `1`     | `[0, 1, 2, 3, 4]` | `20`         |
| 5. Aufruf  | `20`            | `0`            | `0`     | `[0, 1, 2, 3, 4]` | `20`         |

Der von `reduceRight` zurückgegebene Wert ist in diesem Fall `20`.

## Beispiele

### Alle Elemente in einem Array summieren

```js
var sum = [0, 1, 2, 3].reduceRight(function(a, b) {
  return a + b;
});
// sum is 6
```

### Ein Array von Arrays in ein flaches Array schreiben

```js
var flattened = [[0, 1], [2, 3], [4, 5]].reduceRight(function(a, b) {
    return a.concat(b);
}, []);
// flattened is [4, 5, 2, 3, 0, 1]
```

### Eine Liste von asynchronen Funktionen mit Callbacks hintereinander laufen lassen, so dass das Resultat der vorherigen der nächsten übergeben wird

```js
const waterfall = (...functions) => (callback, ...args) =>
  functions.reduceRight(
    (composition, fn) => (...results) => fn(composition, ...results),
    callback
  )(...args);

const randInt = max => Math.floor(Math.random() * max)

const add5 = (callback, x) => {
  setTimeout(callback, randInt(1000), x + 5);
};
const mult3 = (callback, x) => {
  setTimeout(callback, randInt(1000), x * 3);
};
const sub2 = (callback, x) => {
  setTimeout(callback, randInt(1000), x - 2);
};
const split = (callback, x) => {
  setTimeout(callback, randInt(1000), x, x);
};
const add = (callback, x, y) => {
  setTimeout(callback, randInt(1000), x + y);
};
const div4 = (callback, x) => {
  setTimeout(callback, randInt(1000), x / 4);
};

const computation = waterfall(add5, mult3, sub2, split, add, div4);
computation(console.log, 5) // -> 14

// same as:

const computation2 = (input, callback) => {
  const f6 = x=> div4(callback, x);
  const f5 = (x, y) => add(f6, x, y);
  const f4 = x => split(f5, x);
  const f3 = x => sub2(f4, x);
  const f2 = x => mult3(f3, x);
  add5(f2, input);
}
```

### Unterschied zwischen `reduce` und `reduceRight`

```js
var a = ['1', '2', '3', '4', '5'];
var left  = a.reduce(function(prev, cur)      { return prev + cur; });
var right = a.reduceRight(function(prev, cur) { return prev + cur; });

console.log(left);  // "12345"
console.log(right); // "54321"
```

## Polyfill

`reduceRight` wurde im ECMA-262 Standard in der 5. Edition hinzugefügt. Aus diesem Grund ist es in manchen Implementierungen nicht vorhanden. Dieses Problem kann beheben werden indem folgender Quelltext am Anfang des Skripts eingefügt werden, wodurch `reduceRight` auch in solchen Implementierungen unterstützt werden kann.

```js
// Production steps of ECMA-262, Edition 5, 15.4.4.22
// Reference: http://es5.github.io/#x15.4.4.22
if ('function' !== typeof Array.prototype.reduceRight) {
  Array.prototype.reduceRight = function(callback /*, initialValue*/) {
    'use strict';
    if (null === this || 'undefined' === typeof this) {
      throw new TypeError('Array.prototype.reduce called on null or undefined');
    }
    if ('function' !== typeof callback) {
      throw new TypeError(callback + ' is not a function');
    }
    var t = Object(this), len = t.length >>> 0, k = len - 1, value;
    if (arguments.length >= 2) {
      value = arguments[1];
    } else {
      while (k >= 0 && !(k in t)) {
        k--;
      }
      if (k < 0) {
        throw new TypeError('Reduce of empty array with no initial value');
      }
      value = t[k--];
    }
    for (; k >= 0; k--) {
      if (k in t) {
        value = callback(value, t[k], k, t);
      }
    }
    return value;
  };
}
```

## Spezifikationen

| Spezifikation                                                                                                            | Status                       | Kommentar                                          |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.4.4.22', 'Array.prototype.reduceRight')}}                             | {{Spec2('ES5.1')}}     | Initial definition. Implemented in JavaScript 1.8. |
| {{SpecName('ES6', '#sec-array.prototype.reduceright', 'Array.prototype.reduceRight')}}     | {{Spec2('ES6')}}         |                                                    |
| {{SpecName('ESDraft', '#sec-array.prototype.reduceright', 'Array.prototype.reduceRight')}} | {{Spec2('ESDraft')}} |                                                    |

## Browserkompatibilität

{{Compat("javascript.builtins.Array.reduceRight")}}

## Siehe auch

- {{jsxref("Array.prototype.reduce()")}}
