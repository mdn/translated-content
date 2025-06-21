---
title: Negación unaria  (-=)
slug: Web/JavaScript/Reference/Operators/Unary_negation
l10n:
  sourceCommit: f616cb604af851f77f8cd59368e94ee3e43a8838
---

{{jsSidebar("Operators")}}

El operador de **negación unaria (`-`)** precede a su operando y lo niega.

{{InteractiveExample("JavaScript Demo: Expressions - Unary negation operator")}}

```js interactive-example
const x = 4;
const y = -x;

console.log(y);
// Expected output: -4

const a = "4";
const b = -a;

console.log(b);
// Expected output: -4
```

## Sintaxis

```js-nolint
-x
```

## Descripción

El operador `-` acepta dos tipos de operandos: número y [BigInt](/es/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Primero [intenta transformar el operando a un valor numérico](/es/docs/Web/JavaScript/Data_structures#numeric_coercion) y prueba su tipo. Realiza una negación BigInt si elo operando se convirtió en un BigInt; de lo contrario, realiza la negación de número.

## Ejemplos

### Negando números

```js
const x = 3;
const y = -x;
// y es -3; x es 3
```

### Negando elementos que no son números

El operador de negación unaria puede convertir elementos que no son números en números.

```js
const x = "4";
const y = -x;

// y es -4
```

Los BigInt pueden ser negados usando el operador de negación unaria.

```js
const x = 4n;
const y = -x;

// y is -4n
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
- [Exponenciación (`**`)](/es/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Incremento (`++`)](/es/docs/Web/JavaScript/Reference/Operators/Increment)
- [Decremento (`--`)](/es/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unario más (`+`)](/es/docs/Web/JavaScript/Reference/Operators/Unary_plus)
