---
title: AggregateError
slug: Web/JavaScript/Reference/Global_Objects/AggregateError
---

{{JSRef}}

El objeto **`AggregateError`** representa un error cuando se deben agrupar varios errores en un solo error. Se lanza cuando una operación necesita informar de varios errores, por ejemplo, {{JSxRef("Promise.any()")}}, cuando todas las promesas que se le pasan son rechazadas.

## Constructor

- {{JSxRef("Global_Objects/AggregateError/AggregateError", "AggregateError()")}}
  - : Crea un nuevo objeto `AggregateError`.

## Propiedades de la instancia

- {{JSxRef("Error.prototype.message", "AggregateError.prototype.message")}}
  - : Mensaje de error, el valor predeterminado es `""` (la cadena vacía).
- {{JSxRef("Error.prototype.name", "AggregateError.prototype.name")}}
  - : Nombre del error, el valor predeterminado es `AggregateError`.

## Ejemplos

### Capturar un error agregado

```js
Promise.any([Promise.reject(new Error("algún error"))]).catch((e) => {
  console.log(e instanceof AggregateError); // true
  console.log(e.message); // "Todas las promesas rechazadas"
  console.log(e.name); // "AggregateError"
  console.log(e.errors); // [ Error: "algún error" ]
});
```

### Crear un `AggregateError`

```js
try {
  throw new AggregateError([new Error("algún error")], "Hola");
} catch (e) {
  console.log(e instanceof AggregateError); // true
  console.log(e.message); // "Hola"
  console.log(e.name); // "AggregateError"
  console.log(e.errors); // [ Error: "algún error" ]
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ve también

- {{JSxRef("Error")}}
