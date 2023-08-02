---
title: Math.max()
slug: Web/JavaScript/Reference/Global_Objects/Math/max
---

{{JSRef("Global_Objects", "Math")}}

## Sumário

A função **`Math.max()`** retorna o maior de um ou mais números.

## Sintaxe

```
Math.max([valor1[,valor2, ...]])
```

### Parâmetros

- `valor1, valor2, ...`
  - : Números.

### Valor de retorno

O maior dos números passados como argumentos. Se pelo menos um dos argumentos não puder ser convertido para um número {{jsxref("NaN")}} é retornado.

## Descrição

Por `max` ser um método estático em `Math`, você sempre irá usá-lo da seguinte maneira `Math.max()`, e não como um método da classe `Math` que você tenha instanciado.

Se nenhum argumento for passado o resultado sempre será - {{jsxref("Global_Objects/Infinity", "Infinity")}}.

Se um dos argumentos não puder ser convertido em um número, o resultado será {{jsxref("Global_Objects/NaN", "NaN")}}.

## Exemplos

### Usando `Math.max`

```js
Math.max(10, 20); //  20
Math.max(-10, -20); // -10
Math.max(-10, 20); //  20
```

### Retornando o maior elemento de um array

{{jsxref("Array.prototype.reduce", "Array.reduce()")}} pode ser usada para encontrar o maior elemento em um vetor numérico, comparando cada valor:

```js
var arr = [1, 2, 3];
var max = arr.reduce(function (a, b) {
  return Math.max(a, b);
}, -Infinity);
```

A função a seguir utiliza {{jsxref("Function.prototype.apply()")}} para encontrar o elemento de maior valor dentro do array. `getMaxOfArray([1,2,3])` é equivalente a `Math.max(1, 2, 3)`, mas você pode usar `getMaxOfArray` em arrays construídos programaticamente e o ideal é utilizá-la somente em arrays com relativamente poucos elementos.

```js
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
```

O novo [operador spread](/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator) é um modo curto de se escrever a solução com `apply` para retornar o maior valor de um array.

```js
var arr = [1, 2, 3];
var max = Math.max(...arr);
// max: 3
```

Entretanto, tanto spread(`...`) quanto `apply` irão ou falhar ou retornar o resultado errado caso o array tenha muitos elementos, porque eles tentam passar o array de elementos como parâmetros de funções. Veja [usando apply e funções embutidas](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/apply#Usando_apply_e_funções_embutidas) para mais detalhes. A solução com `reduce` não apresenta esse problema.

## Especificações

| Especificação                                         | Status             | Comentário          |
| ----------------------------------------------------- | ------------------ | ------------------- |
| ECMAScript 1st Edition. Implemented in JavaScript 1.0 | Standard           | Initial definition. |
| {{SpecName('ES6', '#sec-15.8.2.11', 'Math.max')}}     | {{Spec2('ES5.1')}} |                     |
| {{SpecName('ES6', '#sec-math.max', 'Math.max')}}      | {{Spec2('ES6')}}   |                     |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Math.max")}}

## Veja também

- O objeto {{jsxref("Global_Objects/Math", "Math")}} pertence a.
- {{jsxref("Math.min()")}}
