---
title: Array.prototype.reduce()
slug: Web/JavaScript/Reference/Global_Objects/Array/reduce
---

{{JSRef}}

El método **`reduce()`** ejecuta una función **reductora** sobre cada elemento de un array, devolviendo como resultado un único valor.

{{EmbedInteractiveExample("pages/js/array-reduce.html")}}

La función **reductora** recibe cuatro argumentos:

1. Acumulador (`acc`)
2. Valor Actual (`cur`)
3. Índice Actual (_`idx`_)
4. Array (_`src`_)

El valor devuelto de la función **reductora** se asigna al acumulador, cuyo valor se recuerda en cada iteración de la matriz y, en última instancia, se convierte en el valor final, único y resultante.

## Sintaxis

```
arr.reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial])
```

### Parámetros

- `callback`
  - : Función a ejecutar sobre cada elemento del array (excepto para el primero, si no se proporciona `valorInicial`), que recibe cuatro parámetros:_ `acumulador`
    _ : El acumulador acumula el valor devuelto por la función callback. Es el valor acumulado devuelto en la última invocación de callback, o el `valorInicial`, si se proveyó. (Ver a continuación).
    - `valorActual`
      - : El elemento actual que está siendo procesado en el array.
    - `índice` {{optional_inline}}
      - : El índice del elemento actual que está siendo procesado en el array. Empieza desde el índice 0 si se provee `valorInicial`. En caso contrario, comienza desde el índice 1.
    - `array` {{optional_inline}}
      - : El array sobre el cual se llamó el método `reduce()`.
- `valorInicial` {{optional_inline}}
  - : Un valor a usar como primer argumento en la primera llamada de la función _`callback`_. Si no se proporciona el _`valorInicial`_, el primer elemento del array será utilizado y saltado. Llamando a `reduce()` sobre un array vacío sin un _`valorInicial`_ lanzará un {{jsxref("TypeError")}}.

## Descripción

El método `reduce()` ejecuta `callback` una vez por cada elemento presente en el array, excluyendo los huecos del mismo, recibe cuatro argumentos:

- `valorAnterior`
- `valorActual`
- `indiceActual`
- `array`

La primera vez que se llama la función, `valorAnterior` y `valorActual` pueden tener uno de dos valores. Si se proveyó un `valorInicial` al llamar a `reduce`, entonces `valorAnterior` será igual al `valorInicial` y `valorActual` será igual al primer elemento del array. Si no se proveyó un `valorInicial`, entonces `valorAnterior` será igual al primer valor en el `array` y `valorActual` será el segundo.

Si el `array` está vacío y no se proveyó un `valorInicial` lanzará un {{jsxref("Global_Objects/TypeError", "TypeError")}}. Si el `array` tiene un sólo elemento (sin importar la posición) y no se proveyó un `valorInicial`, o si se proveyó un `valorInicial` pero el arreglo está vacío, se retornará ese único valor sin llamar a la `función`.

Suponga que ocurre el siguiente uso de `reduce`:

```js
[0, 1, 2, 3, 4].reduce(function (valorAnterior, valorActual, indice, vector) {
  return valorAnterior + valorActual;
});

// Primera llamada
(valorAnterior = 0), (valorActual = 1), (indice = 1);

// Segunda llamada
(valorAnterior = 1), (valorActual = 2), (indice = 2);

// Tercera llamada
(valorAnterior = 3), (valorActual = 3), (indice = 3);

// Cuarta llamada
(valorAnterior = 6), (valorActual = 4), (indice = 4);

// el array sobre el que se llama a reduce siempre es el objeto [0,1,2,3,4]

// Valor Devuelto: 10
```

Y si proporcionas un `valorInicial`, el resultado sería como este:

```js
[0, 1, 2, 3, 4].reduce(function (valorAnterior, valorActual, indice, vector) {
  return valorAnterior + valorActual;
}, 10);

// Primera llamada
(valorAnterior = 10), (valorActual = 0), (indice = 0);

// Segunda llamada
(valorAnterior = 10), (valorActual = 1), (indice = 1);

// Tercera llamada
(valorAnterior = 11), (valorActual = 2), (indice = 2);

// Cuarta llamada
(valorAnterior = 13), (valorActual = 3), (indice = 3);

// Quinta llamada
(valorAnterior = 16), (valorActual = 4), (indice = 4);

// el array sobre el que se llama a reduce siempre es el objeto [0,1,2,3,4]

// Valor Devuelto: 20
```

## Polyfill

> **Nota:** **Polyfill** se refiere a unas líneas de código o un plugin que permite "tener" (en realidad se simulan de alguna otra manera) las nuevas funcionalidades de HTML5 en aquellos navegadores que nativamente no lo soportan. Consigue que, en adelante, el código sea transparente para el programador, como si el navegador soportase la funcionalidad nativamente.

`reduce` es una extensión de JavaScript al estándar ECMA-262; como tal puede que no esté presente en otras implementaciones del estándar. Puedes trabajar con ésto insertando el siguiente código al comienzo de tus scripts, permitiendo el uso de `reduce` en implementaciones de ECMA-262 que no lo implementan de modo nativo. Este algoritmo es exactamente el mismo usando en Firefox y SpiderMonkey.

```js
if (!Array.prototype.reduce) {
  Array.prototype.reduce = function (fun /*, inicial*/) {
    var longitud = this.length;
    if (typeof fun != "function") throw new TypeError();

    // no se devuelve ningún valor si no hay valor inicial y el array está vacío
    if (longitud == 0 && arguments.length == 1) throw new TypeError();

    var indice = 0;
    if (arguments.length >= 2) {
      var rv = arguments[1];
    } else {
      do {
        if (indice in this) {
          rv = this[indice++];
          break;
        }

        // si el array no contiene valores, no existe valor inicial a devolver
        if (++indice >= longitud) throw new TypeError();
      } while (true);
    }

    for (; indice < longitud; indice++) {
      if (indice in this) rv = fun.call(null, rv, this[indice], indice, this);
    }

    return rv;
  };
}
```

## Ejemplos

### Ejemplo: Sumar todos los valores de un `array`

```js
var total = [0, 1, 2, 3].reduce(function (a, b) {
  return a + b;
});
// total == 6
```

### Ejemplo: Integrar un `array` a partir de varios `arrays`

```js
var integrado = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce(function (a, b) {
  return a.concat(b);
});
// integrado es [0, 1, 2, 3, 4, 5]
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Array.prototype.reduceRight()")}}
