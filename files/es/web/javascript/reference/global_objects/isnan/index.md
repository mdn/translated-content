---
title: isNaN
slug: Web/JavaScript/Reference/Global_Objects/isNaN
---

{{jsSidebar("Objects")}}

La función **`isNaN()`** determina cuando el valor es {{jsxref("NaN")}} o no. Tenga presente que la coerción dentro de la función `isNaN` tiene reglas [interesantes](#description); tal vez quieras usar de forma alternativa **[`Number.isNaN()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN)**, como fue definido en ECMAScript 2015.

{{InteractiveExample("JavaScript Demo: Standard built-in objects - isNaN()")}}

```js interactive-example
function milliseconds(x) {
  if (isNaN(x)) {
    return "Not a Number!";
  }
  return x * 1000;
}

console.log(milliseconds("100F"));
// Expected output: "Not a Number!"

console.log(milliseconds("0.0314E+2"));
// Expected output: 3140
```

## Sintaxis

```
isNaN(valor)
```

### Parámetros

- **`valor`**
  - : El valor a probar o evaluar.

### Valor de retorno

**`true`** si es valor dado es {{jsxref("NaN")}}, de otro modo, **`false`**.

## Descripción

`isNaN` es una función de alto nivel y no está asociada a ningún objeto.

`isNaN` intenta convertir el parámetro pasado a un número. Si el parámetro no se puede convertir, devuelve true; en caso contrario, devuelve false.

Esta función es útil ya que el valor {{jsxref("Objetos_globales/NaN", "NaN")}} no puede se probado correctamente con operadores de igualdad. `x == NaN` y `x === NaN` son siempre false, sin importar lo que sea `x`, incluso si `x` es `NaN`. Por ejemplo, tanto `1 == NaN` como `NaN == NaN` devuelven `false`.

### Ejemplos

```js
isNaN(NaN); //devuelve true
isNaN("string"); //devuelve true
isNaN("12"); //devuelve false
isNaN(12); //devuelve false
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

### Vea También

- {{jsxref("Objetos_globales/NaN", "NaN")}}
- {{jsxref("Number.isNaN()")}}
