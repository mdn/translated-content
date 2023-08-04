---
title: Array.prototype.reduceRight()
slug: Web/JavaScript/Reference/Global_Objects/Array/reduceRight
---

{{JSRef("Global_Objects", "Array")}}

## Sumário

O método **`reduceRight()`** aplica à uma função um acumulador e cada valor do array (da direita para esquerda) é reduzido para um valor único.

## Sintaxe

```
arr.reduceRight(callback[, initialValue])
```

### Parâmetros

- `callback`

  - : Função para executar em cada valor do array, recebendo quatro argumentos:

    - `previousValue`
      - : O valor anteriormente retornado na ultima invocação do callback, ou o `initialValue`, se este for o recebido. (Ver abaixo.)
    - `currentValue`
      - : O valor atualmente sendo processado no array.
    - `index`
      - : O índice do valor atualmente sendo processado no array.
    - `array`
      - : O array que foi chamado para ser reduzido.

- `initialValue`
  - : Opcional. Objeto para ser usado como argumento inicial da primeria chamada do callback.

## Descrição

`reduceRight` executa a função callback uma vez para cada elemento presente no array, excluindo buracos no array, recebendo quatro argumentos: o valor inicial (ou o valor da chamada anterior do callback), o valor do elemento atual, o índice do elemento atual, e o array onde a operação está acontecendo.

A chamada ao callback reduceRight irá parecer com uma chamada assim:

```js
array.reduceRight(function (previousValue, currentValue, index, array) {
  // ...
});
```

A primeira vez que a função é chamada, o `previousValue` e o `currentValue` podem ser um de dois valores. Se um `initialValue` foi recebido na chamada do `reduceRight`, então o `previousValue` sera iqual ao `initialValue` e o `currentValue` será igual ao ultimo valor no array. Se o `initialValue` não foi recebido, então o `previousValue` será igual ao ultimo valor no array e o `currentValue` será igual ao penultimo valor no array.

Se o array é vazio e nenhum `initialValue` foi recebido, {{jsxref("Global_Objects/TypeError", "TypeError")}} será lançado. Se o array somente tem um elemento (independentemente da posição dele) e o `initialValue` não foi recebido, ou se o `initialValue` foi recebido mas o array é vazio, o valor em si será retornado sem chamar o `callback`.

Alguns exemplos de execuções da função e como será parecida a chamada:

```js
[0, 1, 2, 3, 4].reduceRight(
  function (previousValue, currentValue, index, array) {
    return previousValue + currentValue;
  },
);
```

O callback será invocado quatro vezes, com os argumentos e valores de retornos em cada chamada será como o seguinte:

|                  | `previousValue` | `currentValue` | `index` | `array`           | return value |
| ---------------- | --------------- | -------------- | ------- | ----------------- | ------------ |
| Primeira chamada | `4`             | `3`            | `3`     | `[0, 1, 2, 3, 4]` | `7`          |
| Segunda chamada  | `7`             | `2`            | `2`     | `[0, 1, 2, 3, 4]` | `9`          |
| Terceira chamada | `9`             | `1`            | `1`     | `[0, 1, 2, 3, 4]` | `10`         |
| Quarta chamada   | `10`            | `0`            | `0`     | `[0, 1, 2, 3, 4]` | `10`         |

O valor retornado pelo `reduceRight` será o valor retornado pela ultima chamada ao callback(`10`).

E se você também passou um `initialValue`, o resultado irá ser como a seguir:

```js
[0, 1, 2, 3, 4].reduceRight(function (
  previousValue,
  currentValue,
  index,
  array,
) {
  return previousValue + currentValue;
}, 10);
```

|                  | `previousValue` | `currentValue` | `index` | `array`           | return value |
| ---------------- | --------------- | -------------- | ------- | ----------------- | ------------ |
| Primeira chamada | `10`            | `4`            | `4`     | `[0, 1, 2, 3, 4]` | `14`         |
| Segunda chamada  | `14`            | `3`            | `3`     | `[0, 1, 2, 3, 4]` | `17`         |
| Terceira chamada | `17`            | `2`            | `2`     | `[0, 1, 2, 3, 4]` | `19`         |
| Quarta chamada   | `19`            | `1`            | `1`     | `[0, 1, 2, 3, 4]` | `20`         |
| Quinta chamada   | `20`            | `0`            | `0`     | `[0, 1, 2, 3, 4]` | `20`         |

O valor retornado pelo `reduceRight` desta vez será, obviamente, `20`.

## Exemplos

### Exemplo: Somando todos os valores presente em um array

```js
var total = [0, 1, 2, 3].reduceRight(function (a, b) {
  return a + b;
});
// total == 6
```

### Exemplo: Juntando um array de arrays

```js
var flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduceRight(function (a, b) {
  return a.concat(b);
}, []);
// flattened is [4, 5, 2, 3, 0, 1]
```

## Polyfill

`reduceRight` foi adicionado no padrão ECMA-262 em sua Quinta edição; sendo assim pode não estar presente em todas as implementações deste padrão. Você pode contornar isso adicionando o seguinte codigo ao inicio do seu script, adicionando a possibilidade de uso do `reduceRight` em implementações que não o suportam nativamente.

```js
// Production steps of ECMA-262, Edition 5, 15.4.4.22
// Reference: http://es5.github.io/#x15.4.4.22
if ("function" !== typeof Array.prototype.reduceRight) {
  Array.prototype.reduceRight = function (callback /*, initialValue*/) {
    "use strict";
    if (null === this || "undefined" === typeof this) {
      throw new TypeError("Array.prototype.reduce called on null or undefined");
    }
    if ("function" !== typeof callback) {
      throw new TypeError(callback + " is not a function");
    }
    var t = Object(this),
      len = t.length >>> 0,
      k = len - 1,
      value;
    if (arguments.length >= 2) {
      value = arguments[1];
    } else {
      while (k >= 0 && !(k in t)) {
        k--;
      }
      if (k < 0) {
        throw new TypeError("Reduce of empty array with no initial value");
      }
      value = t[k--];
    }
    for (; k >= 0; k--) {
      if (k in t) {
        value = callback(value, t[k], k, t);
      }
    }
    return value;
  };
}
```

## Especificações

| Especificação                                                                          | Status             | Comentário                                         |
| -------------------------------------------------------------------------------------- | ------------------ | -------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.4.4.22', 'Array.prototype.reduceRight')}}                 | {{Spec2('ES5.1')}} | Definição inicial. Implementado em JavaScript 1.8. |
| {{SpecName('ES6', '#sec-array.prototype.reduceright', 'Array.prototype.reduceRight')}} | {{Spec2('ES6')}}   |                                                    |

## Compatibilidade com os navegadores

{{Compat("javascript.builtins.Array.reduceRight")}}

## Ver também

- {{jsxref("Array.prototype.reduce()")}}
