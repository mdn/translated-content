---
title: "RangeError: invalid array length"
slug: Web/JavaScript/Reference/Errors/Invalid_array_length
---

{{jsSidebar("Errors")}}

## Mensaje

```
RangeError: invalid array length (Firefox)
RangeError: Invalid array length (Chrome)
RangeError: Invalid array buffer length (Chrome)
```

## Tipo de error

{{jsxref("RangeError")}}

## ¿Cuál es el problema?

Una longitud de array inválida puede presentarse en éstas situaciones:

- Cuando se crea un {{jsxref("Array")}} o un {{jsxref("ArrayBuffer")}} el cual tiene una longitud negativa o es igual o mayor a 2^32, o
- cuando se define la propiedad {{jsxref("Array.length")}} a un valor el cual es negativo o es igual o mayor a 2^32.

¿Por qué el `Array` y `ArrayBuffer` tienen longitud limitada? La propiedad de longitud de un `Array` o un `ArrayBuffer` está representada con un entero sin signo de 32 bits, el cual sólo puede almacenar valores que estén en el rango de 0 a (2^32)-1.

Si estás creando un `Array` usando el constructor, es mejor que utilices la notación literal, ya que el primer argumento es interpretado como la longitud del `Array`.

De lo contrario, puedes especificar un mínimo y un máximo para la longitud antes de definir la propiedad de longitud, o puedes usarla como el argumento del constructor.

## Ejemplos

### Casos inválidos

```js example-bad
new Array(Math.pow(2, 40));
new Array(-1);
new ArrayBuffer(Math.pow(2, 32));
new ArrayBuffer(-1);

let a = [];
a.length = a.length - 1; // definir la propiedad de longitud a -1

let b = new Array(Math.pow(2, 32) - 1);
b.length = b.length + 1; // definir la propiedad de longitud a 2^32
```

### Casos válidos

```js example-good
[Math.pow(2, 40)]; // [ 1099511627776 ]
[-1]; // [ -1 ]
new ArrayBuffer(Math.pow(2, 32) - 1);
new ArrayBuffer(0);

let a = [];
a.length = Math.max(0, a.length - 1);

let b = new Array(Math.pow(2, 32) - 1);
b.length = Math.min(0xffffffff, b.length + 1);

// 0xffffffff es la notación hexadecimal de 2^32 - 1
// el cual también se puede especificar como (-1 >>> 0)
```

## Véase también

- {{jsxref("Array")}}
- {{jsxref("Array.length")}}
- {{jsxref("ArrayBuffer")}}
