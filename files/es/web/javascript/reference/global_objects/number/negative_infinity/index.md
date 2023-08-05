---
title: Number.NEGATIVE_INFINITY
slug: Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY
---

{{JSRef("Objetos_globales", "Number")}}

## Resumen

La propiedad **`Number.NEGATIVE_INFINITY`** representa el valor del infinito negativo.

No se tiene que crear un objeto {{jsxref("Number")}} para acceder a esta propiedad estática (use `Number.NEGATIVE_INFINITY`).

{{js_property_attributes(0,0,0)}}

## Descripción

El valor `Number.NEGATIVE_INFINITY` es el mismo que el valor negativo de la propiedad del objeto global {{jsxref( "Infinity")}}**`.`**

Este valor tiene un comportamiento ligeramente diferente que el del infinito matematico:

- Cualquier valor positivo, incluyendo `POSITIVE_INFINITY`, multiplicado por `NEGATIVE_INFINITY` da como resultado `NEGATIVE_INFINITY`.
- Cualquier valor negativo, incluyendo `NEGATIVE_INFINITY`, multiplicado por `NEGATIVE_INFINITY` da como resultado `POSITIVE_INFINITY`.
- Cero multiplicado por `NEGATIVE_INFINITY` da como resultado `NaN`.
- NaN multiplicado por `NEGATIVE_INFINITY` da como resultado `NaN`.
- `NEGATIVE_INFINITY`, divido por cualquier valor negativo excepto `NEGATIVE_INFINITY`, da como resultado `POSITIVE_INFINITY`.
- `NEGATIVE_INFINITY`, divido por cualquier valor positivo excepto `POSITIVE_INFINITY`, da como resultado `NEGATIVE_INFINITY`.
- `NEGATIVE_INFINITY`, divido por `NEGATIVE_INFINITY` o por `POSITIVE_INFINITY`, da como resultado `NaN`.
- Cualquier numero divido por `NEGATIVE_INFINITY` da como resultado cero.

Muchos métodos JavaScript (tales como el constructor del objeto `Number`, `parseFloat`, y `parseInt`) retornan `NaN` si el valor especifico en el párametro es significativamente menor a `Number.MIN_VALUE`.

Podrías utilizar la propiedad `Number.NEGATIVE_INFINITY` para indicar una condición de error que retorne un numero finito en caso de que esto suceda. Note, sin embargo, que [`isFinite`](/es/docs/Referencia_de_JavaScript_1.5/Funciones_globales/isFinite) seria mas apropiado en estos casos.

## Example

En el siguiente ejemplo, a la variable `smallNumber` se le asigna un valor mucho mas pequeño al valor minimo. Cuando la sentencia `if` es ejecutada, `smallNumber` tiene el valor "`-Infinity`", por lo cual a `smallNumber` le es asignado un valor finito mas manejable antes de continuar.

```js
var smallNumber = -Number.MAX_VALUE * 2;

if (smallNumber === Number.NEGATIVE_INFINITY) {
  smallNumber = returnFinite();
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Number.POSITIVE_INFINITY")}}
- {{jsxref( "Infinity")}}
- {{jsxref("isFinite")}}
