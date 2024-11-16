---
title: Array.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator
original_slug: Web/JavaScript/Reference/Global_Objects/Array/@@iterator
---

{{JSRef}}

O valor inicial da propriedade **`@@iterator`** é o mesmo objeto função que o valor inicial da propriedade {{jsxref("Array.prototype.values()", "values()")}}.

## Sintaxe

```
arr[Symbol.iterator]()
```

## Exemplos

### Iteração usando laço `for...of`

```js
var arr = ["w", "y", "k", "o", "p"];
// seu navegador deve suportar laço for..of
// e variáveis de escopo let em laços for
for (let letter of arr) {
  console.log(letter);
}
```

### Iteração alternativa

```js
var arr = ["w", "y", "k", "o", "p"];
var eArr = arr[Symbol.iterator]();
console.log(eArr.next().value); // w
console.log(eArr.next().value); // y
console.log(eArr.next().value); // k
console.log(eArr.next().value); // o
console.log(eArr.next().value); // p
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.values()")}}
