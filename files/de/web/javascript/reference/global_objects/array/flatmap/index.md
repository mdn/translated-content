---
title: Array.prototype.flatMap()
slug: Web/JavaScript/Reference/Global_Objects/Array/flatMap
tags:
  - Array
  - Experimental
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/flatMap
---
{{JSRef}} {{SeeCompatTable}}

Die **`flatMap()`** Methode bildet jedes Element über eine Funktion ab und flacht das Ergebnis in ein Array ab. Sie ist identisch zu einem [map](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) gefolgt von einem [flat](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) der Tiefe 1, aber `flatMap` ist oft nützlich und beide in einer Methode zusammenführen ist etwas effizienter.

{{EmbedInteractiveExample("pages/js/array-flatmap.html")}}

## Syntax

    var new_array = arr.flatMap(function callback(currentValue[, index[, array]]) {
        // return element for new_array
    }[, thisArg])

### Parameter

- `callback`

  - : Funktion, die ein Element für das neue Array erzeugt, welche drei Argumente hat:\*

        `currentValue`
        *   : Das aktuelle Element, das im Array verarbeitet wird.

    - `index`{{optional_inline}}
      - : Der Index des aktuell zu verarbeitende Elements in dem Array.
    - `array`{{optional_inline}}
      - : Das Array, auf dem `flatMap` aufgerufen wurde.

- `thisArg`{{optional_inline}}
  - : Wert, der bei der Ausführung von `callback` für `this` genutzt wird.

### Rückgabewert

Ein neues Array mit jedem Element, dass aus dem Resultat der callback Funktion hervorgeht und auf die Tiefe 1 abgeflacht wurde.

## Beschreibung

Siehe auf der Seite {{jsxref("Array.prototype.map()")}} für eine detaillierte Beschreibung der `callback` Funktion. Die `flatMap` Methode ist identisch zu [`map`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) gefolgt von [`flat`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) mit der Tiefe 1.

## Beispiele

### `map` und `flatMap`

```js
var arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// only one level is flattened
arr1.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]
```

## Alternative

### `reduce` und `concat`

```js
var arr1 = [1, 2, 3, 4];

arr1.flatMap(x => [x * 2]);
// ist equivalent zu
arr1.reduce((acc, x) => acc.concat([x * 2]), []);
// [2, 4, 6, 8]

//=> [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## Spezifikationen

| Spezifikation                                                                                              | Status        | Kommentar |
| ---------------------------------------------------------------------------------------------------------- | ------------- | --------- |
| [`Array.prototype.flatMap` proposal](https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap) | Candidate (3) |           |

## Browserkompatibilität

{{Compat("javascript.builtins.Array.flatMap")}}

## Siehe auch

- {{jsxref("Array.prototype.flat()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Array.prototype.concat()")}}
