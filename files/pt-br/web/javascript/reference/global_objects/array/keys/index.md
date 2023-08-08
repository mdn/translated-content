---
title: Array.prototype.keys()
slug: Web/JavaScript/Reference/Global_Objects/Array/keys
---

{{JSRef("Global_Objects", "Array")}}

## Sumário

O método **`keys()`** retorna um novo **`Array Iterator`** que contém as chaves para cada _index_ do array.

## Sintaxe

```
arr.keys()
```

## Exemplos

### Exemplo: uso básico

```js
var arr = ["a", "b", "c"];
var iterator = arr.keys();

console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

### Exemplo: keys iterator não ignora lacunas

```js
var arr = ["a", , "c"];
var sparseKeys = Object.keys(arr);
var denseKeys = [...arr.keys()];
console.log(sparseKeys); // [0, 2]
console.log(denseKeys); // [0, 1, 2]
```

## Especificações

| Especificação                                                            | Status           | Comentário         |
| ------------------------------------------------------------------------ | ---------------- | ------------------ |
| {{SpecName('ES6', '#sec-array.prototype.keys', 'Array.prototype.keys')}} | {{Spec2('ES6')}} | Definição inicial. |

## Compatibilidade de Browser

{{Compat("javascript.builtins.Array.keys")}}

## Veja também

- {{jsxref("Array.prototype.values()")}}
- {{jsxref("Array.prototype.entries()")}}
