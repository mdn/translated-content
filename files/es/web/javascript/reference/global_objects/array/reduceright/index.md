---
title: Array.prototype.reduceRight()
slug: Web/JavaScript/Reference/Global_Objects/Array/reduceRight
---

{{JSRef("Objetos_globales", "Array")}}

## Resumen

Aplica una función simultáneamente contra un acumulador y cada elemento de un array (de derecha a izquierda) para reducirlo a un único valor.

## Sintaxis

```
array.reduceRight(
funcion[,
valorInicial])
```

### Parámetros

- `callback`
  - : Función a ejecutar para cada valor del array.
- `initialValue`
  - : Objeto a usar como primer argumento en la primera llamada de la `funcion`.

### Descripción

`reduceRight` ejecuta la `funcion` una vez para cada elemento presente en el array, excluyendo los huecos del mismo, recibiendo cuatro argumentos: el valor inicial (o valor de la llamada previa de `funcion`), el valor del elemento actual, el índice actual y el array sobre el que ocurre la iteración.

La llamada a la `funcion` de reduceRight sería similar a esto:

```js
.reduceRight(function(valorPrevio, valorActual, indice, array){
  // ...
})
```

La primera vez que se llama a la función, el `valorPrevio` y el `valorActual` puede ser uno de los dos valores. Si se incluye un `valorInicial` en la llamada a `reduceRight`, entonces el `valorPrevio` será igual al `valorInicial` y el `valorActual` será igual al último valor del array. Si no se incluye ningún `valorInicial`, entonces el `valorPrevio` será igual al último valor del array y el `valorActual` será igual al penúltimo valor.

Algún ejemplo de la ejecución de la función paso a paso sería similar a esto:

```js
[0, 1, 2, 3, 4].reduceRight(function (valorPrevio, valorActual, indice, array) {
  return valorPrevio + valorActual;
});

// First call
(valorPrevio = 4), (valorActual = 3), (indice = 3);

// Second call
(valorPrevio = 7), (valorActual = 2), (indice = 2);

// Third call
(valorPrevio = 9), (valorActual = 1), (indice = 1);

// Fourth call
(valorPrevio = 10), (valorActual = 0), (indice = 0);

// el array sobre el que se llama a reduceRight siempre es el objeto [0,1,2,3,4]

// Valor Devuelto: 10
```

Y si proporcionas un `valorInicial`, el resultado sería como este:

```js
[0, 1, 2, 3, 4].reduceRight(function (valorPrevio, valorActual, indice, array) {
  return valorPrevio + currentValue;
}, 10);

// Primera llamada
(valorPrevio = 10), (valorActual = 4), (indice = 4);

// Segunda llamada
(valorPrevio = 14), (valorActual = 3), (indice = 3);

// Tercera llamada
(valorPrevio = 17), (valorActual = 2), (indice = 2);

// Cuarta llamada
(valorPrevio = 19), (valorActual = 1), (indice = 1);

// Quinta llamada
(valorPrevio = 20), (valorActual = 0), (indice = 0);

// el array sobre el que se llama a reduce siempre es el objeto [0,1,2,3,4]

// Valor Devuelto: 20
```

## Compatibilidad

`reduceRight` es una extensión de JavaScript al estándar ECMA-262; como tal puede que no esté presente en otras implementaciones del estándar. Puedes trabajar con ésto insertando el siguiente código al comienzo de tus scripts, permitiendo el uso de `reduceRight` en implementaciones de ECMA-262 que no lo implementan de modo nativo. Este algoritmo es exactamente el mismo usando en Firefox y SpiderMonkey.

```js
if (!Array.prototype.reduceRight) {
  Array.prototype.reduceRight = function (fun /*, inicial*/) {
    var longitud = this.length;
    if (typeof fun != "function") throw new TypeError();

    // no se devuelve ningún valor si no hay valor inicial y el array está vacío
    if (longitud == 0 && arguments.length == 1) throw new TypeError();

    var indice = longitud - 1;
    if (arguments.length >= 2) {
      var rv = arguments[1];
    } else {
      do {
        if (indice in this) {
          rv = this[indice--];
          break;
        }

        // si el array no contiene valores, no existe valor incial a devolver
        if (--indice < 0) throw new TypeError();
      } while (true);
    }

    for (; indice >= 0; indice--) {
      if (indice in this) rv = fun.call(null, rv, this[indice], indice, this);
    }

    return rv;
  };
}
```

## Ejemplos

### Ejemplos: Resumir todos los valores de un array

```js
var total = [0, 1, 2, 3].reduceRight(function (a, b) {
  return a + b;
});
// total == 6
```

### Ejemplo: Integrar un array a partir de varios arrays

```js
var integrado = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduceRight(function (a, b) {
  return a.concat(b);
}, []);
// integrado es [4, 5, 2, 3, 0, 1]
```

## Véase también

- {{jsxref("Array.prototype.reduce()")}}
