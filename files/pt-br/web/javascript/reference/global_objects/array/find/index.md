---
title: Array.prototype.find()
slug: Web/JavaScript/Reference/Global_Objects/Array/find
---

{{JSRef}}

O método **`find()`** retorna o **valor** do **primeiro elemento** do array que satisfizer a função de teste provida. Caso contrario, {{jsxref("undefined")}} é retornado.

{{EmbedInteractiveExample("pages/js/array-find.html")}}

Veja também o método {{jsxref("Array.findIndex", "findIndex()")}}, que retorna o **índice** do elemento encontrado no array ao invés do seu valor.

Se você precisa encontrar a posição de um elemento ou se um elemento existe em um array, use {{jsxref("Array.prototype.indexOf()")}} ou {{jsxref("Array.prototype.includes()")}}.

## Sintaxe

```
arr.find(callback(element[, index[, array]])[, thisArg])
```

### Parâmetros

- `callback`

  - : Função executada a cada iteração do array, recebendo três argumentos:

    - `element`
      - : O elemento atual que está sendo processado no array.
    - `index`{{optional_inline}}
      - : O índice do elemento atualmente sendo processado no array.
    - `array`{{optional_inline}}
      - : O array sobre o qual `find` foi chamado.

- `thisArg`{{optional_inline}}
  - : Opcional. Objeto usado como `this` quando executando o `callback`.

### Valor retornado

O **valor** do **primeiro elemento** do array que satisfaz a função de teste fornecida; caso contrário, {{jsxref("undefined")}}.

## Descrição

O método `find` executa a função `callback` uma vez para cada elemento presente no array até que encontre um onde `callback` retorne o valor true. Se o elemento é encontrado, `find` retorna imediatamente o valor deste elemento. Caso contrário, `find` retorna {{jsxref("Global_Objects/undefined", "undefined")}}. O `callback` é acionado para todos os índices do array de `0` a `tamanho-1`, não apenas para aqueles que possuem valores atribuídos. Sendo assim, ele pode ser menos eficiente para arrays muito grandes em que existem outros métodos que só visitam os índices que tenham valor atribuído.

O `callback` é acionado com três argumentos: o valor do elemento, o índice do elemento e o objeto do Array que está sendo executado.

Se um parâmetro `thisArg` é provido ao `find`, ele será usado como o `this` para cada acionamento do `callback`. Se não for provido, então {{jsxref("Global_Objects/undefined", "undefined")}} é usado.

O `find` não altera a array à qual foi acionado.

O conjunto dos elementos processados por `find` é definido antes do primeiro acionamento do `callback`. Elementos que são anexados à array após o início da chamada ao `find` não serão visitados pelo `callback`. Se um elemento existente ainda não visitado da array for alterado pelo `callback`, o valor passado ao `callback` quando o visitar será o valor no momento que `find` visita o índice daquele elemento; elementos excluídos ainda são visitados.

## Exemplos

### Encontrar um objeto em um array por uma de suas propriedades

```js
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cerejas", quantity: 5 },
];

function isCherries(fruit) {
  return fruit.name === "cerejas";
}

console.log(inventory.find(isCherries));
// { name: 'cerejas', quantity: 5 }
```

#### Utilizando arrow function

```js
const inventory = [
  { name: "maças", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const result = inventory.find((fruit) => fruit.name === "cherries");

console.log(result); // { name: 'cherries', quantity: 5 }
```

### Encontrar um número primo em um array

O exemplo a seguir encontra um elemento dentro da array que é número primo (ou retorna {{jsxref("Global_Objects/undefined", "undefined")}} se não houverem números primos).

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

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5
```

## Polyfill

Este método foi adicionado à especificação do ECMAScript 2015 e pode não estar disponível em todas as implementações do JavaScript. Entretanto, você pode fazer um polyfill para o `Array.prototype.find` com o trecho de código abaixo:

```js
if (!Array.prototype.find) {
  Array.prototype.find = function (predicate) {
    if (this === null) {
      throw new TypeError("Array.prototype.find called on null or undefined");
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
        return value;
      }
    }
    return undefined;
  };
}
```

## Especificações

| Especificação                                                            | Status           | Comentário         |
| ------------------------------------------------------------------------ | ---------------- | ------------------ |
| {{SpecName('ES6', '#sec-array.prototype.find', 'Array.prototype.find')}} | {{Spec2('ES6')}} | Definição inicial. |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Array.find")}}

## Veja também

- {{jsxref("Array.prototype.findIndex()")}} {{experimental_inline}}
- {{jsxref("Array.prototype.every()")}}
