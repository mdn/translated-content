---
title: await
slug: Web/JavaScript/Reference/Operators/await
---

{{jsSidebar("Operators")}}El operador `await` es usado para esperar a una {{jsxref("Promise")}}. Sólo puede ser usado dentro de una función {{jsxref("Statements/async_function", "async function")}}.

## Sintaxis

```
[rv] = await expression;
```

- `expression`
  - : Una {{jsxref("Promise")}} o cualquier otro valor por el cual haya que esperar.
- `rv`
  - : Regresa el valor terminado de la promesa o solamente un valor si no es una `Promise`.

## Descripción

La expresión `await` provoca que la ejecución de una función `async` sea pausada hasta que una `Promise` sea terminada o rechazada, y regresa a la ejecución de la función `async` después del término. Al regreso de la ejecución, el valor de la expresión `await` es la regresada por una promesa terminada.

Si la `Promise` es rechazada, el valor de la expresión `await` tendrá el valor de rechazo.

Si el valor de la expresión seguida del operador `await` no es una promesa, será convertido a una [resolved Promise](/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve).

## Ejemplos

Si una `Promise` se pasa a una expresión `await`, espera a que la `Promise` se resuelva y devuelve el valor resuelto.

```js
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  var x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}
f1();
```

Si el valor no es una `Promise`, convierte el valor a una `Promise` resuelta, y espera por dicho valor.

```js
async function f2() {
  var y = await 20;
  console.log(y); // 20
}
f2();
```

Si la `Promise` es rechazada, se lanza una excepción con dicho el valor.

```js
async function f3() {
  try {
    var z = await Promise.reject(30);
  } catch (e) {
    console.log(e); // 30
  }
}
f3();
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Operators/async_function", "async function expression")}}
- {{jsxref("AsyncFunction")}} object
