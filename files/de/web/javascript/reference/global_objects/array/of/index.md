---
title: Array.of()
slug: Web/JavaScript/Reference/Global_Objects/Array/of
tags:
  - Array
  - ECMAScript 2015
  - JavaScript
  - Method
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/of
---
{{JSRef}}Die **`Array.of()`** Methode erstellt eine neue {{jsxref("Array")}} Instanz aus einer variablen Anzahl an Argumenten, ohne Rücksicht auf die Anzahl oder den Typ der Argumente.Der Unterschied zwischen **`Array.of()`** und dem **`Array`** Konstruktor ist die Behandlung von ganzen Zahlen als Argumente: **`Array.of(7)`** erstellt ein Array mit einem Element, 7. **`Array(7)`** hingegen erstellt ein leeres Array, bei dem die Eigenschaft `length`den Wert `7` gesetzt ist (**Bemerkung:** das impliziert ein Array mit `7` leeren Elementen, bei dem alle Elemente `undefined` sind).

```js
Array.of(7);       // [7]
Array.of(1, 2, 3); // [1, 2, 3]

Array(7);          // [ , , , , , , ]
Array(1, 2, 3);    // [1, 2, 3]
```

## Syntax

    Array.of(element0[, element1[, ...[, elementN]]])

### Parameter

- `elementN`
  - : Elemente, welche sich im neu erzeugten Array befinden.

### Rückgabewert

Eine neue {{jsxref("Array")}} Instanz.

## Beschreibung

Diese Funktion ist Teil des EMCAScript 2015 Standards. Für mehr Information siehe [`Array.of` and `Array.from`](https://gist.github.com/rwaldron/1074126)und [`Array.of` polyfill](https://gist.github.com/rwaldron/3186576).

## Beispiele

```js
Array.of(1);         // [1]
Array.of(1, 2, 3);   // [1, 2, 3]
Array.of(undefined); // [undefined]
```

## Polyfill

Wird der nachfolgende Code vor jedem anderen Code eingefügt, so wird Array.of() verfügbar, falls es nicht nativ implementiert ist.

```js
if (!Array.of) {
  Array.of = function() {
    return Array.prototype.slice.call(arguments);
  };
}
```

## Spezifikationen

| Spezifikation                                                        | Status                       | Kommentar            |
| -------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES6', '#sec-array.of', 'Array.of')}}     | {{Spec2('ES6')}}         | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-array.of', 'Array.of')}} | {{Spec2('ESDraft')}} |                      |

## Browser Kompabilität

{{Compat("javascript.builtins.Array.of")}}

## Siehe auch

- {{jsxref("Array")}}
- {{jsxref("Array.from()")}}
- {{jsxref("TypedArray.of()")}}
