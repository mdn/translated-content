---
title: Array.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Array/values
---

{{JSRef}}

O método **`values()`** retorna um novo objeto de **`Array Iterator`** que contém os valores para cada índice no array.

## Sintaxe

```
arr.values()
```

## Exemplos

### Iteração usando `for...of` loop

```js
var arr = ["w", "y", "k", "o", "p"];
var eArr = arr.values();
// seu navegador deve suportar for..of loop
// e deixar variáveis let-scoped no for loops
for (let letter of eArr) {
  console.log(letter);
}
```

### Iteração alternativa

```js
var arr = ["w", "y", "k", "o", "p"];
var eArr = arr.values();
console.log(eArr.next().value); // w
console.log(eArr.next().value); // y
console.log(eArr.next().value); // k
console.log(eArr.next().value); // o
console.log(eArr.next().value); // p
```

## Especificações

| Especificação                                                                | Status           | Comentário         |
| ---------------------------------------------------------------------------- | ---------------- | ------------------ |
| {{SpecName('ES6', '#sec-array.prototype.values', 'Array.prototype.values')}} | {{Spec2('ES6')}} | Definição inicial. |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Array.values")}}

## Notas específicas do Firefox

- Devido a um [problema de compatibilidade](https://bugzilla.mozilla.org/show_bug.cgi?id=875433), `Array.prototype.values()` foi removido do SpiderMonkey por enquanto.

## Ver também

- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
