---
title: Promise.prototype.finally()
slug: Web/JavaScript/Reference/Global_Objects/Promise/finally
---

{{JSRef}}

El método **`finally()`** devuelve una {{jsxref("Promise")}}. Cuando la promesa se resuelve, sea exitosa o rechazada, la función de callback específicada será ejecutada. Esto ofrece una forma de ejecutar código sin importar como se haya resuelto la promesa.

Esto ayuda a evitar tener código duplicado tanto en el {{jsxref("Promise.then", "then()")}} como en el {{jsxref("Promise.catch", "catch()")}}.

## Sintaxis

```js
p.finally(alFinalizar);

p.finally(function () {
  // finalizada (exitosa o rechazada)
});
```

### Parámetros

- `alFinalizar`
  - : Una {{jsxref("Function")}} llamada cuando la `Promise` se resuelve con éxito o falla.

### Valor de retorno

Devuelve una {{jsxref("Promise")}} cuyo `finally` fue fijado a la función específicada en `alFinalizar`.

## Descripción

El método `finally()` puede ser de utilidad si quieres hacer algún proceso o limpieza una vez que la promesa termina, sin importar su resultado.

Utilizar `finally()` es muy similar a llamar `.then(onFinally, onFinally)`, sin embargo tiene algunas diferencias:

- Cuando usamos una función `inline`, se la puede pasar una sola vez, en vez de estar forzado a declararla dos veces, o guardarla en una variable.
- Un callback `finally` no recibe ningún argumento, ya que no hay una manera fehaciente de determinar si la promesa fue exitosa o fallida. Este caso de uso es precisamente para cuando _no nos importa_ la razón por la que falló o el valor al que resuelve, y no hay necesidad de proveerlos.
- A diferencia de `Promise.resolve(2).then(() => {}, () => {})` (que va a resolver a `undefined`), `Promise.resolve(2).finally(() => {})` resolverá con un `2`.
- Del mismo modo, a diferencia de `Promise.reject(3).then(() => {}, () => {})` (que resolverá con `undefined`), `Promise.reject(3).finally(() => {})` será rechazada con un `3`.

> **Nota:** Un `throw` (o retornar una promesa rechazada) en el callback `finally` va a rechazar la nueva promesa con la razón de rechazo especificada al llamar `throw()`.

## Ejemplos

```js
let isLoading = true;

fetch(myRequest)
  .then(function (response) {
    var contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return response.json();
    }
    throw new TypeError("Oops, no hemos obtenido un JSON!");
  })
  .then(function (json) {
    /* procesar el JSON */
  })
  .catch(function (error) {
    console.log(
      error,
    ); /* esta línea podría arrojar error, e.g. cuando console = {} */
  })
  .finally(function () {
    isLoading = false;
  });
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.then()")}}
- {{jsxref("Promise.prototype.catch()")}}
