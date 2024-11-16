---
title: BigInt
slug: Web/JavaScript/Reference/Global_Objects/BigInt
l10n:
  sourceCommit: e7fab5265b54dc9faeff7e8cf4972cc171ec856b
---

{{JSRef}}

Los valores `BigInt` representan valores numéricos que son [muy grandes](/es/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) para ser representados por el {{Glossary("Primitive", "primitivo")}} `number`.

## Descripción

Un **valor BigInt**, a veces también llamado solamente **BigInt**, es un {{Glossary("Primitive", "primitivo")}} `bigint`, creado al anexar una `n` al final de un literal entero o llamando a la función `BigInt()` (sin el operador `new`) y dándole un valor ded entero o un valor de cadena.

```js
const previouslyMaxSafeInteger = 9007199254740991n;

const alsoHuge = BigInt(9007199254740991);
// 9007199254740991n

const hugeString = BigInt("9007199254740991");
// 9007199254740991n

const hugeHex = BigInt("0x1fffffffffffff");
// 9007199254740991n

const hugeOctal = BigInt("0o377777777777777777");
// 9007199254740991n

const hugeBin = BigInt(
  "0b11111111111111111111111111111111111111111111111111111",
);
// 9007199254740991n
```

Los valores BigInt son similares a los valores Number de algunas maneras, per también difieren en algunos conceptos clave: Un valor BigInt no puede ser usado con métodos del objeto integrado [`Math`](/es/docs/Web/JavaScript/Reference/Global_Objects/Math) y no puede ser mezclado con un valor numérico en operaciónes; tienen que ser convertidos al mismo tipo. Tenga cuidado al convertir valores de números a BigInt y viceversa varias veces ya que la precisión de un valor BigInt puede perderse cuando se lo fuerza ser un valor numérico.

### Información del tipo

Cuando se compara con `typeof`, un valor BigInt (el primitivo `bigint`) dará `"bigint"`:

```js
typeof 1n === "bigint"; // true
typeof BigInt("1") === "bigint"; // true
```

Un valor BigInt también se puede tomar como un `Object`:

```js
typeof Object(1n) === "object"; // true
```

### Operadores

La mayoría de los operadores soportan BigInts, sin embargo, la mayoría no permiten la mezcla de tipos entre operandos; ambos operandos deben ser BigInt o ninguno.

- [Operadores aritméticos](/es/docs/Web/JavaScript/Reference/Operators#arithmetic_operators): `+`, `-`, `*`, `/`, `%`, `**`
- [Operadores bit a bit](/es/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators): `>>`, `<<`, `&`, `|`, `^`, `~`
- [Negación unaria (`-`)](/es/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Incremento/decremento](/es/docs/Web/JavaScript/Reference/Operators#increment_and_decrement): `++`, `--`

Los operadores que devuelven boleanos permiten mezclar números y BigInts como operandos:

- [Operadores relacionales](/es/docs/Web/JavaScript/Reference/Operators#relational_operators) y [operadores de igualdad](/es/docs/Web/JavaScript/Reference/Operators#equality_operators): `>`, `<`, `>=`, `<=`, `==`, `!=`, `===`, `!==`
- Los [operadores lógicos](/es/docs/Web/JavaScript/Reference/Operators#binary_logical_operators) solo se basan en [veracidad](/es/docs/Glossary/Truthy) de los operandos.

Un par de operadores no admiten BigInt en absoluto:

- El [unario más (`+`)](/es/docs/Web/JavaScript/Reference/Operators/Unary_plus) no puede ser soportado por conflictos con el uso de asm.js, así que ha sido omitido [para no causar errores en asm.js](https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs).
- El operador de [desplazamiento a al derecha sin signo (`>>>`)](/es/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) es el único operador bit a bit que no está soportado ya que todos los valores BigInt están firmados.

Casos especiales:

- La suma (`+`) que involucra una cadena y un BigInt devuelve una cadena.
- La división (`/`) trunca los componentes fraccionarios hacia cero, ya que BigInt no puede representar cantidades fraccionarias.

```js
const previousMaxSafe = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
const maxPlusOne = previousMaxSafe + 1n; // 9007199254740992n
const theFuture = previousMaxSafe + 2n; // 9007199254740993n, esto ahora funciona!
const multi = previousMaxSafe * 2n; // 18014398509481982n
const subtr = multi - 10n; // 18014398509481972n
const mod = multi % 10n; // 2n
const bigN = 2n ** 54n; // 18014398509481984n
bigN * -1n; // -18014398509481984n
const expected = 4n / 2n; // 2n
const truncated = 5n / 2n; // 2n, not 2.5n
```

### Comparaciones

Un valor BigInt no es estrictamente igual a un valor numérico, pero lo es en términos generales:

```js
0n === 0; // false
0n == 0; // true
```

Un valor numérico y un valor BigInt se pueden comparar como de costumbre:

```js
1n < 2; // true
2n > 1; // true
2 > 2; // false
2n > 2; // false
2n >= 2; // true
```

Los valores BigInt y los valores numéricos se pueden mezclar en arrays y ser ordenados:

```js
const mixed = [4n, 6, -12n, 10, 4, 0, 0n];
// [4n, 6, -12n, 10, 4, 0, 0n]

mixed.sort(); // comportamiento de orden por defecto
// [ -12n, 0, 0n, 10, 4n, 4, 6 ]

mixed.sort((a, b) => a - b);
// no funciona ya que la sustracción no funciona con tipos de datos mezclados
// TypeError: can't convert BigInt value to Number value

// orden con un comparador numérico apropiado
mixed.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
// [ -12n, 0, 0n, 4n, 4, 6, 10 ]
```

Tenga en cuenta que las comparaciones con valores BigInt envueltos como un `Object` actúan como con otros objetos, indicando solo igualdad cuando se compara la misma instancia de objeto:

```js
Object(0n) === 0n; // false
Object(0n) === Object(0n); // false

const o = Object(0n);
o === o; // true
```

Dado que la coerción entre valores numéricos y valores BigInt puede provocar una pérdida de precisión, se recomienda lo siguiente:

- Utilice únicamente un valor BigInt cuando sea razonable esperar valores superiores a 2<sup>53</sup>.
- No fuerces entre valores BigInt y valores numéricos.

### Condicionales

Un valor BigInt sigue las mismas reglas de conversión que Numbers cuando:

- Es converido en un [`Boolean`](/es/docs/Web/JavaScript/Reference/Global_Objects/Boolean): mediante la función [`Boolean`](/es/docs/Web/JavaScript/Reference/Global_Objects/Boolean);
- cuando se usa con [operadores lógicos](/es/docs/Web/JavaScript/Reference/Operators) `||`, `&&` y `!`; or
- dentro de una prueba condicional como una declaración [`if`](/es/docs/Web/JavaScript/Reference/Statements/if...else).

Es decir, solo `0n` es [falso](/es/docs/Glossary/Falsy); todo el resto es [verdadero](/es/docs/Glossary/Truthy).

```js
if (0n) {
  console.log("¡Hola desde el if!");
} else {
  console.log("¡Hola desde el else!");
}
// "¡Hola desde el else!"

0n || 12n; // 12n
0n && 12n; // 0n
Boolean(0n); // false
Boolean(12n); // true
!12n; // false
!0n; // true
```

### Criptografía

Las operaciones admitidas en valores BigInt no son de tiempo constante y, por lo tanto, están abiertas a [ataques de tiempo](https://en.wikipedia.org/wiki/Timing_attack). Por lo tanto, los BigInt de JavaScript podría ser peligroso para su uso en criptografía sin factores atenuantes. Como ejemplo muy genérico, un atacante podría medir la diferencia de tiempo entre `101n ** 65537n` y `17n ** 9999n` y deducir la magnitud de los secretos, como las claves privadas en función del tiempo transcurrido. Si aún tiene que usar BigInts, consulte las [preguntas frecuentes de ataques de sincronización](https://timing.attacks.cr.yp.to/programming.html) para obtener consejos generales sobre el problema.

### Uso dentro de JSON

Usar [`JSON.stringify()`](/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) con cualquier valor BigInt generará un `TypeError`, ya que los valores BigInt no se serializan en JSON por defecto. Sin embargo, `JSON.stringify()` deja una puerta trasera para valores de BigInt: intentaría llamar al método `toJSON()` de BigInt (no lo hace para ningún otro método primitivo). Por lo tanto, puede implementar su propio método `toJSON()` (que es uno de los pocos casos en los que no se desaconseja explícitamente aplicar parches a objetos integrados):

```js
BigInt.prototype.toJSON = function () {
  return { $bigint: this.toString() };
};
```

En lugar de generar un error, `JSON.stringify()` ahora produce una cadena como esta:

```js
console.log(JSON.stringify({ a: 1n }));
// {"a":{"$bigint":"1"}}
```

Si no desea parchear `BigInt.prototype`, puede utilizar el parámetro [`replacer`](/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#the_replacer_parameter) de `JSON.stringify` para serializar valores BigInt:

```js
const replacer = (key, value) =>
  typeof value === "bigint" ? { $bigint: value.toString() } : value;

const data = {
  number: 1,
  big: 18014398509481982n,
};
const stringified = JSON.stringify(data, replacer);

console.log(stringified);
// {"number":1,"big":{"$bigint":"18014398509481982"}}
```

Puedes usar entonces el parametro [`reviver`](/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#using_the_reviver_parameter) de `JSON.parse` para manejarlos:

```js
const reviver = (key, value) =>
  value !== null &&
  typeof value === "object" &&
  "$bigint" in value &&
  typeof value.$bigint === "string"
    ? BigInt(value.$bigint)
    : value;

const payload = '{"number":1,"big":{"$bigint":"18014398509481982"}}';
const parsed = JSON.parse(payload, reviver);

console.log(parsed);
// { number: 1, big: 18014398509481982n }
```

> [!NOTE]
> Si bien es posible hacer el reemplazo de `JSON.stringify()` genérico y propiamente serializar los valores BigInt para todos los objetos, el reviver `JSON.parse()` tiene que ser específico para la forma de carga útil esperada, ya que la serialización tiene _pérdidas_: no es posible distinguir entre una cadena que representa un BigInt y una cadena normal.
>
> Además, el ejemplo de arriba crea un objeto entero en el replacing y reviving, lo que probablemente tenga implicaciónes de rendimiento y almacenamiento para objetos más grandes que contienen muchos BigInts. Si conoces la forma de carga útil esperada, puede ser mejor simplemente serializarlas como strings y revivirlas basadas en el nombre de la key.

De hecho, JSON permite números literales que son arbitrariamente largos; simplemente no se pueden analizar con total precisión en JavaScript. Si se está comunicando con otro programa en un lenguaje que admite enteros más largos (como enteros de 64 bits) y desea transmitir BigInt como un número en el JSON en lugar de una cadena de texto en el JSON, consulte sobre la [Serialización de números sin pérdida](/es/docs/Web/JavaScript/Reference/Global_Objects/JSON#using_json_numbers).

### Coerción BigInt

Muchas operaciones integradas que esperan que BigInts primero coaccionen sus argumentos a BigInts. [La operación](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tobigint) se puede resumir de la siguiente manera:

- Los BigInts se devuelven tal cual.
- [`undefined`](/es/docs/Web/JavaScript/Reference/Global_Objects/undefined) y [`null`](/es/docs/Web/JavaScript/Reference/Operators/null) lanzan un {{jsxref("TypeError")}}.
- `true` se convierte en `1n`; `false` se convierte en `0n`.
- Las cadenas se convierten analizándolas como si contuvieran un literal entero. Cualquier error en el análisis da como resultado un {{jsxref("SyntaxError")}}. La sintaxis es un subconjunto de [cadenas numéricas literales](/es/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), donde no se permiten puntos decimales ni indicadores de exponentes.
- Los [Number](/es/docs/Web/JavaScript/Reference/Global_Objects/Number) lanzan un {{jsxref("TypeError")}} para evitar una coerción implícita no intencionada que provoque una pérdida de precisión.
- Los [Symbol](/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol) lanzan un {{jsxref("TypeError")}}.
- Los objetos primero [se convierten en primitivos](/es/docs/Web/JavaScript/Data_structures#primitive_coercion) llamando a sus métodos [`[@@toPrimitive]()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (con `"number"` como una sugerencia), `valueOf()`, y `toString()`, en ese orden. La primitiva resultante se convierte luego en BigInt.

La mejor manera de lograr casi el mismo efecto en JavaScript es a través de la función [`BigInt()`](/es/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt): `BigInt(x)` usa el mismo algoritmo para convertir `x` excepto que los [Number](/es/docs/Web/JavaScript/Reference/Global_Objects/Number) no lanzan un {{jsxref("TypeError")}} pero son convertidos en BigInts si son enteros.

Tenga en cuenta que las operaciones integradas que esperan BigInts a menudo truncan el BigInt a un ancho fijo después de la coerción. Esto incluye {{jsxref("BigInt.asIntN()")}}, {{jsxref("BigInt.asUintN()")}} y los métodos {{jsxref("BigInt64Array")}} y {{jsxref("BigUint64Array")}}.

## Constructor

- {{jsxref("BigInt/BigInt", "BigInt()")}}
  - : Crea un nuevo valor BigInt.

## Métodos estáticos

- {{jsxref("BigInt.asIntN()")}}
  - : Sujeta un valor BigInt a un valor entero con signo y devuelve ese valor.
- {{jsxref("BigInt.asUintN()")}}
  - : Sujeta un valor BigInt a un valor entero sin signo y devuelve ese valor.

## Propiedades de instancia

Estas propiedades están definidas en `BigInt.prototype` y compartidas por todas las instancias de `BigInt`.

- {{jsxref("Object/constructor", "BigInt.prototype.constructor")}}
  - : La función constructora que creó el objeto de instancia. Por las instancias `BigInt`, el valor inicial es constructor {{jsxref("BigInt/BigInt", "BigInt")}}.
- `BigInt.prototype[@@toStringTag]`
  - : El valor inicial de la propiedad [`@@toStringTag`](/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) es la cadena `"BigInt"`. Esta propiedad es usada en {{jsxref("Object.prototype.toString()")}}. Sin embargo, debido a que `BigInt` también tiene si propio método [`toString()`](/es/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString), esta propiedad no es usada a menos que llame a [`Object.prototype.toString.call()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Function/call) con un BigInt como `thisArg`.

## Métodos de instancia

- {{jsxref("BigInt.prototype.toLocaleString()")}}
  - : Devuelve una cadena con una representación sensible al idioma de este valor BigInt. Anula el método [`Object.prototype.toLocaleString()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString).
- {{jsxref("BigInt.prototype.toString()")}}
  - : Devuelve una cadena que representa este valor BigInt en la base especificada. Anula el método [`Object.prototype.toString()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/toString).
- {{jsxref("BigInt.prototype.valueOf()")}}
  - : Devuelve este valor BigInt. Anula el método [`Object.prototype.valueOf()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf).

## Ejemplos

### Calculando primos

```js
// Retorna true si el BigInt pasado es un número primo
function isPrime(p) {
  for (let i = 2n; i * i <= p; i++) {
    if (p % i === 0n) return false;
  }
  return true;
}

// Recive un BigInt como argumento, devuelve el número primo más cercano para arriba como un valor BigInt
function nthPrime(nth) {
  let maybePrime = 2n;
  let prime = 0n;

  while (nth >= 0n) {
    if (isPrime(maybePrime)) {
      nth--;
      prime = maybePrime;
    }
    maybePrime++;
  }

  return prime;
}

nthPrime(20n);
// 73n
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [`Number`](/es/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [`Number.MAX_SAFE_INTEGER`](/es/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)
