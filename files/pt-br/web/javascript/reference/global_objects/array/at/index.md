---
title: Array.prototype.at()
slug: Web/JavaScript/Reference/Global_Objects/Array/at
---

{{JSRef}}

O método **`at()`** recebe um valor inteiro e retorna o item referente ao index dele, permitindo valores positivos ou negativos. Valores negativos contam apartir do último item do array.

Isto não quer dizer que exista alguma coisa errada em utilizar a notação com colchetes. Por exemplo `array[0]` retornaria o primeiro item. Porém ao invés de utilizar o {{jsxref('Array.prototype.length','array.length')}} para os últimos items; e.g `array[array.length-1]` para o último item, você pode utilizar o `array.at(-1)`. [(Veja os exemplos abaixo)](#examples)

{{EmbedInteractiveExample("pages/js/array-at.html")}}

## Sintaxe

```js
at(index);
```

### Parâmetros

- `index`
  - : O index (posição) do elemento do array que será retornado. Quando um valor negativo é passado como argumento a contagem dos elementos é feita de trás para frente.

### Valor retornado

O elemento correspondente ao index passado como argumento. Retorna {{jsxref('undefined')}} se o index passado não for encontrado.

## Exemplos

### Retornando o último item de um array

O exemplo a seguir exibe uma função que retorna o último elemento encontrado de um array específico.

```js
// O array com items
const cart = ["apple", "banana", "pear"];

// A função que retorna o último item do array passado como argumento
function returnLast(arr) {
  return arr.at(-1);
}

// Pega o último item do array 'cart'
const item1 = returnLast(cart);
console.log(item1); // 'pear'

// Adiciona um item ao array 'cart'
cart.push("orange");
const item2 = returnLast(cart);
console.log(item2); // 'orange'
```

### Comparando métodos

Este exemplo compara a diferentes maneiras de selecionar o penúltimo item de um {{jsxref('Array')}}.
Todos os métodos abaixos são válidos, mas este exemplo destaca a sucintez e legibilidade do método `at()`.

```js
// O array com items
const colors = ["red", "green", "blue"];

// Usando a propriedade length
const lengthWay = colors[colors.length - 2];
console.log(lengthWay); // 'green'

// Usando o método slice(). Perceba que um array é retornado
const sliceWay = colors.slice(-2, -1);
console.log(sliceWay[0]); // 'green'

// Usando o método at()
const atWay = colors.at(-2);
console.log(atWay); // 'green'
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- Um polyfill do método `Array.prototype.at` está disponível em [`core-js`](https://github.com/zloirock/core-js#relative-indexing-method)
- [Um polyfill para o método at()](https://github.com/tc39/proposal-relative-indexing-method#polyfill).
- {{jsxref("Array.prototype.find()")}} – retorna um valor baseado no teste fornecido.
- {{jsxref("Array.prototype.includes()")}} – verifica se um valor existe em um array.
- {{jsxref("Array.prototype.indexOf()")}} – retorna o index de um determinado elemento.
