---
title: Function() constructor
slug: Web/JavaScript/Reference/Global_Objects/Function/Function
---

{{JSRef("Objetos_globales", "Function")}}

El constructor **`Function`** crea un nuevo **objeto** `Function`. Llamar al constructor directamente puede crear funciones dinámicamente, pero tiene problemas de seguridad y de rendimiento similares (pero mucho menos importantes) para {{jsxref("eval")}}. Sin embargo, a diferencia de eval, el constructor `Function` crea funciones que solo se ejecutan en el ámbito global.

{{EmbedInteractiveExample("pages/js/function-constructor.html","shorter")}}

La fuente de este ejemplo interactivo se almacena en un repositorio de GitHub. Si deseas contribuir al proyecto de ejemplos interactivos, clona <https://github.com/mdn/interactive-examples> y envíanos una solicitud de extracción.

## Sintaxis

```
new Function([arg1 [, arg2 [, ...argN]] ,] functionBody)
```

### Parámetros

- `arg1, arg2, ... argN`
  - : Nombres que utilizará la función como nombres de argumentos formales. Cada uno debe ser una cadena que corresponda a un identificador JavaScript válido, o una lista de dichas cadenas separadas por una coma. Por ejemplo: "`x`", "`theValue`" —o "`x,theValue`".
- `functionBody`
  - : Una cadena que contiene las declaraciones de JavaScript que comprenden la definición de función.

## Descripción

Los objetos `Function` creados con el constructor `Function` se procesan cuando se crea la función. Esto es menos eficiente que declarar una función con una {{jsxref("Operators/function", "expresión de función")}} o {{jsxref("Statements/function", "declaración de función")}} y llamarla dentro de tu código porque tales funciones se procesan con el resto del código.

Todos los argumentos pasados a la función se tratan como los nombres de los identificadores de los parámetros en la función que se va a crear, en el orden en que se pasan. Omitir un argumento dará como resultado que el valor de ese parámetro sea `undefined`.

Invocar el constructor `Function` como función (sin usar el operador `new`) tiene el mismo efecto que invocarlo como constructor.

## Ejemplos

### Especificar argumentos con el constructor Function

El siguiente código crea un objeto `Function` que toma dos argumentos.

```js
// El ejemplo se puede ejecutar directamente en tu consola JavaScript

// Crea una función que toma dos argumentos y devuelve la suma de esos argumentos
const adder = new Function("a", "b", "return a + b");

// Llama a la función
adder(2, 6);
// 8
```

Los argumentos "`a`" y "`b`" son nombres de argumentos formales que se utilizan en el cuerpo de la función, "`return a + b`".

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ve también

- {{jsxref("Functions", "Funciones y ámbito de la función", "", 1)}}
- {{jsxref("Statements/function", "Declaración de function")}}
- {{jsxref("Operators/function*", "Expresión function*")}}
- {{jsxref("Statements/function", "Declaración de function*")}}
- {{jsxref("Operators/function*", "Expresión function*")}}
- {{jsxref("AsyncFunction", "Función asíncrona", "", 1)}}
- {{jsxref("GeneratorFunction", "Función generadora", "", 1)}}
