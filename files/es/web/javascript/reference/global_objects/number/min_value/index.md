---
title: Number.MIN_VALUE
slug: Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE
translation_of: Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE
original_slug: Web/JavaScript/Referencia/Objetos_globales/Number/MIN_VALUE
---
{{JSRef}}

La propiedad **`Number.MIN_VALUE`** representa el menor valor positivo numérico representable en JavaScript.

{{js_property_attributes(0, 0, 0)}}

## Descripción

La propiedad `MIN_VALUE` es el número más cercano a 0, no el más negativo, que JavaScript puede representar.

`MIN_VALUE` tiene un valor aproximado de `5e-324`. Los valores menores que `MIN_VALUE` (“subdesbordamiento de valores”) son convertidos a 0.

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

| Specification                                                                                | Status                       | Comment                                            |
| -------------------------------------------------------------------------------------------- | ---------------------------- | -------------------------------------------------- |
| {{SpecName('ES1')}}                                                                     | {{Spec2('ES1')}}         | Initial definition. Implemented in JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.7.3.3', 'Number.MIN_VALUE')}}                 | {{Spec2('ES5.1')}}     |                                                    |
| {{SpecName('ES6', '#sec-number.min_value', 'Number.MIN_VALUE')}}         | {{Spec2('ES6')}}         |                                                    |
| {{SpecName('ESDraft', '#sec-number.min_value', 'Number.MIN_VALUE')}} | {{Spec2('ESDraft')}} |                                                    |

## Compatibilidad de navegador

{{Compat("javascript.builtins.Number.MIN_VALUE")}}

## Ver también

- {{jsxref("Number.MAX_VALUE")}}
