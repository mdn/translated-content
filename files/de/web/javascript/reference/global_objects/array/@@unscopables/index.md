---
title: Array.prototype[@@unscopables]
slug: Web/JavaScript/Reference/Global_Objects/Array/@@unscopables
tags:
  - Array
  - ECMAScript 2015
  - JavaScript
  - Property
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Array/@@unscopables
---
{{JSRef}}

Die **`@@unscopable`** Symbol Eigenschaft enthält Namen von Eigenschaften, welche vor der ES2015 Version nicht im ECMAScript Standard waren. Diese Eigenschaften werden bei [`with`](/en-US/docs/Web/JavaScript/Reference/Statements/with) Statement Bindungen ignoriert.

## Syntax

    arr[Symbol.unscopables]

## Beschreibung

Der Standard Array Eigenschaften, die von den `with` Bindungen ausgenommen werden, sind: `copyWithin`, `entries`, `fill`, `find`, `findIndex`, `includes`, `keys`, und `values`.

Siehe {{jsxref("Symbol.unscopables")}} für das setzten von `unscopables` für eigene Objekte

{{js_property_attributes(0,0,1)}}

## Beispiele

Der Folgende Quelltext funktioniert in ES5 und niedriger. Jedoch wurde in ECMAScript 2015 und Später die {{jsxref("Array.prototype.keys()")}} eingeführt. Das bedeutet, dass in `with` Umgebungen "keys" jetzt eine Methode und keine Variable ist. Hier kommt die eingebaute `@@unscopables` `Array.prototype[@@unscopables]` Symboleigenschaft ins Spiel und verhindert, dass einige der Array Methoden in einer `with` Anweisung gescoped werden.

```js
var keys = [];

with (Array.prototype) {
  keys.push('something');
}

Object.keys(Array.prototype[Symbol.unscopables]);
// ["copyWithin", "entries", "fill", "find", "findIndex",
//  "includes", "keys", "values"]
```

## Spezifikationen

| Spezifikation                                                                                                                    | Status                       | Komment              |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-array.prototype-@@unscopables', 'Array.prototype[@@unscopables]')}}     | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-array.prototype-@@unscopables', 'Array.prototype[@@unscopables]')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Array.@@unscopables")}}

## Siehe auch

- {{jsxref("Symbol.unscopables")}}
