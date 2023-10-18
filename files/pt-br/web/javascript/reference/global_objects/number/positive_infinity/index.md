---
title: Number.POSITIVE_INFINITY
slug: Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY
---

{{JSRef}}

A propriedade **`Number.POSITIVE_INFINITY`** representa o valor positivo infinito.

Você não precisa criar um objeto {{jsxref("Number")}} para utilizar a propriedade estática (use `Number.POSITIVE_INFINITY`).

{{js_property_attributes(0, 0, 0)}}

## Descrição

O valor de `Number.POSITIVE_INFINITY` é o mesmo valor da propriedade {{jsxref("Infinity")}} do objeto global.

Esse valor se comporta ligeiramente diferente do infinito matemático:

- Qualquer valor positivo, incluindo `POSITIVE_INFINITY`, multiplicado por `POSITIVE_INFINITY` é `POSITIVE_INFINITY`.
- Qualquer valor negativo, incluindo, {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}}, multiplicado por `POSITIVE_INFINITY` é {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}}.
- Qualquer número positivo dividido por `POSITIVE_INFINITY` é Zero positivo.
- Qualquer número negativo dividido por `POSITIVE_INFINITY` é Zero negativo.
- Zero multiplicado por `POSITIVE_INFINITY` é {{jsxref("NaN")}}.
- {{jsxref("Global_Objects/NaN", "NaN")}} multiplicado por `POSITIVE_INFINITY` é {{jsxref("NaN")}}.
- `POSITIVE_INFINITY`, dividido por qualquer valor negativo exceto {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}}, é {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}}.
- `POSITIVE_INFINITY`, dividido por qualquer valor positivo exceto `POSITIVE_INFINITY`, é `POSITIVE_INFINITY`.
- `POSITIVE_INFINITY`, dividido por {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}} ou `POSITIVE_INFINITY`, é {{jsxref("NaN")}}.

Você pode usar a propriedade `Number.POSITIVE_INFINITY` para indicar uma condição de erro que retorna um número finito no caso de sucesso. Sobretudo, {{jsxref("isFinite")}} seria mais apropriado nesse caso.

## Exemplos

### Usando `POSITIVE_INFINITY`

No exemplo a seguir, a variável `bigNumber` recebe um valor maior que o valor máximo. Quando as declarações {{jsxref("Statements/if...else", "if")}} executam, `bigNumber` tem o valor `Infinity`, então `bigNumber` recebe um valor mais gerenciável antes de continuar.

```js
var bigNumber = Number.MAX_VALUE * 2;

if (bigNumber == Number.POSITIVE_INFINITY) {
  bigNumber = returnFinite();
}
```

## Especificação

| Especificação                                                                        | Status               | Comentário                                         |
| ------------------------------------------------------------------------------------ | -------------------- | -------------------------------------------------- |
| {{SpecName('ES1')}}                                                                  | {{Spec2('ES1')}}     | Initial definition. Implemented in JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.7.3.6', 'Number.POSITIVE_INFINITY')}}                   | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES6', '#sec-number.positive_infinity', 'Number.POSITIVE_INFINITY')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ESDraft', '#sec-number.positive_infinity', 'Number.POSITIVE_INFINITY')}} | {{Spec2('ESDraft')}} |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Number.POSITIVE_INFINITY")}}

## Ver também

- {{jsxref("Number.NEGATIVE_INFINITY")}}
- {{jsxref("Number.isFinite()")}}
- {{jsxref("Infinity")}}
- {{jsxref("isFinite", "isFinite()")}}
