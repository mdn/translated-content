---
title: Math.sqrt()
slug: Web/JavaScript/Reference/Global_Objects/Math/sqrt
---

{{JSRef}}

## Resumo

A função **Math.sqrt()** retorna a raiz quadrada de um número (<math><semantics><msqrt><mi>x</mi></msqrt><annotation encoding="TeX">\sqrt{x}</annotation></semantics></math>) .

## Sintaxe

```
Math.sqrt(x)
```

### Parâmetros

- `x`
  - : Um número.

### Valor retornado

A raiz quadrada do número recebido. Se o número for negativo, a função retornará {{jsxref("NaN")}}.

## Descrição

Se o valor de `x` for negativo, `Math.sqrt()` retorna {{jsxref("NaN")}}.

Por `sqrt` ser um método estático de `Math`, deve-se sempre usá-lo como `Math.sqrt()`, e não como um método de um objeto `Math` que você criou.

## Exemplos

### Exemplo: Usando `Math.sqrt`

```js
Math.sqrt(9); // 3
Math.sqrt(2); // 1.414213562373095

Math.sqrt(1); // 1
Math.sqrt(0); // 0
Math.sqrt(-1); // NaN
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Ver também

- {{jsxref("Math.cbrt()")}}
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.pow()")}}
