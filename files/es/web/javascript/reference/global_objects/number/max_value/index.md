---
title: Number.MAX_VALUE
slug: Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE
---

{{JSRef}}La propiedad **`Number.MAX_VALUE`** representa el valor numérico positivo máximo representable en JavaScript.{{js_property_attributes(0, 0, 0)}}

## Descripción

La propiedad `MAX_VALUE` tiene un valor aproximado a `1.79E+308`. Si el valor es mayor será representado como _`Infinity`_.

Dado que `MAX_VALUE` es una propiedad estática de {{jsxref("Number")}}, siempre ha de usarse como `Number.MAX_VALUE`, y no como propiedad del objeto que has creado.

## Ejemplos

### Usando `MAX_VALUE`

La función _verificarValorMaximo_ recibe un número como parámetro que se compara con _Number.MAX_VALUE._ Si el número es menor se imprime por consola _"El número no es infinito"_, de ser mayor _"El número es infinito"_.

```js
var numero1 = 1.79e307;
var numero2 = 1.79e310;

function verificarValorMaximo(num) {
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

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Number.MIN_VALUE")}}
