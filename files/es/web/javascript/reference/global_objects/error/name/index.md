---
title: Error.prototype.name
slug: Web/JavaScript/Reference/Global_Objects/Error/name
---

{{JSRef}}

La propiedad **`name`** representa un nombre para el tipo de error. El valor inicial es "Error".

## Descripción

De forma predeterminada, las instancias {{JSxRef("Error")}} reciben el nombre "Error". La propiedad `name`, además de la propiedad {{JSxRef("Error.prototype.message", "message")}}, la utiliza el método {{JSxRef("Error.prototype.toString()")}} para crear una representación de cadena del error.

## Ejemplos

### Lanzar un error personalizado

```js
var e = new Error("Entrada mal formada"); // e.name es 'Error'

e.name = "ParseError";
throw e;
// e.toString() devolverá 'ParseError: Entrada mal formada'
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ve también

- {{JSxRef("Error.prototype.message")}}
- {{JSxRef("Error.prototype.toString()")}}
