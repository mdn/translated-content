---
title: "RangeError: repeat count must be non-negative"
slug: Web/JavaScript/Reference/Errors/Negative_repetition_count
---

{{jsSidebar("Errors")}}

## Mensagem

```
RangeError: argument out of range
RangeError: repeat count must be non-negative (Firefox)
RangeError: Invalid count value (Chrome)
```

## Tipo de Erro

{{jsxref("RangeError")}}

## O que está errado?

O método {{jsxref("String.prototype.repeat()")}} foi usado. Ele tem um parâmetro `count` indicando o número de vezes para repetir a string. Esse contador deve ser maior ou igual à 0 menor que {{jsxref("Infinity")}} (infinito positivo). O intervalo de vaores permitidos pode ser descrito por: \[0, +∞).

## Exemplos

### Errado

```js example-bad
"abc".repeat(-1); // RangeError
```

### Certo

```js example-good
"abc".repeat(0); // ''
"abc".repeat(1); // 'abc'
"abc".repeat(2); // 'abcabc'
"abc".repeat(3.5); // 'abcabcabc' (count será convertido para inteiro)
```

## Veja também

- {{jsxref("String.prototype.repeat()")}}
