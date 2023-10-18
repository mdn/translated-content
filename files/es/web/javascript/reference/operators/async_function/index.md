---
title: Expresión de función asíncrona
slug: Web/JavaScript/Reference/Operators/async_function
---

{{jsSidebar("Operators")}}

La palabra clave **`async function`** puede ser utilizada para definir funciones `async` dentro de expresiones.

También se pueden definir funciones asíncronas utilizando un [enunciado de función asíncrona](/es/docs/Web/JavaScript/Reference/Statements/async_function).

## Sintaxis

```
async function [nombre]([param1[, param2[, ..., paramN]]]) {
  enunciados
}
```

A partir de ES2015 (ES6), también se pueden emplear [funciones flecha.](/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

### Parámetros

- `name`
  - : El nombre de la función. Puede ser omitida, en cuyo caso la función es _anónima_. El nombre es sólo local al cuerpo de la función.
- `paramN`
  - : El nombre de un argumento a ser pasado a la función.
- `statements`
  - : Los enunciados que componen el cuerpo de la función.

## Descripción

Una expresión `async function` es muy similar, y casi tiene la misma sintaxis que, una {{jsxref('Statements/async_function', 'async function statement')}}. La principal diferencia entre una expresión `async function` y un enunciado `async function` es el _nombre de la función_, que puede ser omitido en una expresión `async function` para crear funciones _anonymous_. Una expresión `async function` puede ser utilizada como un {{Glossary("IIFE")}} (Expresión de función inmediatamente invocada, Immediately Invoked Function Expression) que se ejecuta tan rápido como es definida. Ver el capítulo sobre [funciones](/es/docs/Web/JavaScript/Reference/Functions) para tener más información.

## Ejemplos

### Ejemplo sencillo

```js
function resuelve2SegundosDespues(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

const agregar = async function (x) {
  // Expresión de una función asíncrona asignada a una variable
  let a = await resuelve2SegundosDespues(20);
  let b = await resuelve2SegundosDespues(30);
  return x + a + b;
};

agregar(10).then((v) => {
  console.log(v); // imprime 60 después de 4 segundos.
});

(async function (x) {
  // expresión de una función asíncrona utilizada como una IIFE
  let p_a = resuelve2SegundosDespues(20);
  let p_b = resuelve2SegundosDespues(30);
  return x + (await p_a) + (await p_b);
})(10).then((v) => {
  console.log(v); // imprime 60 después de 2 segundos.
});
```

## Especificaciones

{{Specifications}}

## Compatibilidad de los navegadores

{{Compat}}

## Ver también

- {{jsxref("Statements/async_function", "async function")}}
- Objeto {{jsxref("AsyncFunction")}}
- {{jsxref("Operators/await", "await")}}
