---
title: for...of
slug: Web/JavaScript/Reference/Statements/for...of
---

{{jsSidebar("Statements")}}

La sentencia **sentencia `for...of`** ejecuta un bloque de código para cada elemento de un [objeto iterable](/es/docs/Web/JavaScript/Guide/iterable), como lo son: {{jsxref("String")}}, {{jsxref("Array")}}, objetos similares a array (por ejemplo, {{jsxref("Functions/arguments", "arguments")}} or [`NodeList`](/es/docs/Web/API/NodeList)), {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}} e iterables definidos por el usuario.

## Sintaxis

```
for (variable of iterable) {
  statement
}
```

- `variable`
  - : En cada iteración el elemento (propiedad enumerable) correspondiente es asignado a _variable_.
- `iterable`
  - : Objeto cuyas propiedades enumerables son iteradas.

## Ejemplos

### Iterando un {{jsxref("Array")}}

```js
let iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}
// 11
// 21
// 31
```

Es posible usar `const` en lugar de `let` si no se va a modificar la variable dentro del bloque.

```js
let iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
```

### Iterando un {{jsxref("String")}}

```js
let iterable = "boo";

for (let value of iterable) {
  console.log(value);
}
// "b"
// "o"
// "o"
```

### Iterando un {{jsxref("TypedArray")}}

```js
let iterable = new Uint8Array([0x00, 0xff]);

for (let value of iterable) {
  console.log(value);
}
// 0
// 255
```

### Iterando un {{jsxref("Map")}}

```js
let iterable = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

for (let entry of iterable) {
  console.log(entry);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (let [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

### Iterando un {{jsxref("Set")}}

```js
let iterable = new Set([1, 1, 2, 2, 3, 3]);

for (let value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

### Iterando un objeto arguments

```js
(function () {
  for (let argument of arguments) {
    console.log(argument);
  }
})(1, 2, 3);

// 1
// 2
// 3
```

### Iterando una colección del DOM

Iterando colecciones del DOM como un {{domxref("NodeList")}}: el siguiente ejemplo añade la clase "read" a los párrafos (`<p>`) que son descendientes directos de un (`<article>`):

```js
// Nota: Esto solo funcionará en plataformas que tengan
// implementado NodeList.prototype[Symbol.iterator]
let articleParagraphs = document.querySelectorAll("article > p");

for (let paragraph of articleParagraphs) {
  paragraph.classList.add("read");
}
```

### Clausurando iteraciones

En los bucles `for...of`, se puede causar que la iteración termine de un modo brusco usando: `break`, `continue[4]`, `throw` or `return[5]`. En estos casos la iteración se cierra.

```js
function* foo() {
  yield 1;
  yield 2;
  yield 3;
}

for (let o of foo()) {
  console.log(o);
  break; // closes iterator, triggers return
}
```

### Iterando generadores

También es posible iterar las nuevas funciones **[generator](/es/docs/Web/JavaScript/Reference/Statements/function*)**:

```js
function* fibonacci() {
  // una función generador
  let [prev, curr] = [0, 1];
  while (true) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

for (let n of fibonacci()) {
  console.log(n);
  // interrumpir la secuencia en 1000
  if (n >= 1000) {
    break;
  }
}
```

> **Nota:** **No se deben reutilizar los generadores.** Los generadores no deben ser reutilizados, incluso si el bucle **`for...of`** se ha terminado antes de tiempo con la sentencia [break](/es/docs/Web/JavaScript/Referencia/Sentencias/break). Una vez abandonado el bucle, el generador está cerrado y tratar de iterar sobre él de nuevo no dará más resultados. Firefox no ha implementado aún este comportamiento y el generador puede ser reutilizado en contra de lo escrito en el estándar ES6 ([13.7.5.13, step 5m](https://www.ecma-international.org/ecma-262/6.0/#sec-13.7.5.13)), pero esto cambiará una vez que el bug [Error 1147371 en Firefox](https://bugzil.la/1147371) haya sido corregido.

```js example-bad
var gen = (function* () {
  yield 1;
  yield 2;
  yield 3;
})();
for (let o of gen) {
  console.log(o);
  break; // Finaliza la iteración
}

// El generador no debe ser reutilizado, lo siguiente no tiene sentido
for (let o of gen) {
  console.log(o); // Nunca será llamado
}
```

### Iterando otros objetos iterables

Es posible, además, iterar un objeto que explicitamente implemente el protocolo [iterable](/es/docs/Web/JavaScript/Reference/Iteration_protocols#iterable):

```js
var iterable = {
  [Symbol.iterator]() {
    return {
      i: 0,
      next() {
        if (this.i < 3) {
          return { value: this.i++, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  },
};

for (var value of iterable) {
  console.log(value);
}
// 0
// 1
// 2
```

### Diferencia entre `for...of` y `for...in`

El bucle `for...in iterará sobre todas las propiedades de un objeto.` Más tecnicamente, iterará sobre cualquier propiedad en el objeto que haya sido internamente definida con su propiedad `[[Enumerable]]` configurada como `true`.

La sintaxis de **`for...of`** es específica para las **colecciones**, y no para todos los objetos. Esta Iterará sobre cualquiera de los elementos de una colección que tengan la propiedad `[Symbol.iterator]`.

El siguiente ejemplo muestra las diferencias entre un bucle **`for...of`** y un bucle **`for...in`**.

```js
let arr = [3, 5, 7];
arr.foo = "hola";

for (let i in arr) {
  console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
  console.log(i); // logs "3", "5", "7"
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Map.prototype.forEach()")}}
