---
title: El objeto arguments
slug: Web/JavaScript/Reference/Functions/arguments
---

{{jsSidebar("Functions", "Funciones")}}

**`arguments`** es un objeto similar a `Array` accesible dentro de [funciones](/es/docs/Web/JavaScript/Guide/Functions) que contiene los valores de los argumentos pasados a esa función.

{{EmbedInteractiveExample("pages/js/functions-arguments.html")}}La fuente de este ejemplo interactivo se almacena en un repositorio de GitHub. Si deseas contribuir al proyecto de ejemplos interactivos, clona <https://github.com/mdn/interactive-examples> y envíanos una solicitud de extracción.

## Descripción

> **Nota:** Si estás escribiendo código compatible con ES6, entonces se deben preferir los {{jsxref("Functions/rest_parameters", "parámetros resto")}}.

> **Nota:** "similar a Array" significa que `arguments` tiene una propiedad {{jsxref("Functions/arguments/length", "lenght")}} y propiedades indexadas desde cero, pero no tiene métodos integrados de {{jsxref("Array")}} como {{jsxref("Array.forEach", "forEach()")}} o {{jsxref("Array.map", "map()")}}. Ve la [§Descripción](#Descripción) para obtener más detalles.

El objeto `arguments` es una variable local disponible en todas las funciones que no son {{jsxref("Functions/Arrow_functions", "funciones flecha")}}. Puedes hacer referencia a los argumentos de una función dentro de esa función utilizando su objeto `arguments`. Tiene entradas para cada argumento con el que se llamó a la función, con el índice de la primera entrada en `0`.

Por ejemplo, si a una función se le pasan 3 argumentos, puedes acceder a ellos de la siguiente manera:

```js
arguments[0]; // primer argumento
arguments[1]; // segundo argumento
arguments[2]; // tercer argumento
```

También puedes establecer o reasignar cada argumento:

```js
arguments[1] = "new value";
```

El objeto `arguments` no es un {{jsxref("Array")}}. Es similar, pero carece de todas las propiedades de `Array` excepto de {{jsxref("Array.length", "length")}}. Por ejemplo, no tiene el método {{jsxref("Array.pop", "pop()")}}.

Sin embargo, se puede convertir en un `Array` real:

```js
var args = Array.prototype.slice.call(arguments);
// El uso de un arreglo literal es más corto que el anterior pero asigna un arreglo vacío
var args = [].slice.call(arguments);
```

Así como puedes hacer con cualquier objeto tipo `Array`, puedes usar el método {{jsxref("Array.from()")}} de ES2015 o la {{jsxref("Operators/Spread_syntax", "propagación de sintaxis")}} para convertir `arguments` en un arreglo real:

```js
let args = Array.from(arguments);
// o
let args = [...arguments];
```

El objeto `arguments` es útil para funciones llamadas con más argumentos de los que declara aceptar formalmente. Esta técnica es útil para funciones a las que se les puede pasar un número variable de argumentos, como {{jsxref("Math.min()")}}. Esta función de ejemplo acepta cualquier número de argumentos de cadena y devuelve la más larga:

```js
function longestString() {
  var longest = "";
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i].length > longest.length) {
      longest = arguments[i];
    }
  }
  return longest;
}
```

Puedes usar {{jsxref("Functions/arguments/lenght", "arguments.length")}} para contar con cuántos argumentos se llamó a la función. Si, en cambio, deseas contar cuántos parámetros se declara que acepta una función, inspecciona la propiedad {{jsxref("Function.length", "length")}} de esa función.

### Usar `typeof` con `arguments`

El operador {{jsxref("Operators/typeof", "typeof")}} devuelve `'object'` cuando se usa con `arguments`

```js
console.log(typeof arguments); // 'object'
```

El tipo de argumentos individuales se puede determinar indexando `arguments`:

```
console.log(typeof arguments[0]); // devuelve el tipo del primer argumento
```

## Propiedades

- {{jsxref("Functions/arguments/callee", "arguments.callee")}}
  - : Referencia a la función en ejecución a la que pertenecen los argumentos. Prohibida en modo estricto.
- {{jsxref("Functions/arguments/length", "arguments.length")}}
  - : El número de argumentos que se pasaron a la función.
- {{jsxref("Functions/arguments/@@iterator", "arguments[@@iterator]")}}
  - : Devuelve un nuevo objeto {{jsxref("Array/@@iterator", "Array iterator", "", 0)}} que contiene los valores de cada índice en `arguments`.

## Ejemplos

### Definición de una función que concatena varias cadenas

Este ejemplo define una función que concatena varias cadenas. El único argumento formal de la función es una cadena que contiene los caracteres que separan los elementos a concatenar.

```js
function myConcat(separator) {
  let args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
}
```

Puedes pasar tantos argumentos como desees a esta función. Devuelve una lista de cadenas usando cada argumento en la lista:

```js
// returns "red, orange, blue"
myConcat(", ", "red", "orange", "blue");

// devuelve "elephant; giraffe; lion; cheetah"
myConcat("; ", "elephant", "giraffe", "lion", "cheetah");

// devuelve "sage. basil. oregano. pepper. parsley"
myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");
```

### Definición de una función que crea listas HTML

Este ejemplo define una función que crea una cadena que contiene HTML para una lista. El único argumento formal para la función es una cadena que es "`u`" si la lista debe estar {{htmlelement("ul", "desordenada (con viñetas)")}}, u "`o`" si la lista es {{htmlelement("ol", "ordenada (numerada)")}}. La función se define de la siguiente manera:

```js
function list(type) {
  var html = "<" + type + "l><li>";
  var args = Array.prototype.slice.call(arguments, 1);
  html += args.join("</li><li>");
  html += "</li></" + type + "l>"; // fin de la lista
  return html;
}
```

Puedes pasar cualquier número de argumentos a esta función y agregar cada argumento como un elemento de lista a una lista del tipo indicado. Por ejemplo:

```js
let listHTML = list("u", "One", "Two", "Three");

/* la listHTML es:
"<ul><li>One</li><li>Two</li><li>Three</li></ul>"
*/
```

### Parámetros `rest`, predeterminados y desestructurados

El objeto `arguments` se puede utilizar junto con parámetros {{jsxref("Functions/rest_parameters", "rest")}}, {{jsxref("Functions/Default_parameters", "predeterminados")}} y {{jsxref("Operators/Destructuring_assignment", "desestructurados")}}.

```js
function foo(...args) {
  return args;
}
foo(1, 2, 3); // [1, 2, 3]
```

Si bien la presencia de parámetros `rest`, predeterminados o desestructurados no altera [el comportamiento del objeto `arguments` en el código de modo estricto](/es/docs/Web/JavaScript/Reference/Strict_mode#Haciendo_eval_y_arguments_más_simples), existen sutiles diferencias para el código no estricto.

En el código de modo estricto, el objeto `arguments` se comporta de la misma manera independientemente de que se pasen parámetros `rest`, predeterminados o desestructurados a una función. Es decir, asignar nuevos valores a las variables en el cuerpo de la función no afectará al objeto `arguments`. La asignación de nuevas variables al objeto `arguments` tampoco afectará el valor de las variables.

> **Nota:** No puedes escribir una directiva `"use strict";` en el cuerpo de una definición de función que acepte parámetros `rest`, predeterminados o desestructurados. Si lo haces, generará un {{jsxref("Errors/Strict_Non_Simple_Params", "error de sintaxis")}}.

Las funciones no estrictas a las que se les pasan solo parámetros simples (es decir, no parámetros `rest`, predeterminados o desestructurados) sincronizarán el valor de los nuevos valores de las variables en el cuerpo de la función con el objeto `arguments`, y viceversa:

```js
function func(a) {
  arguments[0] = 99; // actualiza arguments[0] además actualiza a
  console.log(a);
}
func(10); // 99
```

Y también:

```js
function func(a) {
  a = 99; // la actualización también actualiza arguments[0]
  console.log(arguments[0]);
}
func(10); // 99
```

Por el contrario, las funciones no estrictas a las que **se les pasan** parámetros `rest`, predeterminados o desestructurados **no** sincronizarán los nuevos valores asignados a las variables de los argumentos en el cuerpo de la función con el objeto `arguments`. En cambio, el objeto `arguments` en funciones no estrictas con parámetros complejos **siempre** reflejarán los valores pasados a la función cuando se invocó (este es el mismo comportamiento exhibido por todas las funciones en modo estricto, independientemente del tipo de variables que se le pasen):

```js
function func(a = 55) {
  arguments[0] = 99; // actualizar arguments[0] tampoco actualiza a
  console.log(a);
}
func(10); // 10
```

Y también:

```js
function func(a = 55) {
  a = 99; // actualizar a tampoco actualiza arguments[0]
  console.log(arguments[0]);
}
func(10); // 10
```

Y también:

```js
// Un parámetro predeterminado sin seguimiento
function func(a = 55) {
  console.log(arguments[0]);
}
func(); // undefined
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ve también

- {{jsxref("Function", "Función")}}
- {{jsxref("Functions/rest_parameters", "Parámetros resto")}}
