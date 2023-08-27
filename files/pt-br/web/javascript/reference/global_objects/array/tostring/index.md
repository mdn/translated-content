---
title: Array.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toString
---

{{JSRef}}

O método **`toString()`** retorna uma string representando um array específico e seus elementos.

## Sintaxe

```
arr.toString()
```

### Parâmetros

Nenhum.

## Descrição

O objeto {{jsxref("Array")}} substitui o método toString() de {{jsxref("Object")}}. Para objetos do tipo Array, o método toString() concatena todos os valores em apenas uma string. Segue exemplo abaixo, de como ele se comporta.

```js
var monthNames = ["Jan", "Feb", "Mar", "Apr"];
var myVar = monthNames.toString(); // atribui 'Jan,Feb,Mar,Apr' para myVar.
```

JavaScript chama o método toString automaticamente quando um Array é para ser representado como um valor de texto ou quando um Array é designado em uma concatenação.

### Semântica ECMAScript 5

Implementado no JavaScript 1.8.5 (Firefox 4), e compatível com a 5ª versão do ECMAScript, a função toString() é genérica e pode ser usada em qualquer Objeto. Se o objeto tem um método join(), ele será chamado e esse valor será devolvido. Do contrário, {{jsxref("Object.prototype.toString()")}} será chamado, e o valor será retornado.

## Especificações

| Especificação                                                                    | Status             | Comentários                                        |
| -------------------------------------------------------------------------------- | ------------------ | -------------------------------------------------- |
| {{SpecName('ES1')}}                                                              | {{Spec2('ES1')}}   | Definição inicial. Implementado no JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.4.4.2', 'Array.prototype.toString')}}               | {{Spec2('ES5.1')}} |                                                    |
| {{SpecName('ES6', '#sec-array.prototype.tostring', 'Array.prototype.toString')}} | {{Spec2('ES6')}}   |                                                    |

## Browsers compatíveis

{{Compat("javascript.builtins.Array.toString")}}

## Veja também

- {{jsxref("Object.prototype.toSource()")}}
