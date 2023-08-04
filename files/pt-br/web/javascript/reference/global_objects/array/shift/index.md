---
title: Array.prototype.shift()
slug: Web/JavaScript/Reference/Global_Objects/Array/shift
---

{{JSRef("Global_Objects", "Array")}}

## Sumário

O método **`shift()`** remove o **primeiro** elemento de um array e retorna esse elemento. Este método muda o tamanho do array.

{{EmbedInteractiveExample("pages/js/array-shift.html")}}

## Sintaxe

```
arr.shift()
```

### Valor de retorno

O elemento removido do array; {{jsxref("undefined")}} se o array estiver vazio.

## Descrição

O método shift remove o elemento de índice zero, diminui em 1 os indices dos demais valores e retorna o valor removido. Se a propriedade {{jsxref("Array.length", "length")}} for 0, então {{jsxref("undefined")}} é retornado.

`shift` é intencionalmente genérico; esse método pode ser {{jsxref("Function.call", "chamado", "", 1)}} ou {{jsxref("Function.apply", "aplicado", "", 1)}} para objetos parecidos com arrays. Objetos que não contém a propriedade `length` representando o tamanho de uma série consecutiva, começando em zero, podem não se comportar de maneira correta.

## Exemplos

### Removendo um elemento de array

O código a seguir mostra o array `minhaLista` antes e depois de remover seu primeiro elemento. Ele também mostra o elemento removido.

```js
var minhaLista = ["anjo", "casa", "mandarim", "medico"];

console.log("minhaLista antes: " + minhaLista);
// minhaList antes: ['anjo', 'casa', 'mandarim', 'medico']
var shifted = minhaLista.shift();

console.log("minhaLista depois: " + minhaLista);
// minhaList depois: ['casa', 'mandarim', 'medico']
console.log("Elemento removido: " + shifted);
// Elemento removido: anjo
```

### Usando o método shift() dentro de um loop de while

O médodo `shift()` é frequentemente usado como condição dentro de um loop de while. No exemplo a seguir, cada iteração removerá o elemento seguinte do array, até que ele esteja vazio:

```js
var nomes = ["André", "Eduardo", "Paulo", "Cris", "João"];
while ((i = nomes.shift()) !== undefined) {
  console.log(i);
}
// André Eduardo Paulo Cris João
```

## Especificações

| Especificação                                                              | Estado             | Comentário                                             |
| -------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------ |
| ECMAScript 3rd Edition                                                     | Standard           | Implementação inicial. Implementado no JavaScript 1.2. |
| {{SpecName('ES5.1', '#sec-15.4.4.9', 'Array.prototype.shift')}}            | {{Spec2('ES5.1')}} |                                                        |
| {{SpecName('ES6', '#sec-array.prototype.shift', 'Array.prototype.shift')}} | {{Spec2('ES6')}}   |                                                        |

## Compatibilidade de Browser

{{Compat("javascript.builtins.Array.shift")}}

## Veja também

- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
