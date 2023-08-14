---
title: Number.MAX_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
---

{{JSRef}}

A constante **`Number.MAX_SAFE_INTEGER`** representa o maior inteiro seguro no JavaScript (`253 - 1`).

Para inteiros maiores, considere usar {{jsxref("BigInt")}}.

{{EmbedInteractiveExample("pages/js/number-maxsafeinteger.html")}}{{js_property_attributes(0, 0, 0)}}

## Descrição

A constante `MAX_SAFE_INTEGER` tem o valor de `9007199254740991` (9,007,199,254,740,991 ou \~9 quadrilhões). A razão por trás deste número é que o JavaScript usa o [formato de número de ponto-flutuante de precisão-dupla](http://en.wikipedia.org/wiki/Double_precision_floating-point_format) como especificado na [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point) e pode seguramente representar número entre `-(253 - 1)` e `253 - 1`.

Seguro neste contexto se refere a habilidade de representar inteiros exatamente e corretamente compará-los. Por exemplo, `Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2` será avaliado para verdadeiro, que é matematicamente incorreto. Veja {{jsxref("Number.isSafeInteger()")}} para mais informação.

Este campo não existe em navegadores antigos. Usando ele sem checar sua existência, como `Math.max(Number.MAX_SAFE_INTEGER, 2)`, irá gerar resultados indesejados como NaN.

Por `MAX_SAFE_INTEGER` ser uma propriedade estática de {{jsxref("Number")}}, você sempre deve usar como `Number.MAX_SAFE_INTEGER`, ao invés de uma propriedade do objeto {{jsxref("Number")}} que você criou.

## Polyfill

```js
if (!Number.MAX_SAFE_INTEGER) {
  Number.MAX_SAFE_INTEGER = 9007199254740991; // Math.pow(2, 53) - 1;
}
```

## Exemplos

### Retorno do valor de MAX_SAFE_INTEGER

```js
Number.MAX_SAFE_INTEGER; // 9007199254740991
```

### Números maiores que o inteiro seguro

Isso retorna 2 por quê em pontos flutuantes, o valor é na verdade o final decimal "1" exceto em casos subnormais de precisão como zero.

```js
Number.MAX_SAFE_INTEGER * Number.EPSILON; // 2
```

## Especificações

| Especificação                                                                      |
| ---------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-number.max_safe_integer', 'Number.MAX_SAFE_INTEGER')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Number.MAX_SAFE_INTEGER")}}

## Veja também

- {{jsxref("Number.MIN_SAFE_INTEGER")}}
- {{jsxref("Number.isSafeInteger()")}}
- {{jsxref("BigInt")}}
