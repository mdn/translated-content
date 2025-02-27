---
title: Number.MIN_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER
---

{{JSRef}}

A constante **`Number.MIN_SAFE_INTEGER`** representa o menor inteiro seguro no JavaScript (`-(253 - 1)`).

Para representar inteiros menores do que isso, considere usar {{jsxref("BigInt")}}.

{{InteractiveExample("JavaScript Demo: Number.MIN_SAFE_INTEGER")}}

```js interactive-example
const x = Number.MIN_SAFE_INTEGER - 1;
const y = Number.MIN_SAFE_INTEGER - 2;

console.log(Number.MIN_SAFE_INTEGER);
// Expected output: -9007199254740991

console.log(x);
// Expected output: -9007199254740992

console.log(x === y);
// Expected output: true
```

{{js_property_attributes(0, 0, 0)}}

## Descrição

A constante `MIN_SAFE_INTEGER` tem o valor de `-9007199254740991` (-9,007,199,254,740,991 ou -9 quadrilhões). A razão por trás deste número é que o JavaScript usa o [formato de número de ponto-flutuante de precisão-dupla](http://en.wikipedia.org/wiki/Double_precision_floating-point_format) como especificado na [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point) e pode seguramente representar número entre `-(253 - 1)` e `253 - 1`. Veja {{jsxref("Number.isSafeInteger()")}} para mais informações.

Por `MIN_SAFE_INTEGER` ser uma propriedade estática de {{jsxref("Number")}}, você sempre deve usar como `Number.MIN_SAFE_INTEGER`, ao invés de uma propriedade do objeto {{jsxref("Number")}} que você criou.

## Exemplos

### Usando MIN_SAFE_INTEGER

```js
Number.MIN_SAFE_INTEGER; // -9007199254740991
-(Math.pow(2, 53) - 1); // -9007199254740991
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Number.MAX_SAFE_INTEGER")}}
- {{jsxref("Number.isSafeInteger()")}}
- {{jsxref("BigInt")}}
