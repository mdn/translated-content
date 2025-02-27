---
title: Number.MAX_VALUE
slug: Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE
---

{{JSRef}}

A propriedade **`Number.MAX_VALUE`** representa o maior valor numérico representável em JavaScript.

{{InteractiveExample("JavaScript Demo: Number.MAX_VALUE")}}

```js interactive-example
function multiply(x, y) {
  if (x * y > Number.MAX_VALUE) {
    return "Process as Infinity";
  }
  return x * y;
}

console.log(multiply(1.7976931348623157e308, 1));
// Expected output: 1.7976931348623157e+308

console.log(multiply(1.7976931348623157e308, 2));
// Expected output: "Process as Infinity"
```

{{js_property_attributes(0, 0, 0)}}

## Descrição

A propriedade `MAX_VALUE` tem o valor de aproximadamente `1.79E+308`, ou 21024. Valores maiores que `MAX_VALUE` são representados como {{jsxref("Infinity")}}.

Por `MAX_VALUE` ser uma propriedade estática de {{jsxref("Number")}}, você sempre deve usar como `Number.MAX_VALUE`, ao invés de uma propriedade do objeto {{jsxref("Number")}} que você criou.

## Exemplos

### Usando `MAX_VALUE`

O código a seguir multiplica dois valores numéricos. Se o resultado é menor ou igual a `MAX_VALUE`, a função `func1` é chamada; caso contrário, a função `func2` é chamada.

```js
if (num1 * num2 <= Number.MAX_VALUE) {
  func1();
} else {
  func2();
}
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Number.MIN_VALUE")}}
- O objeto {{jsxref("Number")}} a qual ela pertence
