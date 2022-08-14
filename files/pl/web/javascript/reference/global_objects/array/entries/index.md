---
title: Array.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Array/entries
translation_of: Web/JavaScript/Reference/Global_Objects/Array/entries
original_slug: Web/JavaScript/Referencje/Obiekty/Array/entries
---
{{JSRef}}

Metoda **`entries()`** zwraca obiekt **`Iteratora`** który zawiera parę klucz/wartość dla każdej pozycji w tablicy.

{{EmbedInteractiveExample("pages/js/array-entries.html")}}

## Składnia

    a.entries()

### Zwracana wartość

Nowy iterator {{jsxref("Tablicy")}}.

## Przykłady

### Użycie w pętli [for…of](/pl/docs/Web/JavaScript/Reference/Statements/for...of)

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

## Specyfikacja

| Specyfikacja                                                                                                 | Status                       | Komentarz           |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ------------------- |
| {{SpecName('ES2015', '#sec-array.prototype.entries', 'Array.prototype.entries')}} | {{Spec2('ES2015')}}     | Initial definition. |
| {{SpecName('ESDraft', '#sec-array.prototype.entries', 'Array.prototype.entries')}} | {{Spec2('ESDraft')}} |                     |

## Kompatybilność w przeglądarkach

{{Compat("javascript.builtins.Array.entries")}}

## Zobacz również

- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.values()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- [for...of](/pl/docs/Web/JavaScript/Reference/Statements/for...of)
- [Iteration protocols](/pl/docs/Web/JavaScript/Reference/Iteration_protocols)
