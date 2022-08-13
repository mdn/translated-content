---
title: Math.cosh()
slug: Web/JavaScript/Reference/Global_Objects/Math/cosh
tags:
  - JavaScript
  - Math
  - Method
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/cosh
---
{{JSRef}}

Die **`Math.cosh()`** Funktion gibt den Cosinus Hyperbolicus einer Zahl zurück. Dieser kann mit dem Einsatz der {{jsxref("Math.E", "Eulerschen Zahl", "", 1)}} folgendermaßen berechnet werden:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mo lspace="0em" rspace="thinmathspace">Math.cosh(x)</mo></mstyle><mo>=</mo><mfrac><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><msup><mi>e</mi><mrow><mo>-</mo><mi>x</mi></mrow></msup></mrow><mn>2</mn></mfrac></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.cosh(x)}} = \frac{e^x + e^{-x}}{2}</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-cosh.html")}}

## Syntax

    Math.cosh(x)

### Parameter

- `x`
  - : Eine Zahl.

### Rückgabewert

Der hyperbolische Cosinus der übergebenen Zahl.

## Beschreibung

Weil `cosh()` eine statische Funktion von `Math` ist, wird es immer als `Math.cosh()` eingesetzt`,` jedoch nicht als Methode eines erzeugten `Math` Objektes (`Math` ist kein Konstruktor).

## Beispiele

### Einsatz von `Math.cosh()`

```js
Math.cosh(0);  // 1
Math.cosh(1);  // 1.5430806348152437
Math.cosh(-1); // 1.5430806348152437
```

## Polyfill

Diese Funktion kann mit Hilfe der Funktion {{jsxref("Math.exp()")}} emuliert werden:

```js
Math.cosh = Math.cosh || function(x) {
  return (Math.exp(x) + Math.exp(-x)) / 2;
}
```

Oder nur mit einem Aufruf der {{jsxref("Math.exp()")}} Funktion:

```js
Math.cosh = Math.cosh || function(x) {
  var y = Math.exp(x);
  return (y + 1 / y) / 2;
};
```

## Spezifikationen

| Spezifikation                                                            | Status                       | Kommentar            |
| ------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES6', '#sec-math.cosh', 'Math.cosh')}}     | {{Spec2('ES6')}}         | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-math.cosh', 'Math.cosh')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Math.cosh")}}

## Siehe auch

- {{jsxref("Math.acosh()")}}
- {{jsxref("Math.asinh()")}}
- {{jsxref("Math.atanh()")}}
- {{jsxref("Math.sinh()")}}
- {{jsxref("Math.tanh()")}}
