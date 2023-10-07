---
title: Array.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/Array/concat
---

{{JSRef("Global_Objects", "Array")}}

O método **`concat()`** é utilizado para mesclar dois ou mais arrays.
Esse método não altera os arrays existentes, mas, em vez disso, retorna um novo array.

{{EmbedInteractiveExample("pages/js/array-concat.html","shorter")}}

## Sintaxe

```js-nolint
concat()
concat(valor0)
concat(valor0, valor1)
concat(valor1, valor2, /*...,*/ valorN)
```

### Parâmetros

- `valorN` {{optional_inline}}
  - : Arrays e/ou valores para concatenar em um novo array. Se todos
    os parâmetros `valorN` forem omitidos, `concat` retorna uma
    [shallow copy](/pt-BR/docs/Glossary/Shallow_copy) de todos os arrays existentes do qual é chamado. Veja a descrição abaixo
    para mais detalhes.

### Valor de retorno

Uma nova instância {{jsxref("Array")}}.

## Descrição

O método `concat` cria um novo array. O array irá primeiro ser preenchido pelos elementos no objeto no qual é chamado. Então, para cada argumento, seu valor será concatenado no array — para objetos normais ou primitivos, o próprio argumento se tornará um elemento do array final; para arrays ou objetos tipo array com a propriedade [`Symbol.isConcatSpreadable`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable) definida como um valor verdadeiro, cada elemento do argumento será adicionado independentemente ao array final. O método `concat` não recursa em argumentos de array aninhados.

O método `concat()` é um [copying method](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Ele não altera `this` ou quaquer um dos arrays fornecidos como argumentos, mas, em vez disso retorna uma [shallow copy](/pt-BR/docs/Glossary/Shallow_copy) que contém os mesmos elementos dos arrays originais.

O método `concat()` preserva slots vazios se qualquer um dos arrays de origem for [sparse](/pt-BR/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays).

O método `concat()` é [genérico](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array#m%C3%A9todos_gen%C3%A9ricos_de_array). O valor `this` é tratado da mesma forma como os outros argumentos (exceto que será convertido em um objeto primeiro), o que significa que objetos simples serão anexados diretamente ao array resultante, enquanto objetos do tipo array com verdadeiro `@@isConcatSpreadable` serão propagados no array resultante.

## Exemplos

### Concatenando dois arrays

O código a seguir concatena dois arrays:

```js
const letras = ["a", "b", "c"];
const numeros = [1, 2, 3];

const alfaNumerico = letras.concat(numeros);
console.log(alfaNumerico);
// resulta em ['a', 'b', 'c', 1, 2, 3]
```

### Concatenando três arrays

O código a seguir concatena três arrays:

```js
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numeros = num1.concat(num2, num3);

console.log(numeros);
// resulta em [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Concatenando valores em um array

O código a seguir concatena três valores em um array:

```js
const letras = ["a", "b", "c"];

const alfaNumerico = letras.concat(1, [2, 3]);

console.log(alfaNumerico);
// resulta em ['a', 'b', 'c' , 1, 2, 3]
```

### Concatenando arrays aninhados

O código a seguir concatena arrays aninhados e demonstra a retenção de referência:

```js
const num1 = [[1]];
const num2 = [2, [3]];

const numeros = num1.concat(num2);

console.log(numeros);
// resulta em [[1], 2, [3]]

//modifica o primeiro elemento do num1
num1[0].push(4);

console.log(numeros);
// resulta em [[1, 4], 2, [3]]
```

### Concatenanto objetos tipo array com Symbol.isConcatSpreadable

`concat` não trata todos os objetos tipo array como arrays por padrão — somente se `Symbol.isConcatSpreadable` estiver definido como um valor verdadeiro (P.ex. `true`)

```js
const obj1 = { 0: 1, 1: 2, 2: 3, length: 3 };
const obj2 = { 0: 1, 1: 2, 2: 3, length: 3, [Symbol.isConcatSpreadable]: true };
console.log([0].concat(obj1, obj2));
// resulta em [ 0, { '0': 1, '1': 2, '2': 3, length: 3 }, 1, 2, 3 ]
```

### Usando concat() em arrays sparse

Se qualquer uma das arrays é sparse, a array resultante será também sparse:

```js
console.log([1, , 3].concat([4, 5])); // [1, empty, 3, 4, 5]
console.log([1, 2].concat([3, , 5])); // [1, 2, 3, empty, 5]
```

### Chamando concat() em objetos não array

Se o valor `this` não for um array, ele será convertido em um objeto e então tratado da mesma forma que os argumentos para `concat()`. Nesse caso o valor de retorno é sempre um novo array simples.

```js
console.log(Array.prototype.concat.call({}, 1, 2, 3)); // [{}, 1, 2, 3]
console.log(Array.prototype.concat.call(1, 2, 3)); // [ [Number: 1], 2, 3 ]
const arrayLike = { [Symbol.isConcatSpreadable]: true, length: 2, 0: 1, 1: 2 };
console.log(Array.prototype.concat.call(arrayLike, 3, 4)); // [1, 2, 3, 4]
```

## Especificação

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Polyfill of `Array.prototype.concat` in `core-js` with fixes and implementation of modern behavior like `Symbol.isConcatSpreadable` support](https://github.com/zloirock/core-js#ecmascript-array)
- [Indexed collections](/pt-BR/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.splice()")}}
- {{jsxref("String.prototype.concat()")}}
- {{jsxref("Symbol.isConcatSpreadable")}}
