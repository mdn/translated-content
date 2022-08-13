---
title: Math.exp()
slug: Web/JavaScript/Reference/Global_Objects/Math/exp
tags:
  - JavaScript
  - Math
  - Method
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/exp
---
{{JSRef}}

Die **`Math.exp()`** Funktion gibt `ex` zurück, wobei `x` der Parameter ist. `e` ist die {{jsxref("Math.E", "Eulersche Zahl", "", 1)}}, die Basis des natürlichen Logarithmus.

{{EmbedInteractiveExample("pages/js/math-exp.html")}}

## Syntax

    Math.exp(x)

### Parameter

- `x`
  - : Eine Zahl.

### Rückgabewert

Die Zahl, die `ex` repräsentiert, wobei `e` die {{jsxref("Math.E", "Eulersche Zahl", "", 1)}} ist und `x` die übergebene Zahl ist.

## Beschreibung

Weil `exp()` eine statische Funktion von `Math` ist, wird es immer als ` Math.``exp``() ` eingesetzt`,` jedoch nicht als Methode eines erzeugten `Math` Objektes (`Math` ist kein Konstruktor).

## Beispiele

### Einsatz von `Math.exp()`

```js
Math.exp(-1); // 0.36787944117144233
Math.exp(0);  // 1
Math.exp(1);  // 2.718281828459045
```

## Spezifikationen

| Spezifikation                                                        | Status                       | Comment                                               |
| -------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                             | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.2.8', 'Math.exp')}} | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-math.exp', 'Math.exp')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-math.exp', 'Math.exp')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Math.exp")}}

## Siehe auch

- {{jsxref("Math.E")}}
- {{jsxref("Math.expm1()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
