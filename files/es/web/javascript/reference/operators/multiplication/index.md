---
title: Multiplicación (*)
slug: Web/JavaScript/Reference/Operators/Multiplication
l10n:
  sourceCommit: c6a18542128d1743b208c24de2333f61b601f1a9
---

{{jsSidebar("Operators")}}

El operador de **multiplicación (`*`)** produce el producto de dos operandos.

{{InteractiveExample("JavaScript Demo: Expressions - Multiplication operator")}}

```js interactive-example
console.log(3 * 4);
// Expected output: 12

console.log(-3 * 4);
// Expected output: -12

console.log("3" * 2);
// Expected output: 6

console.log("foo" * 2);
// Expected output: NaN
```

## Sintaxis

```js-nolint
x * y
```

## Descripción

El operador `*` acepta dos tipos de operandos: número y [BigInt](/es/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Primero [intenta transformar ambos operandos a valores numéricos](/es/docs/Web/JavaScript/Data_structures#numeric_coercion) y prueba sus tipos. Realiza una multiplicación BigInt si ambos operandos se convierten en BigInts; de lo contrario, realiza la multiplicación de números. Se genera un {{jsxref("TypeError")}} si un operando es convertido a BigInt pero el otro se convierte en un número.

## Ejemplos

### Multiplicación usando números

```js
2 * 2; // 4
-2 * 2; // -4
```

### Multiplicación usando Infinito

```js
Infinity * 0; // NaN
Infinity * Infinity; // Infinity
```

### Multiplicación con elementos que no son números

```js
"foo" * 2; // NaN
"2" * 2; // 4
```

### Multiplicación usando BigInts

```js
2n * 2n; // 4n
-2n * 2n; // -4n

2n * 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions

// Para multiplicar un BigInt por un elemento que no es un BigInt, convierta cualquiera de los dos operandos
2n * BigInt(2); // 4n
Number(2n) * 2; // 4
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Adición (`+`)](/es/docs/Web/JavaScript/Reference/Operators/Addition)
- [Sustracción (`-`)](/es/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [División (`/`)](/es/docs/Web/JavaScript/Reference/Operators/Division)
- [Resto (`%`)](/es/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponenciación (`**`)](/es/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Incremento (`++`)](/es/docs/Web/JavaScript/Reference/Operators/Increment)
- [Decremento (`--`)](/es/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Negación Unaria (`-`)](/es/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unario más (`+`)](/es/docs/Web/JavaScript/Reference/Operators/Unary_plus)
