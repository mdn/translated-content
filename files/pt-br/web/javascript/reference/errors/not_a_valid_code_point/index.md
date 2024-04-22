---
title: "RangeError: argument is not a valid code point"
slug: Web/JavaScript/Reference/Errors/Not_a_valid_code_point
---

{{jsSidebar("Errors")}}

## Mensagem

```
RangeError: Invalid code point {0} (Edge)
RangeError: {0} is not a valid code point (Firefox)
RangeError: Invalid code point {0} (Chrome)
```

## Tipo de Erro

{{jsxref("RangeError")}}

## O que está errado?

{{jsxref("String.fromCodePoint()")}} dispara esse erro quando são passados valores {{jsxref("NaN")}}, inteiros negativos (-1), não inteiros (5.4), ou valores maiores que 0x10FFFF (1114111).

Um [code point](https://pt.wikipedia.org/wiki/Ponto_de_c%C3%B3digo) é um valor Unicode; isto é,é um valor inteiro entre `0` e `0x10FFFF`.

## Exemplos

### Errado

```js example-bad
String.fromCodePoint("_"); // RangeError
String.fromCodePoint(Infinity); // RangeError
String.fromCodePoint(-1); // RangeError
String.fromCodePoint(3.14); // RangeError
String.fromCodePoint(3e-2); // RangeError
String.fromCodePoint(NaN); // RangeError
```

### Certo

```js example-good
String.fromCodePoint(42); // "*"
String.fromCodePoint(65, 90); // "AZ"
String.fromCodePoint(0x404); // "\u0404"
String.fromCodePoint(0x2f804); // "\uD87E\uDC04"
String.fromCodePoint(194564); // "\uD87E\uDC04"
String.fromCodePoint(0x1d306, 0x61, 0x1d307); // "\uD834\uDF06a\uD834\uDF07"
```

## Veja também

- {{jsxref("String.fromCodePoint()")}}
