---
title: Number.POSITIVE_INFINITY
slug: Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY
---

{{JSRef("Objetos_globales", "Number")}}

## Resumen

La propiedad **`Number.POSITIVE_INFINITY`** representa el infinito positivo.

No se tiene que crear un objeto {{jsxref("Number")}} para acceder a esta propiedad estática (use `Number.POSITIVE_INFINITY`).

{{js_property_attributes(0,0,0)}}

## Descripción

El valor de `Number.POSITIVE_INFINITY` es el mismo valor de la propiedad {{jsxref( "Infinity")}} del objeto global.

Este valor tiene un comportamiento ligeramente diferente al infinio matemático:

- Cualquier valor positivo, incluyendo `POSITIVE_INFINITY`, multiplicado por `POSITIVE_INFINITY` da como resultado `POSITIVE_INFINITY`.
- Cualquier valor negativo, incluyendo `NEGATIVE_INFINITY`, multiplicado por `POSITIVE_INFINITY` da como resultado `NEGATIVE_INFINITY`.
- Cero multiplicado por `POSITIVE_INFINITY` da como resultado NaN.
- NaN multiplicado por `POSITIVE_INFINITY` da como resultado NaN.
- `POSITIVE_INFINITY`, dividido por cualquier valor negativo excepto `NEGATIVE_INFINITY`, da como resultado `NEGATIVE_INFINITY`.
- `POSITIVE_INFINITY`, divido por cualquier valor positivo excepto `POSITIVE_INFINITY`, da como resultado `POSITIVE_INFINITY`.
- `POSITIVE_INFINITY`, divido por `INFINITY` o por `POSITIVE_INFINITY`, da como resultado NaN.
- Cualquier numero divido por `POSITIVE_INFINITY` da como resultado cero.

Muchos métodos de JavaScript (tales como el constructor del objeto `Number`, `parseFloat` y `parseInt`) retornan `NaN` si el valor especificado en el parámetro es signficativamente mayor a `Number.MAX_VALUE`.

Podrías utilizar la propiedad `Number.POSITIVE_INFINITY` para indicar una condición de error que retorne un numero finito en caso de que esto suceda. Note, sin embargo, que [`isFinite`](/es/docs/Referencia_de_JavaScript_1.5/Funciones_globales/isFinite) seria mas apropiado en estos casos.

## Ejemplo

En el siguiente ejemplo, a la variable `bigNumber` se le asigna un valor mucho mayor al valor máximo. Cuando la sentencia `if` es ejecutada, `bigNumber` tiene el valor "`Infinity`", por lo cual a `bigNumber` le es asignado un valor mas manejable antes de continuar.

```js
var bigNumber = Number.MAX_VALUE * 2;
if (bigNumber === Number.POSITIVE_INFINITY) {
  bigNumber = returnFinite();
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Number.NEGATIVE_INFINITY")}}
- {{jsxref("Infinity")}}
- {{jsxref("isFinite")}}
