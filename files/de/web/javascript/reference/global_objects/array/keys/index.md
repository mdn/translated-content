---
title: Array.prototype.keys()
slug: Web/JavaScript/Reference/Global_Objects/Array/keys
tags:
  - Array
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Array/keys
---
{{JSRef}}

Die **`keys()`** Methode gibt ein neues **`Array Iterator`** Objekt zurück, welches den Schlüssel für jeden Index des Arrays enthält.

{{EmbedInteractiveExample("pages/js/array-keys.html")}}

## Syntax

    arr.keys()

### Rückgabewert

Ein neues {{jsxref("Array")}} iterator-Objekt.

## Beispiele

### Der Key Iterator ignoriert keine Lücken

```js
var arr = ['a', , 'c'];
var sparseKeys = Object.keys(arr);
var denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys);  // [0, 1, 2]
```

## Spezifikationen

| Spezifikation                                                                                        | Status                       | Kommentar            |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-array.prototype.keys', 'Array.prototype.keys')}} | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-array.prototype.keys', 'Array.prototype.keys')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Array.keys")}}

## Siehe auch

- {{jsxref("Array.prototype.values()")}}
- {{jsxref("Array.prototype.entries()")}}
- [Iteration protocols](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
