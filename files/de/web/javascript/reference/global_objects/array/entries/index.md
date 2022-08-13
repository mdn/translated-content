---
title: Array.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Array/entries
tags:
  - Array
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Array/entries
---
{{JSRef}}

Die **`entries()`** Methode gibt ein neues **`Array Iterator`** Objekt zurück, das Schlüssel-Wert-Paare für jeden Index im Array enthält.

{{EmbedInteractiveExample("pages/js/array-entries.html")}}

## Syntax

    arr.entries()

### Rückgabewert

Ein neues {{jsxref("Array")}}-iterator Objekt.

## Beispiele

### Einsatz einer [for…of](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleife

```js
var a = ['a', 'b', 'c'];
var iterator = a.entries();

for (let e of iterator) {
  console.log(e);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']
```

## Spezifikationen

| Spezifikation                                                                                                | Status                       | Kommentar            |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES6', '#sec-array.prototype.entries', 'Array.prototype.entries')}}     | {{Spec2('ES6')}}         | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-array.prototype.entries', 'Array.prototype.entries')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Array.entries")}}

## Siehe auch

- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.values()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of)
- [Iteration protocols](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
