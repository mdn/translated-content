---
title: String.length
slug: Web/JavaScript/Reference/Global_Objects/String/length
---

{{JSRef}}

A propriedade `length` de um objeto {{jsxref("String")}} contém o comprimento da string. `length` é uma propriedade `read-only` (somente leitura) de instâncias de string.

## Sintaxe

```
str.length
```

## Descrição

Essa propriedade retorna o número de unidades de código presentes na string. [UTF-16](https://pt.wikipedia.org/wiki/UTF-16), a codificação utilizada pelo JavaScript, utiliza uma unidade de código de 16-bits para representar os caracteres mais comuns, mas precisa usar duas unidades para caracteres menos usados, então é possível que o valor retornado por `length` não seja exatamente o número de caracteres na string.

ECMASCript 2016 (ed. 7) estabeleceu um comprimento máximo de `2^53 - 1` elementos. Anteriormente, nenhum comprimento máximo havia sido especificado. No Firefox, as strings têm um comprimento (`length`) máximo de `2**30 - 2` (\~ 1 GB). Em versões anteriores ao Firefox 65, o comprimento máximo era `2**28 - 1` (\~ 256 MB).

Para uma string vazia, `length` é `0`.

A propriedade estática `String.length` retorna o valor `1`.

## Exemplos

### Uso básico

```js
var x = "Mozilla";
var empty = "";

console.log(
  "Mozilla possui " + x.length + " unidades de código de comprimento",
);
/* "Mozilla possui 7 unidades de código de comprimento" */

console.log("A string vazia possui um comprimento de " + empty.length);
/* "A string vazia possui um comprimento de 0" */
```

### Atribuindo valor ao comprimento

```js
let myString = "campainhas";

// A tentativa de atribuir um valor à propriedade .length
// de uma string não tem efeito observável.

myString.length = 4;
console.log(myString);
// retorna  "campainhas"
console.log(myString.length);
// retorna 10
```

## Especificação

| Especificação                                                                                | Estado             | Comentários                                        |
| -------------------------------------------------------------------------------------------- | ------------------ | -------------------------------------------------- |
| {{SpecName('ES1')}}                                                                          | {{Spec2('ES1')}}   | Definição inicial. Implementada no JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.5.5.1', 'String.prototype.length')}}                            | {{Spec2('ES5.1')}} |                                                    |
| {{SpecName('ES6', '#sec-properties-of-string-instances-length', 'String.prototype.length')}} | {{Spec2('ES6')}}   |                                                    |

## Navegadores compatíveis

{{Compat("javascript.builtins.String.length")}}

## Veja também

- [JavaScript `String.length` and Internationalizing Web Applications](http://developer.teradata.com/blog/jasonstrimpel/2011/11/javascript-string-length-and-internationalizing-web-applications)
