---
title: "TypeError: cannot use 'in' operator to search for 'x' in 'y'"
slug: Web/JavaScript/Reference/Errors/in_operator_no_object
---

{{jsSidebar("Errors")}}

## Mensaje

```
TypeError: cannot use 'in' operator to search for 'x' in 'y' (Firefox, Chrome)
```

## Tipo de Error

{{jsxref("TypeError")}}

## ¿Qué salió mal?

El [operador `in`](/es/docs/Web/JavaScript/Reference/Operators/in) puede ser usado sólo para verificar si una propiedad se encuentra en un objeto. No puede buscar en cadenas de caracteres, o en números, u otro tipo primitivo.

## Ejemplos

### Buscando en cadenas de caracteres

A diferencia de otros lenguajes de programación (ej. Python), no puede buscar cadenas de texto usando el [operator `in`](/es/docs/Web/JavaScript/Reference/Operators/in).

```js example-bad
"Hello" in "Hello World";
// TypeError: cannot use 'in' operator to search for 'Hello' in 'Hello World'
```

En su lugar, deberá usar {{jsxref("String.prototype.indexOf()")}}, por ejemplo.

```js example-good
"Hello World".indexOf("Hello") !== -1;
// true
```

### El operando no puede ser `null` o `undefined`

Asegúrese que el objeto que está inspeccionando no sea {{jsxref("null")}} o {{jsxref("undefined")}}.

```js example-bad
var foo = null;
"bar" in foo;
// TypeError: cannot use 'in' operator to search for 'bar' in 'foo'
```

El operador `in` siempre espera un objeto.

```js example-good
var foo = { baz: "bar" };
"bar" in foo; // false

"PI" in Math; // true
"pi" in Math; // false
```

### Buscando en arreglos

Tenga cuidado cuando use el operador `in` para buscar en objetos {{jsxref("Array")}}. El operador `in` verifica el índice numérico, no el valor de dicho índice.

```js
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
3 in trees; // true
"oak" in trees; // false
```

## Vea también

- [`in` operator](/es/docs/Web/JavaScript/Reference/Operators/in)
