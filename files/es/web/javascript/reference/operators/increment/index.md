---
title: Incremento (++)
slug: Web/JavaScript/Reference/Operators/Increment
l10n:
  sourceCommit: f616cb604af851f77f8cd59368e94ee3e43a8838
---

{{jsSidebar("Operators")}}

El operador de **incremento (`++`)** incrementa (agrega uno a) su operando y retorna el valor antes o despues del incremento, dependiendo de dónde está posicionado el operador.

{{InteractiveExample("JavaScript Demo: Expressions - Increment operator")}}

```js interactive-example
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
```

## Sintaxis

```js-nolint
x++
++x
```

## Descripción

El operador `++` acepta dos tipos de operandos: número y [BigInt](/es/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Primero [intenta transformar ambos operandos a valores numéricos](/es/docs/Web/JavaScript/Data_structures#numeric_coercion) y prueba sus tipos. Realiza una incremento con BigInt si ambos operandos se convierten en BigInts; de lo contrario, realiza el incremento de números.

Si se usa postfijo, con el operador después del operando (por ejemplo, `x++`), el operador de incremento incrementa y devuelve el valor antes de incrementar.

Si se usa prefijo, con un operador antes del operando (por ejemplo, `++x`), el operador de incremento incrementa y devuelve el valor después del incremento.

El operador de incremento solo se puede aplicar a operandos que son referencias (variables y propiedades de objetos; es decir, [objetivos de asignación](/es/docs/Web/JavaScript/Reference/Operators/Assignment) válidos). `++x` se evalúa como un valor, no como una referencia, por lo que no se pueden encadenar varios operadores de incremento.

```js-nolint example-bad
++(++x); // SyntaxError: Invalid left-hand side expression in prefix operation
```

## Ejemplos

### Incremento postfijo

```js
let x = 3;
const y = x++;
// x es 4; y es 3

let x2 = 3n;
const y2 = x2++;
// x2 es 4n; y2 es 3n
```

### Incremento prefijo

```js
let x = 3;
const y = ++x;
// x es 4; y es 4

let x2 = 3n;
const y2 = ++x2;
// x2 es 4n; y2 es 4n
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
- [Unario más (`+`)](/es/docs/Web/JavaScript/Reference/Operators/Unary_plus)
