---
title: Operador nullish coalescing (??)
slug: Web/JavaScript/Reference/Operators/Nullish_coalescing
page-type: javascript-operator
browser-compat: javascript.operators.nullish_coalescing
---

{{JSSidebar("Operators")}}

El operador **nullish coalescing (`??`)** es un operador lógico que retorna el operando de lado derecho cuando el operando de lado izquierdo es [`null`](/es/docs/Web/JavaScript/Reference/Operators/null) or {{jsxref("undefined")}}, 
y en caso contrario retorna el operando de lado izquierdo.

{{EmbedInteractiveExample("pages/js/expressions-nullishcoalescingoperator.html")}}

## Sintaxis

```js-nolint
expresionIzquierda ?? expresionDerecha
```

## Descripción

El operador nullish coalescing puede ser visto como un caso especial del [operador lógico OR (`||`)](/es/docs/Web/JavaScript/Reference/Operators/Logical_OR). Este último retorna el operando de lado derecho si el operando izquierdo es _cualquier_ valor {{Glossary("falsy")}}, no solo `null` o `undefined`. En otras palabras, si se usa `||` para proveer algún valor por defecto a otra variable `foo`, se puede encontrar comportamientos inesperados si se considera algún valor falsy como usable (por ejemplo, `''` o `0`). Véase [debajo](#asignación-de-un-valor-por-defecto-a-una-variable) para más ejemplos.

El operador nullish coalescing tiene la quinta más baja [precedencia de operadores](/es/docs/Web/JavaScript/Reference/Operators/Operator_precedence), directamente por debajo de `||` y por arriba del [operador condicional (ternario)](/es/docs/Web/JavaScript/Reference/Operators/Conditional_operator).

No es posible combinar ambos operadores AND (`&&`) y OR (`||`) directamente con `??`. Un [error de sintasix](/es/docs/Web/JavaScript/Reference/Errors/Cant_use_nullish_coalescing_unparenthesized) será lanzado en tales casos.


```js example-bad
null || undefined ?? "foo"; // lanza un error de sintasix (SyntaxError)
true && undefined ?? "foo"; // lanza un error de sintasix (SyntaxError)
```

En su lugar, agregue paréntesis para explícitamente indicar la precedencia:

```js example-good
(null || undefined) ?? "foo"; // retorna "foo"
```

## Ejemplos

### Usando el operador nullish coalescing

En este ejemplo, proveeremos valores por defecto pero mantendremos los valores que no sean `null` o `undefined`.

```js
const valorNull = null;
const textoVacio = ""; // falsy
const algunNumero = 42;

const valorA = valorNull ?? "default para A";
const valorB = textoVacio ?? "default para B";
const valorC = algunNumero ?? 0;

console.log(valorA); // "default para A"
console.log(valorB); // "" (ya que el valor vacío no es null or undefined)
console.log(valorC); // 42
```

### Asignación de un valor por defecto a una variable

Antes, cuando se quería asignar un valor por defecto a una variable, un patrón común era usar el operador lógico OR ([`||`](/es/docs/Web/JavaScript/Reference/Operators/Logical_OR)):

```js
let foo;

// nunca es asignado un valor a foo por lo que se mantiene undefined
const algunTextoDePrueba = foo || "¡Hola!";
```

Sin embargo, debido a que `||` es un operador lógico booleano, el operando de lado izquierdo fue convertido a un booleano para la evaluación y cualquier valor _falsy_ (incluyendo `0`, `''`, `NaN`, `false`, etc.) no fue retornado. Este comportamiento puede causar consecuencias inesperadas si se considera `0`, `''`, o `NaN` como valores válidos.

```js
const contador = 0;
const texto = "";

const cantidad = contador || 42;
const mensaje = texto || "¡hola!";
console.log(cantidad); // 42 y no 0
console.log(mensaje); // "¡hola!" y no ""
```

El operador nullish coalescing evita esta trampa ya que solo retorna el segundo operando cuando el primero evalúa a `null` o `undefined` (pero ningún otro valor falsy):


```js
const miTexto = ""; // Un texto vacío (que también es un valor falsy)

const textoNoFalsy = miTexto || "Hola mundo";
console.log(textoNoFalsy); // Hola mundo

const manteniendoFalsy = miTexto ?? "Hola vecino";
console.log(manteniendoFalsy); // '' (porque miTexto no es undefined ni null)
```

### Cortocircuito (Short-circuiting)

Así como los operadores OR y AND, la expresión de lado derecho no es evaluada si el lado izquierdo no es `null` ni `undefined`.


```js
function A() {
  console.log("A fue ejecutada");
  return undefined;
}
function B() {
  console.log("B fue ejecutada");
  return false;
}
function C() {
  console.log("C fue ejecutada");
  return "foo";
}

console.log(A() ?? C());
// Muestra "A fue ejecutada" después "C fue ejecutada" y después "foo"
// ya que como A() retornó undefined ambas expresiones fueron evaluadas

console.log(B() ?? C());
// Muestra "B fue ejecutada" después "false"
// ya que como B() retornó false (y no null ni undefined),
// la expresión de lado derecho no fue evaluada
```

### Relación con el operador de encadenamiento opcional (?.)

El operador nullish coalescing trata `undefined` y `null` como valores específicos. Así como lo hace el [operador de encadenamiento opcional (`?.`)](/es/docs/Web/JavaScript/Reference/Operators/Optional_chaining), el cual es útil para acceder a una propiedad de un objeto que puede ser `null` or `undefined`. Combinándolos, se puede acceder de manera segura a una propiedad de un objeto que puede ser nulo y proveer un valor por defecto si lo es.

```js
const foo = { algunaPropiedadFoo: "hola" };

console.log(foo.algunaPropiedadFoo?.toUpperCase() ?? "no disponible"); // "hola"
console.log(foo.algunaPropiedadBar?.toUpperCase() ?? "no disponible"); // "no disponible"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Veáse también

- [Operador de asignación nullish coalescing (`??=`)](/es/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)
- [Operador de encadenamiento opcional (`?.`)](/es/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Operador lógico OR (`||`)](/es/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [Parámetros por defecto en funciones](/es/docs/Web/JavaScript/Reference/Functions/Default_parameters)
