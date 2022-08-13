---
title: Array.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/Array/includes
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/includes
---
{{JSRef}}

Die **`includes()`** Methode prüft, ob ein Array ein bestimmtes Element enthält, und gibt entsprechend `true` oder `false` aus. Es wird der selbe sameValueZero-Algorithmus benutzt, um ein gegebenes Element zu finden.

{{EmbedInteractiveExample("pages/js/array-includes.html")}}

## Syntax

    arr.includes(searchElement[, fromIndex])

### Parameter

- `searchElement`
  - : Das zu suchende Element.
- `fromIndex`{{optional_inline}}
  - : Die Position im Array, ab welcher die Suche nach `searchElement` beginnt. Bei einem negativen Wert fängt die Suche beim Index `array.length - fromIndex` an. Default ist 0.

### Rückgabewert

Ein {{jsxref("Boolean")}}.

## Beispiele

```js
[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
```

### `fromIndex` ist größer oder gleich der Arraylänge

Wenn `fromIndex` größer oder gleich der Arraylänge ist, wird `false` zurückgegeben. Das Array wird nicht durchsucht.

```js
var arr = ['a', 'b', 'c'];

arr.includes('c', 3);   // false
arr.includes('c', 100); // false
```

### Berechneter Index ist kleiner als 0

Wenn `fromIndex` negativ ist, wird der Index berechnet, an dem die Suche im Array nach `searchElement` beginnen soll. Wenn diese Berechnung einen Index kleiner als 0 ergibt, wird das ganze Array durchsucht.

```js
// Arraylänge ist 3
// fromIndex ist -100
// Der berechnete Index ist 3 + (-100) = -97

var arr = ['a', 'b', 'c'];

arr.includes('a', -100); // true
arr.includes('b', -100); // true
arr.includes('c', -100); // true
```

### Einsatz von `includes()` als generische Methode

Die `includes()`-Methode is absichtlich generisch. Die `this`-Referenz muss nicht auf ein Array-Objekt zeigen, so dass auch andere Objekte (z. B. Array-ähnliche Objekte) genutzt werden können. Das Beispiel zeigt, wie `includes()` auf den Parametern ([arguments](/de/docs/Web/JavaScript/Reference/Functions/arguments)) einer Funktion aufgerufen wird.

```js
(function() {
  console.log([].includes.call(arguments, 'a')); // true
  console.log([].includes.call(arguments, 'd')); // false
})('a', 'b', 'c')
```

## Polyfill

```js
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function(searchElement, fromIndex) {

      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      // 1. Let O be ? ToObject(this value).
      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If len is 0, return false.
      if (len === 0) {
        return false;
      }

      // 4. Let n be ? ToInteger(fromIndex).
      //    (If fromIndex is undefined, this step produces the value 0.)
      var n = fromIndex | 0;

      // 5. If n ≥ 0, then
      //  a. Let k be n.
      // 6. Else n < 0,
      //  a. Let k be len + n.
      //  b. If k < 0, let k be 0.
      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      function sameValueZero(x, y) {
        return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
      }

      // 7. Repeat, while k < len
      while (k < len) {
        // a. Let elementK be the result of ? Get(O, ! ToString(k)).
        // b. If SameValueZero(searchElement, elementK) is true, return true.
        if (sameValueZero(o[k], searchElement)) {
          return true;
        }
        // c. Increase k by 1.
        k++;
      }

      // 8. Return false
      return false;
    }
  });
}
```

Sollten Sie wirklich veraltete JavaScript-Engines unterstützen müssen, die ihrerseits {{jsxref("Object.defineProperty", "Object.defineProperty")}} nicht unterstützen, ist es ratsam, die `Array.prototype`-Methode nicht mit dem Polyfill zu erweitern, da man diese nicht unabzählbar (non-enumerable) machen kann.

## Spezifikationen

| Spezifikation                                                                                                    | Status                       | Kommentar            |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES7', '#sec-array.prototype.includes', 'Array.prototype.includes')}}     | {{Spec2('ES7')}}         | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-array.prototype.includes', 'Array.prototype.includes')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Array.includes")}}

## Siehe auch

- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
