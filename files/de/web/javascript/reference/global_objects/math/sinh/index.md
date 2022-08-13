---
title: Math.sinh()
slug: Web/JavaScript/Reference/Global_Objects/Math/sinh
tags:
  - ECMAScript 2015
  - JavaScript
  - Math
  - Method
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/sinh
---
{{JSRef}}

Die **`Math.sinh()`** Funktion gibt den Sinus Hyperbolicus einer Zahl zurück. Dieser kann mit dem Einsatz der {{jsxref("Math.E", "Eulerschen Zahl", "", 1)}} folgendermaßen berechnet werden:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mo lspace="0em" rspace="thinmathspace">Math.sinh(x)</mo></mstyle><mo>=</mo><mfrac><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>-</mo><msup><mi>e</mi><mrow><mo>-</mo><mi>x</mi></mrow></msup></mrow><mn>2</mn></mfrac></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.sinh(x)}} = \frac{e^x - e^{-x}}{2}</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-sinh.html")}}

## Syntax

    Math.sinh(x)

### Parameter

- `x`
  - : Eine Zahl.

### Rückgabewert

Den Sinus Hyperbolicus der übergebenen Zahl.

## Beschreibung

Weil `sinh()` eine statische Funktion von `Math` ist, wird es immer als `Math.sinh()` eingesetzt`,` jedoch nicht als Methode eines erzeugten `Math` Objektes (`Math` ist kein Konstruktor).

## Beispiele

### Einsatz von `Math.sinh()`

```js
Math.sinh(0); // 0
Math.sinh(1); // 1.1752011936438014
```

## Polyfill

Diese Funktion kann mit Hilfe der Funktion {{jsxref("Math.exp()")}} emuliert werden:

```js
Math.sinh = Math.sinh || function(x) {
  return (Math.exp(x) - Math.exp(-x)) / 2;
}
```

Oder nur mit einem Aufruf der {{jsxref("Math.exp()")}} Funktion:

```js
Math.sinh = Math.sinh || function(x) {
  var y = Math.exp(x);
  return (y - 1 / y) / 2;
}
```

## Spezifikationen

| Spezifikation                                                            | Status                       | Kommentar            |
| ------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-math.sinh', 'Math.sinh')}} | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-math.sinh', 'Math.sinh')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Math.sinh")}}

## Siehe auch

- {{jsxref("Math.acosh()")}}
- {{jsxref("Math.asinh()")}}
- {{jsxref("Math.atanh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.tanh()")}}
