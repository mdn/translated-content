---
title: Array.prototype.push()
slug: Web/JavaScript/Reference/Global_Objects/Array/push
---

{{JSRef}}

El método **`push()`** añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

{{EmbedInteractiveExample("pages/js/array-push.html")}}

## Sintaxis

```
arr.push(element1[, ...[, elementN]])
```

### Parámetros

- `elementN`
  - : Los elementos a añadir al final del array.

### Valor devuelto

La nueva propiedad {{jsxref("Array.length", "length")}} del objeto sobre el cual se efectuó la llamada.

## Descripción

El método `push` es muy práctico para añadir valores a un array.

`push` es genérico intencionadamente. Este método puede ser {{jsxref("Function.call", "call()")}} o {{jsxref("Function.apply", "apply()")}} a objetos que representen arrays. El método `push` depende de la propiedad `length` para decidir donde empezar a insertar los valores dados. Si el valor de la propiedad `length` no puede ser convertido en numérico, el índice 0 es usado. Esto permite la posibilidad de que la propiedad `length` sea inexistente, y en este caso `length` será creado.

Los únicos objetos nativos que se asemejen al array son {{jsxref("Global_Objects/String", "strings", "", 1)}} objetos, aunque estos no se puedan usar en la aplicación de este método ya que son inmutables.

## Ejemplos

### Ejemplo: Añadiendo elementos a un array

El siguiente código crea el array `sports` que contiene dos elementos, luego añade 2 elementos más. Tras ejecutar el código, `sports` contiene 4 elementos: "soccer", "baseball", "football" and "swimming".

```js
var sports = ["soccer", "baseball"];
var total = sports.push("football", "swimming");

console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
console.log(total); // 4
```

### Uniendo dos arrays

This example uses {{jsxref("Function.apply", "apply()")}} to push all elements from a second array.

Do _not_ use this method if the second array (`moreVegs` in the example) is very large, because the maximum number of parameters that one function can take is limited in practice. See {{jsxref("Function.apply", "apply()")}} for more details.

```js
var vegetables = ["parsnip", "potato"];
var moreVegs = ["celery", "beetroot"];

// Merge the second array into the first one
// Equivalent to vegetables.push('celery', 'beetroot');
Array.prototype.push.apply(vegetables, moreVegs);

console.log(vegetables); // ['parsnip', 'potato', 'celery', 'beetroot']
```

### Using an object in an array-like fashion

Como se menciona anteriormente, `push` es intencionadamente genérico, y podemos usar eso a nuestro favor. `Array.prototype.push` puede funcionar bien con un objeto, como muestra este ejemplo. Ten en cuenta que no se crea un array para almacenar una colección de objetos. En su lugar, almacenamos la colección en el propio objeto y se utiliza el método `call` sobre `Array.prototype.push` para hacer creer al método que estamos tratando a un array, y simplemente funciona, gracias a la forma en que JavaScript nos permite establecer el contexto de la ejecución.

```js
var obj = {
  length: 0,

  addElem: function addElem(elem) {
    // obj.length is automatically incremented
    // every time an element is added.
    [].push.call(this, elem);
  },
};

// Let's add some empty objects just to illustrate.
obj.addElem({});
obj.addElem({});
console.log(obj.length);
// → 2
```

Tenga en cuenta que aunque `obj` no es un array, el método `push` ha incrementado satisfactoriamente la propiedad `length` de `obj` tal y como si se tratara de un array.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
