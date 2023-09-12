---
title: Array.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Array/entries
---

{{JSRef}}

O método **`entries()`** retorna um novo objeto **`Array Iterator`** que contém os pares chave/valor para cada índice no array.

## Sintaxe

```
arr.entries()
```

## Exemplos

```js
var arr = ["a", "b", "c"];
var eArr = arr.entries();

console.log(eArr.next().value); // [0, 'a']
console.log(eArr.next().value); // [1, 'b']
console.log(eArr.next().value); // [2, 'c']
```

### O mesmo que acima, utilizando um loop [for…of](/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of)

```js
var arr = ["a", "b", "c"];
var eArr = arr.entries();

for (let e of eArr) {
  console.log(e);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']
```

## Especificações

| Especificação                                                                      | Status               | Comentário         |
| ---------------------------------------------------------------------------------- | -------------------- | ------------------ |
| {{SpecName('ES6', '#sec-array.prototype.entries', 'Array.prototype.entries')}}     | {{Spec2('ES6')}}     | Definição inicial. |
| {{SpecName('ESDraft', '#sec-array.prototype.entries', 'Array.prototype.entries')}} | {{Spec2('ESDraft')}} |                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Array.entries")}}

## Veja também

- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
