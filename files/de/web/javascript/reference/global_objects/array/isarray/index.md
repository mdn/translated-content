---
title: Array.isArray()
slug: Web/JavaScript/Reference/Global_Objects/Array/isArray
tags:
  - Array
  - ECMAScript5
  - JavaScript
  - Method
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/isArray
---
{{JSRef}}

Die **`Array.isArray()`** Funktion prüft, ob das übergebene Objekt ein {{jsxref("Array")}} ist.

```js
Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
Array.isArray('foobar');   // false
Array.isArray(undefined);  // false
```

## Syntax

    Array.isArray(obj)

### Parameter

- `value`
  - : Der zu überprüfende Wert.

### Rückgabewert

Wenn der Wert ein {{jsxref("Array")}} ist wird `true` zurückgegeben, andernfalls `false`.

## Beschreibung

Wenn der Wert ein {{jsxref("Array")}} ist, wir `true` zurückzugeben, andernfalls `false`.

Eine detailliertere Beschreibung ist im Artikel [Determining with absolute accuracy whether or not a JavaScript object is an array](http://web.mit.edu/jwalden/www/isArray.html) enthalten (auf Englisch). Wird eine {{jsxref("TypedArray")}}-Instanz geprüft, wird immer `false` zurückgegeben.

## Beispiele

### Einsatz von Array.isArray

```js
// die folgenden Ausdrücke geben true zurück
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array('a', 'b', 'c', 'd'));
Array.isArray(new Array(3));
// wenig bekannt: Array.prototype ist selbst ein Array.
Array.isArray(Array.prototype);

// die folgenden Ausdrücke geben alle false zurück
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray("Array");
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32));
Array.isArray({ __proto__ : Array.prototype });
```

### `instanceof` vs `isArray`

Wenn auf eine `Array` Instanz geprüft wird, ist `Array.isArray` besser geeignet als `instanceof`, weil es auch mit `iframes` funktioniert.

```js
var iframe = document.createElement('iframe');
document.body.appendChild(iframe);
xArray = window.frames[window.frames.length-1].Array;
var arr = new xArray(1,2,3); // [1,2,3]

// Richtiges Prüfen für Arrays
Array.isArray(arr);   // true
// Als nicht richtig angesehen, weil es nicht mit iframes funktioniert
arr instanceof Array; // false
```

## Polyfill

Der folgende Code implementiert die Methode, wenn `Array.isArray()` nicht nativ unterstützt wird.

```js
if(!Array.isArray) {
  Array.isArray = function (vArg) {
    return Object.prototype.toString.call(vArg) === "[object Array]";
  };
}
```

## Spezifikationen

| Spezifikation                                                                        |
| ------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-array.isarray', 'Array.isArray')}} |

## Browserkompatibilität

{{Compat("javascript.builtins.Array.isArray")}}

## Siehe auch

- {{jsxref("Array")}}
