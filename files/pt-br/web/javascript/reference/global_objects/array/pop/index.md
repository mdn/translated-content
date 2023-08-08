---
title: Array.prototype.pop()
slug: Web/JavaScript/Reference/Global_Objects/Array/pop
---

{{JSRef("Global_Objects", "Array")}}

## Resumo

O método **`pop()`** remove o **último** elemento de um array e retorna aquele elemento.

## Sintaxe

```
arr.pop()
```

## Descrição

O método `pop` remove o último elemento de um array e retorna aquele valor.

Esse método é intencionalmente genérico. Podendo ser utilizado por {{jsxref("Function.call", "call", "", 1)}} ou {{jsxref("Function.apply", "apply", "", 1)}} em objetos que implementam arrays.

Se você chamar `pop()` em um array vazio, ele retorna o valor {{jsxref("Global_Objects/undefined", "undefined")}}.

## Exemplos

### Exemplo: Removendo o último elemento de um array

O código seguinte cria o array `meuPeixe` contendo quatro elementos e então remove seu último elemento.

```js
var meuPeixe = ["acara-bandeira", "palhaco", "mandarim", "esturjao"];

console.log(meuPeixe); // ['acara-bandeira', 'palhaco', 'mandarim', 'esturjao']

var meuPeixePop = meuPeixe.pop();

console.log(meuPeixe); // ['acara-bandeira', 'palhaco', 'mandarim' ]

console.log(meuPeixePop); // 'esturjao'
```

## Especificações

| Especificação                                                          | Estado             | Comentário                                         |
| ---------------------------------------------------------------------- | ------------------ | -------------------------------------------------- |
| ECMAScript 3ª Edição                                                   | Padrão             | Definição inicial. Implementado no JavaScript 1.2. |
| {{SpecName('ES5.1', '#sec-15.4.4.6', 'Array.prototype.pop')}}          | {{Spec2('ES5.1')}} |                                                    |
| {{SpecName('ES6', '#sec-array.prototype.pop', 'Array.prototype.pop')}} | {{Spec2('ES6')}}   |                                                    |

## Compatibilidade nos Navegadores

{{Compat("javascript.builtins.Array.pop")}}

## Veja também

- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.unshift()")}}
