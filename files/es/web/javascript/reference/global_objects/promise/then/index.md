---
title: Promise.prototype.then()
slug: Web/JavaScript/Reference/Global_Objects/Promise/then
---

{{JSRef}}

El método **`then()`** retorna una {{domxref("Promesa")}}. Recibe dos argumentos: funciones callback para los casos de éxito y fallo de [`Promise`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise).

Nota: Si ambos argumentos son omitidos, o se proveen métodos que no sean funciones, se creará una nueva `Promesa` sin handlers adicionales, que simplemente adoptan el estado final de la `Promesa` que entonces es llamado. Si el primer argumento es omitido o se provee una no-función, el nuevo `Promise` que es creado simplemente adopta el estado cumplido del `Promise` que entonces es llamado (si se convierte en fulfilled). Si el segundo argument es omitido o se provee una no-función, el nuevo `Promise` que es creado simplemente adopta el estado de rechazo del `Promesa` que entonces es llamado (si se convierte en rechazado).

## Sintaxis

```js
p.then(alCumplir[, enRechazo]);

p.then(function(value) {
  // cumplimiento
}, function(reason) {
  // rechazo
});
```

### Parámetros

Retorna un `Promise` el cual es determinado por las funciones input:

- Si `alCumplir` o `enRechazo` arroja un error, o retorna un [`Promise`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise) rechazado, `then` retorna un `Promise` rechazado.
- Si `alCumplir` o `enRechazo` retorna un `Promise` que resuelve, o retorna cualquier otro valor, `then` retorna un `Promise` resuelto.

<!-- -->

- `alCumplir` {{optional_inline}}
  - : Una [Función](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Function) es llamada si la `Promesa` se cumple. Esta función tiene un argumento, el `valor de` cumplimiento. Si no es una función, se reemplaza internamente con una función de "Identidad" (devuelve el argumento recibido).
- `enRechazo` {{optional_inline}}
  - : Una [Función](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Function) es llamada si la `Promesa` es rechazada. Esta función tiene un argumento, la `razón` de rechazo. Si no es una función, se reemplaza internamente con una función "Lanzador" (lanza un error que recibió como argumento).

### Valor de retorno

Un [`Promise`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise) en estado **pendiente.** La función de control (`alCumplir o enRechazo)` es llamada de forma **asíncrona** (tan pronto como el stack se vacíe). Después de la invocación de la función de control pueden darse diferentes casos:

- Si se recibe un valor, la Promesa devuelta por el método `then` queda resuelta adoptando el valor de retorno.
- Si se produce un error, la Promesa devuelta por el método `then` es rechazada, adoptando el error como su valor.
- Si se devuelve una Promesa ya resuelta, la Promesa devuelta por el método `then` queda resuelta adoptando el valor de la promesa anterior.
- Si se devuelve una Promesa con un objeto **pendiente** de resolver, la resolución o rechazo devueltos por `then` quedará a esperas de que la Promesa establecida para la función de control quede resuelta. Además, el valor de la Promesa en estado pendiente será el mismo que el valor devuelto por el controlador.

Veamos un ejemplo para demostrar la asincronía del método `then`.

```js
// al usar una promesa revuelta, el bloque 'then' se lanzará automáticamente,
// pero sus funciones controladoras se lanzarán asíncronamente,
// como demuestran los console.logs
var promResuelta = Promise.resolve(33);

var thenProm = promResuelta.then(función(valor){
  console.log("ésto será invocado cuando acabe el stack principal. El valor recibido y devuelto es: " + valor);
  return valor;
});
// imprimimos al momento el valor de thenProm()
console.log(thenProm);

// usando setTimeout podemos posponer la ejecución de una función al momento en el que el stack quede vacío.
setTimeout(función(){
  console.log(thenProm);
});


// logs, en orden:
// Promise {[[EstadoPromise¡]]: "pendiente", [[ValorPromise]]: undefined}
// "ésto será invocado cuando acabe el stack principal. El valor recibido y devuelto es: "33"
// Promise {[[EstadoPromise]]: "resuelta", [[ValorPromise]]: 33}
```

## Descripción

Ya que los métodos `then` y {{jsxref("Promise.prototype.catch()")}} devuelven promesas, pueden ser encadenados — una operación llamada _composición_.

## Ejemplos

### Usando el metodo `then`

```js
var p1 = new Promise(function (resolve, reject) {
  resolve("Success!");
  // or
  // reject ("Error!");
});

p1.then(
  function (value) {
    console.log(value); // Success!
  },
  function (reason) {
    console.log(reason); // Error!
  },
);
```

### Encadenamiento

El método `then` devuelve una `Promise` que permite encadenar métodos.

Puedes pasar una lambda a `then` y si devuelve una promesa, una `Promise` equivalente será expuesta al `then` subsecuente en la cadena de métodos. El fragmento incluido debajo simula un código asíncrono mediante la función `setTimeout`.

```js
Promise.resolve('foo')
  // 1. Recibe "foo", concatena "bar" con él, y resuelve la cadena con el siguiente 'then'
  .then(función(hilo) {
    return new Promise(function(resolve, reject) {
      setTimeout(función() {
        hilo += 'bar';
        resolve(hilo);
      }, 1);
    });
  })
  // 2. recibe "foobar", registra una función de llamada para opear sobre ese hilo
  // e imprimirlo en la consola, pero no antes de devolver el hilo sin modificar
  // en la resolución del siguiente 'then'
  .then(función(hilo) {
    setTimeout(función() {
      hilo += 'baz';
      console.log(hilo);
    }, 1)
    return hilo;
  })
  // 3. imprime mensajes útiles sobre cómo funcionará el código en esta sección
  // antes de que el hilo se procese por el código de prueba
  // antes del bloque 'then'.
  .then(función(hilo) {
    console.log("Último Then:  oops... no me he molestado en instanciar y devolver " +
                "una promesa en el then anterior, así que la secuencia puede ser un poco " +
                "sorprendente");

    // Observemos que `string` no incluye el trozo 'baz' en éste punto. Ésto ocurre
    // porque lo hemos contruido para que ocurra asíncronamente con una función setTimeout
    console.log(hilo);
});
```

Cuando un valor sencillamente se devuelve desde un lambda `then` , devolverá un `Promise.resolve(<valor devuelto por el controlador que haya sido invocado>)`.

```js
var p2 = nueva Promise(function(resolver, rechazar) {
  resolver(1);
});

p2.then(función(valor) {
  console.log(valor); // 1
  return valor + 1;
}).then(function(value) {
  console.log(valor + '- Este uso síncrono es prácticamente inútil'); // 2- Este uso síncrono es prácticamente inútil
});

p2.then(función(valor) {
  console.log(valor); // 1
});
```

Una llamada a `then` devolverá una promesa rechazada si la función lanza un error o devuelve una Promise rechazada.

```js
Promise.resolve()
  .then(() => {
    // Hace que .then() devuelva una promera rechazada
    throw new Error("Oh no!");
  })
  .then(
    () => {
      console.log("No invocada.");
    },
    (error) => {
      console.error("Función de rechazo llamada: ", error);
    },
  );
```

En cualquier otro caso, una Promise en resolución será devuelta. El el siguiente ejemplo, el primer `then()` devolverá un `42` dentro de una Promise en resolución, aunque la Promise de la cadena fue rechazada.

```js
Promise.reject()
  .then(
    () => 99,
    () => 42,
  ) // enRechazo devuelve 42, que está dentro de una Promise en resolución
  .then((respuesta) => console.log("Resuelta con " + respuesta)); // Resuelta con 42
```

En la práctica, suele ser preferible capturar promesas rechazadas en lugar de utilizar la sintaxis de dos casos de `then`, como demostramos abajo.

```js
Promise.resolve()
  .then(() => {
    // Hace que .then() devuelva una promesa rechazada
    throw new Error("Oh no!");
  })
  .catch((error) => {
    console.error("función enRechazo invocada: ", error);
  })
  .then(() => {
    console.log(
      "Siempre soy invocada, incluso si la promesa del then previo es rechazada",
    );
  });
```

También puedes usar encadenamiento para implementar una función con una API basada en promesas, sobre una función del mismo tipo.

```js
function traer_datos_actuales() {
  // La función fetch() de la API devuelve una Promesa. Esta función
  // expone una API similar, pero el valor de cumplimiento
  // de la Promesa de esta función tiene más tareas
  // implementadas sobre ella.
  return fetch("datos_actuales.json").then((response) => {
    if (response.headers.get("content-type") != "application/json") {
      throw new TypeError();
    }
    var j = response.json();
    // podríamos hacer algo con j
    return j; // valor de cumplimiento asignado al usuario de
    // fetch_datos_actuales().then()
  });
}
```

Si `alCumplir` devuelve una promesa, el valor de retorno de `then` será resuelto o rechazado por la promesa.

```js
function resolverDespues(resolver, reject) {
  setTimeout(función () {
    resolver(10);
  }, 1000);
}
function rechazarDespues(resolver, reject) {
  setTimeout(function () {
    resolver(new Error('Error'));
  }, 1000);
}

var p1 = Promise.resolve('foo');
var p2 = p1.then(función() {
  // Devuelve la promesa aquí, que será resuelta igualada a 10 tras 1 segundo
  return new Promise(resolverDespues);
});
p2.then(función(v) {
  console.log('resuelta', v);  // "resuelta", 10
}, función(e) {
  // no invocada
  console.log('rechazada', e);
});

var p3 = p1.then(funcion() {
 // Devuelve la promesa aquí, que será rechazada con 'Error' despues de 1 segundo
 return new Promise(rechazarDespues);
});
p3.then(funcion(v) {
 // no invocada
  console.log('resuelta', v);
}, funcion(e) {
  console.log('rechazada', e); // "rechazada", 'Error'
});
```

### `window.setImmediate` estilo polyfill basado en promesas

Usar un método {{jsxref("Function.prototype.bind()")}} `Reflect.apply` ({{jsxref("Reflect.apply()")}}) para crear un (non-cancellable) setImmediate-style function.

```js
const nextTick = (() => {
  const noop = () => {}; // literally
  const nextTickPromise = () => Promise.resolve().then(noop);

  const rfab = Reflect.apply.bind; // (thisArg, fn, thisArg, [...args])
  const nextTick = (fn, ...args) => (
    fn !== undefined
      ? Promise.resolve(args).then(rfab(null, fn, null))
      : nextTickPromise(),
    undefined
  );
  nextTick.ntp = nextTickPromise;

  return nextTick;
})();
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.catch()")}}
