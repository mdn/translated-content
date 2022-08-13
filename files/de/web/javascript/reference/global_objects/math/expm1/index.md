---
title: Math.expm1()
slug: Web/JavaScript/Reference/Global_Objects/Math/expm1
tags:
  - JavaScript
  - Math
  - Method
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/expm1
---
{{JSRef}}

Die **`Math.expm1()`** Funktion gibt `ex - 1` zurück, wobei `x` der Parameter ist. `e` ist die {{jsxref("Math.E", "Eulersche Zahl", "", 1)}}, die Basis des natürlichen Logarithmus.

{{EmbedInteractiveExample("pages/js/math-expm1.html")}}

## Syntax

    Math.expm1(x)

### Parameter

- `x`
  - : Eine Zahl.

### Rückgabewert

Die Zahl, die `ex - 1` repräsentiert, wobei `e` die {{jsxref("Math.E", "Eulersche Zahl", "", 1)}} und `x` die übergebene Zahl ist.

## Beschreibung

Weil `expm1()` eine statische Funktion von `Math` ist, wird es immer als ` Math.``expm1``() ` eingesetzt`,` jedoch nicht als Methode eines erzeugten `Math` Objektes (`Math` ist kein Konstruktor).

## Beispiele

### Einsatz von `Math.expm1()`

```js
Math.expm1(-1); // -0.6321205588285577
Math.expm1(0);  // 0
Math.expm1(1);  // 1.718281828459045
```

## Polyfill

Diese Funktion kann mit Hilfe der Funktion {{jsxref("Math.exp()")}} emitiert werden:

```js
Math.expm1 = Math.expm1 || function(x) {
  return Math.exp(x) - 1;
};
```

## Spezifikationen

| Spezifikation                                                                | Status                       | Comment              |
| ---------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES6', '#sec-math.expm1', 'Math.expm1')}}         | {{Spec2('ES6')}}         | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-math.expm1', 'Math.expm1')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Math.expm1")}}

## Siehe auch

- {{jsxref("Math.E")}}
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
