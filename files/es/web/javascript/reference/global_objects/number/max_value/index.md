---
title: Number.MAX_VALUE
slug: Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE
translation_of: Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE
original_slug: Web/JavaScript/Referencia/Objetos_globales/Number/MAX_VALUE
---
{{JSRef}}La propiedad **`Number.MAX_VALUE`** representa el valor numérico positivo máximo representable en JavaScript.{{js_property_attributes(0, 0, 0)}}

## Descripción

La propiedad `MAX_VALUE` tiene un valor aproximado a `1.79E+308`. Si el valor es mayor será representado como _`Infinity`_.

Dado que `MAX_VALUE` es una propiedad estática de {{jsxref("Number")}}, siempre ha de usarse como `Number.MAX_VALUE`, y no como propiedad del objeto que has creado.

## Ejemplos

### Usando `MAX_VALUE`

La función _verificarValorMaximo_ recibe un número como parámetro que se compara con _Number.MAX_VALUE._ Si el número es menor se imprime por consola _"El número no es infinito"_, de ser mayor _"El número es infinito"_.

```js
var numero1 = 1.79E+307;
var numero2 = 1.79E+310;

function verificarValorMaximo(num){

  if (num <= Number.MAX_VALUE) {
    console.log("El número no es infinito");
  } else {
    console.log("El número es infinito");
  }

}

verificarValorMaximo(numero1); // El número no es infinito
verificarValorMaximo(numero2); // El número es infinito
```

## Especificaciones

| Specification                                                                                | Status                       | Comment                                            |
| -------------------------------------------------------------------------------------------- | ---------------------------- | -------------------------------------------------- |
| {{SpecName('ES1')}}                                                                     | {{Spec2('ES1')}}         | Initial definition. Implemented in JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.7.3.2', 'Number.MAX_VALUE')}}                 | {{Spec2('ES5.1')}}     |                                                    |
| {{SpecName('ES6', '#sec-number.max_value', 'Number.MAX_VALUE')}}         | {{Spec2('ES6')}}         |                                                    |
| {{SpecName('ESDraft', '#sec-number.max_value', 'Number.MAX_VALUE')}} | {{Spec2('ESDraft')}} |                                                    |

## Compatibilidad

{{Compat("javascript.builtins.Number.MAX_VALUE")}}

## Ver también

- {{jsxref("Number.MIN_VALUE")}}
