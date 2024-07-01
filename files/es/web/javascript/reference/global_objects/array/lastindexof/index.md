---
title: Array.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
---

{{JSRef}}

El método **`lastIndexOf()`** devuelve el último índice en el que un cierto elemento puede encontrarse en el arreglo, ó `-1` si el elemento no se encontrara. El arreglo es recorrido en sentido contrario, empezando por el índice `fromIndex`.

{{EmbedInteractiveExample("pages/js/array-lastindexof.html")}}

## Sintaxis

```
arr.lastIndexOf(searchElement) arr.lastIndexOf(searchElement, fromIndex)
```

### Parámetros

- `searchElement`
  - : Elemento a encontrar en el arreglo.
- `fromIndex` {{optional_inline}}
  - : El índice en el que empieza la búsqueda en sentido contrario. Por defecto la longitud del arreglo menos uno (`arr.length - 1`), es decir, todo el arreglo será recorrido. Si el índice es mayor o igual que la longitud del arreglo, todo el arreglo será recorrido. Si es un valor negatigo, se usará como inicio del desplazamiento el final del arreglo. Darse cuenta que aún cuando el índice es negativo, el arreglo todavía será recorrido desde atrás hacia delante. Si el índice calculado es menor de `0`, se devolverá `-1`, es decir, el arreglo no será recorrido.

### Valor de retorno

El último índice del elemento en el arreglo; `-1` si no se encuentra.

## Descripción

`lastIndexOf` compara `searchElement` con los elementos del arreglo usando [igualdad estricta](/es/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Using_the_Equality_Operators) (el mismo método es usado para la ===, operador triple igualdad).

## Ejemplos

### Usando `lastIndexOf`

El siguiente ejemplo usa `lastIndexOf` para encontrar valores en un arreglo.

```js
var array = [2, 5, 9, 2];
array.lastIndexOf(2); // 3
array.lastIndexOf(7); // -1
array.lastIndexOf(2, 3); // 3
array.lastIndexOf(2, 2); // 0
array.lastIndexOf(2, -2); // 0
array.lastIndexOf(2, -1); // 3
```

### Encontrar todas las apariciones de un elemento

El siguiente ejemplo uses `lastIndexOf` encuentra todos los índices de un elemento en un arreglo dado, usando {{jsxref("Array.prototype.push", "push")}} añadiéndolos a otro arreglo como elementos encontrados.

```js
var indices = [];
var array = ["a", "b", "a", "c", "a", "d"];
var element = "a";
var idx = array.lastIndexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = idx > 0 ? array.lastIndexOf(element, idx - 1) : -1;
}

console.log(indices);
// [4, 2, 0]
```

Darse cuenta que en este caso tenemos que tratar `idx == 0` de forma separada por que el elemento siempre será encontrado independiemente del valor del parámetro `fromIndex` si este es el primer elemento del arreglo. Diferente de como se trata en el método {{jsxref("Array.prototype.indexOf", "indexOf")}}.

## Polyfill

`lastIndexOf` fue añadido al estándar ECMA-262 en la 5ª edición; por tanto puede que no este presente en otras implementaciones del estándar. Puedes solucionarlo escribiendo el siguiente código al principio de tus scripts, pudiendo usar `lastIndexOf` en implementaciones que no tiene soporte de forma nativa. Este algoritmo es exactamente el especificado en ECMA-262, 5ª edición, suponiendo que {{jsxref("Object")}}, {{jsxref("TypeError")}}, {{jsxref("Number")}}, {{jsxref("Math.floor")}}, {{jsxref("Math.abs")}}, y {{jsxref("Math.min")}} tienen sus valores originales.

```js
// Pasos de producción de ECMA-262, Edición 5, 15.4.4.15
// Referencia: http://es5.github.io/#x15.4.4.15
if (!Array.prototype.lastIndexOf) {
  Array.prototype.lastIndexOf = function (searchElement /*, fromIndex*/) {
    "use strict";

    if (this === void 0 || this === null) {
      throw new TypeError();
    }

    var n,
      k,
      t = Object(this),
      len = t.length >>> 0;
    if (len === 0) {
      return -1;
    }

    n = len - 1;
    if (arguments.length > 1) {
      n = Number(arguments[1]);
      if (n != n) {
        n = 0;
      } else if (n != 0 && n != 1 / 0 && n != -(1 / 0)) {
        n = (n > 0 || -1) * Math.floor(Math.abs(n));
      }
    }

    for (k = n >= 0 ? Math.min(n, len - 1) : len - Math.abs(n); k >= 0; k--) {
      if (k in t && t[k] === searchElement) {
        return k;
      }
    }
    return -1;
  };
}
```

De nuevo, darse cuenta que esta implementación tiene como objeto la completa compatibilidad con `lastIndexOf` en Firefox y el motor SpiderMonkey JavaScript, en particular en varios casos que son posiblemente extremos. Si pretendes usar esta funcionalidad en aplicaciones reales, es posible que puedes calcular `from` con código menos complejo si ignoras estos casos.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
