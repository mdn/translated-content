---
title: Math.sqrt()
slug: Web/JavaScript/Reference/Global_Objects/Math/sqrt
---

{{JSRef("Global_Objects", "Math")}}

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

| Especificação                                        | Status             | Comentário                                         |
| ---------------------------------------------------- | ------------------ | -------------------------------------------------- |
| {{SpecName('ES1')}}                                  | {{Spec2('ES1')}}   | Definição inicial. Implementado no JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.2.17', 'Math.sqrt')}} | {{Spec2('ES5.1')}} |                                                    |
| {{SpecName('ES6', '#sec-math.sqrt', 'Math.sqrt')}}   | {{Spec2('ES6')}}   |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Math.sqrt")}}

## Ver também

- {{jsxref("Math.cbrt()")}}
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.pow()")}}
