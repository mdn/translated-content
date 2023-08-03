---
title: Array.prototype.copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/Array/copyWithin
---

{{JSRef}}

El método **`copyWithin()`** transfiere una copia plana de una sección a otra dentro del mismo array ( o contexto similar ), sin modificar su propiedad length y lo devuelve.

{{EmbedInteractiveExample("pages/js/array-copywithin.html")}}

## Sintaxis

```
arr.copyWithin(target)
arr.copyWithin(target, start)
arr.copyWithin(target, start, end)
```

### Parámetros

- `target`

  - : Índice basado en cero que establece en dónde dentro de la secuencia original se insertará la secuencia copiada. Si es negativo, `target` se contará desde el final. -1 es el último elemento, -2 el penúltimo, etc.

    Si `target` es igual o mayor que `arr.length`, no se copiará nada. Si `target` es posicionado después de `start`, la secuencia copiada se recortará para que encaje con `arr.length`.

- `start` {{optional_inline}}

  - : Índice basado en cero a partir del cual comenzar la copia de elementos. Si es negativo, start comenzará a contarse desde el final.

    Si `start` es omitido, `copyWithin` copiará desde el principio (por defecto es 0).

- `end` {{optional_inline}}

  - : Índice basado en cero hasta el cual se copiarán los elementos. `copyWithin` copiará hasta pero sin incluir el end. Si es negativo, `end` será contado desde el final.

    Si `end` es omitido, `copyWithin` copiará hasta el final ( por defecto es `arr.length`).

### Valor de retorno

El array modificado.

## Descripción

`copyWithin` es similar a la función `memmove` de C y C++ , siendo altamente eficiente para desplazar los datos en un {{jsxref("Array")}} o {{jsxref("TypedArray")}}. La secuencia de datos es leída y escrita en una sola operación; la escritura será correcta incluso en el caso de que la zona de lectura y el destino de escritura se solapen.

La función `copyWithin` es intencionadamente _genérica_, permitiendo que se aplique en contextos en los cuales `this` no sea necesariamente un objeto {{jsxref("Array")}}.

El método `copyWithin` es un método mutador. No altera la propiedad `length` de `this`, pero cambiará su contenido y creará nuevas propiedades si es necesario.

## Ejemplos

En los siguientes ejemplos céntrate en los siguientes aspectos:

- El tamaño del contexto en el que se aplica no cambia. En los ejemplos el array parte con cinco elementos y siempre mantiene cinco elementos.
- `start` y `end` trabajan juntos para decidir qué se copiará. Siempre tienen valor por defecto aunque omitas `end`, o `start` y `end`.
- `target` trabaja solo y debe especificarse. Indica el lugar para en el que la copia comenzará a sobreescribir datos existentes. Debe estar dentro de los límites en el contexto que se aplique.
- escribir `arr.copyWithin( n )` es lo mismo que `arr.copyWithin( n, 0, arr.length)`

```js
[1, 2, 3, 4, 5].copyWithin(-2);
// [1, 2, 3, 1, 2]

[1, 2, 3, 4, 5].copyWithin(0, 3);
// [4, 5, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, 3, 4);
// [4, 2, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(-2, -3, -1);
// [1, 2, 3, 3, 4]
```

A continuación se aplica en el contexto de un objeto **array-like**:

- El objeto contextual tiene alguna propiedad con clave numérica, y una propiedad length. Esto es suficiente para considerarse array-like.
- observa que **no** se modifica la propiedad length, a pesar de que se ha introducido una nueva propiedad con clave 0. A esto ser refiere cuando se dice que `copyWithin` es un método **mutador**. ¿Por qué se creó esta nueva propiedad? porque mediante el argumento target se especificó que la copia debía comenzar a partir de un índice que ¡¡no existía!!

```js
[].copyWithin.call({ length: 5, 3: 1 }, 0, 3);
// {0: 1, 3: 1, length: 5}
```

Lo que sigue ahora son las subclases tipadas de Array en ES6:

```js
// Arrays tipados en ES6. Son subclases de Array
var i32a = new Int32Array([1, 2, 3, 4, 5]);

i32a.copyWithin(0, 2);
// Int32Array [3, 4, 5, 4, 5]

// En plataformas que todavía no siguen la norma ES6:
[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
// Int32Array [4, 2, 3, 4, 5]
```

## Polyfill

```js
if (!Array.prototype.copyWithin) {
  Array.prototype.copyWithin =
    // Array: Number[, Number[, Number]]
    function copyWithin(target, start, stop) {
      var positiveT = target >= 0,
        positiveS = (start = start | 0) >= 0,
        length = this.length,
        zero = 0,
        r = function () {
          return (+new Date() * Math.random()).toString(36);
        },
        delimiter = "\b" + r() + "-" + r() + "-" + r() + "\b",
        hold;

      stop = stop || this.length;
      hold = this.slice
        .apply(
          this,
          positiveT ? [start, stop] : positiveS ? [start, -target] : [start],
        )
        .join(delimiter);

      return (
        this.splice.apply(
          this,
          positiveT
            ? [target, stop - start, hold]
            : positiveS
            ? [target, stop, hold]
            : [target, start, hold],
        ),
        this.join(delimiter).split(delimiter).slice(zero, length)
      );
    };
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Array")}}
