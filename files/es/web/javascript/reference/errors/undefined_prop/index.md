---
title: 'ReferenceError: reference to undefined property "x"'
slug: Web/JavaScript/Reference/Errors/Undefined_prop
---

{{jsSidebar("Errors")}}

## Mensaje

```
ReferenceError: reference to undefined property "x" (Firefox)
```

## Tipo de error

Advertencia {{jsxref("ReferenceError")}} únicamente en [modo estricto](/es/docs/Web/JavaScript/Referencia/Modo_estricto).

## ¿Qué salió mal?

El script intentó acceder a una propiedad no definida en un objeto. Hay dos formas de acceder a las propiedades; vea la página [operadores de miembros](/es/docs/Web/JavaScript/Referencia/Operadores/Miembros) para aprender más sobre ellas.

Los errores sobre referencias a propiedades no definidas ocurren únicamente en el [modo de código estricto](/es/docs/Web/JavaScript/Referencia/Modo_estricto). En el modo no estricto, estos intentos de obtener propiedades no definidas son silenciosamente ignorados.

## Ejemplos

### Casos inválidos

En este caso, la propiedad `bar` no está definida, produciéndose un `ReferenceError`.

```js example-bad
"use strict";

var foo = {};
foo.bar; // ReferenceError: reference to undefined property "bar"
```

### Casos válidos

Para evitar este error, es necesario ya sea definir la propiedad `bar` en el objeto o verificar su existencia antes de leerla; una manera de hacerlo es usar el método {{jsxref("Object.prototype.hasOwnProperty()")}}, como en el siguiente ejemplo:

```js example-good
"use strict";

var foo = {};

// Definir la propiedad bar

foo.bar = "luna";
console.log(foo.bar); // "luna"

// Prueba para asegurarse que bar existe antes de leerla

if (foo.hasOwnProperty("bar")) {
  console.log(foo.bar);
}
```

## Vea también

- [Modo estricto](/es/docs/Web/JavaScript/Referencia/Modo_estricto)
