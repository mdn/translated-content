---
title: Number.MIN_VALUE
slug: Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE
---

{{JSRef}}

La propiedad **`Number.MIN_VALUE`** representa el menor valor positivo numérico representable en JavaScript.

{{js_property_attributes(0, 0, 0)}}

## Descripción

La propiedad `MIN_VALUE` es el número más cercano a 0, no el más negativo, que JavaScript puede representar.

`MIN_VALUE` tiene un valor aproximado de `5e-324`. Los valores menores que `MIN_VALUE` ("subdesbordamiento de valores") son convertidos a 0.

Ya que `MIN_VALUE` es una propiedad estática de {{jsxref("Number")}}, debes utilizarla como `Number.MIN_VALUE`, más que como una propiedad del objeto {{jsxref("Number")}} que has creado.

## Ejemplos

### Usando `MIN_VALUE`

El siguiente código divide dos valores numéricos. Si el resultado es mayor o igual a `MIN_VALUE`, se ejecuta la función `func1`, si no, se ejecuta la función `func2`.

```js
if (num1 / num2 >= Number.MIN_VALUE) {
  func1();
} else {
  func2();
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Number.MAX_VALUE")}}
