---
title: Array.of()
slug: Web/JavaScript/Reference/Global_Objects/Array/of
---

{{JSRef}}

El método **`Array.of()`** crea una nueva instancia `Array` con un número variable de elementos pasados como argumento, independientemente del número o del tipo.

La diferencia entre **`Array.of()`** y el constructor **`Array`** reside en como maneja los parámetros de tipo entero: **`Array.of(7)`** crea un array con un solo elemento, `7`, mientras que **`Array(7)`** crea un array vacío con una propiedad `length` de 7 (**Nota:** esto implica un array de 7 ranuras vacías, no ranuras con valores `undefined`).

```js
Array.of(7); // [7]
Array.of(1, 2, 3); // [1, 2, 3]

Array(7); // [ , , , , , , ]
Array(1, 2, 3); // [1, 2, 3]
```

## Sintaxis

```
Array.of(elemento0[, elemento1[, ...[, elementoN]]])
```

### Parámetros

- `elementoN`
  - : Valores con los que se creará el Array en su respectivo indice.

### Valor de retorno

Una nueva instancia de {{jsxref("Array")}}.

## Descripción

Esta función es parte del estándar ECMAScript 2015. Para obtener más información, consulte [`Array.of` y `Array.from` proposal](https://gist.github.com/rwaldron/1074126) y [`Array.of` polyfill](https://gist.github.com/rwaldron/3186576).

## Ejemplos

```js
Array.of(1); // [1]
Array.of(1, 2, 3); // [1, 2, 3]
Array.of(undefined); // [undefined]
```

## Polyfill

Escribiendo el siguiente código antes que cualquier otro, podemos emular la funcionalidad de `Array.of()` si es que ésta no está disponible de forma nativa.

```js
if (!Array.of) {
  Array.of = function () {
    return Array.prototype.slice.call(arguments);
  };
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Array")}}
- {{jsxref("Array.from()")}}
- {{jsxref("TypedArray.of()")}}
