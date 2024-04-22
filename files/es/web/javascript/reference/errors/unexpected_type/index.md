---
title: 'TypeError: "x" is (not) "y"'
slug: Web/JavaScript/Reference/Errors/Unexpected_type
---

{{jsSidebar("Errors")}}

## Mensaje

```
TypeError: "x" is (not) "y"

Examples:
TypeError: "x" is undefined
TypeError: "x" is null
TypeError: "undefined" is not an object
TypeError: "x" is not an object or null
TypeError: "x" is not a symbol
```

## Tipo de error

{{jsxref("TypeError")}}.

## ¿Qué salió mal?

Tipo inesperado. Esto ocurre amenudo con valores {{jsxref("undefined")}} o {{jsxref("null")}} .

Además, ciertos métodos, como {{jsxref ("Object.create ()")}} o {{jsxref("Symbol.keyFor()")}}, requieren de un tipo específico, que debe ser proporcionado, ejemplos

### Casos inválidos

```js example-bad
// undefined and null cases on which the substring method won't work
var foo = undefined;
foo.substring(1); // TypeError: foo is undefined

var foo = null;
foo.substring(1); // TypeError: foo is null

// Certain methods might require a specific type
var foo = {};
Symbol.keyFor(foo); // TypeError: foo is not a symbol

var foo = "bar";
Object.create(foo); // TypeError: "foo" is not an object or null
```

### Cómo solucionar el problema

Para fijar un puntero nulo a indefinidos o valores nulos, puede utilizar el operador typeof, por ejemplo

```js
if (typeof foo !== "undefined") {
  // Ahora sabemos que foo está definido, ahora podemos continuar.
}
```

## Ver también

- {{jsxref("undefined")}}
- {{jsxref("null")}}
