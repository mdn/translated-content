---
title: Array.prototype.fill()
slug: Web/JavaScript/Reference/Global_Objects/Array/fill
tags:
  - Array
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/fill
---
{{JSRef}}

Die **`fill()`** Methode befüllt ein Array mit einem statischen Wert von einem Startindex bis zu einem Endindex. Der Endindex wird nicht mit eingeschlossen.

{{EmbedInteractiveExample("pages/js/array-fill.html")}}

## Syntax

    arr.fill(value[, start[, end]])

### Parameter

- `value`
  - : Wert, mit dem ein Array gefüllt werden soll.
- `start` {{optional_inline}}
  - : Startindex, Standardwert ist 0.
- `end` {{optional_inline}}
  - : Endindex, Standardwert ist `this.length`.

### Rückgabewert

Das geänderte Array.

## Beschreibung

Die **`fill`** Methode nimmt bis zu drei Argumente entgegen: `value`, `start` und `end`. Die Argumente `start` und `end` sind optional und haben als Standardwert 0 und `length` des `this` Objektes.

Wenn `start` negativ ist, wird stattdessen `length+start` benutzt, wobei `length` die Länge des Arrays ist. Wenn `end` negativ ist, wird stattdessen `length+end` benutzt.

Die **`fill`** Funktion ist absichtlich generisch. Es ist nicht nötig, dass der `this` Wert ein Array Objekt ist.

Die **`fill`** Methode ist eine verändernde Methode. Sie verändert das `this` Objekt selbst und gibt dieses zurück. Sie erstellt keine Kopie des Objektes.

Wenn der **`fill`** Methode ein Objekt übergeben wird, wird das Objekt kopiert und die Referenz der Kopie wird im Array eingesetzt.

## Beispiele

```js
[1, 2, 3].fill(4);               // [4, 4, 4]
[1, 2, 3].fill(4, 1);            // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2);         // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1);         // [1, 2, 3]
[1, 2, 3].fill(4, 3, 3);         // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2);       // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN);     // [1, 2, 3]
[1, 2, 3].fill(4, 3, 5);         // [1, 2, 3]
Array(3).fill(4);                // [4, 4, 4]
[].fill.call({ length: 3 }, 4);  // {0: 4, 1: 4, 2: 4, length: 3}

// Objects by reference.
var arr = Array(3).fill({}) // [{}, {}, {}];
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
```

## Polyfill

```js
if (!Array.prototype.fill) {
  Object.defineProperty(Array.prototype, 'fill', {
    value: function(value) {

      // Steps 1-2.
      if (this == null) {
        throw new TypeError('this is null or not defined');
      }

      var O = Object(this);

      // Steps 3-5.
      var len = O.length >>> 0;

      // Steps 6-7.
      var start = arguments[1];
      var relativeStart = start >> 0;

      // Step 8.
      var k = relativeStart < 0 ?
        Math.max(len + relativeStart, 0) :
        Math.min(relativeStart, len);

      // Steps 9-10.
      var end = arguments[2];
      var relativeEnd = end === undefined ?
        len : end >> 0;

      // Step 11.
      var final = relativeEnd < 0 ?
        Math.max(len + relativeEnd, 0) :
        Math.min(relativeEnd, len);

      // Step 12.
      while (k < final) {
        O[k] = value;
        k++;
      }

      // Step 13.
      return O;
    }
  });
}
```

Wenn es wirklich notwendig ist veraltete JavaScript-Umgebungen zu unterstützen, die [`Object.defineProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) nicht unterstützen, ist es meistens besser Methoden von `Array.prototype` nicht mit einem Polyfill zu unterstützen, weil sie nicht als nicht-aufzählbar eingestellt werden können.

## Spezifikationen

| Spezifikation                                                                                        | Status                       | Kommentar            |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-array.prototype.fill', 'Array.prototype.fill')}} | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-array.prototype.fill', 'Array.prototype.fill')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Array.fill")}}

## Siehe auch

- {{jsxref("Array")}}
- {{jsxref("TypedArray.prototype.fill()")}}
