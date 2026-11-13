---
title: Asignación de sustracción  (-=)
slug: Web/JavaScript/Reference/Operators/Subtraction_assignment
l10n:
  sourceCommit: 71cf0cb885d46d83af054ae4df350248e246f006
---

{{jsSidebar("Operators")}}

El **operador de asignación de sustracción (`-=`)** realiza una [resta](/es/docs/Web/JavaScript/Reference/Operators/Subtraction) en los dos operandos y asigna el resultado al operando izquierdo.

{{InteractiveExample("JavaScript Demo: Expressions - Subtraction assignment operator")}}

```js interactive-example
let a = 2;

console.log((a -= 3));
// Expected output: -1

console.log((a -= "Hello"));
// Expected output: NaN
```

## Sintaxis

```js-nolint
x -= y
```

## Descripción

`x -= y` es equivalente a `x = x - y`, exepto que la expresión `x` se evalúa una sola vez.

## Ejemplos

### Usando el operador de asignación de sustracción

```js
let bar = 5;

bar -= 2; // 3
bar -= "foo"; // NaN

let foo = 3n;
foo -= 2n; // 1n
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Operadores de asignación en la guía JS](/es/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Sustracción (`-`)](/es/docs/Web/JavaScript/Reference/Operators/Subtraction)
