---
title: Asignación de adición (+=)
slug: Web/JavaScript/Reference/Operators/Addition_assignment
l10n:
  sourceCommit: 71cf0cb885d46d83af054ae4df350248e246f006
---

{{jsSidebar("Operators")}}

El **operador de asignación de adición (`+=`)** realiza una [suma](/es/docs/Web/JavaScript/Reference/Operators/Addition) (que puede ser una suma numérica o una concatenación de cadenas) en los dos operandos y asigna el resultado al operando izquierdo.

{{InteractiveExample("JavaScript Demo: Expressions - Addition assignment operator")}}

```js interactive-example
let a = 2;
let b = "hello";

console.log((a += 3)); // Addition
// Expected output: 5

console.log((b += " world")); // Concatenation
// Expected output: "hello world"
```

## Sintaxis

```js-nolint
x += y
```

## Descripción

`x += y` es equivalente a `x = x + y`, exepto que la expresión `x` se evalúa solo una vez.

## Ejemplos

### Usando el operador de asignación de adición

```js
let baz = true;

// Booleano + Número -> adición
baz += 1; // 2

// Número + Booleano -> adición
baz += false; // 2
```

```js
let foo = "foo";

// Cadena de texto + Booleano -> concatenación
foo += false; // "foofalse"

// Cadena de texto + Cadena de texto -> concatenación
foo += "bar"; // "foofalsebar"
```

```js
let bar = 5;

// Número + Número -> adición
bar += 2; // 7

// Número + Cadena de texto -> concatenación
bar += "foo"; // "7foo"
```

```js
let x = 1n;

// BigInt + BigInt -> adición
x += 2n; // 3n

// BigInt + Número -> devuelve TypeError
x += 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Operadores de asignación en la guía JS](/es/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Adición (`+`)](/es/docs/Web/JavaScript/Reference/Operators/Addition)
