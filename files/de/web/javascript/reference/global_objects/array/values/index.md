---
title: Array.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Array/values
tags:
  - Array
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Array/values
---
{{JSRef}}

Die **`values()`** Methode gibt ein neues **`Iterator`** Objekt des Arrays zurück, welches die Werte für jeden Eintrag im Array enthält.

{{EmbedInteractiveExample("pages/js/array-values.html")}}

```js
var a = ['w', 'y', 'k', 'o', 'p'];
var iterator = a.values();

console.log(iterator.next().value); // w
console.log(iterator.next().value); // y
console.log(iterator.next().value); // k
console.log(iterator.next().value); // o
console.log(iterator.next().value); // p
```

## Syntax

    arr.values()

### Rückgabewert

Ein neues {{jsxref("Iterator")}} Objekt von dem Array.

## Beispiele

### Benutzung der [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) loop

```js
var arr = ['w', 'y', 'k', 'o', 'p'];
var iterator = arr.values();

for (let letter of iterator) {
  console.log(letter);
}
```

## Spezifikationen

| Spezifikation                                                                                                | Status                       | Kommentar            |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-array.prototype.values', 'Array.prototype.values')}}     | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-array.prototype.values', 'Array.prototype.values')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Array.values")}}

## Siehe auch

- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
