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

## Sintaxis

```
Operator: x + y
```

## Descripción

El operador (`+`) se sobrecarga por dos operaciones distintas: suma numérica y concatenación de string (cadena de caracteres). Cuando evalua, primero coerciona ambos operandos a sus valores primitivos. Después, los dos tipos de los operandos son probados en el siguiente orden:
- Si un lado es un string, el otro operando es también convertido a string y ambos son concatenados.
- Si ambos son [BigInts](es/docs/Web/JavaScript/Reference/Global_Objects/BigInt), la suma de BigInt es realizada. Si un lado de la operación es un BigInt y la otra no, la operación arroja un [TypeError](es/docs/Web/JavaScript/Reference/Global_Objects/TypeError).
- Como ultima opción, ambos valores en la suma son convertidos a números, y la suma numérica es realizada.

La concatenación de strings es frecuentemente pensada como equivalente con [plantillas literales](es/docs/Web/JavaScript/Reference/Template_literals) o con [`String.prototype.concat()`](es/docs/Web/JavaScript/Reference/Global_Objects/String/concat), pero no lo son. La suma coerciona a la expresión hacia un _primitivo_, lo que llama prioritariamente a [`valueOf()`](es/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf); por otro lado, las plantillas literales y `concat()` coercionan la expresión a un _string_, el cual llama prioritariamente a [`toString()`](es/docs/Web/JavaScript/Reference/Global_Objects/Object/toString). Si la expresión tiene un método [`[Symbol.toPrimitive]()`](es/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive), la concatenación de string lo llama con `"default"` como indicio, mientras que una pantilla literal usa `"string"`. Esto es importante para objetos que tienen diferentes representaciones de string y primitivo, como es el caso de {{jsxref("Temporal")}}, cuyos métodos de objetos `valueOf()` arrojan:

```js
const t = Temporal.Now.instant();
"" + t; // Arroja TypeError
`${t}`; // '2022-07-31T04:48:56.113918308Z'
"".concat(t); // '2022-07-31T04:48:56.113918308Z'
```

Se advierte no usar `"" + x` para realizar coerción de strings.

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

### Adición usando BigInts

```js
1n + 2n; // 3n
```

No puedes mezclar operandos BigInt y numérico en una suma. `null`, `undefined`, y valores booleanos son coercionados a números y quedan prohibidos también.

```js example-bad
1n + 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 + 1n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

Los string tienen prioridad sobre otros tipos, asi que sumar un string a un BigInt produce una concatenación de string en vez de un `TypeError`.

```js
"1" + 2n; // "12"
```

Para realizar una suma entre un operando BigInt y uno que no es BigInt, convierta cualquiera de los operandos:

```js
1n + BigInt(2); // 3n
Number(1n) + 2; // 3
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
