---
title: Error.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Error/toString
---

{{JSRef}}

El método **`toString()`** devuelve una cadena que representa el objeto {{JSxRef("Error")}} especificado.

## Sintaxis

```
e.toString()
```

### Valor de retorno

Una cadena que representa el objeto {{JSxRef("Error")}} especificado.

## Descripción

El objeto {{JSxRef("Error")}} redefine el método {{JSxRef("Object.prototype.toString()")}} heredado por todos los objetos. Su semántica es la siguiente (asumiendo que {{JSxRef("Object")}} y {{JSxRef("String")}} tienen sus valores originales):

```js
Error.prototype.toString = function () {
  "use strict";

  var obj = Object(this);
  if (obj !== this) {
    throw new TypeError();
  }

  var name = this.name;
  name = name === undefined ? "Error" : String(name);

  var msg = this.message;
  msg = msg === undefined ? "" : String(msg);

  if (name === "") {
    return msg;
  }
  if (msg === "") {
    return name;
  }

  return name + ": " + msg;
};
```

## Ejemplos

### Usar `toString()`

```js
var e = new Error("fatal error");
console.log(e.toString()); // 'Error: error fatal'

e.name = undefined;
console.log(e.toString()); // 'Error: error fatal'

e.name = "";
console.log(e.toString()); // 'error fatal'

e.message = undefined;
console.log(e.toString()); // ''

e.name = "hola";
console.log(e.toString()); // 'hola'
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ve también

- {{jsxref("Error.prototype.toSource()")}}
