---
title: Math.hypot()
slug: Web/JavaScript/Reference/Global_Objects/Math/hypot
---

{{JSRef}}

La función **`Math.hypot()`** retorna la raíz cuadrada de la suma de los cuadrados de sus argumentos, es decir:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.hypot</mo><mo stretchy="false">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo>,</mo><mo>…</mo><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><msqrt><mrow><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msubsup><mi>v</mi><mi>i</mi><mn>2</mn></msubsup></mrow></msqrt><mo>=</mo><msqrt><mrow><msubsup><mi>v</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>v</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mo>…</mo><mo>+</mo><msubsup><mi>v</mi><mi>n</mi><mn>2</mn></msubsup></mrow></msqrt></mrow></semantics></math>

{{EmbedInteractiveExample("pages/js/math-hypot.html")}}

## Sintaxis

```
Math.hypot(valor1, valor2, ..., valorN)
```

### Parámetros

- `Valor1, Valor2, ...`
  - : Números.

### Valor de Retorno

La raíz cuadrada de la suma de los cuadrados de los argumentos proporcionados. Si tan sólo uno de los argumentos no pudiese ser convertido a un número, se retornaría {{jsxref("NaN")}}.

## Descripción

Para calcular la hipotenusa de un triángulo rectángulo, o la magnitud de un número complejo, se usa el Teorema de Pitágoras, representado en la siguiente fórmula `Math.sqrt(v1*v1 + v2*v2)` donde _v1_ y _v2_ son, o los catetos del triángulo, o los valores reales y complejos usados para hallar la mencionada magnitud. Para calcular distancias de dos o más dimensiones, simplemente añade más valores al cuadrado (multiplicado por sí mismo) dentro de el método `sqrt()` del objeto `Math`, algo como: `Math.sqrt(v1*v1 + v2*v2 + v3*v3 + v4*v4)`.

Esta función lo hace un poco más fácil y rápido, sólo coloca: `Math.hypot(v1, v2)` , o `Math.hypot(v1, v2, v3, v4, ...)` .

Esto también evita un problema si la magnitud de tus números es muy elevada. El número más largo que puedes representar en JavaScript es `Number.MAX_VALUE = 1.797...e+308` . Si tus números son mayores que 1e154, tomando el cuadrado de esos valores resultaría en infinito destruyendo así tus resultados. Por ejemplo, `Math.sqrt(1e200*1e200 + 1e200*1e200) = Infinito`. Si usas `hypot()` en su lugar, tú obtendrías un buen resultado `Math.hypot(1e200, 1e200) = 1.4142...e+200` . Eso también es verdad con números demasiados pequeños. `Math.sqrt(1e-200*1e-200 + 1e-200*1e-200) = 0`, pero si en su lugar, usamos `Math.hypot(1e-200, 1e-200) = 1.4142...e-200`, obtendríamos un buen resultado una vez más.

Debido a que `hypot()` es un método estático de `Math`, siempre úsalo como `Math.hypot()`, en lugar de un método del objeto `Math` que hayas creado (`Math` no es un constructor).

Si ningún argumento es provisto, el resultado es 0.

Con sólo un argumento, `Math.hypot()` retornaría lo mismo que `Math.abs()`.

## Ejemplos

### Usando `Math.hypot()`

```js
Math.hypot(3, 4); // 5
Math.hypot(3, 4, 5); // 7.0710678118654755
Math.hypot(); // 0
Math.hypot(NaN); // NaN
Math.hypot(3, 4, "foo"); // NaN, +'foo' => NaN
Math.hypot(3, 4, "5"); // 7.0710678118654755, +'5' => 5
Math.hypot(-3); // 3, lo mismo que Math.abs(-3)
```

## Polyfill

Esto puede ser emulado usando la siguiente función:

```js
Math.hypot =
  Math.hypot ||
  function () {
    var y = 0,
      i = arguments.length;
    while (i--) y += arguments[i] * arguments[i];
    return Math.sqrt(y);
  };
```

Un polyfill que evita subdesbordamientos (underflows) y desbordamientos (overflows):

```js
Math.hypot = function (x, y) {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=896264#c28
  var max = 0;
  var s = 0;
  for (var i = 0; i < arguments.length; i += 1) {
    var arg = Math.abs(Number(arguments[i]));
    if (arg > max) {
      s *= (max / arg) * (max / arg);
      max = arg;
    }
    s += arg === 0 && max === 0 ? 0 : (arg / max) * (arg / max);
  }
  return max === 1 / 0 ? 1 / 0 : max * Math.sqrt(s);
};
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
