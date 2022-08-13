---
title: Array.prototype.flat()
slug: Web/JavaScript/Reference/Global_Objects/Array/flat
tags:
  - Array
  - Experimental
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/flat
---
{{JSRef}} {{SeeCompatTable}}

Die **`flat()`** Methode erstellt rekursiv ein neues Array mit allen Elementen von Unterarrays bis zu einer spezifizierten Tiefe.

{{EmbedInteractiveExample("pages/js/array-flatten.html")}}

## Syntax

    var newArray = arr.flat(depth);

### Parameter

- `depth` {{optional_inline}}
  - : Das Tiefenlevel, welches angibt, bis zu welcher Tiefe die Arraystruktur abgeflacht werden soll. Der Standardwert ist 1.

### Rückgabewert

Ein neues Array, welches die Elemente der Unterarrays enthält.

## Beispiele

### Abflachen von geschachtelten Arrays

```js
var arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]
```

### Abflachen und Löcher in Arrays

Die `flat` Methode entfernt leere Plätze in Arrays:

```js
var arr4 = [1, 2, , 4, 5];
arr4.flat();
// [1, 2, 4, 5]
```

## Alternative

### `reduce` und `concat`

    var arr1 = [1, 2, [3, 4]];
    arr1.flat();

    // Um ein Array um eine Ebene zu glätten.
    arr1.reduce((acc, val) => acc.concat(val), []);
    // [1, 2, 3, 4]

    // Um mehrere Ebenen zu glätten muss reduce und concat rekursiv eingesetzt werden.

    var arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];

    function flattenDeep(arr1) {
       return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
    }
    flattenDeep(arr1);

    // [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]

## Spezifikationen

| Spezifikation                                                                                        | Status        | Kommentar |
| ---------------------------------------------------------------------------------------------------- | ------------- | --------- |
| [`Array.prototype.flat` proposal](https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flat) | Candidate (3) |           |

## Browserkompatibilität

{{Compat("javascript.builtins.Array.flat")}}

## Siehe auch

- {{jsxref("Array.prototype.flatMap()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Array.prototype.concat()")}}
