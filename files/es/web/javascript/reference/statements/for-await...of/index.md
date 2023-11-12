---
title: for await...of
slug: Web/JavaScript/Reference/Statements/for-await...of
---

{{jsSidebar("Statements")}}

La **sentencia** **`for await...of`** crea un bucle iterando tanto sobre objetos iterables asincrónicos como sincrónicos, incluyendo: built-in {{jsxref("String")}}, {{jsxref("Array")}}, objetos `Array`-like (por ej., {{jsxref("Functions/arguments", "arguments")}} o {{domxref("NodeList")}}), {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, y async/sync iterables definidos por el usuario. Invoca un hook de iteración personalizada con sentencias a ser ejecutadas por el valor de cada propiedad diferente del objeto.

El código fuente de este ejemplo interactivo está almacenado en un repositorio Github. Si te gustaría contribuir al proyecto de ejemplos interactivos, por favor clona <https://github.com/mdn/interactive-examples> y envíanos un pull request.

## Sintaxis

```
for await (variable of iterable) {
  sentencia
}
```

- `variable`
  - : En cada iteración, el valor de una propiedad diferente es asignado a _variable_. _variable_ puede ser declarada con `const`, `let`, o `var`.
- `iterable`
  - : Objeto sobre cuyas propiedades se itera.

### Iterando sobre iterables asincrónicos

También puedes iterar sobre un objeto que explícitamente implementa el protocolo async iterable:

```js
var asyncIterable = {
  [Symbol.asyncIterator]() {
    return {
      i: 0,
      next() {
        if (this.i < 3) {
          return Promise.resolve({ value: this.i++, done: false });
        }

        return Promise.resolve({ done: true });
      },
    };
  },
};

(async function () {
  for await (let num of asyncIterable) {
    console.log(num);
  }
})();

// 0
// 1
// 2
```

### Iterando sobre funciones generadoras asincrónicas

Debido a que las funciones generadoras asincrónicas implementan el protocolo async iterator, las mismas pueden ser iteradas utilizando `for await... of`

```js
async function* asyncGenerator() {
  var i = 0;
  while (i < 3) {
    yield i++;
  }
}

(async function () {
  for await (let num of asyncGenerator()) {
    console.log(num);
  }
})();
// 0
// 1
// 2
```

Para un ejemplo más concreto de iteración sobre una función generadora utilizando `for await... of`, considera iterar sobre datos provistos por una API. Este ejemplo primero crea un iterador asincrónico para un stream de datos, luego lo utiliza para obtener el tamaño de la respuesta desde la API.

```js
async function* streamAsyncIterator(stream) {
  const reader = stream.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        return;
      }
      yield value;
    }
  } finally {
    reader.releaseLock();
  }
}
// Obtiene datos desde url y calcula el tamaño de la respuesta utilizando la función generadora asincrónica.
async function getResponseSize(url) {
  const response = await fetch(url);
  // Almacenará el tamaño de la respuesta en bytes.
  let responseSize = 0;
  // El buble for-await-of. Itera asincrónicamente sobre cada parte de la respuesta.
  for await (const chunk of streamAsyncIterator(response.body)) {
    // Incrementando el tamaño total.
    responseSize += chunk.length;
  }

  console.log(`Tamaño de la respuesta: ${responseSize} bytes`);
  // salida esperada: "Tamaño de la respuesta: 1071472"
  return responseSize;
}
getResponseSize("https://jsonplaceholder.typicode.com/photos");
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Statements/for...of")}}
