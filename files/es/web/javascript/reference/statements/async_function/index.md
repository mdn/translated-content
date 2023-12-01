---
title: Función async
slug: Web/JavaScript/Reference/Statements/async_function
---

{{jsSidebar("Statements")}}

La declaración de función **`async`** define una _función asíncrona_, la cual devuelve un objeto {{jsxref("Global_Objects/AsyncFunction","AsyncFunction")}}.

Es posible definir también funciones asíncronas a través de una {{jsxref("Operators/async_function", "expresión de función async", "", 1)}}.

{{EmbedInteractiveExample("pages/js/statement-async.html", "taller")}}

The source for this interactive demo is stored in a GitHub repository. If you'd like to contribute to the interactive demo project, please clone <https://github.com/mdn/interactive-examples> and send us a pull request.

## Sintaxis

```
async function name([param[, param[, ... param]]]) {
   statements
}
```

### Parámetros

- `name`
  - : El nombre de la función.

<!---->

- `param`
  - : El nombre de un argumento que se debe pasar a la función.

<!---->

- `statements`
  - : Las declaraciones que conforman el cuerpo de la función.

### Valor de retorno

Un objeto {{jsxref("Global_Objects/AsyncFunction","AsyncFunction")}}, que representa una función asíncrona que ejecuta el código contenido dentro de la función.

## Descripción

Cuando se llama a una función `async`, esta devuelve un elemento {{jsxref("Promise")}}. Cuando la función `async` devuelve un valor, `Promise` se resolverá con el valor devuelto. Si la función `async` genera una excepción o algún valor, `Promise` se rechazará con el valor generado.

Una función `async` puede contener una expresión {{jsxref("Operators/await", "await")}}, la cual pausa la ejecución de la función asíncrona y espera la resolución de la `Promise` pasada y, a continuación, reanuda la ejecución de la función `async` y devuelve el valor resuelto.

> **Nota:** La finalidad de las funciones `async`/`await` es simplificar el comportamiento del uso síncrono de promesas y realizar algún comportamiento específico en un grupo de `Promises`. Del mismo modo que las `Promises` son semejantes a las devoluciones de llamadas estructuradas, `async`/`await` se asemejan a una combinación de generadores y promesas.

## Ejemplos

### Ejemplo sencillo

```js
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function add1(x) {
  const a = await resolveAfter2Seconds(20);
  const b = await resolveAfter2Seconds(30);
  return x + a + b;
}

add1(10).then((v) => {
  console.log(v); // prints 60 after 4 seconds.
});

async function add2(x) {
  const p_a = resolveAfter2Seconds(20);
  const p_b = resolveAfter2Seconds(30);
  return x + (await p_a) + (await p_b);
}

add2(10).then((v) => {
  console.log(v); // prints 60 after 2 seconds.
});
```

> **Advertencia:** **No se deben confundir `await` y `Promise.all`** En `add1`, la ejecución se suspende durante dos segundos correspondientes al primer operador `await`, y luego durante otros dos segundos correspondientes al segundo `await`. El segundo temporizador no se crea hasta que el primero no se haya disparado ya. En `add2`, ambos temporizadores se crean y, acto seguido, ambos reciben `await`. Esto provoca la resolución en dos segundos y no cuatro, ya que los temporizadores se ejecutaron de manera simultánea. Sin embargo, ambas llamadas `await` aún pueden ejecutarse en series, no en paralelo: esto **no** constituye ninguna aplicación automática de `Promise.all`. Si se desea aplicar `await` a dos o más promesas en paralelo, es preciso utilizar `Promise.all`.

### Reescritura de una cadena de promesas con una función `async`

Una API que devuelva una {{jsxref("Promise")}} tendrá como resultado una cadena de promesas, y dividirá la función en muchas partes. Estudie este código:

```js
function getProcessedData(url) {
  return downloadData(url) // returns a promise
    .catch((e) => {
      return downloadFallbackData(url); // returns a promise
    })
    .then((v) => {
      return processDataInWorker(v); // returns a promise
    });
}
```

Es posible reescribirlo utilizando un solo operador `async` de esta manera:

```js
async function getProcessedData(url) {
  let v;
  try {
    v = await downloadData(url);
  } catch (e) {
    v = await downloadFallbackData(url);
  }
  return processDataInWorker(v);
}
```

Observe que, en el ejemplo anterior, no hay ninguna instrucción `await` dentro de la instrucción `return`, porque el valor de retorno de una `async function` queda implícitamente dentro de un {{jsxref("Promise.resolve")}}.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Operators/async_function", "Expresión de función async")}}
- Objeto {{jsxref("AsyncFunction")}}
- {{jsxref("Operators/await", "await")}}
- [«Decorar funciones async de JavaScript» en innolitics.com](http://innolitics.com/10x/javascript-decorators-for-promise-returning-functions/) (en inglés)
