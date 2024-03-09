---
title: Incremento (++)
slug: Web/JavaScript/Reference/Operators/Increment
l10n:
  sourceCommit: f616cb604af851f77f8cd59368e94ee3e43a8838
---

{{jsSidebar("Operators")}}

El operador de **incremento (`++`)** (agregar uno a) su operando y retorna el valor antes o despues del incremento, dependiendo de dónde está posicionado el operador.

{{EmbedInteractiveExample("pages/js/expressions-increment.html")}}

## Sintaxis

```js-nolint
x++
++x
```

## Descripción

The `++` operator is overloaded for two types of operands: number and [BigInt](/es/docs/Web/JavaScript/Reference/Global_Objects/BigInt). It first [coerces the operand to a numeric value](/es/docs/Web/JavaScript/Data_structures#numeric_coercion) and tests the type of it. It performs BigInt increment if the operand becomes a BigInt; otherwise, it performs number increment.
El operador `++` acepta dos tipos de operandos: número y [BigInt](/es/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Primero [intenta transformar ambos operandos a valores numéricos](/es/docs/Web/JavaScript/Data_structures#numeric_coercion) y prueba sus tipos. Realiza una incremento con BigInt si ambos operandos se convierten en BigInts; de lo contrario, realiza el incremento de números.

Si se usa postfijo, con el operador después del operando (por ejemplo, `x++`), el operador de incremento incrementa y devuelve el valor antes de incrementar.

Si se usa un prefijo, con un operador antes del operando (por ejemplo, `++x`), el operador de incremento incrementa y devuelve el valor después del incremento.

El operador de incremento solo se puede aplicar a operandos que son referencias (variables y propiedades de objetos; es decir, [objetivos de asignación](/es/docs/Web/JavaScript/Reference/Operators/Assignment) válidos). `++x` se evalúa como un valor, no como una referencia, por lo que no se pueden encadenar varios operadores de incremento.

```js-nolint example-bad
++(++x); // SyntaxError: Invalid left-hand side expression in prefix operation
```

## Ejemplos

### Incremento postfijo

```js
let x = 3;
const y = x++;
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n
```

### Incremento prefijo

```js
let x = 3;
const y = ++x;
// x is 4; y is 4

let x2 = 3n;
const y2 = ++x2;
// x2 is 4n; y2 is 4n
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Adición (`+`)](/es/docs/Web/JavaScript/Reference/Operators/Addition)
- [Sustracción (`-`)](/es/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [División (`/`)](/es/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplicación (`*`)](/es/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Resto (`%`)](/es/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponciación (`**`)](/es/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Decremento (`--`)](/es/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Negación Unaria (`-`)](/es/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary más (`+`)](/es/docs/Web/JavaScript/Reference/Operators/Unary_plus)
