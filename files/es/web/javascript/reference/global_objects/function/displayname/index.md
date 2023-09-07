---
title: Function.displayName
slug: Web/JavaScript/Reference/Global_Objects/Function/displayName
---

{{JSRef}} {{non-standard_header}}

The **`function.displayName`** property returns the display name of the function.

## Description

Cuando se define la propiedad `displayName` , retorna un mensaje con el nombre para mostrar en una función:

```js
function doSomething() {}

console.log(doSomething.displayName); // "undefined"

var popup = function (content) {
  console.log(content);
};

popup.displayName = "Show Popup";

console.log(popup.displayName); // "Show Popup"
```

Tu puedes definir una funcion con un nombre a mostrar en un {{jsxref("Functions", "function expression", "", 1)}}:

```js
var object = {
  someMethod: function () {},
};

object.someMethod.displayName = "someMethod";

console.log(object.someMethod.displayName); // logs "someMethod"

try {
  someMethod;
} catch (e) {
  console.log(e);
}
// ReferenceError: someMethod is not defined
```

Puedes cambiar dinámicamente el `displayName` de una función:

```js
var object = {
  // anonymous
  someMethod: function (value) {
    arguments.callee.displayName = "someMethod (" + value + ")";
  },
};

console.log(object.someMethod.displayName); // "undefined"

object.someMethod("123");
console.log(object.someMethod.displayName); // "someMethod (123)"
```

## Ejemplos

Normalmente, se prefiere por consolas y profilers sobre {{jsxref("Function.name", "func.name")}} a mostrar el nombre de una función.

Al ingresar lo siguiente en una consola, debería mostrarse como algo así como "`function My Function()`":

```js
var a = function () {};
a.displayName = "My Function";

a; // "function My Function()"
```

## Especificaciones

No es parte de ninguna especificación.

## Compatibilidad con navegadores

{{Compat}}
