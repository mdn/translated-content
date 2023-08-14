---
title: Array.prototype.findIndex()
slug: Web/JavaScript/Reference/Global_Objects/Array/findIndex
---

{{JSRef}}

O método **`findIndex()`** retorna o **índice** no array do primeiro elemento que satisfizer a função de teste provida. Caso contrário, retorna -1, indicando que nenhum elemento passou no teste.

Veja também o método {{jsxref("Array.find", "find()")}}, que retorna o **valor** de um elemento encontrado no array em vez de seu índice.

## Sintaxe

```
arr.findIndex(callback[, thisArg])
```

### Parâmetros

- `callback`

  - : Função para executar em cada valor no array, tomando três argumentos:

    - `element`
      - : O elemento atual sendo processado no array.
    - `index`
      - : O índice do elemento atual sendo processado no array.
    - `array`
      - : O array sobre o qual `findIndex` foi chamado.

- `thisArg`
  - : Opcional. Objeto para usar como `this` na execução do `callback`.

## Descrição

O método `findIndex` executa a função `callback` uma vez para cada elemento presente no array até encontrar um onde o `callback` retorna um valor verdadeiro. Se tal elemento for encontrado, `findIndex` imediatamente retorna o índice deste elemento. Caso contrário, `findIndex` retorna -1. `callback` é invocado apenas para índices no array que têm valores atribuídos; nunca é invocado para índices que foram deletados ou que nunca tiveram valores atribuídos.

`callback` é invocado com três argumentos: o valor do elemento, o índice do elemento e o objeto Array sendo percorrido.

Se um parâmetro `thisArg` for fornecido para `findIndex`, ele será usado como o `this` para cada invocação do `callback`. Se não for fornecido, então {{jsxref("undefined")}} é usado.

`findIndex` não modifica o array sobre o qual é chamado.

A série de elementos processados por `findIndex` é definida antes da primeira invocação do `callback`. Elementos que são adicionados ao array depois que a chamada a `findIndex` começa não serão visitados pelo `callback`. Se um elemento existente não visitado do array for modificado pelo `callback`, seu valor passado ao `callback` será o valor no momento em que `findIndex` visitar o índice deste elemento; elementos que forem deletados não são visitados.

## Exemplos

### Encontrar o índice de um número primo em um array

O seguinte exemplo encontra o índice de um elemento no array que é um número primo (ou retorna -1 se não houver número primo).

```js
function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].findIndex(isPrime)); // -1, não encontrado
console.log([4, 6, 7, 12].findIndex(isPrime)); // 2
```

## Polyfill

Esse método foi adicionado à especificação do ECMAScript 6 e pode não estar disponível em todas as implementações de JavaScript ainda. Contudo, você pode fazer o polyfill de `Array.prototype.findIndex` com o seguinte trecho de código:

```js
if (!Array.prototype.findIndex) {
  Array.prototype.findIndex = function (predicate) {
    if (this === null) {
      throw new TypeError(
        "Array.prototype.findIndex called on null or undefined",
      );
    }
    if (typeof predicate !== "function") {
      throw new TypeError("predicate must be a function");
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return i;
      }
    }
    return -1;
  };
}
```

## Especificações

| Especificação                                                                          | Status               | Comentário         |
| -------------------------------------------------------------------------------------- | -------------------- | ------------------ |
| {{SpecName('ES6', '#sec-array.prototype.findIndex', 'Array.prototype.findIndex')}}     | {{Spec2('ES6')}}     | Definição inicial. |
| {{SpecName('ESDraft', '#sec-array.prototype.findIndex', 'Array.prototype.findIndex')}} | {{Spec2('ESDraft')}} |                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Array.findIndex")}}Veja também

- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.indexOf()")}}
