---
title: Array.of()
slug: Web/JavaScript/Reference/Global_Objects/Array/of
---

{{JSRef}}

O método **`Array.of()`** cria um nova instância de `Array` com um número variável de argumentos, independentemente do número ou do tipo dos argumentos.

A diferença entre o **`Array.of()`** e o construtor de **`Array`** é no tratamento dos argumentos inteiros: **`Array.of(7)`** cria um array com um único elemento, `7`, enquanto **`Array(7)`** cria um array vazio de propriedade `length` igual a `7` (**Nota**: isso quer dizer um array com `7` espaços vazios, e não com valores do tipo {{jsxref("undefined")}}).

```
Array.of(7);       // [7]
Array.of(1, 2, 3); // [1, 2, 3]

Array(7);          // array com 7 espaços vazios
Array(1, 2, 3);    // [1, 2, 3]
```

## Syntaxe

```
Array.of(element0[, element1[, ...[, elementN]]])
```

### Parâmetros

- `elementN`
  - : Elementos usados para criar o `array`.

### Valor de retorno

Uma nova instância de {{jsxref("Array")}}.

## Descrição

Esta função é parte do padrão ECMAScript 6 (ou ECMAScript 2015).

Para maiores informações veja:

- [`Array.of`](https://gist.github.com/rwaldron/1074126)
- [`Array.from` proposal](https://gist.github.com/rwaldron/1074126)
- [`Array.of` polyfill](https://gist.github.com/rwaldron/3186576).

## Exemplos

```js
Array.of(1); // [1]
Array.of(1, 2, 3); // [1, 2, 3]
Array.of(undefined); // [undefined]
```

## Polyfill

Executando o seguinte código antes de qualquer outro c\[odigo criará o `Array.of()` se ele não for disponível nativamente.

```js
if (!Array.of) {
  Array.of = function () {
    return Array.prototype.slice.call(arguments);
    // Or
    let vals = [];
    for (let prop in arguments) {
      vals.push(arguments[prop]);
    }
    return vals;
  };
}
```

## Especificações

| Especificação                                    | Status           | Comentário         |
| ------------------------------------------------ | ---------------- | ------------------ |
| {{SpecName('ES6', '#sec-array.of', 'Array.of')}} | {{Spec2('ES6')}} | Definição inicial. |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Array.of")}}

## Ver também

- {{jsxref("Array")}}
- {{jsxref("Array.from()")}}
- {{jsxref("TypedArray.of()")}}
