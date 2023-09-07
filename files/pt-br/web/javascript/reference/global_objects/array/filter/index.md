---
title: Array.prototype.filter()
slug: Web/JavaScript/Reference/Global_Objects/Array/filter
---

{{JSRef}}

O método **`filter()`** cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

{{EmbedInteractiveExample("pages/js/array-filter.html","shorter")}}

## Sintaxe

```
var newArray = arr.filter(callback[, thisArg])
```

### Parâmetros

- `callback`

  - : Função é um predicado, para testar cada elemento do array. Retorna `true` para manter o elemento, `false` caso contrário, recebendo três argumentos:

    - `element`
      - : O elemento que está sendo processado no array.
    - `index`
      - : O índice do elemento atual que está sendo processado no array.
    - `array`
      - : O array para qual `filter` foi chamada.

- `thisArg {{Optional_inline}}`
  - : Opcional. Valor a ser usado como `this` durante a execução do `callback`.

### Valor de retorno

Um novo array com os elementos que passaram no teste.

## Descrição

`filter()` chama a função callback fornecida, uma vez para cada elemento do array, e constrói um novo array com todos os valores para os quais o `callback` retornou o valor `true` ou [um valor que seja convertido para true](/pt-BR/docs/Glossary/Truthy). O `callback` é chamado apenas para índices do array que possuem valores atribuídos; Ele não é invocado para índices que foram excluídos ou para aqueles que não tiveram valor atribuído. Elementos do array que não passaram no teste do `callback` são simplesmente ignorados, e não são incluídos no novo array.

`callback` é invocado com estes três argumentos:

1. o valor do elemento
2. o índice do elemento
3. o objeto do array a ser preenchido

Se o parâmetro `thisArg` for provido para o filter, ele será passado para o `callback` quando invocado, para ser usado como o valor do this. Caso contrário, será passado `undefined` como o valor de `this`. O valor do `this` finalmente observado pela função de `callback` é determinado de acordo com [a regra que define o valor do `this` geralmente visto por uma função](/pt-BR/docs/Web/JavaScript/Reference/Operators/this).

`filter()` não altera o `array` a partir da qual foi invocado.

O intervalo de elementos processados pela função `filter()` é definido antes da invocação do primeiro callback. Elementos que forem adicionados ao array depois da invocação do `filter()` não serão visitados pelo `callback`. Se elementos existentes no array forem alterados ou deletados, os valores deles que serão passados para o callback são os que eles tiverem quando o `filter()` visitá-los; Elementos que forem deletados não são visitados.

## Exemplos

### Exemplo: Filtrando todos os valores pequenos

Os exemplos a seguir usam `filter()` para criar um `array` filtrado em que todos os elementos com valores menores que 10 são removidos.

```js
function isBigEnough(value) {
  return value >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
```

### Exemplo: Filtrando entradas inválidas para JSON

O exemplo a seguir usa `filter()` para criar um `JSON` filtrado com todos seus elementos diferentes de zero, e `id` numérico.

```js
var arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: "undefined" },
];

var invalidEntries = 0;

function filterByID(obj) {
  if ("id" in obj && typeof obj.id === "number" && !isNaN(obj.id)) {
    return true;
  } else {
    invalidEntries++;
    return false;
  }
}

var arrByID = arr.filter(filterByID);

console.log("Filtered Array\n", arrByID);
// [{ id: 15 }, { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 }]

console.log("Number of Invalid Entries = ", invalidEntries);
// Number of Invalid Entries = 4
```

### Procurando em um array

O exemplo a seguir usa `filter()` para filtrar o conteúdo de um array baseado em um critério de busca

```js
var fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Array filters items based on search criteria (query)
 */
function filterItems(query) {
  return fruits.filter(function (el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  });
}

console.log(filterItems("ap")); // ['apple', 'grapes']
console.log(filterItems("an")); // ['banana', 'mango', 'orange']
```

### Implementação ES2015

```js
const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Array filters items based on search criteria (query)
 */
const filterItems = (query) => {
  return fruits.filter(
    (el) => el.toLowerCase().indexOf(query.toLowerCase()) > -1,
  );
};

console.log(filterItems("ap")); // ['apple', 'grapes']
console.log(filterItems("an")); // ['banana', 'mango', 'orange']
```

## Polyfill

`filter()` foi adicionado ao padrão ECMA-262 na 5ª edição; assim como pode não estar presente em todas as implementações do padrão. Você pode trabalhar com isso adicionando o seguinte código no início de seus scripts, permitindo o uso do `filter()` na implementação ECMA-262 que não tem suporte nativo. Esse algoritmo é exatamente aquele especificado na 5ª edição do ECMA-262, assumindo que `fn.call` veja o valor original de {{jsxref("Function.prototype.call()")}}, e que {{jsxref("Array.prototype.push()")}} tenha seu valor original.

```js
if (!Array.prototype.filter) {
  Array.prototype.filter = function (fun /*, thisArg*/) {
    "use strict";

    if (this === void 0 || this === null) {
      throw new TypeError();
    }

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== "function") {
      throw new TypeError();
    }

    var res = [];
    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++) {
      if (i in t) {
        var val = t[i];

        // NOTE: Technically this should Object.defineProperty at
        //       the next index, as push can be affected by
        //       properties on Object.prototype and Array.prototype.
        //       But that method's new, and collisions should be
        //       rare, so use the more-compatible alternative.
        if (fun.call(thisArg, val, i, t)) {
          res.push(val);
        }
      }
    }

    return res;
  };
}
```

## Especificações

| Especificação                                                                | Status             | Comentário                                         |
| ---------------------------------------------------------------------------- | ------------------ | -------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.4.4.20', 'Array.prototype.filter')}}            | {{Spec2('ES5.1')}} | Definição inicial. Implementada no JavaScript 1.6. |
| {{SpecName('ES6', '#sec-array.prototype.filter', 'Array.prototype.filter')}} | {{Spec2('ES6')}}   |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Array.filter")}}

## Veja também

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.reduce()")}}
