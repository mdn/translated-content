---
title: Array.prototype.splice()
slug: Web/JavaScript/Reference/Global_Objects/Array/splice
---

{{JSRef}}

El método **`splice()`** cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

{{EmbedInteractiveExample("pages/js/array-splice.html")}}

## Sintaxis

```
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
```

### Parámetros

- `start`
  - : Índice donde se comenzará a cambiar el array (con 0 como origen). Si es mayor que la longitud del array, el punto inicial será la longitud del array. Si es negativo, empezará esa cantidad de elementos contando desde el final.
- `deleteCount` {{optional_inline}}

  - : Un entero indicando el número de elementos a eliminar del array antiguo.

    Si `deleteCount` se omite, o si su valor es mayor que `arr.length - start` (esto significa, si es mayor que el número de elementos restantes del array, comenzando desde `start`), entonces todos los elementos desde `start` hasta el final del array serán eliminados.

    Si `deleteCount` es igual a 0 o negativo, no se eliminará ningún elemento. En este caso, se debe especificar al menos un nuevo elemento (ver más abajo).

- `item1, item2, ...` {{optional_inline}}
  - : Los elementos que se agregarán al array, empezando en el índice `start`. Si no se especifica ningún elemento, `splice()` solamente eliminará elementos del array.

### Valor devuelto

Un array que contiene los elementos eliminados. Si sólo se ha eliminado un elemento, devuelve un array con un solo elemento. Si no se ha eliminado ningún elemento, devuelve un array vacío.

## Descripción

Si especifica un número diferente de elementos a agregar que los que se eliminarán, el array tendrá un tamaño diferente al original una vez finalizada la llamada.

## Ejemplos

### Eliminar 0 elementos desde el índice 2 e insertar "drum"

```js
var myFish = ["angel", "clown", "mandarin", "sturgeon"];
var removed = myFish.splice(2, 0, "drum");

// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed
```

### Eliminar 1 elemento desde el índice 3

```js
var myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
var removed = myFish.splice(3, 1);

// removed is ["mandarin"]
// myFish is ["angel", "clown", "drum", "sturgeon"]
```

### Eliminar 1 elemento desde el índice 2 e insertar "trumpet"

```js
var myFish = ["angel", "clown", "drum", "sturgeon"];
var removed = myFish.splice(2, 1, "trumpet");

// myFish is ["angel", "clown", "trumpet", "sturgeon"]
// removed is ["drum"]
```

### Eliminar 2 elementos desde el índice 0 e insertar "parrot", "anemone" y "blue"

```js
var myFish = ["angel", "clown", "trumpet", "sturgeon"];
var removed = myFish.splice(0, 2, "parrot", "anemone", "blue");

// myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed is ["angel", "clown"]
```

### Eliminar 2 elementos desde el índice 2

```js
var myFish = ["parrot", "anemone", "blue", "trumpet", "sturgeon"];
var removed = myFish.splice(myFish.length - 3, 2);

// myFish is ["parrot", "anemone", "sturgeon"]
// removed is ["blue", "trumpet"]
```

### Eliminar 1 elemento desde el índice -2

```js
var myFish = ["angel", "clown", "mandarin", "sturgeon"];
var removed = myFish.splice(-2, 1);

// myFish is ["angel", "clown", "sturgeon"]
// removed is ["mandarin"]
```

### Eliminar todos los elementos tras el índice 2 (incl.)

```js
var myFish = ["angel", "clown", "mandarin", "sturgeon"];
var removed = myFish.splice(2);

// myFish is ["angel", "clown"]
// removed is ["mandarin", "sturgeon"]
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Array.prototype.push()", "push()")}} / {{jsxref("Array.prototype.pop()", "pop()")}} — añade/elimina elementos desde el final de un array
- {{jsxref("Array.prototype.unshift()", "unshift()")}} / {{jsxref("Array.prototype.shift()", "shift()")}} — añade/elimina elementos desde el principio de un array
- {{jsxref("Array.prototype.concat()", "concat()")}} — devuelve un nuevo array compuesto por este array unido a otro/s array/s y/o valor/es
