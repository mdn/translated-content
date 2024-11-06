---
title: Array.isArray()
slug: Web/JavaScript/Reference/Global_Objects/Array/isArray
---

{{JSRef}}

El método **`Array.isArray()`** determina si el valor pasado es un {{jsxref("Array")}}.

```js
Array.isArray([1, 2, 3]); // true
Array.isArray({ foo: 123 }); // false
Array.isArray("foobar"); // false
Array.isArray(undefined); // false
```

## Sintaxis

```
Array.isArray(obj)
```

### Parámetros

- `obj`
  - : El objeto a evaluar.

### Valor de retorno

`true` si el objeto es un {{jsxref("Array")}}; en caso contrario, `false`.

## Descripción

Si el objeto es un {{jsxref("Array")}}, devuelve `true`; `false`, en cualquier otro caso.

Vea el artículo ["Determining with absolute accuracy whether or not a JavaScript object is an array"](http://web.mit.edu/jwalden/www/isArray.html) para más detalles.

## Ejemplos

```js
// las siguientes llamadas devuelven true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array("a", "b", "c", "d"));
Array.isArray(new Array(3));
// Hecho poco conocido: Array.prototype es también un array:
Array.isArray(Array.prototype);

// todas las siguientes llamadas devuelven false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray("Array");
Array.isArray(true);
Array.isArray(false);
Array.isArray({ __proto__: Array.prototype });
```

### `instanceof` vs `isArray`

Al comprobar una instancia `Array`, `Array.isArray` es más recomendado que `instanceof` porque funciona a través de `iframes`.

```js
var iframe = document.createElement("iframe");
document.body.appendChild(iframe);
xArray = window.frames[window.frames.length - 1].Array;
var arr = new xArray(1, 2, 3); // [1,2,3]

// Comprobando correctamente un Array
Array.isArray(arr); // true
// Considerado peligroso, porque no funciona a través de iframes
arr instanceof Array; // false
```

## Polyfill

Ejecutar el siguiente código antes de cualquier otro código creará un `Array.isArray()` si no está disponible de forma nativa.

```js
if (!Array.isArray) {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === "[object Array]";
  };
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- {{jsxref("Array")}}
