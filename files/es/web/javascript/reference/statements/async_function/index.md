---
title: async function
slug: Web/JavaScript/Reference/Statements/async_function
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

La declaración **`async function`** crea un {{Glossary("binding", "enlace")}} de una nueva función asíncrona a un nombre dado. La palabra clave `await` está permitida dentro del cuerpo de la función, lo que permite escribir un comportamiento asíncrono basado en promesas de un estilo más limpio y evitar la necesidad de configurar explícitamente cadenas de promesas.

También puedes definir funciones asíncronas usando la [expresión `async function`](/es/docs/Web/JavaScript/Reference/Operators/async_function).

{{InteractiveExample("JavaScript Demo: async function declaration", "taller")}}

```js interactive-example
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("llamando");
  const result = await resolveAfter2Seconds();
  console.log(result);
  // Salida esperada: "resolved"
}

asyncCall();
```

## Sintaxis

```js-nolint
async function name(param0) {
  sentencias
}
async function name(param0, param1) {
  sentencias
}
async function name(param0, param1, /* …, */ paramN) {
  sentencias
}
```

> [!NOTE]
> No puede haber un terminador de línea entre `async` y `function`; de lo contrario, se [inserta un punto y coma automáticamente](/es/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion), lo que provoca que `async` se convierta en un identificador y el resto en una declaración de `function`.

### Parámetros

- `name`
  - : El nombre de la función.
- `param` {{optional_inline}}
  - : El nombre de un parámetro formal para la función. Para conocer la sintaxis de los parámetros, consulta la [referencia de Funciones](/es/docs/Web/JavaScript/Guide/Functions#parámetros_de_función).
- `statements` {{optional_inline}}
  - : Las sentencias que conforman el cuerpo de la función. Se puede utilizar el mecanismo `await`.

## Descripción

Una declaración `async function` crea un objeto {{jsxref("AsyncFunction")}}. Cada vez que se llama a una función asíncrona, esta devuelve una nueva {{jsxref("Promise")}}, que se resolverá con el valor devuelto por la función asíncrona, o se rechazará con una excepción no capturada dentro de la misma.

Las funciones asíncronas pueden contener cero o más expresiones {{jsxref("Operators/await", "await")}}. Las expresiones `await` hacen que las funciones que devuelven promesas se comporten como si fueran síncronas, al suspender la ejecución hasta que la promesa devuelta se cumpla o se rechace. El valor resuelto de la promesa se trata como el valor de retorno de la expresión `await`. El uso de `async` y `await` permite el uso de bloques ordinarios `try` / `catch` alrededor del código asíncrono.

> [!NOTE]
> La palabra clave `await` solo es válida dentro de funciones asíncronas en el código JavaScript normal. Si la usas fuera del cuerpo de una función asíncrona, obtendrás un {{jsxref("SyntaxError")}}.
>
> `await` se puede usar por sí solo con [módulos de JavaScript](/es/docs/Web/JavaScript/Guide/Modules).

> [!NOTE]
> El propósito de `async`/`await` es simplificar la sintaxis necesaria para consumir APIs basadas en promesas. El comportamiento de `async`/`await` es similar a combinar [generadores](/es/docs/Web/JavaScript/Guide/Iterators_and_generators) y promesas.

Las funciones asíncronas siempre devuelven una promesa. Si el valor de retorno de una función asíncrona no es explícitamente una promesa, se envolverá implícitamente en una promesa.

Por ejemplo, considera el siguiente código:

```js
async function foo() {
  return 1;
}
```

Es similar a:

```js
function foo() {
  return Promise.resolve(1);
}
```

Ten en cuenta que, aunque el valor de retorno de una función asíncrona se comporta como si estuviera envuelto en un `Promise.resolve`, no son equivalentes. Una función asíncrona devolverá una _referencia_ diferente, mientras que `Promise.resolve` devuelve la misma referencia si el valor dado es una promesa. Esto puede ser un problema cuando deseas verificar la igualdad entre una promesa y el valor de retorno de una función asíncrona.

```js
const p = new Promise((res, rej) => {
  res(1);
});

async function asyncReturn() {
  return p;
}

function basicReturn() {
  return Promise.resolve(p);
}

console.log(p === basicReturn()); // true
console.log(p === asyncReturn()); // false
```

Se puede pensar en el cuerpo de una función async como si estuviera dividido por cero o más expresiones `await`. El código de nivel superior, hasta e incluyendo la primera expresión `await` (si la hay), se ejecuta de forma síncrona. De esta manera, una función asíncrona sin una expresión `await` se ejecutará de forma síncrona. Sin embargo, si hay una expresión `await` dentro del cuerpo de la función, la función asíncrona siempre se completará de forma asíncrona.

Por ejemplo:

```js
async function foo() {
  await 1;
}
```

También es equivalente a:

```js
function foo() {
  return Promise.resolve(1).then(() => undefined);
}
```

El código después de cada expresión `await` puede considerarse como si existiera en un callback `.then`. De esta manera, se construye progresivamente una cadena de promesas con cada paso reentrante a través de la función. El valor de retorno forma el último eslabón de la cadena.

En el siguiente ejemplo, esperamos sucesivamente dos promesas. El progreso a través de la función `foo` se realiza en tres etapas.

1. La primera línea del cuerpo de la función `foo` se ejecuta de forma síncrona, con la expresión `await` configurada con la promesa pendiente. El progreso a través de `foo` se suspende y el control se devuelve a la función que llamó a `foo`.
2. Tiempo después, cuando la primera promesa se ha cumplido o rechazado, el control vuelve a entrar en `foo`. El resultado del cumplimiento de la primera promesa (si no fue rechazada) se devuelve desde la expresión `await`. Aquí, `1` se asigna a `result1`. El progreso continúa y se evalúa la segunda expresión `await`. Nuevamente, el progreso a través de `foo` se suspende y se cede el control.
3. Tiempo después, cuando la segunda promesa se ha cumplido o rechazado, el control vuelve a entrar en `foo`. El resultado de la resolución de la segunda promesa se devuelve desde la segunda expresión `await`. Aquí, `2` se asigna a `result2`. El control se mueve a la expresión de retorno (si la hay). El valor de retorno por defecto `undefined` se devuelve como el valor de resolución de la promesa actual.

```js
async function foo() {
  const result1 = await new Promise((resolve) =>
    setTimeout(() => resolve("1")),
  );
  const result2 = await new Promise((resolve) =>
    setTimeout(() => resolve("2")),
  );
}
foo();
```

Observa cómo la cadena de promesas no se construye de una sola vez. En su lugar, la cadena se construye por etapas, a medida que el control se cede y retorna sucesivamente de la función async. Como resultado, debemos tener en cuenta el comportamiento del manejo de errores cuando trabajamos con operaciones asíncronas concurrentes.

Por ejemplo, en el siguiente código se lanzará un error de rechazo de promesa no controlado, incluso si se ha configurado un manejador `.catch` más adelante en la cadena de promesas. Esto se debe a que `p2` no se 'conectará' a la cadena de promesas hasta que el control retorne de `p1`.

```js
async function foo() {
  const p1 = new Promise((resolve) => setTimeout(() => resolve("1"), 1000));
  const p2 = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("failed")), 500),
  );
  const results = [await p1, await p2]; // ¡No hagas esto! Usa Promise.all o Promise.allSettled en su lugar.
}
foo().catch(() => {}); // Intento de silenciar todos los errores...
```

Las declaraciones `async function` se comportan de manera similar a las declaraciones {{jsxref("Statements/function", "function")}}: se [elevan (hoisting)](/es/docs/Glossary/Hoisting) hacia la parte superior de su ámbito y pueden llamarse desde cualquier lugar del mismo, y solo pueden redeclararse en ciertos contextos.

## Ejemplos

### Funciones asíncronas y orden de ejecución

```js
function resolveAfter2Seconds() {
  console.log("iniciando promesa lenta");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("slow");
      console.log("promesa lenta terminada");
    }, 2000);
  });
}

function resolveAfter1Second() {
  console.log("iniciando promesa rápida");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("fast");
      console.log("promesa rápida terminada");
    }, 1000);
  });
}

async function sequentialStart() {
  console.log("== inicia sequentialStart ==");

  // 1. Inicia un temporizador, y registra el resultado cuando termine.
  const slow = resolveAfter2Seconds();
  console.log(await slow);

  // 2. Inicia el siguiente temporizador después de esperar al anterior.
  const fast = resolveAfter1Second();
  console.log(await fast);

  console.log("== sequentialStart finalizado ==");
}

async function sequentialWait() {
  console.log("== inicia sequentialWait ==");

  // 1. Inicia dos temporizadores sin esperar uno al otro.
  const slow = resolveAfter2Seconds();
  const fast = resolveAfter1Second();

  // 2. Espera a que el temporizador lento finalice, y luego registra el resultado.
  console.log(await slow);
  // 3. Espera a que el temporizador rápido finalice, y luego registra el resultado.
  console.log(await fast);

  console.log("== sequentialWait finalizado ==");
}

async function concurrent1() {
  console.log("== inicia concurrent1 ==");

  // 1. Inicia dos temporizadores concurrentemente y espera a que ambos finalicen.
  const results = await Promise.all([
    resolveAfter2Seconds(),
    resolveAfter1Second(),
  ]);
  // 2. Registra los resultados juntos.
  console.log(results[0]);
  console.log(results[1]);

  console.log("== concurrent1 finalizado ==");
}

async function concurrent2() {
  console.log("== inicia concurrent2 ==");

  // 1. Inicia dos temporizadores concurrentemente, y registra inmediatamente después de que cada uno termine.
  await Promise.all([
    (async () => console.log(await resolveAfter2Seconds()))(),
    (async () => console.log(await resolveAfter1Second()))(),
  ]);
  console.log("== concurrent2 finalizado ==");
}

sequentialStart(); // después de 2 segundos, registra "slow", luego después de 1 segundo más, "fast"

// espera a que lo anterior termine
setTimeout(sequentialWait, 4000); // después de 2 segundos, registra "slow" y luego "fast"

// espera de nuevo
setTimeout(concurrent1, 7000); // lo mismo que sequentialWait

// espera de nuevo
setTimeout(concurrent2, 10000); // después de 1 segundo, registra "fast", luego después de 1 segundo más, "slow"
```

#### await y concurrencia

En `sequentialStart`, la ejecución se suspende 2 segundos para el primer `await` y luego otro segundo para el segundo `await`. El segundo temporizador no se crea hasta que el primero ya se ha activado, por lo que el código termina después de 3 segundos.

En `sequentialWait`, ambos temporizadores se crean y luego se esperan con `await`. Los temporizadores se ejecutan de forma concurrente, lo que significa que el código termina en 2 segundos en lugar de 3; es decir, lo que tarde el temporizador más lento. Sin embargo, las llamadas `await` se siguen ejecutando en serie, lo que significa que el segundo `await` esperará a que termine el primero. En este caso, el resultado del temporizador más rápido se procesa después del más lento.

Si deseas realizar otras tareas de forma segura después de que dos o más tareas se ejecuten concurrentemente y finalicen, debes usar `await` en una llamada a {{jsxref("Promise.all()")}} o {{jsxref("Promise.allSettled()")}} antes de dicha tarea.

> [!WARNING]
> Las funciones `sequentialWait` y `concurrent1` no son funcionalmente equivalentes.
>
> En `sequentialWait`, si la promesa `fast` se rechaza antes de que la promesa `slow` se cumpla, se producirá un error de rechazo de promesa no manejado, independientemente de si quien realiza la llamada ha configurado una cláusula `catch`.
>
> En `concurrent1`, `Promise.all` conecta la cadena de promesas de una sola vez, lo que significa que la operación fallará de inmediato (_fail-fast_) independientemente del orden de rechazo de las promesas, y el error siempre ocurrirá dentro de la cadena de promesas configurada, permitiendo que se capture de la forma habitual.

### Reescritura de una cadena de promesas con una función asíncrona

Una API que devuelve una {{jsxref("Promise")}} dará lugar a una cadena de promesas y divide la función en muchas partes. Considera el siguiente código:

```js
function getProcessedData(url) {
  return downloadData(url) // devuelve una promesa
    .catch((e) => downloadFallbackData(url)) // devuelve una promesa
    .then((v) => processDataInWorker(v)); // devuelve una promesa
}
```

Se puede reescribir con una sola función asíncrona de la siguiente manera:

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

Alternativamente, puedes encadenar la promesa con `catch()`:

```js
async function getProcessedData(url) {
  const v = await downloadData(url).catch((e) => downloadFallbackData(url));
  return processDataInWorker(v);
}
```

En las dos versiones reescritas, observa que no hay una sentencia `await` después de la palabra clave `return`, aunque eso también sería válido: el valor de retorno de una función asíncrona se envuelve implícitamente en {{jsxref("Promise.resolve")}}, si no es ya una promesa en sí misma (como en los ejemplos).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- Guía de [funciones](/es/docs/Web/JavaScript/Guide/Functions)
- Guía de [uso de promesas](/es/docs/Web/JavaScript/Guide/Using_promises)
- [Funciones](/es/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("AsyncFunction")}}
- [Expresión `async function`](/es/docs/Web/JavaScript/Reference/Operators/async_function)
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function*", "async function*")}}
- {{jsxref("Operators/await", "await")}}
- {{jsxref("Promise")}}
- [Decorating async JavaScript functions](https://innolitics.com/10x/javascript-decorators-for-promise-returning-functions/) en innolitics.com (2016) (en inglés)
