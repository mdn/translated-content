---
title: Number.MIN_VALUE
slug: Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE
---

{{JSRef}}

A propriedade **`Number.MIN_VALUE`** representa o menor valor positivo numérico representável em JavaScript.

{{EmbedInteractiveExample("pages/js/number-min-value.html")}}{{js_property_attributes(0, 0, 0)}}

## Descrição

A propriedade `MIN_VALUE` é o número mais próximo de 0, não o número mais negativo, que o JavaScript pode representar.

`MIN_VALUE` tem o valor de aproximadamente `5e-324`. Valores menores que `MIN_VALUE` ("valores de underflow") são convertidos para 0.

Por `MIN_VALUE` ser uma propriedade estática de {{jsxref("Number")}}, você sempre deve usar como `Number.MIN_VALUE`, ao invés de uma propriedade do objeto {{jsxref("Number")}} que você criou.

## Exemplos

### Usando `MIN_VALUE`

O seguinte código divide dois valores numéricos. Se o resultado é maior ou igual a `MIN_VALUE`, a função `func1` é chamada; caso contrário, a função `func2` é chamada.

```js
if (num1 / num2 >= Number.MIN_VALUE) {
  func1();
} else {
  func2();
}
```

## Especificações

| Especificação                                                        |
| -------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-number.min_value', 'Number.MIN_VALUE')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Number.MIN_VALUE")}}

## Veja também

- {{jsxref("Number.MAX_VALUE")}}
