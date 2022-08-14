---
title: Array.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Array/values
tags:
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Metodă
  - Prototype
  - Tablica
translation_of: Web/JavaScript/Reference/Global_Objects/Array/values
original_slug: Web/JavaScript/Referencje/Obiekty/Array/values
---
{{JSRef}}

Metoda **`values()`** zwraca nowy obiekt **`Array Iterator`** , który zawiera wartości dla każdego indeksu w tablicy.

```js
var a = ['w', 'y', 'k', 'o', 'p'];
var iterator = a.values();

console.log(iterator.next().value); // w
console.log(iterator.next().value); // y
console.log(iterator.next().value); // k
console.log(iterator.next().value); // o
console.log(iterator.next().value); // p
```

## Składnia

    arr.values()

### Zwracana wartość

Nowy obiekt {{jsxref("Array")}} iterator.

## Przykłady

### Iteracja używająca pętli [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

```js
var arr = ['w', 'y', 'k', 'o', 'p'];
var iterator = arr.values();

for (let letter of iterator) {
  console.log(letter);
}
```

## Specyfikacja

| Specyfikacja                                                                                                 | Status                       | Komentarz           |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ------------------- |
| {{SpecName('ES2015', '#sec-array.prototype.values', 'Array.prototype.values')}}     | {{Spec2('ES2015')}}     | Initial definition. |
| {{SpecName('ESDraft', '#sec-array.prototype.values', 'Array.prototype.values')}} | {{Spec2('ESDraft')}} |                     |

## Kompatybilność przeglądarek

{{Compat("javascript.builtins.Array.values")}}

## Zobacz też

- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
