---
title: Array.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Array/@@iterator
tags:
  - Array
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/@@iterator
---
{{JSRef}}Der Initialwert der **`@@iterator`** Eigenschaft ist das selbe Funktionsobjekt wie der Initialwert der {{jsxref("Array.prototype.values()", "values()")}} Eigenschaft.

## Syntax

    arr[Symbol.iterator]()

### Rückgabewert

Der Initialwert für den {{jsxref("Array.prototype.values()", "values()")}} **Iterator**. Im Standardfall gibt `arr[Symbol.iterator]` die Funktion von {{jsxref("Array.prototype.values()", "values()")}} zurück.

## Beispiele

### Iterieren mit einer `for...of` Schleife

```js
var arr = ['w', 'y', 'k', 'o', 'p'];
var eArr = arr[Symbol.iterator]();
// your browser must support for..of loop
// and let-scoped variables in for loops
for (let letter of eArr) {
  console.log(letter);
}
```

### Alternative Iteration

```js
var arr = ['w', 'y', 'k', 'o', 'p'];
var eArr = arr[Symbol.iterator]();
console.log(eArr.next().value); // w
console.log(eArr.next().value); // y
console.log(eArr.next().value); // k
console.log(eArr.next().value); // o
console.log(eArr.next().value); // p
```

## Spezifikationen

| Spezifikation                                                                                                            | Status                       | Kommentar            |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-array.prototype-@@iterator', 'Array.prototype[@@iterator]()')}} | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-array.prototype-@@iterator', 'Array.prototype[@@iterator]()')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Array.@@iterator")}}

## Siehe auch

- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.values()")}}
