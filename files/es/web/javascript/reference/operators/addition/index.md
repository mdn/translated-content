---
title: Adición (+)
slug: Web/JavaScript/Reference/Operators/Addition
l10n:
  sourceCommit: 1133f9e054bad2340b98a608b7894fd7daa62af6
---

{{jsSidebar("Operators")}}

El operador de adición (`+`) produce la suma de operandos numéricos o la concatenación de (cadenas) string.

{{InteractiveExample("JavaScript Demo: Addition (+) operator")}}

```js interactive-example
console.log(2 + 2);
// Salida esperada: 4

console.log(2 + true);
// Salida esperada: 3

console.log("Hola " + "a todos");
// Salida esperada: "Hola a todos"

console.log(2001 + ": A Space Odyssey");
// Salida esperada: "2001: A Space Odyssey"
```

## Sintaxis

```
Operador: x + y
```

## Descripción

El operador (`+`) se sobrecarga por dos operaciones distintas: suma numérica y concatenación de string (cadena de caracteres). Cuando evalua, primero coerciona ambos operandos a sus valores primitivos. Después, los dos tipos de los operandos son probados en el siguiente orden:

- Si un lado es un string, el otro operando también se [convierte a string](/es/docs/Web/JavaScript/Reference/Global_Objects/String) y ambos se concatenan.
- Si ambos son [BigInts](/es/docs/Web/JavaScript/Reference/Global_Objects/BigInt), se realiza la suma de BigInt. Si un lado de la operación es un BigInt y el otro no, la operación arroja un {{jsxref("TypeError")}}.
- Como última opción, ambos valores se [convierten a números](/es/docs/Web/JavaScript/Reference/Global_Objects/Number) y se realiza la suma numérica.

La concatenación de strings es frecuentemente pensada como equivalente con [plantillas literales](/es/docs/Web/JavaScript/Reference/Template_literals) o con [`String.prototype.concat()`](/es/docs/Web/JavaScript/Reference/Global_Objects/String/concat), pero no lo son. La suma coerciona a la expresión hacia un _primitivo_, lo que llama prioritariamente a [`valueOf()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf); por otro lado, las plantillas literales y `concat()` coercionan la expresión a un _string_, el cual llama prioritariamente a [`toString()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/toString). Si la expresión tiene un método [`[Symbol.toPrimitive]()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive), la concatenación de string lo llama con `"default"` como indicio, mientras que una plantilla literal usa `"string"`. Esto es importante para objetos que tienen diferentes representaciones de string y primitivo, como es el caso de {{jsxref("Temporal")}}, cuyos objetos lanzan una excepción en todos sus métodos `valueOf()`.

```js
const t = Temporal.Now.instant();
"" + t; // Arroja TypeError
`${t}`; // '2022-07-31T04:48:56.113918308Z'
"".concat(t); // '2022-07-31T04:48:56.113918308Z'
```

Se recomienda no usar `"" + x` para realizar la [coerción a string](/es/docs/Web/JavaScript/Reference/Global_Objects/String).

## Ejemplos

### Adición numérica

```js
// número + número -> resultado de la adición
1 + 2; // Salida esperada: 3

// booleano + número -> resultado de la adición
true + 1; // Salida esperada: 2

// booleano + booleano -> resultado de la adición
false + false; // Salida esperada: 0
```

### Adición usando BigInts

```js
1n + 2n; // Salida esperada: 3n
```

No puedes mezclar operandos BigInt y numérico en una suma. `null`, `undefined`, y valores booleanos son coercionados a números y quedan prohibidos también.

```js example-bad
1n + 2; // La consola arrojará TypeError: Cannot mix BigInt and other types, use explicit conversions
2 + 1n; // La consola arrojará TypeError: Cannot mix BigInt and other types, use explicit conversions
```

Los string tienen prioridad sobre otros tipos, así que sumar un string a un BigInt produce una concatenación de string en vez de un `TypeError`.

```js
"1" + 2n; // Salida esperada: "12"
```

Para realizar una suma entre un operando BigInt y uno que no es BigInt, convierte cualquiera de los operandos:

```js
1n + BigInt(2); // Salida esperada: 3n
Number(1n) + 2; // Salida esperada: 3
```

### Concatenación de strings

Si uno de los operandos es un string, el otro operando es convertido a string y son concatenados:

```js
// string + string -> concatenación
"fut" + "bol"; // "futbol"

// número + string -> concatenación
5 + "bol"; // "5bol"

// string + booleano -> concatenación
"fut" + false; // "futfalse"

// string + número -> concatenación
"2" + 2; // "22"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Sustracción (`-`)](/es/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [División (`/`)](/es/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplicación (`*`)](/es/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Resto (`%`)](/es/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponenciación (`**`)](/es/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Incremento (`++`)](/es/docs/Web/JavaScript/Reference/Operators/Increment)
- [Decremento (`--`)](/es/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Negación unaria (`-`)](/es/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unario más (`+`)](/es/docs/Web/JavaScript/Reference/Operators/Unary_plus)
