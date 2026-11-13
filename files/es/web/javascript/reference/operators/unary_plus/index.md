---
title: Unario más (+)
slug: Web/JavaScript/Reference/Operators/Unary_plus
l10n:
  sourceCommit: f616cb604af851f77f8cd59368e94ee3e43a8838
---

{{jsSidebar("Operators")}}

El operador **unario más (`+`)** precede a su operando y evalúa a su operando intentando [convertirlo en un número](/es/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), si aún no lo es.

{{InteractiveExample("JavaScript Demo: Expressions - Unary plus operator", "taller")}}

```js interactive-example
const x = 1;
const y = -1;

console.log(+x);
// Expected output: 1

console.log(+y);
// Expected output: -1

console.log(+"");
// Expected output: 0

console.log(+true);
// Expected output: 1

console.log(+false);
// Expected output: 0

console.log(+"hello");
// Expected output: NaN
```

## Sintaxis

```js-nolint
+x
```

## Descripción

Aunque la negación unaria (`-`) también puede convertir elementos que no sean números, el operador unario más es la forma más rápida y la preferida de convertir algo en un número, porque no realiza ninguna otra operación con el número.

El operador unario más sigue exactamente los mismos pasos que la [coerción numérica](/es/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) normal utilizada por la mayoría de los métodos integrados que esperan números. Puede convertir las representaciónes en cadenas de textos de enteros y flotantes, así como también valores que no son cadenas de texto como `true`, `false` y `null`. Se admiten números enteros en formato decimal y hexadecimal (con prefijo `0x`). Se admiten números negativos (aunque no los hexadecimales). Si no puede analizar un valor en particular, lo evaluará como {{jsxref("NaN")}}.A diferencia de otros operadores aritméticos, que funcionan tanto con números como con [BigInts](/es/docs/Web/JavaScript/Reference/Global_Objects/BigInt), el uso del operador `+` en valores BigInt genera un {{jsxref("TypeError")}}.

## Ejemplos

### Uso con números

```js
const x = 1;
const y = -1;

console.log(+x);
// 1
console.log(+y);
// -1
```

### Uso con elementos que no sean números

```js-nolint
+true  // 1
+false // 0
+null  // 0
+[]    // 0
+function (val) { return val; } // NaN
+1n    // throws TypeError: Cannot convert BigInt value to number
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
- [Negación unaria (`-`)](/es/docs/Web/JavaScript/Reference/Operators/Unary_negation)
