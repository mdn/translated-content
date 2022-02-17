---
title: Funciones asíncronas
slug: Web/JavaScript/Reference/Global_Objects/AsyncFunction
translation_of: Web/JavaScript/Reference/Global_Objects/AsyncFunction
original_slug: Web/JavaScript/Referencia/Objetos_globales/Funcionesasíncronas
browser-compat: javascript.builtins.AsyncFunction
---
{{JSRef}}

El **constructor `AsyncFunction`** crea un nuevo objeto {{jsxref("Statements/async_function", "async function", "", 1)}}.
En JavaScript, cada función asíncrona es un objeto `AsyncFunction`.

Nota: `AsyncFunction` _no_ es un objeto global. Este puede ser obtenido como resultado del siguiente código.

```js
Object.getPrototypeOf(async function(){}).constructor
```

## Sintaxis

```js
new AsyncFunction(arg0, functionBody)
new AsyncFunction(arg0, arg1, functionBody)
new AsyncFunction(arg0, arg1, ...argN, functionBody)
```

### Parámetros

- `arg1, arg2, ... argN`

  - : Nombres a ser usados por la función como los nombres de los argumentos. Cada uno debe ser una cadena que corresponda a un identificador válido en JavaScript (cualquier [identificador](/es/docs/Glossary/Identifier), [parámetro rest](/es/docs/Web/JavaScript/Reference/Functions/rest_parameters), o [parámetro desestructurado](/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment), opcionalmente con un valor por defecto), o una lista de tales cadenas separadas por comas.

    Así mismo, los parámetros se procesan de la misma manera que las declaraciones de funciones, aceptando espacios y comentarios. Por ejemplo: `"x", "theValue = 42", "[a, b] /* numbers */"` — o `"x, theValue = 42, [a, b] /* numbers */"`. (`"x, theValue = 42", "[a, b]"` es también correcto, pero muy confuso para leer).

- : `functionBody`
  - : Una cadena que contiene las sentencias de JavaScript que componen la definición de la función.

## Descripción

Los objetos {{jsxref("Statements/async_function", "async function")}} creados con el constructor `AsyncFunction` son procesados en el momento que la función es creada. Esto es menos eficiente que declarar una función asincrona con un {{jsxref("Statements/async_function", "async function expression")}} y llamarla con eso en tu código , ya que las funciones son procesadas junto al resto del código.

Todos los argumentos que son pasados a la función son tratados por los nombres de los identificadores de los parámetros en la función creada, en el orden en que son pasados a la función.

> **Nota:** Las {{jsxref("Statements/async_function", "async functions", "", 1)}} creadas con el constructor `AsyncFunction` no crean 
> [_closures_](/es/docs/Web/JavaScript/Closures) en sus contextos creados, siempre son creados en el contexto global.
>
> Cuando se ejecutan, solamente podran acceder a sus variables locales y globales, no a las variables de otros contextos en el cual
> el constructor `AsyncFuction` fue llamado.
>
> Esto es distinto de usar {{jsxref("Global_Objects/eval", "eval")}} con código para
> una expresión de función asíncrona.

Invocar el constructor `AsyncFunction` coomo una función (sin usar el operador `new`) tiene el mismo efecto que invocarlo como un constructor.

## Ejemplos

### Creando una función asíncrona con el constructor AsyncFunction()

```js
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

let AsyncFunction = Object.getPrototypeOf(async function(){}).constructor

let a = new AsyncFunction('a',
                          'b',
                          'return await resolveAfter2Seconds(a) + await resolveAfter2Seconds(b);');

a(10, 20).then(v => {
  console.log(v); // imprime 30 después de 4 segundos
});
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Statements/async_function", "async function function", "", 1)}}
- {{jsxref("Operators/async_function", "async function expression", "", 1)}}
- {{jsxref("Global_Objects/Function", "Function")}}
- {{jsxref("Statements/function", "function statement", "", 1)}}
- {{jsxref("Operators/function", "function expression", "", 1)}}
- {{jsxref("Functions", "Functions and function scope", "", 1)}}
