---
title: Math
slug: Web/JavaScript/Reference/Global_Objects/Math
---

{{JSRef}}

**`Math`** es un objeto incorporado que tiene propiedades y métodos para constantes y funciones matemáticas. No es un objeto de función.

**`Math`** funciona con el tipo {{jsxref("Number")}}. No funciona con {{jsxref("BigInt")}}.

## Descripción

A diferencia de los demás objetos globales, el objeto `Math` no se puede editar. Todas las propiedades y métodos de `Math` son estáticos. Usted se puede referir a la constante _pi_ como `Math.PI` y puede llamar a la función seno como `Math.sin(x)`, donde `x` es el argumento del método. Las constantes se definen con la precisión completa de los números reales en JavaScript.

## Propiedades

- {{jsxref("Math.E")}}
  - : Constante de Euler, la base de los logaritmos naturales, aproximadamente 2.718.
- {{jsxref("Math.LN2")}}
  - : Logaritmo natural de 2, aproximadamente 0.693.
- {{jsxref("Math.LN10")}}
  - : Logaritmo natural de 10, aproximadamente 2.303.
- {{jsxref("Math.LOG2E")}}
  - : Logaritmo de E con base 2, aproximadamente 1.443.
- {{jsxref("Math.LOG10E")}}
  - : Logaritmo de E con base 10, aproximadamente 0.434.
- {{jsxref("Math.PI")}}
  - : Ratio de la circunferencia de un circulo respecto a su diámetro, aproximadamente 3.14159.
- {{jsxref("Math.SQRT1_2")}}
  - : Raíz cuadrada de 1/2; Equivalentemente, 1 sobre la raíz cuadrada de 2, aproximadamente 0.707.
- {{jsxref("Math.SQRT2")}}
  - : Raíz cuadrada de 2, aproximadamente 1.414.

## Métodos

> **Nota:** Tenga en cuenta que las funciones trigonométricas (`sin()`, `cos()`, `tan()`, `asin()`, `acos()`, `atan()`, `atan2()`) devuelven ángulos en radianes. Para convertir radianes a grados, divida por `(Math.PI / 180)`, y multiplique por esto para convertir a la inversa.

> **Nota:** Tenga en cuenta que muchas de las funciones matemáticas tienen una precisión que es dependiente de la implementación. Esto significa que los diferentes navegadores pueden dar un resultado diferente, e incluso el mismo motor de JS en un sistema operativo o arquitectura diferente puede dar resultados diferentes.

- {{jsxref("Global_Objects/Math/abs", "Math.abs(x)")}}
  - : Devuelve el valor absoluto de un número.
- {{jsxref("Global_Objects/Math/acos", "Math.acos(x)")}}
  - : Devuelve el arco coseno de un número.
- {{jsxref("Global_Objects/Math/acosh", "Math.acosh(x)")}}
  - : Devuelve el arco coseno hiperbólico de un número.
- {{jsxref("Global_Objects/Math/asin", "Math.asin(x)")}}
  - : Devuelve el arco seno de un número.
- {{jsxref("Global_Objects/Math/asinh", "Math.asinh(x)")}}
  - : Devuelve el arco seno hiperbólico de un número.
- {{jsxref("Global_Objects/Math/atan", "Math.atan(x)")}}
  - : Devuelve el arco tangente de un número.
- {{jsxref("Global_Objects/Math/atanh", "Math.atanh(x)")}}
  - : Devuelve el arco tangente hiperbólico de un número.
- {{jsxref("Global_Objects/Math/atan2", "Math.atan2(y, x)")}}
  - : Devuelve el arco tangente del cuociente de sus argumentos.
- {{jsxref("Global_Objects/Math/cbrt", "Math.cbrt(x)")}}
  - : Devuelve la raíz cúbica de un número.
- {{jsxref("Global_Objects/Math/ceil", "Math.ceil(x)")}}
  - : Devuelve el entero más pequeño mayor o igual que un número.
- {{jsxref("Global_Objects/Math/clz32", "Math.clz32(x)")}}
  - : Devuelve el número de ceros iniciales de un entero de 32 bits.
- {{jsxref("Global_Objects/Math/cos", "Math.cos(x)")}}
  - : Devuelve el coseno de un número.
- {{jsxref("Global_Objects/Math/cosh", "Math.cosh(x)")}}
  - : Devuelve el coseno hiperbólico de un número.
- {{jsxref("Global_Objects/Math/exp", "Math.exp(x)")}}
  - : Devuelve `Ex`, donde _x_ es el argumento, y `E` es la constante de Euler (2.718...), la base de los logaritmos naturales.
- {{jsxref("Global_Objects/Math/expm1", "Math.expm1(x)")}}
  - : Devuelve ex - 1.
- {{jsxref("Global_Objects/Math/floor", "Math.floor(x)")}}
  - : Devuelve el mayor entero menor que o igual a un número.
- {{jsxref("Global_Objects/Math/fround", "Math.fround(x)")}}
  - : Devuelve la representación flotante de precisión simple más cercana de un número.
- {{jsxref("Global_Objects/Math/hypot", "Math.hypot([x[, y[, …]]])")}}
  - : Devuelve la raíz cuadrada de la suma de los cuadrados de sus argumentos.
- {{jsxref("Global_Objects/Math/imul", "Math.imul(x, y)")}}
  - : Devuelve el resultado de una multiplicación de enteros de 32 bits.
- {{jsxref("Global_Objects/Math/log", "Math.log(x)")}}
  - : Devuelve el logaritmo natural (log, también ln) de un número.
- {{jsxref("Global_Objects/Math/log1p", "Math.log1p(x)")}}
  - : Devuelve el logaritmo natural de x + 1 (loge, también ln) de un número.
- {{jsxref("Global_Objects/Math/log10", "Math.log10(x)")}}
  - : Devuelve el logaritmo en base 10 de x.
- {{jsxref("Global_Objects/Math/log2", "Math.log2(x)")}}
  - : Devuelve el logaritmo en base 2 de x.
- {{jsxref("Global_Objects/Math/max", "Math.max([x[, y[, …]]])")}}
  - : Devuelve el mayor de cero o más números.
- {{jsxref("Global_Objects/Math/min", "Math.min([x[, y[, …]]])")}}
  - : Devuelve el más pequeño de cero o más números.
- {{jsxref("Global_Objects/Math/pow", "Math.pow(x, y)")}}
  - : Las devoluciones de base a la potencia de exponente, que es, baseexponent.
- {{jsxref("Global_Objects/Math/random", "Math.random()")}}
  - : Devuelve un número pseudo-aleatorio entre 0 y 1.
- {{jsxref("Global_Objects/Math/round", "Math.round(x)")}}
  - : Devuelve el valor de un número redondeado al número entero más cercano.
- {{jsxref("Global_Objects/Math/sign", "Math.sign(x)")}}
  - : Devuelve el signo de la x, que indica si x es positivo, negativo o cero.
- {{jsxref("Global_Objects/Math/sin", "Math.sin(x)")}}
  - : Devuelve el seno de un número.
- {{jsxref("Global_Objects/Math/sinh", "Math.sinh(x)")}}
  - : Devuelve el seno hiperbólico de un número.
- {{jsxref("Global_Objects/Math/sqrt", "Math.sqrt(x)")}}
  - : Devuelve la raíz cuadrada positiva de un número.
- {{jsxref("Global_Objects/Math/tan", "Math.tan(x)")}}
  - : Devuelve la tangente de un número.
- {{jsxref("Global_Objects/Math/tanh", "Math.tanh(x)")}}
  - : Devuelve la tangente hiperbólica de un número.
- Math.toSource() {{non-standard_inline}}
  - : Devuelve la cadena "`Math`".
- {{jsxref("Global_Objects/Math/trunc", "Math.trunc(x)")}}
  - : Devuelve la parte entera del número x, la eliminación de los dígitos fraccionarios.

## Extendiendo el objeto `Math`

Como muchos de los objetos incluidos en JavaScript, el objeto `Math` puede ser extendido con propiedades y métodos personalizados. Para extender el objeto `Math` no se debe usar 'prototype'. Es posible extender directamente `Math`:

```js
Math.propName = propValue;
Math.methodName = methodRef;
```

Como demostración, el siguiente ejemplo agrega un método al objeto `Math` para calcular el _máximo común divisor_ de una lista de argumentos.

```js
/* Función variádica -- Retorna el máximo común divisor de una lista de argumentos */
Math.gcd = function () {
  if (arguments.length == 2) {
    if (arguments[1] == 0) return arguments[0];
    else return Math.gcd(arguments[1], arguments[0] % arguments[1]);
  } else if (arguments.length > 2) {
    var result = Math.gcd(arguments[0], arguments[1]);
    for (var i = 2; i < arguments.length; i++)
      result = Math.gcd(result, arguments[i]);
    return result;
  }
};
```

Pruébalo:

```js
console.log(Math.gcd(20, 30, 15, 70, 40)); // `5`
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Number")}}
