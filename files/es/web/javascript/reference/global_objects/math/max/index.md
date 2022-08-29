---
title: Math.max()
slug: Web/JavaScript/Reference/Global_Objects/Math/max
translation_of: Web/JavaScript/Reference/Global_Objects/Math/max
---
{{JSRef}}

La función **`Math.max()`** retorna el mayor de cero o más números dados como parámetros de entrada, o {{jsxref("NaN")}} si cualquier parámetro no es un número y no puede ser convertido en uno.

{{EmbedInteractiveExample("pages/js/math-max.html")}}

## Sintaxis

```js
Math.max()
Math.max(valor0)
Math.max(valor0, valor1)
Math.max(valor0, valor1, /* ... ,*/ valorN)
```

### Parámetros

- `valor1`, `valor2`, ... , `valorN`
  - : Cero o más números entre los cuales el mayor valor será seleccionado y retornado.

### Valor retornado

El mayor de los números dados. Si uno o más de los parámetros no puede ser convertido a
un número, retorna {{jsxref("NaN")}}. El resultado es
\-{{jsxref("Infinity")}} si no se proveen parámetros.

## Descripción

Como `max()` es un método estático de `Math`, siempre se usa
como `Math.max()`, en lugar de como un método de un objeto `Math`
creado (`Math` no es un constructor).

Si no se proveen argumentos, el resultado es -{{jsxref("Infinity")}}.

Si al menos uno de los argumentos no puede ser convertido a número, el resultado es
{{jsxref("NaN")}}.

## Ejemplos

### Usando Math.max()

```js
Math.max(10, 20);   //  20
Math.max(-10, -20); // -10
Math.max(-10, 20);  //  20
```

### Obteniendo el elemento máximo de un arreglo

Se puede usar {{jsxref("Array.prototype.reduce", "Array.reduce()")}} para encontrar el
elemento máximo en un arreglo numérico, comparando cada valor:

```js
var arr = [1,2,3];
var max = arr.reduce(function(a, b) {
    return Math.max(a, b);
}, -Infinity);
```

La siguiente función usa {{jsxref("Function.prototype.apply()")}} para obtener el máximo
de un arreglo. `getMaxOfArray([1, 2, 3])` es equivalente a
`Math.max(1, 2, 3)`, pero se puede usar `getMaxOfArray()` en
arreglos construidos de manera programada. Esto debería ser usado solamente para arreglos con
relativamente pocos elementos.

```js
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
```

La nueva [sintaxis extendida](/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
es una manera más corta de escribir la solución con `apply` para obtener
el máximo de un arreglo:

```js
var arr = [1, 2, 3];
var max = Math.max(...arr);
```

Sin embargo, tanto la sintaxis extendida (`...`) como `apply` fallarán o retornarán
un resultado incorrecto si el arreglo tiene demasiados elementos, porque intentan pasar el arreglo
de elementos como parámetros de función.
Ver [apply y funciones incorporadas](/es/docs/Web/JavaScript/Reference/Global_Objects/Function/apply#apply_and_built-in_functions)
para más detalles. La solución con `reduce` no tiene este problema.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Math.min()")}}
