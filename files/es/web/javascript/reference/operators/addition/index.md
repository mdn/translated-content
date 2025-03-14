---
title: Adición (+)
slug: Web/JavaScript/Reference/Operators/Addition
---

{{jsSidebar("Operators")}}

El operador de adición (`+`) produce la suma de operandos numéricos o la concatenación de (cadenas) string.

{{InteractiveExample("JavaScript Demo: Expressions - Addition operator")}}

```js interactive-example
console.log(2 + 2);
// Expected output: 4

console.log(2 + true);
// Expected output: 3

console.log("hello " + "everyone");
// Expected output: "hello everyone"

console.log(2001 + ": A Space Odyssey");
// Expected output: "2001: A Space Odyssey"
```

La fuente para este ejemplo interactivo está almacenado en un repositorio Github. Si te gustaría contribuir al proyecto de ejemplos interactivos, por favor clona <https://github.com/mdn/interactive-examples> y envianos una pull-request.

## Sintaxis

```
Operator: x + y
```

## Ejemplos

### Adición numérica

```js
// Número + Número -> adición
1 + 2; // 3

// Booleano + Número -> adición
true + 1; // 2

// Booleano + Booleano -> adición
false + false; // 0
```

### Concatenación de (cadenas) String

```js
// String + String -> concatenación
"fut" + "bol"; // "futbol"

// Número + String -> concatenación
5 + "oh"; // "5oh"

// String + Booleano -> concatenación
"fut" + false; // "futfalse"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## También revisa

- [Subtraction operator](/es/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Division operator](/es/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplication operator](/es/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Remainder operator](/es/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponentiation operator](/es/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Increment operator](/es/docs/Web/JavaScript/Reference/Operators/Increment)
- [Decrement operator](/es/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unary negation operator](/es/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary plus operator](/es/docs/Web/JavaScript/Reference/Operators/Unary_plus)
