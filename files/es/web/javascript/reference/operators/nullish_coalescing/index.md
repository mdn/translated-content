---
title: Operador de coalescencia nula (??)
slug: Web/JavaScript/Reference/Operators/Nullish_coalescing
l10n:
  sourceCommit: d85a7ba8cca98c2f6cf67a0c44f0ffd467532f20
---

{{JSSidebar("Operators")}}

El operador **nullish coalescing (`??`)** (de coalescencia nula) es un operador lógico que retorna el operando de lado derecho cuando el operando de lado izquierdo es [`null`](/es/docs/Web/JavaScript/Reference/Operators/null) o {{jsxref("undefined")}},
y en caso contrario retorna el operando de lado izquierdo.

{{EmbedInteractiveExample("pages/js/expressions-nullishcoalescingoperator.html")}}

## Sintaxis

```js-nolint
expresionIzquierda ?? expresionDerecha
```

## Descripción

El operador _nullish coalescing_ puede ser visto como un caso especial del [operador lógico OR (`||`)](/es/docs/Web/JavaScript/Reference/Operators/Logical_OR). Este último retorna el operando de lado derecho si el operando izquierdo es _cualquier_ valor {{Glossary("falsy")}}, no solo `null` o `undefined`. En otras palabras, si se usa `||` para proveer algún valor por defecto a otra variable `foo`, se puede encontrar comportamientos inesperados si se considera algún valor _falsy_ como usable (por ejemplo, `''` o `0`). Consulte [a continuación](#Asignación_de_un_valor_por_defecto_a_una_variable) para más ejemplos.

El operador _nullish coalescing_ tiene la quinta más baja [precedencia de operadores](/es/docs/Web/JavaScript/Reference/Operators/Operator_precedence), directamente por debajo de `||` y por arriba del [operador condicional (ternario)](/es/docs/Web/JavaScript/Reference/Operators/Conditional_operator).

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
const nullValue = null;
const emptyText = ""; // falsy
const someNumber = 42;

const valA = nullValue ?? "predeterminado para A";
const valB = emptyText ?? "predeterminado para B";
const valC = someNumber ?? 0;

console.log(valA); // "predeterminado para A"
console.log(valB); // "" (ya que el valor vacío no es null ni undefined)
console.log(valC); // 42
```

### Asignación de un valor por defecto a una variable

Antes, cuando se quería asignar un valor por defecto a una variable, un patrón común era usar el operador lógico OR ([`||`](/es/docs/Web/JavaScript/Reference/Operators/Logical_OR)):

```js
let foo;

// nunca es asignado un valor a foo por lo que se mantiene undefined
const someDummyText = foo || "¡Hola!";
```

Sin embargo, debido a que `||` es un operador lógico booleano, el operando de lado izquierdo fue convertido a un booleano para la evaluación y cualquier valor _falsy_ (incluyendo `0`, `''`, `NaN`, `false`, etc.) no fue retornado. Este comportamiento puede causar consecuencias inesperadas si se considera `0`, `''`, o `NaN` como valores válidos.

```js
const count = 0;
const text = "";

const qty = count || 42;
const message = text || "¡hola!";
console.log(qty); // 42 y no 0
console.log(message); // "¡hola!" y no ""
```

El operador _nullish coalescing_ evita esta trampa ya que solo retorna el segundo operando cuando el primero evalúa a `null` o `undefined` (pero ningún otro valor _falsy_):

```js
const myText = ""; // Un texto vacío (que también es un valor falsy)

const notFalsyText = myText || "Hola mundo";
console.log(notFalsyText); // Hola mundo

const preservingFalsy = myText ?? "Hola vecino";
console.log(preservingFalsy); // '' (porque myText no es undefined ni null)
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

El operador _nullish coalescing_ trata `undefined` y `null` como valores específicos. Así como lo hace el [operador de encadenamiento opcional (`?.`)](/es/docs/Web/JavaScript/Reference/Operators/Optional_chaining), el cual es útil para acceder a una propiedad de un objeto que puede ser `null` o `undefined`. Combinándolos, se puede acceder de manera segura a una propiedad de un objeto que puede ser nulo y proveer un valor por defecto si lo es.

```js
const foo = { someFooProp: "hola" };

console.log(foo.someFooProp?.toUpperCase() ?? "no disponible"); // "hola"
console.log(foo.someBarProp?.toUpperCase() ?? "no disponible"); // "no disponible"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Veáse también

- [Operador de asignación de coalescencia nula (`??=`)](/es/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)
- [Operador de encadenamiento opcional (`?.`)](/es/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Operador lógico OR (`||`)](/es/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [Parámetros predeterminados](/es/docs/Web/JavaScript/Reference/Functions/Default_parameters)
