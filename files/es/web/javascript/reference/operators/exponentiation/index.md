---
title: Exponenciación (**)
slug: Web/JavaScript/Reference/Operators/Exponentiation
l10n:
  sourceCommit: 18ff4e50476f7420f5ff744b53c49b8cd890d19d
---

{{jsSidebar("Operators")}}

El operador de **exponenciación (`**`)\*\* retorna el resultado de elevar el primer operando a la potencia del segundo operando. Es equivalente a {{jsxref("Math.pow()")}}, exepto que también acepta [BigInts](/es/docs/Web/JavaScript/Reference/Global_Objects/BigInt) como operandos.

{{InteractiveExample("JavaScript Demo: Expressions - Exponentiation operator")}}

```js interactive-example
console.log(3 ** 4);
// Expected output: 81

console.log(10 ** -2);
// Expected output: 0.01

console.log(2 ** (3 ** 2));
// Expected output: 512

console.log((2 ** 3) ** 2);
// Expected output: 64
```

## Sintaxis

```js-nolint
x ** y
```

## Descripción

El operador `**` acepta dos tipos de operandos: número y [BigInt](/es/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Primero [intenta transformar los operandos a un valor numérico](/es/docs/Web/JavaScript/Data_structures#numeric_coercion) y prueba sus tipos. Realiza una exponenciación BigInt si el operando se convirtió en un BigInt; de lo contrario, realiza la negación de número. Se genera un {{jsxref("TypeError")}} si un operando es convertido a BigInt pero el otro se convierte en un número.

Tanto para números como para BigInts, `0` elevado a una potencia positiva devuelve `0` y `0` elevado a una potencia de `0` devuelve `1`. Para números, `0` elevado a un número negativo devuelve `Infinity`, mientras que `-0` elevado a un número negativo devuelve `-Infinity`.

`NaN ** 0` (y su equivalente `Math.pow(NaN, 0)`) es el único caso en el que {{jsxref("NaN")}} no se propaga a través de operaciónes matemáticas: devuelve `1` a pesar de que el operando sea `NAN`. Además, cuando la base es 1 y el exponente no es infinito, (±Infinity o `NaN`) el comportamiento es diferente a IEEE 754, el cual especifica que el resultado debería ser 1, sin embargo JavaScript retorna `NAN` para preservar la compatibilidad con versiones anteriores con su comportamiento original.

Para exponenciación con BigInt, un {{jsxref("RangeError")}} es generado si el exponente `y` es negativo. Esto es porque cualquier exponente negativo probablemente daría como resultado un valor entre 0 y 1 (a menos que la base sea `1`, `-1` o `0`), que se redondea a cero y probablemente sea un error del desarrollador.

El operador de exponenciación es [asociativo derecho](/es/docs/Web/JavaScript/Reference/Operators/Operator_precedence): `a ** b ** c` es igual a `a ** (b ** c)`.

En muchos lenguajes como PHP, Python y otros que tienen un operador de exponenciación (`**`), el operador de exponenciación está definido que el operador de exponenciación tiene una precedencia mayor que los operadores unarios, como el unario `+` y el unario `-`, pero existen algunas exepciones. Por ejemplo, en Bash, `**` se define que el operador tiene una precedencia menor que los operadores unarios.

En JavaScript es imposible escribir una expresión de exponenciación ambigua. Es decir, no se puede colocar un operador unario (con [precedencia 14](/es/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table), incluyendo `+`/`-`/`~`/`!`/`++`/`--`/`delete`/`void`/`typeof`/`await`) inmediatamente antes de el número base; [hacerlo provocará un error de sintaxis](/es/docs/Web/JavaScript/Reference/Errors/Unparenthesized_unary_expr_lhs_exponentiation).

Por ejemplo, `-2 ** 2` es 4 en Bah, pero es -4 en otros lenguajes (como Python). Esto es inválido en JavaScript, ya que la operación es ambigua. Se tiene que poner entre paréntesis cada lado (`-(2 ** 2)` por ejemplo) para que la intención no sea ambigua.

Tenga en cuenta que algunos lenguajes de programación usan el símbolo de intercalación ^para la exponenciación, pero JavaScript usa ese símbolo para el [operador XOR bit a bit](/es/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR).

## Ejemplos

### Exponenciación básica

```js
2 ** 3; // 8
3 ** 2; // 9
3 ** 2.5; // 15.588457268119896
10 ** -1; // 0.1
2 ** 1024; // Infinity
NaN ** 2; // NaN
NaN ** 0; // 1
1 ** Infinity; // NaN

2n ** 3n; // 8n
2n ** 1024n; // Un número muy grande, pero no infinito.

2n ** 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions

// Para hacer una exponenciación con un BigInt y un elemento que no es un BigInt, convierta cualquiera de los dos operandos
2n ** BigInt(2); // 4n
Number(2n) ** 2; // 4
```

### Asociatividad

```js-nolint
2 ** 3 ** 2; // 512
2 ** (3 ** 2); // 512
(2 ** 3) ** 2; // 64
```

### Uso con operadores unarios

Para invertir el signo del resultado de una expresión de exponenciación:

```js
-(2 ** 2); // -4
```

Para forzar que la base de una expresión de exponenciación sea un número negativo:

```js
(-2) ** 2; // 4
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
- [Incremento (`++`)](/es/docs/Web/JavaScript/Reference/Operators/Increment)
- [Decremento (`--`)](/es/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Negación unaria (`-`)](/es/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unario más (`+`)](/es/docs/Web/JavaScript/Reference/Operators/Unary_plus)
