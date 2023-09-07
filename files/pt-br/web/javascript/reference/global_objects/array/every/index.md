---
title: Array.prototype.every()
slug: Web/JavaScript/Reference/Global_Objects/Array/every
---

{{JSRef}}

O método `every()` testa se todos os elementos do array passam pelo teste implementado pela função fornecida. Este método retorna um valor booleano.

{{EmbedInteractiveExample("pages/js/array-every.html")}}

## Sintaxe

```
arr.every(callback[, thisArg])
```

### Parâmetros

- `callback`

  - : Função que testa cada elemento, recebe três parametros:

    - `currentValue` (obrigatório)
      - : O elemento atual sendo processado na array.
    - `index` (opcional)
      - : O índice do elemento atual sendo processado na array.
    - `array` (opcional)
      - : O array de origem.

- `thisArg`
  - : Opcional. Valor a ser usado como `this` quando o `callback` é executado.

### Valor de retorno

**true** se a função de callback retorna um valor {{Glossary("truthy")}} para cada um dos elementos do array; caso contrário, **false**.

## Descrição

O método `every` executa a função `callback` fornecida uma vez para cada elemento presente no array, até encontrar algum elemento em que a função retorne um valor false (valor que se torna false quando convertido para boolean). Se esse elemento é encontrado, o método `every` imediatamente retorna false. Caso contrário, se a função `callback` retornar true para todos elementos, o método retorna true. A função `callback` é chamada apenas para os elementos do array original que tiverem valores atribuídos; os elementos que tiverem sido removidos ou os que nunca tiveram valores atribuídos não serão considerados.

A função `callback` é chamada com três argumentos: o valor do elemento corrente, o índice do elemento corrente e o array original que está sendo percorrido.

Se o parâmetro `thisArg` foi passado para o método `every`, ele será repassado para a função `callback` no momento da chamada para ser utilizado como o `this`. Caso contrário, o valor `undefined` será repassado para uso como o _`this`_. O valor do `this` a ser repassado para o `callback` é determinado de acordo com as [regras usuais para determinar o this visto por uma função](/pt-BR/docs/Web/JavaScript/Reference/Operators/this).

O método `every`não modifica o array original.

A lista de elementos que serão processados pelo `every` é montada antes da primeira chamada da função `callback`. Se um elemento for acrescentado ao array original após a chamada ao `every` , ele não será visível para o callback. Se os elementos existentes forem modificados, os valores que serão repassados serão os do momento em que o método `every` chamar o `callback`. Elementos removidos não serão considerados.

`every` funciona como o qualificador "for all" em matemática. Particularmente, para um vetor vazio, é retornado true. ([É verdade por vacuidade](https://pt.wikipedia.org/wiki/Verdade_por_vacuidade) que todos os elementos do [conjunto vazio](https://pt.wikipedia.org/wiki/Conjunto_vazio) satisfazem qualquer condição.)

## Exemplos

### Testando tamanho de todos os elementos do vetor

O exemplo a seguir testa se todos elementos no array são maiores que 10.

```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough); // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
```

### Usando arrow functions

[Arrow functions](/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions) fornecem sintaxe mais curta para o mesmo teste.

```js
[12, 5, 8, 130, 44].every((elem) => elem >= 10); // false
[12, 54, 18, 130, 44].every((elem) => elem >= 10); // true
```

## Polyfill

`every` foi adicionado ao padrão ECMA-262 na 5ª edição; como tal, pode não estar presente em outras implementações do padrão. Você pode contornar isso adicionando o seguinte código no começo dos seus scripts, permitindo o uso de every em implementações que não o suportam nativamente. Esse algoritimo é exatamente o mesmo especificado no ECMA-262, 5ª edição, assumindo que `Object` e `TypeError` tem os seus valores originais e que `callbackfn.call` retorna o valor original de {{jsxref("Function.prototype.call")}}

```js
if (!Array.prototype.every) {
  Array.prototype.every = function (callbackfn, thisArg) {
    "use strict";
    var T, k;

    if (this == null) {
      throw new TypeError("this is null or not defined");
    }

    // 1. Let O be the result of calling ToObject passing the this
    //    value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get internal method
    //    of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If IsCallable(callbackfn) is false, throw a TypeError exception.
    if (typeof callbackfn !== "function") {
      throw new TypeError();
    }

    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    if (arguments.length > 1) {
      T = thisArg;
    }

    // 6. Let k be 0.
    k = 0;

    // 7. Repeat, while k < len
    while (k < len) {
      var kValue;

      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal
      //    method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {
        // i. Let kValue be the result of calling the Get internal method
        //    of O with argument Pk.
        kValue = O[k];

        // ii. Let testResult be the result of calling the Call internal method
        //     of callbackfn with T as the this value and argument list
        //     containing kValue, k, and O.
        var testResult = callbackfn.call(T, kValue, k, O);

        // iii. If ToBoolean(testResult) is false, return false.
        if (!testResult) {
          return false;
        }
      }
      k++;
    }
    return true;
  };
}
```

## Especificações

| Especificação                                                              | Status             | Comentário                                         |
| -------------------------------------------------------------------------- | ------------------ | -------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.4.4.16', 'Array.prototype.every')}}           | {{Spec2('ES5.1')}} | Definição inicial. Implementada no JavaScript 1.6. |
| {{SpecName('ES6', '#sec-array.prototype.every', 'Array.prototype.every')}} | {{Spec2('ES6')}}   |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Array.every")}}

## Veja também

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("TypedArray.prototype.every()")}}
