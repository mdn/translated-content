---
title: Array.prototype.fill()
slug: Web/JavaScript/Reference/Global_Objects/Array/fill
---

{{JSRef}}

El método **`fill()`** cambia todos los elementos en un arreglo por un valor estático, desde el índice start (por defecto 0) hasta el índice end (por defecto `array.length`). Devuelve el arreglo modificado.

{{EmbedInteractiveExample("pages/js/array-fill.html")}}

## Sintaxis

```
arr.fill(value[, start = 0[, end = this.length]])
```

### Parámetros

- `value`
  - : Valor con el que se va a rellenar el arreglo. (Nótese que todos los elementos en el arreglo tendrán este mismo valor).
- `start` {{optional_inline}}
  - : Índice inicial, por defecto 0.
- `end` {{optional_inline}}
  - : Índice final, por defecto `this.length`.

### Valor de retorno

El arreglo modificado, rellenado con `valor`.

## Descripción

- Si `start` es negativo, se interpreta como `array.length + start`.
- Si `end` es negativo, se interpreta como `array.length + end`.
- `fill` es genérico de forma intencional: no requiere que su valor `this` sea un objeto `Array`.
- `fill` es un método mutador: modifica el arreglo sobre el que se invoca; no devuelve una copia de éste.
- Si el primer parámetro es un objeto, copia su referencia y rellena el arreglo con referencias a dicho objeto.

## Ejemplos

```js
[1, 2, 3].fill(4); // [4, 4, 4]
[1, 2, 3].fill(4, 1); // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2); // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1); // [1, 2, 3]
[1, 2, 3].fill(4, 3, 3); // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2); // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN); // [1, 2, 3]
[1, 2, 3].fill(4, 3, 5); // [1, 2, 3]
Array(3).fill(4); // [4, 4, 4]
[].fill.call({ length: 3 }, 4); // {0: 4, 1: 4, 2: 4, length: 3}

// Objects by reference.
var arr = Array(3).fill({}); // [{}, {}, {}];
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
```

## Polyfill

```js
if (!Array.prototype.fill) {
  Object.defineProperty(Array.prototype, "fill", {
    value: function (value) {
      // Pasos 1-2.
      if (this == null) {
        throw new TypeError("esto es nulo o no definido");
      }

      var O = Object(this);

      // Pasos 3-5.
      var len = O.length >>> 0;

      // Pasos 6-7.
      var start = arguments[1];
      var relativeStart = start >> 0;

      // Paso 8.
      var k =
        relativeStart < 0
          ? Math.max(len + relativeStart, 0)
          : Math.min(relativeStart, len);

      // Pasos 9-10.
      var end = arguments[2];
      var relativeEnd = end === undefined ? len : end >> 0;

      // Paso 11.
      var final =
        relativeEnd < 0
          ? Math.max(len + relativeEnd, 0)
          : Math.min(relativeEnd, len);

      // Paso 12.
      while (k < final) {
        O[k] = value;
        k++;
      }

      // Paso 13.
      return O;
    },
  });
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Array")}}
- {{jsxref("TypedArray.prototype.fill()")}}
