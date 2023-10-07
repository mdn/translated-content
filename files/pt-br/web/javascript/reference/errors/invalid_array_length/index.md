---
title: "RangeError: invalid array length"
slug: Web/JavaScript/Reference/Errors/Invalid_array_length
---

{{jsSidebar("Errors")}}

## Mensagem

```
RangeError: invalid array length (Firefox)
RangeError: Invalid array length (Chrome)
RangeError: Invalid array buffer length (Chrome)
```

## Tipo de erro

{{jsxref("RangeError")}}

## O que houve de errado?

Um comprimento inválido de array pode aparecer nas seguintes situações:

- Quando criamos um {{jsxref("Array")}} ou um {{jsxref("ArrayBuffer")}} que tem um comprimento que ou é negativo ou é maior ou igual a 232, ou
- quando configuramos a propriedade {{jsxref("Array.length")}} a um valor que é negativo, ou maior ou igual a 232.

Porque `Array` e `ArrayBuffer` tem um comprimento limitado? A propriedade `length` de um `Array` ou um `ArrayBuffer` é representado por um inteiro 32-bit unsigned, que pode apenas armazenar valores que estão no intervalo de 0 a 232-1.

Se você está criando um `Array`, utilizando o construtor, você provavelmente quer usar a notação literal, onde o primeiro argumento é interpretado como o comprimento do `Array`.

Ao contrário, você poderia querer travar o comprimento antes de ajustar a propriedade do comprimento, ou utilizá-lo com um argumento do construtor.

## Exemplos

### Casos inválidos

```js example-bad
new Array(Math.pow(2, 40));
new Array(-1);
new ArrayBuffer(Math.pow(2, 32));
new ArrayBuffer(-1);

let a = [];
a.length = a.length - 1; // define -1 à propriedade length

let b = new Array(Math.pow(2, 32) - 1);
b.length = b.length + 1; // define 2^32 à propriedade length
```

### Casos válidos

```js example-good
[Math.pow(2, 40)]; // [ 1099511627776 ]
[-1]; // [ -1 ]
new ArrayBuffer(Math.pow(2, 32) - 1);
new ArrayBuffer(0);

let a = [];
a.length = Math.max(0, a.length - 1);

let b = new Array(Math.pow(2, 32) - 1);
b.length = Math.min(0xffffffff, b.length + 1);

// 0xffffffff é a notação hexadecimal de 2^32 - 1
// que também pode ser escrito como (-1 >>> 0)
```

## Veja também

- {{jsxref("Array")}}
- {{jsxref("Array.length")}}
- {{jsxref("ArrayBuffer")}}
