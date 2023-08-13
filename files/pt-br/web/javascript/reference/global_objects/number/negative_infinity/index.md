---
title: Number.NEGATIVE_INFINITY
slug: Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY
---

{{JSRef}}

A propriedade **`Number.NEGATIVE_INFINITY`** representa o valor Infinito negativo.

{{EmbedInteractiveExample("pages/js/number-negative-infinity.html")}}{{js_property_attributes(0, 0, 0)}}

## Descrição

O valor de `Number.NEGATIVE_INFINITY` é o mesmo que o valor negativo da propriedade do objeto global {{jsxref("Infinity")}}.

O valor se comporta um pouco diferente do que o infinito matemático:

- Qualquer valor positivo, incluindo {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}}, mutiplicado por `NEGATIVE_INFINITY` é `NEGATIVE_INFINITY`.
- Qualquer valor negativo, incluindo `NEGATIVE_INFINITY`, multiplicado por `NEGATIVE_INFINITY` é {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}}.
- Qualquer valor positivo dividido por `NEGATIVE_INFINITY` é zero negativo.
- Qualquer valor negativo dividido por `NEGATIVE_INFINITY` é zero positivo.
- Zero multiplicado por `NEGATIVE_INFINITY` é {{jsxref("NaN")}}.
- {{jsxref("NaN")}} multiplicado por `NEGATIVE_INFINITY` é {{jsxref("NaN")}}.
- `NEGATIVE_INFINITY`, dividido por qualquer valor negativo exceto `NEGATIVE_INFINITY`, é {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}}.
- `NEGATIVE_INFINITY`, divido por qualquer valor positivo exceto {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}}, é `NEGATIVE_INFINITY`.
- `NEGATIVE_INFINITY`, divido por ou `NEGATIVE_INFINITY` ou {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}}, é {{jsxref("NaN")}}.

Você pode usar a propriedade `Number.NEGATIVE_INFINITY` para indicar uma condição de erro que retorna um número finito em caso de sucesso. Nota que, usar {{jsxref("isFinite")}} seria mais apropriado neste caso.

Por `NEGATIVE_INFINITY` ser uma propriedade estática de {{jsxref("Number")}}, você sempre a usa como `Number.NEGATIVE_INFINITY`, ao invés de ser uma propriedade do objeto {{jsxref("Number")}} que você criou.

## Exemplos

### Usando `NEGATIVE_INFINITY`

No seguinte exemplo, a variável `smallNumber` é atribuída um valor que é menor que o valor mínimo. Quando o {{jsxref("Statements/if...else", "if")}} executa, `smallNumber` tem o valor `-Infinity`, então é colocado em `smallNumber` um valor mais manejável antes de continuar.

```js
var smallNumber = -Number.MAX_VALUE * 2;

if (smallNumber === Number.NEGATIVE_INFINITY) {
  smallNumber = returnFinite();
}
```

## Especificações

| Especificação                                                                        |
| ------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-number.negative_infinity', 'Number.NEGATIVE_INFINITY')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Number.NEGATIVE_INFINITY")}}

## Veja também

- {{jsxref("Number.POSITIVE_INFINITY")}}
- {{jsxref("Number.isFinite()")}}
- {{jsxref("Global_Objects/Infinity", "Infinity")}}
- {{jsxref("Global_Objects/isFinite", "isFinite()")}}
